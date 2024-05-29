import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then(response => response.json())
      .then(data => {
        setBots(data);
        console.log(data);
      });
  }, []);

  function enlistBot(bot) {
    setBots(bots.map(b => (b.id === bot.id ? { ...bot, army: true } : b)));
  }

  function detachBot(bot) {
    setBots(bots.map(b => (b.id === bot.id ? { ...bot, army: false } : b)));
  }

  function deleteBot(bot) {
    setBots(bots.filter(b => b.id !== bot.id));
  }

  return (
    <div>
      <YourBotArmy />
      <BotCollection />
    </div>
  );
}

export default BotsPage;
