import { Box } from "components/Box";
import React from "react";
import { useDispatch } from 'react-redux';
import { setStatusFilter } from "redux/filterSlice/filterSlice";
import { InputSearch } from "./Filter.styled";

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
            <InputSearch
                type="text"
                name="filter"
                onChange={handleChangeFilter}
            />
        </Box>
    )
};

export default Filter;