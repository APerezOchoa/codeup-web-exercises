"use strict";

(() => {
    const getMostRecentCommit = (username) => {
        fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': `token ${gitHubKey}`}})
            .then(resp => {
                //console.log(resp);
                return resp.json();
            }).then(events => {
            console.log(events);
            // let eventTypes = events.map(event => event.type);
            // let mostRecent = eventTypes.indexOf("PushEvent");
            // console.log(events[mostRecent].created_at);
            // // ~~~~~~~~~
            // let pushEvents = events.filter(event => event.type === "PushEvent");
            // console.log(pushEvents[0].created_at);
            // // ~~~~~~~~~
            // for (let event of events) {
            //     if (event.type === "PushEvent") {
            //         console.log(event.created_at);
            //         break;
            //     }
            // }
        });
    }

    getMostRecentCommit("davidandstephens");

})(); //IIFE CLOSE