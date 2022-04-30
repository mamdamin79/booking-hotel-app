import React from 'react';
import LocationBar from '../LocationBar/LocationBar';
import BlogCard from './BlogCard/BlogCard';
// styles
import styles from './Blog.module.css';
const Blog = ({blogs}) => {
    console.log(blogs)
    return (
        <>
            <LocationBar/>
            <div className={styles.container}>
                {blogs.length > 0 ? blogs.map((blog) => <BlogCard info={blog} key={blog._id}/>) : null}
            </div>
        </>
    );
}
 
export default Blog;