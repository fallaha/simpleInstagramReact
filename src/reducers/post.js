import Faker from 'faker';

let initializeState = {
    isLiked: false,
    image: "https://instagram.fmct3-2.fna.fbcdn.net/v/t51.2885-15/e35/123523748_2706186416265399_644646357117894364_n.jpg?_nc_ht=instagram.fmct3-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=YRCrHafkpBIAX-cJSrT&tp=18&oh=3636d547b6623dd40afc4cc672f2017c&oe=5FCED1E5",
    caption: "First Post",
    comments : [{text: "great!", isLiked: false,likeCount: 1,time:Math.round((new Date()).getTime() / 1000) - Math.floor(Math.random()*3600),user:{username: Faker.internet.userName(),avatar: Faker.internet.avatar(),isFollowing: false}}],
    user : {username: Faker.internet.userName(),avatar: Faker.internet.avatar(),isFollowing: false},
    time: Math.round((new Date()).getTime() / 1000),
}

export default (state=initializeState, action) => {
    if (action.type === "SEND_COMMENT"){
        let newState = {...state};
        let commentText = action.payload.text;
        newState.comments.push({text: commentText, isLiked: false,likeCount: 1,time:Math.round((new Date()).getTime() / 1000) - Math.floor(Math.random()*3600),user:{username: Faker.internet.userName(),avatar: Faker.internet.avatar(),isFollowing: false}});
        return newState;
    }
    return state;
}