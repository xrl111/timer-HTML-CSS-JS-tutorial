const timeDisplay = document.getElementById('timeDisplay');
const dateDisplay = document.getElementById('dateDisplay');
const dayDisplay = document.getElementById('dayDisplay');
function updateData() {
  const time = new Date();
  const vnTimeZone = 'Asia/Ho_Chi_Minh';

  // Get all components for Vietnam timezone in one go
  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: vnTimeZone,
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

  // Vietnamese weekday names
  const weekdays = {
    Monday: 'Thứ hai',
    Tuesday: 'Thứ ba',
    Wednesday: 'Thứ tư',
    Thursday: 'Thứ năm',
    Friday: 'Thứ sáu',
    Saturday: 'Thứ bảy',
    Sunday: 'Chủ nhật',
  };

  // Display time, date and day
  timeDisplay.innerHTML = `${getValue('hour')}:${getValue('minute')}:${getValue(
    'second'
  )}`;
  dateDisplay.innerHTML = `${getValue('day')}/${getValue('month')}/${getValue(
    'year'
  )}`;
  dayDisplay.innerHTML = weekdays[getValue('weekday')];
}

setInterval(updateData, 1000);
