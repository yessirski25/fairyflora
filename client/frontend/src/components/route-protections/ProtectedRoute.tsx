import { PropsWithChildren, useEffect } from "react";
import { useAuth } from "../auth-provider/AuthProvider"
import { useNavigate } from "react-router-dom";

type RouteProtectionProps = PropsWithChildren;

export default function RouteProtection({children}: RouteProtectionProps) {
    const employee = useAuth();
    const navigate = useNavigate();

    useEffect (() => {
        if (employee === undefined) {
            navigate('/login', { replace: true }); 
        }
    }, [navigate, employee]);
    
    return <>{children}</>;
}