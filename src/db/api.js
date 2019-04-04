import axios from 'axios';

const Base_Url = 'https://banana-crisp-75783.herokuapp.com/api'

export const fetchAllArticles = async (topic) => {
    console.log('///fetching all articles in API')
    let queryTopic = ''
    if (topic) {
        queryTopic = `?topic=${topic}`
    }

    const { data: { articles } } = await axios
        .get(`${Base_Url}/articles/${queryTopic}`)
    return articles
}

export const fetchArticleById = async (id) => {
    console.log('hello from Article')
    const { data } = await axios

        .get(`${Base_Url}/articles/${id}`)
    return data
}

export const fetchUserByUsername = async (username) => {
    console.log('Hello from fetchUser', username)
    const { data: { userData } } = await axios
        .get(`${Base_Url}/users/${username}`)
    return userData
}

export const fetchAllCommentsByArticleId = async (artId) => {
    console.log('hello from comments api')
    const { data: { comments } } = await axios
        .get(`${Base_Url}/articles/${artId}/comments`)
    return comments
}

export const commentVoteUp = async (comId) => {
    console.log('comment votes up')
    const { data: { votes } } = await axios
        .patch(`${Base_Url}/comments/${comId}`, { inc_votes: 1 })
    return votes
}
export const commentVoteDown = async (comId) => {
    console.log('comment votes up')
    const { data: { votes } } = await axios
        .patch(`${Base_Url}/comments/${comId}`, { inc_votes: -1 })
    return votes
}

export const commentDelete = async (comId) => {
    console.log('comment delete')
    const data = await axios
        .delete(`${Base_Url}/comments/${comId}`)
    return data
}

export const commentPost = async (artId, input) => {
    console.log('comment post')
    const { data } = await axios
        .post(`${Base_Url}/articles/${artId}/comments`, input)
    return data
}



