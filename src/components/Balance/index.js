import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import { MotiView } from  'moti'
export default function Balance (saldo, gastos) {
return (

    <MotiView
style={sytles.container}
from={{
    rotateX: '-100deg',
    opacity: 0,
}}
animate={{
    rotateX: '0deg',
    opacity: 1,
}}
transition={{
    type: 'timing',
    delay: 300,
    duration:900
}}
>
      
        <View style={styles.item}>
            <Text sytle= {styles.itemTitle}>Saldo</Text>
            <View style={sytles.content}>
            <Text style={style.currencySymbol}>R$</Text>
            <Text style={styles.Balance}>{saldo}</Text>
    </View>
    </View>

    
      
      <View style={styles.item}>
          <Text sytle= {styles.itemTitle}>Gastos</Text>
          <View style={sytles.content}>
          <Text style={style.currencySymbol}>R$</Text>
          <Text style={styles.expenses}>{gastos}</Text>
  </View>

  </View>

    </MotiView>
);
}

const styles = StyleSheet.create({

    container:{
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'sapace-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop:-24,
        marginStart:14,
        marginEnd:14,
        borderRadius:4,
        paddingTop: 22,
        paddingBotto: 22,
        zIndex:99,
    },
    itemTitle:{
        fontSize: 20,
        color: '#DADADA'
    },
    content:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    currenctSymbol:{
        color: '#DADADA',
        marginRight:6,
    },
    balance:{
        fontSize:22,
        color:'#2ecc71'
    },
    expenses:{
        fontSize: 22,
        color:'#e74c3c'
    }



})