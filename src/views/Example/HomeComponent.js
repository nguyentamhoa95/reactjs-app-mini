import React from "react";
import logo from "../../assets/images/cat.jpg";
import { connect } from "react-redux";
class Home extends React.Component {
  handleDeleteUser = (user) => {
    console.log("user :", user);
  };
  render() {
    let listUser = this.props.dataRedux;
    console.log(">>>> console.log data : ", this.props.dataRedux);
    return (
      <>
        <div>Home Page</div>
        <div>
          <img
            src={logo}
            alt="cat"
            style={{
              width: "200px",
              height: "200px",
              marginTop: "20px",
              objectFit: "cover",
              objectPosition: "5px 60%",
              borderRadius: "50%",
            }}
          />
        </div>
        <div>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name}{" "}
                  <span onClick={() => this.handleDeleteUser(item)}>x</span>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}
// export default withRouter(Home);
const mapStateProps = (state) => {
  // cái state truyền vào này là state của Redux, chính là state trong component rootReducer
  return { dataRedux: state.users };
};

export default connect(mapStateProps)(Home);
