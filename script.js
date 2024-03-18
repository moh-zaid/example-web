document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  // Here, you can add your authentication logic
  // For demonstration, I'm just checking if both fields are filled
  if (username && password) {
    // Authentication successful
    alert('Login successful!');
  } else {
    // Authentication failed
    document.getElementById('error-message').textContent = 'Please enter both username and password.';
  }
});
