import { Link, type LinkProps, useLocation } from 'react-router-dom';

export function NavLink(props: LinkProps) {
  const { pathname } = useLocation();

  return (
    <Link
      data-current={pathname === props.to}
      className="flex border-spacing-4 items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground data-[current=true]:underline data-[current=true]:underline-offset-4"
      {...props}
    />
  );
}
