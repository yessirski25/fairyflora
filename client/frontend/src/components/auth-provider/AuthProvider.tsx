import { createContext, PropsWithChildren, useContext, useState } from "react";

interface Employee {
    id: number;
}
type AuthContextType = {
    employee: Employee | null;
    setEmployee: (employee: Employee | null) => void;
};

const AuthContext = createContext <AuthContextType | undefined>(undefined);

type AuthProviderProps = PropsWithChildren & {
    isLoggedIn? : boolean;
};

export default function AuthProvider({
    children,
    isLoggedIn,
}: AuthProviderProps) {
    const [employee, setEmployee] = useState<Employee | null>(null);
    
    return (
        <AuthContext.Provider value={{employee, setEmployee}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}