Router.configure({
    layoutTemplate: 'MasterLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound'
});

Router.route('/', function() {
    if (!Meteor.userId()) {
        Router.go('/login');
    } else {
        Router.go('/chatHistory/');
    }
}, {
    where: 'client'
});

Router.route('/dummy', {
    where: 'client',
    subscriptions: function() {
        return [Meteor.subscribe('userProfile'), Meteor.subscribe('chatRoom', "J6b52obidC2g3SJf4")];
    }
})

// Router.route('/contacts', {
//     name: 'contacts',
//     where: 'client',
//     subscriptions: function() {
//         return [Meteor.subscribe('userProfile'), Meteor.subscribe('contacts')];
//     }
// });

Router.route('/chatHistory', {
    name: 'chatHistory',
    where: 'client',
    subscriptions: function() {
        return [Meteor.subscribe('userProfile'), Meteor.subscribe('chatHistory')];
    }
});

Router.route('/chatRoom/:chatRoom_id', {
    name: 'chatRoom',
    where: 'client',
    subscriptions: function() {
        return [Meteor.subscribe('userProfile'), Meteor.subscribe('chatRoom', this.params.chatRoom_id)];
    }
});

// Router.route('/settings', {
//     name: 'settings',
//     where: 'client'
// });

// Accounts Templates Below

AccountsTemplates.configureRoute('signIn', {
    path: '/login',
    redirect: function() {
        var user = Meteor.user();
        if (user) {
            Router.go('/chatHistory/');
        }
    }
});

AccountsTemplates.configureRoute('signUp', {
    path: '/register',
    redirect: function() {
        var user = Meteor.user();
        if (user) {
            Roles.addUsersToRoles(user._id, ['user'], Roles.GLOBAL_GROUP);
            Router.go('/chatHistory/');
        }
    }
});

AccountsTemplates.configure({
    homeRoutePath: '/'
});
