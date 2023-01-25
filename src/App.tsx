import styles from './App.module.css'

import logo from './assets/powered.png'
import leftArrowImg from './assets/leftarrow.png'

import { useState } from 'react'

// Calculadora:
import {levels, calcularImc, Level} from './helpers/imc'

// Componente
import { GridItem } from './components/GridItem'

function App() {

  const [altura, setAltura] = useState<number>(0)
  const [peso, setPeso] = useState<number>(0)

  const [toShow, setToShow] = useState<Level | null>(null)

  function calculateButton() {
    if(altura && peso){ // Se os 2 der true
      setToShow(calcularImc(altura, peso))
    }
    else{
      alert('Digite todos os campos!')
    }
  }

  const handleBackButton = () => {
    setToShow(null)
    setAltura(0)
    setPeso(0)
  }


  return (
    <div className={styles.main}> 
      <header>
        <div className={styles.headerContainer}>
          <img src={logo} aria-hidden='true' alt="Logo IMC" />
        </div>
      </header>

      <div className={styles.container}>

        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p> IMC é um sigla para Índice de Massa Corpórea, 
            parâmetro adotado pela Organização Mundial de 
            Saúde para calcular o peso ideal de cada pessoa.
          </p>

          <input 
            type="number"
            placeholder='Digite a sua altura. Ex: 1.50 (em metros)' 
            value={altura > 0 ? altura : ""}
            onChange={e => setAltura(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <input 
            type="number"
            placeholder='Digite a sua altura. Ex: 70.5 (em kg)' 
            value={peso > 0 ? peso : ""}
            onChange={e => setPeso(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />


          <button onClick={calculateButton} disabled={toShow ? true : false}> Calcular </button>

        </div>

        <div className={styles.rightSide}>
          {!toShow && 
            <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem key={key} item={item} /> 
            ))}
          </div>
          }

          {toShow && 
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton} title='Voltar'>
                <img src={leftArrowImg} alt="Voltar" width={25} />
              </div>
              <GridItem item={toShow} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App