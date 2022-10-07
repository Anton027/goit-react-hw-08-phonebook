import { Box } from "components/Box";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "redux/operations";
import { getItems } from "redux/selector";
import { Form, FormButton, Input, Title } from "./ContactForm.styled";



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
                <Title>
                    Phonebook
            </Title>
                <Form  onSubmit={handleSubmitForm}>
                    <Box as="label" marginRight="8px" htmlFor="name">
                        Name
                        <Input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        />
                    </Box>
                    <Box as="label" marginRight="8px" htmlFor="numer">
                        Number
                        <Input
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            />
                    </Box>
                    <FormButton type="submit">Add</FormButton>
                </Form>
            </>
        )
}

export default ContactForm;