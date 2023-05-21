import React from "react";
import ReactDOM from "react-dom";
import Card from "/component/card";

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="First"
      image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
      number="+001"
      email="checking@gmail.com"
    />
    <Card
      name="Second"
      image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
      number="+002"
      email="checking@gmail.com"
    />
    <Card
      name="Third"
      image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
      number="+003"
      email="checking@gmail.com"
    />
  </div>,
  document.getElementById("root")
);
