import { Level } from "../../helpers/imc"
import styles from './GridItem.module.css'
import downImage from '../../assets/down.png'
import upImage from '../../assets/up.png'

type Props = {
    item: Level
}


export function GridItem({ item }: Props) {
    return(
        <div className={styles.main} style={{ backgroundColor : item.color}}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ? upImage : downImage} aria-hidden='true' alt={item.icon} width='30px' />
            </div>
            <div className={styles.gridTitle}> {item.title} </div>

            {item.yourImc &&
                <div className={styles.yourImc}> Seu IMC é de {item.yourImc} kg/m²</div>
            }

            <div className={styles.gridInfo}>
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>.
                </>
            </div>
        </div>
    )
}