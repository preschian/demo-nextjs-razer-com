import React, { useState } from 'react';

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
              href={submenu.href}
              key={submenu.text}
              className="block text-lg pb-3 mb-3 ml-6 border-b border-black-lighter text-white"
              target="_blank"
              rel="noreferrer"
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
            <div key={menu.text}>
              <a
                onClick={() => setOpen(!isOpen)}
                className="text-lg items-start gap-2 pb-3 mb-3 border-b border-black-lighter flex"
              >
                <span>{menu.text}</span>
                <IconArrow />
              </a>
              {isOpen && <Submenus submenus={menu.submenus} />}
            </div>
          );
        }

        return (
          <a
            href={menu.href}
            key={menu.text}
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
  const [textSearch, setSearch] = useState('');

  function onEnter(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      window
        .open(`https://www.razer.com/search/${textSearch}`, '_blank')
        ?.focus();
    }
  }

  return (
    <div className="bg-black fixed inset-0 z-20 mt-14 p-6 text-black-lighter overflow-auto">
      <input
        type="text"
        className="w-full bg-black-light text-black-lighter py-2 px-3 rounded mb-6"
        placeholder="Search Razer.com"
        value={textSearch}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={onEnter}
      />
      <Navigation />
    </div>
  );
}

export default HeaderMenu;
