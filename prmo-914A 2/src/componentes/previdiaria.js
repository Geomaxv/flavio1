import React from 'react';
import { View, Text, Image } from 'react-native';

export default function previsao() {
 return (
   <View style={{display: "flex", flexDirection: 'row', justifyContent: "space-between", width: "80%"}}>
    <Image></Image>
    <View style={{flexDirection: 'row', alignItems: "center"}}>
    <Text style={{fontSize: 22, color: "white", fontWeight: "bold"}}>Monday</Text>
    <Text style={{fontSize: 22, color: "#D9E5FF", fontWeight: "bold"}}>, 03 Oct</Text>
    </View>
    <View style={{flexDirection: 'row', alignItems: "center"}}>
    <Text style={{fontSize: 22, color: "white", fontWeight: "bold"}}>32</Text>
    <Text style={{fontSize: 22, color: "#D9E5FF", fontWeight: "bold"}}>, 31º</Text>
    </View>
    
   </View>
  );
}