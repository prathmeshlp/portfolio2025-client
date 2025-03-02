/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{tsx,ts}"],
    theme: {
      extend: {
        backgroundImage: {
        "custom-dark-gradient":
        "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(66,85,159,1) 0%, rgba(78,98,113,1) 0%, rgba(33,69,95,1) 0%, rgba(5,4,11,1) 0%, rgba(147,152,185,1) 100%, rgba(114,114,228,1) 100%, rgba(23,68,105,1) 100%, rgba(75,85,110,1) 100%, rgba(227,0,0,1) 100%, rgba(70,143,158,1) 100%)",
          "custom-dark-gradient-navbar":"radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(66,85,159,1) 0%, rgba(78,98,113,1) 0%, rgba(33,69,95,1) 0%, rgba(5,4,11,1) 0%, rgba(11,21,50,1) 100%, rgba(114,114,228,1) 100%, rgba(23,68,105,1) 100%, rgba(75,85,110,1) 100%, rgba(227,0,0,1) 100%, rgba(70,143,158,1) 100%)",
          "custom-dark-gradient-latest":
          "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(151,130,200,0.5466561624649859) 0%, rgba(78,98,113,1) 0%, rgba(33,69,95,1) 0%, rgba(5,4,11,1) 0%, rgba(24,28,47,1) 0%, rgba(57,161,0,1) 0%, rgba(114,114,228,1) 0%, rgba(209,221,255,1) 0%, rgba(196,210,244,1) 0%, rgba(172,190,225,1) 0%, rgba(133,158,194,1) 0%, rgba(120,147,183,1) 0%, rgba(107,136,173,1) 0%, rgba(255,255,255,1) 0%, rgba(92,124,161,1) 0%, rgba(250,251,252,1) 0%, rgba(189,201,246,1) 100%, rgba(23,68,105,1) 100%, rgba(75,85,110,1) 100%)"
        },
      },
    },
    plugins: [],
  };