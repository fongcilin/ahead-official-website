import Image from "next/image";

import { Typography } from "@/try-stuff/components/typography";
import { AspectRatio } from "@/try-stuff/components/ui/aspect-ratio";
import { RedTextBlock } from "@/try-stuff/components/custom/red-text-block";
import { cn } from "@/try-stuff/lib/utils";

const feats = [
  {
    id: 1,
    image: "/images/ahead_logo.png",
    intro: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repellat fuga temporibus vel, iusto dignissimos nobis doloribus non rem eveniet sit labore dolorem earum obcaecati repellendus ratione. Totam, quis odio.`,
  },
  {
    id: 2,
    image: "/images/ahead_logo.png",
    intro: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repellat fuga temporibus vel, iusto dignissimos nobis doloribus non rem eveniet sit labore dolorem earum obcaecati repellendus ratione. Totam, quis odio.`,
  },
  {
    id: 3,
    image: "/images/ahead_logo.png",
    intro: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum repellat fuga temporibus vel, iusto dignissimos nobis doloribus non rem eveniet sit labore dolorem earum obcaecati repellendus ratione. Totam, quis odio.`,
  },
];

export default function Home() {
  return (
    <main className="pt-[120px] flex flex-col items-center space-y-20">
      <div className="px-4 flex flex-col space-x-0 space-y-10 max-w-[800px] mx-auto md:flex-row md:space-y-0 md:space-x-4">
        <section className="flex-1 flex flex-col space-y-6">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/images/ahead_logo.png"
              width={256}
              height={209}
              alt="Ahead logo"
              priority
            />
          </div>
          <Typography.H2 className="text-zinc-500 text-center md:text-left">
            Your AI Co-pilot in Medicine
          </Typography.H2>
        </section>
        <section className="flex-1 flex flex-col space-y-6">
          <div className="flex justify-center">
            <Image
              src="/images/ahead_logo.png"
              width={128}
              height={105}
              alt="Ahead logo"
              priority
            />
          </div>
          <Typography.Blockquote className="font-bold">
            AHEAD&apos;s Cyto-copilot technology revolutionizes workforce
            efficiency and precision medicine by specializing in enhancing flow
            cytometry analysis for research, clinical diagnostics, and cell
            therapy quality control.
          </Typography.Blockquote>
        </section>
      </div>
      <div className="w-screen bg-red-50">
        <div className="mx-auto max-w-[800px]">
          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.youtube.com/embed/EG-B5R5tYtQ"
              allow="autoplay; encrypted-media; fullscreen"
              width="100%"
              height="auto"
              style={{ aspectRatio: "16/9" }}
              title="intro video"
            />
          </AspectRatio>
        </div>
      </div>
      <div className="flex flex-col space-y-16 mx-auto max-w-[600px] px-4">
        {feats.map(({ id, image, intro }, i) => (
          <section
            key={id}
            className={cn(
              "flex flex-col space-y-6",
              "md:justify-center",
              i % 2 === 0
                ? "md:flex-row md:space-x-6"
                : "md:flex-row-reverse md:space-x-6 md:space-x-reverse"
            )}
          >
            <Image
              src={image}
              width={128}
              height={105}
              alt="Ahead logo"
              priority
              className="self-center"
            />
            <RedTextBlock>
              <Typography.P>{intro}</Typography.P>
            </RedTextBlock>
          </section>
        ))}
      </div>
    </main>
  );
}
