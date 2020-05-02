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
        url: "http://music.163.com/song/media/outer/url?id=1324078465.mp3",
        cover: "http://p2.music.126.net/qVk9flKKqmFF30MfXKHcqA==/109951163655933659.jpg?param=300x300",
      },
    ],
  });
});