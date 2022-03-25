import { Fragment } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";
export const GitHub = (props) => {
  return (
    <Fragment>
      <AiOutlineGithub className={props.className} />
    </Fragment>
  );
};

export const Mail = (props) => {
  return (
    <Fragment>
      <IoMdMail className={props.className} />
    </Fragment>
  );
};
