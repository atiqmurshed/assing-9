/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage:{
        // big: "url(./assets/banner.jpg)",
        BannerImg: "url(./assets/Rectangle 1.png)"
    },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

