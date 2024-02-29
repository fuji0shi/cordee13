import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";
import type { NavbarItem } from "@/types";
import { ChevronDown } from "lucide-react";
import Icon from "@/components/lucide-react-icon";
import type dynamicIconImports from "lucide-react/dynamicIconImports";

type NavbarDropdownProps = {
  content: NavbarItem;
};

export const NavbarDropdown = (props: NavbarDropdownProps) => {
  const { content } = props;
  const router = useRouter();
  return content.items ? (
    <Dropdown>
      <DropdownTrigger className="cursor-pointer">
        <Button
          disableRipple
          className="bg-transparent p-0 data-[hover=true]:bg-transparent"
          endContent={<ChevronDown className="size-5" />}
          radius="sm"
          variant="light"
        >
          {content.title}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label={content.title}
        className="w-[340px]"
        itemClasses={{ base: "gap-4" }}
      >
        {content.items.map((item) => (
          <DropdownItem
            key={item.title}
            description="test description"
            onClick={() => router.push(item.href)}
            startContent={
              <Icon name={item.icon as keyof typeof dynamicIconImports} />
            }
          >
            {item.title}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  ) : (
    <Link href={content.href}>{content.title}</Link>
  );
};

export default NavbarDropdown;
