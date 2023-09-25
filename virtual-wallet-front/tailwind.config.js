/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js,vue,ts,jsx,tsx}","./index.html","./src/**/*.{html,js,vue,ts,jsx,tsx}","./public/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins:{
    // preflight:false
  }
}

