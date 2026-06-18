import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        mangora: {
          green: "#214128",
          leaf: "#2f6b37",
          mango: "#f4aa32",
          amber: "#9a3e22",
          cream: "#fff4dc",
          sand: "#f6dfb5",
          ink: "#263327"
        }
      },
      boxShadow: {
        soft: "0 24px 80px rgba(33, 65, 40, 0.16)",
        card: "0 18px 50px rgba(38, 51, 39, 0.10)"
      },
      borderRadius: {
        organic: "2rem"
      },
      backgroundImage: {
        "hero-pattern": "radial-gradient(circle at 20% 20%, rgba(244,170,50,.25), transparent 28%), radial-gradient(circle at 85% 10%, rgba(47,107,55,.18), transparent 28%), linear-gradient(135deg, #fff4dc 0%, #f6dfb5 58%, #fdf7ec 100%)"
      }
    }
  },
  plugins: []
};

export default config;
