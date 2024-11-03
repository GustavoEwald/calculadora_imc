import styles from './Result.module.css'

const Result = ({imc}) => {
    
    return(
        <div>
            <div className={styles.container}>
                <p className={styles.imc}>Seu IMC vale: <span>{imc}</span></p>
                <table>
                    <tr>
                        <th>IMC</th>
                        <th>Classificação</th>
                        <th>Obesidade</th>
                    </tr>
                    <tr className={imc>0&&imc<18.5 ? styles.selected : ''}>
                        <td>Menor que 18,5</td>
                        <td>Magreza</td>
                        <td>0</td>
                    </tr>
                    <tr className={imc>=18.5&&imc<24.9 ? styles.selected : ''}>
                        <td>Entre 18,5 e 24,9</td>
                        <td>Normal</td>
                        <td>0</td>
                    </tr>
                    <tr className={imc>=24.9&&imc<29.9 ? styles.selected : ''}>
                        <td>Entre 25,0 e 29,9</td>
                        <td>Sobrepeso</td>
                        <td>Grau I</td>
                    </tr>
                    <tr className={imc>=29.9&&imc<=39.9 ? styles.selected : ''}>
                        <td>Entre 30,0 e 39,9</td>
                        <td>Obesidade</td>
                        <td>Grau II</td>
                    </tr>
                    <tr className={imc>39.9 ? styles.selected : ''}>
                        <td>Maior que 40,0</td>
                        <td>Obesidade Grave</td>
                        <td>Grau III</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Result;