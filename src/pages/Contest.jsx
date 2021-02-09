import React, { useState } from "react";
import { db } from "../firebase";

import W9486 from "../images/LATF/WEB-9486-313kb.jpg";
import W9590 from "../images/LATF/WEB-9590-250kb.jpg";
import W9598 from "../images/LATF/WEB-9598-250kb.jpg";

const ContestData = [
  { image: W9486, css: { width: "30%" } },
  { image: W9590, css: { width: "30%" } },
  { image: W9598, css: { width: "30%" } },
];

const Contest = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Contact Us 🤳</h1>

        <label>Name</label>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
        >
          Submit
        </button>
      </form>
      <div>
        {ContestData.map((data, i) => (
          <div>
            <img key={i} style={data.css} src={data.image} alt={i} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Contest;
