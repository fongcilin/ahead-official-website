import type { News, HighlightNews } from './types';

export const newsList: (News | HighlightNews)[] = [
  {
    id: "https://www.moneydj.com/kmdj/news/newsviewer.aspx?a=b925b413-9f8c-4184-a179-2e73a4e81239",
    url: "https://www.moneydj.com/kmdj/news/newsviewer.aspx?a=b925b413-9f8c-4184-a179-2e73a4e81239",
    image: "/images/news/moneydj_logo.jpg",
    tag: "press_chinese",
    title: "先勁智能攜秀傳/吉泰 AI輔助診斷軟體醫材開啟商轉",
    is_highlight: false,
    footer: [
    { variant: "border", text: "Press (Chinese)" },
    { variant: "normal", text: "2025-04-30" }
    ]
  },
  {
   id: "https://www.ctee.com.tw/news/20250429701410-430504",
   url: "https://www.ctee.com.tw/news/20250429701410-430504",
   image: "/images/news/ctee.png",
   tag: "press_chinese",
   title: "新創AI輔助癌症精準診斷 先勁智能與秀傳醫院、吉泰藥品合作商轉",
   is_highlight: false,
   footer: [
    { variant: "border", text: "Press (Chinese)" },
    { variant: "normal", text: "2025-04-29" }
  ]
 },
 {
    id: 'https://tw.stock.yahoo.com/news/%E6%96%B0%E5%89%B5ai%E8%BC%94%E5%8A%A9%E7%99%8C%E7%97%87%E7%B2%BE%E6%BA%96%E8%A8%BA%E6%96%B7-%E5%85%88%E5%8B%81%E6%99%BA%E8%83%BD%E8%88%87%E7%A7%80%E5%82%B3%E9%86%AB%E9%99%A2-%E5%90%89%E6%B3%B0%E8%97%A5%E5%93%81%E5%90%88%E4%BD%9C%E5%95%86%E8%BD%89-081238970.html',
    url: 'https://tw.stock.yahoo.com/news/%E6%96%B0%E5%89%B5ai%E8%BC%94%E5%8A%A9%E7%99%8C%E7%97%87%E7%B2%BE%E6%BA%96%E8%A8%BA%E6%96%B7-%E5%85%88%E5%8B%81%E6%99%BA%E8%83%BD%E8%88%87%E7%A7%80%E5%82%B3%E9%86%AB%E9%99%A2-%E5%90%89%E6%B3%B0%E8%97%A5%E5%93%81%E5%90%88%E4%BD%9C%E5%95%86%E8%BD%89-081238970.html',
    image: '/images/news/yahoo.jpg',
    tag: 'press_chinese',
    title: '新創AI輔助癌症精準診斷 先勁智能與秀傳醫院、吉泰藥品合作商轉',
    is_highlight: false,
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2025-04-29' }
    ]
  },  
  { 
    id: 'https://news.gbimonthly.com/tw/article/show.php?num=76500', 
    url: 'https://news.gbimonthly.com/tw/article/show.php?num=76500', 
    image: '/images/news/gbimonthly_logo.jpg', 
    tag: 'press_chinese', 
    title: '先勁結盟秀傳、吉泰啟動商轉 年底送FDA、啟動Pre-A輪募資', 
    is_highlight: true, 
    footer: [
      { variant: 'border', text: 'Press (Chinese)' }, 
      { variant: 'normal', text: '2025-04-29' }
    ] 
  },
  {
    id: 'https://www.nist.gov/news-events/events/2025/06/ai-and-flow-cytometry-workshop',
    url: 'https://www.nist.gov/news-events/events/2025/06/ai-and-flow-cytometry-workshop',
    image: '/images/news/nist.jpg',
    tag: 'conference',
    title: 'NIST-FDA-NIAID Co-Organized "AI and Flow Cytometry Workshop"',
    is_highlight: true,
    footer: [
      { variant: 'border', text: 'Conference' },
      { variant: 'normal', text: '2025-06-10' },
    ],
  },
  {
    id: 'https://learning.isac-net.org/products/introduction-to-ml-and-ai#tab-product_tab_contents__3',
    url: 'https://learning.isac-net.org/products/introduction-to-ml-and-ai#tab-product_tab_contents__3',
    image: '/images/news/cyto_university.png',
    tag: 'conference',
    title: 'Introduction to ML and AI (Webinars)',
    is_highlight: true,
    footer: [
      { variant: 'border', text: 'Conference' },
      { variant: 'normal', text: '2025-05-14' },
    ],
  },
  {
    id: 'https://www.nist.gov/programs-projects/nist-flow-cytometry-standards-consortium',
    url: 'https://www.nist.gov/programs-projects/nist-flow-cytometry-standards-consortium',
    image: '/images/news/nist-flow-cytometry-standards-consortium.png',
    tag: 'press_english',
    title: 'AHEAD Joins NIST Flow Cytometry Standards Consortium for Cell and Gene Therapy',
    is_highlight: true,
    footer: [
      { variant: 'border', text: 'Press (English)' },
      { variant: 'normal', text: '2025-03-26' },
    ],
  },
  {
    id: 'https://ynews.page.link/ikmMq',
    url: 'https://ynews.page.link/ikmMq',
    image: '/images/news/yahoo.jpg',
    tag: 'press_chinese',
    is_highlight: true,
    title: '彰濱秀傳醫院與先勁智能合作 用AI革新血癌與淋巴癌診斷',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2025-03-22' },
    ],
  },
  {
    id: 'https://news.gbimonthly.com/tw/article/show.php?num=74245',
    url: 'https://news.gbimonthly.com/tw/article/show.php?num=74245',
    image: '/images/news/gbimonthly_logo.jpg',
    tag: 'press_chinese',
    title: '先勁智能AI落地彰濱秀傳 革新血癌與淋巴癌診斷',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2025-02-06' },
    ],
  },
  {
    id: 'https://www.thehubnews.net/archives/480531',
    url: 'https://www.thehubnews.net/archives/480531',
    image: '/images/news/the_hub_news.png',
    tag: 'press_chinese',
    title: '彰濱秀傳與先勁智能合作　利用AI人工智慧革新血癌與淋巴癌診斷',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2025-02-06' },
    ],
  },
  {
    id: 'https://tw.news.yahoo.com/%E5%BD%B0%E6%BF%B1%E7%A7%80%E5%82%B3%E9%86%AB%E9%99%A2%E8%88%87%E5%85%88%E5%8B%81%E6%99%BA%E8%83%BD%E5%90%88%E4%BD%9C-%E7%94%A8ai%E9%9D%A9%E6%96%B0%E8%A1%80%E7%99%8C%E8%88%87%E6%B7%8B%E5%B7%B4%E7%99%8C%E8%A8%BA%E6%96%B7-124200974.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAANFQWaSbMcGJwsu12wypE-H2VesvxHm-ktPQryjel1dEIooedddIMujYQ8G9VWJMWpCCoEhIKjpN6SvhJ4BVHz3eekuVhJhx_Gs072ZBjY-DZ6zVbiF1n2ClmssW-3v6BmWfIpNd4O_6vIPYVtlTgoKf4RTjkMugHAuogghAIZ28',
    url: 'https://tw.news.yahoo.com/%E5%BD%B0%E6%BF%B1%E7%A7%80%E5%82%B3%E9%86%AB%E9%99%A2%E8%88%87%E5%85%88%E5%8B%81%E6%99%BA%E8%83%BD%E5%90%88%E4%BD%9C-%E7%94%A8ai%E9%9D%A9%E6%96%B0%E8%A1%80%E7%99%8C%E8%88%87%E6%B7%8B%E5%B7%B4%E7%99%8C%E8%A8%BA%E6%96%B7-124200974.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAANFQWaSbMcGJwsu12wypE-H2VesvxHm-ktPQryjel1dEIooedddIMujYQ8G9VWJMWpCCoEhIKjpN6SvhJ4BVHz3eekuVhJhx_Gs072ZBjY-DZ6zVbiF1n2ClmssW-3v6BmWfIpNd4O_6vIPYVtlTgoKf4RTjkMugHAuogghAIZ28',
    image: '/images/news/yahoo.jpg',
    tag: 'press_chinese',
    title: '彰濱秀傳醫院與先勁智能合作 用AI革新血癌與淋巴癌診斷',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2025-02-06' },
    ],
  },
  {
    id: 'https://www.cna.com.tw/postwrite/chi/392571',
    url: 'https://www.cna.com.tw/postwrite/chi/392571',
    image: '/images/news/cna_2025_01_15.png',
    tag: 'press_chinese',
    title:
      '醫療、生醫國際合作 花蓮慈院、台灣愛維盛、美國AbVision攜手「攻克癌症」',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2025-01-15' },
    ],
  },
  {
    id: 'https://isac-net.org/page/Innovators',
    url: 'https://isac-net.org/page/Innovators',
    image: '/images/news/isac-logo.png',
    tag: 'press_english',
    is_highlight: true,
    title: 'AHEAD CEO Joins ISAC Leadership Development Program as International Innovator',
    footer: [
      { variant: 'border', text: 'Press (English)' },
      { variant: 'normal', text: '2024-12-05' },
    ],
  },
  {
    id: 'https://www.storm.mg/article/5281954',
    url: 'https://www.storm.mg/article/5281954',
    image: '/images/news/ahead_x_thestormmedia_2.jpg',
    tag: 'press_chinese',
    title: '血癌檢測百倍速！先勁智能創新AI輔助診斷技術，憑實力闖出名聲',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2024-11-28' },
    ],
  },
  {
    id: 'https://www.storm.mg/article/5244678',
    url: 'https://www.storm.mg/article/5244678',
    image: '/images/news/ahead_x_thestormmedia_1.jpg',
    tag: 'press_chinese',
    title: '風傳媒「AI醫療領航大獎」 台北榮總、中國附醫、神瑞獲獎',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2024-09-26' },
    ],
  },
  {
    id: 'https://www.bnext.com.tw/article/79722/taiwan-ai-award-2024',
    url: 'https://www.bnext.com.tw/article/79722/taiwan-ai-award-2024',
    image: '/images/news/bnext.jpg',
    tag: 'press_chinese',
    title: '2024台灣AI大賞｜台灣新護國神山，這10家台灣企業領跑AI市場',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2024-07-24' },
    ],
  },
  {
    id: 'https://www.bnext.com.tw/article/79724/ahead-medicine--taiwan-impact-ai-award-2024?fbclid=IwZXh0bgNhZW0CMTEAAR2FMKGfuNp44PijwiNORHP7YxyM2kUyLLuDPcIXXdxdpovs_gAh6UKws7M_aem_JVtBF8MwYFFhTdbMUCPEgQ',
    url: 'https://www.bnext.com.tw/article/79724/ahead-medicine--taiwan-impact-ai-award-2024?fbclid=IwZXh0bgNhZW0CMTEAAR2FMKGfuNp44PijwiNORHP7YxyM2kUyLLuDPcIXXdxdpovs_gAh6UKws7M_aem_JVtBF8MwYFFhTdbMUCPEgQ',
    image: '/images/news/bnext_interview.png',
    tag: 'press_chinese',
    is_highlight: true,
    title:
      '2024台灣AI大賞｜7秒鐘找出異常細胞！先勁智能用AI加持判讀，成果登入聖經教科書',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2024-07-24' },
    ],
  },
  {
    id: 'https://news.gbimonthly.com/tw/magazine/article_show.php?num=68041',
    url: 'https://news.gbimonthly.com/tw/magazine/article_show.php?num=68041',
    image: '/images/news/gbimonthly_logo.jpg',
    tag: 'press_chinese',
    title: '30分鐘變7秒!先勁智能AI血癌檢驗平台寫下經典教科書',
    is_highlight: true,
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2024-05-27' },
    ],
  },
  {
    id: 'https://news.gbimonthly.com/tw/article/show.php?num=67379&page=1&category=&kw=%E6%95%B8%E4%BD%8D%E7%97%85%E7%90%86',
    url: 'https://news.gbimonthly.com/tw/article/show.php?num=67379&page=1&category=&kw=%E6%95%B8%E4%BD%8D%E7%97%85%E7%90%86',
    image: '/images/news/gbimonthly_logo.jpg',
    tag: 'press_chinese',
    title: '數位病理學里程碑!美國IVD大廠Quest收購PathAI資產',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2024-05-03' },
    ],
  },
  {
    id: 'https://link.springer.com/protocol/10.1007/978-1-0716-3738-8_16',
    url: 'https://link.springer.com/protocol/10.1007/978-1-0716-3738-8_16',
    image: '/images/news/2024_flow_cytometry_protocols.png',
    title:
      'Using Artificial Intelligence to Interpret Clinical Flow Cytometry Datasets for Automated Disease Diagnosis and/or Monitoring',
    tag: 'publication',
    is_highlight: false,
    footer: [
      { variant: 'border', text: 'Publication' },
      { variant: 'normal', text: '2024-03-26' },
    ],
  },
  {
    id: 'https://www.linkedin.com/posts/international-society-for-advancement-of-cytometry_congratulations-to-our-march-ldp-featured-activity-7170833059481653250-uA5A/?utm_source=share&utm_medium=member_desktop',
    url: 'https://www.linkedin.com/posts/international-society-for-advancement-of-cytometry_congratulations-to-our-march-ldp-featured-activity-7170833059481653250-uA5A/?utm_source=share&utm_medium=member_desktop',
    image: '/images/news/2024_isac_international_innovator.jpg',
    title: 'ISAC 2024 Leadership Development Program recipients',
    tag: 'social_media',
    footer: [{ variant: 'border', text: 'Social Media' }],
  },
  {
    id: 'https://www.prnewswire.com/news-releases/ahead-medicine-corporation-reveals-cross-test-aml-diagnostic-technique-at-ash-2023-302032407.html?tc=eml_cleartime',
    url: 'https://www.prnewswire.com/news-releases/ahead-medicine-corporation-reveals-cross-test-aml-diagnostic-technique-at-ash-2023-302032407.html?tc=eml_cleartime',
    image: '/images/news/ahead_x_ash_2023.jpg',
    title:
      'AHEAD Medicine Corporation Reveals Cross-Test AML Diagnostic Technique at ASH 2023',
    tag: 'press_english',
    footer: [
      { variant: 'border', text: 'Press (English)' },
      { variant: 'normal', text: '2024-01-11' },
    ],
  },
  {
    id: 'ahead-x-cyto-2023',
    url: '',
    image: '/images/news/iccs2023_poster.png',
    title:
      'Exciting News! AHEAD and BD Bioscience Join Forces to Present at CYTO 2023 Conference',
    tag: 'conference',
    is_highlight: false,
    footer: [
      { variant: 'border', text: 'Conference' },
      { variant: 'normal', text: '2023-05' },
    ],
    content: {
      text: `We are thrilled to announce that AHEAD, in collaboration with BD Bioscience, will be presenting at the highly anticipated CYTO 2023 conference. As one of the semi-finalists in the CYTO 2023 Innovation Showcase, we are excited to share our cutting-edge work in the field of automated analysis. Our joint presentation will focus on the innovative automated analysis of OneFlow LST (lymphoma screening test) utilizing AHEAD's advanced technology. If you're attending CYTO 2023, we invite you to stop by our poster presentation to learn more about our groundbreaking work. For those unable to attend the conference, we have also prepared an informative innovation video that you can watch below.`,
      link: 'https://youtu.be/Ze4CBZaRCAY',
    },
  },
  {
    id: 'https://www.youtube.com/watch?v=Ze4CBZaRCAY&ab_channel=AndreaWang',
    url: 'https://www.youtube.com/watch?v=Ze4CBZaRCAY&ab_channel=AndreaWang',
    image: '/images/news/iccs2023_poster.png',
    tag: 'conference',
    title: 'AHEAD and BD Biosciences Present Automated Lymphoma Screening Analysis at CYTO, ESCCA and ICCS',
    is_highlight: true,
    footer: [
      { variant: 'border', text: 'Conference' },
      { variant: 'normal', text: '2023-03-11' },
    ],
  },
  {
    id: 'https://www.sciencedirect.com/science/article/abs/pii/S000649712311620X',
    url: 'https://www.sciencedirect.com/science/article/abs/pii/S000649712311620X',
    image: '/images/news/ahead_x_ash_2023.jpg',
    tag: 'conference',
    title: 'AHEAD will be giving poster presentation at ASH 2023',
    is_highlight: false,
    footer: [
      { variant: 'border', text: 'Conference' },
      { variant: 'normal', text: '2022-11-02' },
    ],
  },
  {
    id: 'https://meet.bnext.com.tw/articles/view/49618',
    url: 'https://meet.bnext.com.tw/articles/view/49618',
    image: '/images/news/meet_taipei_2022.jpg',
    title:
      'AHEAD is honor to be one of the selected 2022 Neo Stars in the Meet Taipei convention',
    tag: 'press_chinese',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2022-10-18' },
    ],
  },
  {
    id: 'https://escca.eu/programme/programme',
    url: 'https://escca.eu/programme/programme',
    image: '/images/news/escca_2022.jpg',
    title: 'AHEAD will be giving an oral presentation at ESCCA 2022.',
    is_highlight: false,
    tag: 'conference',
    footer: [
      { variant: 'border', text: 'Conference' },
      { variant: 'normal', text: '2022-09' },
    ],
  },
  {
    id: 'https://www.nist.gov/programs-projects/nist-flow-cytometry-standards-consortium',
    url: 'https://www.nist.gov/programs-projects/nist-flow-cytometry-standards-consortium',
    image: '/images/news/nist.jpg',
    title:
      'AHEAD is honored to be part of NIST flow cytometry standards consortium.',
    is_highlight: false,
    tag: 'conference',
    footer: [
      { variant: 'border', text: 'Conference' },
      { variant: 'normal', text: '2022-07' },
    ],
  },
  {
    id: 'https://www.abstractsonline.com/pp8/#!/10517/presentation/21452',
    url: 'https://www.abstractsonline.com/pp8/#!/10517/presentation/21452',
    image: '/images/news/aacr_2022.jpg',
    tag: 'conference',
    title: 'AHEAD Medicine has poster presentation at AACR 2022.',
    is_highlight: false,
    footer: [
      { variant: 'border', text: 'Conference' },
      { variant: 'normal', text: '2022-04-11' },
    ],
  },
  {
    id: 'https://blog.lifesciencenation.com/2022/01/13/companies-to-watch-in-2022/',
    url: 'https://blog.lifesciencenation.com/2022/01/13/companies-to-watch-in-2022/',
    image: '/images/news/next_phase_newsletter_2022_01.jpg',
    tag: 'press_english',
    title: 'AHEAD Medicine is listed as one of the companies to watch in 2022.',
    footer: [
      { variant: 'border', text: 'Press (English)' },
      { variant: 'normal', text: '2022-01-13' },
    ],
  },
  {
    id: 'paul_wallace',
    url: '',
    image: '/images/news/paul_wallace.jpg',
    tag: 'conference',
    title: 'Dr. Paul Wallace becomes Scientific Advisor to AHEAD Medicine.',
    is_highlight: false,
    footer: [{ variant: 'border', text: 'Conference' }],
    content: {
      text: `We are thrilled to announce that Dr. Paul Wallace, the former Director of Flow and Image Cytometry and Professor of Oncology at Roswell Park Cancer Institute and a Past President of the International Society for Advancement of Cytometry (ISAC), is joining AHEAD Medicine as Scientific Advisor. With Dr. Wallace’s expertise and leadership in clinical cytometry, we will bring AHEAD’s innovation in cytometry to the next level. See more on LinkedIn.`,
      link: 'https://www.linkedin.com/in/paul-wallace-82870a8/',
    },
  },
  {
    id: 'https://www.eettaiwan.com/20211116nt11-first-ee-awards-asia-disclosed-all-the-winners/',
    url: 'https://www.eettaiwan.com/20211116nt11-first-ee-awards-asia-disclosed-all-the-winners/',
    image: '/images/news/ee_awards.png',
    tag: 'press_chinese',
    title: '先勁智能（AHEAD Intelligence）榮獲EE Awards-亞洲金選獎',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2021-11-16' },
    ],
  },
  {
    id: 'https://www.worldjournal.com/wj/story/121472/5795981',
    url: 'https://www.worldjournal.com/wj/story/121472/5795981',
    image: '/images/news/world_journal.jpg',
    tag: 'press_chinese',
    title: '矽谷台灣新創團隊 人工智慧七秒診斷血癌',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2021-11-16' },
    ],
  },
  {
    id: 'https://www.eettaiwan.com/20211116nt11-first-ee-awards-asia-disclosed-all-the-winners/',
    url: 'https://www.eettaiwan.com/20211116nt11-first-ee-awards-asia-disclosed-all-the-winners/',
    image: '/images/news/20211116nt11-first-ee-awards-asia-disclosed-all-the-winners.jpg',
    tag: 'press_chinese',
    title: 'AHEAD Awarded EE Asia Start-Up Award for Innovation in Medical Technology',
    is_highlight: true,
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2021-11-16' },
    ],
  },
  {
    id: 'https://publichealth.berkeley.edu/posts/berkeley-taiwan-accelerator-connection/',
    url: 'https://publichealth.berkeley.edu/posts/berkeley-taiwan-accelerator-connection/',
    image: '/images/news/berkeley_public_health.png',
    tag: 'social_media',
    title:
      'AHEAD concluded the inaugural cohort of Berkeley-Taiwan Health Innovation Accelerator Program with a high note.',
    footer: [
      { variant: 'border', text: 'Social Media' },
      { variant: 'normal', text: '2021-11' },
    ],
  },
  {
    id: 'ahead-x-iccs-2021-10-11',
    url: '',
    image: '/images/news/iccs.jpeg',
    tag: 'conference',
    title: 'AHEAD Medicine has poster presentation at ICCS 2021.',
    is_highlight: false,
    footer: [
      { variant: 'border', text: 'Conference' },
      { variant: 'normal', text: '2021-10-11' },
    ],
    content: {
      text: `On Monday, Oct 11th at 4:30-6pm EDT (GMT-4), the poster section would be held both in person and online at the ICCS 2021. AHEAD will be presenting preliminary results from the Mayo Collaboration.`,
    },
  },
  {
    id: 'https://futurology.life/52-most-innovative-berkeley-based-machine-learning-companies/',
    url: 'https://futurology.life/52-most-innovative-berkeley-based-machine-learning-companies/',
    image: '/images/news/berkeley_2.jpg',
    tag: 'social_media',
    title:
      'AHEAD Medicine is one of the best Berkeley based Machine Learning companies.',
    footer: [
      { variant: 'border', text: 'Social Media' },
      { variant: 'normal', text: '2021-10-11' },
    ],
  },
  {
    id: 'https://meet.bnext.com.tw/blog/view/36801',
    url: 'https://meet.bnext.com.tw/blog/view/36801',
    image: '/images/news/berkeley.jpg',
    tag: 'press_chinese',
    title:
      '2021 Taiwan-Berkeley Health Innovations Accelerator ─ Berkeley Public Health Program',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2021-07' },
    ],
  },
  {
    id: 'https://www.teamdoor.io/blog/ahead-intelligence',
    url: 'https://www.teamdoor.io/blog/ahead-intelligence',
    image: '/images/news/teamdoor.png',
    tag: 'press_chinese',
    title: '醫療科技企業的招募策略，專訪 AHEAD Intelligence',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2021-06' },
    ],
  },
  {
    id: 'https://meet.bnext.com.tw/articles/view/47758',
    url: 'https://meet.bnext.com.tw/articles/view/47758',
    image: '/images/news/meet.png',
    tag: 'press_chinese',
    title:
      '只要七秒！AHEAD Intelligence用AI提升血癌診斷效率，不再錯過醫療的黃金時間',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2021-06-08' },
    ],
  },
  {
    id: 'https://ctee.com.tw/industrynews/biotechnology/381289.html',
    url: 'https://ctee.com.tw/industrynews/biotechnology/381289.html',
    image: '/images/news/ctee.png',
    tag: 'press_chinese',
    title: '先鋒智能 人工智能7秒判讀血癌醫療數據',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2020-12-04' },
    ],
  },
  {
    id: 'https://www.facebook.com/AppWorksAccelerator/posts/3509612692423472',
    url: 'https://www.facebook.com/AppWorksAccelerator/posts/3509612692423472',
    image: '/images/news/ahead_x_appworks.jpg',
    tag: 'social_media',
    title:
      'AHEAD Medicine is presenting at Appworks Demo Day on Oct 15th Taipei time. Register to listen to the presentation on Livestream.',
    footer: [
      { variant: 'border', text: 'Social Media' },
      { variant: 'normal', text: '2020-09-21' },
    ],
  },
  {
    id: 'https://www.hlth.com/virtual/startup-pitch',
    url: 'https://www.hlth.com/virtual/startup-pitch',
    image: '/images/news/ahead_x_hlth.jpg',
    tag: 'social_media',
    title:
      'AHEAD Medicine is excited to present at the virtual HTLH 2020 as one of the 15 startup pitch finalists on Oct 14 3:50pm EST',
    footer: [
      { variant: 'border', text: 'Social Media' },
      { variant: 'normal', text: '2020-10' },
    ],
  },
  {
    id: 'https://live.remo.co/e/networking-series-platform-techn',
    url: 'https://live.remo.co/e/networking-series-platform-techn',
    image: '/images/news/ahead_x_bio.jpg',
    tag: 'conference',
    title:
      'AHEAD Medicine is presenting at BIO Investor Forum and will be joining the diagnostics and digital health nextwork serious on Oct 14th 1pm EST',
    is_highlight: false,
    footer: [
      { variant: 'border', text: 'Conference' },
      { variant: 'normal', text: '2020-10-15' },
    ],
  },
  {
    id: 'https://www.digitimes.com.tw/iot/article.asp?cat=158&cat1=20&id=0000594419_O4H5D2C50TOWN1L03NFY3',
    url: 'https://www.digitimes.com.tw/iot/article.asp?cat=158&cat1=20&id=0000594419_O4H5D2C50TOWN1L03NFY3',
    image: '/images/news/digitimes.png',
    tag: 'press_chinese',
    title: 'AHEAD Medicine執行長王毓棻：創業路上沒有白走的岔路',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2020-09-24' },
    ],
  },
  {
    id: 'ahead-x-cyto-2020-08',
    url: '',
    image: '/images/news/ahead_x_cyto.jpg',
    tag: 'conference',
    title: 'AHEAD Medicine has made her way to the ISAC CYTO Showcase Finalist',
    is_highlight: false,
    footer: [
      { variant: 'border', text: 'Conference' },
      { variant: 'normal', text: '2020-08' },
    ],
    content: {
      text: `On Thursday, August 5th at 9am EDT (GMT-4), the showcase would be held live online and the panel will select one winner, to be announced later in the day. let's meet on the showcase! Virtually, of course.`,
    },
  },
  {
    id: 'https://buzzorange.com/techorange/2020/07/21/2020-bio-asia-ministry-of-science-and-technology-gloria/',
    url: 'https://buzzorange.com/techorange/2020/07/21/2020-bio-asia-ministry-of-science-and-technology-gloria/',
    image: '/images/news/tech_orange.png',
    tag: 'press_chinese',
    title:
      '亞洲生技大展即將登場，台灣展現奈米醫材、AI 智能檢測的先進技術成果！',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2020-07-21' },
    ],
  },
  {
    id: 'https://isac-net.org/events/eventdetails.aspx?id=1387525#',
    url: 'https://isac-net.org/events/eventdetails.aspx?id=1387525#',
    image: '/images/news/cyto_2020.png',
    tag: 'conference',
    title: 'AHEAD Selected as CYTO 2020 Technology Showcase Finalist',
    is_highlight: true,
    footer: [
      { variant: 'border', text: 'Conference' },
      { variant: 'normal', text: '2020-07-20' },
    ],
  },
  {
    id: 'ahead-bms',
    url: '',
    image: '/images/news/ahead_x_bms.jpg',
    title:
      'AHEAD Medicine collaborates with BMS to develop response prediction model for Multiple Myeloma treatment',
    is_highlight: false,
    tag: 'conference',
    footer: [
      { variant: 'border', text: 'Conference' },
      { variant: 'normal', text: '2020-06' },
    ],
    content: {
      text: `AHEAD Medicine is thrilled to kick off our pilot collaboration with the oncology translational medicine team at BMS to develop multiple myeloma treatment response prediction models. We aim to develop transformational approaches to support multiple myeloma precision medicine.`,
    },
  },
  {
    id: 'ahead-x-islh',
    url: '',
    image: '/images/news/ahead_x_islh_2020.jpg',
    tag: 'conference',
    title:
      'AHEAD Medicine partners with University of Pittsburgh to present at the 2020 ISLH',
    is_highlight: false,
    footer: [
      { variant: 'border', text: 'Conference' },
      { variant: 'normal', text: '2020-06' },
    ],
    content: {
      text: `AHEAD Medicine and University of Pittsburgh will jointly present a virtual poster entitled "Distinction between acute leukemia subtypes and non-neoplastic pancytopenia using flow cytometry data with a machine learning approach" in the upcoming International Society for Laboratory Medicine (ISLH) virtual meeting from June 22nd to Sep 25th, 2020.`,
    },
  },
  {
    id: 'ahead-x-skydeck',
    url: '',
    image: '/images/news/ahead_x_skydeck.png',
    tag: 'conference',
    title:
      'AHEAD Medicine is officially one of the Berkeley SkyDeck 2020 Spring cohorts',
    is_highlight: false,
    footer: [
      { variant: 'border', text: 'Conference' },
      { variant: 'normal', text: '2020-04' },
    ],
    content: {
      text: `We are thrilled to announce that AHEAD Medicine has been selected as one of the official Berkeley SkyDeck 2020 Spring cohorts. We are really honored and excited that AHEAD Medicine stands out among over 1600 contestants worldwide and really looking forward to embark on our moonshot journey with SkyDeck.`,
    },
  },
  {
    id: 'ahead-x-pittsburgh',
    url: '',
    image: '/images/news/ahead_x_pittsburgh.jpg',
    tag: 'conference',
    title:
      'AHEAD Medicine partners with University of Pittsburgh to develop AI-enabled blood cancer triage platform',
    is_highlight: false,
    footer: [
      { variant: 'border', text: 'Conference' },
      { variant: 'normal', text: '2020-03' },
    ],
    content: {
      text: `AHEAD partners with University of Pittsburgh to develop and commercialize an AI-based blood cancer triage tool that streamlines flow cytometry data analysis. This tool expedites precise diagnosis and opens the window for rapid lifesaving treatment.`,
    },
  },
  {
    id: 'https://www.linkedin.com/feed/update/urn:li:activity:6603160610265976832/?fbclid=IwAR2CRAIYQtY4ZesJHOORrRsGM0faReh_pLdhh_Z1xycHeEwnE5Tnzbww41M',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:6603160610265976832/?fbclid=IwAR2CRAIYQtY4ZesJHOORrRsGM0faReh_pLdhh_Z1xycHeEwnE5Tnzbww41M',
    title: "Hello Tomorrow's Deep Tech Pioneers",
    tag: 'social_media',
    image: '/images/news/hello_tomorrow.jpg',
    footer: [
      { variant: 'border', text: 'Social Media' },
      { variant: 'normal', text: '2019-11-29' },
    ],
  },
  {
    id: 'https://www.digitimes.com.tw/iot/article.asp?cat=158&id=0000572899_oqe7yvp3lapxh081lo4yc&fbclid=iwar2gyu05tgzc0obtt4ez6t88ox5yxwbjvpxb8dhappckwzzawx1uq8ttdpu',
    url: 'https://www.digitimes.com.tw/iot/article.asp?cat=158&id=0000572899_oqe7yvp3lapxh081lo4yc&fbclid=iwar2gyu05tgzc0obtt4ez6t88ox5yxwbjvpxb8dhappckwzzawx1uq8ttdpu',
    title: 'AHEAD打造全面性AI臨床輔助系統',
    tag: 'press_chinese',
    image: '/images/news/digitimes.png',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2019-11-29' },
    ],
  },
  {
    id: 'https://news.ltn.com.tw/news/life/paper/1332499',
    url: 'https://news.ltn.com.tw/news/life/paper/1332499',
    title: '全球最快 7秒判讀血癌檢體',
    tag: 'press_chinese',
    image: '/images/news/ltn.jpg',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2019-11-29' },
    ],
  },
  {
    id: 'https://skyportal.berkeley.edu/taipei/global-innovation-partners/ahead',
    url: 'https://skyportal.berkeley.edu/taipei/global-innovation-partners/ahead',
    title: 'The top global accelerator for the world’s leading startups',
    tag: 'social_media',
    image: '/images/news/skydeck.jpg',
    footer: [
      { variant: 'border', text: 'Social Media' },
      { variant: 'normal', text: '2019' },
    ],
  },
  {
    id: 'https://youtu.be/_4bb_SOJD2s',
    url: 'https://youtu.be/_4bb_SOJD2s',
    title: '【非凡新聞】開啟全球智慧醫療商機 科技部率團前進全球醫療高峰會展',
    tag: 'press_chinese',
    image: '/images/news/ustv.png',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2019-09-24' },
    ],
  },
  {
    id: 'https://www.digitimes.com.tw/iot/article.asp?cat=158&cat1=20&cat2=21&id=0000561260_3hd1h3y07sqn9alohzo4n',
    url: 'https://www.digitimes.com.tw/iot/article.asp?cat=158&cat1=20&cat2=21&id=0000561260_3hd1h3y07sqn9alohzo4n',
    title: '30分鐘縮至7秒 新創AHEAD協助醫師血液診斷3D視覺化',
    tag: 'press_chinese',
    image: '/images/news/digitimes.png',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2019-06-04' },
    ],
  },
  {
    id: 'https://www.ithome.com.tw/news/131063',
    url: 'https://www.ithome.com.tw/news/131063',
    title:
      '智慧醫療風席捲臺灣學術界，臺清交成和北醫等開始將多年AI研究精髓產業化，甚至成立醫療AI新創',
    tag: 'press_chinese',
    image: '/images/news/ithome.png',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2019-06-04' },
    ],
  },
  {
    id: 'https://www.eettaiwan.com/news/article/20190305NT31-AI-techs-enable-smart-healthcare',
    url: 'https://www.eettaiwan.com/news/article/20190305NT31-AI-techs-enable-smart-healthcare',
    title: 'AI技術加持 智慧醫療應用飛速發展',
    tag: 'press_chinese',
    image: '/images/news/eet.png',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2019-03-05' },
    ],
  },
  {
    id: 'https://www.eettaiwan.com/20190211nt11-see-how-taiwan-new-innovations-improve-human-life-with-advanced-technology/',
    url: 'https://www.eettaiwan.com/20190211nt11-see-how-taiwan-new-innovations-improve-human-life-with-advanced-technology/',
    title: '來看台灣新創如何以技術實力改善人類生活！',
    tag: 'press_chinese',
    image: '/images/news/eet.png',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2019-02-11' },
    ],
  },
  {
    id: 'https://www.facebook.com/watch/?v=445060232692824',
    url: 'https://www.facebook.com/watch/?v=445060232692824',
    image: '/images/news/team_intro.png',
    tag: 'social_media',
    title: '[TEAM INTRO #15] - AHEAD',
    footer: [
      { variant: 'border', text: 'Social Media' },
      { variant: 'normal', text: '2018-12-19' },
    ],
  },
  {
    id: 'https://technews.tw/2018/12/20/ntu-nthu-ai-blood-measure-equipment-ahead',
    url: 'https://technews.tw/2018/12/20/ntu-nthu-ai-blood-measure-equipment-ahead',
    image: '/images/news/tech_news.png',
    tag: 'press_chinese',
    title: '台大清大開發 AI 血液檢測工具，血癌判讀精準度躍升、大幅節省時間',
    footer: [
      { variant: 'border', text: 'Press (Chinese)' },
      { variant: 'normal', text: '2018-12-20' },
    ],
  },
];
