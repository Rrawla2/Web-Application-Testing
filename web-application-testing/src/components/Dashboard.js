import React, { useState } from "react";


const Dashboard = () => {

    const [strikes, setStrikes] = useState(0);
    const [balls, setBalls] = useState(0);


  // balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.
  // balls and strikes reset to 0 when a `hit` is recorded.
  // a `foul` increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.
  // a hit should make all reset to 0


    const Strikes = () => {
    if (strikes < 2) {
        return setStrikes(...strikes + 1)
    }else {
        return setStrikes(0), setBalls(0)
    }
    }

    const Balls = () => {
        if(balls < 3) {
            return setBalls(...balls + 1)
        }else {
            return setBalls(0), setStrikes(0)
        }
    }

    const Fouls = () => {
        if (strikes <= 1){
            return setStrikes(...strikes + 1)
        }else {
            return setStrikes(2)
        }
    }

    const Hit = () => {
        return setStrikes(0), setBalls(0)
    }


    return (
        <div>
            <h5>Strikes {strikes}</h5>
            <p></p>
            <h5>Balls   {balls}</h5>
       
            <button onClick={Strikes}>Strike</button>
            <button onClick={Balls}>Ball</button>
            <button onClick={Fouls}>Foul</button>
            <button onClick={Hit}>Hit</button>
        </div>
    )
}

export default Dashboard;