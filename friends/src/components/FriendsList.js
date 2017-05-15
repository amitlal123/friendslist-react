import React, {Component} from 'react';
import './friendslist.css';
import Friend from './Friend.js';
import friends from './friends.js';

class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      orderBy: 'name',
      order: 'ascending'
    }
  }

  handleChange(field, event) {
    this.setState({[field]: event.target.value});
  }

  render() {

    const friendsListItems = friends
    .filter(eachFriend => eachFriend.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1)
    .sort((a, b) => a[this.state.orderBy] > b[this.state.orderBy])
    .map(eachFriend => {
      return (
        <Friend
          currentLocation={eachFriend.current_location || {} }
          friendCount={eachFriend.friend_count}
          name={eachFriend.name}
          picUrl={eachFriend.pic_square}
          status={eachFriend.status ? eachFriend.status.message : ""}
          key={eachFriend.$$hashKey}
        />
      );
    });

    const displayFriends = this.state.orderBy === 'ascending' ? friendsListItems : friendsListItems.slice().reverse();

    return (
      <div>
        <form className="form-inline searchForm" role="form">
            <div className="form-group">
              <input className="form-control" placeholder="Search For Friends" value={this.state.searchText} onChange={this.handleChange.bind(this, 'searchText')} />
              <select className="input-medium" value={this.state.orderBy} onChange={this.handleChange.bind(this, 'orderBy')}>
                  <option value="name">Name</option>
                  <option value="friend-count">#Friends</option>
              </select>
              <select className="input-medium" value={this.state.order} onChange={this.handleChange.bind(this, 'order')}>
                  <option value="descending">Descending</option>
                  <option value="ascending">Ascending</option>
              </select>
            </div>
        </form>

        <ul className="friendList">
          {displayFriends}
        </ul>
      </div>
    );
  }
}
export default FriendsList;
