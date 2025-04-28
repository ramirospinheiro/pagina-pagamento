// para componentes o nome da função deve começar com letra maiuscula para identificar que se trata de um componente
// caso fosse cardFront() se entende apenas como uma função

import { FcSimCardChip } from "react-icons/fc";
import { LuNfc } from "react-icons/lu";

export default function CardFront(){
    return(
        <div className="w-[500px] h-[300px] bg-black rounded-[15px]">
            <div className="w-full h-[30%] flex">
                <div className="w-[50%] h-full flex pl-4 items-center gap-2">
                    <div className="w-[60px] h-[60px] rounded-full bg-white"></div>
                    <div className="w-[40px] h-[40px] rounded-full bg-white"></div>
                </div>
                <div className="w-[50%] h-full flex p-4 justify-end">
                    <p className="text-[20px] text-white">Nome do banco</p>
                </div>
            </div>
            <div className="w-full h-[40%] flex flex-col">
                <div className="w-full h-[60%] flex items-center pl-2">
                    <FcSimCardChip size={80}/> 
                    <LuNfc color="#fff" size={40}/>
                </div>
                <div className="w-full h-[40%] pl-4">
                    <p className="text-[45px] text-gray-500">0000 0000 0000 0000</p>
                </div>
            </div>
            <div className="w-full h-[30%] flex pl-4 pt-2">
                <p className="text-[40px] text-white ">Nome no cartão</p>
            </div>
        </div>    
    )
}