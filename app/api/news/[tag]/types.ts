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
  | 'science-direct'
  | 'cna'
  | 'ahead-self'
  | 'meet'
  | 'escca'
  | 'nist'
  | 'aacr'
  | 'life-science-nation'
  | 'berkeley-public-health'
  | 'ee-taiwan'
  | 'world-journal'
  | 'futurology-life'
  | 'teamdoor'
  | 'ctee'
  | 'app-works'
  | 'hlth'
  | 'live-remo'
  | 'digitimes'
  | 'tech-orange'
  | 'ltn'
  | 'berkeley-skydeck'
  | 'ustv'
  | 'ithome'
  | 'eet'
  | 'facebook'
  | 'technews';

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
  | 'Science Direct'
  | 'CNA'
  | 'Ahead Self'
  | 'Meet'
  | 'ESCCA'
  | 'NIST'
  | 'AACR'
  | 'Life Science Nation'
  | 'Berkeley Public Health'
  | 'EE Taiwan'
  | 'World Journal'
  | 'Futurology Life'
  | 'Teamdoor'
  | 'CTEE'
  | 'App Works'
  | 'HLTH'
  | 'Live Remo'
  | 'Digitimes'
  | 'Tech Orange'
  | 'LTN'
  | 'Berkeley Skydeck'
  | 'USTV'
  | 'iThome'
  | 'EE Times'
  | 'Facebook'
  | 'TechNews';

export type News = {
  id: string;
  url: string;
  image: string;
  tag: Exclude<NewsTag, 'ahead-self'>;
  title: string;
  footer: (
    | { variant: 'normal'; text: string }
    | { variant: 'border'; text: NewsTitle }
  )[];
};

export type AheadSelfNews = {
  id: string;
  url: '';
  image: string;
  tag: Extract<NewsTag, 'ahead-self'>;
  title: string;
  footer: (
    | { variant: 'normal'; text: string }
    | { variant: 'border'; text: NewsTitle }
  )[];
  content: {
    text: string;
    link?: string;
  };
};

export type GetNewsByIdResponseData = {
  data: (News | AheadSelfNews)[];
  hasMore: boolean;
};
