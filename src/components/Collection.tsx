type CollectionProps = {
  items: any;
};

export function Collection({ items }: CollectionProps) {
  return (
    <>
      <pre>{JSON.stringify({}, null, 2)}</pre>
    </>
  );
}
