import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Toaster } from "sonner"; // ✅ Import Sonner toast

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        {/* ✅ Global Toast Notification UI */}
        <Toaster position="top-right" richColors />

        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
