import styles from './Header.module.css'

const Header = (started) => {
    let open = 0;
    if(started.started==1){
        open = 1;
    }

    return(
        <header>
            <div className={styles.container}>
                <h1>Calculadora de <span>IMC</span></h1>
                <h3 className={open==1 ? styles.textTransform : ''}><span>Clique no botão para Iniciar</span></h3>
            </div>
        </header>
    )
}

export default Header