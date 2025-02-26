export type NewsTag =
  | 'all'
  | 'global-bio-and-investment'
  | 'the-hub-news'
  | 'yahoo-news'
  | 'the-storm-media'
  | 'bnext'
  | 'protocols'
  | 'linkedin'
  | 'pr-newswire'
  | 'science-direct';

export type NewsTitle =
  | 'All'
  | 'Global Bio and Investment'
  | 'The Hub News'
  | 'Yahoo News'
  | 'The Storm Media'
  | 'BNEXT'
  | 'Protocols'
  | 'LinkedIn'
  | 'PR Newswire'
  | 'Science Direct';

export type News = {
  id: string;
  url: string;
  image: string;
  tag: NewsTag;
  title: string;
  footer: (
    | { variant: 'normal'; text: string }
    | { variant: 'border'; text: NewsTitle }
  )[];
};

export type GetNewsByIdResponseData = {
  data: News[];
  hasMore: boolean;
};
