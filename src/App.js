import Alert from "./components/Alert/Alert";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Counter from "./components/Counter/Counter";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

function App() {
  return (
    <div className="App">
      <ColorPicker options={colorPickerOptions} />
      <Alert text="WTF???" />
      <Alert text="success" type="success" />
      <Alert text="warning" type="warning" />
      <Alert text="error" type="error" />
      <Counter />
    </div>
  );
}

export default App;
