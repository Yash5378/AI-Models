import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "@/components/ui/button";
import Models from "./page/Models";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Models />
      {/* <h1>AI Model</h1>
      <Button>hello shadcn</Button> */}
    </>
  );
}

export default App;
