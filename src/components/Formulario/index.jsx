import InputMask from 'react-input-mask';
import { useState } from "react"
import styles from './Formulario.module.css'


const Formulario = ({onQuery, onStart}) => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [isActive, setIsActive] = useState(false)

    function start(e) {
        e.preventDefault();
        setIsActive(!isActive); 
        onStart(1);
    }

    function calculaIMC(e) {
        e.preventDefault();
        if (altura>0){
            onQuery(( peso/(altura*altura)).toFixed(1));
        }else{
            onQuery('  A altura deve ser maior que 0!');
        }
    } 

        
    return(
        <>  
            <form>
                <div className={styles.container}>
                    <div className={`${styles.formContainer} ${isActive ? styles.active : ''}`}>
                        <div className={styles.btnContainer}><button onClick={start} className={styles.openForm}>Começar</button></div>
                        <div className={styles.formItens}>
                            <div className={styles.formItem}>
                                <label for="altura">Altura: </label>
                                <InputMask mask='9,99' maskChar='' onChange={evento => setAltura(parseFloat(evento.target.value.replace(',','.')))} id="altura" min={0} />
                                <label>m</label>
                            </div>
                            <div className={styles.formItem}>
                                <label for="peso">Peso: </label>
                                <input onChange={evento => setPeso(evento.target.value)} type="number" id="peso" min={0}/>
                                <label>kg</label>
                            </div>
                        </div>
                        <button onClick={calculaIMC} className={styles.formButton}>Calcular</button>
                    </div>
                </div>
            </form>
                    
        </>
    )
}

export default Formulario