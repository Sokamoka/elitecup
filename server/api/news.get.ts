export default defineEventHandler((event) => {
  const {id, lang } = getQuery(event);
  if (id) {
    return mockNews.find((item) => item.id === Number(id));
  }
  return mockNews.filter(article => article.lang === lang);
});

const mockNews = [
  {
    id: 0,
    lang: 'en',
    createdAt: new Date(2023, 10, 5),
    title: 'Bystrica happy with ELITE CUP competition',
    lead: 'On the first weekend of April, Székesfehérvár will be one of the three venues to host the U16 Bauer Elite Cup 4th round',
    content: 'Content',
    image: 'https://www.elitecup.eu/_upload/news_pic/750x420/4_10743.jpg',
  },
  {
    id: 1,
    lang: 'en',
    createdAt: new Date(2023, 10, 4),
    title: 'Title 2',
    lead: 'On the first weekend of April, Székesfehérvár will be one of the three venues to host.',
    content: 'Title 2',
    image: 'https://www.elitecup.eu/_upload/news_pic/750x420/4_10743.jpg',
  },
  {
    id: 2,
    lang: 'en',
    createdAt: new Date(2023, 8, 5),
    title: 'Title 3',
    lead: 'Short description 3. On the first weekend of April, Székesfehérvár will be one of the three venues to host.',
    content: 'Title 2',
    image: 'https://www.elitecup.eu/_upload/news_pic/750x420/4_10743.jpg',
  },
  {
    id: 3,
    lang: 'en',
    createdAt: new Date(2023, 8, 5),
    title: 'Title 4',
    lead: 'Short description 4',
    content: 'Content 4',
    image: 'https://www.elitecup.eu/_upload/news_pic/750x420/4_10743.jpg',
  },
  {
    id: 4,
    lang: 'en',
    createdAt: new Date(2023, 8, 3),
    title: 'Title 5',
    lead: 'Short description 5',
    content: 'Content 5',
    image: 'https://www.elitecup.eu/_upload/news_pic/750x420/4_10743.jpg',
  },
  {
    id: 5,
    lang: 'hu',
    createdAt: new Date(2023, 8, 3),
    title: 'Title 5',
    lead: 'Short description 5',
    content: 'Content 5',
    image: 'https://www.elitecup.eu/_upload/news_pic/750x420/4_10743.jpg',
  },
  {
    id: 6,
    lang: 'hu',
    createdAt: new Date(2023, 8, 3),
    title: 'Title 6',
    lead: 'Short description 6',
    content: 'Content 6',
    image: 'https://www.elitecup.eu/_upload/news_pic/750x420/4_10743.jpg',
  },
];
