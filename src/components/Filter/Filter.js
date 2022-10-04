import { Box } from "components/Box";
import React from "react";
import { useDispatch } from 'react-redux';
import { setStatusFilter } from "redux/filterSlice/filterSlice";

const Filter = () => {

    const dispatch = useDispatch();

    const handleChangeFilter = e => {
        dispatch(setStatusFilter(
            e.currentTarget.value.toLowerCase().trim()
        ));
    };
    
    return (
        <Box>
            <Box as="h2" marginBottom="15px">
            Contacts
            </Box>
            <p>Find Contacts by name</p>
            <input
                type="text"
                name="filter"
                onChange={handleChangeFilter}
            />
        </Box>
    )
};

export default Filter;