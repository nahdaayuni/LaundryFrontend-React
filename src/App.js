import React from "react";
import Utama from "./component/utama";
import { Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      // <div>
      //   <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      //     <div class="container-fluid">
      //       <a class="navbar-brand" href="#">
      //         {/* <img
      //           src="data:image/png;base64,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"
      //           width="30"
      //           height="30"
      //           class="d-inline-block align-top rounded"
      //           alt="SMK Telkom Malang Logo"
      //         ></img> */}
      //         <b> TOKO KOMPUTER</b> |
      //       </a>
      //       <button
      //         class="navbar-toggler"
      //         type="button"
      //         data-toggle="collapse"
      //         data-target="#navbarNav"
      //         aria-controls="navbarNav"
      //         aria-expanded="false"
      //         aria-label="Toggle navigation"
      //       >
      //         <span class="navbar-toggler-icon"></span>
      //       </button>
      //       <div class="collapse navbar-collapse" id="navbarNav">
      //         <ul class="navbar-nav">
      //           <li class="nav-item active">
      //             <a class="nav-link active" href="/login">
      //               Login
      //             </a>
      //           </li>
      //           <li class="nav-item active">
      //             <a class="nav-link active" href="/">
      //               Home
      //             </a>
      //           </li>
      //           <li class="nav-item">
      //             <a class="nav-link active" href="/product">
      //               Product
      //             </a>
      //           </li>
      //           <li class="nav-item">
      //             <a class="nav-link active" href="/customer">
      //               Customers
      //             </a>
      //           </li>
      //           <li class="nav-item">
      //             <a class="nav-link active" href="/transaction">
      //               Transactions
      //             </a>
      //           </li>
      //           <li class="nav-item">
      //             <a class="nav-link active" href="/admin">
      //               Administrator
      //             </a>
      //           </li>
      //         </ul>
      //       </div>
      //       <div>
      //         <li class="nav-item">
      //           <a class="btn btn-outline-light btn-sm" onClick={() => this.Logout()}>
      //             Logout
      //           </a>
      //         </li>
      //       </div>
      //     </div>
      //   </nav>
      //   {/* <Link to="/"> Beranda</Link> |
      //   <Link to="/tentangsaya"> Tentang Saya</Link> |
      //   <Link to="/karya"> Karya</Link> |<Link to="/kontak"> Kontak</Link> |
      //   <Link to="/gallery"> Gallery</Link> <hr /> */}
        
          <Utama />
    );
  }
}

export default App;
