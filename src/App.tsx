import { AppBar } from "./components/AppBar"
import { PrimaryButton } from "./components/Buttons/PrimaryButton/PrimaryButton"

function App() {

  return (
    <div>
      <AppBar />
      <PrimaryButton buttonText='This is a button V2'></PrimaryButton>
    </div>
  )
}

export default App
