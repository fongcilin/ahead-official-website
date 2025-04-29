import { Icons } from '@/components/icons';
import { Typography } from '@/components/typography';
import { cn } from '@/lib/utils';

const advantages = [
  {
    id: 1,
    title: 'Fast',
    Icon: <Icons.FastClock className="h-16 w-16 text-zinc-700" />,
    description: `Up to 100X Faster than manual analysis. Enable batch processing before sign off.`,
    gradientFrom: 'from-blue-500',
    gradientTo: 'to-indigo-500',
  },
  {
    id: 2,
    title: 'Consistent',
    Icon: <Icons.PeopleConnection className="h-16 w-16 text-zinc-700" />,
    description: `Reproducible fully-automated analysis that mitigates operator variability.`,
    gradientFrom: 'from-purple-500',
    gradientTo: 'to-pink-500',
  },
  {
    id: 3,
    title: 'Adaptable & Scalable',
    Icon: <Icons.DataConnection className="h-16 w-16 text-zinc-700" />,
    description: `Adaptable across different platforms in a single analysis workflow.`,
    gradientFrom: 'from-pink-500',
    gradientTo: 'to-rose-500',
  },
];

export const HandleTheRest = () => {
  return (
    <div className="mx-auto flex max-w-[1080px] flex-col gap-y-10 px-4">
      <Typography.H2 className="mb-4 mt-10 text-center text-zinc-500">
        Your Expertise, Amplified. We Handle the Heavy Lifting
      </Typography.H2>
      <div className={cn('grid gap-y-8', 'lg:grid-cols-3 lg:gap-x-12')}>
        {advantages.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col items-center gap-y-5 overflow-hidden rounded-2xl bg-gradient-to-br from-white to-indigo-50 p-10 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Gradient top border */}
            <div 
              className={cn(
                "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r",
                item.gradientFrom,
                item.gradientTo
              )}
            />
            
            {/* Icon container */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-50 to-white shadow-lg">
              {item.Icon}
            </div>
            
            {/* Title with gradient text */}
            <Typography.H4 className="bg-gradient-to-r from-blue-900 to-gray-800 bg-clip-text text-transparent">
              {item.title}
            </Typography.H4>
            
            {/* Description text - optimized with condensed content and larger font */}
            <div className="h-20 flex flex-col justify-center px-2">
              <Typography.P className="text-zinc-500 text-base leading-snug">
                {item.description}
              </Typography.P>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};