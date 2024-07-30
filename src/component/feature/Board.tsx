import { useEffect, useState } from "react";
import { getDeck } from "../../services/deck.services";
import { Deck } from "../../types/deck.types";

const Board = () => {
  const [deck, setDeck] = useState<Deck>();
  const [isDeckLoading, setIsDeckLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchDeck = async () => {
      try {
        console.log("deck is loading...");
        setIsDeckLoading(true);
        const deck = await getDeck();
        setDeck(deck);
        console.log("deck", deck);
        console.log("deck fetched!");
      } catch (error) {
        console.error(error);
      } finally {
        setIsDeckLoading(false);
      }
    };
    fetchDeck();
  }, []);

  return (
    <div className="md:w-[950px] w-[300px] mx-auto md:min-h-[500px] h-[450px] flex flex-col space-y-5 bg-gradient-to-l from-default-50 to-foreground-50 rounded-2xl md:p-3 p-2">
      <div className="flex-grow bg-success-100 h-full rounded-lg p-3 border-success-50 md:border-3 border-2"></div>
    </div>
  );
};

export default Board;
