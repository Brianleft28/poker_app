import React, { useEffect } from "react";
import { Deck, Hand } from "../../types/deck.types";
import { getHand } from "../../services/deck.services";

interface BoardProps {
  deck: Deck | null;
}
const Board: React.FC<BoardProps> = ({ deck }) => {
  const [hand, setHand] = React.useState<Hand>();
  useEffect(() => {
    const fetchHand = async () => {
      if (deck) {
        const hand = await getHand(deck.deck_id, 2);
        setHand(hand);
      }
    };
    fetchHand();
  }, [deck]);
  console.log(hand);
  return (
    <div className="md:w-[950px] w-[300px] mx-auto md:min-h-[500px] h-[450px] flex flex-col space-y-5 bg-gradient-to-l from-default-50 to-foreground-50 rounded-2xl md:p-3 p-2">
      <div className="flex-grow bg-success-100 h-full rounded-lg p-3 border-success-50 md:border-3 border-2">
        {/* Cartas | mano - player */}
        <div className="flex items-center  justify-center md:justify-end h-full md:items-end">
          <div className="flex flex-col md:mr-3 justify-end h-full items-center">
            <div className="flex space-x-3">
              {hand?.cards.map((card) => (
                <div key={card.code}>
                  <img
                    src={card.image}
                    alt={card.code}
                    className="hover:cursor-pointer hover:scale-105 max-w-[100px] md:max-w-[115px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
