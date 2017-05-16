import { Meteor } from 'meteor/meteor';
import '../imports/api/tasks.js';

ServiceConfiguration.configurations.remove({
    service: "facebook"
});

ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: '273845843064305',
    secret: '0b0eef12d4c3c15b66b47b9ffb36d356'
});

Meteor.startup(() => {
  // code to run on server at startup
});
