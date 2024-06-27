import React, { useState } from "react";
import RiskRewardGraph from "./components/RiskRewardGraph";
import OptionsForm from "./components/OptionsForm";
import { OptionContract } from "./types/OptionContract";
import "./App.css";

const App: React.FC = () => {
  const [options, setOptions] = useState<OptionContract[]>([]);

  return (
    <div className="app-container">
      <h1>Options Strategy Risk & Reward Analysis</h1>
      <OptionsForm onOptionsChange={setOptions} />
      <RiskRewardGraph options={options} />
    </div>
  );
};

export default App;
