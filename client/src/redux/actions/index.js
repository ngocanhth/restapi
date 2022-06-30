import { createAction, createActions } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type;
};

//return reduxAction

export const getBooks = createActions({
    getBooksRequest: undefined, // -> reduxAaction
    getBooksSuccess: (payload) => payload, // -> reduxAaction
    getBooksFailure: (err) => err, // -> reduxAaction
});

export const createBook = createActions({
    createBookRequest: (payload) => payload,
    createBookSuccess: (payload) => payload,
    createBookFailure: (err) => err,
});

export const updateBook = createActions({
    updateBookRequest: (payload) => payload,
    updateBookSuccess: (payload) => payload,
    updateBookFailure: (err) => err,
});

export const deleteBook = createActions({
    deleteBookRequest: (payload) => payload,
    deleteBookSuccess: (payload) => payload,
    deleteBookFailure: (err) => err,
});

export const showModal = createAction('SHOW_CREATE_BOOK_MODAL');
export const hideModal = createAction('HIDE_CREATE_BOOK_MODAL');
