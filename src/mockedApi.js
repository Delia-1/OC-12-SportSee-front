import { mockData } from "./mockedData";

export const getUser = async (id) => {
  return mockData.user.find((user) => user.id === Number(id));
};

export const getActivity = async (id) => {
  return mockData.activity.find((activity) => activity.userId === Number(id));
};

export const getPerformance = async (id) => {
  return mockData.performance.find(
    (performance) => performance.userId === Number(id),
  );
};

export const getAverageSessions = async (id) => {
  return mockData.averageSessions.find(
    (averageSessions) => averageSessions.userId === Number(id),
  );
};
