<script setup lang="ts">
  import CommandPreview from '@/components/scaffold/CommandPreview.vue'
  import ScaffoldSidebar from '@/components/scaffold/ScaffoldSidebar.vue'
  import { useScaffold } from '@/composables/useScaffold'

  const {
    projectName,
    selections,
    visibleSections,
    getVisibleItems,
    updateSelection,
    command,
    copyCommand,
  } = useScaffold()
</script>

<template>
  <ScaffoldSidebar
    :get-visible-items="getVisibleItems"
    :project-name="projectName"
    :selections="selections"
    :update-selection="updateSelection"
    :visible-sections="visibleSections"
    @update:project-name="projectName = $event"
  />

  <CommandPreview
    :command="command"
    :copy-command="copyCommand"
    :selections="selections"
  />
</template>
