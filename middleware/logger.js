const fs = require('fs');
const path = require('path');

function logEvents(message, type) {
  const date = new Date();
  const formattedDate = formatDate(date);
  const formattedTime = formatTime(date);
  const specialID = generateSpecialID();

  let logData = `${formattedDate} ${formattedTime} ${specialID}${message}`;

  if (type === 'request') {
    appendToFile('requestLogs.log', logData);
  } else if (type === 'error') {
    appendToFile('errorLogs.log', logData);
  }
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

function formatTime(date) {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function generateSpecialID() {
  // Implement your special ID generation logic here
  // For example, you can use a UUID library or generate a unique ID based on your requirements
  return '81dd0bc7-1da5-458a-975e-7fdb62961108';
}

function appendToFile(filename, data) {
  fs.appendFile(path.join(__dirname, '..', 'logs', filename), data, (err) => {
    if (err) {
      console.error(`Error writing to ${filename}:`, err);
    }
  });
}

module.exports = logEvents;





