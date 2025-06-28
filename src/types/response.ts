import { FotoTypes } from "./type-fotos";

export type Response = {
  loading: boolean;
  fotos: FotoTypes[];
  error: string;
};
