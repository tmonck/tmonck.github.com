const currentDate = new Date();
const myBirthDate = new Date(86,3,30);
const myAge = (currentDate - myBirthDate)/(1000*60*60*24*365);
['C#', 'Javascript', 'Typescript', 'Python', 'Java'].forEach(function(language, index) {
    if (index === programmingLanguages.length - 1){
        document.getElementById("prgLang").innerHTML += `and ${language}`;
    } else {
        document.getElementById("prgLang").innerHTML += `${language}, `;
    }
});

document.getElementById("myAge").innerHTML = myAge.toFixed(0);
document.getElementById("oldestAge").innerHTML = oldest.toFixed(0);
document.getElementById("youngestAge").innerHTML = youngest.toFixed(0);
document.getElementById("numOfPrgLang").innerHTML = programmingLanguages.length;
