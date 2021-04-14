import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/Pass">Pass</Link>
        </li>
        <li>
          <Link to="/Giftrip">Giftrip</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header;