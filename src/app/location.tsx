import React from "react";

const Location = ({ setLocation }) => {
  const handleChange = (e) => {
    if (e.key === "Enter") {
      setLocation(e.target.value);
      e.target.value = "";
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city and press Enter"
        onKeyDown={handleChange}
        style={{ padding: "10px", margin: "20px", fontSize: "16px" }}
      />
    </div>
  );
};

export default Location;
