import { ReactivityDemo } from "./components/ReactivityDemo";
import { RefRegistrationForm } from "./components/RefRegistrationForm";
import { SpeakerForm } from "./components/SpeakerForm";
import { StandardRegistrationForm } from "./components/StandardRegistrationForm";
function App() {
    return (
        <div className="flex flex-col items-center">
            <StandardRegistrationForm />
            <RefRegistrationForm />
            <SpeakerForm />
            <ReactivityDemo />
        </div>
    );
}

export default App;
