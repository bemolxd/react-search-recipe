import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe";
import logo from './logo.svg';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import './App.css';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));


const App = () => {
  const APP_ID = "2fc792a6";
  const APP_KEY = "d4007f73e323a74e0bf162ab5c36f309";

  const [recipes, setRecipes] = useState([]);

  const [search, setSearch] = useState('');

  const [query, setQuery] = useState('chicken');

  useEffect( () => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSerach = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const classes = useStyles();
  
  return(

    <div className="App">

      <Paper component="form" className={classes.root} onSubmit={getSearch}>
        <InputBase 
          className={classes.input}
          placeholder="Search Recipes"
          inputProps={{ 'aria-label': 'search recipes' }}
          value={search} 
          onChange={updateSerach} />
        
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>

      </Paper>

      {recipes.map(recipe => (
        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          solutionUrl={recipe.recipe.url}/>
      ))}
    </div>
  );
};

export default App;
