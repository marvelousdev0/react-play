import { ReactNode } from 'react';
import { Link, Outlet, useLocation, useMatch } from 'react-router-dom';

function CustomLink({ to, children }: { to: string; children: ReactNode }) {
  const { pathname } = useLocation();
  const matchPath = useMatch(to);
  return (
    <Link
      to={to}
      className={`text-sm font-semibold leading-6 hover:text-gray-700 hover:underline ${matchPath?.pathname === pathname ? 'text-gray-900' : 'text-gray-600'}`}
    >
      {children}
    </Link>
  );
}

export default function Layout() {
  return (
    <>
      <div className="flex items-center gap-8 py-4 px-8">
        <img
          alt=""
          src="https://tailwindui.com/img/logos/mark.svg?color=slate&shade=600"
          className="h-8 w-auto"
        />
        <nav className="flex gap-4">
          <CustomLink to="/">Home</CustomLink>
          <CustomLink to="products">Products</CustomLink>
        </nav>
      </div>
      <div className="flex flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <Outlet />
      </div>
    </>
  );
}
