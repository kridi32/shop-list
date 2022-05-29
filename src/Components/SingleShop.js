import { format } from "date-fns/esm";
import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsFillBookmarkCheckFill, BsFillBookmarkXFill } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteShop } from "../Reducers/Shops";
const SingleShop = ({ shop }) => {
  // const date = Date.parse(new Date()); 
  // const isOpen = shop.startingDate < date && date < shop.closingDate;
  const dispatch = useDispatch()
  const date = new Date();
  return (
    <div className="card w-full bg-white shadow-xl my-8">
      <div className="card-body">
        <div className="flex   justify-between items-end">
          <h2 className="card-title text-4xl text-left text-slate-700">
            {shop.name}
          </h2>
          <div className="flex gap-4 ">
            {shop.startingDate < date && date < shop.closingDate ? (
              <div className="badge badge-success uppercase text-md py-4 px-4   md:mt-0 mt-2 font-medium  opacity-80">
                {" "}
                <BsFillBookmarkCheckFill /> <span className="ml-2">
                  Open
                </span>{" "}
              </div>
            ) : (
              <div className="badge badge-error md:mt-0 mt-2 uppercase text-md py-4 px-4 font-medium  opacity-80">
                {" "}
                <BsFillBookmarkXFill /> <span className="ml-2">
                  Closed
                </span>{" "}
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 md:mt-12">
          <div >
            <h3 className="text-xl font-medium text-slate-600 text-left">
              {" "}
              <HiOutlineLocationMarker className="inline font-semibold mr-2 " />
              {shop.location}
            </h3>
          </div>
          <div className="">
            <h3 className="text-xl  font-medium text-slate-600 text-left">
              {" "}
              <BiCategory className="inline font-semibold mr-2 " />{" "}
              {shop.catagory}
            </h3>
          </div>
          <div className="md:flex md:justify-end"> 
            <button className="btn btn-error w-full md:w-auto" onClick={(e) => {
            
              dispatch(deleteShop(shop))
            }}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleShop;
