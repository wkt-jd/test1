export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Basketball',
    price: 60,
    description: 'Spalding NeverFlat Elite Indoor-Outdoor Basketball.',
  },
  {
    id: 2,
    name: 'GoPro HERO10 Black',
    price: 699,
    description:
      'This latest flagship model features the latest technology GoPro has to offer and has an upgraded processor thats advertised to give it smoother overall performance, as well as improve its low-light video quality.',
  },
  {
    id: 3,
    name: 'AirPods',
    price: 299,
    description:
      'Apple today introduced AirPods, innovative new wireless headphones that use advanced technology to reinvent how we listen to music, make phone calls, enjoy TV shows and movies, play games and interact with Siri, providing a wireless audio experience not possible before.',
  },
];
