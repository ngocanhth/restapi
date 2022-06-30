import { Button, Modal, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBook, hideModal } from '../../redux/actions';
import { modalState$ } from '../../redux/selectors';

export default function CreateBookModal() {
  const [data, setData] = React.useState({
    name: '',
    genres: '',
    publishedDate: '',
  });
  const dispatch = useDispatch();
  const { isShow } = useSelector(modalState$);

  console.log('isShow: ', isShow);

  const onClose = React.useCallback(() => {
    dispatch(hideModal());
    setData({
      name: '',
      genres: '',
      publishedDate: '',
    });
  }, [dispatch]);

  const onSubmit = React.useCallback(() => {
    console.log('data: ', data);
    dispatch(createBook.createBookRequest(data));
    onClose();
  }, [data, dispatch, onClose]);

  const body = (
    <div id='simple-modal-title'>
      <h2>Create New Post</h2>
      <form noValidate autoComplete='off'>
        <Box sx={{mb: 2}}>
          <TextField

            required
            label='Name'
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </Box>
        <Box sx={{mb: 2}}>
          <TextField
          label='Genres'
          value={data.genres}
          onChange={(e) => setData({ ...data, genres: e.target.value })}
          />
        </Box>
        <Box sx={{mb: 2}}>
          <TextField
          label='Published Date'
          value={data.publishedDate}
          onChange={(e) => setData({ ...data, publishedDate: e.target.value })}
          />
        </Box>
        <Box sx={{mt: 2}}>
          <Button
            variant='primary'
            color='primary'
            component='span'
            onClick={onSubmit}
          >
            Create Book
          </Button>
        </Box>
      </form>
    </div>
  );

  return (
      <Modal open={isShow} onClose={onClose}>
        {body}
      </Modal>
  );
}
