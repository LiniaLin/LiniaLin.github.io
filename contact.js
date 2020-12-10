
window.onload = function() {
  document.getElementById('problem-order-problem').addEventListener('click', () => {
    clean.loadTextBox();
  });
  document.getElementById('problem-comment').addEventListener('click', () => {
    clean.unloadTextBox();
  });
  document.getElementById('problem-question').addEventListener('click', () => {
    clean.unloadTextBox();
  });
};

  const clean = {
    loadTextBox: function() {
      document.getElementById('orderpro').style.display = '';
    },
    unloadTextBox: function() {
      document.getElementById('orderpro').style.display = 'none';
    }
  };


