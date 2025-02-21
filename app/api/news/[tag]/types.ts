export type NewsTag =
  | 'all'
  | 'global-bio-and-investment'
  | 'the-hub-news'
  | 'yahoo'
  | 'the-storm-media'
  | 'bnext'
  | 'protocols';

export type News = {
  id: string;
  url: string;
  image: string;
  tag: NewsTag;
  title: string;
  footer: string;
};

export type GetNewsByIdResponseData = {
  data: News[];
  hasMore: boolean;
};
