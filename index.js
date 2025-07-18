const timeDisplay = document.getElementById('timeDisplay');
const dateDisplay = document.getElementById('dateDisplay');
const dayDisplay = document.getElementById('dayDisplay');
const hanoiTime = document.getElementById('hanoi-time');
const newYorkTime = document.getElementById('newYork-time');
const londonTime = document.getElementById('london-time');
const tokyoTime = document.getElementById('tokyo-time');

function updateData() {
  const time = new Date();
  const vnTimeZone = 'Asia/Ho_Chi_Minh';
  const nyTimeZone = 'America/New_York';
  const londonTimeZone = 'Europe/London';
  const TokyoTimeZone = 'Asia/Tokyo';
  timeDisplay.innerHTML = formatTime(time, vnTimeZone);
  dateDisplay.innerHTML = formatDate(time, vnTimeZone);
  dayDisplay.innerHTML = formatDay(time, vnTimeZone);
  hanoiTime.innerHTML = formatTime(time, vnTimeZone);
  newYorkTime.innerHTML = formatTime(time, nyTimeZone);
  londonTime.innerHTML = formatTime(time, londonTimeZone);
  tokyoTime.innerHTML = formatTime(time, TokyoTimeZone);
}
function formatDay(time, timezone) {
  const weekdays = {
    Monday: 'Thứ hai',
    Tuesday: 'Thứ ba',
    Wednesday: 'Thứ tư',
    Thursday: 'Thứ năm',
    Friday: 'Thứ sáu',
    Saturday: 'Thứ bảy',
    Sunday: 'Chủ nhật',
  };
  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: timezone,
    weekday: 'long',
  });
  const parts = formatter.formatToParts(time);
  const getValue = (type) => parts.find((part) => part.type === type)?.value;
  return weekdays[getValue('weekday')];
}
function formatDate(time, timezone) {
  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: timezone,
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const parts = formatter.formatToParts(time);
  const getValue = (type) => parts.find((part) => part.type === type)?.value;
  return `${getValue('day')}/${getValue('month')}/${getValue('year')}`;
}
function formatTime(time, timezone) {
  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    weekday: 'long',
  });
  const parts = formatter.formatToParts(time);
  const getValue = (type) => parts.find((part) => part.type === type)?.value;
  return `${getValue('hour')}:${getValue('minute')}:${getValue('second')}`;
}

setInterval(updateData, 1000);
