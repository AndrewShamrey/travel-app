import { useSelector } from 'react-redux';
import { ERROR_PAGE_TEXT } from '../../utils/vocabulary';
import './errorPage.scss';

export default function ErrorPage() {
  const currentLanguage = useSelector((rootState) => rootState.control.applicationLanguage);

  return (
    <div className="error-page">
      {ERROR_PAGE_TEXT[currentLanguage]}
    </div>
  );
}
