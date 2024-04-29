/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
          transparent: 'transparent',
          'primary': '#0F2A60',
          'secondary': '#FFB600',
          'green':{
            100:"#5FAD56",
            200: '#A1CF9B'
          },
          'grey':{
            100:'#F5F5F5',
            200:'#333333'

          }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('flowbite/plugin')
  ]
}

