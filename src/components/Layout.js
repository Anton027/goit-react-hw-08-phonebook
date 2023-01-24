import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import { Box } from './Box';
import { GlobalStyle } from './GlobalStyle';

export const Layout = () => {
    return (
        <Box
            margin={'0 auto'}
            padding={'0 16px'}
            maxWidth={960}
        >
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
            <Toaster position="center" reverseOrder={false} />
            <GlobalStyle />
        </Box>
    );
};

