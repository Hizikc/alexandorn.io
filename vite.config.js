import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Обязательно возвращаем имя репозитория, иначе пути к файлам на гитхабе отвалятся!
  base: '/alexandoin.io/',

  build: {
    outDir: 'docs',
    emptyOutDir: true,
    rollupOptions: {
      // Здесь должны быть ТОЛЬКО HTML файлы страницы
      input: {
        main: resolve(__dirname, 'index.html'),
        notFound: resolve(__dirname, '404.html')
      }
    }
  }
});
