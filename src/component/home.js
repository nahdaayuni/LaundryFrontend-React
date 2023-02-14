import React from "react";
import axios from "axios";
import Navbar from "../pages/Navbar";
import NavbarKasir from "../pages/NavbarKasir";
import NavbarOwner from "../pages/NavbarOwner";
// import { Navbar } from "react-bootstrap";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      token: "",
      userName: "",
      paketCount: 0,
      memberCount: 0,
      outletCount: 0,
      tranCount: 0,
    };
    // cek di local storage apakah ada token (sudah login)
    if (localStorage.getItem("token")) {
      this.state.token = localStorage.getItem("token");
      this.state.role = localStorage.getItem("role");
    }
    // jika belum login
    else {
      window.location = "/login";
    }
  }

  headerConfig = () => {
    let header = {
      headers: { Authorization: `Bearer ${this.state.token}` },
    };
    return header;
  };

  // mendapatkan nama user
  getUser = () => {
    let user = localStorage.getItem("nama");
    let url = "http://localhost:8080/user";

    axios
      .get(url)
      .then((res) => {
        this.setState({
          userName: user,
          // adminCount: res.data.count,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  getMember = () => {
    let url = "http://localhost:8080/member";

    axios
      .get(url)
      .then((res) => {
        this.setState({
          memberCount: res.data.count,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  getPaket = () => {
    let url = "http://localhost:8080/paket";

    axios
      .get(url, this.headerConfig())
      .then((res) => {
        this.setState({
          paketCount: res.data.count,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  getOutlet = () => {
    let url = "http://localhost:8080/outlet";

    axios
      .get(url, this.headerConfig())
      .then((res) => {
        this.setState({
          outletCount: res.data.count,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  getTran = () => {
    let url = "http://localhost:8080/transaksi";

    axios
      .get(url, this.headerConfig())
      .then((res) => {
        this.setState({
          tranCount: res.data.count,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  componentDidMount = () => {
    this.getUser();
    this.getPaket();
    this.getMember();
    this.getOutlet();
    this.getTran();
  };

  render() {
    return (
      <> {this.state.role == "admin" &&
                            <Navbar />
                        }
                {this.state.role == "kasir" &&
                            <NavbarKasir />
                        }
                {this.state.role == "owner" &&
                    <NavbarOwner />
                }
      <div>
        <div className="container">
          <div className="mb-4 mt-4">
            <h6>Dashboard User</h6>
          </div>
          <div className="alert bg-dark text-white text-center mb-4">
            <h2 className="text-bold">
              <i> Hello! Welcome Back {this.state.userName.toUpperCase()}</i>
            </h2>
          </div>
          <hr />
          <div className="d-flex justify-content-around p-1">
            <div className="card col-6 bg-dark m-1">
              <div className="card-body row">
                {/* <div className="col-3 p-4">
                                    <Person sx={{ fontSize: 90 }} className="text-white" />
                                </div> */}
                <div className="col-9 p-4">
                  <h2 className="text-light">
                    <i>Total Paket</i>
                  </h2>
                  <h2 className="text-white">
                    <i>{this.state.paketCount}</i>
                  </h2>
                </div>
              </div>
            </div>
            <div className="card col-6 bg-dark m-1">
              <div className="card-body row">
                {/* <div className="col-3 p-4">
                                    <People sx={{ fontSize: 90 }} className="text-white" />
                                </div> */}
                <div className="col-9 p-4">
                  <h2 className="text-light">
                    <i>Total Member</i>
                  </h2>
                  <h2 className="text-white">
                    <i>{this.state.memberCount}</i>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-around p-1">
            <div className="card col-6 bg-dark m-1">
              <div className="card-body row">
                {/* <div className="col-3 p-4">
                                    <Cart sx={{ fontSize: 90 }} className="text-white" />
                                </div> */}
                <div className="col-9 p-4">
                  <h2 className="text-light">
                    <i>Total Outlet</i>
                  </h2>
                  <h2 className="text-white">
                    <i>{this.state.outletCount}</i>
                  </h2>
                </div>
              </div>
            </div>
            <div className="card col-6 bg-dark m-1">
              <div className="card-body row">
                {/* <div className="col-3 p-4">
                                    <Money sx={{ fontSize: 90 }} className="text-white" />
                                </div> */}
                <div className="col-9 p-4">
                  <h2 className="text-light">
                    <i>Total Transaksi</i>
                  </h2>
                  <h2 className="text-white">
                    <i>{this.state.tranCount}</i>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
