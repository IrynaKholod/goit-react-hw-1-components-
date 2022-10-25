import css from './App.module.css';
import { Profile } from './profile/profile';
import { Statistics } from './Statistics/Statistic';
import { Friends } from './FriendList/FriendList';
import { TransactionHistory} from './TransactionHistory/TransitinHistory';


import user from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json'


export const App = () => {
  return (
    <div className={css.App}>
    <Profile 
      avatar={user.avatar}
      username={user.username} 
      tag={user.tag} 
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}/>
      <Statistics title="Upload stats" stats={data} />
      <Friends  frends = {friends}/>
      <TransactionHistory items={transactions} />
    </div>
    
  );
};
