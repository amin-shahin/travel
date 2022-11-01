/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}","./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
      extend: {
        boxShadow: {
          'box-shadow-custom': '0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,0 0 100px #03e9f4',
        }
      },
      container : {
        center : true,
        padding : '1rem'
      },
      screens: {
          'xxs':'450px',
          'xs': '550px',
          'sm': '640px',
          // => @media (min-width: 640px) { ... }
    
          'md': '768px',
          // => @media (min-width: 768px) { ... }
    
          'lg': '1024px',
          // => @media (min-width: 1024px) { ... }
    
          'xl': '1280px',
          // => @media (min-width: 1280px) { ... }
    
          '2xl': '1536px',
          // => @media (min-width: 1536px) { ... }
    },
    plugins: [],
  }
}