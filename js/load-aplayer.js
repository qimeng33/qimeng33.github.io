document.addEventListener("DOMContentLoaded", function() {
  let apContainer = document.createElement("div");
  apContainer.id = "aplayer";
  document.body.append(apContainer);
  const ap = new APlayer({
    container: document.getElementById("aplayer"),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "鱼",
        artist: "西瓜JUN",
        url: "http://m10.music.126.net/20200502104425/a96fdfa6dd916b9475c0d56dd2cab214/ymusic/0f53/075d/0f0c/893e5cc3f8073ec68ac68fd1e0bbc328.mp3",
        cover: "http://p2.music.126.net/qVk9flKKqmFF30MfXKHcqA==/109951163655933659.jpg?param=300x300",
      },
    ],
  });
});