

import InputLabel from "@/Components/InputLabel"
import TextInput from "@/Components/TextInput"
import PrimaryButton from "@/Components/PrimaryButton"
import { Link,Head } from "@inertiajs/react"
export default function Register(){
   return (<>
   <Head title="Sign Up"/>
        <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
        <div className="fixed top-[-50px] hidden lg:block">
            <img src="/images/signup-image.png"
                className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt=""/>
        </div>
        <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
            <div>
                <img src="/images/moonton-white.svg" alt=""/>
                <div className="my-[70px]">
                    <div className="font-semibold text-[26px] mb-3">
                        Sign Up
                    </div>
                    <p className="text-base text-[#767676] leading-7">
                        Explore our new movies and get <br/>
                        the better insight for your life
                    </p>
                </div>
                <form className="w-[370px]">
                    <div className="flex flex-col gap-6">
                        <div>
                        <InputLabel formInput="fullname" value="Full Name"/>
                        <TextInput type="text" name="fullname" className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none" placeholder="Your Fullname" value="zul kecuy"/>
                        </div>
                        <div>
                        <InputLabel formInput="emailaddress" value="Email Address"/>
                        <TextInput type="email" name="email" className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none" placeholder="Your Email Address..." value="zul@fb.com"/>

                        </div>
                        <div>
                        <InputLabel formInput="password" value="Password"/>

                        <TextInput type="password" name="password" className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none" placeholder="Your Password..." value="ini password"/>

                        </div>
                    </div>
                    <div className="grid space-y-[14px] mt-[30px]">

                    <Link href={route('prototype.dashboard')}>

                        <PrimaryButton>
                            <span className="text-base font-semibold">
                                Sign Up
                            </span>
                        </PrimaryButton>
                    </Link>
                        <Link href={route('prototype.login')}>
                        <PrimaryButton variant="light-outline">
                             <span className="text-base text-white">
                                Sign In to My Account
                            </span>
                        </PrimaryButton>
                        </Link>



                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
   )
}
