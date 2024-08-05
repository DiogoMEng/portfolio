import axios from "axios";

const sendForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const data: { [key: string]: string } = {};

    formData.forEach((value, key) => {
        data[key] = value.toString();
    });

    console.log(data);

    await axios({
        url: "https://formsubmit.co/ajax/diogoeng19@gmail.com.br",
        method: "post",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        data: JSON.stringify(data)
    })
}

const Forms = (): JSX.Element => {
    return (
        <form action="https://formsubmit.co/ajax/diogoeng19@gmail.com.br" method="post" target="_blanck" className="bg-white text-[#1a18a4] rounded-md px-3 py-5 w-9/12 mx-auto mt-10" onSubmit={sendForm}>
            <h1 className="text-center text-2xl font-bold mb-5 border-b-2 border-[#1a18a4]">Entre em Contato</h1>
            <div className="flex flex-col">
                <label htmlFor="nome">Nome Completo</label>
                <input className="bg-slate-200 p-1" type="text" id="nome" name="nome" required/>
                <label htmlFor="email">Endereço de Email</label>
                <input className="bg-slate-200 p-1" type="text" id="email" name="email" required/>
            </div>
            <div className="flex flex-col">
                <label htmlFor="assunto">Qual o Assunto da Mensagem?</label>
                <input className="bg-slate-200 p-1" type="text" id="assunto" name="assunto" required/>
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea className="bg-slate-200 p-1" id="mensagem" name="mensagem"></textarea>
            </div>
            <div className="flex justify-center gap-5 mt-5">
                <input className="w-20 p-1 rounded-md font-bold bg-[#5755e2] text-white duration-700 hover:bg-green-600" type="submit" value="Enviar"/>
                <input className="w-20 p-1 rounded-md font-bold bg-[#5755e2] text-white duration-700 hover:bg-red-600" type="reset" value="Limpar"/>
            </div>
        </form>
    )
}

export default Forms;