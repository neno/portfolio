import {FETCH_ALL_SECTIONS} from "@/gql";
import {client} from "../../sanity/lib/client";
import section from "../../sanity/schemas/section";
import Link from "next/link";
import {Section} from "@/ui/Section";

export default async function Home() {
  const { data } = await client({ query: FETCH_ALL_SECTIONS });
  const allSection = data.allSection;
  return (
    <main className="grid grid-cols-2">
      <header>
        <h1>Josip Anic</h1>
        <h2>Frontend Developer</h2>
        <p>If you find somebody better than me, is this <Link href="http://neno.ch">guy probably</Link>.</p>
      </header>
      {allSection.map(section => <Section key={section.slug} {...section} />)}
    </main>
  )
}
