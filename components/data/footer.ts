export type FooterMenu = {
  title: string;
  submenus: {
    text: string;
    href: string;
  }[];
}[];

export type FooterOtherMenu = {
  text: string;
  href: string;
}[];

const menus: FooterMenu = [
  {
    title: 'Shop',
    submenus: [
      {
        text: 'RazerStores',
        href: 'https://www.razer.com/razerstores',
      },
      {
        text: 'Store Locator',
        href: 'https://www.razer.com/store-finder',
      },
      {
        text: 'Purchase Programs',
        href: 'https://www.razer.com/store/programs',
      },
      {
        text: 'Exclusives',
        href: 'https://www.razer.com/exclusives',
      },
      {
        text: 'Newsletter',
        href: 'https://www.razer.com/newsletter',
      },
    ],
  },
  {
    title: 'Explore',
    submenus: [
      {
        text: 'Technology',
        href: 'https://www.razer.com/technology',
      },
      {
        text: 'Chroma RGB',
        href: 'https://www.razer.com/chroma',
      },
      {
        text: 'Concepts',
        href: 'https://www.razer.com/concepts',
      },
      {
        text: 'Esports',
        href: 'https://www.razer.com/esports',
      },
      {
        text: 'Collabs',
        href: 'https://www.razer.com/lifestyle/collabs',
      },
    ],
  },
  {
    title: 'Support',
    submenus: [
      {
        text: 'Get Help',
        href: 'https://support.razer.com/',
      },
      {
        text: 'Registration & Warranty',
        href: 'https://www.razer.com/product-registration',
      },
      {
        text: 'Online Store',
        href: 'https://www.razer.com/razerstore-support',
      },
      {
        text: 'RazerCare',
        href: 'https://www.razer.com/razercare',
      },
      {
        text: 'Manage Razer ID',
        href: 'https://razerid.razer.com/',
      },
    ],
  },
  {
    title: 'Company',
    submenus: [
      {
        text: 'About Us',
        href: 'https://www.razer.com/about-razer',
      },
      {
        text: 'Careers',
        href: 'https://careers.razer.com/',
      },
      {
        text: 'Press Room',
        href: 'https://press.razer.com/',
      },
      {
        text: 'Investor Relations',
        href: 'https://investor.razer.com/',
      },
      {
        text: 'zVentures',
        href: 'https://www.zvntrs.com/',
      },
      {
        text: 'Contact Us',
        href: 'https://www.razer.com/contact-us',
      },
    ],
  },
];
const otherMenus: FooterOtherMenu = [
  {
    text: 'Site Map',
    href: 'https://www.razer.com/sitemap',
  },
  {
    text: 'Legal Terms',
    href: 'https://www.razer.com/legal',
  },
  {
    text: 'Privacy Policy',
    href: 'https://www.razer.com/legal/customer-privacy-policy',
  },
  {
    text: 'Cookie Policy',
    href: 'https://www.razer.com/legal/cookies',
  },
];

export { menus, otherMenus };
