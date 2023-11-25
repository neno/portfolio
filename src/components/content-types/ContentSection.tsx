import { Content } from './Content';
import { Section } from '@/types';
import { clsxm } from '@/lib/helpers';

export function ContentSection({ content }: { content: Section }) {
  const { slug, heading, contents, showHeading, sectionTag } = content;
  const SectionTag = sectionTag
    ? (sectionTag as unknown as keyof JSX.IntrinsicElements)
    : 'section';

  return (
    <SectionTag id={`${slug}`} className='border p-4 m-8'>
      {heading && (
        <h2 className={clsxm({ 'sr-only': !showHeading })}>
          Section: {`${heading}`}
        </h2>
      )}
      {contents &&
        Array.isArray(contents) &&
        contents.length > 0 &&
        contents.map((sectionContent) => {
          const { contentTypeId, content } = sectionContent;
          return (
            <Content
              key={content._id}
              contentTypeId={contentTypeId}
              content={sectionContent}
            />
          );
        })}
    </SectionTag>
  );
}
