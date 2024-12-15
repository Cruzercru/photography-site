import { getServerSideSitemapIndexLegacy } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import contentful from 'utils/contentful';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    let urls = [];
    //Get Image URLS
    const landscapeImages = await contentful.getEntries<any>({include: 1, content_type: 'landscapeImage'});
    urls.push(...landscapeImages.items.map(item => `/image/${item.fields.slug}`));

    return getServerSideSitemapIndexLegacy(ctx, urls);
}

// Default export to prevent next.js errors
export default function SitemapIndex() {};