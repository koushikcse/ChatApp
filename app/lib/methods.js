if (Meteor.isClient) {
    chatRoom = new Mongo.Collection("chatRoom");
    user_profiles = new Mongo.Collection("user_profiles");
}



/*****************************************************************************/
/*  Client and Server Methods */
/*****************************************************************************/

Meteor.methods({
    "insertDummyData": function() {
        if (Meteor.isServer) {
            // userProfiles.insert({
            //     "_id": "ec83Jva5qZJe4QNS4",
            //     "name": "Soubhik Mondal"
            // });
            // userProfiles.insert({
            //     "_id": "ZKFBuKqnMmZ2Fh6qk",
            //     "name": "Koushik Mondal"
            // });
            // userProfiles.insert({
            //     "_id": "uhQmjnsHyaXwnTKxg",
            //     "name": "Shawon Kanji"
            // });

            // var cr_id = chatRooms.insert({
            //     "member_list": ["ec83Jva5qZJe4QNS4", "ZKFBuKqnMmZ2Fh6qk", "uhQmjnsHyaXwnTKxg"],
            //     "member_count": 3,
            //     "group_name": "GROUP"
            // });

            // messages.insert({
            //     "chatRoom_id": cr_id,
            //     "sender_id": "uhQmjnsHyaXwnTKxg",
            //     "message": "Hello",
            //     "time": (new Date()).toISOString(),
            //     "seen": true
            // });

            // messages.insert({
            //     "chatRoom_id": cr_id,
            //     "sender_id": "ec83Jva5qZJe4QNS4",
            //     "message": "Hi",
            //     "time": (new Date()).toISOString(),
            //     "seen": true
            // });

            // messages.insert({
            //     "chatRoom_id": cr_id,
            //     "sender_id": "uhQmjnsHyaXwnTKxg",
            //     "message": "Hello",
            //     "time": (new Date()).toISOString(),
            //     "seen": true
            // });

            // messages.insert({
            //     "chatRoom_id": cr_id,
            //     "sender_id": "ZKFBuKqnMmZ2Fh6qk",
            //     "message": "Hello",
            //     "time": (new Date()).toISOString(),
            //     "seen": true
            // });

            // messages.insert({
            //     "chatRoom_id": cr_id,
            //     "sender_id": "ec83Jva5qZJe4QNS4",
            //     "message": "Hi",
            //     "time": (new Date()).toISOString(),
            //     "seen": true
            // });

            // messages.insert({
            //     "chatRoom_id": cr_id,
            //     "sender_id": "uhQmjnsHyaXwnTKxg",
            //     "message": "Hello",
            //     "time": (new Date()).toISOString(),
            //     "seen": true
            // });

            // var msg_id = messages.insert({
            //     "chatRoom_id": cr_id,
            //     "sender_id": "ZKFBuKqnMmZ2Fh6qk",
            //     "message": "Hello",
            //     "time": (new Date()).toISOString(),
            //     "seen": true
            // });

            // chatRooms.update({
            //     "_id": cr_id
            // }, {
            //     "$set": {
            //         "last_message_id": msg_id
            //     }
            // });
        }
    }
});
