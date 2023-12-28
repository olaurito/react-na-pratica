import { useContext } from "react";
import { UsuarioLogadoContext } from "../contexts";
//hook customizado
export const useUsuarioLogado = () => {
  const context = useContext(UsuarioLogadoContext);
  return context;
};
