var database = firebase.database().ref();

//called when successful user log in
function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    //change userName text, img source, & email text based on profile
    $("h1").text("Welcome, " + profile.getName());
    // $("img").attr("src", profile.getImageUrl());
    // $(".email").text(profile.getEmail());
}

//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        //setting back to default
        $("h1").text("Welcome");
        // $("img").attr("src", "assets/placeholder.png");
        // $(".email").text("example@example.com");
    });
}
//button executes this function
function updateDB() {
    var uname = $("#uname").val();
    var psw = $("#psw").val();
    console.log(uname + " : " + psw);

    //Update database here

    var value = {
        UNAME: uname,
        PSW: psw
    }
    database.push(value)
    window.location.href = 'http://localhost:5500/Album%20example%20for%20Bootstrap.html';
}
database.on("child_added", function (rowData) {
    var row = rowData.val();
    var uname = row.UNAME;
    // var message = row.MESSAGE;
    // var fullText = "<p>" + uname + ":" +  + "</p>";
    $("h1").text("Welcome " + uname);
})

// api key AIzaSyBnKVBFE7coxdYN9yD8r-ZOpv2QJjHcmgY