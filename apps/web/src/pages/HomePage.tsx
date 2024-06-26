import { Navigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

function HomePage() {
  return <Navigate to={ROUTES.WORKFLOWS} replace />;
}

export default HomePage;
