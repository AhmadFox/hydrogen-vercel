import {Link} from 'react-router';
import type {
  CartApiQueryFragment,
  FooterQuery,
  HeaderQuery,
} from 'storefrontapi.generated';
import {Aside} from '~/components/Aside';
import { KonstaProvider, App, Toolbar } from 'konsta/react';
import { useDarkMode } from '~/context/ThemeContext';


interface PageLayoutProps {
  cart: Promise<CartApiQueryFragment | null>;
  footer: Promise<FooterQuery | null>;
  header: HeaderQuery;
  isLoggedIn: Promise<boolean>;
  publicStoreDomain: string;
  children?: React.ReactNode;
}

export function PageLayout({children = null}: PageLayoutProps) {
  const { isDark } = useDarkMode();
  return (
    <KonstaProvider theme='ios' dark={isDark}>
      <App theme="ios" safeAreas dark={isDark} className={`${isDark && 'dark'}`}>
        <main>
          <Aside.Provider>
            {children}
            <Toolbar top={false} className="bottom-0 fixed">
              <Link to="/collections">Collections</Link>
              <Link to="/">Home</Link>
              <Link to="/pages/عن-دخون">About</Link>
            </Toolbar>
          </Aside.Provider>
        </main>
      </App>
    </KonstaProvider>
  );
}
