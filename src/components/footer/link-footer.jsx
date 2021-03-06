import icon from './assets/github.svg';

const Link = (props) => {
  const {
    value, href,
  } = props;
  return (
    <a
      className="footer-link" href={href} target="_blank"
      rel="noreferrer"
    >
      <img className="footer-link-icon" src={icon} alt="icon" />
      {value}
    </a>
  );
};

export default Link;
