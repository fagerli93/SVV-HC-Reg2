import React from "react";
import BevisDetaljer from "./BevisDetaljer";
import { Bevis } from "../hooks/useBevis";

interface Props {
    bevisListe: Bevis[];
}

const BevisOversikt: React.FC<Props> = ({ bevisListe }) => (
    <div className='blokk'>
        <h2 className='blokk-heading'>Bevisoversikt</h2>
        <ul className='bevisliste blokk-innhold'>
            {bevisListe.map((bevis, index) => (
                <BevisDetaljer key={index} bevis={bevis} />
            ))}
        </ul>
    </div>
);

export default BevisOversikt;
