(this.webpackJsonpnft=this.webpackJsonpnft||[]).push([[0],{1:function(e,t,c){e.exports={container:"tweet_container__29zam",profileBox:"tweet_profileBox__1xYtU",textBox:"tweet_textBox__2s2_C",countBox:"tweet_countBox__2yA0A",retweetBox:"tweet_retweetBox__2nTTl",replyBox:"tweet_replyBox__3v4j1",likeBox:"tweet_likeBox__3TUty",quoteBox:"tweet_quoteBox__1cp0x",picture:"tweet_picture__2gz6P",name:"tweet_name__3E8jr",username:"tweet_username__33b6q",text:"tweet_text__3bz_q",retweetCount:"tweet_retweetCount__BRQaS",replyCount:"tweet_replyCount__1v3lM",likeCount:"tweet_likeCount__1SbFP",quoteCout:"tweet_quoteCout__24rcD"}},12:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),a=c(5),r=c.n(a),i=(c(12),c(4)),o=c.n(i),u=c(6),l=c(7),_=(c(14),c(1)),x=c.n(_),j=c(0),d=function(e){var t=e.data,c=e.users;return Object(j.jsxs)("div",{className:x.a.container,children:[Object(j.jsxs)("div",{className:x.a.profileBox,children:[Object(j.jsx)("img",{src:"https://pbs.twimg.com/profile_images/1422637130/mccigartrophy_400x400.jpg",alt:"profile-pic",className:x.a.picture}),Object(j.jsx)("div",{className:x.a.name,children:c[t.author_id].name}),Object(j.jsx)("div",{className:x.a.username,children:"@".concat(c[t.author_id].username)})]}),Object(j.jsx)("div",{className:x.a.textBox,children:Object(j.jsx)("span",{className:x.a.text,children:t.text})}),Object(j.jsxs)("div",{className:x.a.countBox,children:[Object(j.jsxs)("div",{className:x.a.retweetBox,children:["Retweet Count",Object(j.jsx)("div",{className:x.a.retweetCount,children:t.public_metrics.retweet_count})]}),Object(j.jsxs)("div",{className:x.a.replyBox,children:["Reply Count",Object(j.jsx)("div",{className:x.a.replyCount,children:t.public_metrics.reply_count})]}),Object(j.jsxs)("div",{className:x.a.likeBox,children:["Like Count",Object(j.jsx)("div",{className:x.a.likeCount,children:t.public_metrics.like_count})]}),Object(j.jsxs)("div",{className:x.a.quoteBox,children:["Quote Count",Object(j.jsx)("div",{className:x.a.quoteCount,children:t.public_metrics.quote_count})]})]})]})};var m=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),c=t[0],s=t[1];function a(){return(a=Object(u.a)(o.a.mark((function e(){var t,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://icecreampunk.herokuapp.com","/tweet"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n={},c.includes.users.forEach((function(e){n[e.id]={name:e.name,username:e.username}})),s({tweets:c.data,users:n});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)("header",{children:Object(j.jsx)("h1",{className:"neon_text",children:"ICECREAMPUNK"})}),Object(j.jsx)("article",{children:"Influencers' Tweets created in the last 7 days."}),Object(j.jsx)("button",{className:"getTweet",onClick:function(){return a.apply(this,arguments)},children:"Pull Data"}),Object(j.jsx)("div",{className:"container",children:c&&c.tweets.map((function(e){return Object(j.jsx)(d,{data:e,users:c.users},e.id)}))})]})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),s(e),a(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.66484e9d.chunk.js.map