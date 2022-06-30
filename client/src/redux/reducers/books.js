import { INIT_STATE } from "../../constant";
import { createBook, getBooks, getType, updateBook } from "../actions";

export default function booksReducers(state = INIT_STATE.books, action) {
    switch(action.type) {
        case getType(getBooks.getBooksRequest):
        return {
            ...state,
            isLoading: true,
        };
        case getType(getBooks.getBooksSuccess):
        return {
            ...state,
            isLoading: false,
            data: action.payload,
        };
        case getType(getBooks.getBooksFailure):
        return {
            ...state,
            isLoading: false,
        };
        case getType(createBook.createBookSuccess):
        return {
            ...state,
            data: [...state.data, action.payload],
        };

        case getType(updateBook.updateBookSuccess):
        return {
            ...state,
            data: state.data.map((book) =>
            book._id === action.payload._id ? action.payload : book
          )
        };

        default:
         return state;
    }

}