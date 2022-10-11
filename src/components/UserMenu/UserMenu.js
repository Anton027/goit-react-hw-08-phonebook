import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'components/hooks/useAuth';
import { Box } from 'components/Box';
import { UserButton, UserInfo } from './UserMenu.styled';


export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <Box >
            <UserInfo>{user.email}</UserInfo>
            <UserButton type="button" onClick={() => dispatch(logOut())}>
                Logout
            </UserButton>
        </Box>
    );
};
