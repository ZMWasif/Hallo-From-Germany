import React from "react";
import { Accordion } from "react-bootstrap";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-container">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header className="text-white accordion-header">
            Difference between authorization and authentication
          </Accordion.Header>
          <Accordion.Body className="text-white accordion-body">
            Authentication is the process of verifying who someone is, whereas
            authorization is the process of verifying what specific
            applications, files, and data a user has access to. Authentication
            and authorization accomplish these same goals. Authentication is
            used to verify that users really are who they represent themselves
            to be. Once this has been confirmed, authorization is then used to
            grant the user permission to access different levels of information
            and perform specific functions, depending on the rules established
            for different types of users.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Accordion.Header>
          <Accordion.Body className="text-white accordion-body">
            Firebase Authentication provides backend services, easy-to-use SDKs,
            and ready-made UI libraries to authenticate users to our app. It
            supports authentication using passwords, phone numbers, popular
            federated identity providers like Google, Facebook and Twitter, and
            more. Other ways to authenticate can be through cards, retina scans,
            voice recognition, and fingerprints.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What other services does firebase provide other than authentication?
          </Accordion.Header>
          <Accordion.Body className="text-white accordion-body">
            Firebase is a full package that can help in developing our mobile or
            web applications faster with fewer resources and more efficiency.
            Now, let’s look at some of the services and use of it. There are
            many services which Firebase provides, Most useful of them are:
            Cloud Firestore, Cloud Functions, Authentication, Hosting, Cloud
            Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic
            Links, Remote Config etc.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
