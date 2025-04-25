import CardFront from "./components/FrontCard";


export default function App(){
  return(
    <div className="w-full h-screen flex">
      <div className="w-[40%] h-full bg-[#271540] relative">
        <div className="absolute top-10 left-45">
          <CardFront/>
        </div>

      </div>

      <div className="w-[60%] h-full flex justify-end p-[40px]">
        <h1 className="text-[45px] w-[65%] h-[150px] font-bold">Preencha os campos para concluir o pagamento!</h1>
      </div>

    </div>
  )
}