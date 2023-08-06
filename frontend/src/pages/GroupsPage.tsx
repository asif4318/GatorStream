import { Button } from "../components/Button";
import NavBar from "../components/NavBar";

export default function GroupsPage() {
    return (
        <div>
            <NavBar pageTitle="Groups" />
            <Button text="Add Group" className="ml-3 mt-3" />
            <input
                type="search"
                id="default-search"
                className="block w-11/12 mx-auto my-4 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Groups" />
            <section className="flex flex-col items-center">
                <div className="w-11/12 bg-slate-200 p-4 rounded-lg">
                    <h4>Group Name</h4>
                    <p>Class: ClassName</p>
                </div>
            </section>
        </div>
    )
}