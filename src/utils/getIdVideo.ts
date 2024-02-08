export const getIdVideo = (url: string): string => {
  const [, videoId] = url.split("shorts/");
  return videoId;
};
