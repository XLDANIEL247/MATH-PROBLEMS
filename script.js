document.getElementById('proxy-toggle').addEventListener('click', function () {
  const iframe = document.querySelector('iframe');
  
  if (iframe.src.includes('vapor.my')) {
    // Simulate a proxy unblock (change the iframe source)
    iframe.src = "https://example.com/blocked-content";
    alert("Content has been unblocked!");
  } else {
    // Simulate the blocked content
    iframe.src = "https://vapor.my/page/music/index.html";
    alert("Content has been blocked!");
  }
});
