const url = "https://wedev-api.sky.pro/api/kanban";

export const getCards = async (token) => {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error(errorData);
        const error = new Error(errorData.error || "Произошла ошибка");
        error.status = response.status;
        throw error;
    }

    const data = await response.json();
    console.log(data);
    return data.tasks;
};

export const createCard = async (token, card) => {
    console.log('card ', card);
    const response = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(card),
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error(errorData);
        const error = new Error(errorData.error || "Произошла ошибка");
        error.status = response.status;
        throw error;
    }

    const data = await response.json();
    console.log(data);
    return data.tasks;
}