import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Dashboard from "./Pages/Dashboard";
import GroupGifts from "./Pages/GroupGifts";
import AiGenerator from "./Pages/AiGenerator";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/group-gifts" element={<GroupGifts />} />
        <Route path="/ai-generator" element={<AiGenerator />} />
      </Route>
    </Routes>
  );
}

export default App;
