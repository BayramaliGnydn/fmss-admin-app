import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Card } from "@nextui-org/card";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import NavigationBars from "@/components/shared/LayoutItems/NavigationBars";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <NavigationBars>
            <Card className="h-full w-full">{children}</Card>
          </NavigationBars>
        </Providers>
      </body>
    </html>
  );
}
