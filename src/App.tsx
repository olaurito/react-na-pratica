import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { UsuarioLogadoProvider } from "./shared/contexts";

function App() {
  return (
    <div>
      <UsuarioLogadoProvider>
        <RouterProvider router={router} />
      </UsuarioLogadoProvider>
    </div>
  );
}

export default App;
