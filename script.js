document.getElementById('proxy-toggle').addEventListener('click', function () {
  const iframe = document.querySelector('.music-iframe');
  
  if (iframe.src === "https://vapor.my/page/music/index.html") {
    // Simulate unblock action (changing iframe URL to another one)
    iframe.src = "https://example.com/blocked-content";
    alert("Content has been unblocked!");
  } else {
    // Simulate the blocked content (restoring the original URL)
    iframe.src = "https://vapor.my/page/music/index.html";
    alert("Content has been blocked!");
  }
});
