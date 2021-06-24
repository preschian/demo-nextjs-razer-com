export type Submenu = {
  href: string;
  text: string;
}[];

export type Menu = {
  href?: string;
  text: string;
  submenus?: Submenu;
}[];

export const menus: Menu = [
  {
    text: 'PC',
    submenus: [
      {
        href: 'https://www.razer.com/pc/gaming-laptops',
        text: 'Laptops',
      },
      {
        href: 'https://www.razer.com/pc/gaming-desktops-and-cases',
        text: 'Desktops',
      },
      {
        href: 'https://www.razer.com/gaming-monitors/razer-raptor-27',
        text: 'Monitors',
      },
      {
        href: 'https://www.razer.com/pc/gaming-mice',
        text: 'Mice',
      },
      {
        href: 'https://www.razer.com/pc/gaming-mouse-mats',
        text: 'Mats',
      },
      {
        href: 'https://www.razer.com/pc/gaming-keyboards-and-keypads',
        text: 'Keyboards',
      },
      {
        href: 'https://www.razer.com/pc/gaming-headsets-and-audio',
        text: 'Audio',
      },
      {
        href: 'https://www.razer.com/pc/streaming',
        text: 'Streaming',
      },
      {
        href: 'https://www.razer.com/productivity',
        text: 'Productivity',
      },
      {
        href: 'https://www.razer.com/lifestyle/chairs',
        text: 'Chairs',
      },
      {
        href: 'https://www.razer.com/pc/software',
        text: 'Software',
      },
    ],
  },
  {
    href: 'https://www.razer.com/console',
    text: 'Console',
  },
  {
    href: 'https://www.razer.com/mobile',
    text: 'Mobile',
  },
  {
    href: 'https://www.razer.com/lifestyle',
    text: 'Lifestyle',
  },
  {
    href: 'https://www.razer.com/services',
    text: 'Services',
  },
  {
    href: 'https://www.razer.com/community',
    text: 'Community',
  },
  {
    href: 'https://support.razer.com/',
    text: 'Support',
  },
];
