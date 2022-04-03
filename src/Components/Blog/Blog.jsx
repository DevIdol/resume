import React from 'react'
import classes from "./Blog.module.css"
import BlogList from './BlogList/BlogList'
import SideBar from './SideBar/SideBar'

const Blog = () => {
  return (
  
     <section className={classes.blog}>
       <BlogList/>
       <SideBar/>
     </section>
   
  )
}

export default Blog
