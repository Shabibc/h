const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;


if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Toggle Light Mode';
}


darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.textContent = 'Toggle Light Mode';
    } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.textContent = 'Toggle Dark Mode';
    }
});
