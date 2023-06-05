import { Grid, Typography } from '@mui/material';

import { MessageForm } from './MessageForm.tsx';
import { MessageList } from './MessageList.tsx';

export const Message = () => {
  return (
    <Grid
      container
      sx={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
    >
      <Typography component="h1" variant="h4">
        Send a message and test sync between tabs using broadcast API
      </Typography>
      <Grid container sx={{ marginTop: '50px' }}>
        <MessageForm />
        <MessageList />
      </Grid>
    </Grid>
  );
};
