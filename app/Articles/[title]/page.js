import React from "react";

const ShowSelectedArticle = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Show Selected Article</h1>
      <h1>{props.params.title}</h1>
    </div>
  );
};

export default ShowSelectedArticle;
