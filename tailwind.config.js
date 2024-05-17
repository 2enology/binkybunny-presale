/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 2px 1px #ffffffB3",
        token: "3px 2px 2px 2px #0000006e",
        progress: "0 3px 13px 0 rgba(99, 170, 227, 0.45)",
        walletBtn: "0 1px 1px 0 rgba(0, 25, 66, 0.4)",
        roadmapImg: "0 30px 66px 0 #1E3C34A9",
        nftImgShadow: "shadow 0px 4px 0px 0px #ffffff4d",
      },
      textShadow: {
        walletBtn: "0 1px 1px 0 rgba(0, 25, 66, 0.4)",
      },
    },
  },
  plugins: [],
};
