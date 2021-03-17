import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ALL_COUNTRIES from '../../utils/allCountries';
import Card from '../card/card';
import './mainPage.scss';

const MainPage = () => {
  const searchValue = useSelector((rootState) => rootState.control.searchValue);
  const currentLanguage = useSelector((rootState) => rootState.control.applicationLanguage);

  const processedSearchValue = searchValue.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const searchRegExp = new RegExp(processedSearchValue, 'gi');

  const displayingCards = ALL_COUNTRIES.filter((country) => {
    const { name, capital } = country[currentLanguage];
    return name.match(searchRegExp) || capital.match(searchRegExp);
  });

  return (
    <div className="main-page">
      <div className="cards-cont">
        {displayingCards.map((country) => {
          const {
            name,
            capital,
            shortName,
            image,
          } = country[currentLanguage];
          const path = `/country/${shortName}`;

          return (
            <Link to={path} key={shortName}>
              <Card country={name} capital={capital} image={image} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
