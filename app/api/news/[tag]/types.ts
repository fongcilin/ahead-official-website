export type NewsTag =
  | 'all'
  | 'press_chinese'
  | 'press_english'
  | 'social_media'
  | 'publication'
  | 'conference';

export type NewsTitle =
  | 'All'
  | 'Press (Chinese)'
  | 'Press (English)'
  | 'Social Media'
  | 'Publication'
  | 'Conference';

export type News = {
  id: string;
  url: string;
  image: string;
  tag: Exclude<NewsTag, 'publication' | 'conference'>;
  title: string;
  footer: (
    | { variant: 'normal'; text: string }
    | { variant: 'border'; text: NewsTitle }
  )[];
};

export type HighlightNews = {
  id: string;
  url: string;
  image: string;
  tag: Extract<NewsTag, 'publication' | 'conference'>;
  title: string;
  footer: (
    | { variant: 'normal'; text: string }
    | { variant: 'border'; text: NewsTitle }
  )[];
  content?: {
    text: string;
    link?: string;
  };
};

export type GetNewsByIdResponseData = {
  data: News[];
  hasMore: boolean;
};
