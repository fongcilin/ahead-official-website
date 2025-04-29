import { fetchAllHighlightNewsData } from '@/app/api/news/[tag]/server-fetches';
import { cn } from '@/lib/utils';
import { HighlightsCarousel } from './highlights-carousel';

export const Highlights = async () => {
  const newsData = await fetchAllHighlightNewsData();

  return (
    <div
      className={cn(
        'mx-auto flex w-screen flex-col gap-y-2 px-4',
        'lg:max-w-[960px]',
      )}
    >
      {/* Vibrant style header with gradient text and properly spaced underline */}
      <div className="mb-10 text-center">
        {/* Title with extra bottom margin to account for descenders in letters like "g" */}
        <h2 
          className="inline-block font-bold bg-gradient-to-r from-orange-400 via-red-500 to-red-600 bg-clip-text pb-8 text-6xl text-transparent"
        >
          Highlights
        </h2>
        
        {/* Separate div for underline with proper positioning */}
        <div className="relative h-2 w-full mt-2">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 rounded-sm"></div>
        </div>
      </div>
      
      <HighlightsCarousel newsData={newsData} />
    </div>
  );
};