<template>
  <v-container class="h-100 d-flex align-center pa-6 ">
    <v-row align="center" class="flex-column-reverse flex-md-row">
      <v-col cols="12" md="6">
        <div class="text-h6 font-weight-regular">
          Headless. Composable. Extensible.
        </div>

        <h1 class="text-h4 text-md-h2 font-weight-bold mb-6">
          Welcome to Vuetify 0
        </h1>

        <div class="text-body-1 text-medium-emphasis mb-10">
          A meta framework for building UI libraries with lightweight, headless building blocks
        </div>

        <div class="d-flex ga-4 align-center justify-start flex-wrap">
          <v-card
            v-tooltip="{ text: 'Click to copy or select needed manager', location: 'bottom', openDelay: 2000, class: '', theme: 'light' }"
            background-color="transparent"
            border
            class="shrink-0"
            density="compact"
            flat
            rounded="lg"
          >
            <div class="d-flex ga-4 align-center py-2 ps-2 pe-4">
              <v-menu offset="4">
                <template #activator="{ props }">
                  <v-icon-btn
                    cursor="pointer"
                    v-bind="props"
                    height="32"
                    :icon="managerIcon"
                    icon-size="22"
                    rounded="lg"
                    variant="tonal"
                    width="32"
                  />
                </template>
                <v-list density="compact" rounded="lg">
                  <v-list-item
                    v-for="manager in managers"
                    :key="manager.value"
                    :value="manager.value"
                    @click="selectedManger = manager.value, copy()"
                  >
                    <template #prepend>
                      <v-icon size="small">
                        {{ manager.icon }}
                      </v-icon>
                    </template>
                    <v-list-item-title>
                      {{ manager.label }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              <button class="text-mono" @click="copy">
                {{ commands[selectedManger] }}
              </button>
            </div>
          </v-card>

          <span>or</span>

          <v-btn
            border
            class="text-none"
            flat
            href="https://0.vuetifyjs.com/"
            rounded="lg"
            slim
            text="View Documentation"
          >
            <template #prepend>
              <v-icon icon="mdi-book-open-variant" />
            </template>
          </v-btn>
        </div>
      </v-col>

      <v-col class="mx-auto ms-sm-0 me-sm-auto ms-md-auto" cols="6">
        <v-img class="lg-md-auto" max-height="300" position="right" :src="logo" />
      </v-col>
    </v-row>

    <div class="v-bg position-absolute top-0 right-0 left-0 bottom-0">
      <div aria-hidden="true" class="overflow-hidden opacity-20 w-100 h-100" />
    </div>
  </v-container>
  <Footer />
  <v-snackbar-queue v-model="messages" rounded="lg" variant="tonal" />
</template>

<script setup lang="ts">
  import { commands, type Manager, managers } from '@/constants'
  import { computed, shallowRef } from 'vue'
  import { VIconBtn } from 'vuetify/labs/components'
  import logo from '../assets/logo.svg'
  import Footer from './Footer.vue'

  const selectedManger = shallowRef<Manager>('npm')

  const managerIcon = computed(() => {
    return managers.find(m => m.value === selectedManger.value)?.icon
  })

  const messages = shallowRef<{
    text: string
    timeout?: number
  }[]>([])

  function copy () {
    navigator.clipboard.writeText(commands[selectedManger.value])
    messages.value = [{
      text: 'Copied, now paste it to your terminal',
      timeout: 2000,
    }]
  }

</script>
