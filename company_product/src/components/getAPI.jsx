import React from 'react';
import axios from 'axios';

const useGetApi = () => {

    const getApi = (resource, id) => {
        
        return axios.get('https://dog.ceo/api/breeds/image/random/');
    }
    

    const postApi = () => {
        return axios.post("sent data to server");
    }

    const putApi = () => {
        return axios.put("");
    }

    const deleteApi = () => {
        return axios.delete("")
    }

    return {
        get:getApi,
        post:postApi,
        put:putApi,
        delete:deleteApi
    };
}

export default useGetApi;