import "./styles.css";

export default function App() {
  const d = "abcd xyz abc"
  const res = d.split(" ")
  const users = [
    { id: 1, name: "akanksha" },
    { id: 2, name: "akku" },
    { id: 3, name: "tinka" },
    { id: 4, name: "twinkle" }
  ];
  const output = users.filter(user=>user.id===1 || user.id===4)
  console.log(output);
  console.log(res)
    return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
