userProfileSchema = new SimpleSchema({
    _id: {
        type: String,
        label: "<<user_id>>",
        regEx: SimpleSchema.RegEx.Id
    },
    name: {
        type: String,
        label: "<<name>>",
        regEx: /^([A-Za-z]|\s)+$/,
    },
    profile_img_path: {
        type: String,
        label: "<<profile_img_path>>",
        optional: true,
        defaultValue: "/img/user.png"
    }
});

userProfiles = new Mongo.Collection("userProfiles");
userProfiles.attachSchema(userProfileSchema);
