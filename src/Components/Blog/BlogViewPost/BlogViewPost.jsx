import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import five from "../../../assets/project/five.png";
import classes from "./BlogViewPost.module.css";

const BlogViewPost = () => {
  return (
    <div className={classes.blogViewPost}>
      <div className={classes.blogViewPostImg}>
        <img src={five} alt="" />
      </div>
      <div className={classes.blogSubTitle}>
        <div className={classes.leftSide}>
          <div className={classes.divider}></div>
          <h6 className={classes.category}>Flutter</h6>
        </div>
        <h6 className={classes.date}> 2 days ago</h6>
        <div className={classes.rightSide}>
          <FaRegEdit
            style={{ color: "teal", marginRight: "10px", cursor: "pointer" }}
          />
          <RiDeleteBin5Line style={{ color: "tomato", cursor: "pointer" }} />
        </div>
      </div>
      <h3 className={classes.blogViewTitle}>
        What's new in Flutter Version 2.12.0?
      </h3>
      <p className={classes.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
        similique dicta velit earum pariatur quis laudantium error atque
        voluptatem perferendis laborum minus assumenda dolor, recusandae natus
        repudiandae corporis. Perspiciatis, cupiditate? Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Illo ab quasi beatae aspernatur fugit
        vel, quod corporis hic repudiandae illum nam explicabo minus ex fugiat
        quae! Eum ut quam repellendus? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Sunt alias aut nobis numquam, sit deleniti ipsum
        deserunt perferendis quos perspiciatis minus, debitis animi ullam
        aliquid adipisci minima ratione dolores voluptas? Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Doloremque ab deserunt cupiditate
        veniam culpa? Amet cupiditate dolorem explicabo, delectus veritatis
        laboriosam voluptatum at dolor, consequuntur velit odit praesentium
        debitis in?
      </p>
    </div>
  );
};

export default BlogViewPost;
