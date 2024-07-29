export const url = "https://wedev-api.sky.pro/api/kanban";

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

export const updateCard = async (_id, card, token) => {
    const url = `https://wedev-api.sky.pro/api/kanban/${_id}`;

    const response = await fetch(url, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(card),
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        throw new Error(errorData.error || "Произошла ошибка");
    }

    const data = await response.json();
    return data;
};

export const deleteCard = async (token, _id) => {
    const url_id = `https://wedev-api.sky.pro/api/kanban/${_id}`;

    const response = await fetch(url_id, {
        method: "DELETE",
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
    console.log('Удаление выполнено:', data);
    return data;
};