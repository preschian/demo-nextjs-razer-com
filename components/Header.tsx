/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

// components
import Link from 'next/link';
import { IconMenu, IconCart } from './Icons';
import HeaderMenu from './HeaderMenu';

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="h-14 fixed w-full z-20 bg-black">
        <div className="flex items-center justify-between h-full">
          <div className="px-6" onClick={() => setOpenMenu(!openMenu)}>
            <IconMenu isOpen={openMenu} />
          </div>
          <div>
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
          <div className="px-6">
            <IconCart />
          </div>
        </div>
      </div>
      {openMenu && <HeaderMenu />}
    </>
  );
}

export default Header;
