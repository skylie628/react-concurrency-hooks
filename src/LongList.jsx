import { useEffect, useState, useTransition } from "react";
const nodes = [];
for (let i = 1; i <= 5000; i++) {
  nodes.push(<div>{Math.random() * i}</div>);
}

export default function LongList() {
  const [text, setText] = useState("");
  const [random, setRandom] = useState([]);
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    console.log(nodes);

    ///setRandom(nodes);
    startTransition(() => {
      setRandom(nodes);
    });
  }, [text]);
  // displaying of text in input is delayed when type rapidly because component has to rerender heavy random list
  // to prevent heavy list intefere with other task => use useTransition to change priority of heavy list to lower
  return (
    <div>
      LongList
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <div>{isPending && "loading"}</div>
      {random}
    </div>
  );
}
