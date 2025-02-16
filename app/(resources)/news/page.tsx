import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { Typography } from "@/try-stuff/components/typography";
import { AspectRatio } from "@/try-stuff/components/ui/aspect-ratio";

import { NewsLinkBadges } from "./news-link-badges";

const news = [
  {
    id: "https://news.gbimonthly.com/tw/article/show.php?num=74245",
    title: "先勁智能AI落地彰濱秀傳 革新血癌與淋巴癌診斷",
    url: "https://news.gbimonthly.com/tw/article/show.php?num=74245",
    image: "/images/news/gbimonthly_logo.jpg",
    tag: "global-bio-and-investment",
  },
  {
    id: "https://www.thehubnews.net/archives/480531",
    title: "彰濱秀傳與先勁智能合作　利用AI人工智慧革新血癌與淋巴癌診斷",
    url: "https://www.thehubnews.net/archives/480531",
    image: "/images/news/the_hub_news.png",
    tag: "the-hub-news",
  },
  {
    id: "https://tw.news.yahoo.com/%E5%BD%B0%E6%BF%B1%E7%A7%80%E5%82%B3%E9%86%AB%E9%99%A2%E8%88%87%E5%85%88%E5%8B%81%E6%99%BA%E8%83%BD%E5%90%88%E4%BD%9C-%E7%94%A8ai%E9%9D%A9%E6%96%B0%E8%A1%80%E7%99%8C%E8%88%87%E6%B7%8B%E5%B7%B4%E7%99%8C%E8%A8%BA%E6%96%B7-124200974.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAANFQWaSbMcGJwsu12wypE-H2VesvxHm-ktPQryjel1dEIooedddIMujYQ8G9VWJMWpCCoEhIKjpN6SvhJ4BVHz3eekuVhJhx_Gs072ZBjY-DZ6zVbiF1n2ClmssW-3v6BmWfIpNd4O_6vIPYVtlTgoKf4RTjkMugHAuogghAIZ28",
    title: "彰濱秀傳醫院與先勁智能合作 用AI革新血癌與淋巴癌診斷",
    url: "https://tw.news.yahoo.com/%E5%BD%B0%E6%BF%B1%E7%A7%80%E5%82%B3%E9%86%AB%E9%99%A2%E8%88%87%E5%85%88%E5%8B%81%E6%99%BA%E8%83%BD%E5%90%88%E4%BD%9C-%E7%94%A8ai%E9%9D%A9%E6%96%B0%E8%A1%80%E7%99%8C%E8%88%87%E6%B7%8B%E5%B7%B4%E7%99%8C%E8%A8%BA%E6%96%B7-124200974.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAANFQWaSbMcGJwsu12wypE-H2VesvxHm-ktPQryjel1dEIooedddIMujYQ8G9VWJMWpCCoEhIKjpN6SvhJ4BVHz3eekuVhJhx_Gs072ZBjY-DZ6zVbiF1n2ClmssW-3v6BmWfIpNd4O_6vIPYVtlTgoKf4RTjkMugHAuogghAIZ28",
    image: "/images/news/yahoo.jpg",
    tag: "yahoo",
  },
  {
    id: "https://www.storm.mg/article/5281954",
    title: "2024 the storm media medAI award",
    url: "https://www.storm.mg/article/5281954",
    image: "/images/news/ahead_x_thestormmedia_2.jpg",
    tag: "the-storm-media",
  },
  {
    id: "https://www.storm.mg/article/5244678",
    title: "2024 the storm media medAI award",
    url: "https://www.storm.mg/article/5244678",
    image: "/images/news/ahead_x_thestormmedia_1.jpg",
    tag: "the-storm-media",
  },
  {
    id: "https://www.bnext.com.tw/article/79722/taiwan-ai-award-2024",
    title: "2024 Taiwan AI Award",
    url: "https://www.bnext.com.tw/article/79722/taiwan-ai-award-2024",
    image: "/images/news/bnext.jpg",
    tag: "bnext",
  },
];

type Params = Promise<{ id?: string }>;

export default async function News({ params }: { params: Params }) {
  const { id } = await params;

  const filteredNews =
    id === undefined || id === "all"
      ? news
      : news.filter((item) => item.tag === id);

  // Redirect to /news if no news found
  if (filteredNews.length === 0) {
    redirect("/news");
  }

  return (
    <main className="pt-[120px] max-w-[960px] mx-auto w-full px-4 flex flex-col gap-8 md:flex-row-reverse">
      <NewsLinkBadges className="self-start w-full md:sticky md:top-[120px] md:w-[240px]" />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredNews.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            target="_blank"
            className="flex flex-col gap-y-2"
          >
            {/* The value of sizes="(max-width: 768px) 600px, 320px" is just an around number observing from browser */}
            <AspectRatio ratio={16 / 9}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 600px, 320px"
                priority
                className="rounded-md object-cover"
              />
            </AspectRatio>
            <Typography.H4>{item.title}</Typography.H4>
          </Link>
        ))}
      </div>
    </main>
  );
}
