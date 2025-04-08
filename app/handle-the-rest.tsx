import { Icons } from '@/components/icons';
import { Typography } from '@/components/typography';
import { cn } from '@/lib/utils';

const advantages = [
  {
    id: 1,
    title: 'Fast',
    Icon: <Icons.FastClock className="h-16 w-16 text-zinc-700" />,
    descriptions: [
      `Up to 100X Faster than current manual analysis`,
      `Enable batch analysis and triage before report sign off`,
    ],
  },
  {
    id: 2,
    title: 'Consistent',
    Icon: <Icons.PeopleConnection className="h-16 w-16 text-zinc-700" />,
    descriptions: [
      `Reproducible fully-automated analysis that mitigate inter-operator variabilities`,
    ],
  },
  {
    id: 3,
    title: 'Adaptable & Scalable',
    Icon: <Icons.DataConnection className="h-16 w-16 text-zinc-700" />,
    descriptions: [
      `Instrument & Reagent Agnostics`,
      `Adaptable Across Different Research & Clinical Applications`,
    ],
  },
];

export const HandleTheRest = () => {
  return (
    <div className="mx-auto flex max-w-[1280px] flex-col gap-y-10 px-4">
      <Typography.H2 className="my-10 text-center text-zinc-500">
        Focus on your proficiency, let us handle the rest
      </Typography.H2>
      <div className={cn('grid gap-y-8', 'lg:grid-cols-3 lg:gap-x-12')}>
        {advantages.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-y-5 rounded-md bg-zinc-50 p-6 text-center shadow-md"
          >
            {item.Icon}
            <Typography.H4 className="text-zinc-600">
              {item.title}
            </Typography.H4>
            <div>
              {item.descriptions.map((item, i) => (
                <Typography.P
                  key={i}
                  className={cn('text-zinc-500', '[&:not(:first-child)]:mt-0')}
                >
                  {item}
                </Typography.P>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
