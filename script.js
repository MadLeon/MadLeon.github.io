window.onload = function () {
  document.querySelector('#all').onclick = function () {
    // select all items and change their display to flex
    document.querySelectorAll('.item').forEach(v => {
      v.style.display = 'flex';
    });
  };

  document.querySelector('#appetizer').onclick = function () {
    // select all items and change their display to none
    document.querySelectorAll('.item').forEach(v => {
      v.style.display = 'none';
    });
    // select all appetizer and change their display to flex
    document.querySelectorAll('.appetizer').forEach(v => {
      v.style.display = 'flex';
    });
  };

  document.querySelector('#sashimi').onclick = function () {
    // select all items and change their display to none
    document.querySelectorAll('.item').forEach(v => {
      v.style.display = 'none';
    });
    // select all sashimi and change their display to flex
    document.querySelectorAll('.sashimi').forEach(v => {
      v.style.display = 'flex';
    });
  };

  document.querySelector('#sushi').onclick = function () {
    // select all items and change their display to none
    document.querySelectorAll('.item').forEach(v => {
      v.style.display = 'none';
    });
    // select all appetizer and change their display to flex
    document.querySelectorAll('.sushi').forEach(v => {
      v.style.display = 'flex';
    });
  };

  document.querySelector('#main').onclick = function () {
    // select all items and change their display to none
    document.querySelectorAll('.item').forEach(v => {
      v.style.display = 'none';
    });
    // select all appetizer and change their display to flex
    document.querySelectorAll('.main').forEach(v => {
      v.style.display = 'flex';
    });
  };

  document.querySelector('#dessert').onclick = function () {
    // select all items and change their display to none
    document.querySelectorAll('.item').forEach(v => {
      v.style.display = 'none';
    });
    // select all appetizer and change their display to flex
    document.querySelectorAll('.dessert').forEach(v => {
      v.style.display = 'flex';
    });
  };
};
