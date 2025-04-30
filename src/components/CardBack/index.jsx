// feito porem falha com a responsividade

// export default function CardBack(){
//     return(
//         <div className="w-[500px] h-[300px] bg-black rounded-[15px] flex pt-8 flex-col items-center">
//             <div className="w-full h-[50px] bg-[#232323]"></div>
//             <div className="w-[300px] h-[50px] bg-gray-400 mt-10 flex items-center justify-end pr-5">
//                 <p className="text-[25px]">000</p>
//             </div>
//         </div>
//     )
// }

export default function BackCard({cvv}){
    return (
        <div className="w-[500px] h-[300px] bg-black rounded-[15px]">
            <div className="w-full h-[30%] flex items-end">
                <div className="w-full h-[60px] bg-[#2F2F2F]"></div>
            </div>
            <div className="w-full h-[70%] flex justify-center pt-[30px]">
                <div className="w-[70%] h-[50px] bg-[#AEB6BF] flex justify-end items-center">
                    <p className="text-black text-[25px] mr-4">{cvv || "000"}</p>
                </div>
            </div>
        </div>
    )
}