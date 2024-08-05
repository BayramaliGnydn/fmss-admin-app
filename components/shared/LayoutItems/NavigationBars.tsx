"use client";
import React, { useContext } from "react";

import { LayoutContext } from "@/context/LayoutContext";
import Sidebar from "@/components/shared/LayoutItems/Sidebar";
import Box from "@/components/shared/UI/Box";
import DashboardNavbar from "@/components/shared/LayoutItems/DashboardNavbar";

interface NavigationBarsprops {
  children: React.ReactNode;
}

const NavigationBars = ({ children }: NavigationBarsprops) => {
  const { sideBar } = useContext(LayoutContext);

  return (
    <Box className="w-full justify-end">
      <Sidebar />
      <Box
        className={`flex-col gap-4 ${sideBar ? "lg:w-[calc(100%_-_300px)]" : "w-full"} w-full transition-all duration-700`}
      >
        <DashboardNavbar />
        <Box className="px-6">{children}</Box>
      </Box>
    </Box>
  );
};

export default NavigationBars;
