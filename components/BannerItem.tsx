// type
import { BannerType } from './data/banners';

function BannerItem({
  links,
  title,
  subtitle,
  image,
  image_desktop,
}: BannerType[0]) {
  const linkElement = links?.map((link) => {
    return (
      <a
        href="https://www.razer.com/gaming-laptops/razer-blade-14"
        target="_blank"
        className="px-4 flex items-center gap-1"
        rel="noreferrer"
        key={link.href}
      >
        <span className="border-b border-transparent hover:border-white">
          {link.text}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-green"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </a>
    );
  });
  const imageElement = (src = '', platform = 'mobile') => {
    return (
      <div
        className={`absolute inset-0 bg-cover bg-center ${
          platform === 'mobile' ? 'block lg:hidden' : 'hidden lg:block'
        }`}
        style={{ height: '100%', backgroundImage: `url("${src}")` }}
      />
    );
  };

  return (
    <div
      style={{ minHeight: '40rem' }}
      className="bg-cover bg-center relative overflow-hidden"
      key={title}
    >
      {imageElement(image)}
      {imageElement(image_desktop, 'desktop')}
      <div className="container text-center relative z-10">
        <h1 className="pt-24 text-3xl font-medium lg:text-5xl">{title}</h1>
        <h2 className="text-lg mt-2 lg:text-2xl">{subtitle}</h2>
        <div className="flex mt-1 justify-center">{linkElement}</div>
      </div>
    </div>
  );
}

export default BannerItem;
