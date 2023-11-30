import { ContentImage, ImageType } from './ContentImage';
import { Person, PortfolioPerson } from '@/types';

export function ContentPerson({
  content: {
    content: { name, title, description, image, email, phone },
  },
}: {
  content: PortfolioPerson;
}) {
  return (
    <div>
      {image && <ContentImage image={image as unknown as ImageType} />}

      <div>
        <h1>{name as unknown as string}</h1>
        <p>{title as unknown as string}</p>
        <p>{description as unknown as string}</p>
        <div>
          <a href={`mailto:${email}`}>Email</a>
          <a href={`tel:${phone}`}>Call</a>
        </div>
      </div>
    </div>
  );
}
