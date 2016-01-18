# ChatApp
A Simple Chat App using MEAN

#### Idea
1. User goes to home page (http://example.com/).
2. User is asked to create a new chatroom (provide name and privacy settings).
3. User is given a link (http://example.com/12345/).
4. User shares link with any person he/she wants to chat with.

#### How it Works
Backend: NodeJS server + MongoDB database
Frontend: AngularJS

#### Database Schema
__chatRooms (collection)__

name | type        | required | default | unique
---- | ----------- | -------- | ------- | ------
_id  | ObjectID    |          |         |    
name | String      | true     |         |   
privacy  | Boolean | false    | false   |   
password | String  | false    |         |   
c_date   | Date    | true     |         |   
l_date   | Date    | true     |         |   

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
