import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
//
class MyComponents extends React.Component {
  state = {
    arrJob: [
      {
        id: 1,
        jobName: "Java",
        salary: "400",
      },
      {
        id: 2,
        jobName: "PHH",
        salary: "800",
      },
      {
        id: 3,
        jobName: "JS",
        salary: "1000",
      },
    ],
  };
  addNewJob = (job) => {
    this.setState({
      arrJob: [...this.state.arrJob, job],
    });
  };
  deleteJob = (job) => {
    let currentJob = this.state.arrJob;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJob: currentJob,
    });
  };
  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent arrJob={this.state.arrJob} deleteJob={this.deleteJob} />
      </>
    );
  }
}

export default MyComponents;
