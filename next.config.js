// const withPWA = require("next-pwa");

// const nextConfig = {
//   images: {
//     domains: ["rb.gy"],
//   },
//   pwa:{
//     dest: "public",
//     disable: process.env.NODE_ENV === "development",
//     register: true,
//     skipWaiting: true,

//   }
// };

// module.exports = withPWA(nextConfig);


const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: false,
  disable: false
})

module.exports = withPWA({
  // next.js config
  images: {
    domains: ["rb.gy"],
  },
})