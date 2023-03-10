import { useContext } from 'react';
import { AuthContext } from '../../context/Auth/index';
import { When } from 'react-if';

const AuthComponent = ({capability, children}) => {
    const { can, loggedIn} = useContext(AuthContext);

    console.log('loggedIn', loggedIn);
    console.log('capability', can(capability));
    return (
        <When condition={loggedIn}>
            {children}
        </When>
    )
};

export default AuthComponent;