import './spinner.scss';

const Spinner = ({ additionalClassName = '' }) => (
  <span className={`spinner ${additionalClassName}`}>
    <i className="fas fa-spinner" />
  </span>
);

export default Spinner;
