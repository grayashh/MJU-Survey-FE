import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
  //  Menu Opne, close state
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar color="header" position="relative" elevation={0}>
      <Container maxWidth="x">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* 로고 */}
          <IconButton href="/">
            <Box
              component="img"
              sx={{
                width: 50,
              }}
              src="/image/1.gif"
            />
            <Typography
              variant="h5"
              style={{ color: '#000', marginLeft: '1vw' }}
            >
              test
            </Typography>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;