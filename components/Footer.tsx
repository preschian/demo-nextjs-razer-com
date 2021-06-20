const menus = [
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
const otherMenus = [
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

const menusComponent = menus.map((menu) => {
  return (
    <div key={menu.title} className="mb-4 pb-4 border-b border-black-lighter">
      <p>{menu.title}</p>

      {menu.submenus.map((submenu) => {
        return (
          <a
            href={submenu.href}
            key={submenu.href}
            className="block text-black-lighter text-sm mt-2"
            target="_blank"
            rel="noreferrer"
          >
            {submenu.text}
          </a>
        );
      })}
    </div>
  );
});
const otherMenusComponent = otherMenus.map((other) => {
  return (
    <a href={other.href} key={other.href} target="_blank" rel="noreferrer">
      {other.text}
    </a>
  );
});

export default function footer() {
  return (
    <div className="p-6">
      {menusComponent}
      <p className="mt-7 text-center text-xs">
        Copyright © 2021 Razer Inc. All rights reserved. <br />
        For demo purposes only
      </p>

      <div className="text-xs mt-7 pb-7 text-black-lighter flex justify-between border-b border-black-lighter">
        {otherMenusComponent}
      </div>

      <div className="text-green mt-7 text-xs flex justify-center items-center gap-4">
        <p>FOR GAMERS. BY GAMERS.™</p>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/razer"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#44d62c"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 10h-2v2h2v6h3v-6h1.82l.18-2h-2v-.833c0-.478.096-.667.558-.667h1.442v-2.5h-2.404c-1.798 0-2.596.792-2.596 2.308v1.692z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/razer"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#44d62c"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z" />
            </svg>
          </a>
          <a
            href="https://www.twitter.com/Razer"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#44d62c"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.5 8.778c-.441.196-.916.328-1.414.388.509-.305.898-.787 1.083-1.362-.476.282-1.003.487-1.564.597-.448-.479-1.089-.778-1.796-.778-1.59 0-2.758 1.483-2.399 3.023-2.045-.103-3.86-1.083-5.074-2.572-.645 1.106-.334 2.554.762 3.287-.403-.013-.782-.124-1.114-.308-.027 1.14.791 2.207 1.975 2.445-.346.094-.726.116-1.112.042.313.978 1.224 1.689 2.3 1.709-1.037.812-2.34 1.175-3.647 1.021 1.09.699 2.383 1.106 3.773 1.106 4.572 0 7.154-3.861 6.998-7.324.482-.346.899-.78 1.229-1.274z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
