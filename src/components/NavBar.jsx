
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { red } from '@mui/material/colors';


const NavBar = () => {
  return (
    <div>
        <Box color={red} sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Clarus Shopping
          </Typography>
          <AddShoppingCartIcon/>          
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar