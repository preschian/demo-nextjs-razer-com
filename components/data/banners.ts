export type BannerType = {
  title: string;
  links: {
    text: string;
    href: string;
  }[];
  subtitle: string;
  image: string;
  image_desktop: string;
}[];

const banners: BannerType = [
  {
    title: 'RAZER BLADE 14',
    subtitle: 'THE ULTIMATE 14” GAMING LAPTOP',
    image:
      'https://assets2.razerzone.com/images/pnx.assets/7dd83bd8ff5a91a1cc3bf99b4eac11cb/razer-blade14-logos-2021-homepage-mobile2x.jpg',
    image_desktop:
      'https://assets2.razerzone.com/images/pnx.assets/7dd83bd8ff5a91a1cc3bf99b4eac11cb/razer-blade14-logos-2021-homepage-desktop2x.jpg',
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
    image_desktop:
      'https://assets2.razerzone.com/images/pnx.assets/7dd83bd8ff5a91a1cc3bf99b4eac11cb/fathers-day-homepage-desktop2x.jpg',
    links: [
      {
        text: 'Shop Exclusive Offers',
        href: 'https://www.razer.com/campaigns/limited-time-offer',
      },
    ],
  },
  {
    title: 'RAZER ANZU SMART GLASSES',
    subtitle: 'SUMMER VISION. SUMMER SOUND.',
    image:
      'https://assets2.razerzone.com/images/pnx.assets/b17b0985e9a147f24a5e086217239552/anzusummercampaign-b-480x615-mobile-v1.jpg',
    image_desktop:
      'https://assets2.razerzone.com/images/pnx.assets/7dd83bd8ff5a91a1cc3bf99b4eac11cb/anzusummercampaign-homepage-desktop2x-v1.jpg',
    links: [
      {
        text: 'Shop Now',
        href: 'https://www.razer.com/mobile-wearables/razer-anzu-smart-glasses',
      },
    ],
  },
];
const banners_grid: BannerType = [
  {
    title: 'RAZER BLACKSHARK V2 PRO - SIX SIEGE SPECIAL EDITION',
    subtitle: 'THE SOUND OF ESPORTS',
    image:
      'https://assets2.razerzone.com/images/pnx.assets/7af9ab9b6eff33f27f49e520ecd2694d/rainbow-six-edition-homepage-mobile2x.jpg',
    image_desktop:
      'https://assets2.razerzone.com/images/pnx.assets/b17b0985e9a147f24a5e086217239552/rainbow-six-edition-b-950x580-desktop.jpg',
    links: [
      {
        text: 'Learn More',
        href: 'https://www.razer.com/campaigns/six-siege',
      },
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
    image_desktop:
      'https://assets2.razerzone.com/images/pnx.assets/b17b0985e9a147f24a5e086217239552/razer-blade-15-950x580-desktop.jpg',
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
    image_desktop:
      'https://assets2.razerzone.com/images/pnx.assets/b17b0985e9a147f24a5e086217239552/razer-blackwidow-v3-mini-hyperspeed-b-950x580-desktop.jpg',
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
    image_desktop:
      'https://assets2.razerzone.com/images/pnx.assets/b17b0985e9a147f24a5e086217239552/iskurx-b-950x580-desktop.jpg',
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
    title: 'RAZER SILVER & SKIBRE',
    subtitle: 'A NEW CASUAL WAY TO EARN',
    image:
      'https://assets2.razerzone.com/images/pnx.assets/b17b0985e9a147f24a5e086217239552/480x615_rzs_skibre.jpg',
    image_desktop:
      'https://assets2.razerzone.com/images/pnx.assets/b17b0985e9a147f24a5e086217239552/954x580_rzs_skibre.jpg',
    links: [
      {
        text: 'Discover More',
        href: 'https://gold.razer.com/silver/promotions/skibre',
      },
    ],
  },
];

export default banners;
export { banners, banners_grid };
