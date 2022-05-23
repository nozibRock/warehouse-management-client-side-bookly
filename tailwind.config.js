module.exports = {
  // content: [],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
