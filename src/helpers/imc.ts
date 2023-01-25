export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number // Só vai ter quando o imc for calculado lá em baixo
}

export const levels: Level[] = [
    // Cada informação
    {title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0, 18.5] },
    {title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9] },
    {title: 'Sobrepeso', color: '#E2B036', icon: 'down', imc: [25, 30] },
    {title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99] }
];

export function calcularImc(altura: number, peso: number) {
    const imc = peso / (altura * altura)

    for(let i in levels){ // Ver em qual level está o imc
        if(imc >= levels[i].imc[0] && 
            imc < levels[i].imc[1]){
                let levelCopy: Level = {...levels[i]};
                levelCopy.yourImc = parseFloat(imc.toFixed(2)) ; // Vai ter o IMC dentro do level, ai retorna o IMC dele.
                
                return levelCopy;
        }
    }

    return null; // imc não foi calculado ou não tinha
}

