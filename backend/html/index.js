const fetchData = async () => {
  const data = await fetch("http://localhost:5000/videos")
    .then(async (res) => await res.json())
    .catch((err) => console.error(err));

  console.log(data);
  data.map((info) => {
   
    const video = document.createElement("video");
    video.setAttribute("muted", true);
    video.setAttribute("autoplay", true);
    video.setAttribute("loop", true);
    video.setAttribute("controls", true);
    const source = document.createElement("source");
    source.setAttribute("src", `${info.video_url}`);

    video.appendChild(source);
  
    document.body.appendChild(video);
  });
};

fetchData();
