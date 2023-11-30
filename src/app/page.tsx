import { Section } from '@/components/Section';
import { fetchSectionsSlugsByPageName } from '@/lib/contentful/api/page';
import { Suspense } from 'react';

export default async function Home() {
  const sectionsSlugs = await fetchSectionsSlugsByPageName({
    name: 'Home',
    preview: false,
  });
  if (!sectionsSlugs) {
    return null;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {sectionsSlugs.map((slug: string) => (
        <Section key={slug} slug={slug} />
      ))}
    </Suspense>
  );
}
