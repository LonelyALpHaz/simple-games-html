const cells = document.querySelectorAll('.hash');

cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.classList.add('selected');
    });

    cell.addEventListener('mouseout', () => {
        cell.classList.remove('selected');
    });
});

const playerChoices = document.querySelectorAll('.hash');

    playerChoices.forEach(function(choice) {
        choice.addEventListener('click', function() {
            choice.textContent = 'X';
        })
    })
