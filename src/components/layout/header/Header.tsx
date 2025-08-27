import { AppBar, Box, Button, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router';
import './Header.scss';

export function Header() {
  const navigate = useNavigate();

  return (
    <div className="header-wrapper">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <Button color="inherit" onClick={() => navigate('/')}>
              Home
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
