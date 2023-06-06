/// <reference types="vite/client" />

type LoginError = {
  email: string;
  password: string;
}

type Video = {
  id: number;
  url: string;
  thumbnail: string;
}