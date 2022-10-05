import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Box } from 'components/Box';

export default function Register() {
    return (
        <Box>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <RegisterForm />
        </Box>
    );
}