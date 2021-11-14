import React, { useEffect, useState } from "react";
import "./App.css";
import firebase from "firebase";
import { Button, TextField } from "@material-ui/core";

function App() {
  const [path, setPath] = useState("");
  const [multiple, setMultiple] = useState(false);
  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      var pathArray = path.split(", ");
      var urlArray = [];
      console.log(pathArray.length);
      console.log(images.length);
      if (pathArray.length === images.length && multiple) {
        pathArray.forEach(
          (item, index) =>
            firebase
              .storage()
              .ref(item)
              .put(images[index])
              .then(async (res) => {
                urlArray[index] = await res.ref.getDownloadURL();
              }),
          setUrls(urlArray),
          setLoading(false)
        );
      } else {
        firebase
          .storage()
          .ref(pathArray[0])
          .put(images[0])
          .then(async (res) => {
            urlArray[0] = await res.ref.getDownloadURL();
            setUrls(urlArray);
            setLoading(false);
          });
      }
    }
  }, [loading]);

  return (
    <div className="App">
      <div className="box">
        <h4>Upload Image, Get Url</h4>
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          label="Path"
          name="path"
          value={path}
          onChange={(e) => setPath(e.target.value)}
        />
        <label htmlFor="multiple" id="label">
          <input
            type="checkbox"
            name="multiple"
            id="multiple"
            value={multiple}
            onChange={() => setMultiple(!multiple)}
          />
          <span>Multiple images</span>
        </label>
        <input
          type="file"
          multiple
          variant="outlined"
          size="small"
          name="images"
          onChange={(e) => setImages(e.target.files)}
          accept="images/*"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => setLoading(true)}
        >
          Get Url(s)
        </Button>
      </div>
      <div className="box">
        <h4>URL(s)</h4>
        {loading ? (
          <p>loading</p>
        ) : (
          urls?.map((url) => (
            <p className="url" key={url}>
              {url}
            </p>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
