const follow_defaults = {
    is_following: false,
    followers: [],
    followings: [],
    profile_views: []
}

const follow_system = (state=follow_defaults, action) => {
    switch (action.type) {
        case "IS_FOLLOWING": 
            return { ...state, is_following: action.payload }
            break;

        case "FOLLOWER": 
            return { ...state, followers: follower(state.followers, action.payload) }
            break;

        case "FOLLOWING": 
            return { ...state, followings: following(state.followings, action.payload) }
            break;

        case "UNFOLLOWER": 
            return { ...state, followers: unfollower(state.followers, action.payload) }
            break;

        case "UNFOLLOWING": 
            return { ...state, followings: unfollowing(state.followings, action.payload) }
            break;

        case "GET_FOLLOWERS": 
            return { ...state, followers: action.payload }
            break;

        case "GET_FOLLOWINGS": 
            return { ...state, followings: action.payload }
            break;
            
        case "GET_PROFILE_VIEWS": 
            return { ...state, profile_views: action.payload }
            break;

    }
    return state
}

const follower = (followers, n) => {
    followers.unshift(n)
    return followers
}

const following = (followings, n) => {
    followings.unshift(n)
    return followings
}

const unfollower = (followers, n) => {
    return followers.filter(ff => ff.follow_by !== parseInt(n) )
}

const unfollowing = (followings, n) => {
    return followings.filter(ff => ff.follow_to !== parseInt(n) )
}

export default follow_system