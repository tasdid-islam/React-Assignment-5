
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#DB2777',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #f97316, #db2777, #7c3aed)', 
      },
    },
  },
  plugins: [],
};