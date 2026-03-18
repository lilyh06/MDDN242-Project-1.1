document.getElementById('btn-one').addEventListener('click', function () {
  const target = document.getElementById("work-section");

  // Scroll to the vertical center of the background image
  const targetPosition = target.offsetTop + target.offsetHeight / 2 - window.innerHeight / 2;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });
});


