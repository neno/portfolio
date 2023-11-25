import NextLink from 'next/link';
import { Client } from '@/types';
import { ContentImage } from './ContentImage';

export function ContentClient({ client }: { client: Client }) {
  const { name, logo, link, summary } = client;
  return (
    <div className='border p-4 m-8'>
      <NextLink href={link?.toString() ?? ''} className='bg-blue-700'>
        <h3>Client: {name.toString()}</h3>
      </NextLink>
      {logo && <ContentImage image={logo} />}
      {summary && <p>{summary.toString()}</p>}
    </div>
  );
}
