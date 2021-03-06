import React from 'react';
import './footer.scss';
import icon from './assets/github.svg';

const authors = [
  {
    iconUrl: icon,
    value: 'AndrewShamrey',
    href: 'https://github.com/AndrewShamrey',
    classNamePart: 'footer',
  },
  {
    iconUrl: icon,
    value: 'Angoulema',
    href: 'https://github.com/Angoulema',
    classNamePart: 'footer',
  },
  {
    iconUrl: icon,
    value: 'ssamvelk',
    href: '',
    classNamePart: 'footer',
  },
  {
    iconUrl: icon,
    value: 'yrevtovich',
    href: '',
    classNamePart: 'footer',
  },
];

const Link = (props) => {
  const {
    iconUrl, value, href, classNamePart,
  } = props;
  return (
    <a
      className={`${classNamePart}-link`} href={href} target="_blank"
      rel="noreferrer"
    >
      <img className={`${classNamePart}-link-icon`} src={iconUrl} alt="icon" />
      {value}
    </a>
  );
};

const Footer = () => {
  function drawLinks() {
    return authors.map((link, index) => <Link key={`${index + 1}index`} {...link} />);
  }

  return (
    <footer className="app-footer footer flex-space-between">
      <div className="footer-links">
        <span>2020-q3</span>
        {drawLinks()}
      </div>
      <div className="footer-course">
        <a
          className="footer-course-link click" href="https://rs.school/js/" target="_blank"
          rel="noreferrer"
        >
          <img src="https://rs.school/images/rs_school_js.svg" alt="RSSchool" />
        </a>
      </div>
    </footer>
  )
};

export default Footer;
