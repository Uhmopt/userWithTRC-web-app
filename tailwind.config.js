// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: "#2F80ED",
        title: "#6C7585",
        light: "#EDF2FE",
        warnning: "#FF6F6F"
      },
      screens: {
        sm: '600px',
        md: '960px',
        lg: '1280px',
        xl: '1920px',
        'sm-max': { max: '600px' },
        'md-max': { max: '960px' },
        'lg-max': { max: '1280px' },
        'xl-max': { max: '1920px' },
      },
      zIndex: {
        '-2': '-2',
      },
      spacing: {
        '2x': 'calc(200%)',
        '3x': 'calc(300%)',
        '4x': 'calc(400%)',
        '5x': 'calc(500%)',
        '6x': 'calc(600%)',
        '7x': 'calc(700%)',
      },
      margin: {
        '-1/2': '-50%',
      },
      backgroundSize: {
        '120': '30rem',
      },
      fontSize: {
        xs: ['.75rem', 'inherit'],
      },
      boxShadow: {
        default: '4px 0px 6px rgba(0, 0, 0, 0.3);',
      },
    },
    cursor: {
      crosshair: 'crosshair',
      'zoom-in': 'zoom-in',
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
      width: ['first'],
      height: ['first'],
      position: ['first'],
    },
    // mixBlendMode: ['hover', 'focus'],
    blur: ['hover', 'focus'],
    // scale: ['active', 'group-hover'],
    cursor: ['hover', 'focus'],
  },
}
