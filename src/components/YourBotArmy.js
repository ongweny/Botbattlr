import React from "react";
import BotCard from "./BotCard"

function YourBotArmy() {
  const BotArmy = bots.map((bot)=>{
    return(
      <BotCard key={bot.id}
         bot={bot}
         clickEvent={detachBot}
         deleteBot={deleteBot} 
      />
    )
  })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {BotArmy}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
