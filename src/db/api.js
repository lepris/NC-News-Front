import axios from "axios";

const Base_Url = "https://banana-crisp-75783.herokuapp.com/api";

export const fetchAllArticles = async (topic, filter) => {

  let queryTopic = "";
  let filterType = "";

  if (topic) {
    queryTopic = `topic=${topic}`;
  }
  if (filter === 'mostVoted') {
    filterType = "&sort_by=votes&order=desc";
  }
  if (filter === 'mostCommented') {
    filterType = "&sort_by=comment_count&order=desc";
  }



  const { data } = await axios.get(`${Base_Url}/articles/?${queryTopic}${filterType}`);
  return data.articles;
};

export const fetchArticleById = async id => {

  const { data } = await axios.get(`${Base_Url}/articles/${id}`);
  return data;
};

export const postArticle = async input => {

  const {
    data: { article }
  } = await axios.post(`${Base_Url}/articles`, input);
  return article;
};

export const fetchUserByUsername = async username => {

  const {
    data: { userData }
  } = await axios.get(`${Base_Url}/users/${username}`);
  return userData;
};

export const fetchAllCommentsByArticleId = async artId => {

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

  const {
    data: { votes }
  } = await axios.patch(`${Base_Url}/${element}/${id}`, { inc_votes: 1 });
  return votes;
};
export const voteDown = async (element, id) => {

  const {
    data: { votes }
  } = await axios.patch(`${Base_Url}/${element}/${id}`, { inc_votes: -1 });
  return votes;
};

export const commentDelete = async comId => {

  const data = await axios.delete(`${Base_Url}/comments/${comId}`);
  return data;
};

export const commentPost = async (artId, input) => {

  const { data } = await axios.post(
    `${Base_Url}/articles/${artId}/comments`,
    input
  );
  return data;
};
