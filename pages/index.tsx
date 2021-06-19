export default function Home() {
  const banner = {
    backgroundImage: 'url("https://assets2.razerzone.com/images/pnx.assets/7dd83bd8ff5a91a1cc3bf99b4eac11cb/razer-blade14-logos-2021-homepage-mobile2x.jpg")',
    backgroundPosition: 'center',
    minHeight: '40rem'
  }

  return (
    <div style={banner} className="bg-cover">
      <div className="container text-center">
        <h1 className="mt-14 text-3xl font-medium">RAZER BLADE 14</h1>
        <h2 className="text-lg mt-2">THE ULTIMATE 14” GAMING LAPTOP</h2>
        <div className="flex mt-1 justify-center">
          <a href="https://www.razer.com/gaming-laptops/razer-blade-14" target="_blank" className="px-4 flex items-center gap-1" rel="noreferrer">
            <span>Learn More</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <a href="https://www.razer.com/gaming-laptops/razer-blade-14/buy" target="_blank" className="px-4 flex items-center gap-1" rel="noreferrer">
            <span>Buy</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
