import React from "react";

interface LocationProps {
  setLocation: (city: string) => void;
}

const Location: React.FC<LocationProps> = ({ setLocation }) => {
  const handleChange = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setLocation((e.target as HTMLInputElement).value);
      (e.target as HTMLInputElement).value = "";
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city and press Enter"
        onKeyDown={handleChange}
        style={{
          padding: "12px 18px",
          margin: "24px 0",
          fontSize: "16px",
          borderRadius: "8px",
          border: "1.5px solid #bcd4f0",
          outline: "none",
          width: "320px",
          background: "#fff" }}
      />
    </div>
  );
};

export default Location;
