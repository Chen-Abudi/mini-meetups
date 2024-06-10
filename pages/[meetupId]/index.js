// import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://images.unsplash.com/photo-1588007789786-3313bc8a0016?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="First Meetup"
      address="Some Street 5, Some City"
      description="This is a first meetup"
    />
    // <Fragment>
    //   <img
    //     src="https://images.unsplash.com/photo-1588007789786-3313bc8a0016?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     alt="A First Meetup"
    //   />
    //   <h1>A First Meetup</h1>
    //   <address>Some Street 5, Some City</address>
    //   <p>Meetup Description</p>
    // </Fragment>
  );
}

export default MeetupDetails;
