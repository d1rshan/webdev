import { createContext, useContext, useState } from "react";
import "./index.css";
const ComponentC = () => {
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h1>Component C</h1>
      <p>Byeee {user}</p>
    </div>
  );
};

const ComponentB = () => {
  console.log("hellowwwww");
  return (
    <div className="box">
      <h1>Component B</h1>

      <ComponentC />
    </div>
  );
};

const ComponentA = () => {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>Component A</h1>
      <p>Hello {user}</p>
      <ComponentB />
    </div>
  );
};

export const UserContext = createContext();
const UseContextExample = () => {
  const [user, setUser] = useState("darsh");

  return (
    <>
      <UserContext.Provider value={user}>
        <ComponentA />
      </UserContext.Provider>
      <button style={styles.button} onClick={() => setUser("button clicked!")}>
        UPDATE
      </button>
    </>
  );
};

const styles = {
  button: {
    padding: 20,
    color: "white",
    fontWeight: "bold",
    borderRadius: 15,
    cursor: "pointer",
    backgroundColor: "red",
  },
};

export default UseContextExample;
