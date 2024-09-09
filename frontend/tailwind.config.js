/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // Make sure this line includes your file paths
  ],
  theme: {
    extend: {
      colors: {
          primary: "#FFFFFF",
          secondary: "#D9EDAC",
          third: "#B3B3B3",
          forth: "#000000",
          green: "#C9FE54",
          sidebar: "#242424",
          hover: "#8BC804",
          iconUser: "#96B84B",
          createBTN: "#383838",
          use: "#C9FE59",
          dropZone: "#C4C4C4",
          success: "#4caf50",
          error: "#f44336",
          password:"#1E1E1E"
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
  },
  plugins: [],
}
}
