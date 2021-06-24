// data
import { useState } from 'react';
import { menus } from './data/header';

function HeaderMenuDesktop() {
  const [openSearch, setOpen] = useState(false);
  const [textSearch, setSearch] = useState('');

  function onEnter(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      window
        .open(`https://www.razer.com/search/${textSearch}`, '_blank')
        ?.focus();
    }
  }

  return (
    <div className="flex justify-around text-black-lighter relative h-full items-center">
      {menus.map((menu) => {
        return (
          <a
            key={menu.text}
            href={menu.href || menu.link}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            {menu.text}
          </a>
        );
      })}

      {/* search button */}
      <div onClick={() => setOpen(true)} className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* search bar */}
      {openSearch && (
        <div className="absolute inset-0">
          <input
            type="text"
            className="bg-black-light h-full w-full focus:outline-none px-4"
            placeholder="Search Razer.com"
            value={textSearch}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={onEnter}
          />

          <div
            className="absolute top-0 right-0 p-4 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderMenuDesktop;
