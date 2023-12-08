import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex justify-center items-center border-t h-[80px] border-gray-300 mt-10">
        <h1 className="text-gray-500 text-sm"> © 2023 All rights reserved</h1>
      </div>
    </MaxWidthWrapper>
  );
};

export default Footer;
