// Данные субтитров
const lyricsData = [
    { start: 19.2, end: 22.1, text: "We're no strangers to love" },
    { start: 22.1, end: 25.8, text: "You know the rules and so do I" },
    { start: 25.8, end: 30.3, text: "A full commitment's what I'm thinking of" },
    { start: 30.3, end: 34.5, text: "You wouldn't get this from any other guy" },
    
];
// Инициализация субтитров
function initLyrics() {
    const lyricsDiv = document.getElementById('lyrics');
    lyricsData.forEach(line => {
        const div = document.createElement('div');
        div.className = 'lyric-line';
        div.textContent = line.text;
        div.dataset.start = line.start;
        div.dataset.end = line.end;
        lyricsDiv.appendChild(div);
    });
}
// Обновление субтитров
function updateLyrics() {
    const currentTime = audio.currentTime;
    const lines = document.querySelectorAll('.lyric-line');
    
    lines.forEach(line => {
        const start = parseFloat(line.dataset.start);
        const end = parseFloat(line.dataset.end);
        
        if(currentTime >= start && currentTime < end) {
            line.classList.add('active');
            line.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            line.classList.remove('active');
        }
    });
}
// Интеграция с плеером
audio.addEventListener('timeupdate', updateLyrics);
document.addEventListener('DOMContentLoaded', initLyrics);
