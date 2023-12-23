 # Course Dashboard

This is a simple dashboard that displays information about a student's coursework, accounts, results, and exams. It is built using HTML, CSS, and JavaScript.

## Getting Started

To get started, you will need to clone the repository and install the dependencies.

```
git clone https://github.com/scotty44-c/poly/course-dashboard.git
cd course-dashboard
npm install
```

Once the dependencies are installed, you can start the development server.

```
npm start
```

The development server will run on port 3000. You can access the dashboard by visiting http://localhost:3000 in your browser.

## Code Structure

The code is structured as follows:

* `index.html`: This is the main HTML file that displays the dashboard.
* `style.css`: This file contains the CSS styles for the dashboard.
* `script.js`: This file contains the JavaScript code for the dashboard.

## HTML

The HTML code for the dashboard is relatively simple. It consists of a navigation bar, a header, and a series of cards. Each card represents a different section of the dashboard.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  <title>Dashboard</title>
</head>
<body>

<nav class="navbar">
   <div>
    <ul>
      <li><a href="/dashboard/dashboard/dashboard.html">Dashboard</a></li>
      <li><a href="/dashboard/department/department.html">Department</a></li>
      <li><a href="/dashboard/coursework/coursework.html">Coursework</a></li>
      <li><a href="/dashboard/accounts/accounts.html">Accounts</a></li>
      <li><a href="/dashboard/results/results.html">Results</a></li>
      <li><a href="/dashboard/exams/exams.html">Exams</a></li>
    </ul>
  </nav>
  
</div>

<div class="dashboard">
  <h1>Welcome to your Dashboard</h1>


