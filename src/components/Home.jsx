// export default function Home({age}){

    // if(age > 18){
    //     return <div>Welcome </div>
    // }else {
    //     return <div>Sorry, you are not allowed</div>
    // }

    /*
    const handleClick = () => {
        alert("Button clicked!");
    };
    const handleSubmit = (name) => {
        alert(`Form submitted with name: ${name}`);
    };

  return (
    <>
    <h1>Welcome to the Home Page</h1>
    <button onClick={handleClick}>Click</button>
    <button onClick={() => handleSubmit("John")}>Submit</button>
    </>
  )
    */

  import { useState } from "react";
  export default function Home(){
    const [score, setScore] = useState(0);
    const [wicket, setWicket] = useState(0);
    const [message, setMessage] = useState("");

    const incrementScore = () => {
        if(wicket >= 10){
            setScore(score + 1);
            setMessage("Well played! Keep going!");

        }

    };

    const incrementWicket = () => {
        if (wicket < 10) {
            setWicket(wicket + 1);
            setMessage("Out! You have lost a wicket. Keep trying!");       
        }else {
            setMessage("Game Over! You have lost the match.");
        }
    }

    return(
        <>
        <p>Score: {score}</p>
        <button onClick={incrementScore}>Run</button>
        <p>Wicket: {wicket}</p>
        <button onClick={incrementWicket}>Wicket</button>
        <p>{message}</p>
        </>
    )
  }