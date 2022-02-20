# jujuchoi.github.io
주주네 깃헙 블로그
<!DOCTYPE html>
<html>
  <head>
    <title>Happy To do List</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap" rel="stylesheet">
  </head>

  <body>
    <div id="weather">
      <span></span>
      <br>
      <span></span>
    </div>

      <form id="logIn">
        <p>Hello, what's your name?</p>
        <input type="text" id="inputUsername" required maxlength="15"/>
        <input type="submit" id="submitBtn" value="JOIN" />
      </form>
      <div>
        <span id="clock"></span>
        <p id="greeting" style="display: none;"></p>
        <div id="toDoDiv">
          <form id="toDos">
            <p>What is your main focus for today?</p>
            <input type="text" id="toDoList" required maxlength="50"/>
            <input type="submit" value="submit"/>
          </form>
        </div>
      </div>
      <div id="list"></div>
    <script src="src/logIn.js"></script>
    <script src="src/clock.js"></script>
    <script src="src/todoList.js"></script>
    <script src="src/weather.js"></script>
  </body>
</html>
