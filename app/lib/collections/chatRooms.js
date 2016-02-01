/*
chatRoomSchema = new SimpleSchema({
    member_list: {
        type: [String],
        label: "<<member_list>>",
        regEx: SimpleSchema.RegEx.Id,
        minCount: 2,
        maxCount: 2
    },
    last_message_id: {
        type: String,
        label: "<<last_message_id>>",
        regEx: SimpleSchema.RegEx.Id,
        optional: true
    }
});

chatRooms = new Mongo.Collection("chatRooms");
chatRooms.attachSchema(chatRoomSchema);
*/

chatRoomSchema = new SimpleSchema({
    member_list: {
        type: [String],
        label: "<<member_list>>",
        regEx: SimpleSchema.RegEx.Id,
        minCount: 2,
        maxCount: 100
    },
    member_count: {
        type: Number,
        label: "<<member_count>>",
        min: 2,
        max: 100
    },
    last_message_id: {
        type: String,
        label: "<<last_message_id>>",
        regEx: SimpleSchema.RegEx.Id,
        optional: true
    },
    group_name: {
        type: String,
        label: "<<group_name>>",
        optional: true
    },
    group_img_path: {
        type: String,
        label: "<<group_img_path>>",
        optional: true
    }
});

chatRooms = new Mongo.Collection("chatRooms");
chatRooms.attachSchema(chatRoomSchema);
