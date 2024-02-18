export type SidebarAnchorProps = {
  title: string;
  href: string;
};

export type LayoutProps = {
  children: React.ReactNode;
  isRightSidebar?: boolean;
  rightSidebar?: SidebarAnchorProps[];
};
