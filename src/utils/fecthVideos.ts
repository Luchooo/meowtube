import { Video } from "../types";

export const fecthVideos = async (pathName: string): Promise<Video[]> => {
  try {
    const url = new URL(
      pathName,
      "https://technical-test-backend-phase-2.vercel.app"
    );
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error fetching repositories");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
