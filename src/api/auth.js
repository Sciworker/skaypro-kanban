const url = 'https://wedev-api.sky.pro/api/user';

export const getUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export const register = async (user) => {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user)
    })

    if (!response.ok) {
        const errorData = await response.json();
        console.error(errorData);
        const error = new Error(errorData.error || "Произошла ошибка");
        error.status = response.status;
        throw error;
    }

    const data = await response.json();
    return data;
}

export const authentication = async (credentials) => {
    const response = await fetch(`${url}/login`, {
        method: 'POST',
        body: JSON.stringify(credentials)
    })

    if (!response.ok) {
        const errorData = await response.json();
        console.error(errorData);
        const error = new Error(errorData.error || "Произошла ошибка");
        error.status = response.status;
        throw error;
    }

    const data = await response.json();
    return data;
}

