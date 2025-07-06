import axios from "axios";

const API_URL = "https://api.uidmt.com/api/1.0/live-courses";

export const fetchCourses = async () => {
  const response = await axios.get(API_URL);
  return response.data.data || response.data || [];
};
