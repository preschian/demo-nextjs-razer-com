const banners = [
  {
    title: 'RAZER BLADE 14',
    subtitle: 'THE ULTIMATE 14” GAMING LAPTOP',
    image:
      'https://assets2.razerzone.com/images/pnx.assets/7dd83bd8ff5a91a1cc3bf99b4eac11cb/razer-blade14-logos-2021-homepage-mobile2x.jpg',
    links: [
      {
        text: 'Learn More',
        href: 'https://www.razer.com/gaming-laptops/razer-blade-14',
      },
      {
        text: 'Buy',
        href: 'https://www.razer.com/gaming-laptops/razer-blade-14/buy',
      },
    ],
  },
  {
    title: 'SQUAD UP WITH DAD',
    subtitle: 'FATHER’S DAY SPECIAL',
    image:
      'https://assets2.razerzone.com/images/pnx.assets/7dd83bd8ff5a91a1cc3bf99b4eac11cb/fathers-day-homepage-mobile2x.jpg',
    links: [
      {
        text: 'Shop Exclusive Offers',
        href: 'https://www.razer.com/campaigns/limited-time-offer',
      },
    ],
  },
  {
    title: 'RAZER BLACKSHARK V2 PRO - SIX SIEGE SPECIAL EDITION',
    subtitle: 'THE SOUND OF ESPORTS',
    image:
      'https://assets2.razerzone.com/images/pnx.assets/7af9ab9b6eff33f27f49e520ecd2694d/rainbow-six-edition-homepage-mobile2x.jpg',
    links: [
      { text: 'Learn More', href: 'https://www.razer.com/campaigns/six-siege' },
      {
        text: 'Buy',
        href: 'https://www.razer.com/gaming-headsets/razer-blackshark-v2-pro-six-siege-special-edition',
      },
    ],
  },
  {
    title: 'RAZER BLADE 15',
    subtitle: 'STILL THE BEST GAMING LAPTOP',
    image:
      'https://assets2.razerzone.com/images/pnx.assets/b17b0985e9a147f24a5e086217239552/razer-blade-15-b-480x615-mobile.jpg',
    links: [
      {
        text: 'Shop Exclusive Offers',
        href: 'https://www.razer.com/shop/pc/gaming-laptops?query=:newest:category:system-laptops:system-display:15%2Binch',
      },
    ],
  },
  {
    title: 'RAZER BLACKWIDOW V3 MINI HYPERSPEED',
    subtitle: 'FREEDOM THROUGH FORM',
    image:
      'https://assets2.razerzone.com/images/pnx.assets/b17b0985e9a147f24a5e086217239552/razer-blackwidow-v3-mini-hyperspeed-b-480x615-mobile.jpg',
    links: [
      {
        text: 'Learn More',
        href: 'https://www.razer.com/gaming-keyboards/razer-blackwidow-v3-mini-hyperspeed',
      },
      {
        text: 'Buy',
        href: 'https://www.razer.com/gaming-keyboards/razer-blackwidow-v3-mini-hyperspeed/buy',
      },
    ],
  },
  {
    title: 'RAZER ISKUR X',
    subtitle: 'CORE GAMING COMFORT',
    image:
      'https://assets2.razerzone.com/images/pnx.assets/b17b0985e9a147f24a5e086217239552/iskurx-b-480x615-mobile.jpg',
    links: [
      {
        text: 'Learn More',
        href: 'https://www.razer.com/gaming-chairs/razer-iskur-x',
      },
      {
        text: 'Buy',
        href: 'https://www.razer.com/gaming-chairs/razer-iskur-x/buy',
      },
    ],
  },
  {
    title: 'RAZER OPUS X',
    subtitle: 'NOISE FREE IMMERSION',
    image:
      'https://assets2.razerzone.com/images/pnx.assets/b17b0985e9a147f24a5e086217239552/razer-opus-x-b-480x615-mobile.jpg',
    links: [
      {
        text: 'Learn More',
        href: 'https://www.razer.com/mobile-headsets/razer-opus-x',
      },
      {
        text: 'Buy',
        href: 'https://www.razer.com/mobile-headsets/razer-opus-x/buy',
      },
    ],
  },
  {
    title: 'RAZER ANZU SMART GLASSES',
    subtitle: 'SUMMER VISION. SUMMER SOUND.',
    image:
      'https://assets2.razerzone.com/images/pnx.assets/b17b0985e9a147f24a5e086217239552/anzusummercampaign-b-480x615-mobile-v1.jpg',
    links: [
      {
        text: 'Shop Now',
        href: 'https://www.razer.com/mobile-wearables/razer-anzu-smart-glasses',
      },
    ],
  },
  {
    title: 'RAZER SILVER & SKIBRE',
    subtitle: 'A NEW CASUAL WAY TO EARN',
    image:
      'https://assets2.razerzone.com/images/pnx.assets/b17b0985e9a147f24a5e086217239552/480x615_rzs_skibre.jpg',
    links: [
      {
        text: 'Discover More',
        href: 'https://gold.razer.com/silver/promotions/skibre',
      },
    ],
  },
];

export default function Banners() {
  const bannerElement = banners.map((banner) => {
    const linkElement = banner.links?.map((link) => {
      return (
        <a
          href="https://www.razer.com/gaming-laptops/razer-blade-14"
          target="_blank"
          className="px-4 flex items-center gap-1"
          rel="noreferrer"
          key={link.href}
        >
          <span>{link.text}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-green"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      );
    });

    return (
      <div
        style={{
          minHeight: '40rem',
          backgroundImage: `url("${banner.image}")`,
        }}
        className="bg-cover bg-center border-b-8 border-black-light"
        key={banner.title}
      >
        <div className="container text-center">
          <h1 className="pt-24 text-3xl font-medium">{banner.title}</h1>
          <h2 className="text-lg mt-2">{banner.subtitle}</h2>
          <div className="flex mt-1 justify-center">{linkElement}</div>
        </div>
      </div>
    );
  });

  return <div>{bannerElement}</div>;
}
