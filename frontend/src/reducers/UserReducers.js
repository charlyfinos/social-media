import {
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
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
    USER_UPDATE_PROFILE_FAIL,
    USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS,
    USERNAME_PROFILE_REQUEST,
    USERNAME_PROFILE_SUCCESS,
    USERNAME_PROFILE_FAIL,
    USER_FOLLOW_REQUEST,
    USER_FOLLOW_SUCCESS,
    USER_FOLLOW_FAIL,
    USER_UNFOLLOW_REQUEST,
    USER_UNFOLLOW_SUCCESS,
    USER_UNFOLLOW_FAIL
} from "../constants/UserConstants";

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }
        case USER_LOGIN_SUCCESS:
            return { loading: false, success: true, userInfo: action.payload }
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
        default:
            return state

    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true }
        case USER_REGISTER_SUCCESS:
            return { loading: false, success: true, userInfo: action.payload }
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state

    }
}

export const userDetailsReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return { ...state, loading: true }
        case USER_DETAILS_SUCCESS:
            return { loading: false, success: true, user: action.payload }
        case USER_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state

    }
}

export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return { loading: true }
        case USER_UPDATE_PROFILE_SUCCESS:
            return { loading: false, success: true, userInfo: action.payload }
        case USER_UPDATE_PROFILE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state

    }
}

export const userSearchProfileReducer = (state = { userSearch: [] }, action) => {
    switch (action.type) {
        case USER_SEARCH_PROFILE_REQUEST:
            return { loading: true, userSearch: [] }
        case USER_SEARCH_PROFILE_SUCCESS:
            return { loading: false, success: true, userSearch: action.payload.users }
        case USER_SEARCH_PROFILE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const usernameProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case USERNAME_PROFILE_REQUEST:
            return { loading: true }
        case USERNAME_PROFILE_SUCCESS:
            return { loading: false, success: true, user: action.payload }
        case USERNAME_PROFILE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const followUserReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_FOLLOW_REQUEST:
            return { loading: true }
        case USER_FOLLOW_SUCCESS:
            return { loading: false, success: true }
        case USER_FOLLOW_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const unfollowUserReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UNFOLLOW_REQUEST:
            return { loading: true }
        case USER_UNFOLLOW_SUCCESS:
            return { loading: false, success: true }
        case USER_UNFOLLOW_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}



