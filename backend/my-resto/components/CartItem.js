import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";

export default function CartItem({ item }) {
    const { designation, productImg, quantity, price } = item;
    const { removeItem } = useShoppingCart();
    const removeItemFromCart = () => {
        removeItem(item.id);
    };
    return (
        <div key={item.id} className="row py-1">
            <div className="col-2">
                <img className="rounded"
                    src={productImg}
                    width={40} height={40}
                    alt={designation}
                />
            </div>
            <div className="col-6">
                {designation} <span className="text-xs">({quantity})</span>
            </div>
            <div className="ml-auto col-2">{price} dt</div>
            <button className="btn col-2" onClick={() => removeItemFromCart()} >
                <Image alt="delete icon" src="/images/trash.png" width={25} height={25} />
            </button>
        </div>

    );
} 
