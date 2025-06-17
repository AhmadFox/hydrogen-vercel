import { Link, useNavigate } from "react-router";
import type { ReactNode, MouseEvent, AnchorHTMLAttributes } from "react";

interface TransitionLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: ReactNode;
}

export function TransitionLink({ to, children, ...props }: TransitionLinkProps) {
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    document.documentElement.setAttribute("data-nav", "push");

    if ((document as any).startViewTransition) {
      (document as any).startViewTransition(() => {
        navigate(to);
        setTimeout(() => {
          document.documentElement.removeAttribute("data-nav");
        }, 500);
      });
    } else {
      navigate(to);
      setTimeout(() => {
        document.documentElement.removeAttribute("data-nav");
      }, 500);
    }
  };

  return (
    <Link
      to={to}
      viewTransition
      prefetch="intent"
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}
