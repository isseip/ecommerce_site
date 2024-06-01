'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Breadcrumbs() {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((x) => x);

  return (
    <div className="text-sm breadcrumbs p-4 bg-blue rounded-lg shadow-md">
      <ul className="flex space-x-2">
        <li>
          <Link href="/">
            <div className="text-white hover:text-white-800">Home</div>
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const href = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          return isLast ? (
            <li key={index} className="text-blue">
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </li>
          ) : (
            <li key={index}>
              <Link href={href}>
                <div className="text-white hover:text-white-800">
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Breadcrumbs;
