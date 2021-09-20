//Random User Generator script
const selectUserNumber = document.querySelector("#users");
const randomFolks = document.querySelector(".random-peeps");

//Getting data from API
const getData = async function (numUsers) {
    const usersRequest = await fetch(`https://randomuser.me/api?gender=female&results=${numUsers}`
        ); //limiting results to only 5
    const data = await usersRequest.json();
    //console.log(data);

    const userResults = data.results;
    console.log(userResults);
    displayUsers(userResults);
};

getData(1);

const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";

    for (let user of userResults) {
        const country = user.location.country;
        const name = user.name.first;
        const imageUrl = user.picture.medium;
        //create a new div for each user
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${country}</p>
        <img src=${imageUrl} alt="User avatar" />
        `;
        randomFolks.append(userDiv); //add user data to the random-peeps class
    }
};

selectUserNumber.addEventListener("change", function(e) {
    const numUsers = e.target.value;
    getData(numUsers);
});