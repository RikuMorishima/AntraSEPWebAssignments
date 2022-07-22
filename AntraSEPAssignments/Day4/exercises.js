
function ex1() {
    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    };

    let sum = 0;
    Object.entries(salaries).forEach(item =>{
        sum+=item[1];
    });
    console.log("Exercise 1: sum = " + sum);
    return sum;
}

function ex2() {
    let menu = {
        width: 200, 
        height: 300,
        title: "My menu"
    };

    multiplyNumeric(menu);
    console.log(menu);
}


function multiplyNumeric(m) {
    Object.entries(m).forEach(item =>{
        if (typeof(item[1])==typeof(1)) {
            m[item[0]] =item[1]*2;
        }
    });
}

function ex3() {
    console.log(checkEmailId("rikum@gmail.com") == true);
    console.log(checkEmailId("riku.morishima@gmail.com" )== false);
    console.log(checkEmailId("riku@riku@gmail.com") == false);
    console.log(checkEmailId("riku@.com") == false);
}

function checkEmailId(str) {
    let splitAtmark = str.split("@");
    // There should be two parts
    if (splitAtmark.length != 2) {
        return false;
    } 
    let splitPeriodBefore = splitAtmark[0].split(".");
    
    // due to constraints of exercise, there should be no period
    // before @
    if (splitPeriodBefore.length != 1) {
        return false;
    }

    // return false if there is no period or if 
    // there is no character between @ and .

    let splitPeriodAfter = splitAtmark[1].split(".");
    if (splitPeriodAfter.length < 2 || splitPeriodAfter[0].length==0) {
        return false;
    }

    // reaching up to this point means that it is valid
    return true;

}

function ex4() {
    console.log(truncate("What I'd like to tell on this topic is:", 20));
    console.log(truncate("Hi everyone!", 20));
}

function truncate(str,maxlength) {
    if (str.length <=maxlength) {
        return str;
    }

    let substring = str.substr(0,maxlength-1);
    return substring + "…";
}

function ex5() {
    let styles = ["James","Brennie"];
    console.log(styles);

    styles.push("Robert");
    console.log(styles);

    styles[Math.floor(styles.length / 2)] = "Calvin";
    console.log(styles);

    let firstValue = styles.shift();
    console.log(styles);
    
    styles.unshift("Rose","Regal");
    console.log(styles);

    console.log("Value of the first element removed with shift: " + firstValue);

}