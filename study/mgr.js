define(['managerAPI', 'https://cdn.jsdelivr.net/gh/minnojs/minnojs-pavlovia/minnojs.pavlovia.plugin.min.js'], function(Manager, Pavlovia){
    var pavlovia = new Pavlovia();
API.addSettings('logger', pavlovia.logger);

    API.addSequence([
        {
            type: 'message',
            keys: ' ',
            template:'Hello World (please click space to proceed)'
        },
        {
            name:'my-quest',
            type:'quest', 
            scriptUrl:'quest.js'
        },
        {
            name:'my-time',
            type:'time', 
            scriptUrl:'time.js',
        },

        // this is needed only if you want to post before the end of the study
        { type:'postCsv', load: console.log },
        {
            type: 'message',
            template:'Debriefing page or something'
        }
    ]);

    return API.script;
});
