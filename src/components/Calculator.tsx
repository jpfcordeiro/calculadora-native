import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator: React.FC = () => {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = (operacao: string) => {
    const num1 = parseFloat(valor1);
    const num2 = parseFloat(valor2);

    if (isNaN(num1) || isNaN(num2)) {
      setResultado('Por favor, insira valores válidos');
      return;
    }

    let result: number;
    switch (operacao) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 === 0) {
          setResultado('Não é possível dividir por zero');
          return;
        }
        result = num1 / num2;
        break;
      default:
        return;
    }

    setResultado(result.toString());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora</Text>
      
      <Text style={styles.label}>Valor 1</Text>
      <TextInput
        style={styles.input}
        value={valor1}
        onChangeText={setValor1}
        keyboardType="numeric"
        placeholder="Digite o primeiro valor"
      />
      
      <Text style={styles.label}>Valor 2</Text>
      <TextInput
        style={styles.input}
        value={valor2}
        onChangeText={setValor2}
        keyboardType="numeric"
        placeholder="Digite o segundo valor"
      />

      <View style={styles.operacoesContainer}>
        <TouchableOpacity style={styles.operacaoButton} onPress={() => calcular('+')}>
          <Text style={styles.operacaoText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operacaoButton} onPress={() => calcular('-')}>
          <Text style={styles.operacaoText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operacaoButton} onPress={() => calcular('*')}>
          <Text style={styles.operacaoText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.operacaoButton} onPress={() => calcular('/')}>
          <Text style={styles.operacaoText}>/</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.resultado}>{resultado}</Text>

      <TouchableOpacity 
        style={styles.calcularButton}
        onPress={() => calcular('+')}
      >
        <Text style={styles.calcularButtonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  operacoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  operacaoButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    width: 60,
    alignItems: 'center',
  },
  operacaoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  resultado: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  calcularButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  calcularButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Calculator; 