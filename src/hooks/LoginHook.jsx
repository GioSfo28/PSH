import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';


function LoginHook() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/Login");
    }, [])
}

export default LoginHook;