import Link from './link-footer';
import authors from '../../authors';
import './footer.scss';

const Footer = () => {
  const drawLinks = () => authors.map((link, index) => (
    <Link key={`${index + 1}index`} {...link} />
  ));

  return (
    <footer className="app-footer footer">
      <div className="footer-links">
        <span>React 2021-Q1</span>
        {drawLinks()}
      </div>
      <div className="footer-course">
        <a
          className="footer-course-link click"
          href="https://rs.school/js/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="https://rs.school/images/rs_school_js.svg" alt="RSSchool" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
