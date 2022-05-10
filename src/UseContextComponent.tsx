import UserContext, { UserState } from './store';
import { useState } from 'react';

function UseContextComponent() {
    const [user, userSet] = useState<UserState>({
        first: "Jane",
        last: "Smith"
    });
    return (
        <UserContext.Provider value={user}>

        </UserContext.Provider>
    )

}

export default UseContextComponent;