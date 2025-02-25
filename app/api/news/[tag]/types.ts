export type NewsTag =
  | 'all'
  | 'global-bio-and-investment'
  | 'the-hub-news'
  | 'yahoo-news'
  | 'the-storm-media'
  | 'bnext'
  | 'protocols';

export type News = {
  id: string;
  url: string;
  image: string;
  tag: NewsTag;
  title: string;
  footer: { variant: 'border' | 'normal'; text: string }[];
};

export type GetNewsByIdResponseData = {
  data: News[];
  hasMore: boolean;
};
