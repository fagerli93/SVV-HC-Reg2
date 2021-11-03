import {
    query,
    collection,
    getFirestore,
    orderBy,
    limit,
    onSnapshot,
    addDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

interface UseCollectionProps {
    collection: string;
    orderBy: string;
}

export interface Bevis {
    id: string;
    navn: string;
    bevisnummer: string;
    brukerkode: string;
    fodselsaar: string;
    gyldigFra: string;
    gyldigTil: string;
    kjonn: string;
    kommunenummer: string;
}

const useCollection = (props: UseCollectionProps) => {
    const [alleBevis, setAlleBevis] = useState<Bevis[]>([]);
    const recentMessagesQuery = query(
        collection(getFirestore(), props.collection),
        orderBy(props.orderBy, "asc"),
        limit(25)
    );

    useEffect(() => {
        const unsub = onSnapshot(recentMessagesQuery, snapshot => {
            const updatedItems = snapshot.docs.map(snapshot => {
                const data = snapshot.data();
                const res = {
                    id: snapshot.id,
                    navn: data.navn,
                    bevisnummer: data.bevisnummer,
                    fodselsaar: data.fodselsaar,
                    gyldigFra: data.gyldigFra,
                    gyldigTil: data.gyldigTil,
                    kjonn: data.kjonn,
                    kommunenummer: data.kommunenummer,
                } as Bevis;
                return res;
            });
            setAlleBevis(updatedItems);
        });

        return () => {
            unsub();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const sendMessage = async (nyttBevis: Bevis) => {
        await addDoc(collection(getFirestore(), "bevis"), {
            navn: nyttBevis.navn,
            bevisnummer: nyttBevis.bevisnummer,
            brukerkode: nyttBevis.brukerkode,
            fodselsaar: nyttBevis.fodselsaar,
            gyldigFra: nyttBevis.gyldigFra,
            gyldigTil: nyttBevis.gyldigTil,
            kjonn: nyttBevis.kjonn,
            kommunenummer: nyttBevis.kommunenummer,
        } as Bevis);
    };

    return { alleBevis, sendMessage };
};

export default useCollection;
