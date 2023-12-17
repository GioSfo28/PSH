import { useEffect } from "react";

function WindowsTop (){
    useEffect(() => {
        window.scrollTo(0, 100)
    }, [])
}

export default WindowsTop;