
function sendCommand(command) {
  const token = document.getElementById('token').value;
  if (!token) {
    alert('Please enter your Deriv token.');
    return;
  }

  // Save token in localStorage for convenience
  localStorage.setItem('derivToken', token);

  // Simulate sending to server
  fetch('https://api.jsonbin.io/v3/b/66515206acd3cb34a84c7c86', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': '$2b$10$ExampleKeyOnlyForSimulation' // Dummy key
    },
    body: JSON.stringify({ control: command })
  }).then(res => {
    document.getElementById('status').textContent = 'Status: ' + command.toUpperCase() + ' sent';
  }).catch(err => {
    document.getElementById('status').textContent = 'Failed to send command';
  });
}

// Autofill token if stored
document.addEventListener('DOMContentLoaded', () => {
  const savedToken = localStorage.getItem('derivToken');
  if (savedToken) {
    document.getElementById('token').value = savedToken;
  }
});
