import {Timeline} from "@/components/ui/Timeline";



const experinces = [
  {
    id: 1,
    from: '2017',
    to: 'Present',
    title: 'Frontend Developer',
    description: `<p>Hinderling Volkart invited us to support them in the frontend development of the new swiss.com website. We're grateful and proud to have been involved in such a large and successful project. Our team helped create the base of the frontend process of this responsive redesign. We worked on the frontend engineering, using HTML and CSS.</p>`,
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js']
  },
  {
    id: 2,
    from: '2008',
    to: '2012',
    title: 'Frontend Developer',
    description: `<p>SWISS needed to create new HTML/CSS files for their web check-in solution and our team was ready for the challenge at hand. Our job was to build the files for the SWISS check-in process, based on the prototype of the new swiss.com, and the design provided from the client. By working closely with SWISS, we were able to translate their vision into HTML and CSS.</p>`,
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js']
  },
  {
    id: 3,
    from: '2008',
    to: '2009',
    title: 'Frontend Developer',
    description: `<p>SWISS needed to create new HTML/CSS files for their web check-in solution and our team was ready for the challenge at hand. Our job was to build the files for the SWISS check-in process, based on the prototype of the new swiss.com, and the design provided from the client. By working closely with SWISS, we were able to translate their vision into HTML and CSS.</p>`,
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js']
  }
]

export default function Home() {
  return (
    <div className="mx-auto container grid gap-8 lg:grid-cols-2">
      <div className="py-24 lg:sticky lg:top-0 lg:max-h-screen">
        <h1 className="text-3xl font-bold">Nenad Brcic</h1>
      </div>
      <main className="pt-24">
        <Timeline items={experinces}  />
      </main>
    </div>
  )
}
