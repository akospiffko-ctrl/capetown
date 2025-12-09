// Calendar data for the trip
const tripDays = [
    { date: '2025-12-12', day: 'Fri', label: 'Travel Day', phase: 'travel' },
    { date: '2025-12-13', day: 'Sat', label: 'CPT Arrival', phase: 'cape-town-arrival', anchor: 'day-dec13' },
    { date: '2025-12-14', day: 'Sun', label: 'Table Mountain', phase: 'cape-town-arrival', anchor: 'day-dec14' },
    { date: '2025-12-15', day: 'Mon', label: 'To Wilderness', phase: 'garden-route', anchor: 'day-dec15' },
    { date: '2025-12-16', day: 'Tue', label: 'Kayak Adventure', phase: 'garden-route', anchor: 'day-dec16' },
    { date: '2025-12-17', day: 'Wed', label: 'To Knysna', phase: 'garden-route', anchor: 'day-dec17' },
    { date: '2025-12-18', day: 'Thu', label: 'Otter Trail', phase: 'garden-route', anchor: 'day-dec18' },
    { date: '2025-12-19', day: 'Fri', label: 'Featherbed', phase: 'garden-route', anchor: 'day-dec19' },
    { date: '2025-12-20', day: 'Sat', label: 'Outeniqua', phase: 'garden-route', anchor: 'day-dec20' },
    { date: '2025-12-21', day: 'Sun', label: 'To Plett', phase: 'garden-route', anchor: 'day-dec21' },
    { date: '2025-12-22', day: 'Mon', label: 'Keurbooms', phase: 'garden-route', anchor: 'day-dec22' },
    { date: '2025-12-23', day: 'Tue', label: 'Whale Watch', phase: 'garden-route', anchor: 'day-dec23' },
    { date: '2025-12-24', day: 'Wed', label: 'Schotia Safari', phase: 'garden-route', anchor: 'day-dec24' },
    { date: '2025-12-25', day: 'Thu', label: 'Addo & Fly', phase: 'garden-route', anchor: 'day-dec25' },
    { date: '2025-12-26', day: 'Fri', label: 'Chapman\'s Peak', phase: 'cape-town-intensive', anchor: 'day-dec26' },
    { date: '2025-12-27', day: 'Sat', label: 'Table Mountain Hike', phase: 'cape-town-intensive', anchor: 'day-dec27' },
    { date: '2025-12-28', day: 'Sun', label: 'Kirstenbosch Concert', phase: 'cape-town-intensive', anchor: 'day-dec28' },
    { date: '2025-12-29', day: 'Mon', label: 'Dolphin Kayak', phase: 'cape-town-intensive', anchor: 'day-dec29' },
    { date: '2025-12-30', day: 'Tue', label: 'To Mount Ceder', phase: 'mount-ceder', anchor: 'day-dec30' },
    { date: '2025-12-31', day: 'Wed', label: 'New Year\'s Eve', phase: 'mount-ceder', anchor: 'day-dec31' },
    { date: '2026-01-01', day: 'Thu', label: 'New Year\'s Day', phase: 'mount-ceder', anchor: 'day-jan01' },
    { date: '2026-01-02', day: 'Fri', label: 'To Sea Point', phase: 'sea-point', anchor: 'day-jan02' },
    { date: '2026-01-03', day: 'Sat', label: 'Lunch with Tina', phase: 'sea-point', anchor: 'day-jan03' },
    { date: '2026-01-04', day: 'Sun', label: 'Departure', phase: 'sea-point', anchor: 'day-jan04' }
];

// Create calendar view
function createCalendar() {
    const calendarContainer = document.getElementById('calendar-view');
    if (!calendarContainer) return;

    const calendarHTML = `
        <div class="calendar-header">
            <h2>📅 Trip Calendar</h2>
            <p>Click any day to jump to details</p>
        </div>
        <div class="calendar-grid">
            ${tripDays.map(day => `
                <div class="calendar-day ${day.phase}" 
                     onclick="scrollToDay('${day.anchor}')" 
                     data-date="${day.date}">
                    <div class="calendar-date">${day.day}</div>
                    <div class="calendar-day-num">${new Date(day.date).getDate()}</div>
                    <div class="calendar-label">${day.label}</div>
                </div>
            `).join('')}
        </div>
    `;

    calendarContainer.innerHTML = calendarHTML;
}

// Scroll to specific day
function scrollToDay(anchor) {
    if (anchor === 'travel') return;
    
    const element = document.getElementById(anchor);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Highlight the day card briefly
        element.classList.add('highlight-flash');
        setTimeout(() => {
            element.classList.remove('highlight-flash');
        }, 2000);
    }
}

// Highlight current day in calendar
function highlightCurrentDay() {
    const today = new Date().toISOString().split('T')[0];
    const calendarDays = document.querySelectorAll('.calendar-day');
    
    calendarDays.forEach(day => {
        if (day.dataset.date === today) {
            day.classList.add('current-day');
        }
    });
}

// Initialize calendar when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createCalendar();
    highlightCurrentDay();
});
