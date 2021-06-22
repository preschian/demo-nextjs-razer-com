// data
import { menus, otherMenus } from './data/footer';

// components
import FooterSocial from './FooterSocial';

const menusComponent = menus.map((menu) => {
  return (
    <div
      key={menu.title}
      className="mb-4 pb-4 border-b border-black-lighter lg:flex-1"
    >
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
            <span className="border-b border-transparent hover:text-white hover:border-white">
              {submenu.text}
            </span>
          </a>
        );
      })}
    </div>
  );
});
const otherMenusComponent = otherMenus.map((other) => {
  return (
    <a href={other.href} key={other.href} target="_blank" rel="noreferrer">
      <span className="border-b border-transparent hover:text-white hover:border-white">
        {other.text}
      </span>
    </a>
  );
});

export default function footer() {
  return (
    <div className="container p-6">
      <div className="lg:flex">
        {menusComponent}
        <FooterSocial className="hidden lg:block flex-1 text-right mb-4 pb-4 border-b border-black-lighter" />
      </div>

      <div className="lg:flex lg:justify-between">
        <p className="mt-7 text-center text-xs lg:text-black-lighter lg:mt-0">
          Copyright © 2021 Razer Inc. All rights reserved. For demo purposes
          only
        </p>
        <div className="text-xs mt-7 pb-7 text-black-lighter flex justify-between border-b border-black-lighter lg:border-0 lg:pb-0 lg:mt-0 lg:gap-6">
          {otherMenusComponent}
        </div>
      </div>

      <FooterSocial className="block lg:hidden" />
    </div>
  );
}
