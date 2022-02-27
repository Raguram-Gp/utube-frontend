import "./App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  let data: any = {};
  const handleChange = (e: any) => {
    data[e.target.name] = e.target.value;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const url = `http://localhost:8000/register/?name=${data.name}&creatorName=${data.creatorName}&channelName=${data.channelName}&uploadedBy=${data.uploadedBy}&phone=${data.phone}&duration=${data.duration}&description=${data.description}`;
    const response = await axios.get(url);
    console.log(response.data);
    navigate("/success");
  };
  return (
    <div className="container">
      <form
        className="formContainer"
        id="form"
        method="GET"
        onChange={handleChange}
        onSubmit={handleSubmit}
      >
        <div className="registerContainer">
          <div>
            <h3>Video Detials</h3>
          </div>
          <hr />

          <div className="input-group mb-3">
            <span className="input-group-text label">Name </span>
            <input type="text" className="form-control" name="name" required />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text label">Creator Name</span>
            <input
              type="text"
              className="form-control"
              name="creatorName"
              required
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text label">Channel Name</span>
            <input
              type="text"
              className="form-control"
              name="channelName"
              required
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text label">Uploaded By</span>
            <input
              type="text"
              className="form-control"
              name="uploadedBy"
              required
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text label">Phone</span>
            <input
              type="tel"
              className="form-control"
              pattern="[0-9]{10}"
              minLength={10}
              maxLength={10}
              name="phone"
              required
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text label">Duration</span>
            <input
              type="number"
              className="form-control"
              name="duration"
              required
            />
            <span className="input-group-text label">Mins</span>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text label">Description</span>
            <textarea
              className="form-control"
              rows={3}
              name="description"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary" id="but">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
