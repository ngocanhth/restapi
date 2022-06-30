import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Book({book}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
            {book.name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {book.genres}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Published Date: {book.publishedDate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="primary">Learn More</Button>
      </CardActions>
    </Card>
  );
}
