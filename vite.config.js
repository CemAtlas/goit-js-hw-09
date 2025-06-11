
import { defineConfig } from 'vite';
import { resolve } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: './src', 
  base: './goit-js-hw-09',
  publicDir: '../public', 
  
  build: {
    outDir: '../dist', 
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        gallery: resolve(__dirname, 'src/01-gallery.html'),
        form: resolve(__dirname, 'src/02-form.html')
      }
    }
  },
  
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
});