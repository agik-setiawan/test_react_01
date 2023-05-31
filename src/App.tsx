import { RecoilRoot } from "recoil";
import "./App.css";
import Penilaian from "./features/penilaian/Penilaian";

function App() {
  return (
    <RecoilRoot>
      <div>
        <Penilaian />
      </div>
    </RecoilRoot>
  );
}

export default App;
