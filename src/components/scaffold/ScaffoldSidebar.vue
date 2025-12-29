<script setup lang="ts">
  import type { StackSection } from '@/data/scaffold'
  import { generateName } from '@/utils/generateName'

  defineProps<{
    projectName: string
    visibleSections: StackSection[]
    selections: Record<string, any>
    updateSelection: (key: string, value: any) => void
    getVisibleItems: (section: StackSection) => any[]
  }>()

  const emit = defineEmits<{
    (e: 'update:projectName', value: string): void
  }>()
</script>

<template>
  <v-main>
    <v-container class="px-5 py-6 h-100 overflow-y-auto">
      <div class="d-flex align-center mb-6">
        <v-avatar class="mr-3" color="primary" size="36">
          <v-icon color="white" icon="devicon-plain:vuetify" size="24" />
        </v-avatar>
        <span class="text-h6 font-weight-bold">Vuetify Create</span>
      </div>

      <div class="mx-auto" style="max-width: 900px;">
        <v-text-field
          append-inner-icon="bi:dice-5-fill"
          class="mb-6"
          density="comfortable"
          hide-details
          label="Project Name"
          :model-value="projectName"
          variant="outlined"
          @click:append-inner="emit('update:projectName', generateName())"
          @update:model-value="emit('update:projectName', $event)"
        />

        <div v-for="section in visibleSections" :key="section.key" class="mb-6">
          <div class="text-caption text-medium-emphasis mb-2 text-uppercase font-weight-bold tracking-wide">
            {{ section.title }}
          </div>

          <v-item-group
            :mandatory="!section.multiple"
            :model-value="selections[section.key]"
            :multiple="section.multiple"
            @update:model-value="(val) => updateSelection(section.key, val)"
          >
            <v-row dense>
              <v-col
                v-for="item in getVisibleItems(section)"
                :key="item.id"
                cols="12"
                md="4"
                sm="6"
              >
                <v-item
                  v-slot="{ isSelected, toggle }"
                  :value="section.multiple ? item.id : item"
                >
                  <v-card
                    class="h-100 d-flex flex-column align-center justify-center pa-4 transition-swing position-relative"
                    :color="isSelected ? 'primary' : 'surface'"
                    flat
                    link
                    :ripple="false"
                    variant="outlined"
                    @click="toggle"
                  >
                    <v-scale-transition>
                      <v-icon
                        v-if="isSelected"
                        class="position-absolute top-0 right-0 ma-2"
                        color="primary"
                        icon="codicon:check"
                        size="20"
                      />
                    </v-scale-transition>

                    <v-icon
                      class="mb-3"
                      :color="isSelected ? 'primary' : 'medium-emphasis'"
                      :icon="item.icon"
                      size="32"
                    />

                    <div
                      class="text-body-2 font-weight-bold text-center mb-1"
                      :class="{ 'text-primary': isSelected, 'text-medium-emphasis': !isSelected }"
                    >
                      {{ item.title }}
                    </div>
                    <div class="text-caption text-medium-emphasis text-center" style="text-wrap: pretty;">
                      {{ item.description }}
                    </div>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-item-group>
        </div>
      </div>
    </v-container>
  </v-main>
</template>
