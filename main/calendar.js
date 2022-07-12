let nav = 0;
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const calendar = document.getElementById('calendar');
const weekdays = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function load() {
    const dt = new Date();

    if (nav !== 0){
        dt.setMonth(new Date().getMonth() + nav);
    }
    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month : 'numeric',
        day: 'numeric',
    });

    const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

    document.getElementById('monthDisplay').innerText = `${dt.toLocaleDateString('en-us', { month: 'long'})} ${year}`;
    
    calendar.innerHTML = '';


    for(let i = 1; i <= paddingDays + daysInMonth; i++) {
        const daySquere = document.createElement('div');
        daySquere.classList.add('day');

        if(i > paddingDays) {
            daySquere.innerText = i - paddingDays;

            daySquere.addEventListener('click', () => console.log('click'));
        } else {
            daySquere.classList.add('padding');
        }

        calendar.appendChild(daySquere);
    }
}

function initButtons() {
    document.getElementById('nextButton').addEventListener("click", () => {
        nav++;
        load();
    });

    document.getElementById('backButton').addEventListener("click", () => {
        nav--;
        load();
    })

}

initButtons();
load();