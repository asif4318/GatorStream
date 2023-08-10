import { Link } from "react-router-dom";
import { Button, Stack } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { useState } from "react";


export default function GroupsPage() {
    const [groups, setGroups] = useState([{ name: "Group 1", class: "CEN4721" }]);
    const [index, setIndex] = useState(2);

    return (
        <div >
            <NavBar pageTitle="Groups" />
            <Button colorScheme="green" className="ml-3 mt-3" onClick={() => {
                setIndex(() => index + 1)
                var joined = groups.concat({ name: `Group ${index}`, class: `Class ${index}` });
                setGroups(joined)
            }}>Add Group</Button>
            <input
                type="search"
                id="default-search"
                className="block w-11/12 mx-auto my-4 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Groups" />
            <Stack className="p-4">
                <Link to="/group/2" className="">
                    {groups.map((element) => {
                        return (
                            <div className="bg-slate-200 p-4 rounded-lg mb-4">
                                <h4>{element.name}</h4>
                                <p>{element.class}</p>
                            </div>
                        )
                    })}
                </Link>
            </Stack>
        </div>
    )
}