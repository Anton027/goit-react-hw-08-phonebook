import { GlobalStyle } from './GlobalStyle';
import { Box } from "components/Box";
import Filter from "./Filter";
import ContactsList from "./ContactsList";
import ContactForm from "./ContactForm";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selector';
import Loader from './Loader';

export function App() {
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