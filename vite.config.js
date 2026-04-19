import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: '/Backend-laboration2-uppgift2/',
    build: {
        outDir: 'docs',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                add: resolve(__dirname, 'add.html'),
                about: resolve(__dirname, 'about.html')
            }
        }
    }
})