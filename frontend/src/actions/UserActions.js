import axios from 'axios'
import {
    USERNAME_PROFILE_FAIL,
    USERNAME_PROFILE_REQUEST,
    USERNAME_PROFILE_SUCCESS,
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_FOLLOW_FAIL,
    USER_FOLLOW_REQUEST,
    USER_FOLLOW_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_SEARCH_PROFILE_FAIL,
    USER_SEARCH_PROFILE_REQUEST,
    USER_SEARCH_PROFILE_SUCCESS,
    USER_UNFOLLOW_FAIL,
    USER_UNFOLLOW_REQUEST,
    USER_UNFOLLOW_SUCCESS,
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
} from '../constants/UserConstants'

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('/api/users/login', { email, password }, config)

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const register = (name, username, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const { data } = await axios.post('/api/users/signup', { name, username, email, password }, config)

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const logout = () => async (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({ type: USER_LOGOUT })
}

export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_DETAILS_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/users/${id}`, config)

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UPDATE_PROFILE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put(`/api/users/profile`, user, config)

        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const searchUsers = (keyword) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_SEARCH_PROFILE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/users?keyword=${keyword}`, config)

        dispatch({
            type: USER_SEARCH_PROFILE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_SEARCH_PROFILE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const getProfileDetailsByUsername = (username) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USERNAME_PROFILE_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get(`/api/users/username/${username}`, config)

        dispatch({
            type: USERNAME_PROFILE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USERNAME_PROFILE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const followUserById = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_FOLLOW_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        await axios.get(`/api/users/follow/${id}`, config)

        dispatch({
            type: USER_FOLLOW_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: USER_FOLLOW_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const unfollowUserById = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_UNFOLLOW_REQUEST
        })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        await axios.get(`/api/users/unfollow/${id}`, config)

        dispatch({
            type: USER_UNFOLLOW_SUCCESS,
        })

    } catch (error) {
        dispatch({
            type: USER_UNFOLLOW_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}