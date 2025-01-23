import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-header">
        <h2>Project Lifecycle</h2>
        <p>
          Every project follows a unique lifecycle, from inception to completion. We ensure to manage
          each phase effectively to deliver optimal outcomes for our clients and stakeholders.
        </p>
      </div>

        <div className="project-description">
          <h3>Projects</h3>
          <p>1. Tourist Management System</p>
          <p>
          A Tourist Management System built using servlets is a web application that helps manage the information related to tourists, their bookings, packages, and other related services. This type of project typically involves functionalities like managing customer details, booking tours, displaying tourist destinations, and integrating with payment systems. Additionally, it can offer features such as user authentication for both tourists and administrators, personalized tour recommendations based on tourist preferences, real-time availability of tour packages, and an interactive map for displaying nearby tourist attractions. The system can also include a review and feedback mechanism, where tourists can rate their experiences and provide insights for future travelers. To ensure smooth operation, it may integrate with third-party APIs for hotel bookings, transport services, and payment gateways for secure online transactions.
          </p>
          <p>Tools and Technologies:Apache Tomcat 10.0.x,Apache NetBeans.</p>
<p>Java Technologies: The project will primarily use Java for backend development, with servlets to handle client requests, manage sessions, and interact with the database. Java Database Connectivity (JDBC) </p>
          <div className="projects-content">
        <div className="project-img">
          <img 
            src="/images/travel.png"  // Image path from the public directory
            alt="Kashmir Tourist Destination"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </div>
        <p>2. Insurance Management System using Spring Framework</p>
          <p>
          An Insurance Management System built using the Spring Framework is a web application designed to manage the various aspects of insurance policies, claims, customer information, and other related services. This type of project typically involves functionalities such as managing policy details, processing claims, managing customer data, generating policy documents, and handling payments. The system can also include features like premium calculation, policy renewal reminders, claim status tracking, and real-time updates regarding policy terms and conditions.
          </p>
          <p>Tools and Technologies:Apache Maven,JUnit & Mockito.</p>

          <div className="project-img">
          <img 
            src="/images/new.png"  // Image path from the public directory
            alt="Insurance"
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
