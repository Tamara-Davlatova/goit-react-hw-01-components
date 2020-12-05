import user from './Components/Profile/user.json';
import Profile from './Components/Profile/Profile';

import Statistics from './Components/Statistics/Statistics';
import statisticalData from './Components/Statistics/statistical-data.json';

import friends from './Components/FriendList/friends.json';
import FriendList from './Components/FriendList/FriendList';

import transactions from './Components/TransactionHistory/transactions.json';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
