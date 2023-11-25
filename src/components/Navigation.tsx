type NavigationProps = {
  links: {
    name: string;
    slug: string;
  }[];
};
export function Navigation({ links }: NavigationProps) {
  return (
    <nav>
      <ul>
        {links.map((link) => {
          const { name, slug } = link;
          return (
            <li key={slug}>
              <a href={`/${slug}`}>{name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
