import React, { useState, useEffect } from "react";
import { OptionContract } from "../types/OptionContract";

interface OptionsFormProps {
  onOptionsChange: (options: OptionContract[]) => void;
}

const sampleData: OptionContract[] = [
  {
    strike_price: 100,
    type: "Call",
    bid: 10.05,
    ask: 12.04,
    long_short: "long",
    expiration_date: "2025-12-17T00:00:00Z",
  },
  {
    strike_price: 102.5,
    type: "Call",
    bid: 12.1,
    ask: 14,
    long_short: "long",
    expiration_date: "2025-12-17T00:00:00Z",
  },
  {
    strike_price: 103,
    type: "Put",
    bid: 14,
    ask: 15.5,
    long_short: "short",
    expiration_date: "2025-12-17T00:00:00Z",
  },
  {
    strike_price: 105,
    type: "Put",
    bid: 16,
    ask: 18,
    long_short: "long",
    expiration_date: "2025-12-17T00:00:00Z",
  },
];

const OptionsForm: React.FC<OptionsFormProps> = ({ onOptionsChange }) => {
  const [options, setOptions] = useState<OptionContract[]>(sampleData);

  useEffect(() => {
    onOptionsChange(options);
  }, [options, onOptionsChange]);

  const handleChange = (
    index: number,
    field: keyof OptionContract,
    value: any
  ) => {
    const newOptions = [...options];
    newOptions[index] = { ...newOptions[index], [field]: value };
    setOptions(newOptions);
  };

  return (
    <div>
      {options.map((option, index) => (
        <div key={index} className="option-row">
          <select
            value={option.type}
            onChange={(e) => handleChange(index, "type", e.target.value)}
          >
            <option value="Call">Call</option>
            <option value="Put">Put</option>
          </select>
          <input
            type="number"
            value={option.strike_price}
            onChange={(e) =>
              handleChange(index, "strike_price", parseFloat(e.target.value))
            }
            placeholder="Strike Price"
          />
          <input
            type="number"
            value={option.bid}
            onChange={(e) =>
              handleChange(index, "bid", parseFloat(e.target.value))
            }
            placeholder="Bid"
          />
          <input
            type="number"
            value={option.ask}
            onChange={(e) =>
              handleChange(index, "ask", parseFloat(e.target.value))
            }
            placeholder="Ask"
          />
          <select
            value={option.long_short}
            onChange={(e) => handleChange(index, "long_short", e.target.value)}
          >
            <option value="long">Long</option>
            <option value="short">Short</option>
          </select>
          <input
            type="date"
            value={option.expiration_date.split("T")[0]}
            onChange={(e) =>
              handleChange(index, "expiration_date", e.target.value)
            }
            placeholder="Expiration Date"
          />
        </div>
      ))}
    </div>
  );
};

export default OptionsForm;
