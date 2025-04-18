export default function sitemap() {
    return [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/register-domain`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/wordpress-hosting`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/business-web-hosting`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/cheap-web-hosting-with-cpanel`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/nodejs-hosting`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
    ]
  }