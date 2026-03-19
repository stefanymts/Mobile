import React from 'react'
import {StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView} from 'react-native'

const Data = [
{id: '1', title: 'Configuração'},
{id: '2', title: 'Perfil'},
{id: '3', title: 'Mensagem'},
{id: '4', title: 'Segurança'},
{id: '5', title: 'Ajuda'}
];

export default function App () {
const renderItem = ({item}) => (
<TouchableOpacity
style = {style.button}
onPress = {() => alert (`Você clicou em: ${item.title}`)}>
<Text style = {style.buttonText}>{item.title}</Text>
</TouchableOpacity >);

return (
<SafeAreaView style = {style.container}>
<Text style = {style.header}> Menu Principal </Text>
<FlatList
data = {Data}
renderItem = {renderItem}
keyExtractor = {item => item.id}
contentContainerStyle = {style.listPadding}/>
</SafeAreaView >
);
}

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
