import emailjs from '@emailjs/browser';

export const Contact = () => {
    const sendForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const form = event.currentTarget;
        const formData = new FormData(form);
        const data: { [key: string]: string } = {};
    
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        emailjs.send("service_ouyqiyk", "template_38msjdi", data, "gi_m8CINJrUBloSxu")
            .then(res => console.log("Mensagem Enviada", res.status))
            .catch(res => console.log("Erro de Envio", res.status))
    }

    return (
        <section className="min-h-screen relative">
            <form onSubmit={sendForm} className="bg-white px-3 py-5 w-2/6 mx-auto mt-10 text-[#1a18a4] rounded-md text-lg max-md:w-11/12">
                <h1 className="bg-[#1a18a4] w-1/2 mx-auto mb-5 p-2 text-white text-center text-2xl font-bold border-b-2 rounded-md max-md:w-3/4">Entre em Contato</h1>

                {/* INFO */}
                <div className="mt-5">
                    <span className="pb-1 border-b-2 border-[#1a18a4]">Informações de Contato</span>
                    <div className="mt-7 group">
                        <label className="absolute px-1 py-1 pointer-events-none duration-300  group-has-[:focus]:text-[#1a18a4] group-has-[:focus]:text-sm group-has-[:focus]:translate-y-[-28px] group-has-[:valid]:text-[#1a18a4] group-has-[:valid]:text-sm group-has-[:valid]:translate-y-[-28px]" htmlFor="name">Nome Completo</label>
                        <input className="bg-slate-300 rounded-md p-1" type="text" id="name" name="name" required/>
                    </div>
                    <div className="mt-7 group">
                        <label className="absolute px-1 py-1 pointer-events-none duration-300  group-has-[:focus]:text-[#1a18a4] group-has-[:focus]:text-sm group-has-[:focus]:translate-y-[-28px] group-has-[:valid]:text-[#1a18a4] group-has-[:valid]:text-sm group-has-[:valid]:translate-y-[-28px]" htmlFor="email">Endereço de Email</label>
                        <input className="bg-slate-300 rounded-md p-1" type="text" id="email" name="email" required/>
                    </div>
                    <div className="mt-7 group">
                        <label className="absolute px-1 py-1 pointer-events-none duration-300  group-has-[:focus]:text-[#1a18a4] group-has-[:focus]:text-sm group-has-[:focus]:translate-y-[-28px] group-has-[:valid]:text-[#1a18a4] group-has-[:valid]:text-sm group-has-[:valid]:translate-y-[-28px]" htmlFor="cell_phone">Telefone</label>
                        <input className="bg-slate-300 rounded-md p-1" type="tel" id="cell_phone" name="cell_phone" required/>
                    </div>
                </div>

                {/* ASSUNTO */}
                <div className="mt-10">
                    <span className="pb-1 border-b-2 border-[#1a18a4]">Detalhe o assunto e sua mensagem</span>
                    <div className="mt-7 group">
                        <label className="absolute px-1 py-1 pointer-events-none duration-300  group-has-[:focus]:text-[#1a18a4] group-has-[:focus]:text-sm group-has-[:focus]:translate-y-[-28px] group-has-[:valid]:text-[#1a18a4] group-has-[:valid]:text-sm group-has-[:valid]:translate-y-[-28px]" htmlFor="subject">Qual o Assunto da Mensagem?</label>
                        <input className="bg-slate-300 w-4/6 rounded-md p-1 max-md:w-3/4" type="text" id="subject" name="subject" required/>
                    </div>
                    <div className="mt-7 group">
                        <label className="absolute px-1 py-1 pointer-events-none duration-300  group-has-[:focus]:text-[#1a18a4] group-has-[:focus]:text-sm group-has-[:focus]:translate-y-[-28px] group-has-[:valid]:text-[#1a18a4] group-has-[:valid]:text-sm group-has-[:valid]:translate-y-[-28px]" htmlFor="message">Mensagem</label>
                        <textarea className="bg-slate-300 w-3/4 rounded-md p-1 max-md:w-4/5" id="message" name="message" required></textarea>
                    </div>
                </div>
                <div className="flex justify-center gap-5 mt-5">
                    <input className="w-20 p-1 rounded-md font-bold bg-[#5755e2] text-white duration-700 hover:bg-green-600" type="submit" value="Enviar"/>
                    <input className="w-20 p-1 rounded-md font-bold bg-[#5755e2] text-white duration-700 hover:bg-red-600" type="reset" value="Limpar"/>
                </div>
            </form>
        </section>
    )
}