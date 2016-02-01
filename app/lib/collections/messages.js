messageSchema = new SimpleSchema({
    chatRoom_id: {
        type: String,
        label: "<<chatRoom_id>>",
        regEx: SimpleSchema.RegEx.Id
    },
    sender_id: {
        type: String,
        label: "<<sender_id>",
        regEx: SimpleSchema.RegEx.Id
    },
    message: {
        type: String,
        label: "<<text>>"
    },
    time: {
        type: Date,
        label: "<<time>>"
    },
    seen: {
        type: Boolean,
        label: "<<seen>>",
        optional: true,
        defaultValue: false
    }
});

messages = new Mongo.Collection("messages");
messages.attachSchema(messageSchema);
