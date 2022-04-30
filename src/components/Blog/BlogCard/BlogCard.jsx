import React from 'react';
import { Link } from 'react-router-dom';
// styles
import styles from './BlogCard.module.css'
const BlogCard = ({info}) => {
    const date = new Date(info.createdAt);
    return (
        <div className={styles.container}>
            <img src={info.image} alt="blogImage" />
            <div>
                <p>{date.toDateString()}</p>
                <span>{info.tags[0]}</span>
            </div>
            <h3>{info.title.split(' ')[0]+" "+info.title.split(' ')[1]+" "+info.title.split(' ')[2]+" "+info.title.split(' ')[3]+"..."}</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, accusantium.</p>
            <Link to={`blog/${info._id}`}>read more</Link>
        </div>
    );
}
 
export default BlogCard;