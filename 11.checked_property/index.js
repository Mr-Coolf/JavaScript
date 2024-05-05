const myCheckBox = document.getElementById("myCheckbox")
const youtubeBtn = document.getElementById("myYoutubeBtn")
const twitchBtn = document.getElementById("myTwitchBtn")
const InstagramBtn = document.getElementById("myInstagramBtn")
const submitBtn = document.getElementById("mySubmit")
const myPSub = document.getElementById("myPSub")
const myPPlatform = document.getElementById("myPPlatform")


submitBtn.onclick = function() {
    if(myCheckBox.checked){
        myPSub.textContent = "You are subscribed";
        if(youtubeBtn.checked) {
            myPPlatform.textContent = "You are subscribed on Youtube";
        }
        else if(twitchBtn.checked) {
            myPPlatform.textContent = "You are subscribed on Twitch";
        }
        else if(InstagramBtn.checked){
            myPPlatform.textContent = "You are subscribed on Instagram";
        }
        else {
            
            myPPlatform.textContent = "";
        }
    }
    else{
        myPSub.textContent = "You are not subscribed";
        myPPlatform.textContent = "";
    }
}