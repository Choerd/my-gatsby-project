import React from 'react'
import { Link } from 'gatsby'

const Navigation = () => {
    return (
        <nav>
            <ul className="flex">
                <li className="mx-3"><Link to="/" className="block px-4 py-2">Home</Link></li>
                <li className="mx-3"><Link to="/blog/" className="block px-4 py-2">Blog</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation