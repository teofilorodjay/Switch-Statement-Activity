let dayOfWeek = prompt("Enter a day of the week:");
switch (dayOfWeek.toLowerCase()) { 
    case "monday":
        console.log("Your task for Monday is: Go to School");
        break;
    case "tuesday":
        console.log("Your task for Tuesday is: Pass your Activity");
        break;
    case "wednesday":
        console.log("Your task for Wednesday is: Work on your Group Project");
        break;
    case "thursday":
        console.log("Your task for Thursday is: Attend your Online Class");
        break; 
    case "friday":
        console.log("Your task for Friday is: Enjoy your Weekend");
        break;
    default:
        console.log("Invalid day of the week");
}
