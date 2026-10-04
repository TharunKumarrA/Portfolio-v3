export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#171313",
        surface: "#241b1a",
        ink: "#f3ece1",
        muted: "#c2b1a0",
        accent: "#d79a48",
        line: "#493633",
      },
      fontFamily: {
        heading: ["var(--font-space-mono)", "monospace"],
        body: ["var(--font-rubik)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
