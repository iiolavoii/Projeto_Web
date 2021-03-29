import React from "react";
import CardViewContent from "../Emails/CardviewContent"
export default function EmailView({ data }) {
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {data.map((task) => (
        <CardViewContent data={task} />
      ))}
    </ul>
  );
}
