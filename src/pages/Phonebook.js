import { GlobalStyle } from '../components/GlobalStyle';
import { Box } from "components/Box";
import Filter from "../components/Filter/Filter";
import ContactsList from "../components/ContactsList/ContactsList";
import ContactForm from "../components/ContactForm/ContactForm";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selector';
import Loader from '../components/Loader/Loader';

export default function Phonebook() {
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);


    return (
        <Box
            margin="0 auto"
            padding="0 40px"
        >
            <ContactForm/>
            <Box padding="20px 0">
                <Filter/>
                {isLoading && !error && <Loader />}
                <ContactsList />
            </Box>
            <GlobalStyle />
        </Box>
    );
}