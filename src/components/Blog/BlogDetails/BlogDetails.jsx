import React from 'react';
import { useParams } from 'react-router-dom';
// styles
import styles from './BlogDetails.module.css'
const BlogDetails = ({blogs}) => {
    const blogId =  useParams().id
    const blogInfo = blogs.find(blog=>blog._id === blogId)
    const date = new Date(blogInfo.createdAt);
    return (
        <div className={styles.container}>
            <article className={styles.blog}>
                <img src={blogInfo.image} alt="blogImage" />
                <h2>{blogInfo.title}</h2>
                <p>{date.toDateString()}</p>
                <p>{blogInfo.text}</p>
                <p>tags:{blogInfo.tags.map((tag,index) => <span key={index} >{tag}</span>)}</p>
                <p>Author: {blogInfo.user.name}</p>
            </article>
        </div>
    );
}
 
export default BlogDetails;