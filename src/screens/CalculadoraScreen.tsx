import React from 'react';
import { Text, View } from 'react-native';
import { BotonCal } from '../components/BotonCal';
import { useCalculadora } from '../hooks/useCalculadora';
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {
  const {
    numero,
    numeroAntierior,
    limpiar,
    del,
    armarNumero,
    positivoNegativo,
    btnSumar,
    btnRestar,
    btnMultiplicar,
    btnDividir,
    calcular
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
        {numeroAntierior !== '0' && <Text style={styles.resultadoPequeno}>{numeroAntierior}</Text>}
        <Text 
            style={styles.resultado}
            numberOfLines={1}
            adjustsFontSizeToFit
        >{numero}</Text>

        {/* fila de botones #9b9b9b */}
        <View style={styles.fila}>
            <BotonCal color='#9b9b9b' texto="C" accion={limpiar} />
            <BotonCal color='#9b9b9b' texto="+/-" accion={ positivoNegativo } />
            <BotonCal color='#9b9b9b' texto="del"  accion={ del }/>
            <BotonCal color='#ff9427' texto="/" accion={ btnDividir }/>
        </View>
        {/* fila de botones #9b9b9b */}
        <View style={styles.fila}>
            <BotonCal texto="7" accion={ armarNumero }/>
            <BotonCal texto="8" accion={ armarNumero }/>
            <BotonCal texto="9"  accion={ armarNumero }/>
            <BotonCal texto="X" color='#ff9427' accion={ btnMultiplicar }/>
        </View>
        {/* fila de botones #9b9b9b */}
        <View style={styles.fila}>
            <BotonCal texto="4" accion={ armarNumero }/>
            <BotonCal texto="5" accion={ armarNumero }/>
            <BotonCal texto="6"  accion={ armarNumero }/>
            <BotonCal texto="-" color='#ff9427' accion={ btnRestar }/>
        </View>
        {/* fila de botones #9b9b9b */}
        <View style={styles.fila}>
            <BotonCal texto="1" accion={ armarNumero }/>
            <BotonCal texto="2" accion={ armarNumero }/>
            <BotonCal texto="3"  accion={ armarNumero }/>
            <BotonCal texto="+" color='#ff9427' accion={ btnSumar }/>
        </View>
        {/* fila de botones #9b9b9b */}
        <View style={styles.fila}>
            <BotonCal texto="0" ancho accion={ armarNumero }/>
            <BotonCal texto="."  accion={ armarNumero }/>
            <BotonCal texto="=" color='#ff9427' accion={ calcular }/>
        </View>
    </View>
  );
};
