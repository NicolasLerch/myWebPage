document.addEventListener('DOMContentLoaded', function() {
    const noLive = document.querySelectorAll(".noLive")

        for(let button of noLive){
            button.addEventListener('click', function(e){
                e.preventDefault();
                alert("This project doesn't have a live version yet")
            })
        }
})