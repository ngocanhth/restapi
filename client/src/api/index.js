import axios from 'axios';

const URL = 'https://blogpost-mearn.herokuapp.com';

export const fetchBooks = () => axios.get(`${URL}/v1/book`);
export const createBook = (payload) => axios.post(`${URL}/v1/book`, payload);
export const updateBook = (payload) => axios.put(`${URL}/v1/book`, payload);
export const deleteBook = (payload) => axios.delete(`${URL}/v1/book`, payload);
