import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <main className="App bg-[#E8F9FD]  p-8">
      {/* main heading */}
      <h1 className="text-[#2155CD] text-5xl font-bold my-8">Shop list</h1>

      {/* query and adding shops section  */}
      <section className="container mx-auto">
        <div className="flex w-full items-center justify-between mt-8 mb-2">
          <div className="dropdown dropdown-right md:hidden">
            <label tabindex="0" className="text-[#79DAE8] bg-[#2155CD] text-sm px-4 py-2 rounded-md md:text-xl font-semibold">
              Filter
            </label>
            <ul
              tabindex="0"
              className="dropdown-content menu p-4 shadow text-[#79DAE8] bg-[#2155CD] rounded-box  "
            >
              <select className="select border border-[#79DAE8]  w-48 h-6 mb-2 text-[#79DAE8] bg-[#2155CD]">
              <option disabled selected>
                By Location
              </option>
              <option>Dhaka</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Noida</option>
            </select>
            <select className="select  border border-[#79DAE8] w-48 h-6 text-[#79DAE8] bg-[#2155CD]">
              <option disabled selected>
                By Type
              </option>
              <option>Gorcary</option>
              <option>Mall </option>
              <option>Baker</option>
              <option>Bucher</option>
            </select>
            </ul>
          </div>
          <form action="" className="justify-start items-end hidden md:flex">
            <h3 className="block text-[#2155CD] text-3xl font-medium mr-2">
              Filter :
            </h3>
            <select className="select select-error w-48 h-6 mr-4">
              <option disabled selected>
                By Location
              </option>
              <option>Dhaka</option>
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Noida</option>
            </select>
            <select className="select select-error w-48 h-6  ">
              <option disabled selected>
                By Type
              </option>
              <option>Gorcary</option>
              <option>Mall </option>
              <option>Baker</option>
              <option>Bucher</option>
            </select>
          </form>
          <button className="text-[#79DAE8] bg-[#2155CD] text-sm px-4 py-2 rounded-md md:text-xl font-semibold">
            Add A new shop
          </button>
        </div>
        <hr className="w-full border-2 border-[#2155CD]" />
      </section>
    </main>
  );
}

export default App;
