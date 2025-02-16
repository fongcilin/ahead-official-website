import {
  type LinkBadgeItem,
  type LinkBadgesProps,
  LinkBadges,
} from "@/try-stuff/components/custom/link-badges";
import { cn } from "@/try-stuff/lib/utils";

const badges: LinkBadgeItem[] = [
  {
    id: "all",
    title: "All",
    className: cn("bg-black text-white", "hover:bg-white hover:text-black"),
  },
  {
    id: "global-bio-and-investment",
    title: "Global Bio and Investment",
    className: cn("bg-[#59B223] text-white", "hover:bg-[#234f08]"),
  },
  {
    id: "yahoo",
    title: "Yahoo",
    className: cn("bg-[#7D2EFE] text-white", "hover:bg-[#4f1a9f]"),
  },
  {
    id: "the-hub-news",
    title: "The Hub News",
    className: cn(
      "bg-gradient-to-r from-[#47278B] to-[#AB1D22] text-white",
      "hover:bg-gradient-to-r hover:from-[#2c1455] hover:to-[#7d0f11]"
    ),
  },
  {
    id: "the-storm-media",
    title: "The Storm Media",
    className: cn(
      "bg-gradient-to-r from-[#FF3838] to-[#3D3B37] text-white",
      "hover:bg-gradient-to-r hover:from-[#b71f1f] hover:to-[#2c2b28]"
    ),
  },
  {
    id: "bnext",
    title: "BNEXT",
    className: cn("bg-[#EB7401] text-white", "hover:bg-[#a94e01]"),
  },
];

export const NewsLinkBadges = (props: Omit<LinkBadgesProps, "data">) => {
  return <LinkBadges {...props} data={badges} />;
};
