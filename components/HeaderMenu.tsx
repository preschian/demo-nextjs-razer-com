import { useState } from 'react';

// data
import { menus } from './data/header';

// type
import type { Submenu } from './data/header';

// components
import { IconArrowRight, IconArrowLeft } from './Icons';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  const IconArrow = () => {
    if (isOpen) {
      return <IconArrowLeft />;
    }
    return <IconArrowRight />;
  };

  const Submenus = ({ submenus }: { submenus: Submenu }) => {
    return (
      <>
        {submenus.map((submenu) => {
          return (
            <a
              href=""
              key={submenu.href}
              className="block text-lg pb-3 mb-3 ml-6 border-b border-black-lighter text-white"
            >
              {submenu.text}
            </a>
          );
        })}
      </>
    );
  };

  return (
    <>
      {menus.map((menu) => {
        if (menu.submenus) {
          return (
            <>
              <a
                key={menu.href}
                onClick={() => setOpen(!isOpen)}
                className="text-lg items-start gap-2 pb-3 mb-3 border-b border-black-lighter flex"
              >
                <span>{menu.text}</span>
                <IconArrow />
              </a>
              {isOpen && <Submenus submenus={menu.submenus} />}
            </>
          );
        }

        return (
          <a
            href={menu.href}
            key={menu.href}
            className="block text-lg pb-3 mb-3 border-b border-black-lighter"
            target="_blank"
            rel="noreferrer"
          >
            {menu.text}
          </a>
        );
      })}
    </>
  );
};

function HeaderMenu() {
  return (
    <div className="bg-black fixed inset-0 z-20 mt-14 p-6 text-black-lighter overflow-auto">
      <Navigation />
    </div>
  );
}

export default HeaderMenu;
