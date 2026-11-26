import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: ['index.html', 'experiences.html', 'about.html', 'contact.html', 'tours.html', 'tours/south-coast.html', 'tours/eco.html', 'tours/cultural.html', 'tours/adventure.html', 'tours/natures-treasures.html', 'tours/kandy-highlands.html'],
    },
  },
})

