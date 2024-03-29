import { Box } from "components/Box";
import React from "react";
import { AiOutlineKey } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { setStatusFilter } from "redux/filterSlice/filterSlice";
import { InputSearch, LabelSearch, Icon } from "./Filter.styled";

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
            <LabelSearch>
                <Icon>
                    <AiOutlineKey size={22} />
                </Icon>
                <InputSearch
                    placeholder="Find by name..."
                    type="text"
                    name="filter"
                    onChange={handleChangeFilter}
                />
            </LabelSearch>
            
        </Box>
    )
};

export default Filter;