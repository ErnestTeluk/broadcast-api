import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';

const handleClick = () => {
  const url = window.location.href;
  window.open(url, '_blank');
};

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Broadcast API test
          </Typography>
          <Button color="inherit" onClick={handleClick}>
            Open New Tab
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
