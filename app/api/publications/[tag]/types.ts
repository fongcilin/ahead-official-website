export type PublicationTag =
  | 'all'
  | 'peer-reviewed-conference-workshop-paper'
  | 'journal'
  | 'conference-speech';

export type PublicationTagName =
  | 'All'
  | 'PEER-REVIEWED CONFERENCE / WORKSHOP PAPER'
  | 'JOURNAL'
  | 'CONFERENCE SPEECH';

export type Publication = {
  id: string;
  url: string;
  image: string;
  tag: PublicationTag;
  tagName: PublicationTagName;
  title: string;
  author: string;
  footer: string;
};

export type GetPublicationByIdResponseData = {
  data: Publication[];
  hasMore: boolean;
};
