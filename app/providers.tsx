"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

import { LayoutContext, UserInformation } from "@/context/LayoutContext";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const [sideBar, setSideBar] = React.useState(true);
  const [userInformation, setUserInformation] =
    React.useState<UserInformation>();
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider {...themeProps}>
        <LayoutContext.Provider
          value={{ sideBar, setSideBar, userInformation, setUserInformation }}
        >
          {children}
        </LayoutContext.Provider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
