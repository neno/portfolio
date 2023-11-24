export default function Home() {
  return (
    <main className="flex flex-col gap-2 container mx-auto py-32">
      <h1 className="text-4xl font-bold">
        Heading 1
      </h1>
      <h2 className="text-3xl font-bold">
        Heading 2
      </h2>
      <h3 className="text-2xl font-bold">
        Heading 3
      </h3>
      <h4 className="text-xl font-bold">
        Heading 4
      </h4>
      <h5 className="text-lg font-bold">
        Heading 5
      </h5>
      <h6 className="text-base font-bold">
        Heading 6
      </h6>
      <p>
        SWISS needed to create new HTML/CSS files for their web check-in solution and our team was ready for the challenge at hand.
        Our job was to build the files for the SWISS check-in process, based on the prototype of the new swiss.com, and the design
        provided from the client. By working closely with SWISS, we were able to translate their vision into HTML and CSS.
      </p>

      <div className={`grid grid-cols-8 gap-4 mt-8`}>
        {["bg-white", "bg-neutral", "bg-secondary"].map((color) => (
          <div key={color} className="text-center">
            <div className={`border-neutral border-2 aspect-square ${color}`} />
            {color.replace("bg-", "")}
          </div>
        ))}
      </div>

    </main>
  )
}
