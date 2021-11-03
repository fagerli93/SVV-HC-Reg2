import React, { useState } from "react";
import { Container } from "react-bootstrap";
import useBevis, { Bevis } from "../hooks/useBevis";
import BevisOversikt from "./BevisOversikt";

const ChatRoom: React.FC = () => {
    const { alleBevis, sendMessage } = useBevis({
        collection: "bevis",
        orderBy: "navn",
    });

    const [newBevis, setNewBevis] = useState<Bevis>({} as Bevis);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        sendMessage(newBevis);
        setNewBevis({} as Bevis);
    };

    return (
        <>
            <Container className='chat-room-container'>
                <BevisOversikt bevisListe={alleBevis} />
            </Container>
            {/* <Form onSubmit={handleSubmit}></Form> */}
        </>
    );
};

export default ChatRoom;
