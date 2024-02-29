export type SidebarAnchorProps = {
  title: string;
  href: string;
};

export type LayoutProps = {
  children: React.ReactNode;
  isRightSidebar?: boolean;
  rightSidebar?: SidebarAnchorProps[];
};

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  icon?: string;
};
export type MenuItem = NavItem & {
  description?: string;
  launched?: boolean;
  external?: boolean;
};

export type MainNavItem = NavItem;

export type NavbarItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
} & (
  | {
      href: string;
      items?: never;
    }
  | {
      href?: string;
      items: MenuItem[];
    }
);
