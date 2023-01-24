// import { Box } from "components/Box";
import { AiOutlineUser,AiOutlinePhone } from "react-icons/ai";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "redux/operations";
import { getItems } from "redux/selector";
import { Form, FormButton, Input, Label, Title } from "./ContactForm.styled";



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
                    <Label>
                        <p>
                            <AiOutlineUser size={22} />
                        </p>
                        
                        <Input
                            placeholder="Please write name..."
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </Label>
                    <Label>
                        <p>
                            <AiOutlinePhone size={22} />
                        </p>
                        <Input
                            placeholder="Please write number..."
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </Label>
                    <FormButton type="submit">+</FormButton>
                </Form>
            </>
        )
}

export default ContactForm;

//  TbFilePhone