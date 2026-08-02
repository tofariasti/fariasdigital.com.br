import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vitest/config'
import react from '@vitejs/plugin-react'

const projectRoot = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.resolve(projectRoot, 'public')

/** Serve public folder index.html for directory URLs (Vite SPA fallback would hide them). */
function servePublicDirectoryIndexes(): Plugin {
  return {
    name: 'serve-public-directory-indexes',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const raw = req.url?.split('?')[0] ?? ''
        if (!raw.endsWith('/') || raw === '/') {
          next()
          return
        }
        const file = path.join(publicDir, decodeURIComponent(raw.slice(1)), 'index.html')
        if (!file.startsWith(publicDir) || !fs.existsSync(file)) {
          next()
          return
        }
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end(fs.readFileSync(file, 'utf8'))
      })
    },
  }
}

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  plugins: [servePublicDirectoryIndexes(), react()],
  base: '/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    include: ['test/**/*.test.ts', 'test/**/*.test.tsx'],
    exclude: ['e2e/**', 'node_modules/**'],
  },
})
