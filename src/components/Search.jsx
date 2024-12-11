import { TextField, IconButton, InputAdornment } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

const Search = ({search, setSearch}) => {
    const navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    navigate(`/fetch?query=${search}`)
    }

  return (
    <div>
        <form  onSubmit={(e) => handleSubmit(e)}>
        <TextField fullWidth label="Search for recipes" id="fullWidth" sx={{
          width:{md:"30vw", }}} 
        InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                    <IconButton type="submit" edge="end">
                        <SearchIcon />
                    </IconButton>
                </InputAdornment>
            )
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        </form>
    </div>
  )
}

export default Search