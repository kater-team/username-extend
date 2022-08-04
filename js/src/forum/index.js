import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import UserCard from "flarum/common/components/UserCard"

app.initializers.add('kater/username-extend', () => {
  console.log('[kater/username-extend] Hello, forum!');
  extend(UserCard.prototype, 'infoItems', function (rt) {
    // console.log("infoItems", rt)
    rt.add("usernam", m("label", "@" + this.attrs.user.username()), 200)
  })
});
