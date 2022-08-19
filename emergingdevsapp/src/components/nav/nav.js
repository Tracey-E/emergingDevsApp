import { Link } from "react-router-dom"


export default function Nav() {

    return (
        <>
        <h1>I am Nav</h1>
        <Nav>
            <Link to='/week1'>Week 1</Link>
        </Nav>
        </>
    )
}