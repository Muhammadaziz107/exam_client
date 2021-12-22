import "./ochered.css";

function Ochered() {
  return (
    <div className="ochered">
      <form className="ordersend" action="http://localhost:7000/newOrder" method="post">
        <h1>Submit Order </h1>
        <input type="text" placeholder="full name" name="userName" />
        <input type="text" placeholder="phone number" name="userPhone" />
        <input type="text" placeholder="order body" name="orderBody" />
        <button type="submit">Send order</button>
      </form>
    </div>
  );
}
export default Ochered;
