import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TableBarangMasuk = () => {
  const [add, setAdd] = useState([]);
  const [filterData, setFilterData] = useState(10);
  const [number, setNumber] = useState(1);

  const handleChange = (event) => {
    setFilterData(event.target.value);
  };

  const barangMasuk = async () => {
    await axios
      .get("http://localhost:4000/api/barang-masuk")
      .then((response) => {
        setAdd(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:4000/api/barang-masuk/delete/${id}`)
      .then((response) => {
        console.log(response);
      });
    barangMasuk();
  };

  useEffect(() => {
    barangMasuk();
  });

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Data Users
      </h4>

      <select
        className=" mb-2 rounded-md border  px-4 py-2  shadow-sm  focus:outline-none"
        value={filterData}
        onChange={handleChange}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={40}>40</option>
        <option value={50}>50</option>
      </select>

      <div class="relative mb-8 overflow-x-auto shadow-md sm:rounded-lg">
        <table class="text-gray-500 dark:text-gray-400 w-full text-left text-sm">
          <thead class="text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-xs uppercase">
            <tr>
              <th scope="col" class="px-6 py-3">
                No
              </th>
              <th scope="col" class="px-6 py-3">
                Id Transaksi
              </th>
              <th scope="col" class="px-6 py-3">
                Tanggal Masuk
              </th>
              <th scope="col" class="px-6 py-3">
                Kode Barang
              </th>
              <th scope="col" class="px-6 py-3">
                Nama Barang
              </th>
              <th scope="col" class="px-6 py-3">
                Pengirim
              </th>
              <th scope="col" class="px-6 py-3">
                Jumlah Masuk
              </th>
              <th scope="col" class="px-6 py-3">
                Satuan Barang
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {add.slice(0, filterData).map((items, index) => (
              <tr className="dark:bg-gray-900 dark:border-gray-700 border-b border-stroke ">
                <th
                  scope="row"
                  class="text-gray-900 whitespace-nowrap px-6 py-4 font-medium dark:text-white"
                >
                  {index + 1}
                </th>
                <td class="px-6 py-4">{items.idTransaksi}</td>
                <td class="px-6 py-4">{items.tanggalMasuk}</td>
                <td class="px-6 py-4">{items.kodeBarang}</td>
                <td class="px-6 py-4">{items.namaBarang}</td>
                <td class="px-6 py-4">{items.pengirim}</td>
                <td class="px-6 py-4">{items.jumlahMasuk}</td>
                <td class="px-6 py-4">{items.satuan}</td>
                <td class="px-6 py-4">
                  <button
                    onClick={() => {
                      handleDelete(items._id);
                    }}
                    className="text-blue-600 dark:text-blue-500 pl-2 font-medium hover:underline"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-2 grid w-full justify-items-end">
        <Link
          to={"/transaksi/tambah-data-barang"}
          className="rounded-xl bg-primary p-3 font-semibold text-white"
        >
          Add Product
        </Link>
      </div>
    </div>
  );
};

export default TableBarangMasuk;
