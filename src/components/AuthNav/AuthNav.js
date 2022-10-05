import { Box } from 'components/Box';
import { NavLink } from 'react-router-dom';


export const AuthNav = () => {
    return (
        <Box>
            <NavLink  to="/register">
                Register
            </NavLink>
            <NavLink  to="/login">
                Log In
            </NavLink>
        </Box>
    );
};