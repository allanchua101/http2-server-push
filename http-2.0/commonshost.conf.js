module.exports = () => ({
  https: {
    port: 4433
  },
  http: {
    redirect: false
  },
  hosts: [
    {
      domain: 'localhost',
      root: "./source",
      directories: {
        trailingSlash: 'never'
      },
      fallback: {
        200: '/index.html'
      },
      manifest: [
        {
          get: '/index.html',
          push: [
            '/styles/css1.css',
            '/styles/css2.css',
            '/styles/css3.css',
            '/scripts/js1.js',
            '/scripts/js2.js',
            '/scripts/js3.js',
            '/images/image.jpg'
          ]
        }
      ]
    }
  ]
})
