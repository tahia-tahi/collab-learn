module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
  themes: [
    {
      light: {
        "primary": "#6440FA",
        "secondary": "#1E0B51",
        "accent": "#6440FA",
        "base-100": "#F6F6F6",
        "text": "#000000",
      },
      dark: {
        "primary": "#8F6DFF",
        "secondary": "#1E0B51",
        "accent": "#A78BFA",
        "base-100": "#121212",
        "text": "#F0F0F0",
      }
    },
  ],
},

};
