// import logo from "./logo.svg";
import { useRef, useState, useEffect } from "react";
import "./App.css";
import Image from './Abhra.jpeg'
import { uploadFile } from "./services/api";

function App() {
  const [file, setFile] = useState("");
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  // const logo = "img.jpg";

  useEffect(()=>{
      const getImage= async()=>{
          if(file){
            const data=  new FormData();
            data.append("name",file.name)
            data.append("file",file)
            let response = await uploadFile(data);
            setResult(response.path);
          }
      }
      getImage();
  },[file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  };
  var dlink=""
  if(result!=="")
      dlink="Download Link"
  return (
    <div className="container">
      {/* <img src={logo} alt="banner" /> */}
      
      <div className="wrapper">
      <img src={Image} alt="banner" />
        <h1>Abhradip's File Sharing App</h1>

        <p>Upload and share the download link.</p>

        <button onClick={() => onUploadClick()}>Upload</button>

        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
     <div className="link">
      
      <a href={result}>{dlink}</a>
      
      </div>
      </div>
    </div>
  );
}

export default App;
