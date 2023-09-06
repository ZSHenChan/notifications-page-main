let numOfNotifications = document.getElementById("numOfUnreadNotifications");
var numOfNotifications_tracking = 7;


function changeNotificationCount(value){
    if (value==0){
        numOfNotifications_tracking = 0;
        numOfNotifications.style.display = "none";
    }else if (value>0){
        numOfNotifications.style.display = "flex";
        numOfNotifications.innerHTML = value;
    }
}

function clearNotifications(){
    changeNotificationCount(0);

    let allNotifications = document.querySelectorAll(".message");
    allNotifications.forEach(msg => {
        msg.style.backgroundColor = "transparent";
    })

    let allRedDot = document.querySelectorAll(".redDot");
    allRedDot.forEach(redDot => {
        redDot.style.display = "none";
    })
}

function readNotification(index){
    let doc_str = "notification-"+String(index);
    let notificationBox = document.getElementById("notification-"+String(index));
    notificationBox.style.backgroundColor = "transparent";

    let redDot = document.getElementById("redDot-"+String(index));
    redDot.style.display="none";

    changeNotificationCount(--numOfNotifications_tracking);
}   