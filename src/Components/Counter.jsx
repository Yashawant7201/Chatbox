import React, { useEffect, useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);
    const [input, setInput] = useState();
    
    // First variation
    useEffect(() => {
      //called when components mounted first time and whenever states changes
      console.log("I am 1st useEffetc");
    });


    //Second variation with empty dependency array. This happens only first time when component mounted and will not show again.
    useEffect(()=> {
      //called when component is rendered(mounted) for the first time.
      console.log("I am 2nd useEffect");
      
    }, []);

    //Third variation with empty dependency array
    useEffect(()=> {
      //called when a particular state(count) changes. When really required
      console.log("I am 3rd useEffect");
      
    }, [count])

    //Forth Variation + cleanup
    useEffect(() => {
      console.log("I am useEffect 4");
      //just before next useEffect is called, cleanup function is called first.
      return () => {
        console.log("cleanup before useEffect 4 is called");
        
      }
    }, [input])

  return (
    <>
    <button onClick={() =>setCount(count + 1)}>+</button>
    <p>{count}</p>
    <button onClick={() => setCount(count - 1)}>-</button>
    <input type="text" id="input" onChange={(e) => setInput(e.target.value)}/>
    </>
)
};