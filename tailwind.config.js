/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('/images/home/hero4.jpg')",
        "tv-mount-bg": "url('/images/services/tv-mounting-new.jpg')",
        "home-appliances-bg": "url('/images/services/appliances-desktop.jpg')",
      },

      colors: {
        "primary-color": "#ff6c3a",
        "secondary-color": "#232c3b",
        "darkBlue-color": "#232c3b",
      },
      screens: {
        sm: "680px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      maxWidth: {
        container: "90%",
        "container-lg": "80%",
        "container-xl": "70%",
        "container-2xl": "60%",
      },
    },
  },
  plugins: [],
  safelist: ["text-primary-color"],
};
