/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  // env: {},
  // webpack5: true,
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'localhost:1337', 'images.pexels.com'], // whatever port your backend runs on
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
  eslint: {
    dirs: ['pages', 'components', 'lib'], // Only run ESLint on the 'pages' and
    // 'utils' directories during production builds(next build)
  },
}
