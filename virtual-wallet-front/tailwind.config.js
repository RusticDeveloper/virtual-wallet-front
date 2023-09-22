/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:["./src/**/*.{html,js,vue,ts,jsx,tsx}","./index.html","./src/**/*.{html,js,vue,ts,jsx,tsx}","./public/**/*.html"],
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

