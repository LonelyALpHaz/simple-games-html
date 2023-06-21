const cells = document.querySelectorAll('.hash');

cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.classList.add('selected');
    });

    cell.addEventListener('mouseout', () => {
        cell.classList.remove('selected');
    });
});

const choices = document.querySelectorAll(".hash");

choices.forEach(function(choice) {
  choice.addEventListener("click", function() {
    choice.textContent = 'X';
  });
});
