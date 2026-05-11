import { Card } from "../../../components/Card";
import { UserProfile } from "../../profile/components/UserProfile";
export function Playground() {
    return (
        <div className="p-8 flex gap-8">
            <UserProfile
                name="Tapas Adhikary"
                avatarUrl="https://github.com/atapas.png"
                role="Senior Architect"
                isAdmin={true}
            />

            <UserProfile
                name="AI Assistant"
                avatarUrl="https://ui-avatars.com/api/?name=AI&background=random"
                role="Junior Developer"
            />

            <Card title="System Status">
                <p className="text-gray-600">All systems operational.</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                    Run Diagnostics
                </button>
            </Card>
        </div>
    );
}


// Common Mistakes
{/*
1.Returning Multiple Elements

return (
    <>
        <h1>Hello</h1>
        <p>World</p>
    </>
)

2.Capitalization Matters!

3. The 0 &&

const messageCount = 0;
return (
  <div>
    {messageCount > 0 ? <p>You have new messages!</p> : null}
  </div>
)
*/}