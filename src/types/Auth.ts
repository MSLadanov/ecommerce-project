export type TAuthCredentials = {
  username: string;
  password: string;
};

export type TSignInResponse = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
};

