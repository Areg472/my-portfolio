/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      cool: ["Exo2"],
      boldExo: ["Exo2Bold"],
      regularExo: ["Exo2Regular"],
      bolditalicExo: ["Exo2BoldItalic"],
    },
  },
  plugins: [],
};
