import type { StackSection } from '@/data/scaffold'
import { sections } from '@/data/scaffold'
import { computed, reactive, ref, watch } from 'vue'

export function useScaffold () {
  const projectName = ref('vuetify-project')

  // Initialize selections with defaults
  // We use a reactive object where keys match section keys
  const selections = reactive<Record<string, any>>({
    template: sections.find(s => s.key === 'template')?.items[0],
    type: sections.find(s => s.key === 'type')?.items[0],
    language: sections.find(s => s.key === 'language')?.items[0],
    routerFlavour: sections.find(s => s.key === 'routerFlavour')?.items[0],
    features: ['eslint', 'mcp', 'pinia'],
    options: [],
    packageManager: sections.find(s => s.key === 'packageManager')?.items[1],
  })

  // Filter sections based on framework choice
  const visibleSections = computed(() => {
    return sections.filter(section => {
      if (section.key === 'language') {
        return selections.template?.id === 'vue'
      }
      if (section.key === 'routerFlavour') {
        return selections.template?.id === 'vue' && (selections.features as string[])?.includes('router')
      }
      return true
    })
  })

  // Filter items within sections (specifically for Features)
  const getVisibleItems = (section: StackSection) => {
    if (section.key !== 'features') {
      return section.items
    }

    return section.items.filter(item => {
      if (item.id === 'vuetify-nuxt-module') {
        return selections.template?.id === 'nuxt'
      }
      if (item.id === 'client-hints') {
        const hasModule = (selections.features as string[])?.includes('vuetify-nuxt-module')
        return selections.template?.id === 'nuxt' && hasModule
      }
      if (item.id === 'router') {
        return selections.template?.id === 'vue'
      }
      return true
    })
  }

  // Handle updates from v-item-group
  const updateSelection = (sectionKey: string, value: any) => {
    selections[sectionKey] = value

    // Custom logic for dependencies
    if (sectionKey === 'features') {
      const currentFeatures = value as string[]
      // If vuetify-nuxt-module is removed, remove client-hints
      if (!currentFeatures.includes('vuetify-nuxt-module') && currentFeatures.includes('client-hints')) {
        selections.features = currentFeatures.filter(f => f !== 'client-hints')
      }
    }
  }

  // Watch for type changes to reset incompatible features
  watch(() => selections.template?.id, newType => {
    if (newType === 'vue') {
      const currentFeatures = selections.features as string[]
      selections.features = currentFeatures.filter(f => !['vuetify-nuxt-module', 'client-hints'].includes(f))
    } else if (newType === 'nuxt') {
      const currentFeatures = selections.features as string[]
      const newFeatures = new Set(currentFeatures)
      newFeatures.add('vuetify-nuxt-module')
      newFeatures.delete('router')
      selections.features = Array.from(newFeatures)
    }
  })

  const command = computed(() => {
    const pm = selections.packageManager?.id || 'npm'
    let cmd = ''
    switch (pm) {
      case 'npm': {
        cmd = 'npm create vuetify'
        break
      }
      case 'yarn': {
        cmd = 'yarn create vuetify'
        break
      }
      case 'pnpm': {
        cmd = 'pnpm create vuetify'
        break
      }
      case 'bun': {
        cmd = 'bun create vuetify'
        break
      }
      case 'deno': {
        cmd = 'deno run -A npm:create-vuetify'
        break
      }
    }

    cmd += '@beta '

    const parts = [cmd]
    if (projectName.value) {
      parts.push(`--name ${projectName.value}`)
    }

    if (selections.type?.value) {
      parts.push(`--type ${selections.type.value}`)
    }

    if (selections.template?.value) {
      parts.push(`--platform ${selections.template.value}`)
    }

    if (selections.template?.id === 'vue' && selections.language?.value === false) {
      parts.push('--no-typescript')
    }

    const features: string[] = []
    const selectedFeatures = selections.features as string[] || []

    // Handle Router
    if (selections.template?.id === 'vue' && selectedFeatures.includes('router') && selections.routerFlavour?.value) {
      features.push(selections.routerFlavour.value as string)
    }

    const featureList = selectedFeatures.filter(f => f !== 'client-hints' && f !== 'router')
    features.push(...featureList)

    if (features.length > 0) {
      parts.push(`--features ${features.join(',')}`)
    }

    if (selectedFeatures.includes('client-hints')) {
      parts.push('--client-hints')
    }

    if (selections.options?.includes('no-install')) {
      parts.push('--no-install')
    }

    return parts.join(' ')
  })

  const copyCommand = () => {
    navigator.clipboard.writeText(command.value)
  }

  return {
    projectName,
    selections,
    visibleSections,
    getVisibleItems,
    updateSelection,
    command,
    copyCommand,
  }
}
