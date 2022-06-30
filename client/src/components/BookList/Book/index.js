import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';

import React, { useCallback } from 'react';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { updateBook } from '../../../redux/actions';

function Book({book}) {
    const dispatch = useDispatch();

    // const onLikeBtnClick = useCallback(() => {
    //     dispatch(
    //       updateBook.updateBookRequest({ ...book, likeCount: book.likeCount + 1 })
    //     );
    //   }, [dispatch, book]);
    
    return (
        <Card>
          
      </Card>
    );
}

export default Book;