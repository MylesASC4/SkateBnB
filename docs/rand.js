$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        var person = data.results[0];
        var firstName = person.name.first;
        var mail = person.email;
        var profilePic = person.picture.large;
        console.log("Contact me at, " + mail)

        $(".img-responsive").append("<img src=" + profilePic + ">")
        $(".panel-title pull-left").append("<span>" + firstName + "</span>")
        $(".email").append("<small>" + mail + "</small>")
        // $(".col-md-7").text(firstName)
        // $(".user-name").text(firstName)

    }
});