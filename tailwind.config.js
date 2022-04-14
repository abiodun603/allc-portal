module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#070F4A',
        'black' : "#000000",
        "kwhite": "#FFFFFF",
        "kgray" : "#949494",
        "klightgray" : "#F7F7F7",
        "kpink" : "#FF9696",
        "blacktwo" : "#171725",
        "blackcom" : '#495057',
        "green" : "#066A10",
        "klightgreen" : "#96FFA0",
        "ogreen": "rgba(52, 195, 143, 0.2)",
        "ksecondary": "#74788D",
        "ksmallbutton": "#EAEAEA",
        "kblackCom" : "#495057",
        "kyellow": "#D1AC26",
        "klightyellow": "#FFE896"
      },
    },
  },
  plugins: [
    // require('tw-elements/dist/plugin')
  ],
}
