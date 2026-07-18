import { SpeakerForm } from "./components/SpeakerForm";

import { RefRegistrationForm } from "./components/RefRegistrationForm";
import { StandardRegistrationForm } from "./components/StandardRegistrationForm";
function App() {
    return (
        <div className="flex flex-col items-center">
            <StandardRegistrationForm />
            <RefRegistrationForm />
            <SpeakerForm />
        </div>
    );
}

export default App;
