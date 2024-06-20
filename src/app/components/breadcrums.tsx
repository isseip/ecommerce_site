'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../theme/themeContext';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);
  const { theme } = useTheme();
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';

  return (
    <div className="text-sm breadcrumbs p-4 rounded-lg shadow-md">
      <ul className="flex space-x-2">
        <li>
          <Link href="/">
            <div className={`hover:underline ${textColor}`}>Home</div>
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const href = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <li key={index} className={`${textColor}`}>
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </li>
          ) : (
            <li key={index}>
              <Link href={href}>
                <div className={`hover:underline ${textColor}`}>
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;

