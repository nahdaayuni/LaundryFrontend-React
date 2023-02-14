import React from "react";
class ChoosePaketList extends React.Component {
  render() {
    return (
      <div className="col-lg-6 col-sm-12 p-1">
        <div className="card">
          <div className="card-body row">
            {/* menampilkan Gambar / cover */}
            {/* <div className="col-5">
              <img src={this.props.image} className="img" height="200" />
            </div> */}
            {/* menampilkan deskripsi */}
            <div className="col-7">
              <h5 className="text-dark">
                <b> {this.props.nama_paket} </b>
              </h5>
              <h6 className="text-dark">Jenis: {this.props.jenis}</h6>
              <h6 className="text-danger">Harga: Rp{this.props.harga}</h6>
              {/* button untuk mengedit */}

              {/* button untuk menghapus */}

              {/* button untuk menambah ke keranjang belanja */}
              <button
                className="btn btn-sm btn-success m-1"
                onClick={this.props.onCart}
              >
                Add to Card
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ChoosePaketList;
