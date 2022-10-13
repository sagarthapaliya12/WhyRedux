import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  FormControlLabel,
  Switch,
} from '@mui/material';

const Header = () => {
  const [showContent, setShowContent] = useState(false);

  const handleSwitch = (e) => {
    setShowContent(e.target.checked);
  };

  console.log('Show Content: ', showContent);

  return (
    <AppBar color="secondary">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Why Redux
        </Typography>
        <Box display="flex" alignItems="center">
          <Typography mr={4}>Hide</Typography>
          <FormControlLabel
            control={
              <Switch
                checked={showContent}
                onChange={handleSwitch}
                sx={{ bgcolor: '#D7D7D7', borderRadius: '5px' }}
              />
            }
          />
          <Typography>Show</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
