"use strict";

document.getElementById('removeBtn').addEventListener('click', function () {
    const el = document.getElementById('helloBox');
    if (el) el.remove();
});

document.getElementById('nameInput').addEventListener('input', function (e) {
    const name = e.target.value || 'Guest';
    document.getElementById('greetBox').textContent = `أهلاً، ${name}!`;
});

document.getElementById('myImg').addEventListener('click', function () {
    this.src = 'https://via.placeholder.com/100/ff0000/ffffff';
});
