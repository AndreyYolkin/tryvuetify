import { setupLayouts } from 'virtual:generated-layouts'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { routes } from './routes'
import 'unfonts.css'
import './styles/style.css'

export const createApp = ViteSSG(
  App,
  { routes: setupLayouts(routes) },
  ({ app }) => {
    app.use(vuetify)
  },
)
