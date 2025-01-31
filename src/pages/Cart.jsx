import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { clear } from "../redux/Slices/CartSlice";


const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
  {
    cart.length > 0  ? 
    
    (<div className="flex gap-16 lg:justify-between md:justify-evenly max-w-6xl p-6 mx-auto flex-wrap lg:flex-nowrap items-center justify-center">

      <div className="lg:w-[70%] md:w-[60%] w-[85%]">
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="md:w-[30%] w-full flex flex-col gap-14 md:self-start justify-between text-center md:text-start">

        <div className="mt-20">

          <p className="text-xl text-blue-800 uppercase font-[600]">Your Cart</p>
          <p className="text-5xl font-[600] text-blue-700 uppercase mb-4">Summary</p>
          <p className="font-[600] text-xl text-slate-700">
            Total Items: <span className="font-normal">{cart.length}</span>
          </p>
        </div>

        <div className="mb-20">
        
          <p className="text-slate-700 text-xl font-[600] mb-5 ">Total Amount: 
            <span className="font-bold ml-2 text-black">${totalAmount.toFixed(2)}</span>
          </p>

          <NavLink to="/confirm" onClick={() => dispatch(clear())}>
            <button className="text-lg w-full py-2.5 rounded-lg font-bold text-white bg-blue-800
            border-2 border-blue-900 hover:bg-white hover:text-blue-800 transition-all duration-300 ease-in"
            >
              CheckOut Now
            </button>
          </NavLink>

        </div>

      </div>


    </div>) : 
    (<div className="w-screen h-[calc(100vh-80px)] flex flex-col gap-6 justify-center items-center">

      <h1 className="font-[600] text-xl">Your Cart is Empty !</h1>

      <Link to={"/"}>

        <button className="bg-blue-900 text-white text-md uppercase font-[600] py-3 px-10 rounded-md
        border-blue-950 border-2 hover:bg-white hover:text-blue-900 ease-in transition-all duration-300">
          Shop Now
        </button>

      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
