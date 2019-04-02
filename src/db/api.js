import axios from 'axios';

const Base_Url = 'https://banana-crisp-75783.herokuapp.com/api'

export const fetchAllArticles = async () => {
    console.log('Hello from Fetch in API')
    const { data: { articles } } = await axios
        .get(`${Base_Url}/articles`)
    return articles
}

export const fetchArticleById = async (id) => {
    console.log('hello from Article')
    const { data } = await axios

        .get(`${Base_Url}/articles/${id}`)
    return data
}

export const fetchUserByUsername = async (username) => {
    console.log('Hello from fetchUser')
    const { data: { userData } } = await axios
        .get(`${Base_Url}/users/${username}`)
    return userData
}



