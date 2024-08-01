import Board from "../feature/Board";
import Options from "../feature/Options";
import { Deck } from "../../types/deck.types";
import { useEffect, useState } from "react";
import { getDeck } from "../../services/deck.services";

const Game = () => {
  //
  // Estados
  //
  const [deck, setDeck] = useState<Deck | null>(null);
  const [isDeckLoading, setIsDeckLoading] = useState<boolean>(false);

  useEffect(() => {
    const setIsLoad = () => {
      try {
        console.log("deck is loading...");
        setIsDeckLoading(true);
        setDeck(null);
      } catch (error) {
        console.error(error);
      }
    };
    setIsLoad();
  }, []);
  useEffect(() => {
    const fetchDeck = async () => {
      const deckI = await getDeck();
      setDeck(deckI);
    };
    if (deck === null && isDeckLoading) fetchDeck();
  }, [isDeckLoading]);

  return (
    <div className="flex flex-col gap-2 min-h-[calc(100vh-94px)] mt-20 w-full justify-start md:items-start items-center">
      <Board deck={deck} />
      <Options />
    </div>
  );
};

export default Game;
