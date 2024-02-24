import '../static/css/button.css'

import returnStart from '../static/img/voltar-menu.png';

const Button = (): JSX.Element => {
    return(
        <button className="to-return-start position-fixed fixed-bottom m-3 bg-transparent border-0 rounded-circle">
            <a href="#menu"><img src={returnStart} width={40} alt="seta" /></a>
        </button>
    )
};

export { Button };