import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <>
        <div className="flex flex-col md:flex-row justify-center md:space-x-10 space-y-10 md:space-y-0">
            <Link to={"/"}>
                <p className="text-2xl font-bold text-white">Home</p>
            </Link>
            <Link to={"/Work"}>
                <p className="text-2xl font-bold text-white">Work</p>
            </Link>
        </div>
        </>
    )
}