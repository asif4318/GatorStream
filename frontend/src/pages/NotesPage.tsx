import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Card, CardBody } from "@chakra-ui/react";


function getSummaries(callback: (summaries: any) => void) {
    fetch(import.meta.env.VITE_WHISPER_TRANSCRIPTION_SERVER + "summaries")
        .then(response => {
            if (response.status === 200) {
                response.json().then(value => {
                    callback(value["summaries"]);
                });
            }
        })
        .catch(error => {
            console.error("Error fetching summaries:", error);
        });
}

export default function NotesPage() {
    const [list, setList] = useState<any[]>();
    var join: any[] = [];

    useEffect(() => {
        getSummaries(summaries => {
            for (let i = 0; i < summaries.length; i++) {
                join.push(summaries[i].summary);
            }
            setList(() => join);
            console.log(list);
        });
    }, []);

    useEffect(() => { }, [list])

    return (
        <div>
            <NavBar pageTitle="Notes Page" />
            <ul>
                {list?.map((summary) => (
                    <Card className="p-3 my-4 mx-2">
                        <CardBody>
                            <p>
                                {summary}
                            </p>
                        </CardBody>
                    </Card>
                ))}
            </ul>
        </div>
    );
}
