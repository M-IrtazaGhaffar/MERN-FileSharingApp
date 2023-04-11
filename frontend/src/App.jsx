import { useEffect, useRef, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [Response, setResponse] = useState('')
  const fileInput = useRef();
  const [File, setFile] = useState();
  const upload = () => {
    fileInput.current.click();
  };

  const uploadFile = async (data) => {
    try {
      const API_URL = "http://localhost:3000";
      let response = await axios.post(`${API_URL}/upload`, data);
      setResponse(response.data.path);
      return response.data;
    } catch (error) {
      alert("Error in Network!");
    }
  };

  const getImage = async () => {
    if (File) {
      const data = new FormData();
      data.append("name", File.name);
      data.append("file", File);

      const response = await uploadFile(data);
    }
  };

  useEffect(() => {
    getImage();
  }, [File]);
  return (
    <div className="App">
      <input
        type="file"
        name=""
        ref={fileInput}
        style={{ display: "none" }}
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={upload}>Upload</button>
      <br /><br /><br /><br /><br />
      {
        Response === '' ? '' : <a href={Response} target="_self" >{Response}</a>
      }
    </div>
  );
}

export default App;
