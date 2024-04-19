import React, { createContext } from "react";
import DadosMotorista from "../dados/DadosMotorista";

const MotoristaContext = createContext({ DadosMotorista });

export const MotoristaProvider = props => {
    return (
        <MotoristaContext.Provider value={{ DadosMotorista }}>
            {props.children}
        </MotoristaContext.Provider>
    );
};

export default MotoristaContext;
