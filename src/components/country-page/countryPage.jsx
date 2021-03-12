import './countryPage.scss';

const CountryPage = () => {
  console.log('countryData');

  return (
    <main className="country-page">
      <div className="country-page__wrapper">
        <div className="country-page__info">
          <div className="country-page__country">
            <h2 className="country-page__name">Australia</h2>
            <p className="country-page__capital">Canberra</p>
          </div>
          <img
            className="country-page__image"
            src="assets/images/australia-img-example.jpg"
            alt="country"
          />
          <p className="country-page__description">
            Australia, officially the Commonwealth of Australia, is a sovereign country comprising
            the mainland of the Australian continent, the island of Tasmania, and numerous smaller
            islands. It is the largest country in Oceania and the world&lsquo;s sixth-largest
            country by total area. Its population of nearly 26 million is highly urbanised and
            heavily concentrated on the eastern seaboard. Australia&lsquo;s capital is Canberra,
            and its largest city is Sydney. The country&lsquo;s other major metropolitan areas are
            Melbourne, Brisbane, Perth, and Adelaide.
          </p>
          <div className="country-page__widgets">
            <div className="country-page__widget">
              <img src="assets/images/date-widget.png" alt="Date widget" />
            </div>
            <div className="country-page__widget">
              <img src="assets/images/weather-widget.png" alt="Weather widget" />
            </div>
            <div className="country-page__widget">
              <img src="assets/images/exchange-rates-widget.png" alt="Exchange rates widget" />
            </div>
          </div>
          <div className="country-page__gallery">
            <img
              className="country-page__image"
              src="assets/images/australia-img-example.jpg"
              alt="example"
            />
          </div>
          <div className="country-page__video">
            <img
              className="country-page__image"
              src="assets/images/australia-img-example.jpg"
              alt="example"
            />
          </div>
        </div>
      </div>
      <div className="country-page__map">
        <img src="assets/images/map.png" alt="map example" />
      </div>
    </main>
  );
};

export default CountryPage;
