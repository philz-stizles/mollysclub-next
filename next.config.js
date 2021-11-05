/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  reactStrictMode: true,
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
  eslint: {
    dirs: ['pages', 'components', 'lib'], // Only run ESLint on the 'pages' and
    // 'utils' directories during production builds(next build)
  },
}
