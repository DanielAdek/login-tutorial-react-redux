import axios from 'axios';
import Alert from 'sweetalert';

const userDetails = (data) => ({
    type: 'LOGIN_USER',
    data
})

const loading = () => ({
    type: 'LOADING'
});

const loadingStop = () => ({
    type: 'LOADING_STOP'
})
export const loginUser = (userData) => dispatch => {
    dispatch(loading());
    return axios.post('/auth/login', userData)
    .then(user => {
        dispatch(loadingStop());
        dispatch(userDetails(user.data.data.user))
        Alert('Login Process', `${user.data.data.message}`, 'success');
        localStorage.setItem('x-t-acs', user.data.data.Client_token)
    })
    .catch(error => {
        dispatch(loadingStop())
        Alert('Login Process', `${error.response.data.data.message}`, 'error');
        //dispatch(userDetails({ error: error.response.data.data.message }));
    })
}