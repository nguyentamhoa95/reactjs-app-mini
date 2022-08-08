import React from "react";

class ChildComponent extends React.Component {
  state = {
    showJob: false,
  };
  handleShowHide = () => {
    this.setState({
      showJob: !this.state.showJob,
    });
  };
  handleDelete = (job) => {
    this.props.deleteJob(job);
  };
  render() {
    let { arrJob } = this.props;
    let { showJob } = this.state;
    return (
      <>
        {showJob === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="Job List">
              {arrJob.map((job) => {
                return (
                  <div key={job.id}>
                    {job.jobName} - {job.salary} $ <></>{" "}
                    <span onClick={() => this.handleDelete(job)}>x</span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponent;
