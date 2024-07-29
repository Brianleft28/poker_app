import "./App.css";
import Board from "./component/Board.tsx";
import Hand from "./component/Hand.tsx";

function App() {
  return (
    <>
      <main className="dark text-foreground bg-gradient-to-br from-foreground-100 to-background via-secondary-50 text-3xl min-h-screen flex justify-center items-center ">
        <div className="flex gap-1 flex-col justify-center items-center">
          <Board />
          <Hand />
        </div>
      </main>
    </>
  );
}

export default App;
