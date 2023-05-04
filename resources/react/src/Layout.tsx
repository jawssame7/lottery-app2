import { Link } from '@inertiajs/inertia-react';

const Layout = ({ children }, { children: any }) => {
  return (
    <>
      <div className={'container mx-auto'}>
        <div className={'navbar bg-base-100'}>
          <div className={'flex-none'}>
            <div className={'dropdown'}>
              <label tabIndex={0} className={'btn btn-square btn-ghost'}>
                <svg
                  xmlns={'http://www.w3.org/2000/svg'}
                  fill={'none'}
                  viewBox={'0 0 24 24'}
                  className={'inline-block w-5 h-5 stroke-current'}
                >
                  <path
                    strokeLinecap={'round'}
                    strokeLinejoin={'round'}
                    strokeWidth={'2'}
                    d={'M4 6h16M4 12h16M4 18h16'}
                  ></path>
                </svg>
              </label>
              <ul
                tabIndex={0}
                className={
                  'menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
                }
              >
                <li>
                  <Link href={'/loto6'}>ロト6</Link>
                </li>
                <li>
                  <Link href={'/miniloto'}>ミニロト</Link>
                </li>
                <li>
                  <Link href={'/loto7'}>ロト7</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={'flex-1'}>
            <Link href={'/loto6'} className={'btn btn-ghost normal-case text-xl'}>
              ロト当選番号
            </Link>
          </div>
        </div>
        <div className={'w-full px-4 bg-base-100'}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
