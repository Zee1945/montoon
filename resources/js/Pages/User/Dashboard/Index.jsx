import AuthenticatedHandle from "@/Layouts/Authenticated"
import Flickity from "react-flickity-component"
import { Head } from "@inertiajs/react"
import FeaturedMovie from "@/Components/FeaturedMovie"
import MovieCard from "@/Components/MovieCard"


export default function Dashboard({auth,featuredMovies,movies}){
    const flickityOptions = {
                cellAlign: "left",
                contain: true,
                groupCells: 1,
                wrapAround: false,
                pageDots: false,
                prevNextButtons: false,
                draggable: ">1"
            }
    return <AuthenticatedHandle auth={auth}>
             {/* <!-- Featured --> */}
             <Head title="Dashboard">
             </Head>
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {featuredMovies.map( (featuredMovie,index) => (
                            <FeaturedMovie key={featuredMovie.id} name={featuredMovie.name} category={featuredMovie.category} thumbnail={featuredMovie.thumbnail} slug={featuredMovie.slug} rating={featuredMovie.rating}/>
                        ))}
                        {/* <!-- Movie Thumbnail --> */}



                    </Flickity>
                    {/* Start Browse  */}
                    <div className="mt-[50px]">
                    <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                    {/* <div class="__scroll-selector"> */}
                    <Flickity options={flickityOptions}>
                        {movies.map( (mv,index) => (
                            <MovieCard key={mv.id} name={mv.name} category={mv.category} slug={mv.slug} thumbnail={mv.thumbnail}/>
                        ))}
                    </Flickity>
                        {/* <!-- Movies 6 --> */}

                    </div>
                </div>
                    {/* End Browse  */}
                {/* </div> */}
                {/* <!-- /Featured --> */}
    </AuthenticatedHandle>
}
