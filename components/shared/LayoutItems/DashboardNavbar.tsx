import React, { useContext } from "react";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import { usePathname } from "next/navigation";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Avatar } from "@nextui-org/avatar";

import { Home } from "@/components/icons";
import { LayoutContext } from "@/context/LayoutContext";

const DashboardNavbar = () => {
  const pathname = usePathname();
  const splittedPathnames = pathname.split("/").splice(1);
  const { userInformation } = useContext(LayoutContext);

  return (
    <Navbar isBordered height="80px" maxWidth="full">
      <NavbarBrand>
        <Breadcrumbs>
          <BreadcrumbItem href="/">{<Home />}</BreadcrumbItem>
          {splittedPathnames?.map((item, index) => (
            <BreadcrumbItem key={index}>{item}</BreadcrumbItem>
          ))}
        </Breadcrumbs>
      </NavbarBrand>
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <span className="flex gap-4 cursor-pointer items-center">
              <h2>
                {userInformation?.name} {userInformation?.lastName}
              </h2>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src={userInformation?.avatar ?? "/default-avatar.jpg"}
              />
            </span>
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
};

export default DashboardNavbar;
