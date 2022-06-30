import { Fab } from '@mui/material';
import { useCallback } from 'react';
import BookList from '../components/BookList';

import { useDispatch } from 'react-redux';
import CreateBookModal from '../components/CreateBookModal';
import { showModal } from '../redux/actions';

function HomePage() {
    const dispatch = useDispatch();

    const openCreateBookModal = useCallback(() => {
      dispatch(showModal());
    }, [dispatch]);

    return (
        <>
            <BookList></BookList>
            <CreateBookModal /> 
            <Fab
                color='primary'
                 onClick={openCreateBookModal}
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