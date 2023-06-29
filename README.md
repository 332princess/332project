# 332project

## To start
```shell
cd client
npm i
npm start
```
```shell
cd server
npm i
npm start
```

server쪽 .env 예시

NODE_ENV=development
PORT=8081
LOGGER_LEVEL=debug

DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=332project
DB_ID=root
DB_PASS=a123
DB_DIALECT=mysql

JWT_SECRET_KEY=24432646294A404E635166546A576E5A7234753778214125442A472D4B615064

.env를 삽입해주어야 가능하다.


client쪽 .env 는
REACT_APP_API_KEY= {youtube data API v3 에서 발급 받은 개인 키}

## What We Used
| Front | Back |
| --- | --- |
| React | NodeJS |
| styled-components | express |
| react-cookie | jwt |
| react-router-dom | MySQL |

## Who We are
Kim HyeJi : leader(maybe reader) + Front-end(60%) + Back-end(15%)<br/>
Lee KangWoo: Front-end(15%) + Back-end(70%)<br/>
Yoon Taeyoung: Front(15%) + Back-end(15%) (only been learning for a week)<br/>

Front-end 10% is gone~!

## This Proj is ...
User + Song + Chat(yet)<br/>
We still develop Song Service..<br/>
User can SignUp and Login to our site.<br/>
And if you click a button "song", you can be recommended some songs.<br/>
You can also add it to your playlist or liked.<br/>
Whenevr you want to listen them, just press MyPage - liked or playlist.<br/>
Playlist is literally a playlist.<br/>
liked is a function that matches the chat room with someone who has the same preference as you.(yet)<br/>

### Next Time
We'll refactoring this code first, and then we have to rebuild the component structure.<br/>
We will try to achieve our goals(Chatting, connecting server without errors, etc...)<br/><br/>
If We handle all of these, i'll probably write this README....<br/>
