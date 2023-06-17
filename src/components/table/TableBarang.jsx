import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TableBarang = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState(10);
  const [number, setNumber] = useState(0);

  const fetchBarang = async (req, res) => {
    await axios
      .get("https://backend-inventori.vercel.app/api/product")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const DeleteBarang = async (id) => {
    console.log(id);
    await axios
      .delete(`https://backend-inventori.vercel.app/api/product/delete/${id}`)
      .then((response) => {});
    dataUsers();
  };

  useEffect(() => {
    fetchBarang();
  });

  const handleChange = (event) => {
    setFilterData(event.target.value);
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Stock Gudang
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
                Kode Barang
              </th>
              <th scope="col" class="px-6 py-3">
                Nama Barang
              </th>
              <th scope="col" class="px-6 py-3">
                Jenis Barang
              </th>
              <th scope="col" class="px-6 py-3">
                Jumlah Barang
              </th>
              <th scope="col" class="px-6 py-3">
                Satuan
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((items, index) => (
              <>
                <tr className="dark:bg-gray-900 dark:border-gray-700 border-b border-stroke ">
                  <th
                    scope="row"
                    class="text-gray-900 whitespace-nowrap px-6 py-4 font-medium dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td class="px-6 py-4">{items.kodeBarang}</td>
                  <td class="px-6 py-4">{items.namaBarang}</td>
                  <td class="px-6 py-4">{items.jenisBarang}</td>
                  <td class="px-6 py-4">{items.jumlahBarang}</td>
                  <td class="px-6 py-4">{items.satuan}</td>
                  <td class="px-6 py-4">
                    <Link
                      to={`/data-master/edit_barang/${items._id}`}
                      class="text-blue-600 dark:text-blue-500 font-medium hover:underline"
                    >
                      Edit ||
                    </Link>

                    <button
                      onClick={() => {
                        DeleteBarang(items._id);
                      }}
                      class="text-blue-600 dark:text-blue-500 ml-2 font-medium hover:underline"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid justify-items-end">
        <Link
          to={"/data-master/add-barang"}
          className="mb-3 rounded-lg bg-primary p-3 font-semibold text-white"
        >
          Add Barang
        </Link>
      </div>
    </div>
  );
};

export default TableBarang;
