import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Box } from "components/Box"
import { useDispatch, useSelector } from "react-redux";
import { getFilter, getItems } from "redux/selector";
import { removeItem } from "redux/operations";
import { Button, Informations } from "./ContactList.styled";

const ContactsList = () => {
    const items = useSelector(getItems);
    const filterContact = useSelector(getFilter).status; 
    const dispatch = useDispatch();

    const getVisibleNameFilter = () => {
        const normalFilter = filterContact.toLowerCase().trim();
        
        if (items) {
            return items.filter(item => item.name.toLowerCase().includes(normalFilter))
        }
    }

    const filterName = getVisibleNameFilter();
    return (
        <>
            <Box as="ul"
            display="flex"
            flexDirection="column"
            padding="10px 0"
            >
                {filterName && filterName.map( ({ number,name,id }) => (
                    <Box
                        as="li"
                        display='inline-flex'
                        key={id}
                        marginBottom="5px"
                        padding="3px"
                    >
                        <Informations>{`${name}: ${number}`}</Informations>
                        
                        <Button onClick={() => 
                                dispatch(removeItem(id))
                            }
                        >
                            <AiOutlineDelete size={20} />
                        </Button>
                    </Box>
                ))}
            </Box>
        </>
    )
}

export default ContactsList;