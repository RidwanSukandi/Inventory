import React, { useEffect, useState } from "react";
import axios from "axios";

const TableJenisbarang = () => {
  const [Barang, setJenisBarang] = useState([]);
  const [filterData, setFilterData] = useState(10);
  const [number, setNumber] = useState(1);

  const jenisBarang = async () => {
    await axios
      .get("http://localhost:4000/jenis-barang/")
      .then((response) => {
        setJenisBarang(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    jenisBarang();
  });

  console.log(Barang);

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Jenis Barang
      </h4>

      <div class="relative mb-8 overflow-x-auto shadow-md sm:rounded-lg">
        <table class="text-gray-500 dark:text-gray-400 w-full text-left text-sm">
          <thead class="text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-xs uppercase">
            <tr>
              <th scope="col" class="px-6 py-3">
                No
              </th>
              <th scope="col" class="px-6 py-3">
                Jenis Barang
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="dark:bg-gray-900 dark:border-gray-700 border-b border-stroke ">
              {Barang.map((items) => (
                <>
                  <th
                    scope="row"
                    class="text-gray-900 whitespace-nowrap px-6 py-4 font-medium dark:text-white"
                  >
                    {number}
                  </th>
                  <td class="px-6 py-4">{items.jenisBarang}</td>
                  <td class="px-6 py-4">
                    <a
                      href="#"
                      class="text-blue-600 dark:text-blue-500 font-medium hover:underline"
                    >
                      Edit ||
                    </a>
                    <a
                      href="#"
                      class="text-blue-600 dark:text-blue-500 pl-2 font-medium hover:underline"
                    >
                      Hapus
                    </a>
                  </td>
                </>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableJenisbarang;
