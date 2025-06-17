import {Link} from 'react-router';
import type {
  CartApiQueryFragment,
  FooterQuery,
  HeaderQuery,
} from 'storefrontapi.generated';
import {Aside} from '~/components/Aside';
import { KonstaProvider, App, Toolbar } from 'konsta/react';
import { useDarkMode } from '~/context/ThemeContext';
import { TransitionLink } from './TransitionLink';


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
        <Aside.Provider>
          {children}
          <Toolbar top={false} className="bottom-0 fixed">
            <TransitionLink to="/collections">Collections</TransitionLink>
            <TransitionLink to="/">Home</TransitionLink>
            <TransitionLink to="/pages/عن-دخون">About</TransitionLink>
          </Toolbar>
        </Aside.Provider>
      </App>
    </KonstaProvider>
  );
}
