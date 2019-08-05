import React, { useEffect, useState } from "react";

export default function TestComponent(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function dummyGet() {
      try {
        await fetch("/test/e2e/data.json");
      } catch (_) {
      } finally {
        setCount(2);
      }
    }
    dummyGet();
  }, []);

  return (
    <div id="func-container">
      {props.match.path + "\n"}
      {count}
    </div>
  );
}
