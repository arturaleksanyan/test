export const login = async (email, password) => {
    const response = await fetch('http://185.223.125.144:4000/admin/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });

    return response.json();
}
export const getChannels = async () => {
    const token = window.localStorage.getItem('token');
    const response = await fetch('http://185.223.125.144:4000/admin/channels/get', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "token": token,
        })
    });

    return response.json();
}