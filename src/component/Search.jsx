import React,{useState} from 'react'

function Search() {


    const [query,setQuery]=useState('');
    const [movies,setMovies] = useState([]);


    const searchMovies=async(e)=>{

        
        e.preventDefault();

            console.log("submitting");
            const url=`https://api.themoviedb.org/3/search/movie?api_key=13a239d95dd946353b96d76acd59f322&language=en-US&query=${query}&page=1&include_adult=false`;
            try {
                const res = await fetch(url);
                const data  = await res.json();
                console.log(data);
                console.log(data.results)
                setMovies(data.results);
            }catch(err){
                console.error(err);
            }
    }
    return (
        
   
         
        <>
            <form className="form" onSubmit={searchMovies}>
            <label className="label" htmlFor="query">Movie Name</label>
            <input className="input" type="text" name="query" name="query" value={query}
                placeholder="i.e. Jurassic Park"   onChange={(e) => setQuery(e.target.value)} />
            <button className="button" type="submit">Search</button>
            </form>
            <div className="card-list">
                {movies.map(movie =>(
                    <div className="card" key={movie.id}>
                        <img className="card--image"
                            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                            alt={movie.title + ' poster'}
                            />
                        <div className="card--content">
                        <h3 className="card--title">{movie.title}</h3>
                        <p><small>RELEASE DATE: {movie.release_date}</small></p>
                        <p><small>RATING: {movie.vote_average}</small></p>
                        <p className="card--desc">{movie.overview}</p>
                        </div>

                    </div>
                ))}
            </div>    
        </>
    )
}
export default Search
