import axios from 'axios';
import { ACTION } from './types';

export const gettingPairs = () => dispatch => {
    axios
        .get('http://localhost:5000/api/req')
        .then(res => {
            dispatch({
                type: ACTION,
                payload: res.data
            })
        })
        .catch(err => console.log(err.response.data));
};

export const gettingAPair = (id) => dispatch => {
    axios
        .get(`http://localhost:5000/api/req/${id}`)
        .then(res => {
            dispatch({
                type: ACTION,
                payload: res.data
            })
        })
        .catch(err => console.log(err.response.data));
}

export const deletingPair = (id) => dispatch => {
    axios
        .delete(`http://localhost:5000/api/req/${id}`)
        .then(res => {
            dispatch({
                type: ACTION,
                payload: res.data
            })
        })
        .catch(err => console.log(err.response.data))
}

export const updatingPair = (pair) => dispatch => {
    axios
        .put(`http://localhost:5000/api/req/${pair._id}`, pair)
        .then(res => {
            dispatch({
                type: ACTION,
                payload: res.data
            })
        })
        .catch(err => console.log(err.response.data))
}

export const postingPair = (pair) => dispatch => {
    axios
        .post(`http://localhost:5000/api/req/${pair}`)
        .then((res) => {
            dispatch({
                type: ACTION,
                payload: res.data
            })
        })
        .catch(err => console.log(err.response.data));
};