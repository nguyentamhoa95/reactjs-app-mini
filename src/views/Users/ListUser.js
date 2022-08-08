import React from "react";
import axios from "axios";
import "./ListUser.scss";
import { withRouter } from "react-router-dom";
class ListUser extends React.Component {
  state = {
    listUser: [],
  };
  // sau khi component render lần đầu, nó sẽ chạy vào hàm này
  async componentDidMount() {
    // Promise
    // axios.get("https://reqres.in/api/users?page=2").then((res) => {
    //   console.log(res.data.data);
    // });
    // Async, Await
    let res = await axios.get("https://reqres.in/api/users?page=2");
    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  handleViewDetailUs = (user) => {
    this.props.history.push(`/user/${user.id}`);
  };
  render() {
    let { listUser } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">Fetch all list user</div>
        <div className="list-user-content">
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div
                  className="child"
                  key={item.id}
                  onClick={() => this.handleViewDetailUs(item)}
                >
                  {index + 1} - {item.first_name} {item.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
