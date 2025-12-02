// App.tsx
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Limpar token ao iniciar a aplicação
    localStorage.removeItem("token");
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
