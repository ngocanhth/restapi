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


// getType(reduxAction().type) = getType(getBooks.getBooksSucces) => tra ve ten cua action

// {
//     type: getBooksRequest
// },



// {
//     type: getBooksSucces,
//     isLoading: false,
//     payload: {
//         name: 'Test',
//         content: 'gdgdgs'
//     }
// }

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

export const showModal = createAction('SHOW_CREATE_BOOK_MODAL');
export const hideModal = createAction('HIDE_CREATE_BOOK_MODAL');
