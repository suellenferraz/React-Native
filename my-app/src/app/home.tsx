import { View, Alert } from "react-native";
import { useEffect, useState } from "react";

import { api } from "../services/api";

export default function Home() {
    const [categories, setCategories] = useState([]);

    async function fetchCategories() {
        try {
            const {data} = await api.get("/categories");
            setCategories(data);
        } catch (error) {
            console.log(error);
            Alert.alert("Categorias", "Não foi possível carregar as categorias");
        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    return <View style={{ flex: 1 }}></View>;
}