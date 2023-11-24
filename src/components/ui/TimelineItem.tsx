import {TagGroup} from "@/components/ui/TagGroup";

interface ExperienceItemProps {
  from: string
  to: string
  title: string
  description: string
  tags: string[]
}
export const TimelineItem = ({ from, to, title, description, tags }: ExperienceItemProps) => {
  return (
    <article className="grid grid-cols-8 gap-12 items-start">
      <div className="relative pt-5 col-span-2 after:absolute after:content-[''] after:block after:rounded-full after:bg-secondary after:w-4 after:h-4 after:top-7 after:-right-8">
        <h3 className="text-xl font-bold text-right">
          {from} - {to}
        </h3>
      </div>
      <div className="flex flex-col gap-6 col-span-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: description}} />
        <TagGroup tags={tags} />
      </div>
    </article>
  )
}
