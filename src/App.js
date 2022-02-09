import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => {
        const newValue = prev + 10;

        if (newValue === 100) {
          clearInterval(interval);
        }
        return newValue;
      });
    }, 1000);
  }, []);

  return <ProgressBar value={value} color="red" />;
}
