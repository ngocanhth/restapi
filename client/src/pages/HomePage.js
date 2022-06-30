import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import BookList from '../components/BookList';
import { Fab } from '@mui/material';

import { useDispatch } from 'react-redux';
import { showModal } from '../redux/actions';

function HomePage() {
    const dispatch = useDispatch();

    // const openCreatePostModal = useCallback(() => {
    //   dispatch(showModal());
    // }, [dispatch]);

    return (
        <>
            <BookList></BookList>
            {/* <CreatePostModal /> */}
            <Fab
                color='primary'
                //  onClick={openCreatePostModal}
                sx = {{
                    position: 'fixed',
                    right: 24,
                    bottom: 24,
                }}
            >
            </Fab>
        </>
    );
}

export default HomePage;