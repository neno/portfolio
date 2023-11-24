import {Tag} from "@/components/ui/Tag";

export interface TagGroupProps {
  tags: string[]
}

export const TagGroup = ({ tags }: TagGroupProps) => {
  return (
    <ul className="flex flex-wrap gap-3">
      {tags.map((tag, index) => (
        <li key={index}><Tag name={tag} /></li>
      ))}
    </ul>
  )
}