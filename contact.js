window.onload = function () {
  /*select the order problem radio option*/
  document.querySelector('#order').onchange = function () {
    document.querySelector('#hidden').style.display = "flex";
  };

  document.querySelector('#question').onchange = function () {
    document.querySelector('#hidden').style.display = "none";
  };

  document.querySelector('#comment').onchange = function () {
    document.querySelector('#hidden').style.display = "none";
  };
};
