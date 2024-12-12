<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My GitHub Page</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Poppins', sans-serif;
      line-height: 1.6;
      background: linear-gradient(to bottom, #f5f7fa, #c3cfe2);
      color: #333;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    header {
      background: #4A90E2;
      color: #fff;
      padding: 20px 0;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    header h1 {
      font-weight: 600;
      font-size: 2.5rem;
    }

    header p {
      font-weight: 300;
      font-size: 1.2rem;
    }

    main {
      flex: 1;
      text-align: center;
      padding: 20px;
    }

    main p {
      font-size: 1.2rem;
      margin-bottom: 20px;
    }

    .btn {
      display: inline-block;
      margin: 10px;
      padding: 12px 25px;
      font-size: 1rem;
      font-weight: 600;
      color: #fff;
      background: #4A90E2;
      border-radius: 25px;
      text-decoration: none;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: background 0.3s, box-shadow 0.3s;
    }

    .btn:hover {
      background: #357ABD;
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
    }

    footer {
      text-align: center;
      padding: 10px 0;
      background: #333;
      color: #fff;
      font-size: 0.9rem;
    }

    footer a {
      color: #4A90E2;
      text-decoration: none;
    }

    footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome to My GitHub Page</h1>
    <p>Your one-stop destination for my projects and interests</p>
  </header>
  <main>
    <p>Explore my latest projects and connect with me!</p>
    <a href="https://github.com/<username>" target="_blank" class="btn">Visit My GitHub</a>
    <a href="about.html" class="btn">Learn More About Me</a>
  </main>
  <footer>
    <p>&copy; 2024 <a href="https://github.com/<username>"><username></a>. All rights reserved.</p>
  </footer>
</body>
</html>
