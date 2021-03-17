const ALL_COUNTRIES = [
  {
    en: {
      name: 'Australia',
      shortName: 'Australia',
      capital: 'Canberra',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615294994/Australia/1_Sydney_Opera_House_h26peq.jpg',
    },
    ru: {
      name: 'Австралия',
      shortName: 'Australia',
      capital: 'Канберра',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615294994/Australia/1_Sydney_Opera_House_h26peq.jpg',
    },
    be: {
      name: 'Аўстралія',
      shortName: 'Australia',
      capital: 'Канбера',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615294994/Australia/1_Sydney_Opera_House_h26peq.jpg',
    },
  },
  {
    en: {
      name: 'Brazil',
      shortName: 'Brazil',
      capital: 'Brasília',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615295430/Brazil/1_Cristo_Redentor_and_Corcovado_lei5ct.jpg',
    },
    ru: {
      name: 'Бразилия',
      shortName: 'Brazil',
      capital: 'Бразилиа',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615295430/Brazil/1_Cristo_Redentor_and_Corcovado_lei5ct.jpg',
    },
    be: {
      name: 'Бразілія',
      shortName: 'Brazil',
      capital: 'Бразіліа',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615295430/Brazil/1_Cristo_Redentor_and_Corcovado_lei5ct.jpg',
    },
  },
  {
    en: {
      name: 'Vietnam',
      shortName: 'Vietnam',
      capital: 'Hanoi',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615300276/Vietnam/Hanoi_Train_Street_qk4uwp.jpg',
    },
    ru: {
      name: 'Вьетнам',
      shortName: 'Vietnam',
      capital: 'Ханой',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615300276/Vietnam/Hanoi_Train_Street_qk4uwp.jpg',
    },
    be: {
      name: 'В’етнам',
      shortName: 'Vietnam',
      capital: 'Ханой',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615300276/Vietnam/Hanoi_Train_Street_qk4uwp.jpg',
    },
  },
  {
    en: {
      name: 'Denmark',
      shortName: 'Denmark',
      capital: 'Copenhagen',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615295614/Denmark/Nyhavn_pieivz.jpg',
    },
    ru: {
      name: 'Дания',
      shortName: 'Denmark',
      capital: 'Копенгаген',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615295614/Denmark/Nyhavn_pieivz.jpg',
    },
    be: {
      name: 'Данія',
      shortName: 'Denmark',
      capital: 'Капенгаген',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615295614/Denmark/Nyhavn_pieivz.jpg',
    },
  },
  {
    en: {
      name: 'Egypt',
      shortName: 'Egypt',
      capital: 'Cairo',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615297926/Egypt/1_Pyramids_of_Giza_zkujie.jpg',
    },
    ru: {
      name: 'Египет',
      shortName: 'Egypt',
      capital: 'Каир',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615297926/Egypt/1_Pyramids_of_Giza_zkujie.jpg',
    },
    be: {
      name: 'Егіпет',
      shortName: 'Egypt',
      capital: 'Каір',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615297926/Egypt/1_Pyramids_of_Giza_zkujie.jpg',
    },
  },
  {
    en: {
      name: 'India',
      shortName: 'India',
      capital: 'New Delhi',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615298630/India/1_Taj_Mahal_kt04ju.jpg',
    },
    ru: {
      name: 'Индия',
      shortName: 'India',
      capital: 'Нью-Дели',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615298630/India/1_Taj_Mahal_kt04ju.jpg',
    },
    be: {
      name: 'Індыя',
      shortName: 'India',
      capital: 'Нью-Дэлі',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615298630/India/1_Taj_Mahal_kt04ju.jpg',
    },
  },
  {
    en: {
      name: 'Italy',
      shortName: 'Italy',
      capital: 'Rome',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615298805/Italy/The_Grand_Canal_in_Venice_pjdb5k.jpg',
    },
    ru: {
      name: 'Италия',
      shortName: 'Italy',
      capital: 'Рим',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615298805/Italy/The_Grand_Canal_in_Venice_pjdb5k.jpg',
    },
    be: {
      name: 'Італія',
      shortName: 'Italy',
      capital: 'Рым',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615298805/Italy/The_Grand_Canal_in_Venice_pjdb5k.jpg',
    },
  },
  {
    en: {
      name: 'Canada',
      shortName: 'Canada',
      capital: 'Ottawa',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615295519/Canada/1_Toronto_s_CN_Tower_ohuw8n.jpg',
    },
    ru: {
      name: 'Канада',
      shortName: 'Canada',
      capital: 'Оттава',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615295519/Canada/1_Toronto_s_CN_Tower_ohuw8n.jpg',
    },
    be: {
      name: 'Канада',
      shortName: 'Canada',
      capital: 'Атава',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615295519/Canada/1_Toronto_s_CN_Tower_ohuw8n.jpg',
    },
  },
  {
    en: {
      name: 'Thailand',
      shortName: 'Thailand',
      capital: 'Bangkok',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615300117/Thailand/1_The_Grand_Palace_Bangkok_tbkofq.jpg',
    },
    ru: {
      name: 'Таиланд',
      shortName: 'Thailand',
      capital: 'Бангкок',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615300117/Thailand/1_The_Grand_Palace_Bangkok_tbkofq.jpg',
    },
    be: {
      name: 'Тайланд',
      shortName: 'Thailand',
      capital: 'Бангкок',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615300117/Thailand/1_The_Grand_Palace_Bangkok_tbkofq.jpg',
    },
  },
  {
    en: {
      name: 'Switzerland',
      shortName: 'Switzerland',
      capital: 'Bern',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615299772/Switzerland/1_Bern_kghlby.jpg',
    },
    ru: {
      name: 'Швейцария',
      shortName: 'Switzerland',
      capital: 'Берн',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615299772/Switzerland/1_Bern_kghlby.jpg',
    },
    be: {
      name: 'Швейцарыя',
      shortName: 'Switzerland',
      capital: 'Берн',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615299772/Switzerland/1_Bern_kghlby.jpg',
    },
  },
  {
    en: {
      name: 'France',
      shortName: 'France',
      capital: 'Paris',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615298007/France/1_Eiffel_Tower_zfzt1w.jpg',
    },
    ru: {
      name: 'Франция',
      shortName: 'France',
      capital: 'Париж',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615298007/France/1_Eiffel_Tower_zfzt1w.jpg',
    },
    be: {
      name: 'Францыя',
      shortName: 'France',
      capital: 'Парыж',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615298007/France/1_Eiffel_Tower_zfzt1w.jpg',
    },
  },
  {
    en: {
      name: 'Japan',
      shortName: 'Japan',
      capital: 'Tokio',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615293521/Japan/1_Mount_Fuji_js4opr.jpg',
    },
    ru: {
      name: 'Япония',
      shortName: 'Japan',
      capital: 'Токио',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615293521/Japan/1_Mount_Fuji_js4opr.jpg',
    },
    be: {
      name: 'Японія',
      shortName: 'Japan',
      capital: 'Токіа',
      image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615293521/Japan/1_Mount_Fuji_js4opr.jpg',
    },
  },
];

export default ALL_COUNTRIES;
