import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

const config = defineConfig({
  projectId: 'wx0q3a19',
  dataset: 'production',
  title: 'Koala by Jaglax Homes',
  apiVersion: '2023-7-30',
  basePath: '/admin',
  plugins: [deskTool()],
})

export default config