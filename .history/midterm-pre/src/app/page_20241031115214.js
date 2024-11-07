"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState(null);

  // To Do
  //
  // - Button that fetches
  // - container for button
  // - containerfor displaying content (empty, laoding and fillfulled states)
  // - fetch content (handle and format the content)
  // - store content somewhere
  // - error handling 
  // - styling
  // - breakpoints (mobile-first than desktop or tablet)
  // - function to clear data


  async function fetchImages() {
    const API_URL = "https://picsum.photos/v2/list?limit=5";
    setLoading(true);
    const response = await fetch(API_URL);
    const data = await response.json();
    setImageData(data);
    setLoading(false);

    // const debuggerVar = "test var";
    // debugger;
    // const moreDebuggerVar = "more test var";
    // console.log("button clicked");
    // alert("button clicked");
    // return;
  }

  const Header = () => {
    return (
      <section>
        <h1>Miderm App</h1>
        <button className="border-2 border-black p-2" onClick={fetchImages}>Fetch</button>
      </section>
    )
  }

  const ImageListContainer = () => {
    if (loading) {
      return <section>Loading...</section>
    }
    if (imageData) {
      const imageListItems = [];


      imageData.forEach((image, i) => {
        imageListItems.push(<article key={image.id}>
          <img src={image.download_url}/>
          <p>Author: {image.author}</p>
          <a href={image.download_url}>Download this</a>
        </article>)
      });
      return <section>{imageListItems}</section>;
    }
    return null;
  }

  return (

    <div className="m-2">
      <Header />
      <ImageListContainer />
    </div>
  );
}
