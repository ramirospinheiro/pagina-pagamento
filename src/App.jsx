import { useState } from "react";
import CardBack from "./components/CardBack";
import CardFront from "./components/CardFront";

export default function App() {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [mes, setMes] = useState(0);
  const [ano, setAno] = useState(0);
  const [cvv, setCvv] = useState(0);
  const [senha, setSenha] = useState("");

  function pagar(){
    console.log(nome)
    console.log(numero)
    console.log(mes)
    console.log(ano)
    console.log(cvv)
    console.log(senha)
  }

  return (
    <div className="w-full h-screen flex">
      <div className="w-[40%] h-full bg-[#271540] relative">
        <div className="absolute top-10 left-40">
          <CardFront />
        </div>
        <div className="absolute top-95 left-70">
          <CardBack />
        </div>
      </div>

      <div className="w-[60%] h-full flex flex-col items-end p-[40px]">
        <h1 className="text-[45px] w-[65%] h-[150px] font-bold">
          Preencha os campos para concluir o pagamento!
        </h1>
        <div className="w-[65%] h-auto min-h-[200px] flex flex-col gap-4">
          <div className="w-full flex flex-col">
            <label htmlFor="nome" className="text-[20px]">
              Nome no cartão
            </label>
            <input
              onChange={(event) => setNome(event.target.value)}
              type="text"
              placeholder="Fulano de Tal"
              className="w-full h-[40px] rounded-md bg-[#d9d9d9] pl-2 hover:bg-purple-400"
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="numero" className="text-[20px]">
              Número do cartão
            </label>
            <input
              onChange={(event) => setNumero(event.target.value)}
              type="text"
              placeholder="0123 4567 8910 1112"
              className="w-full h-[40px] rounded-md bg-[#d9d9d9] pl-2 hover:bg-purple-400"
            />
          </div>
          <div className="flex">
            <div className="w-[70%] flex flex-col">
              <label htmlFor="expiracao" className="text-[20px]">
                Data de expiração
              </label>
              <div className="w-full flex gap-2">
                <input
                  onChange={(event) => setMes(event.target.value)}
                  type="text"
                  placeholder="MM"
                  className="w-[50%] h-[40px] rounded-md bg-[#d9d9d9] pl-2 hover:bg-purple-400"
                />
                <input
                  onChange={(event) => setAno(event.target.value)}
                  type="text"
                  placeholder="AA"
                  className="w-[50%] h-[40px] rounded-md bg-[#d9d9d9] pl-2 hover:bg-purple-400"
                />
              </div>
            </div>
            <div className="w-[30%] flex flex-col pl-2">
              <label htmlFor="cvv" className="text-[20px]">
                CVV
              </label>
              <input
                onChange={(event) => setCvv(event.target.value)}
                type="text"
                placeholder="123"
                className="w-full h-[40px] rounded-md bg-[#d9d9d9] pl-2 hover:bg-purple-400"
              />
            </div>
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="senha" className="text-[20px]">
              Senha do cartão
            </label>
            <input
              onChange={(event) => setSenha(event.target.value)}
              type="password"
              placeholder="******"
              className="w-full h-[40px] rounded-md bg-[#d9d9d9] pl-2 hover:bg-purple-400"
            />
          </div>
          <button className="w-full h-[50px] bg-[#271540] text-white font-bold rounded-md" onClick={pagar}>
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
}
