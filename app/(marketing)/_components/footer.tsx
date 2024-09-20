// import {
//   InstagramLogoIcon,
//   LinkedInLogoIcon,
//   TwitterLogoIcon,
// } from '@radix-ui/react-icons';

// interface Icon {
//   icon: JSX.Element;
//   url: string;
// }

// // const icons: Icon[] = [
// //   { icon: <LinkedInLogoIcon />, url: '#' },
// //   { icon: <InstagramLogoIcon />, url: '#' },
// //   { icon: <TwitterLogoIcon />, url: '#' },
// // ];

import appInfo from '@/lib/appInfo';

type Link = {
  text: string;
  url: string;
};

const links: Link[] = [
  { text: 'Privacy Policy', url: '/privacy-policy' },
  { text: 'Terms of Service', url: '/terms-of-service' },
  { text: 'Contact', url: '#' },
];

export function Footer() {
  return (
    <footer className="flex flex-col gap-y-5 rounded-lg px-7 py-5 md:px-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
            {appInfo.name}
          </h2>
        </div>

        {/* <div className="flex gap-x-2">
          {icons.map((icon, index) => (
            <a
              key={index}
              href={icon.url}
              className="flex h-5 w-5 items-center justify-center text-neutral-400 transition-all duration-100 ease-linear hover:text-neutral-900 hover:underline hover:underline-offset-4 dark:font-medium dark:text-neutral-500 hover:dark:text-neutral-100"
            >
              {icon.icon}
            </a>
          ))}
        </div> */}
      </div>
      <div className="flex flex-col justify-between gap-y-5 md:flex-row md:items-center">
        <ul className="flex flex-col gap-x-5 gap-y-2 text-neutral-500 md:flex-row md:items-center ">
          {links.map((link, index) => (
            <li
              key={index}
              className="text-[15px]/normal font-medium text-neutral-400 transition-all duration-100 ease-linear hover:text-neutral-900 hover:underline hover:underline-offset-4 dark:font-medium dark:text-neutral-400 hover:dark:text-neutral-100"
            >
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between text-sm font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
          <p>All right reserverd.</p>
        </div>
      </div>
    </footer>
  );
}
