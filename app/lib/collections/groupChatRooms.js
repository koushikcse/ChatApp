// groupChatRoomSchema = new SimpleSchema({
//     member_list: {
//         type: [String],
//         label: "<<member_list>>",
//         regEx: SimpleSchema.RegEx.Id,
//         minCount: 2,
//         maxCount: 100
//     },
//     member_count: {
//         type: Number,
//         label: "<<member_count>>",
//         min: 2,
//         max: 100
//     },
//     last_message_id: {
//         type: String,
//         label: "<<last_message_id>>",
//         regEx: SimpleSchema.RegEx.Id,
//         optional: true
//     },
//     group_name: {
//         type: String,
//         label: "<<group_name>>"
//     },
//     group_img_path: {
//         type: String,
//         label: "<<group_img_path>>",
//         optional: true,
//         defaultValue: "/img/group.png"
//     }
// });

// groupChatRooms = new Mongo.Collection("groupChatRooms");
// groupChatRooms.attachSchema(groupChatRoomSchema);
