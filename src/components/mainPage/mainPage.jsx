import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ALL_COUNTRIES } from '../../utils/vocabulary';
import Card from '../card/card';
import './mainPage.scss';

const MainPage = () => {
  const searchValue = useSelector((rootState) => rootState.control.searchValue);
  const currentLanguage = useSelector((rootState) => rootState.control.applicationLanguage);

  const person = useSelector((rootState) => rootState.control.currentPerson);
  useEffect(() => {
    console.log(person);
    console.log(person && person._id);
  }, [person]);

  const processedSearchValue = searchValue.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
  const searchRegExp = new RegExp(processedSearchValue, 'gi');

  const displayingCards = ALL_COUNTRIES.filter((country) => {
    const { name, capital } = country[currentLanguage];
    return name.match(searchRegExp) || capital.match(searchRegExp);
  });

  return (
    <div className="main-page">
      <div className="cards-cont">
        {displayingCards.map((country, index) => {
          const { name, capital, shortName } = country[currentLanguage];
          const path = `/country/${shortName}`;

          return (
            <Link to={path} key={shortName}>
              <Card country={name} capital={capital} index={index} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MainPage;
