import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleShop from "./SingleShop";

const Home = () => {
  const shops = useSelector((state) => state.shops?.value);
    const [displayShops, setDisplayShops] = useState([...shops]);
  
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    } = useForm();
    const form = <>
        <select
                className="select border border-[#79DAE8] md:mr-4 w-48 h-6 mb-2 md:mb-0 text-[#2155CD]  bg-white"
                onChange={(e) => {
                    e.preventDefault();
                    const found = shops.filter(shop => shop.location === e.target.value);
                    setDisplayShops(found);
                }
                }
              >
                <option disabled selected>
                  By Location
                </option>
                <option value="Thane">Thane</option>
                <option value="Pune">Pune</option>
                <option value="Mumbai Suburban">Mumbai Suburban</option>
                <option value="Nashik">Nashik</option>
                <option value="Nagpur">Nagpur</option>
                <option value="Ahmednagar">Ahmednagar</option>
                <option value="Solapur">Solapur</option>
              </select>
              <select
            className="select  border border-[#79DAE8] w-48 h-6  md:mr-4 text-[#2155CD]  bg-white"
            onChange={(e) => {
                e.preventDefault();
                const found = shops.filter(shop => shop.catagory === e.target.value);
                setDisplayShops(found);
            }
            } >
                <option disabled selected>
                  By Category
                </option>
                <option value="Grocery">Grocery</option>
                <option value="Butcher">Butcher</option>
                <option value="Baker">Baker</option>
                <option value="Chemist">Chemist</option>
                <option value="Stationary Shop">Stationary shop</option>
        </select>
        </>
    ;
  
  return (
    <div className="mx-8">
      <section className="">
        <div className="flex w-full items-center justify-between mt-8 mb-2">
          <div className="dropdown dropdown-right md:hidden">
            <label
              tabIndex="0"
              className="btn text-[#79DAE8] bg-[#2155CD] text-sm px-4 py-2 rounded-md md:text-xl font-semibold"
            >
              Filter
            </label>
            <form
            
              tabIndex="0"
              className="dropdown-content menu p-4 shadow text-[#2155CD] bg- rounded-box bg-white "
            >
              {form}
                          <button className="btn text-[#79DAE8] bg-[#2155CD] text-sm px-4 py-2 mt-2 rounded-md md:text-xl font-semibold" onClick={e => {
                              e.preventDefault()
                              setDisplayShops(shops)
              }}>
                Reset Filters
              </button>
            </form>
          </div>
          <form action="" className="justify-start items-end hidden md:flex" >
            <h3 className="block text-[#2155CD] text-5xl font-medium mr-2">
              Filter:
            </h3>
           {form}
           <button className="btn text-[#79DAE8] bg-[#2155CD] text-sm px-4 py-2 mt-2 rounded-md md:text-xl font-semibold" onClick={e => {
                              e.preventDefault()
                              setDisplayShops(shops)
              }}>
                Reset Filters
              </button>
          </form>
          <Link
            to="/shops/add"
            className="btn text-[#79DAE8] bg-[#2155CD] text-sm px-4 py-2 rounded-md md:text-xl font-semibold"
          >
            Add A new shop
          </Link>
        </div>
        <hr className="w-full border-2 border-[#2155CD]" />
      </section>
      <section className="mt-8 container mx-auto">
        {displayShops.map((shop) => (
          <SingleShop shop={shop} key={shop.id} />
        ))}
      </section>
    </div>
  );
};

export default Home;
