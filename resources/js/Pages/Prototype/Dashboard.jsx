import AuthenticatedHandle from "@/Layouts/Authenticated"
import Flickity from "react-flickity-component"
import { Head } from "@inertiajs/react"
import FeaturedMovie from "@/Components/FeaturedMovie"
import MovieCard from "@/Components/MovieCard"


export default function Dashboard(){
    const flickityOptions = {
                cellAlign: "left",
                contain: true,
                groupCells: 1,
                wrapAround: false,
                pageDots: false,
                prevNextButtons: false,
                draggable: ">1"
            }
    return <AuthenticatedHandle>
             {/* <!-- Featured --> */}
             <Head title="Dashboard">
             </Head>
                <div>
                    <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
                    <Flickity className="gap-[30px]" options={flickityOptions}>
                        {[1,2,3,4].map( i => (
                            <FeaturedMovie key={i} name={`The Batman in Love ${i}`} slug="the-batman-in-love" category="Horror > Comedy" thumbnail="https://picsum.photos/id/1/300/300" rating={i+1}/>
                        ))}
                        {/* <!-- Movie Thumbnail --> */}



                    </Flickity>
                    {/* Start Browse  */}
                    <div className="mt-[50px]">
                    <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
                    {/* <div class="__scroll-selector"> */}
                    <Flickity options={flickityOptions}>
                        {[1,2,3,4,5,6].map( i => (
                            <MovieCard key={i} name={`Meong Golden ${i}`} category={`Horror • Love`} slug={`meong-golden`} thumbnail={`/images/browse-1.png`}/>
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
