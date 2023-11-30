import { Collection } from '@/types';
import { Content } from './Content';
import { Fragment } from 'react';

export function ContentCollection({ content }: { content: Collection }) {
  const { items, wrappingTag } = content;
  const WrappingTag = wrappingTag
    ? (wrappingTag as unknown as keyof JSX.IntrinsicElements)
    : 'ul';

  const InnerTag = ['ul', 'ol'].includes(WrappingTag) ? 'li' : Fragment;
  return (
    <WrappingTag>
      {Array.isArray(items) &&
        items.map((item) => {
          const { contentTypeId, content } = item;
          return (
            <InnerTag key={content._id}>
              <Content contentTypeId={contentTypeId} content={item} />
            </InnerTag>
          );
        })}
    </WrappingTag>
  );
}
