import "./index.css";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const App = () => {
  return (
    <main className="h-screen">
      <nav className="flex py-6 px-16 justify-between">
        <input
          type="text"
          placeholder="Enter your product"
          className="bg-white border-none outline-none p-2 rounded-lg"
        />
        <div className="flex gap-6">
          <CiHeart className="text-white cursor-pointer size-6 " />
          <CiShoppingCart className="text-white cursor-pointer size-6" />
          <CgProfile className="text-white cursor-pointer size-6" />
        </div>
      </nav>

      <div className="flex h-full">
        {/*  sidebar */}
        <div className="h-full px-10">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Categories</h2>
            <ul>
              <li className="text-white  cursor-pointer rounded-lg   hover:text-xl hover:text-gray-200 hover:underline ">
                Electronics
              </li>
              <li className="text-white  cursor-pointer rounded-lg   hover:text-xl hover:text-gray-200 hover:underline">
                Clothing
              </li>
              <li className="text-white  cursor-pointer rounded-lg   hover:text-xl hover:text-gray-200 hover:underline">
                Home & Garden
              </li>
              <li className="text-white  cursor-pointer rounded-lg   hover:text-xl hover:text-gray-200 hover:underline">
                Books
              </li>
            </ul>
          </div>
        </div>
        {/* main products view */}
      </div>
    </main>
  );
};
export default App;
