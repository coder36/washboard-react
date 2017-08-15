import React from 'react'
import store from './store'


function loadData(url, method, postPayload, auth_token) {    
    const options = {
        headers: {
            'Accept': 'application/json'
        }
    }    

    options.method = method
    options.headers = { ...options.headers, "Content-Type": "application/json" }

    if( postPayload ) {
        options.body = JSON.stringify(postPayload)
    }

    return fetch(url,options).then((resp) => {
        return resp.json()        
    })
}


export function get(url, auth_token) {
    return loadData(url, "GET", null, auth_token)
}

export function post(url, payload, auth_token) {
    return loadData(url, "POST", payload, auth_token)
}

export function put(url, payload, auth_token) {
    return loadData(url, "PUT", payload, auth_token)
}

export function del(url, auth_token) {
    return loadData(url, "DELETE", null, auth_token)
}