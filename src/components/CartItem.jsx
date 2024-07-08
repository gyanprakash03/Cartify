import { toast } from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  }

  return (
    <div className="flex flex-col w-[450px] mt-6  justify-center items-center gap-16 h-[180px] rounded-lg shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] ">
      <div className=" flex justify-between mt-8 h-[200px] w-[400px]  ">
        <div className="">
          <img src={item.image} className=" mt-4 h-[120px]" alt="" />
        </div>
        <div className="h-[180px] ">
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
            {item.title}
          </h1>
          <h1 className="w-40 text-gray-500 font-normal text-[12px] text-left">
            {item.description.split(" ").slice(0, 10).join(" ") + "..."}
          </h1>
          <div className="flex justify-between mt-4">
            <p className="text-blue-700 font-semibold">${item.price}</p>
            <div onClick={removeFromCart} className="cursor-pointer text-xl hover:text-2xl hover:text-red-600 duration-200">
              <MdDelete/>
            </div>
          </div>
        </div>
          
      </div>
    
     
    </div>
  );
};

export default CartItem;
