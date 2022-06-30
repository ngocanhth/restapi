import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import * as actions from '../../redux/actions';
import { booksState$ } from '../../redux/selectors';



function BookList(props) {
    const dispatch = useDispatch();
    const books = useSelector(booksState$);

    console.log('Books List: ', books);

    useEffect(() => {
        dispatch(actions.getBooks.getBooksRequest());
    },[dispatch]);

    return (
        <Grid container spacing={2} alignItems='stretch'>
            {/* {books.map((book) => (
            <Grid key={book._id} item xs={12} sm={4}>
                <Book book={book} />
            </Grid>
            ))}  */}
      </Grid>
    );
}

export default BookList;