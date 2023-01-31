import rss from '@astrojs/rss';

export async function get(context) {
	const postImportResult = import.meta.glob('./post/**/*.mdx', { eager: true }); 
	const posts: any = Object.values(postImportResult);
  return rss({
    title: 'Zen',
    description: 'Website pemrograman',
    site: context.site,
    items: posts.map(x => ({
    	link: x.url,
    	title: x.frontmatter.judul,
    	pubDate: x.frontmatter.tanggal,
    	description: x.frontmatter.ringkasan
    }))
  });
}
