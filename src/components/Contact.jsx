import React from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="mt-20 text-center text-4xl">
        Get in<span className="text-neutral-500"> Touch</span>
      </h2>
      <div className="flex flex-col items-center mt-8">
        <p className="text-lg">
          <strong>Address:</strong> {CONTACT.address}
        </p>
        <p className="text-lg">
          <strong>Phone:</strong> {CONTACT.phoneNo}
        </p>
        <p className="text-lg">
          <strong>Email:</strong>{" "}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
