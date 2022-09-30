import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actioncreator } from "./Action-creator";

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney, resetAccount } = bindActionCreators(
    actioncreator,
    dispatch
  );
  return (
    <div className="App">
      <h3>{account}</h3>
      <button onClick={() => depositMoney(100)}>Deposit</button>
      <button onClick={() => withdrawMoney(100)}>Withdraw</button>
      <button onClick={() => resetAccount()}>Reset</button>
    </div>
  );
}

export default App;
