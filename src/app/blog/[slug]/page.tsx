import { notionClient, notionDatabaseId } from 'lib/config/cms/notion';

export async function generateStaticParams() {
  const { results: databaseQueryResultsRaw } =
    await notionClient.databases.query({
      database_id: notionDatabaseId,
    });

  const slug: string[] = databaseQueryResultsRaw.map(page => {
    if ('properties' in page) {
      if ('slug' in page.properties) {
        if (page.properties.slug.type === 'rich_text') {
          console.log(page.properties.slug.rich_text[0].plain_text);

          return page.properties.slug.rich_text[0].plain_text;
        }
      }
    }

    return '';
  });

  return slug;
}

export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post</div>;
}
