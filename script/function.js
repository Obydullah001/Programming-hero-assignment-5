document.getElementById('history-clear').addEventListener('click', function(event) {
     document.getElementById('activity-work').style.display = 'none';
})
document.getElementById('theme-btn').addEventListener('click', function () {
    const themeBtn = Math.floor(Math.random() * 0xffffff).toString(16);
    document.body.style.background = `#${themeBtn}
    `;
    
    
})
document.getElementById('date').innerText = function() {
    const today = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    const formattedDate = today.toLocaleDateString('en-US', options);
    return ` ${formattedDate}`;
}();

