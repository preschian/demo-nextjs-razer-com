/* eslint-disable @next/next/no-img-element */
import { banners, banners_grid } from './data/banners';

// types
import { BannerType } from './data/banners';

// components
import BannerItem from './BannerItem';

export default function Banners() {
  const bannerElement = (data: BannerType) => {
    return data.map((banner) => {
      return (
        <BannerItem
          key={banner.title}
          links={banner.links}
          title={banner.title}
          subtitle={banner.subtitle}
          image={banner.image}
          image_desktop={banner.image_desktop}
        />
      );
    });
  };

  return (
    <div>
      {bannerElement(banners)}

      <div className="lg:grid lg:grid-cols-2 lg:gap-2">
        {bannerElement(banners_grid)}
      </div>
    </div>
  );
}
