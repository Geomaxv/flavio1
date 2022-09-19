import React from 'react';
import { View, Text } from 'react-native';

export default function local() {
 return (
   <View style={{display: "flex", flexDirection: "row"}}>
    <Text style={{fontSize: 21, color: "white", fontWeight: "bold"}}>Maceió</Text>
    <Text style={{fontSize: 17, color: "#D9E5FF", fontWeight: "bold"}}>, Brasil</Text>
   </View>
  );
}

