import React from "react";

function BotCollection() {
  const BotCollect =  bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        clickEvent={enlistBot}
        deleteBot={deleteBot}
      />
    );
  })

  return (
    <div className="ui four column grid">
      <div className="row">
        {BotCollect}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
