import React, { useState, useEffect } from "react";
// import { gallery } from "../../Data";

import data from "../Galleries/Gallery";

import { Link, useParams } from "react-router-dom";

const Person = () => {
  const [name, setName] = useState("default name");
  const { id } = useParams();
  console.log("params", useParams());
  console.log(data.id);

  useEffect(() => {
    // const newPerson = data.find((person) => person.id === parseInt(id));
    // setName(newPerson.name);
    // console.log(data);
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      <Link to="/people" className="btn">
        Back To People
      </Link>
    </div>
  );
};

export default Person;
