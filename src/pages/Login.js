import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Box } from 'components/Box';

export default function Login() {
    return (
        <Box>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <LoginForm />
        </Box>
    );
}
