export type Manager = 'npm' | 'pnpm' | 'yarn' | 'bun'

export const managers = [
  {
    value: 'npm',
    label: 'npm',
    icon: 'tabler:brand-npm',
  },
  {
    value: 'pnpm',
    label: 'pnpm',
    icon: 'tabler:brand-pnpm',
  },
  {
    value: 'yarn',
    label: 'yarn',
    icon: 'tabler:brand-yarn',
  },
  {
    value: 'bun',
    label: 'bun',
    icon: 'simple-icons:bun',
  },
] as const

export const commands = {
  pnpm: 'pnpm add @vuetify/v0',
  yarn: 'yarn add @vuetify/v0',
  npm: 'npm install @vuetify/v0',
  bun: 'bun add @vuetify/v0',
  deno: 'deno add npm:@vuetify/v0',
}
