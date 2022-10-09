import images from './images';
const coffee = [
  {
    title: 'Espresso',
    price: '$20',
    tags: 'No milk | just pure coffee | 30 ml',
  },
  {
    title: "Americano (American) ",
    price: '$16',
    tags: 'espresso shot | diluted Hot Water ',
  },
  {
    title: 'Cappuccino',
    price: '$10',
    tags: 'Equal parts espresso, steamed milk, and frothed milk',
  },
  {
    title: 'Black coffee',
    price: '$31',
    tags: 'Coffee served with no milk',
  },
  {
    title: 'NegroniCafe Latte',
    price: '$26',
    tags: 'Just Coffeeee',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default {coffee, awards };
