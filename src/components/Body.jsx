import { Box, Typography } from "@mui/material"
import Search from "./Search"
import { useSearch } from "../context/SearchContext"

const Body = () => {

    const {search, setSearch} = useSearch();

  return (
    <Box component='div' sx={{
        fontFamily: "calibri",
        display: "flex",
        flexDirection: "column",
        gap: "1vh",
        height: "89vh",
        alignItems: "center",
        justifyContent: "center",
        bgcolor :"#f5f5f5"
    }} >
        <Typography component='p' variant="body1" sx={{
            fontSize: {xs:'0,9 rem',sm:"1 rem", md:"1.5rem"},
            textAlign: 'center'
        }}>
        Discover, Cook, Savor - Your Next Favorite Recipe Awaits!
        </Typography>

        <Search search={search} setSearch={setSearch} />

    </Box>
  )
}

export default Body