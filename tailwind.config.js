/** @type {import('tailwindcss').Config} */
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
      maxWidth: ({ theme, breakpoints }) => ({
        lg2: "33.75rem",
        "8xl": "97rem",
        "9xl": "90rem",
        "12xl": "102rem",
      }),
    },
  },
  plugins: [],
};
