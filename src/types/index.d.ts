export type SidebarAnchorProps = {
  title: string;
  href: string;
};
type AuthType = "login" | "register" | "forgot-password" | "reset-password";

export type LayoutProps = {
  children: React.ReactNode;
  isRightSidebar?: boolean;
  rightSidebar?: SidebarAnchorProps[];
  auth?: AuthType;
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

export type SidebarNavItem = {
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

export type NavMenuConfig = {
  association: SidebarNavItem[];
  activites: SidebarNavItem[];
  espace: SidebarNavItem[];
  links: MenuItem[];
};

export type ItemInfiniteMovingCards = {
  category: string;
  date: string;
  description?: string;
  href?: string;
};

import { type SendMailOptions } from "nodemailer";
export type SendMailProps = {
  toEmail: string;
  subject: string;
  content: SendMailOptions["html"];
};
