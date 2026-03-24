"use client";

const Test = () => {
  const id = new URLSearchParams(window.location.search).get("id");
  console.log(id);

  return <div>{id}</div>;
};

export default Test;
