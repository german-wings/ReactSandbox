let homeScoreBanner = document.getElementById("home-score-banner");
let guestScoreBanner = document.getElementById("guest-score-banner");
let leadsBanner = document.getElementById("leads-display-banner")


function addHomePoints(event){
    selectedPoints = event.srcElement.innerText;
    currentScore = parseInt(homeScoreBanner.innerText)
    switch(selectedPoints){
        case "+1":
            currentScore+=1;
            break
        case "+2":
            currentScore+=2;
            break
        case "+3":
            currentScore+=3;
            break
        default:
            currentScore = currentScore;
    }
    homeScoreBanner.innerText = currentScore;
    updateLeadBanner()
}

function addGuestPoints(event){
    selectedPoints = event.srcElement.innerText;
    currentScore = parseInt(guestScoreBanner.innerText)
    switch(selectedPoints){
        case "+1":
            currentScore+=1;
            break
        case "+2":
            currentScore+=2;
            break
        case "+3":
            currentScore+=3;
            break
        default:
            currentScore = currentScore;
    }
    guestScoreBanner.innerText = currentScore;
    updateLeadBanner()
}


function updateLeadBanner(){
    homeScore = parseInt(homeScoreBanner.innerText);
    guestScore = parseInt(guestScoreBanner.innerText);

    homeScore.textContent = 10;

    if(homeScore > guestScore){
        leadsBanner.textContent = "Team Avionics Architect leading"
    }

    else if(homeScore < guestScore){
        leadsBanner.textContent = "Team German Wings Leading.."
    }

    else{
        leadsBanner.textContent = "Equalizing.."
    }
}

updateLeadBanner()