import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
      'orange': "#e94f37ff",
      'black': "#2c2b3cff",
      'cream': "#e5e5e5ff",
      'purple': "#6665ddff",
      'green': "#47a025ff",
      'white': "#f2f2f2",
      'gray': "#999B93",
      },
    },
  },
  plugins: [],
}
export default config
