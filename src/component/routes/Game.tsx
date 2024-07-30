import Board from "../feature/Board";
import Options from "../feature/Options";

const Game = () => {
  return (
    <div className="flex flex-col gap-2 min-h-[calc(100vh-94px)] mt-20 w-full justify-start md:items-start items-center">
      <Board />
      <Options />
    </div>
  );
};

export default Game;
