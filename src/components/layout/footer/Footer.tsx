import { AppBar, Toolbar, Typography } from '@mui/material';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <AppBar
      component="footer"
      position="fixed"
      color="primary"
      sx={{
        top: 'auto',
        bottom: 0,
      }}
    >
      <Toolbar>
        <Typography component="p">{year}</Typography>
      </Toolbar>
    </AppBar>
  );
}
