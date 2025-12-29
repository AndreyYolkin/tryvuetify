<script setup lang="ts">
  defineProps<{
    command: string
    selections: Record<string, any>
    copyCommand: () => void
  }>()
</script>

<template>
  <v-navigation-drawer
    class="border-s"
    color="surface"
    location="right"
    permanent
    width="440"
  >
    <div class="d-flex flex-column justify-center h-100">
      <div class="w-100">
        <div class="text-center mb-6">
          <h1 class="text-h4 font-weight-bold mb-4">You're almost there!</h1>
          <p class="text-body-1 text-medium-emphasis font-weight-regular">
            Run this command to scaffold your Vuetify project click to copy
          </p>
        </div>

        <v-card
          class="mb-8 mx-4"
          color="#1E1E1E"
          elevation="0"
          rounded="lg"
          theme="dark"
          @click="copyCommand"
        >
          <v-card-text class="pa-6">
            <div class="text-body-1 font-weight-medium font-monospace" style="line-height: 1.6; word-break: break-all;">
              <span class="text-primary mr-2 no-select">$</span>
              <span>{{ command }}</span>
            </div>
          </v-card-text>
        </v-card>

        <div class="d-flex justify-center flex-wrap gap-4">
          <v-chip
            v-if="selections.template"
            class="font-weight-medium"
            color="primary"
            prepend-icon="codicon:dashboard"
            size="default"
            variant="flat"
          >
            {{ selections.template.title }}
          </v-chip>
          <v-chip
            v-if="selections.type"
            class="font-weight-medium"
            color="secondary"
            :prepend-icon="selections.type.icon"
            size="default"
            variant="flat"
          >
            {{ selections.type.title }}
          </v-chip>
          <v-chip
            v-if="selections.template?.id === 'vue' && selections.language"
            class="font-weight-medium"
            prepend-icon="codicon:code"
            size="default"
            variant="elevated"
          >
            {{ selections.language.title }}
          </v-chip>
          <v-chip
            v-if="selections.packageManager"
            class="font-weight-medium"
            prepend-icon="codicon:package"
            size="default"
            variant="elevated"
          >
            {{ selections.packageManager.title }}
          </v-chip>
        </div>
      </div>

      <v-footer class="bg-transparent text-center justify-center text-caption text-medium-emphasis py-4 position-absolute bottom-0 w-100">
        Based on Vuetify CLI •
        <a class="text-decoration-none ml-1 text-primary font-weight-medium" href="https://vuetifyjs.com">Documentation</a>
      </v-footer>
    </div>
  </v-navigation-drawer>
</template>

<style scoped>
.gap-4 {
  gap: 16px;
}
.font-monospace {
  font-family: 'SF Mono', 'Roboto Mono', 'Menlo', monospace !important;
}
.no-select {
  user-select: none;
}
</style>
