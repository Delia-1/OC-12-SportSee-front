import { mockData } from "./mockedData";

export const getUser = async (id) => {
  return mockData.user.find((user) => user.id === id);
};

export const getActivity = async (id) => {
  return mockData.activity.find((activity) => activity.userId === id);
};

export const getPerformance = async (id) => {
  return mockData.performance.find((performance) => performance.userId === id);
};

export const getAverageSessions = async (id) => {
  return mockData.averageSessions.find(
    (averageSessions) => averageSessions.userId === id,
  );
};
