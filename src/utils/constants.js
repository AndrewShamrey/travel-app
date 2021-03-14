import DefaultPhoto from '../assets/images/default-photo.jpg';

export const DEFAULT_PHOTO = DefaultPhoto;

export const ALL_COUNTRIES = ['Australia', 'Brazil', 'Vietnam', 'Denmark', 'Egypt', 'India', 'Italy', 'Canada', 'Thailand', 'Switzerland', 'France', 'Japan'];
export const MAIN_PLACES = [
  'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615294994/Australia/1_Sydney_Opera_House_h26peq.jpg',
  'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615295430/Brazil/1_Cristo_Redentor_and_Corcovado_lei5ct.jpg',
  'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615300276/Vietnam/Hanoi_Train_Street_qk4uwp.jpg',
  'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615295614/Denmark/Nyhavn_pieivz.jpg',
  'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615297926/Egypt/1_Pyramids_of_Giza_zkujie.jpg',
  'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615298630/India/1_Taj_Mahal_kt04ju.jpg',
  'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615298805/Italy/The_Grand_Canal_in_Venice_pjdb5k.jpg',
  'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615295519/Canada/1_Toronto_s_CN_Tower_ohuw8n.jpg',
  'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615300117/Thailand/1_The_Grand_Palace_Bangkok_tbkofq.jpg',
  'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615299772/Switzerland/1_Bern_kghlby.jpg',
  'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615298007/France/1_Eiffel_Tower_zfzt1w.jpg',
  'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615293521/Japan/1_Mount_Fuji_js4opr.jpg',
];

export const AUTHORIZATION_INFO = {
  en: {
    login: 'LogIn',
    signup: 'SignUp',
    passName: 'Password',
    loginName: 'Nickname',
    defaultWarning: 'Incorrect nickname or password!',
    passwordWarning: 'Password length should be between 8 and 20',
    nickNameWarning: 'This nickname is already taken',
    imageSizeWarning: 'Max image size is 4MB',
    uploadPhoto: 'Upload your photo',
  },
  ru: {
    login: 'Вход',
    signup: 'Регистрация',
    passName: 'Пароль',
    loginName: 'Ник',
    defaultWarning: 'Неверный ник или пароль!',
    passwordWarning: 'Длина пароля должна быть от 8 до 20.',
    nickNameWarning: 'Этот ник уже занят',
    imageSizeWarning: 'Максимальный размер изображения - 4МБ.',
    uploadPhoto: 'Загрузите свое фото',
  },
  be: {
    login: 'Уваход',
    signup: 'Рэгістрацыя',
    passName: 'Пароль',
    loginName: 'Нік',
    defaultWarning: 'Няправільны нік або пароль!',
    passwordWarning: 'Даўжыня пароля павінна быць ад 8 да 20',
    nickNameWarning: 'Гэта мянушка ўжо занята',
    imageSizeWarning: 'Максімальны памер фатаграфіі - 4МБ.',
    uploadPhoto: 'Загрузіце сваё фота',
  },
};

export const MAX_IMAGE_SIZE = 4000000;

export const DATE_CONFIG = {
  en: {
    weekday: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  },
  ru: {
    weekday: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    month: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  },
  be: {
    weekday: ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятніца', 'Субота'],
    month: ['Студзень', 'Люты', 'Сакавік', 'Красавік', 'Май', 'Чэрвень', 'Ліпень', 'Жнівень', 'Верасень', 'Кастрычнік', 'Лістапад', 'Снежань'],
  },
};

export const DEFAULT_LANGUAGE = 'en';
export const APPLICATION_LANGUAGES = {
  en: [
    {
      value: 'en',
      text: 'ENG',
    },
    {
      value: 'ru',
      text: 'RUS',
    },
    {
      value: 'be',
      text: 'BEL',
    },
  ],
  ru: [
    {
      value: 'en',
      text: 'АНГ',
    },
    {
      value: 'ru',
      text: 'РУС',
    },
    {
      value: 'be',
      text: 'БЕЛ',
    },
  ],
  be: [
    {
      value: 'en',
      text: 'АНГ',
    },
    {
      value: 'ru',
      text: 'РУС',
    },
    {
      value: 'be',
      text: 'БЕЛ',
    },
  ],
};

export const SEARCH__PLACEHOLDER = {
  en: 'Search...',
  ru: 'Поиск...',
  be: 'Пошук...',
};

export const AUTHORIZATION_BTN_MENU = {
  en: {
    login: 'LogIn',
    signup: 'SignUp',
    signout: 'SignOut',
  },
  ru: {
    login: 'Войти',
    signup: 'Зарегистрироваться',
    signout: 'Выйти',
  },
  be: {
    login: 'Увайсцi',
    signup: 'Зарэгістравацца',
    signout: 'Выйсцi',
  },
};

export const ERROR_PAGE_TEXT = {
  en: 'Oops! There is no such a page.',
  ru: 'Упс! Нет такой страницы.',
  be: 'Упс! Няма такой старонкі.',
};
