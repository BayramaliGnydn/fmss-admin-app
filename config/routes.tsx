import {
  DiscordIcon,
  GithubIcon,
  Home,
  SunFilledIcon,
  TwitterIcon,
} from "@/components/icons";

export const routes = [
  {
    key: "home",
    name: "Home",
    route: "/",
    icon: <Home color="white" />,
  },
  {
    key: "docs",
    collapse: true,
    name: "Docs",
    icon: <DiscordIcon color="white" />,
    routes: [
      {
        key: "doc1",
        name: "Doc1",
        route: "/docs/doc1",
        icon: <GithubIcon color="white" />,
      },
      {
        key: "doc2",
        name: "Doc2",
        route: "/docs/doc2",
        icon: <SunFilledIcon color="white" />,
      },
    ],
  },
  {
    key: "about",
    name: "About",
    route: "/about",
    icon: <TwitterIcon color="white" />,
  },
];
