import { useAuth } from 'components/hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { Nav, Wrap } from './Navigation.styled';



export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Nav>
            <Wrap>
                <NavLink  to="/">
                    Home
                </NavLink>
            </Wrap>
            
            {isLoggedIn && (
                <NavLink  to="/contacts">
                    Phonebook
                </NavLink>
            )}
        </Nav>
    );
};