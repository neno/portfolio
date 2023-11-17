import {TagGroup} from "@/components/ui/TagGroup";

const tags = [
  'HTML',
  'CSS',
  'JavaScript',
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TagGroup tags={tags} />
    </main>
  )
}
