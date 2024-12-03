import { AppBar, Toolbar, Typography } from "@mui/material"

const Header = () => {
  return (
    <AppBar position="static" component="header">
        <Toolbar>
            <Typography variant="h5" sx={{
                fontFamily: "sans-serif",
                flexGrow: 1
            }}>
                Recipe App 🍟
            </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Header