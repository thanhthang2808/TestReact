const API = "https://653f261d9e8bd3be29e000fc.mockapi.io/money";

export const fetchData = async(id) => {
    try {
        const response = await fetch(`${API}/${id}`);
        const data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const updateDataToAPI = async (mon, id) => {
    try {
        const updateMon = async () => {
            await fetch(`${API}/${id}`, {
                method: "PUT",
                body: JSON.stringify(mon),
                headers: {
                    "Content-Type":"application/json",
                },
            });
        };
        await updateMon();
        return "UPDATE SUCCESS";
    } catch (error) {
        console.log(error);
    }
};