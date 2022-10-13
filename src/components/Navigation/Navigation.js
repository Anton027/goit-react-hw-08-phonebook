import { useAuth } from 'components/hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { Nav, Wrap } from './Navigation.styled';



export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <Nav>
                <NavLink to="/">
                    <Wrap>
                        Home
                    </Wrap>
                </NavLink>
            
            {isLoggedIn && (
                <NavLink to="/contacts">
                    <Wrap>
                        Phonebook
                    </Wrap>
                </NavLink>
            )}
        </Nav>
    );
};