import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Platform } from 'react-native';

export default function IngredientsScreen({ route, navigation }) {
const { receitaCompleta } = route.params || {};
// Estado para armazenar os ingredientes agrupados por categoria
const [grupos, setGrupos] = useState({});

useEffect(() => {
// Verifica se os ingredientes existem e se estão no novo formato de objeto
if (receitaCompleta?.ingredientes) {
const novoEstado = {};

// Itera sobre as chaves (ex: Massa, Recheio) e prepara o estado com 'checked'
Object.entries(receitaCompleta.ingredientes).forEach(([titulo, lista]) => {
novoEstado[titulo] = lista.map((ing, index) => ({
id: `${titulo}-${index}`, // ID único combinando categoria e índice
name: ing,
checked: false
}));
});

setGrupos(novoEstado);
}
}, [receitaCompleta]);

// Função para alternar o checkbox dentro de uma categoria específica
const toggleCheck = (categoria, id) => {
setGrupos(prev => ({
...prev,
[categoria]: prev[categoria].map(item =>
item.id === id ? { ...item, checked: !item.checked } : item
)
}));
};

return (
<SafeAreaView style={styles.safeArea}>
<ScrollView
style={styles.scrollView}
contentContainerStyle={styles.scrollContent}
>
<Text style={styles.title}>Ingredientes para:</Text>
<Text style={styles.recipeSubtitle}>{receitaCompleta?.nome}</Text>

{/* Mapeia as categorias (Massa, Recheio, etc) */}
{Object.entries(grupos).map(([categoria, listaDeItens]) => (
<View key={categoria} style={styles.categoriaContainer}>
{/* Título da Categoria */}
<View style={styles.badgeCategoria}>
<Text style={styles.badgeText}>{categoria}</Text>
</View>

{/* Lista de ingredientes daquela categoria */}
{listaDeItens.map(item => (
<View key={item.id} style={styles.itemRow}>
<Switch
value={item.checked}
onValueChange={() => toggleCheck(categoria, item.id)}
trackColor={{ true: "#11551a" }}
/>
<Text style={[styles.itemText, item.checked && styles.checkedText]}>
{item.name}
</Text>
</View>
))}
</View>
))}

<TouchableOpacity
style={styles.button}
onPress={() => navigation.navigate('Utensílios', { receitaCompleta })}
>
<Text style={styles.buttonText}>Ver Utensílios 🥄</Text>
</TouchableOpacity>
</ScrollView>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
safeArea: {
flex: 1,
backgroundColor: '#',
minHeight: Platform.OS === 'web' ? '100vh' : '100%'
},
scrollView: { flex: 1 },
scrollContent: {
padding: 20,
flexGrow: 1,
paddingBottom: 60
},
title: { fontSize: 18, color: '#11551a' },
recipeSubtitle: { fontSize: 24, fontWeight: 'bold', color: '#3db136', marginBottom: 15 },

// Estilos novos para organização por subtítulos
categoriaContainer: {
marginTop: 15,
marginBottom: 10
},
badgeCategoria: {
backgroundColor: '#3db136',
paddingVertical: 4,
paddingHorizontal: 12,
borderRadius: 8,
alignSelf: 'flex-start',
marginBottom: 10
},
badgeText: {
color: '#f2f5f7',
fontWeight: 'bold',
fontSize: 14,
textTransform: 'uppercase'
},

itemRow: {
flexDirection: 'row',
alignItems: 'center',
marginVertical: 4,
padding: 12,
backgroundColor: '#3db136', 
borderRadius: 12,
borderWidth: 1,
borderColor: '#3db136'
},
itemText: { marginLeft: 10, fontSize: 16, color: '#f2f5f7', flex: 1 },
checkedText: { textDecorationLine: 'line-through', color: '#11551a' },
button: {
backgroundColor: '#11551a',
padding: 18,
borderRadius: 15,
marginTop: 30,
marginBottom: 20
},
buttonText: { color: '#f2f5f7', textAlign: 'center', fontWeight: 'bold', fontSize: 16 }
});