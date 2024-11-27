import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRoute = ({ element }) => {
    const authenticated = Cookies.get('authenticated');

    return authenticated ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
