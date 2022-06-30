// import { takeLatest, call, put } from 'redux-saga/effects';
// import * as actions from '../actions';
// import * as api from '../../api';

// function* fetchBooksSaga(action) {
//   try {
//     const books = yield call(api.fetchBooks);
//     console.log('Books Fetch tu API:', books);

//     // 1 action duoc dispatch se len middlware saga truoc khi dc gui toi reducers
//     // khi co ket qua tra ve se goi 1 den tiep 1 effact khasc cua redux saga la put 
//     // se trigger 1 action trong saga la (actions.getBooks.getBooksSuccess voi tham so la kq tra ve tu effect call lay dc dc request fetchBooks

//     yield put(actions.getBooks.getBooksSuccess(books.data));

//     // khi trigger action thi actions.getBooks.getBooksSuccess trong Books reducer se dc goi 

//     // {
//     //     isLoading: false,
//     //     data: action.payload,
//     // };

//     // store se update state vaf component co goi den state se rerender va show len UI

//   } catch (err) {
//     console.error(err);
//     yield put(actions.getBooks.getBooksFailure(err));
//   }
// }

// function* createBooksaga(action) {
//   try {
//     const Book = yield call(api.createBook,  action.payload);
//     console.log('Book: ', Book);
//     yield put(actions.createBook.createBooksuccess(Book.data));
//   } catch (error) {
//     console.error(error);
//     yield put(actions.createBook.createBookFailure(error));
//   }
// }

// function* updateBooksaga(action) {
//   try {
//     const book = yield call(api.updateBook,  action.payload);
//     console.log('Book Update: ', book);
//     yield put(actions.updateBook.updateBooksuccess(book.data));
//   } catch (error) {
//     console.error(error);
//     yield put(actions.createBook.updatePoFailure(error));
//   }
// }

// // takeLatest : trong th co nhieu action cung  thi no se chi trigger cai action cuoi va khi hoan thanh cac action khac se bi cancel
// function* mySaga() {
//   yield takeLatest(actions.getBooks.getBooksRequest, fetchBooksSaga);
//   yield takeLatest(actions.createBook.createBookRequest, createBooksaga);
//   yield takeLatest(actions.updateBook.updateBookRequest, updateBooksaga);
// }

// export default mySaga;

import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api';

function* fetchBooksSaga(action) {
  try {
    const posts = yield call(api.fetchBooks);
    console.log('Books:', posts);

    // 1 action duoc dispatch se len middlware saga truoc khi dc gui toi reducers
    // khi co ket qua tra ve se goi 1 den tiep 1 effact khasc cua redux saga la put 
    // se trigger 1 action trong saga la (actions.getPosts.getPostsSuccess voi tham so la kq tra ve tu effect call lay dc dc request fetchPosts

    yield put(actions.getBooks.getBooksSuccess(posts.data));

    // khi trigger action thi actions.getPosts.getPostsSuccess trong posts reducer se dc goi 

    // {
    //     isLoading: false,
    //     data: action.payload,
    // };

    // store se update state vaf component co goi den state se rerender va show len UI

  } catch (err) {
    console.error(err);
    yield put(actions.getBooks.getBooksFailure(err));
  }
}

function* createBookSaga(action) {
  try {
    const post = yield call(api.createBook,  action.payload);
    console.log('Post: ', post);
    yield put(actions.createBook.createBookSuccess(post.data));
  } catch (error) {
    console.error(error);
    yield put(actions.createBook.createBookFailure(error));
  }
}

function* updateBookSaga(action) {
  try {
    const post = yield call(api.updateBook,  action.payload);
    console.log('Post Update: ', post);
    yield put(actions.updateBook.updateBookSuccess(post.data));
  } catch (error) {
    console.error(error);
    yield put(actions.createBook.updateBookFailure(error));
  }
}

// takeLatest : trong th co nhieu action cung dispatch thi no se chi trigger cai action cuoi va khi hoan thanh cac action khac se bi cancel
function* mySaga() {
  yield takeLatest(actions.getBooks.getBooksRequest, fetchBooksSaga);
  yield takeLatest(actions.createBook.createBookRequest, createBookSaga);
  yield takeLatest(actions.updateBook.updateBookRequest, updateBookSaga);
}

export default mySaga;