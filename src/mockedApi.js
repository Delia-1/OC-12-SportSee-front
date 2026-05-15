import { mockData } from "./mockedData";

const API_URL = "http://localhost:3000";

export const getUser = async (id) => {
  return mockData.user.find((user) => user.id === Number(id));
};

export const getUserByApi = async (id) => {
  try {
    const reponse = await fetch(`${API_URL}/user/${id}`);
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }

    const result = await reponse.json();
    console.log(result);
    return result.data;
  } catch (erreur) {
    console.error(erreur.message);
  }
};

export const getActivity = async (id) => {
  return mockData.activity.find((activity) => activity.userId === Number(id));
};

export const getActivityByApi = async (id) => {
  try {
    const reponse = await fetch(`${API_URL}/user/${id}/activity`);
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }

    const result = await reponse.json();
    console.log(result);
    return result.data;
  } catch (erreur) {
    console.error(erreur.message);
  }
};

export const getPerformance = async (id) => {
  return mockData.performance.find(
    (performance) => performance.userId === Number(id),
  );
};

export const getPerformanceByApi = async (id) => {
  try {
    const reponse = await fetch(`${API_URL}/user/${id}/performance`);
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }
    const result = await reponse.json();
    console.log(result);
    return result.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getAverageSessions = async (id) => {
  return mockData.averageSessions.find(
    (averageSessions) => averageSessions.userId === Number(id),
  );
};

export const getAverageSessionsByApi = async (id) => {
  try {
    const reponse = await fetch(`${API_URL}/user/${id}/average-sessions`);
    if (!reponse.ok) {
      throw new Error(`Statut de réponse : ${reponse.status}`);
    }

    const result = await reponse.json();
    console.log(result);
    return result.data;
  } catch (erreur) {
    console.error(erreur.message);
  }
};
