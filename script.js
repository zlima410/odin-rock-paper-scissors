function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;

    switch (choice) {
        case 1: 
            console.log("Rock");
            break;

        case 2:
            console.log("Paper");
            break;

        case 3:
            console.log("Scissors");
            break;
    }
}