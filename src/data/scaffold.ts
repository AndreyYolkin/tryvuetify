export interface StackItem {
  id: string
  title: string
  icon: string
  description: string
  value?: string | boolean // For command generation mapping
}

export interface StackSection {
  title: string
  key: string
  multiple?: boolean
  items: StackItem[]
}

export const sections: StackSection[] = [
  {
    title: 'Framework',
    key: 'template',
    items: [
      { id: 'vue', title: 'Vue.js', icon: 'logos:vue', description: 'The progressive JavaScript framework', value: 'vue' },
      { id: 'nuxt', title: 'Nuxt', icon: 'logos:nuxt-icon', description: 'The Intuitive Vue Framework', value: 'nuxt' },
    ],
  },
  {
    title: 'Type',
    key: 'type',
    items: [
      { id: 'vuetify', title: 'Vuetify', icon: 'devicon:vuetify', description: 'Material Design Component Framework', value: 'vuetify' },
      { id: 'vuetify0', title: 'Vuetify0', icon: 'devicon-plain:vuetify', description: 'Headless Vue 3 UI Primitives (Alpha)', value: 'vuetify0' },
    ],
  },
  {
    title: 'Language',
    key: 'language',
    items: [
      { id: 'typescript', title: 'TypeScript', icon: 'logos:typescript-icon', description: 'Strongly typed programming language', value: true },
      { id: 'javascript', title: 'JavaScript', icon: 'logos:javascript', description: 'Lightweight, interpreted, or just-in-time compiled', value: false },
    ],
  },
  {
    title: 'Features',
    key: 'features',
    multiple: true,
    items: [
      { id: 'router', title: 'Router', icon: 'logos:vue', description: 'Client-side routing', value: 'router' },
      { id: 'pinia', title: 'Pinia', icon: 'logos:pinia', description: 'The intuitive store for Vue.js', value: 'pinia' },
      { id: 'i18n', title: 'Vue I18n', icon: 'material-icon-theme:i18n', description: 'Internationalization plugin for Vue.js', value: 'i18n' },
      { id: 'eslint', title: 'ESLint', icon: 'logos:eslint', description: 'Find and fix problems in your JavaScript code', value: 'eslint' },
      { id: 'mcp', title: 'MCP', icon: 'codicon:mcp', description: 'Setup Vuetify MCP server', value: 'mcp' },
      { id: 'vuetify-nuxt-module', title: 'Vuetify Nuxt Module', icon: 'logos:nuxt-icon', description: 'Vuetify integration for Nuxt', value: 'vuetify-nuxt-module' },
      { id: 'client-hints', title: 'Client Hints', icon: 'codicon:device-mobile', description: 'Adaptive SSR support (requires Nuxt Module)', value: 'client-hints' },
    ],
  },
  {
    title: 'Router Flavour',
    key: 'routerFlavour',
    items: [
      { id: 'router', title: 'Vue Router', icon: 'codicon:bracket-dot', description: 'Standard Vue Router integration', value: 'router' },
      { id: 'file-router', title: 'UWR', icon: 'codicon:list-tree', description: 'File system based routing', value: 'file-router' },
    ],
  },
  {
    title: 'Options',
    key: 'options',
    multiple: true,
    items: [
      { id: 'no-install', title: 'Skip Install', icon: 'codicon:wand', description: 'Just generate the project files', value: 'no-install' },
    ],
  },
  {
    title: 'Package Manager',
    key: 'packageManager',
    items: [
      { id: 'npm', title: 'npm', icon: 'logos:npm-icon', description: 'Standard package manager', value: 'npm' },
      { id: 'pnpm', title: 'pnpm', icon: 'logos:pnpm', description: 'Fast, disk space efficient package manager', value: 'pnpm' },
      { id: 'yarn', title: 'Yarn', icon: 'logos:yarn', description: 'Fast, reliable, and secure dependency management', value: 'yarn' },
      { id: 'bun', title: 'Bun', icon: 'logos:bun', description: 'Fast all-in-one JavaScript runtime', value: 'bun' },
      { id: 'deno', title: 'Deno', icon: 'logos:deno', description: 'A modern runtime for JavaScript and TypeScript', value: 'deno' },
    ],
  },
]
