import { Tags } from '@/types';

export function ContentTags({ name, taglist }: Tags) {
  return (
    <div>
      <h1>Tags: {name?.toString()}</h1>
      <pre>{JSON.stringify(taglist, null, 2)}</pre>
      {/* {(taglist as unknown as string[]).map((tag: string) => {
        return <span key={tag}>{tag}</span>;
      })} */}
    </div>
  );
}
