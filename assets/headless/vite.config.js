import { defineConfig } from 'vite';
import symfonyPlugin from 'vite-plugin-symfony';
import vue from '@vitejs/plugin-vue';
import { join } from 'path';

export default defineConfig({
    plugins: [symfonyPlugin(), vue()],
    root: './',
    base: '/build/headless/',
    build: {
        manifest: true,
        emptyOutDir: true,
        assetsDir: '',
        outDir: '../../public/build/headless/',
        rollupOptions: {
            input: {
                main: './src/main.ts',
            },
        },
    },
    resolve: {
        alias: {
            '@': join(__dirname, 'src'),
        },
    },
});
