import React from "react";
import { Link } from "react-router-dom";

import Dashboard from "./Dashboard.jsx";

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      Dashboard
      <Link to="/dashboard">Dashboard</Link>
    </div>
  }
}

export default Landing;