const CartWidget = () => {
    const itemCount = 5;

    return (
        <div className="cart-widget">
            <i className="bi bi-cart"></i>
            <span className="notification">{itemCount}</span>
        </div>
    );
};

export default CartWidget;