import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, updateDataToAPI } from "../service/money.service";
import {
    setData, 
    addIn,
    addOut,
} from "../redux/actions";

export default function Home({ navigation, route }) {
    const { id } = route.params;
    const dispatch = useDispatch();
    const { money } = useSelector((state) => state);

    useEffect(() => {
        fetchData(id).then((data) => {
            dispatch(setData(data));
        });
    },[]);

    console.log(money);
    const listIn = money.money_in;
    const listOut = money.money_out;

    const updateAPI = async() => {
        try {
            await updateDataToAPI(money, id);
            console.log("Update Successfully")
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            {/* AddForm */}
            <View>
                <Text>Income</Text>
                {listIn.map((inc, amo, idx)=>{
                    const { content } = inc;
                    const { amount } = inc;
                    return (
                        <View
                        key={idx}
                        style={{
                            justifyContent: "space-between",
                            margin: 10,
                        }}>
                            <Text style={{ fontWeight: 'bold' }}>
                                Content: {inc}; Amount: {amo}
                            </Text>
                        </View>
                    );
                })}
            </View>
            <Pressable
            onPress={updateAPI}
            style={{ width: "90%", backgroundColor: "pink", padding: 10 }}
            >
                <Text>Update API</Text>
            </Pressable>
        </View>
    )
}
