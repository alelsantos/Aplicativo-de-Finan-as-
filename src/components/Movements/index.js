import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { MotView, AnimatePresence, MotiText} from 'moti'
export default function Movements ({data}) {
    const [showValue, setshowValue] = useState(false);
return (

<TouchableOpacity style={styles.container} onPress={ () => setShowvalue}>
    <Text sytle={styles.date}>{data.date}</Text>

    <View style={styles.content}>
        <Text sytle= {sytles.label}>{data.label}</Text>

        { showValue ? (
            <AnimatePresence>
                <Text
        sytle={data.type === 1 ? style.value : styles.expenses}
        >
            {data.type === 1 ? `R$ ${data.value} `: `R$ -${data.value}` }
        
            </Text>
            { showValue ? (

        <Text 
        sytle={data.type === 1 ? style.value : styles.expenses}
        >
            {data.type === 1 ? `R$ ${data.value} `: `R$ -${data.value}` }
            </Text>
            </AnimatePresence>
                    ) : (
           <View style={styles.skeleton}>         
           </View>
     )}  
    </View>
    </TouchableOpacity>
    <p>TESTE</p>
    );
    }

const styles = StyleSheet.create({
container:{
    flex:1,
    marginBottom:24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DADADA'



},
content:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop:2,
    marginBottom: 8,
},
date:{
    color:'DADADA',
    Fontweight:'bold'
},
label:{
    fontWeight: 'bold',
    fontSize:16,
},
Value:{
    fontSize:16,
    color: '#2ecc71',
    fontWeight:'bold'
},
expenses:{
    fontSize:16,
    color: '#e74c3c',
    fontWeight:'bold'

},
skeleton:{
    marginTop: 6,
    width: 80,
    height:10,
    backgroundColor:'#DADADA',
    borderRadius:8,

}
})