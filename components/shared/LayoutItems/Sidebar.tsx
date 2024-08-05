"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { usePathname } from "next/navigation";

import { LayoutContext } from "@/context/LayoutContext";
import Box from "@/components/shared/UI/Box";
import { routes } from "@/config/routes";
import SidebarAccordion from "@/components/shared/LayoutItems/SidebarAccordion";

const Sidebar = () => {
  const { sideBar, setSideBar } = useContext(LayoutContext);
  const pathname = usePathname();
  const splittedRoute = pathname.split("/");
  const baseRoute = splittedRoute[1];
  const subRoute = splittedRoute[2];

  return (
    <Box
      className={`bg-primary rounded-md absolute w-[250px] top-1/2 -translate-y-1/2 transition-all duration-700 ${sideBar ? "left-[25px]" : "left-[-260px]"} h-[90%] z-50`}
    >
      <Box className="relative w-full">
        <button
          className="absolute right-2 top-2 text-white"
          onClick={() => setSideBar((prev) => !prev)}
        >
          X
        </button>
        {!sideBar && (
          <Button
            className="absolute top-1/2 -right-16 px-0 min-w-[50px] text-white"
            color="primary"
            size="sm"
            onClick={() => setSideBar((prev) => !prev)}
          >{`>`}</Button>
        )}
        <Box className="flex-col w-full items-center p-8">
          <Box className="w-full items-center flex-col px-4 py-8">
            <Image className="object-contain" src="/fmss.png" width={200} />
          </Box>
          <div
            className="h-[1px] w-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255, 255, 255, 0), #ffffff, rgba(255, 255, 255, 0))",
            }}
          />
          <Box className="flex flex-col gap-2 w-[200px] py-2 overflow-y-scroll scrollbar-hide">
            {routes.map((item, index) => (
              <Box key={index} className="w-full">
                {item.collapse ? (
                  <SidebarAccordion
                    baseRoute={baseRoute}
                    item={item}
                    subRoute={subRoute}
                  />
                ) : (
                  <Link
                    className={`flex items-center gap-4 w-full h-[56px] hover:bg-[rgba(255,255,255,0.2)] p-2 rounded-md ${baseRoute === item.key ? "bg-[rgba(255,255,255,0.2)]" : ""}`}
                    href={item.route!}
                  >
                    {item.icon}
                    <p className="text-white">{item.name}</p>
                  </Link>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
