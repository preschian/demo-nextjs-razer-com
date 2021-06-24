/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

// components
import Link from 'next/link';
import { IconMenu, IconCart } from './Icons';
import HeaderMenu from './HeaderMenu';
import HeaderMenuDesktop from './HeaderMenuDesktop';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="h-14 fixed w-full z-20 bg-black left-0">
        <div className="flex items-center justify-between h-full container lg:px-6">
          {/* menu for mobile version */}
          <div
            className="px-6 lg:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          >
            <IconMenu isOpen={openMenu} />
          </div>

          {/* razer logo */}
          <div className="lg:pr-6">
            <Link href="/">
              <a>
                <img
                  src="https://hybrismediaprod.blob.core.windows.net/sys-master-phoenix-images-container/h56/h3c/9163652366366/razer-ths-logo.svg"
                  alt="Razer Logo"
                  className="w-8 h-8"
                />
              </a>
            </Link>
          </div>

          <div className="hidden lg:block w-full h-full">
            <HeaderMenuDesktop />
          </div>

          {/* cart */}
          <div className="px-6 lg:pr-0">
            <a
              href="https://www.razer.com/cart"
              target="_blank"
              rel="noreferrer"
            >
              <IconCart />
            </a>
          </div>
        </div>
      </div>

      {/* menu for mobile version */}
      {openMenu && <HeaderMenu />}
    </>
  );
}

export default Header;
