import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/',
    plugins: [react()],
    build: {
        outDir: 'build',
        emptyOutDir: true,
        cssCodeSplit: true,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) return 'vendor'
                    if (id.includes('/features/rule/')) return 'rule'
                    if (id.includes('/features/events/')) return 'events'
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    optimizeDeps: {
        include: ['html-react-parser'],
    },
})
