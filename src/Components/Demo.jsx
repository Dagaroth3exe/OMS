import React from "react";
import Play from '../assets/play.png'

const Thumbnail = () =>{
    return(
        <div className="h-[500px] ">
            <h1 className="text-[30px] font-bold text-center">Experience the Demo</h1>
            <section className="pt-[90px] justify-center  flex">

                <div className="shadow-deep flex justify-center items-center h-[250px] w-[400px] border-2 rounded-2xl bg-gradient-to-r from-[#3E1A78] to-[#F09AB2]">
                    <div className=" h-[235px] w-[385px] border-2 rounded-[11px] bg-white">
                    <img className="h-[120px] w-[350px] mt-[55px] ml-[18px] hover:scale-110 cursor-pointer transition" src="/src/assets/play.png" alt="" />
                    </div>
                    
                </div>


            </section>
        </div>
    )
}

export default Thumbnail