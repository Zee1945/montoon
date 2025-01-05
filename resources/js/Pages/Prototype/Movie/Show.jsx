import { Head } from "@inertiajs/react";
import ReactPlayer from "react-player";
import {Link} from "@inertiajs/react";
export default function Show({slug}) {
    return (
        <>
            <Head title={`Detail Movie ${slug}`}></Head>
            {/* Start new Section Here */}
              <section class="mx-auto h-screen w-screen relative watching-page font-poppins bg-form-bg" id="stream">
        {/* <!-- Video Player --> */}
        <div className="pt-[5.5rem]">
            <ReactPlayer url="https://youtu.be/U53Ebk4jwnw?si=0KKDnzseSf-pB2C5" controls width="100%" height="850px" />
        </div>
        {/* <!-- Video Player --> */}

        {/* <!-- Button back to dashboard --> */}
        <div class="absolute top-5 left-5 z-20">
            <Link href={route('prototype.dashboard')}>
                <img src="/icons/ic_arrow-left.svg" class="transition-all btn-back w-[46px]" alt="stream" />
            </Link>
        </div>

        {/* <!-- Video Title --> */}
        <div class="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
            <span class="font-medium text-2xl transition-all text-white drop-shadow-md select-none">
                Details Screen Part Final
            </span>
        </div>
    </section>
            {/* End new Section Here */}
                </>

    );
}
