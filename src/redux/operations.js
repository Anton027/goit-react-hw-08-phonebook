import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk('contacts/fetchAll',
    async (_, thunkApi) => {
        try {
            const res = await axios.get('/contacts');
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue("Sorry, page is not found...")
        }
    })

export const addItem = createAsyncThunk('contacts/addItem',
    async ({ name, number }, thunkApi) => {
    try {
        const res = await axios.post('/contacts', { name, number });
        return res.data;
    } catch (error) {
        return thunkApi.rejectWithValue("Sorry, page is not found...")
    }
});

export const removeItem = createAsyncThunk('contacts/removeItem',
    async (itemId, thunkApi) => {
        try {
            const res = await axios.delete(`/contacts/${itemId}`);
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue("Sorry, page is not found...")
        }
    });