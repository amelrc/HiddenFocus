import React, { useState } from "react";
// import { gallery } from "../../Data";
import { Link } from "react-router-dom";

export const data = [
  { id: 1, name: "john" },
  { id: 2, name: "peter" },
  { id: 3, name: "susan" },
  { id: 4, name: "anna" },
];

const People = () => {
  const [people, setPeople] = useState(data);
  return (
    <div>
      <h1>People Page</h1>
      {people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <Link to={`/person/${person.id}`}>Learn More</Link>
          </div>
        );
      })}
    </div>
  );
};

export default People;
