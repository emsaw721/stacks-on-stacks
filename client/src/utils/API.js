

export const getME = (token) => {
    return fetch('/api/users/me', {
        method: 'GET',
        headers: {
            'Content-Type':'application/json',
            authorization: `Bearer ${token}`,
        },
    });
};

export const createUser = (userData) => {
    return fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
        
    });
};

export const loginUser = (userData) => {
    return fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
  };

export const saveTransaction = (transactionData, token) => {
    return fetch('/api/users', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(transactionData),
    });
};

export const updateTransaction = (transactionData, token) => {
    return fetch(`/api/users/transactions/${transaction._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
    });
};

export const removeTransation = (transactionData, token) => {
    return fetch(`/api/users/transactions/${transaction._id}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
};

