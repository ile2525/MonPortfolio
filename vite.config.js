import { defineConfig } from 'vite';
 
export default defineConfig({
    base: '/MonPortfolio/',
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: 'index.html',
                projets: 'page-projets.html',
                aPropos: 'page-aPropos.html'
                //...mettre toutes les autres pages
            },
        },
    },
});
 