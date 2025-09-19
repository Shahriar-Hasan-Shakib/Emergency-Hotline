import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    base: '/Emergency-Hotline/',
    plugins: [
        tailwindcss(),
    ],
    build: {
        outDir: 'Emergency-Hotline', // dist এর পরিবর্তে Emergency-Hotline হবে
        emptyOutDir: true           // আগে পুরোনোটা ডিলিট করবে
    }
})