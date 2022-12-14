"use strict";

(() => {
    const getMostRecentCommit = (username) => {

        fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token ${gitHubKey}`}})
            .then(resp => {
                //console.log(resp);
                return resp.json();
            }).then(events => {
            console.log(events);

            let pushEvents = events.filter(event => event.type === "PushEvent");
            console.log(pushEvents[0].created_at);
        });
    }

    getMostRecentCommit("APerezOchoa");

})(); //IIFE CLOSE