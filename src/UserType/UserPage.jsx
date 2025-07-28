import { Link, Outlet } from "react-router-dom"

export const UserPage = () => {
    return (
    <div>
    <h1>Welcome to the User Dashboard</h1>
    <Outlet/>
    </div>
    )
}