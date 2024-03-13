export const Footer = () => {
  return (
    <footer className="flex min-h-20 flex-row justify-between">
      <div className="flex items-center">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 fuji0shi. All rights reserved.
        </span>
      </div>
      <ul className="mb-6 hidden items-center gap-8 text-sm font-medium text-gray-500 sm:mb-0 lg:flex lg:flex-wrap dark:text-gray-400">
        <li>
          <a href="#" className="hover:underline">
            En savoir plus
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            RGPD
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Licence
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
