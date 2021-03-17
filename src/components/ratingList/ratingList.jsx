import './ratingList.scss';

const RatingList = ({ isModalOpened }) => {
  console.log('don t worry');
  return (
    <div className="rating-list">
      <button type="button" className="close-modal" onClick={() => isModalOpened(false)}>
        <i className="far fa-times-circle" />
      </button>
      <div className="rating-list__wrapper">
        <div className="rating-list_content">
          <p>здесь будет списочек</p>
          <p>здесь будет списочек</p>
          <p>здесь будет списочек</p>
          <p>здесь будет списочек</p>
          <p>здесь будет списочек</p>
          <p>здесь будет списочек</p>
          <p>здесь будет списочек</p>
          <p>здесь будет списочек</p>
          <p>здесь будет списочек</p>
          <p>здесь будет списочек</p>
          <p>здесь будет списочек</p>
          <p>здесь будет списочек</p>
          <p>здесь будет списочек</p>
          <p>здесь будет списочек</p>
          <p>здесь будет списочек</p>
        </div>
      </div>
    </div>
  );
};

export default RatingList;
