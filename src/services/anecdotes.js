import axios from "axios";

const url = "http://localhost:3001/anecdotes";

const getId = () => (100000 * Math.random()).toFixed(0);

const getAll = async () => {
  const response = await axios.get(url);
  return response.data;
};

const createNew = async (content) => {
  const response = await axios.post(url, {
    content: content,
    id: getId(),
    votes: 0
  });
  return response.data;
};

const update = (id, updatedAnecdote) => {
  const request = axios.put(`${url}/${id}`, updatedAnecdote);
  return request.then((response) => response.data);
};

export default {getAll, createNew, update};
