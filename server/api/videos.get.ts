export default defineEventHandler(() => {
  return mockVideos;
});

const mockVideos = [
  {
    id: '0',
    image: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
    title: 'Barani-HSMH Banska Bystrica - EC Red Bull Salzburg',
    externalLink: 'https://www.youtube.com/watch?v=OTZP7UWz3Tw',
    date: new Date(2022, 9, 12)
  },
  {
    id: '1',
    image: 'https://flowbite.com/docs/images/people/profile-picture-1.jpg',
    title: 'Barani-HSMH Banska Bystrica - EC Red Bull Salzburg',
    externalLink: 'https://www.youtube.com/watch?v=OTZP7UWz3Tw',
    date: new Date(2022, 9, 10)
  },
  {
    id: '2',
    image: '',
    title: 'DVTK Jegesmedvék Akadémia - Eishockey Akademie Steiermark',
    externalLink: 'https://www.youtube.com/watch?v=OTZP7UWz3Tw',
    date: new Date(2022, 9, 8)
  },
  {
    id: '3',
    image: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
    externalLink: 'https://www.youtube.com/watch?v=OTZP7UWz3Tw',
    title: 'HC Kosice - FEHA19',
    date: new Date(2022, 9, 8)
  },
  {
    id: '4',
    image: 'https://flowbite.com/docs/images/people/profile-picture-4.jpg',
    externalLink: 'https://www.youtube.com/watch?v=OTZP7UWz3Tw',
    title: 'HC Kosice - FEHA19',
    date: new Date(2022, 9, 8)
  },
  {
    id: '5',
    image: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
    externalLink: 'https://www.youtube.com/watch?v=OTZP7UWz3Tw',
    title: 'HC Kosice - FEHA19',
    date: new Date(2022, 9, 8)
  }
];
