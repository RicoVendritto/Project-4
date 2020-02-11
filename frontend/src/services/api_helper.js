import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:3000"
});

// LOGIN - 1
export const loginUser = async loginData => {
  const resp = await api.post(`/auth/login`, loginData);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
  LocalStorage(resp);
  return resp.data.user;
};

// REGISTER - 2
export const registerUser = async registerData => {
  try {
    const resp = await api.post("/signup/", registerData);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.auth_token}`;
    LocalStorage(resp);
    return resp.data.user;
  } catch (e) {
    console.log(e.response);
    if (e.response.status === 422) {
      return {
        errorMessage:
          "Email is already associated with a user, please login to continue"
      };
    }
  }
};

const LocalStorage = resp => {
  localStorage.setItem("authToken", resp.data.auth_token);
  localStorage.setItem("name", resp.data.user.name);
  localStorage.setItem("email", resp.data.user.email);
};

//PASSWORD FORGOT - 3
export const forgotUser = async email => {
  const resp = await api.post(`password/forgot`, email);
  console.log(resp);
  return resp.data;
};

//PASSWORD RESET - 4
export const resetUser = async resetData => {
  const resp = await api.post(`password/reset`, resetData);
  console.log(resp);
  return resp.data;
};

// ALL POSTS - 5
export const postsAll = async () => {
  const resp = await api.get(`/posts/`);
  console.log(resp);
  return resp.data;
};

// CREATE POSTS - 6
export const postsCreate = async postData => {
  const resp = await api.posts(`/posts/`, postData);
  console.log(resp);
  return resp.data;
};

// INDIVIDUAL POST - 7
export const postSingle = async id => {
  const resp = await api.get(`/posts/${id}`);
  return resp.data;
};

// UPDATE POST - 8
export const postUpdate = async (id, postData) => {
  const resp = await api.put(`/posts/${id}`, postData);
  return resp.data;
};

// DELETE INDIVIDUAL POST - 9
export const postDelete = async id => {
  const resp = await api.destroy(`/posts/${id}`);
  return resp.data;
};

// GET COMMENTS OF POST - 10
export const commentsPost = async id => {
  const resp = await api.get(`/posts/${id}/comments`);
  return resp.data;
};

// CREATE COMMENT FOR POST - 11
export const commentCreate = async (id, commentData) => {
  const resp = await api.post(`/posts/${id}/comments`, commentData);
  return resp.data;
};

// INDIVIDUAL COMMENT - 12
export const commentSingle = async (p_id, c_id) => {
  const resp = await api.get(`/posts/${p_id}/comments/${c_id}`);
  return resp.data;
};

// UPDATE COMMENT - 13
export const commentUpdate = async (p_id, c_id, commentData) => {
  const resp = await api.put(`/posts/${p_id}/comments/${c_id}`, commentData);
  return resp.data;
};

export const commentDelete = async (p_id, c_id) => {
  const resp = await api.destroy(`/posts/${p_id}/comments/${c_id}`);
  return resp.data;
};
