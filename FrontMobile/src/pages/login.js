{/************************************************************************************
*   Copyright © 2020 Grupo 54 - Projeto Portal HUB                                   *
*   Todos os direitos reservados. Todos as linhas são protegidas por direitos        *
*   autorais e outros direitos de propriedade intelectual pertencentes ao grupo 54.  *
*                                                                                    *
*   Integrantes do projeto: Dayane, Jackeline, Nelson, Matheus, Paulo e Kayk.       *
*                                                                                    *
*   Este FrontEnd foi Desenvolvido pelo Matheus.                                     *
**************************************************************************************/}

import React, {useState, useEffect} from 'react';   /*Importando funções de animação*/
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';

export default function Login() {

    {/*Animações de entrada do login*/}
    const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
    const [opacity] = useState(new Animated.Value(0))

    useEffect (()=> {
        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 0, 
                speed: 4,  
                bounciness: 20,
                useNativeDriver: true
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            })
        ]).start();
    },
     []);

    return (
        
        <KeyboardAvoidingView style={styles.background}>

            {/*Chamando o logo*/}
            <View style={styles.containerLogo}>
                <Image
                /*tamanho do logo*/
                style={{
                    width: 130,
                    height: 155,
                }}
                source={require('./assets/logo.png')}
                />
            </View>

            <Animated.View style={[styles.container,{
                opacity: opacity,
                transform: [{
                    translateY: offset.y
                }]
            }]}>

                {/*Entrada do e-mail*/}
                <TextInput      
                style={styles.input}
                placeholder="E-mail"
                autoCorrect={false}     /*dizendo que nao existe e-mail falso (desde que seja o seu e-mail)*/
                onChangeText={()=> {}}
                />

                {/*Entrada da senha*/}
                <TextInput      
                secureTextEntry={true}
                style={styles.input}
                placeholder="Senha"     /*dizendo que nao existe senha falsa (desde que seja a sua senha)*/    
                autoCorrect={false}     
                onChangeText={()=> {}}
                />

                {/*Deixar o botão opaco*/}
                <TouchableOpacity style={styles.btnSubmit}> 
                    <Text style={styles.SubmitText}>Acessar</Text>
                </TouchableOpacity>
                
                {/*Deixar o botão opaco*/}
                <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.registerText}>Criar Conta</Text>
                </TouchableOpacity>
                
            </Animated.View>
        </KeyboardAvoidingView>
    );
}
//login screen styles//
const styles = StyleSheet.create({
    background:{
        flex:1,     //occupy the full screen
        alignItems: 'center',   //central alignment of login fields
        justifyContent: 'center',   //keeps grouping centralized
        backgroundColor: '#2b2b2b'     //background color
    },
    containerLogo:{
        flex:1,     //occupy the full screen (de acordo com o tamanho do .png é claro)
        justifyContent: 'center',   //keeps grouping centralized
    },
    //container general e-mail and password
    container:{ 
        flex:1,     //occupy the full screen
        alignItems: 'center',   //central alignment of login fields
        justifyContent: 'center',   //keeps grouping centralized
        width: '100%',   //login fields width
        padding: 30,    //spacing BETWEEN fields
    },
    //"container" FIELD e-mail and password
    input:{
        backgroundColor: '#fff',    //background color
        width: '90%',   //login fields width
        marginBottom: 15,   //spacing BETWEEN field
        color: '#222',
        fontSize: 19,   //text font size
        borderRadius: 7,    //leaves the border in a circular shape
        padding: 15,    //spacing before text - e-mail and passwd
        height: 50      //height of input fields
    },
    //"Access" button FIELD
    btnSubmit: {
        backgroundColor: '#0086e0',     //background color
        width: '90%',   //login fields width
        height: 45,     //height of input fields
        alignItems: 'center',   //central alignment of login fields
        justifyContent: 'center',   //keeps grouping centralized
        borderRadius: 7,    //leaves the border in a circular shape
    },
    //"Register" button TEXT
    SubmitText: {
        color: '#FFF',     //text color
        fontSize: 19,   //text font size
    },
    //"Register" FIELD
    btnRegister: {
        marginTop: 10,     //spacing BETWEEN field
        height: 45,     //height of input fields
        backgroundColor: '#0086e0',     //background color
        width: '90%',   //login fields width
        alignItems: 'center',   //central alignment of login fields
        justifyContent: 'center',   //keeps grouping centralized
        borderRadius: 7,    //leaves the border in a circular shape
    },
    //"Register" TEXTE 
    registerText:{
        color: '#FFF',     //text color
        fontSize: 19,   //text font size
    },
});
