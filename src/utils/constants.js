import DefaultPhoto from '../assets/images/default-photo.jpg';

export const DEFAULT_PHOTO = DefaultPhoto;

export const DEFAULT_COUNTRY_CONFIG = {
  shortName: 'Australia',
  timeDifference: -660,
  latlng: [-27.0, 133.0],
  currency: { code: 'AUD', name: 'Australian dollar', symbol: '$' },
  mainPlace: {
    image: 'https://res.cloudinary.com/db8pqmy2n/image/upload/v1615294994/Australia/1_Sydney_Opera_House_h26peq.jpg',
    en: {
      name: 'Sydney Opera House',
      description: "The Sydney Opera House is a multi-venue performing arts centre at Sydney Harbour located in Sydney, New South Wales, Australia. It is one of the 20th century's most famous and distinctive buildings.",
    },
    ru: {
      name: 'Сиднейский оперный театр',
      description: 'Одно из наиболее известных и легко узнаваемых зданий мира, символ и визитная карточка крупнейшего города страны, а также одна из главных туристических достопримечательностей континента.',
    },
    be: {
      name: 'Сіднейскі оперны тэатр',
      description: "Адзін з найбольш вядомых і лёгка пазнавальных будынкаў свету, які з'яўляецца сімвалам найбуйнейшага горада Аўстраліі, Сіднея, і адной з галоўных славутасцяў Аўстраліі - ветразепадобныя абалонкі, якія ўтвараюць дах, робяць будынак непадобным да іншых у свеце.",
    },
  },
  capitalCoord: [-35.28, 149.13],
  video: 'https://www.youtube.com/watch?v=nFS1nvRUVkY',
  info: {
    en: {
      name: 'Australia',
      capital: 'Canberra',
      description: "Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. It is the largest country in Oceania and the world's sixth-largest country by total area. Its population of nearly 26 million is highly urbanised and heavily concentrated on the eastern seaboard. Australia's capital is Canberra, and its largest city is Sydney. The country's other major metropolitan areas are Melbourne, Brisbane, Perth, and Adelaide.",
    },
    ru: {
      name: 'Австралия',
      capital: 'Канберра',
      description: 'Австралия, официальная форма — Австралийский Союз, или Содружество Австралии, — государство в Южном полушарии, занимающее одноимённый материк, остров Тасмания и несколько других островов Индийского и Тихого океанов. Самое крупное государство по занимаемой площади в Океании и шестое — в мире. Население — почти 26 млн человек, большинство из которых проживает в городах на восточном побережье. Столица Австралии — Канберра, а самый крупный город — Сидней. В числе других мегаполисов — Мельбурн, Брисбен, Перт и Аделаида.',
    },
    be: {
      name: 'Аўстралія',
      capital: 'Канбера',
      description: "Аўстралія, ці Аўстралійскі Саюз, — дзяржава ў Паўднёвым паўшар'і, якая займае мацярык Аўстралія, востраў Тасманія і некалькі іншых астравоў Індыйскага і Ціхага акіянаў. Аўстралія з'яўляецца найбуйнейшай па плошчы дзяржавай у Акіяніі і шостай — у свеце. Насельніцтва складае амаль 26 мільёнаў чалавек, большасць з якіх пражывае ў гарадах на ўсходнім узбярэжжы. Сталіца Аўстраліі — Канбера, а найбуйнейшы горад — Сідней. У ліку іншых мегаполісаў — Мельбурн, Брысбен, Перт і Адэлаіда.",
    },
  },
};

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
