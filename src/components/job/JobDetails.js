import React from "react";

const JobDetails = () => {
  return (
    <div className="job-details-wrapper">
      <div className="container container-fluid">
        <div className="row">
          <div className="col-xl-9 col-lg-8">
            <div className="job-details p-3">
              <div className="job-header p-4">
                <h2>Java Developer Required</h2>
                <span>
                  <i aria-hidden className="fas fa-building"></i>
                  <span> Tech</span>
                </span>
                <span className="ml-4">
                  <i aria-hidden className="fas fa-map-marker-alt"></i>
                  <span> 721 Park Street</span>
                </span>

                <div className="mt-3">
                  <span>
                    <button className="btn btn-primary px-4 py-2 apply-btn">
                      Apply Now
                    </button>
                    <span className="ml-4 text-success">
                      <b>3</b> candidates has applied to this job.
                    </span>
                  </span>
                </div>
              </div>

              <div className="job-description mt-5">
                <h4>Description</h4>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </div>

              <div className="job-summary">
                <h4 className="mt-5 mb-4">Job Summary</h4>
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>Job Type</td>
                      <td>:</td>
                      <td>Permanent</td>
                    </tr>

                    <tr>
                      <td>Job Industry</td>
                      <td>:</td>
                      <td>IT</td>
                    </tr>

                    <tr>
                      <td>Expected Salary</td>
                      <td>:</td>
                      <td>$90000</td>
                    </tr>

                    <tr>
                      <td>Education</td>
                      <td>:</td>
                      <td>Masters</td>
                    </tr>

                    <tr>
                      <td>Experience</td>
                      <td>:</td>
                      <td>2 Years</td>
                    </tr>

                    <tr>
                      <td>Company</td>
                      <td>:</td>
                      <td>Tech</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="job-location">
                <h4 className="mt-5 mb-4">Job Location</h4>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-4">
            <div className="job-contact-details p-3">
              <h4 className="my-4">More Details</h4>
              <hr />
              <h5>Email Address:</h5>
              <p>test@gmail.com</p>

              <h5>Job Posted:</h5>
              <p>2 months ago</p>

              <h5>Last Date:</h5>
              <p>15-2-2022</p>
            </div>

            <div className="mt-5 p-0">
              <div className="alert alert-danger">
                <h5>Note:</h5>
                You can no longer apply to this job. This job is expired. Last
                date to apply for this job was: <b>15-2-2022</b>
                <br /> Checkout others job on Jobbee.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
