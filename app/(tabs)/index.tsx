import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [id, setId] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleNavigate = () => {
    if (/^\d+$/.test(id)) {
      setError("");
      router.push(`/details/${id}`);
    } else {
      setError("Proszę wpisać poprawne ID (liczba całkowita).");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wprowadź ID</Text>
      <Button
        title={'Idź do about'}
        onPress={() => router.push('/about')} />
      <TextInput
              style={styles.input}
              onChangeText={setId}
                value={id}
                placeholder="Wpisz ID"
                keyboardType="numeric"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button
        title="Przejdź"
        onPress={handleNavigate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "white",
  },
  error: {
    color: "red",
    marginBottom: 10,
  }
});
