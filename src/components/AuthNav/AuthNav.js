import { Box } from 'components/Box';
import { NavLink } from 'react-router-dom';
import { PageInfo } from './AuthNav.styled';


export const AuthNav = () => {
    return (
        <Box>
            <NavLink to="/register">
                <PageInfo>
                    Register
                </PageInfo>
            </NavLink>
            <NavLink to="/login">
                <PageInfo>
                    Log In
                </PageInfo>
            </NavLink>
        </Box>
    );
};