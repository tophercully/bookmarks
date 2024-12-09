import toolData from "@/data/toolData";

const api = {
  getToolData: async () => {
    await new Promise((resolve) => setTimeout(resolve, 10));
    return toolData;
  },
};

export default api;
