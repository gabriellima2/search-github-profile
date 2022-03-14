export function addInStorage(key, value) {
    localStorage.setItem(key, value);
};

export function verifyLocalStorage(key, value) {
    const response = localStorage.getItem(key);

    if ( !response ) {
        addInStorage(key, value);
        return value;
    };

    return response;
};
