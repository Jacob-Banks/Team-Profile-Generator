const menu = require("../index");

const fillCards = (team) => {
  return `    
    ${team
      .filter((team) => team.role === "Manager")
      .map(({ name, id, email, unique, role }) => {
        return `
        <div class="card" style="width: 18rem;">
          <div class="card-header text-white bg-primary">
            <h1 class="card-title ">${name}</h1>
            <h2 class="card-subtitle mb-2 "><i class="fas fa-mug-hot"></i>  ${role}</h2>
          </div>
          <div class="card-body">
          <ul class="list-group border list-group-flush">
            <li class="list-group-item">ID : ${id}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item">Office: ${unique}</li>
          </ul>  
        </div>
        </div>`;
      })}
      ${team
        .filter((team) => team.role === "Engineer")
        .map(({ name, id, email, unique, role }) => {
          return `
          <div class="card" style="width: 18rem;">
            <div class="card-header text-white bg-primary">
              <h1 class="card-title ">${name}</h1>
              <h2 class="card-subtitle mb-2 "><i class="fas fa-glasses"></i>  ${role}</h2>
            </div>
            <div class="card-body">
            <ul class="list-group border list-group-flush">
                  <li class="list-group-item">ID : ${id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                  <li class="list-group-item">GitHub: <a href="https://github.com/${unique}"> ${unique}</a></li>
                </ul>  
            
           </div>
          </div>`;
        })
        .join("")}
        ${team
          .filter((team) => team.role === "intern")
          .map(({ name, id, email, unique, role }) => {
            return `
            <div class="card" style="width: 18rem;">
              <div class="card-header text-white bg-primary">
                <h1 class="card-title ">${name}</h1>
                <h2 class="card-subtitle mb-2 "><i class="fas fa-user-graduate"></i>  ${role}</h2>
              </div>
              <div class="card-body">
                <ul class="list-group border list-group-flush">
                  <li class="list-group-item">ID : ${id}</li>
                  <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                  <li class="list-group-item">School: ${unique}</li>
                </ul>  
              </div>
            </div>`;
          })}  
          `;
};
module.exports = (team) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.css">
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Staatliches&display=swap"
          rel="stylesheet">
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        
      <link rel="stylesheet" href="./assets/css/style.css" />
      <title>my group</title>
  </head>
  
  <body>
  <header>
    <div class="container-fluid flex-row ">
      <h1 class="page-title text-white bg-dark text-center py-2 px-3"> My Team
      </h1>
      
    </div>
  </header>
  <main class="container-fluid my-5">
  <div class="row justify-content-around no-gutters">
  ${fillCards(team)}
    
  </main>
  <footer class="container text-center py-3">
    <h3 class="text-dark">&copy;2021 by Jacob Banks</h3>
  </footer>
</body>
</html>
`;
};
