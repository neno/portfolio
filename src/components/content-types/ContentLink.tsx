import NextLink from 'next/link';
import { Link } from '@/types';

export function ContentLink({ title, url }: Link) {
  return (
    <NextLink href={url.toString()} className='bg-blue-700'>
      {title as unknown as string}
    </NextLink>
  );
}
