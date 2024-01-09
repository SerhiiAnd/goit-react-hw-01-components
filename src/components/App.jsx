// import user from './DataJson/user.json';
// import data from '.DataJson/data.json';
// import friends from '.DataJson/friends';
// import transactions from '.DataJson/transactions';
// import { Profile } from './Profile/Profile';
// import { Statistics } from './Statistics/Statistics';
// import { FriendList } from './FriendList/FriendList';
// import { TransactionHistory } from './TransactionHistory/TransactionHistory';

// export const App = () => {
//   return (
//     <>
//       <Profile user={user} />
//       <Statistics title="Upload stats" data={data} />
//       <Statistics data={data} />
//       <FriendList friends={friends} />
//       <TransactionHistory transactions={transactions} />
//     </>
//   );
// };

import user from './DataJson/user.json';
import { Profile } from './Profile/Profile';
import data from './DataJson/data.json';
import { Statistics } from './Statistics/Statistics';
// import friends from './FriendList/friends.json';
// import { FriendList } from './FriendList/FriendList';
// import transactions from './TransactionsHistory/transactions.json';
// import { TransactionsHistory } from './TransactionsHistory/TransactionsHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {/* <FriendList friends={friends} />
      <TransactionsHistory transactions={transactions} /> */}
    </div>
  );
};
