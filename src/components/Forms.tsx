import emailjs from '@emailjs/browser';

const Forms = (): JSX.Element => {
    const sendForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const form = event.currentTarget;
        const formData = new FormData(form);
        const data: { [key: string]: string } = {};
    
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });
    
        console.log(data);

        emailjs.send("service_ouyqiyk", "template_38msjdi", data, "gi_m8CINJrUBloSxu")
            .then(res => console.log("Email Enviado", res.status))
            .catch(err => console.log("Email Enviado", err.status))
    }

    return (
        <section className="h-[calc(100vh-114px-20px)]">
            <form onSubmit={sendForm} className="bg-white text-[#1a18a4] rounded-md px-3 py-5 w-9/12 mx-auto mt-10 text-lg">
                <h1 className="text-center text-2xl font-bold mb-5 border-b-2 border-[#1a18a4]">Entre em Contato</h1>
                <div className="flex flex-col">
                    <label htmlFor="name">Nome Completo</label>
                    <input className="bg-slate-200 p-1" type="text" id="name" name="name" placeholder="Diogo Dias Mello" pattern="^[a-zA-Z]+$" required/>
                    <label htmlFor="email">Endereço de Email</label>
                    <input className="bg-slate-200 p-1" type="text" id="email" name="email" placeholder="exemploemail@gmail.com" required/>
                    <label htmlFor="cell_phone">Telefone</label>
                    <input className="bg-slate-200 p-1" type="tel" id="cell_phone" name="cell_phone" pattern="^91 9[1-9][0-9]{7}$" placeholder="91 982705971" required/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="subject">Qual o Assunto da Mensagem?</label>
                    <input className="bg-slate-200 p-1" type="text" id="subject" name="subject" placeholder="Novo Projeto" required/>
                    <label htmlFor="message">Mensagem:</label>
                    <textarea className="bg-slate-200 p-1" id="message" name="message"></textarea>
                </div>
                <div className="flex justify-center gap-5 mt-5">
                    <input className="w-20 p-1 rounded-md font-bold bg-[#5755e2] text-white duration-700 hover:bg-green-600" type="submit" value="Enviar"/>
                    <input className="w-20 p-1 rounded-md font-bold bg-[#5755e2] text-white duration-700 hover:bg-red-600" type="reset" value="Limpar"/>
                </div>
            </form>
        </section>
    )
}

export default Forms;