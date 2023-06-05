import { Grid } from '@mui/material';

import { Header } from './Header.tsx';
import { Message } from './Message.tsx';

export const App = () => {
  return (
    <Grid container>
      <Header />
      <Grid container sx={{ marginTop: '64px' }}>
        <Message />
      </Grid>
    </Grid>
  );
};
