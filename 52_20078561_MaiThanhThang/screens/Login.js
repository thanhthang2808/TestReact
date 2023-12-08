import { Pressable, View, StyleSheet, Text, TextInput} from "react-native";
import React, { useState, useEffect } from "react";

export default function Login( { navigation } ) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mon, setMon] = useState([]);
    const [message, setMessage] = useState("");
    useEffect(() => {
        fetch("https://653f261d9e8bd3be29e000fc.mockapi.io/money")
        .then((resp) => resp.json())
        .then((json) => setMon(json));
    }, []);
    
    console.log(mon);
    const validateLogin = () => {
        mon.map((item)=>{
            if(item.email === email && item.password === password) {
                navigation.navigate("Home", {id: item.id});
            } else {
                setMessage("Email or password incorrect");
            }
            setEmail("");
            setPassword("");
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontStyle: 15, color: 'red', textAlign: 'center' }}>{message}</Text>
            <TextInput 
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}></TextInput>
            <TextInput 
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}></TextInput>
            <Pressable
            style={{ width: "90%", backgroundColor: "blue", padding: 10 }}
            onPress={validateLogin}>
                <Text
                style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>Login</Text>
            </Pressable>
        </View>
    );
}
 const styles = StyleSheet.create({
    input: {
        width: "90%",
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        marginVertical: 10,
    },
 });
