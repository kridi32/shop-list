import React from "react";
import { useForm } from "react-hook-form";

const FormModal = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal ">
        <div className="modal-box bg-white">
          <h3 className="font-bold text-2xl text-[#2155CD] ">Add a shop</h3>
          <form onSubmit={handleSubmit(console.log)}>
            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text font-medium text-slate-800 text-lg">
                  Enter shop's name:
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered bg-white border-[#2155CD] w-full  "
                {...register("test", {
                  required: {
                    value: true,
                    message: "this is required",
                  },
                  pattern: {
                    value: /^[A-Za-z ]+$/,
                    message: "error message", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                <span className="label-text-alt text-red-700">
                  {errors.test?.type === "pattern" && "The name is invalid"}{" "}
                  {errors.test?.type === "required" &&
                    "You have to put a name of the shop"}
                </span>
              </label>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text font-medium text-slate-800 text-lg">
                  Pick the Location of the shop
                </span>
                 
              </label>
              <select required
                className="select select-bordered bg-white text-slate-800 border-[#2155CD] w-full "
                              {...register("loc", {
                                  required: {
                                      value: true, 
                                      message: "you have to add this "
                    }
                })}
              >
                <option disabled selected>
                  Pick one
                </option>
                <option>Thane</option>
                <option>Pune</option>
                <option>Mumbai Suburban</option>
                <option>Nashik</option>
                <option>Nagpur</option> 
                <option>Ahmednagar</option> 
                <option>Solapur</option> 
              </select>
              <label className="label">
                <span className="label-text-alt text-red-700">  {errors.loc?.type === "required" &&
                    "You have to put a name of the shop"} </span>
              </label>
            </div>
            <button type="submit">submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
