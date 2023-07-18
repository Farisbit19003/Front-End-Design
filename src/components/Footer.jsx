import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="flex flex-row">
        <hr />
        <div className="flex flex-col w-56 border-2 border-red-500">
          <h1 className="font-pn text-base">
            <b>A+</b> <span className="font-ad">Studio</span>
          </h1>
          <p>
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
        </div>
        <div className="flex flex-col w-56 border-2 border-red-500">
          <h1 className="font-pn">What We Do</h1>
          <p>
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer