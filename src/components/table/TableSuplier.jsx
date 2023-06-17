import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TableSuplier = () => {
  const [suplier, setSuplier] = useState([]);

  const dataSuplier = async () => {
    await axios
      .get("https://backend-inventori.vercel.app/api/suplier")
      .then((response) => {
        setSuplier(response.data.data);
      });
  };

  useEffect(() => {
    dataSuplier();
  });

  const DeleteSuplier = async (id) => {
    await axios
      .delete(`https://backend-inventori.vercel.app/api/suplier/delete/${id}`)
      .then((response) => {
        console.log(response);
      });

    dataSuplier();
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Data Suplier
      </h4>

      <div class="relative mb-8 overflow-x-auto shadow-md sm:rounded-lg">
        <table class="text-gray-500 dark:text-gray-400 w-full text-left text-sm">
          <thead class="text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-xs uppercase">
            <tr>
              <th scope="col" class="px-6 py-3">
                No
              </th>
              <th scope="col" class="px-6 py-3">
                Kode Suplier
              </th>
              <th scope="col" class="px-6 py-3">
                Nama Suplier
              </th>
              <th scope="col" class="px-6 py-3">
                Alamat
              </th>
              <th scope="col" class="px-6 py-3">
                Telepon
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {suplier.map((items, index) => (
              <>
                <tr className="dark:bg-gray-900 dark:border-gray-700 border-b border-stroke ">
                  <th
                    scope="row"
                    class="text-gray-900 whitespace-nowrap px-6 py-4 font-medium dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td class="px-6 py-4">{items.kodeSuplier}</td>
                  <td class="px-6 py-4">{items.namaSuplier}</td>
                  <td class="px-6 py-4">{items.alamat}</td>
                  <td class="px-6 py-4">{items.telepon}</td>
                  <td class="px-6 py-4">
                    <Link
                      to={`/data-master/edit_suplier/${items._id}`}
                      class="text-blue-600 dark:text-blue-500 font-medium hover:underline"
                    >
                      Edit ||
                    </Link>
                    <button
                      onClick={() => {
                        DeleteSuplier(items._id);
                      }}
                      class="text-blue-600 dark:text-blue-500 pl-2 font-medium hover:underline"
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
          to={"/data-master/add-suplier/"}
          className="mb-2 rounded-xl bg-primary p-3 font-semibold text-white"
        >
          Add Suplier
        </Link>
      </div>
    </div>
  );
};

export default TableSuplier;
