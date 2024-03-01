import react, { useEffect, useState } from "react";
function slider(){
    const [movielist,setMoviesList]=useState([]);
    useEffect(()=>{
        getTrendingMovies();
    },[])
    const getTrendingMovies=()=>{
        GlobalApi.getTrendingvideos.then(Response=>{
            console.log(Response,data,results)
            setMoviesList(Response,data,results)
    })

}
    return (

        <div className="flex overflow-x-auto">
            {movielist.map((item,index)=>(
            <img src={ IMAGE_BASE_URL+item.backdrop_path} 
            className="min-w-full h-[310px] object cover"/>
    ))}
        </div>
    )
}
   
    


