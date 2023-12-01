import { fetchSection } from '@/lib/api';
import { ContentSection } from './content-types/ContentSection';

type SectionProps = {
  slug: string;
};

export async function Section({ slug }: SectionProps) {
  const section = await fetchSection({
    slug: slug,
    preview: false,
  });

  if (!section) {
    return null;
  }

  return <ContentSection content={section} />;
}
