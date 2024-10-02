import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dsv from '@rollup/plugin-dsv'
import dst from 'vite-plugin-dts'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/components/operator.tsx'),
      name: 'rocket-input-controller',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'styled-components',
        'clsx',
        'formik',
        'localforage',
        'fast-deep-equal',
        'react-player',
      ],
    },
  },
  plugins: [
    react(),
    dsv(),
    dst({
      rollupTypes: true,
      include: ['src/components', 'src/services', 'src/tools'],
      exclude: 'src/components/player',
    }),
  ],
})
