/// <reference types="vitest/config" />
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { content } from './src/content'
import { localizeHtml } from './src/lang'

// Gera /en/index.html (título, descrição e prévia de link em inglês) a partir do index.html.
// No `npm run dev`, /en/ serve o index.html normal e o React troca o idioma pelo endereço.
function englishPage(): Plugin {
  return {
    name: 'portfolio:english-page',
    enforce: 'post',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url && /^\/en(\/|\?|$)/.test(req.url)) req.url = '/'
        next()
      })
    },
    generateBundle(_options, bundle) {
      const page = bundle['index.html']
      if (!page || page.type !== 'asset') this.error('index.html não encontrado no build')
      this.emitFile({
        type: 'asset',
        fileName: 'en/index.html',
        source: localizeHtml(String(page.source), content.en.meta),
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), englishPage()],
  test: {
    // DOM simulado (jsdom) para os testes de componentes com a Testing Library
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
  },
})
