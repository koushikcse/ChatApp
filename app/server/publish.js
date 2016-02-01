Meteor.publish('userProfile', function() {
    return userProfiles.find({
        _id: this.userId
    }, {
        limit: 1
    });
});

// Meteor.publish('contacts', function() {
//     // TO DO return all contacts data belonging to user
// });

Meteor.publishComposite('chatHistory', {
    // TO DO return all chatRoom data where user is a member

    find: function() { // Find all chat rooms where user is a member
        return chatRooms.find({
            member_list: {
                $in: [this.userId]
            }
        });
    },
    children: [{
        find: function(chatRoom) { // Find last message details (sender_id, text, time, seen) of each chat room
            return messages.find({
                _id: chatRoom.last_message_id
            }, {
                limit: 1
            });
        },
        children: [{
            collectionName: 'user_profiles',
            find: function(message, chatRoom) { // Find sender details (name) of last message of each chat room
                return userProfiles.find({
                    _id: message.sender_id
                }, {
                    limit: 1
                });
            }
        }]
    }]
});

Meteor.publishComposite('chatRoom', function(chatRoom_id) {
    // TO DO return chatRoom data + all messages data belonging to the chatRoom
    return {
        find: function() { // Find chatRoom where ID is chatRoom_id
            return chatRooms.find({
                _id: chatRoom_id
            }, {
                limit: 1
            });
        },
        children: [{
            find: function(chatRoom) { // Find all messages belonging to that chatRoom
                return messages.find({
                    chatRoom_id: chatRoom_id
                });
            },
            children: [{
                collectionName: 'user_profiles',
                find: function(message, chatRoom) { // Find all user profiles belonging to that chatRoom
                    return userProfiles.find({
                        _id: message.sender_id
                    });
                }
            }]
        }]
    };
});
