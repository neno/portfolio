import {TimelineItem} from "@/components/ui/TimelineItem";

export const Timeline = ({ items }) => {
  return (
    <ul className="flex flex-col gap-8">
      {items.map((item) => (
        <li key={item.id}>
          <TimelineItem  {...item} />
        </li>
      ))}
    </ul>
  )
}