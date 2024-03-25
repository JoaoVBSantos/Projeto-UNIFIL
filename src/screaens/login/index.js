import {View, Text, StyleSheet, Image, TextInput} from "react-native"

function InputLogin  () {
    return <TextInput style={styles.inputs}></TextInput>
};


export const Login = () => {
    return  <View style={styles.container}>
    <View style={styles.textos}>
   <Text>e-mail</Text>
  <InputLogin />
  </View>
  <View style={styles.textos}>
  <Text>senha</Text>
  <InputLogin/>   
  </View>
  <Text>Não tem uma conta? Cadastrar</Text>  
</View>
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFE9D6',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      display: 'flex',
      backgroundColor: 'orange',
      justifyContent: 'center',
      borderRadius: '50%'
    },
    textos: {
      alignItems:'left',
      marginLeft: 6
    },
    inputs:{
      backgroundColor: 'white',
      height:30,
      width: 320,
      borderWidth: 1,
      borderColor: '#E5713F',
      marginBottom: 8,
      marginTop:8,
      paddingLeft:8,
      borderRadius: 50
    }
  });