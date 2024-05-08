import { useState } from "react";
import "./App.css";
import Models from "./page/Models";
import NavigationBar from "./components/NavigationBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <div className="w-full h-full theme-zinc">
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <NavigationBar />
          <Models />
        </div>
      </div>
    </div>
  );
}

export default App;
