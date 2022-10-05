import { Box } from "components/Box";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "redux/operations";
import { getItems } from "redux/selector";



function ContactForm() {
    const dispatch = useDispatch();
    const items = useSelector(getItems);

    const handleSubmitForm = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        if (items) {
            items.find(item => item.name.toLowerCase() === name.toLowerCase())
            ? alert(name + ' is already in contacts')
            : dispatch(addItem({ name,number }))
        }

        form.reset();
    };

    return (
            <>
                <Box as="h1" marginBottom="15px">
                    Phonebook
                </Box>
                <form onSubmit={handleSubmitForm} >
                    <Box as="label" marginRight="8px" htmlFor="name">
                        Name
                        <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        />
                    </Box>
                    <Box as="label" marginRight="8px" htmlFor="numer">
                        Number
                        <input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            />
                </Box>
                    <button type="submit">Add contact</button>
                </form>
                
            </>
        )
}

export default ContactForm;