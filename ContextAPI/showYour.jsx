import { useContext } from "react";
import { variable } from "./App";
import Exmpale1 from "./Example1";

function Showyour() {
    const { user } = useContext(variable);

    return (
        <>
            {user.map((element, index) => (
                <h1 key={index}>{element}</h1>
            ))}
            <Exmpale1 />
        </>
    );
}

export default Showyour;