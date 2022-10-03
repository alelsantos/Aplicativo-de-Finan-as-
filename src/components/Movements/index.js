import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { MotiView, AnimatePresence, MotiText} from 'moti'
export default function Movements ({data}) {
    const [showValue, setshowValue] = useState(false);
return (

<TouchableOpacity style={styles.container} onPress={ () => setShowvalue}>
    <Text sytle={styles.date}>{data.date}</Text>

    <View style={styles.content}>
        <Text sytle= {sytles.label}>{data.label}</Text>

        { showValue ? (
            <AnimatePresence exitBeforeEnter>
                <MotiText
        sytle={data.type === 1 ? style.value : styles.expenses}
        from={{
            translateX:100,

        }}
        animate={{
            translateX: 0

        }}
        transition={{
            type: 'timing',
            duration: 500,
        }}
        >
            {data.type === 1 ? `R$ ${data.value} `: `R$ -${data.value}` }
        
            </MotiText>
            </AnimatePresence>
            { showValue ? ( 

      <MotiText
        sytle={data.type === 1 ? style.value : styles.expenses}
        >
            {data.type === 1 ? `R$ ${data.value} `: `R$ -${data.value}` }
            </MotiText>
            
                    ) : (
                        <AnimatePresence exitBeforeEnter>
           <MotiView 
           style={styles.skeleton}
           from={{Opacity:0}}
           animate={{opacity: 1}}
           transition={{type: 'timing'}}
           >         
           </MotiView>
           </AnimatePresence>
     )}  
    </View>
    </TouchableOpacity>
  
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