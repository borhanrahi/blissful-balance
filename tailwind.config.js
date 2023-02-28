const {tailwindcssPaletteGenerator} = require("@bobthered/tailwindcss-palette-generator");
const defaultTheme = require("tailwindcss/defaultTheme");

const colors = tailwindcssPaletteGenerator({
  colors: ["#1896f1", "#db2777"],
  names: ["primary", "secondary"],
});
colors.primary.DEFAULT = "#1896f1";
colors.secondary.DEFAULT= "#db2777";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        global: "10px",
      },
      fontFamily: {
        heading: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
        body: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
      },
      colors: colors
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
}