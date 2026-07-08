import { useContext } from "react";
import { variable } from "./App";

function Exmpale1() {
    const { user } = useContext(variable);
    return (
        <>{
            user.map((Element, index) => (
                <p key={index}>{Element}</p>
            ))
        }
        </>
    )
}
export default Exmpale1;