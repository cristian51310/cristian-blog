export default function manifest() {
  return {
    name: 'Next.js App',
    short_name: 'Next.js App',
    description: 'Next.js App',
    start_url: '/',
    display: 'standalone',
    icons: [
      {
        src: '/favicon.jpg',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon.jpg',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon.jpg',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon.jpg',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}