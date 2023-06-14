import useCart from "../../Hooks/useCart";

const Payment = () => {
    const [cart] = useCart();
    return (
        <div>
            <h2>This is Payment Page.{cart.length}</h2>
        </div>
    );
};

export default Payment;