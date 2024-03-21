function adAstra (input){
    let string = input.shift();
    let list = [];
    let pattern = /([|#])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g
    let totalCal = 0
    let regex = pattern.exec(string);
    while (regex) {
        list.push({ item: regex[2], day: regex[3], cal: regex[4] });
        totalCal += Number(regex[4])
        regex = pattern.exec(string);
    }
    console.log(`You have food to last you for: ${Math.floor(totalCal / 2000)} days!`);
    for (let i = 0; i < list.length; i++) {
        console.log(`Item: ${list[i].item}, Best before: ${list[i].day}, Nutrition: ${list[i].cal}`);
    }
  }
adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);