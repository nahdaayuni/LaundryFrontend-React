import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location = "/login";
  };
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand p-2" href="#">
              <img
                src="https://www.pngkit.com/png/full/335-3352905_laundry-icon-png-white.png"
                width="30"
                height="30"
                class="d-inline-block align-top rounded"
                alt="SMK Telkom Malang Logo"
              ></img>
              <b class="p-1"> MyLaundry</b> |
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                {/* <li class="nav-item active">
                  <a class="nav-link active" href="/login">
                    Login
                  </a>
                </li> */}
                <li class="nav-item active">
                  <a class="nav-link active" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/paket">
                    Paket
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/member">
                    Member
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/outlet">
                    Outlet
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/user">
                    User
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/ChooseMember">
                    ChooseMember
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/cart">
                    Cart
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/transaksi">
                    Transaksi
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <li class="nav-item p-2">
                <a
                  class="btn btn-outline-light btn-sm"
                  onClick={() => this.Logout()}
                >
                  Logout
                </a>
              </li>
            </div>
          </div>
        </nav>
      </div>
    );
            }
        }
    
            
export default Navbar;
