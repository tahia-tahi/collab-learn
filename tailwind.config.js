// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // both themes enabled
  },
};
