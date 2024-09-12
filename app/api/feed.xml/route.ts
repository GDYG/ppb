import siteMetadata from '@/data/siteMetadata'
import RSS from 'rss'

export async function GET() {
  const feed = new RSS({
    title: siteMetadata.title,
    description: siteMetadata.description,
    site_url: siteMetadata.siteUrl, // 你的网站域名
    feed_url: siteMetadata.siteUrl + '/api/feed.xml', // 尽可能用绝对 URL
    language: 'zh-CN', // 网站语言代码
    image_url: siteMetadata.siteUrl + '/static/images/favicon4.png', // 放一个叫 opengraph-image.png 的1200x630尺寸的图片到你的 app 目录下即可
    // generator: "PHP 9.0", // 想写什么就写什么，也可以不提供
  })

  // const data = await fetchData(); // 获取文章数据才能填充 RSS feed
  // // 假设 data 是一个类型为文章的数组：
  // data.forEach((post) => {
  //   feed.item({
  //     title: post.title, // 文章名
  //     guid: post.id, // 文章 ID
  //     url: `https://yourdomain.com/blog/${post.slug}`, // 文章的链接
  //     description: post.description, // 文章的介绍，如果有的话
  //     date: new Date(post.publishedAt), // 文章的发布时间
  //     enclosure: {
  //       url: post.imageUrl, // 文章的图片，如果有的话
  //     },
  //   });
  // });

  return new Response(feed.xml(), {
    headers: {
      'content-type': 'application/xml',
    },
  })
}
