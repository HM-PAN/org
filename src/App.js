import { useEffect } from "react";
import "./styles.css";

export default function App() {
  let org = {
    name: "org 1 ",
    id: "org1",
    nodes: {
      name: "parent top",
      id: 1,
      child: [
        {
          name: "parent fr1",
          id: "2",
          child: {
            name: "parent fr1-c1",
            id: "4"
          }
        },
        {
          name: "parent fr2",
          id: "3",
          child: {
            name: "parent fr2-c2",
            id: "5"
          }
        }
      ]
    }
  };

  const save = () => {
    let goal_nodes = [];
    const all_nodes = [
      { name: "0", id: 0, parent: null },
      { name: "3", id: 3, parent: 2 },
      { name: "2", id: 2, parent: 0 },
      { name: "4", id: 4, parent: 0 }
    ];
    goal_nodes = all_nodes.filter((x) => x.parent === null); // insret top level
    // chof el console save
    do {
      all_nodes.forEach((element) => {
        const isParentThere =
          goal_nodes.filter((x) => x.id === element.parent).length > 0;
        const alreadyThere =
          goal_nodes.filter((x) => x.id === element.id).length > 0;
        console.log(isParentThere);
        if (isParentThere && !alreadyThere) {
          goal_nodes.push(element);
        }
      });
    } while (goal_nodes.length < all_nodes.length);
    console.log(goal_nodes);
    goal_nodes.forEach((element) => {
      //api(element)
    });
  };
  save();
  return (
    <div className="App">
      <h1>amir ya m3afet</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
