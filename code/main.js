//When user clicks on the navigation id element, add class responsive to it. Otherwise; class is only navigation.
function navFunction(){  
        var navBar = document.getElementById("navigation");
        if (navBar.className === "navigation") {
            navBar.classList.add("responsive");
        } else {
            navBar.className = "navigation";
        }
    }
