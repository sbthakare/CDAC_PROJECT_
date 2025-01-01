import React from 'react';

const About = () => {
  return (
    <>
      <style>
        {`
          .text-justify {
          padding:40px;
            text-align: justify; 
          }

          h2, h3 {
            font-weight: bold;
          }

          p {
            line-height: 1.8; 
            color: #555; 
          }

          .text-primary {
            color: #007bff; /* Bootstrap's primary color */
          }
        `}
      </style>

      <div className="container my-5">
        <div className="text-center">
          <h2>About</h2>
          <h3 className="mt-3">
            Know More About <span className="text-primary">Paarsh Infotech Pvt. Ltd.</span>
          </h3>
        </div>

        <div className="mt-4 text-justify">
          <p className="mb-3">
            Paarsh Infotech Pvt. Ltd. is the best Software development company. 
             We provide high-end web design & development solutions in the Web & IT world.
          </p>
          <p className="mb-3">
            We do not just believe in increasing business. We trust in creating customer delight. 
            We believe in making long-life relationships with our clients. We expect in developing 
            a solid foundation for our company personally and professionally. We work for our clients 
            and measure our success by their success.
          </p>
          <p className="mb-3">
            We not only provide services to our clients but also give internships to computer science students. 
            Students can join our internship program as per their interests. We also provide an opportunity 
            for our students to work on live projects. It will make them capable of standing out in the 
            interview of the company.
          </p>
        </div>

        <div className="row text-center mt-5">
          <div className="col-md-4">
            <h4 className="text-primary">65</h4>
            <p>Remote Sale Expert</p>
          </div>
          <div className="col-md-4">
            <h4 className="text-primary">8</h4>
            <p>New Clients per month</p>
          </div>
          <div className="col-md-4">
            <h4 className="text-primary">120</h4>
            <p>Requests per Week</p>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default About;
