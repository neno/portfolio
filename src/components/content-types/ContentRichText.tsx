import { Document as RichTextDocument } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ContentTypeSkeletons } from './Content';
import { PortfolioClient, PortfolioRichText } from '@/types';

export function ContentRichText({
  content: {
    content: { name, content },
  },
}: {
  content: PortfolioRichText;
}) {
  if (!content) {
    return null;
  }

  return (
    <>{documentToReactComponents(content as unknown as RichTextDocument)}</>
  );
}
