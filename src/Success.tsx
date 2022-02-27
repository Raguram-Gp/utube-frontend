import "./success.css";

function Success() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          <div className="payment">
            <div className="payment_header">
              <div className="check">
                <i className="fa fa-check" aria-hidden="true">
                  👍
                </i>
              </div>
            </div>
            <div className="content">
              <h1>Registered Successfully</h1>
              <p>
                We have recieved your request and have uploaded it to the
                database
              </p>
              <a href="/">Submit another response</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
