/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(250px*6))" },
        },
      },
      fontFamily: {
        "iransans": ["IRANSansX-Medium"],
        "irannumber": ["IRANSansXFaNum"],
        "iransans-Black": ["IRANSansX-Black"],
        "iransans-Bold": ["IRANSansX-Bold"],
        "iransans-DemiBold": ["IRANSansX-DemiBold"],
        "iransans-ExtraBold": ["IRANSansX-ExtraBold"],
        "iransans-Light": ["IRANSansX-Light"],
        "iransans-Regular": ["IRANSansX-Regular"],
        "iransans-Thin": ["IRANSansX-Thin"],
        "iransans-UltraLight": ["IRANSansX-UltraLight"],
      },
      screens: {
        'sm': '431px',
        'md': '640px', 
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },

  plugins: [],
};
