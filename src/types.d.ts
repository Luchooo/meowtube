export type VideoPublic = {
  createdAt: string;
  description: string;
  id: string;
  isPublic: boolean;
  title: string;
  url: string;
  usersId: string;
  Users: {
    username: string;
    avatarUrl: string;
  };
};
