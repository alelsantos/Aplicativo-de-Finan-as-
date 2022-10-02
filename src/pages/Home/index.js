import react, { useState} from 'react';
import { StyleSheet, Text, View, Flatlist,  } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
{
id: 1,
label:'Boleto conta luz',
value:'390,90',
date:'17/09/2022',
type: 0 //despesas

},
    {
    id: 2,
    label:'Pix Cliente X',
    value:'390,90',
    date:'17/09/2022',
    type: 0 // receirtas / entradas
    
    },
    {
        id: 3,
        label:'Salário',
        value:'7.000,00',
        date: '17/09/2022',
        type: 0 // receirtas / entradas
        
        },
]

export default function Home () {
return(
    <View style={styles.container}>
        <Header name="Alexandre Leite"/>
        <Balance saldo="9.250.90" gastos="527,00"/>

        <Actions/>

        <Text style={styles.title}>Últimas movimentações </Text>

        <Flatlist
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item}) => <Movements data={item}/>}
        />
    </View>
);
    }
    
    const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#0000FF',
},
title:{
    fontSize: 18,
    fontWeight: 'bold',
   /* marginLeft:14,
    marginRight:14,
    marginTop:14,
    marginBottom:14,
    */
   margin:14,
    },
    list:{
        marginStart: 14,
        marginEnd: 14,

    },
});