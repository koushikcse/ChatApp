ChatApp
=======
Chat App (templatized package) using Meteor

Database Schema
---------------
__chatRooms (collection)__

name | type | optional | default | unique
---- | ---- | -------- | ------- | ------
_id  | ObjectID | | |
chatRoom_name | String | true | |
chatRoom_img | String | true | |
user_count | Number | | |
user_list | [ObjectID] | | |

lastText
lastTextSender // Only for group chat, except current user
lastTextTime

lastSeen // If 
seen // If sender is current user


__members (collection)__

name | type        | required | default | unique
---- | ----------- | -------- | ------- | ------
_id  | ObjectID    |          |         |    
chatRoom_id | Pointer (chatRooms)| true |         |   
username | String  | true     |         | true (for each chatRoom_id)  

__chats (collection)__

name | type        | required | default | unique
---- | ----------- | -------- | ------- | ------
_id  | ObjectID    |          |         |    
chatRoom_id | Pointer (chatRooms)| true |         |   
member_id | Pointer (members)| true     |         |   
c_date | Date  | true     |         |   
text | String  | true     |         |   
