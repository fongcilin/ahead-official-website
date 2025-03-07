import { Icons } from '@/try-stuff/components/icons';
import { Typography } from '@/try-stuff/components/typography';
import { PinkTextBlock } from '@/try-stuff/components/custom/pink-text-block';
import { cn } from '@/try-stuff/lib/utils';

const advantages = [
  {
    id: 1,
    title: 'Fast',
    Icon: <Icons.FastClock className="h-[120px] w-[120px] text-zinc-400" />,
    descriptions: [
      `Up to 100X Faster than current manual analysis`,
      `Enable batch analysis and triage before report sign off`,
    ],
  },
  {
    id: 2,
    title: 'Consistent',
    Icon: (
      <Icons.PeopleConnection className="h-[120px] w-[120px] text-zinc-400" />
    ),
    descriptions: [
      `Reproducible fully-automated analysis that mitigate inter-operator variabilities`,
    ],
  },
  {
    id: 3,
    title: 'Adaptable & Scalable',
    Icon: (
      <Icons.DataConnection className="h-[120px] w-[120px] text-zinc-400" />
    ),
    descriptions: [
      `Instrument & Reagent Agnostics`,
      `Adaptable Across Different Research & Clinical Applications`,
    ],
  },
];

export const HandleTheRest = () => {
  return (
    <div className="mx-auto flex max-w-[960px] flex-col gap-y-10 px-4">
      <Typography.H2 className="my-10 text-center text-zinc-500">
        Focus on your proficiency, let us handle the rest
      </Typography.H2>
      <div className={cn('grid gap-y-8', 'md:grid-cols-3 md:gap-x-12')}>
        {advantages.map((item) => (
          <div key={item.id} className="flex flex-col items-center gap-y-6">
            <div className="flex w-full justify-center rounded-t-md bg-gradient-to-b from-red-200 to-red-100 p-6">
              {item.Icon}
            </div>
            <Typography.H4 className="text-zinc-500">
              {item.title}
            </Typography.H4>
            <PinkTextBlock className="w-full flex-1 rounded-b-full rounded-t-none from-red-100 to-red-50 text-center">
              {item.descriptions.map((item, i) => (
                <Typography.P key={i} className="[&:not(:first-child)]:mt-0">
                  {item}
                </Typography.P>
              ))}
            </PinkTextBlock>
          </div>
        ))}
      </div>
    </div>
  );
};
