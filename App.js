import React from 'react'
import {StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function SettingsScreen ({
  return (
  <View style={styles.centerContainer}>
  <Text style={styles.header}>Página de Configurações</Text>
  <Text>Aqui vocẽ pode ajustar as preferência do app.</Text>
  </View>
  );
}
function HomeScreen({ navigation }){
const DATA = [
{id: '1', title: 'Configuração'},
{id: '2', title: 'Perfil'},
{id: '3', title: 'Mensagem'},
{id: '4', title: 'Segurança'},
{id: '5', title: 'Ajuda'}
];

const renderItem = ({ item }) => (
<TouchableOpacity
style={style.button}
onPress = {()=> {
  if (item.id ==='1') {
    navigation.navigate('Settings');
  } else {
    alert('Você clicou em: $()item.title}');
  }
}}
  >
<Text style = {style.buttonText}>{item.title}</Text>
</TouchableOpacity>
  );

return (
<SafeAreaView style = {style.container}>
<Text style = {style.header}> Menu Principal </Text>
<FlatList
data = {DATA}
renderItem = {renderItem}
keyExtractor = {item => item.id}
contentContainerStyle = {style.listPadding}/>
</SafeAreaView >
);
}
const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName ="Home">
    <Stack.Screen
  name="Home"
  component={Setting

const style = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#f5f5f5'},
header: {
fontSize : 24,
fontWeight:'bold',
textAlign: 'center',
margin: 15},
button: {
backgroundColor: '#00faff',
padding: 15,
borderRadius: 8,
marginBottom: 10,
alignItems: 'center',
elevation: 2,
shadowColor: '#000',
shadowOffset:{width: 0, height: 2}, 
shadowOpacity: 0.1,
shadowRadius: 4},
buttonText:{
color: '#fff',
fontSize:16,
fontWeight:'600'
},
});
