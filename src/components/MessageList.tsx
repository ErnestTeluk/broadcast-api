import { Card, Grid, Typography } from '@mui/material';
import { useMessageContext } from '../providers/MessageProvider.tsx';

export const MessageList = () => {
  const { messages } = useMessageContext();

  return (
    <Grid
      container
      sx={{
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        flexFlow: 'column',
        padding: '0 40px',
      }}
    >
      <Typography component="h2" variant="h6">
        Messages list
      </Typography>
      {messages.map(({ id, title, message }) => (
        <Card
          key={id}
          variant="outlined"
          sx={{ width: '100%', padding: '20px', marginTop: '20px' }}
        >
          <Typography component="h2" variant="h6">
            {title}
          </Typography>
          <Typography component="p" variant="body1" sx={{ marginTop: '20px' }}>
            {message}
          </Typography>
        </Card>
      ))}
    </Grid>
  );
};
