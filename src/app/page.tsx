export default function Home() {
  return (
    <div className="mx-auto container grid gap-8 lg:grid-cols-2">
      <div className="py-24 lg:sticky lg:top-0 lg:max-h-screen">
        <h1 className="text-3xl font-bold">Nenad Brcic</h1>
      </div>
      <main className="pt-24">
        <div>
          {[...Array(10)].map((_, index) => (
            <p key={index}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse dignissim, augue ac elementum mollis, velit mi
              porttitor tortor, at dapibus mi neque sed mi. Praesent
              quis turpis et velit porttitor malesuada. Phasellus
              interdum est sit amet fringilla vehicula. Fusce
              elementum metus arcu, viverra aliquet nibh tempor nec.
              Fusce facilisis facilisis ipsum in aliquam. Sed
              fringilla est posuere magna ullamcorper, sit amet
              vulputate nibh lacinia. Proin turpis massa, ullamcorper
              non sollicitudin sit amet, commodo id ante. Nulla ut
              neque eget lacus mollis sodales. In tincidunt aliquet
              semper. Donec in efficitur metus, non mattis odio.
              Donec consectetur sodales eros, in scelerisque diam
              feugiat in. Integer gravida elementum ipsum id feugiat.
              Vestibulum et sapien lorem. Fusce faucibus justo non
              egestas hendrerit. Vivamus molestie dui sed enim
              semper venenatis.
            </p>
          ))}
        </div>
      </main>
    </div>
  )
}
