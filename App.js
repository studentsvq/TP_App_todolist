import React from 'react';
import { 
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  StatusBar,
  Pressable,
  OnPress,
} from 'react-native';



const DATA = [
  {id:'First', title : "Faire les courses"},{id:'Second', title : "Aller à la salle de sport 3 fois par semaine"},{id:'Third',title : "Monter à plus de 5000m d altitude"},
  {id:'Fourth', title : "Acheter mon premier appartement"},{id:'Fifth', title : "Perdre 5 kgs"},{id:'Sixteenth',title : "Gagner en productivité"},{id:'Seventeenth', title : "Apprendre un nouveau langage"},{id:'Eighteelth', title : "Faire une mission en freelance"},{id:'Nineteenth', title : "Organiser un meetup autour de la tech"}{id:'Tenth', title : "Faire un triathlon"},
  
];


const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
function onPress(){

}
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up<Text style={styles.bigRed}>App.js</Text>to start working on your app!</Text>
      <StatusBar style="auto" />    
      
      <TextInput
        style={styles.input}
        placeholder="useless placeholder"
      />
      <Pressable onPress={onPressFunction}>
      <Text>valider</Text>
      </Pressable>

      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
      />
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: "auto",
    margin: "auto",
  }, 

  bigRed: {
  color: 'red',
  fontWeight: 'bold',
  fontSize: 12,
},

  Button: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 30,
  alignItems: 'flex-end',
},
 

})
