import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity, ColorPropType, ScrollView } from 'react-native'
import Cronometro from './src/Componentes/Cronometro'


export default class Cronometro extends Component {
    state = {
        botao1: 'VAI',
        botao2: 'ZERAR',
        cronometro: 0,
        timer: null,
        ultimoTempo:0

    }
    iniciar = () => {
        if (this.timer != null) {
            clearInterval(this.timer)
            this.timer = null
            this.setState({botao1:'VAI'})
        } else {
            this.setState({botao1:'PAUSAR'})
            this.setState({botao2:'SALVAR E ZERAR'})
            this.timer = setInterval(() => { this.setstate({ cronometro: this.state.cronometro + 1 }) }, 1000
            )
        }
    }
    zerar = () => {
        if (this.timer != null) {
            clearInterval(this.timer)
            this.timer = null
        }
        this.setState({ ultimoTempo:this.state.cronometro})
        this.setState({ cronometro: 0 })

    }

    render() {
        return (
            <View style={estilo.alinhar}>
                <Image source={require('../Imagens/Cronometro.jpg')} />
                <Text style={estilo.contador}>{this.state.cronometro}s</Text>
                <View sytle={{ flexDirection: 'row' }}>
                    <TouchableOpacity sytle={estilo.botao} onPress={this.iniciar}>
                        <Text style={{ color: 'white' }}>{this.state.botao1}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity sytle={estilo.botao} onPress={this.zerar}>
                        <Text style={{ color: 'white' }}>{this.state.botao2}</Text>
                    </TouchableOpacity>


                </View>
                <ScrollView style={{ flex: 1, margin: 10, flexDirection: 'row' }}>
                    <Text>VOLTAS REGISTRADAS</Text>
                    <Text>ULTIMO TEMPO REGISTRADO: {this.state.ultimoTempo}    </Text>

                </ScrollView>


            </View>




        )

    }
}

const estilo = StyleSheet.create({
    alinhar: {

        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        flex: 1
    },
    contador:
    {
        fontSize: 45,
        fontWeight: 'bold',

    },
    botao:
    {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0066ff',
        margin: 10,
        height: 40,
        flex: 1,
        borderRadius=40

    },


    imagem: {

        width: 120,
        height: 120
    }

})