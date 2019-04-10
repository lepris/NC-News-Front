import axios from "axios";

const Base_Url = "https://banana-crisp-75783.herokuapp.com/api";

export const fetchAllArticles = async topic => {
  console.log("///fetching all articles in API");
  let queryTopic = "";
  if (topic) {
    queryTopic = `?topic=${topic}`;
  }

  const { data } = await axios.get(`${Base_Url}/articles/${queryTopic}`);
  return data.articles;
};

export const fetchArticleById = async id => {
  console.log("hello from Article");
  const { data } = await axios.get(`${Base_Url}/articles/${id}`);
  return data;
};

export const postArticle = async input => {
  console.log("Posting article");
  const {
    data: { article }
  } = await axios.post(`${Base_Url}/articles`, input);
  return article;
};

export const fetchUserByUsername = async username => {
  console.log("Hello from fetchUser", username);
  const {
    data: { userData }
  } = await axios.get(`${Base_Url}/users/${username}`);
  return userData;
};

export const fetchAllCommentsByArticleId = async artId => {
  console.log("hello from comments api");
  const {
    data: { comments }
  } = await axios.get(`${Base_Url}/articles/${artId}/comments`);
  return comments;
};

export const fetchAllTopics = async () => {
  const {
    data: { topics }
  } = await axios.get(`${Base_Url}/topics`);
  return topics;
};

export const addTopic = async input => {
  const {
    data: { topic }
  } = await axios.post(`${Base_Url}/topics`, input);
  return topic;
};

export const voteUp = async (element, id) => {
  console.log("comment votes up");
  const {
    data: { votes }
  } = await axios.patch(`${Base_Url}/${element}/${id}`, { inc_votes: 1 });
  return votes;
};
export const voteDown = async (element, id) => {
  console.log("comment votes up");
  const {
    data: { votes }
  } = await axios.patch(`${Base_Url}/${element}/${id}`, { inc_votes: -1 });
  return votes;
};

export const commentDelete = async comId => {
  console.log("comment delete");
  const data = await axios.delete(`${Base_Url}/comments/${comId}`);
  return data;
};

export const commentPost = async (artId, input) => {
  console.log("comment post");
  const { data } = await axios.post(
    `${Base_Url}/articles/${artId}/comments`,
    input
  );
  return data;
};
