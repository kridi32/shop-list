import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addShop } from "../Reducers/Shops";

const Addshop = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const [start, setStart] = useState(10);
  const [end, setEnd] = useState(0);
  const [dateErr, setDateErr] = useState("");
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();
  // handling submit button
  const onSubmit = (data) => {
    const { name, location, catagory } = data;
    // creating the shop object to save that on redux store
    const shop = {
      id: Math.ceil(Math.random() * 10000000).toString(),
      name,
      location,
      catagory,
      startingDate: start,
      closingDate: end,
    };
    dispatch(addShop(shop));
    reset();
    navigate("/");
  };

  //validating dates
  useEffect(() => {
    if (end > start) {
      setValid(true);
      setDateErr("");
    } else {
      setValid(false);
      setDateErr("You can not close your shop before it starts");
    }
  }, [start, end]);
  return (
    <div>
      <div className=" ">
        <div className="modal-box bg-white mx-auto">
          <h3 className="font-bold text-2xl text-[#2155CD] ">Add a shop</h3>

          {/* input form, all inputs is required to submit  */}
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* getting the name of the shop  */}
            <div className="  w-full  ">
              <label className="label">
                <span className="label-text font-medium text-slate-800 text-lg">
                  Enter shop's name:
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered bg-white border-[#2155CD] w-full  "
                {...register("name", {
                  required: {
                    value: true,
                    message: "this is required",
                  },
                  pattern: {
                    value: /^[A-Za-z ]+$/,
                    //validation of the name of the shop that can only include alphabets
                  },
                })}
              />
              <label className="label">
                {/* display errors if occurs */}
                <span className="label-text-alt text-red-700">
                  {errors.name?.type === "pattern" && "The name is invalid"}{" "}
                  {errors.name?.type === "required" &&
                    "You have to put a name of the shop"}
                </span>
              </label>
            </div>

            {/* getting location data of the shop  */}
            <div className="  w-full ">
              <label className="label">
                <span className="label-text font-medium text-slate-800 text-lg">
                  Pick the Location of the shop
                </span>
              </label>
              <select
                required
                className="select select-bordered bg-white text-slate-800 border-[#2155CD] w-full "
                {...register("location")}
              >
                <option value="">Pick one</option>
                <option value="Thane">Thane</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai Suburban">Mumbai Suburban</option>
                <option value="Nashik">Nashik</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Ahmednagar">Ahmednagar</option>
                <option value="Solapur">Solapur</option>
              </select>
            </div>

            {/* getting catagory data of the shop  */}
            <div className="  w-full mt-4 ">
              <label className="label">
                <span className="label-text font-medium text-slate-800 text-lg">
                  Pick the catagory of the shop
                </span>
              </label>
              <select
                required
                className="select select-bordered bg-white text-slate-800 border-[#2155CD] w-full "
                {...register("catagory")}
              >
                <option value="">Pick one</option>
                <option value="Grocery">Grocery</option>
                <option value="Butcher">Butcher</option>
                <option value="Baker">Baker</option>
                <option value="Chemist">Chemist</option>
                <option value="Stationary Shop">Stationary shop</option>
              </select>
            </div>

            {/* collecting starting and closing date and storing as number for validation  */}
            <div className="  w-full  ">
              <label className="label">
                <span className="label-text font-medium text-slate-800 text-lg">
                  Enter shop's starting date:
                </span>
              </label>
              <input
                type="date"
                onChange={(e) => setStart(Date.parse(e.target.value))}
                className="input input-bordered bg-white border-[#2155CD] w-full  "
                required
              />
            </div>
            <div className="  w-full">
              <label className="label">
                <span className="label-text font-medium text-slate-800 text-lg">
                  Enter shop's Closing date:
                </span>
              </label>
              <input
                type="date"
                onChange={(e) => setEnd(Date.parse(e.target.value))}
                className="input input-bordered bg-white border-[#2155CD] w-full  "
                required
              />
              <label className="label">
                <span className="label-text-alt text-red-700">{dateErr}</span>
              </label>
            </div>

            {/* the add button will only enable if user provides valid dates on the input  */}
            {valid === true ? (
              <div className="modal-action">
                <button className="btn btn-primary" type="submit">
                  Add shop
                </button>
              </div>
            ) : (
              <button className="btn btn-disabled" disabled type="submit">
                Add shop
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addshop;
