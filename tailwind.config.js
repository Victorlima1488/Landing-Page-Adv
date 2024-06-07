module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Rubik, sans-serif',
      body: 'Open Sans',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#BB864E',
          darker: '#242546',
          hover: '#383956',
        },

        accent: {
          DEFAULT: '#611718',
          hover: '#BB864E',
        },

        gray: '#766F66',
        white: '#ffffff',
      },
      spacing: {
        54: '54px',
        800: '800px',
      },

      content: {
        quote: 'url("assets/img/quoteMark.png")',
      },
    },
  },
  plugins: [],
}
