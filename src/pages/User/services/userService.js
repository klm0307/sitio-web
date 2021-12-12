import { api } from "../../../config/api";

const listUsers = async (page) => {
  try {
    return await api.get(`/users?page=${page}`);
  } catch (error) {
    console.log(error);
  }
};

export { listUsers };
