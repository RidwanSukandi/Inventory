import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumb";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const updateUsers = () => {
  const id = useParams();
  const navigate = useNavigate();

  const [update, setUpdate] = useState({
    nik: "",
    nama: "",
    telepon: "",
    username: "",
    level: "",
  });

  const userById = async () => {
    await axios
      .get(`https://backend-inventori.vercel.app/api/user/${id.id}`)
      .then((response) => {
        console.log(response.data.data);
        setUpdate(response.data.data);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInput = async (event) => {
    event.preventDefault();

    await axios
      .put(
        `https://backend-inventori.vercel.app/api/user/update/${id.id}`,
        update
      )
      .then((response) => {
        response.data.status_code == 200
          ? navigate("/data_user")
          : response.data.message;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    userById();
  }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Edit User" />

      {/* <!-- Input Fields --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Update Data Users
          </h3>
        </div>
        <div className="flex flex-col gap-5.5 p-6.5">
          <form action="" method="PUT" onSubmit={handleInput}>
            <div>
              <label className="mb-3 block text-black dark:text-white">
                Nik
              </label>
              <input
                type="text"
                value={update.nik}
                name="nik"
                onChange={handleChange}
                placeholder="Input Nik"
                required
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Nama
              </label>
              <input
                type="text"
                placeholder="Input Nama"
                value={update.nama}
                name="nama"
                onChange={handleChange}
                required
                className="w-full rounded-lg border-[1.5px] border-stroke 
                bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Telpon
              </label>
              <input
                type="text"
                value={update.telepon}
                name="telepon"
                placeholder="Input Telpon"
                required
                onChange={handleChange}
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Username
              </label>
              <input
                type="text"
                value={update.username}
                name="username"
                onChange={handleChange}
                required
                placeholder="Input Username"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <div>
              <label className="mb-3 block text-black dark:text-white">
                Level
              </label>
              <input
                value={update.level}
                name="level"
                type="text"
                required
                onChange={handleChange}
                placeholder="Input Level"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <button>Submit</button>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default updateUsers;
