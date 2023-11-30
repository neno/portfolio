import { PortfolioExperience } from '@/types';
import { ContentClient } from './ContentClient';

export function ContentExperience({
  content: { contentTypeId, content },
}: {
  content: PortfolioExperience;
}) {
  const { title, fromTo, role, description, skillsUsed, client } = content;
  return (
    <article className='border p-4 m-8'>
      <h3>Experience: {title.toString()}</h3>
      <header>{fromTo.toString()}</header>
      <h4>{role?.toString()}</h4>
      <p>{description?.toString()}</p>
      <p>{(skillsUsed as unknown as string[]).join(', ')}</p>
      <ContentClient client={client} />
    </article>
  );
}
