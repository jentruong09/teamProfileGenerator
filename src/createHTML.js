// Manager card
const managerCard = (managerAnswers) => {
    return `
        <div class="member col-4 mb-3">
            <div class="card h-100" style="box-shadow: 5px 2px 7px 1px gray;">
                <div class="card-header text-white bg-primary">
                    <h3>${managerAnswers.name}</h2>
                    <h4><i class="fas fa-mug-hot"></i> Manager</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group">
                        <li class="list-group-item">ID: ${managerAnswers.id}</li>
                        <li class="list-group-item">Email:<a href="mailto:${managerAnswers.email}"> ${managerAnswers.email}</a></li>
                        <li class="list-group-item">Office Number: ${managerAnswers.officeNumber}</li>
                    </ul>
                </div>
            </div>
        </div>
    `
}


// Engineer card
const engineerCard = (engineerAnswers) => {
    return `
        <div class="member col-4 mb-3">
            <div class="card h-100" style="box-shadow: 5px 2px 7px 1px gray;">
                <div class="card-header text-white bg-primary">
                    <h3>${engineerAnswers.name}</h2>
                    <h4><i class="fas fa-glasses"></i> Engineer</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group">
                        <li class="list-group-item">ID: ${engineerAnswers.id}</li>
                        <li class="list-group-item">Email:<a href="mailto:${engineerAnswers.email}"> ${engineerAnswers.email}</a></li>
                        <li class="list-group-item">GitHub:<a href="https://github.com/${engineerAnswers.github}"> ${engineerAnswers.github}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    `
}


// Intern card
const internCard = (internAnswers) => {
    return `
        <div class="member col-4 mb-3">
            <div class="card h-100" style="box-shadow: 5px 2px 7px 1px gray;">
                <div class="card-header text-white bg-primary">
                    <h3>${internAnswers.name}</h2>
                    <h4><i class="fas fa-user-graduate"></i> Intern</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group">
                        <li class="list-group-item">ID: ${internAnswers.id}</li>
                        <li class="list-group-item">Email:<a href="mailto:${internAnswers.email}"> ${internAnswers.email}</a></li>
                        <li class="list-group-item">School: ${internAnswers.school}</li>
                    </ul>
                </div>
            </div>
        </div>
    `
}


// HTML Layout 
// generating the whole HTML
function createHTML(data) {
    const cardArray = [];

    // Try to change this into ES6??
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const position = employee.getRole(); //this is from lib

        if(position === 'Manager') {
            cardArray.push(managerCard(employee))
        }

        if(position === 'Engineer') {
            cardArray.push(engineerCard(employee))
        }

        if(position === 'Intern') {
            cardArray.push(internCard(employee))
        }
    }
    const fullTeam = cardArray.join('')
    return fullPage(fullTeam)


}

const fullPage = fullTeam => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Team</title>
            <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            />
            <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous"
            />
            <link rel="stylesheet" href="dist/style.css"/>
        </head>
        <body>
            <header>
                <div class="jumbotron jumbotron-fluid" style="background:rgb(222, 83, 83)">
                    <div class="container">
                    <h1 class="display-4 style="text-align: center; color: white;"">My Team</h1>
                    </div>
                </div>
            </header>
            <div class="container">
                <div class="row just-content-center">
                    
                ${fullTeam}
                
                </div>
            </div>
        </body>
        </html>
    `
}


module.exports = createHTML;