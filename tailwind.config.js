module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: '-translate-y-4' },
        }
       },
       animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
       },
      
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],},
      animation: ['hover'],
  },
  plugins: [],
}
