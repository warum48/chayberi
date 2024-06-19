/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.ts",
    "./**/*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      letterSpacing: {
        super: '.425em',
        ultra: '.5em',
      },
      fontFamily: {
        'montserrat': ['Montserrat'],// ...defaultTheme.fontFamily.sans],
        'inter': ['Inter'],//, ...defaultTheme.fontFamily.sans],
        'marianna' : ['Marianna']
      },
      fontSize: {
        h2: '34px',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.gray,
      'chalet-green': '#5A6B36',
     // chalet_green: '#5A6B36',
    //  testgreen: '#556836',
      'champagne': '#FBECCE',

	    'gimblet': '#afb871',
	    'soapstone': '#fdfbf7',
	    'fuscuos-gray': '#4c4c4c',
	    'yellowfish-orange': '#ffa915',
	    'silver-sand': '#c0c1bc',
     // 'ssilver-sand': '#c0c1bc',

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
