"use client"
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { User } from "../types/user";
import { defaultUser } from "../mockdb/users";

type UserContextType = {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
};

// export const UserContext = createContext<UserContextType | undefined>(undefined);
export const UserContext = createContext<UserContextType>({
    user: defaultUser, 
    setUser: () => {}, 
});

export function UserProvider({children}:{children: ReactNode}) {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("No user context");
    }
    return context
}