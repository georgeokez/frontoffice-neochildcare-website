import allIcons from '../dashboard/icons/Icons';

const {
  dashboard,
  getQuote,
  appointments,
  myCars,
  premium,
  savedQuotes,
  accountSetting,
  driveThru,
} = allIcons;

export const navigationData = [
  {
    href: '/dashboard',
    text: 'Dashboard',
    icon: dashboard,
  },
  // {
  //   href: '/drivethru',
  //   text: 'Drive-Thru',
  //   icon: driveThru,
  // },
  // {
  //   href: '/quote',
  //   text: 'Get Quote',
  //   icon: getQuote,
  // },
  {
    href: '/appointments',
    text: 'Appointments',
    icon: appointments,
  },
  {
    href: '/mycars',
    text: 'My Cars',
    icon: myCars,
  },
  {
    href: '/premium',
    text: 'Premium',
    icon: premium,
  },
  // {
  //   href: '/savedquotes',
  //   text: 'Saved Quotes',
  //   icon: savedQuotes,
  // },
  {
    href: '/accountsettings',
    text: 'Account Settings',
    icon: accountSetting,
  },
];

export const addNew = [
  {
    image:
      'https://res.cloudinary.com/dutzmwqpe/image/upload/v1605836265/Rectangle_145_zcrtiz.svg',
    title: '2012 Mercedes-Benz E350',
    info: 'Plate Number',
    text: 'MY354KL',
    button: 'Get Quotes',
  },

  {
    image:
      'https://res.cloudinary.com/dutzmwqpe/image/upload/v1605836290/Rectangle_150_fyv3fj.svg',
    title: '2017 Toyota Corolla-S',
    info: 'Plate number',
    text: 'MY354KL',
    button: 'Get Quotes',
  },

  {
    image:
      'https://res.cloudinary.com/dutzmwqpe/image/upload/v1605836238/Rectangle_145_1_cmmbas.svg',
    title: '2020 Bentley XYZ',
    info: 'Plate number',
    text: 'MY354KL',
    button: 'Get Quotes',
  },

  {
    image:
      'https://res.cloudinary.com/dutzmwqpe/image/upload/v1605836282/Rectangle_150_1_ynr6ix.svg',
    title: '2017 Toyota Corolla-S',
    info: 'Plate Number',
    text: 'MY354KL',
    button: 'Get Quotes',
  },
];

export const carDetails = [
  {
    image:
      'https://res.cloudinary.com/dutzmwqpe/image/upload/v1605836265/Rectangle_145_zcrtiz.svg',
    model: '2012 Mercedes-Benz E350',
    RegNoText: 'Registration number',
    id: 5,
    RegNo: 'IB354KL',
    serviceStatus: 'No service available for this car',
  },
  {
    image:
      'https://res.cloudinary.com/dutzmwqpe/image/upload/v1605836265/Rectangle_145_zcrtiz.svg',
    model: '2016 Toyota Corolla-S',
    RegNoText: 'Registration number',
    id: 6,
    RegNo: 'OH354KL',
    serviceStatus: 'No service available for this car',
  },
  {
    image:
      'https://res.cloudinary.com/dutzmwqpe/image/upload/v1605836265/Rectangle_145_zcrtiz.svg',
    model: '2019 Volkswagen Passat',
    RegNoText: 'Registration number',
    id: 7,
    RegNo: 'QE354KL',
    serviceStatus: 'No service available for this car',
  },
  {
    image:
      'https://res.cloudinary.com/dutzmwqpe/image/upload/v1605836265/Rectangle_145_zcrtiz.svg',
    model: '2010 Volvo S40',
    id: 8,
    RegNoText: 'Registration number',
    RegNo: 'SP354KL',
    serviceStatus: 'No service available for this car',
  },
  {
    image:
      'https://res.cloudinary.com/dutzmwqpe/image/upload/v1605836290/Rectangle_150_fyv3fj.svg',
    model: '2011 Mercedes-Benz E350',
    RegNoText: 'Registration number',
    id: 9,
    RegNo: 'IB354KL',
    serviceStatus: 'No service available for this car',
  },
  {
    image:
      'https://res.cloudinary.com/dutzmwqpe/image/upload/v1605836238/Rectangle_145_1_cmmbas.svg',
    model: '2019 Mercedes-Benz E350',

    id: 10,
    RegNoText: 'Registration number',
    RegNo: 'IB354KL',
    serviceStatus: 'No service available for this car',
  },
  {
    image:
      'https://res.cloudinary.com/dutzmwqpe/image/upload/v1605836282/Rectangle_150_1_ynr6ix.svg',
    model: '2000 Mercedes-Benz E350',
    RegNoText: 'Registration number',
    RegNo: 'IB354KL',
    id: 11,
    serviceStatus: 'No service available for this car',
  },
];
