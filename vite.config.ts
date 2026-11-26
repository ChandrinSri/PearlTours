import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: ['index.html', 'experiences.html', 'about.html', 'contact.html', 'tours.html', 'tours/eco.html', 'tours/natures-treasures.html', 'tours/south-coast.html', 'tours/beach-2.html', 'tours/cultural.html', 'tours/kandy-highlands.html', 'tours/wellness-1.html', 'tours/adventure.html', 'tours/buddhism-1.html', 'tours/wedding-1.html', 'tours/agro-1.html', 'tours/art-1.html', 'tours/mice-1.html', 'tours/shopping-1.html', 'tours/festival-1.html', 'tours/festival-2.html'],
    },
  },
})

