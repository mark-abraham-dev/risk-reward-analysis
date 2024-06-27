import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { OptionContract } from "../types/OptionContract";
import { calculateProfitLoss } from "../utils/calculateProfitLoss";

interface RiskRewardGraphProps {
  options: OptionContract[];
}

const RiskRewardGraph: React.FC<RiskRewardGraphProps> = ({ options }) => {
  const data = [];

  for (let price = 0; price <= 200; price += 1) {
    data.push({
      price,
      profitLoss: calculateProfitLoss(options, price),
    });
  }

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="price" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="profitLoss" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RiskRewardGraph;
