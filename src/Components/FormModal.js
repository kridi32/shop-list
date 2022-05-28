import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const FormModal = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm(); 
  const [start, setStart] = useState(10);
  const [end, setEnd] = useState(0);
  const [dateErr, setDateErr] = useState("");
  const [valid, setValid] = useState(true);
  useEffect(() => { 
    if (end < start) { 
      setValid(true)
      setDateErr("");
    } else {
      setValid(false);
      setDateErr("You can not close your shop before it starts")
    }
  }, [start, end])
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
              <select   required
                className="select select-bordered bg-white text-slate-800 border-[#2155CD] w-full "
                        {...register("location")}
              >
                <option  value="">
                  Pick one
                </option>
                <option value="thane">Thane</option>
                <option value="pune">Pune</option>
                <option value="mumbai">Mumbai Suburban</option>
                <option value="nashik">Nashik</option>
                <option value="nagpur">Nagpur</option> 
                <option value="ahmednagar">Ahmednagar</option> 
                <option value="solapur">Solapur</option> 
              </select>
             
            </div>
            <div className="form-control w-full mt-4 ">
              <label className="label">
                <span className="label-text font-medium text-slate-800 text-lg">
                  Pick the catagory of the shop
                </span>
                 
              </label>
              <select   required
                className="select select-bordered bg-white text-slate-800 border-[#2155CD] w-full "
                        {...register("type")}
              >
                <option  value="">
                  Pick one
                </option>
                <option value="grocery">Grocery</option>
                <option value="butcher">Butcher</option>
                <option value="baker">Baker</option>
                <option value="chemist">Chemist</option>
                <option value="stationary">Stationary shop</option> 
               
              </select>
             
            </div>
            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text font-medium text-slate-800 text-lg">
                  Enter shop's starting date:
                </span>
              </label>
              <input type="date" onChange={e => setEnd(Date.parse(e.target.value))} className="input input-bordered bg-white border-[#2155CD] w-full  "required />
               
            </div>
            <div className="form-control w-full  ">
              <label className="label">
                <span className="label-text font-medium text-slate-800 text-lg">
                  Enter shop's Closing date:
                </span>
              </label>
              <input type="date" onChange={e => setStart(Date.parse(e.target.value))} className="input input-bordered bg-white border-[#2155CD] w-full  " required/>
              <label className="label">
                <span className="label-text-alt text-red-700">
                {dateErr}
                </span>
              </label>
            </div>
            {
              valid === true ? (<button className="btn" type="submit">submit</button>):(<button className="btn" disabled  type="submit">submit</button>)
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
