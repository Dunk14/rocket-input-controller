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
    minify: false,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'rocket-input-controller',
    },
    rollupOptions: {
      external: [
        /.*\.css/,
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
      include: ['src/index.ts', 'src/components', 'src/services', 'src/tools'],
      exclude: ['src/components/mapper', 'src/components/player'],
    }),
  ],
})
