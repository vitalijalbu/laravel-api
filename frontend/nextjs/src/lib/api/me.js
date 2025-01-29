import { apiClient } from "@/lib/api";
import { setSession } from "@/lib/session";

export const loginAction = async (body) => {
  try {
    const response = await apiClient.post("/auth/local", body);

    if (response.status === 200) {
      const jwt = response.data.jwt;
      setSession({ jwt });

      const user = await getProfile();
      setSession({ user });

      return { jwt, user };
    } else {
      console.error("Error during login:", response);
    }
  } catch (error) {
    console.error("Login error:", error);
  }
};

export const logoutAction = async () => {
  try {
    const response = await apiClient.post("/logout");
  } catch (error) {
  } finally {
    removeSession();
  }
  return true;
};

export const updateProfile = async (body, userId) => {
  try {
    const { data } = await apiClient.put(`/users/${userId}`, body);
    return data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.response?.data ||
      error.message ||
      "An unknown error occurred";
    throw new Error(errorMessage);
  }
};

export const getProfile = async () => {
  try {
    const { data } = await apiClient.get(`/users/me?populate=*`);
    return data;
  } catch (error) {
    console.error("Error fetching profile:", error.message);
    throw new Error(
      error.response?.data || "An error occurred while fetching profile"
    );
  }
};
