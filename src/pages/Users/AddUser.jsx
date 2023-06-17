import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import Breadcrumb from "../../components/Breadcrumb";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const updateUsers = () => {
  const navigate = useNavigate();
  const [error, setError] = useState([]);

  const [update, setUpdate] = useState({
    nama: "",
    telepon: "",
    username: "",
    level: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  console.log(update);

  const handleInput = async (event) => {
    event.preventDefault();

    await axios
      .post(`https://backend-inventori.vercel.app/api/user/register`, update)
      .then((response) => {
        console.log(response);
        response.data.status_code == 200
          ? navigate("/data_user")
          : response.data.message;
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setError(err.response.data.message);
      });
  };

  // useEffect(() => {
  //   handleInput(event);
  // }, []);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Add User" />

      {/* <!-- Input Fields --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            Add Data Users
          </h3>
        </div>
        <div className="flex flex-col gap-5.5 p-6.5">
          <form action="" method="post" onSubmit={handleInput}>
            <div>
              <i className="flex justify-center py-2 text-center font-bold     text-danger">
                {error}
              </i>
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
