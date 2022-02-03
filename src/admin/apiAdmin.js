import { API } from '../config';


export const createCategory = async (userId, token, category) => {
    const rawResponse = await fetch(`${API}/category/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    });
    const response = rawResponse.json();
    return response;
}

export const createProduct = async (userId, token, product) => {
    const rawResponse = await fetch(`${API}/product/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: product,
    });
    const response = rawResponse.json();
    return response;
}

export const getCategories = async () => {
    const rawResponse = await fetch(`${API}/categories`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json",
        },
    });
    const response = rawResponse.json();
    return response;
}

export const listOrders = async (userId, token) => {
    try {
        const rawResponse = await fetch(`${API}/order/list/${userId}`, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`
            },
        });
        const response = rawResponse.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const getStatusValues = async (userId, token) => {
    try {
        const rawresponse = await fetch(`${API}/order/status-value/${userId}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            },
        });
        const response = rawresponse.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const updateOrderStatus = async (userId, token, orderId, status) => {
    try {
        const rawResponse = await fetch(`${API}/order/${orderId}/status/${userId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ status, orderId }),
        });
        const response = rawResponse.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

/**
 * to perform CRUD on products
 * get all products
 * get a single product
 * update single product
 * delete a single product
 */

export const getProducts = async () => {
    try {
        const rawResponse = await fetch(`${API}/products?limit=100`, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
        });
        const response = rawResponse.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async (productId, userId, token) => {
    try {
        const rawResponse = await fetch(`${API}/product/${productId}/${userId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
        });
        const response = rawResponse.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const getProduct = async (productId) => {
    try {
        const rawResponse = await fetch(`${API}/product/${productId}`, {
            method: "GET",
            headers: {
                Accept: 'application/json',
                "Content-Type": "application/json",
            },
        });
        const response = rawResponse.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const updateProduct = async (productId, userId, token, product) => {
    try {
        const rawResponse = await fetch(`${API}/product/${productId}/${userId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            },
            body: product,
        });
        const response = rawResponse.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}
