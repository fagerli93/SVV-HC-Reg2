import React from "react";
import { Bevis } from "../hooks/useBevis";

interface Props {
    bevis: Bevis;
}

const BevisDetaljer: React.FC<Props> = ({ bevis }) => (
    <li className='bevis'>
        <div className='bevisdetaljer bevis-navn'>{bevis.navn}</div>
        <div className='bevisdetaljer bevis-nummer'>
            {bevis.kommunenummer} {bevis.bevisnummer} {bevis.fodselsaar}{" "}
            {bevis.kjonn} {bevis.brukerkode}
        </div>
        <div className='bevisdetaljer bevis-gyldig'>
            Gyldighetsperiode: {bevis.gyldigFra} - {bevis.gyldigTil}
        </div>
    </li>
);

export default BevisDetaljer;
