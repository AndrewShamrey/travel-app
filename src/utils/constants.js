export const DEFAULT_COUNTRY_CONFIG = {
  shortName: "Australia",
  timeDifference: -660,
  latlng: [-27.0,133.0],
  currency: {"code": "JPY", "name": "Japanese yen", "symbol": "¥"},
  mainPlace: {
    image: "https://res.cloudinary.com/db8pqmy2n/image/upload/v1615293521/Japan/1_Mount_Fuji_js4opr.jpg",
    en: {name: "Mount Fuji", description: ""},
    ru: {name: "Гора Фудзи", description: ""},
    be: {name: "Гара Фудзі", description: ""}
  },
  video: "https://www.youtube.com/watch?v=WLIv7HnZ_fE",
  info: {
    en: {name: "Australia", capital: "Canberra", description: "Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. It is the largest country in Oceania and the world's sixth-largest country by total area. Its population of nearly 26 million is highly urbanised and heavily concentrated on the eastern seaboard. Australia's capital is Canberra, and its largest city is Sydney. The country's other major metropolitan areas are Melbourne, Brisbane, Perth, and Adelaide."}, 
    ru: {name: "Австралия", capital: "Канберра", description: "Австралия, официальная форма — Австралийский Союз, или Содружество Австралии, — государство в Южном полушарии, занимающее одноимённый материк, остров Тасмания и несколько других островов Индийского и Тихого океанов. Самое крупное государство по занимаемой площади в Океании и шестое — в мире. Население — почти 26 млн человек, большинство из которых проживает в городах на восточном побережье. Столица Австралии — Канберра, а самый крупный город — Сидней. В числе других мегаполисов — Мельбурн, Брисбен, Перт и Аделаида."},
    be: {name: "Аўстралія", capital: "Канбера", description: "Аўстралія, Аўстралійскі Саюз — дзяржава ў Паўднёвым паўшар'і, якая займае мацярык Аўстралія, востраў Тасманія і некалькі іншых астравоў Індыйскага і Ціхага акіянаў. Аўстралія з'яўляецца найбуйнейшай па плошчы дзяржавай у Акіяніі і шостай — у свеце. Насельніцтва складае амаль 26 мільёнаў чалавек, большасць з якіх пражывае ў гарадах на ўсходнім узбярэжжы. Сталіца Аўстраліі — Канбера, а найбуйнейшы горад — Сідней. У ліку іншых мегаполісаў — Мельбурн, Брысбен,Перт і Адэлаіда."}
  }
}

export const ALL_COUNTRIES = ["Australia", "Brazil", "Vietnam", "Denmark", "Egypt", "India", "Italy", "Canada", "Thailand", "Switzerland", "France", "Japan"];
export const MAIN_PLACES = [
  "https://res.cloudinary.com/db8pqmy2n/image/upload/v1615294994/Australia/1_Sydney_Opera_House_h26peq.jpg",
  "https://res.cloudinary.com/db8pqmy2n/image/upload/v1615295430/Brazil/1_Cristo_Redentor_and_Corcovado_lei5ct.jpg",
  "https://res.cloudinary.com/db8pqmy2n/image/upload/v1615300276/Vietnam/Hanoi_Train_Street_qk4uwp.jpg",
  "https://res.cloudinary.com/db8pqmy2n/image/upload/v1615295614/Denmark/Nyhavn_pieivz.jpg",
  "https://res.cloudinary.com/db8pqmy2n/image/upload/v1615297926/Egypt/1_Pyramids_of_Giza_zkujie.jpg",
  "https://res.cloudinary.com/db8pqmy2n/image/upload/v1615298630/India/1_Taj_Mahal_kt04ju.jpg",
  "https://res.cloudinary.com/db8pqmy2n/image/upload/v1615298805/Italy/The_Grand_Canal_in_Venice_pjdb5k.jpg",
  "https://res.cloudinary.com/db8pqmy2n/image/upload/v1615295519/Canada/1_Toronto_s_CN_Tower_ohuw8n.jpg",
  "https://res.cloudinary.com/db8pqmy2n/image/upload/v1615300117/Thailand/1_The_Grand_Palace_Bangkok_tbkofq.jpg",
  "https://res.cloudinary.com/db8pqmy2n/image/upload/v1615299772/Switzerland/1_Bern_kghlby.jpg",
  "https://res.cloudinary.com/db8pqmy2n/image/upload/v1615298007/France/1_Eiffel_Tower_zfzt1w.jpg",
  "https://res.cloudinary.com/db8pqmy2n/image/upload/v1615293521/Japan/1_Mount_Fuji_js4opr.jpg"
];

export const DATE_CONFIG = {
  en: {
    weekday: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  },
  ru: {
    weekday: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
    month: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
  },
  be: {
    weekday: ["Нядзеля", "Панядзелак", "Аўторак", "Серада", "Чацвер", "Пятніца", "Субота"],
    month: ["Студзень", "Люты", "Сакавік", "Красавік", "Май", "Чэрвень", "Ліпень", "Жнівень", "Верасень", "Кастрычнік", "Лістапад", "Снежань"]
  }
}

export const DEFAULT_LANGUAGE = 'en';
export const DEFAULT_USER_ICON = './assets/images/defaultUser.png';
export const APPLICATION_LANGUAGES = {
  en: [
    {
      value: 'en',
      text: 'ENG'
    },
    {
      value: 'ru',
      text: 'RUS',
    },
    {
      value: 'be',
      text: 'BEL',
    }
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
    }
  ],
  be:  [
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
    }
  ],
};
