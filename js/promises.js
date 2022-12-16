"use strict";

(() => {

    let dateShort;
    const getMostRecentCommit = (username) => {

        fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token ${gitHubKey}`}})
            .then(resp => {
                //console.log(resp);
                return resp.json();
            }).then(events => {
            //console.log(events);

            let pushEvents = events.filter(event => event.type === "PushEvent");
            //console.log(pushEvents[0].created_at);
            dateShort = pushEvents[0].created_at;
            console.log("The most recent commit was on: " + dateShort.slice(0,10));
        });
    }

    getMostRecentCommit("APerezOchoa");

    const wait = (number) => {
        setTimeout(() => {
            console.log('You\'ll see this after ' + number +' miliseconds');
        },number);
    };
    wait(3000);

})(); //IIFE CLOSE