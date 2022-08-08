import React from "react";

class AddComponent extends React.Component {
  state = {
    jobName: "",
    salary: "",
  };

  handleJobName = (event) => {
    this.setState({
      jobName: event.target.value,
    });
  };
  handleSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNewJob({
      id: Math.floor(Math.random() * 1001),
      jobName: this.state.jobName,
      salary: this.state.salary,
    });
    // Tạo ô input rỗng sau khi submit
    this.setState({
      jobName: "",
      salary: "",
    });
  };
  render() {
    return (
      <>
        <div>ADD COMPONENT</div>
        <form action="/action_page.php">
          <label htmlFor="fname">Job Name:</label>
          <br />
          <input
            type="text"
            value={this.state.jobName}
            onChange={(event) => this.handleJobName(event)}
          />
          <br />
          <label htmlFor="lname">Salary:</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleSalary(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
      </>
    );
  }
}

export default AddComponent;
