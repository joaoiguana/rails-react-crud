/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { fetchPostsAsync, selectPosts, selectStatus, Statuses } from './postSlice';
import type { AppDispatch } from '../../app/store';
import Post from './Post'
import PostForm from './PostForm';
import { updatePostAsync } from './postSlice';
import './Post.css';

function Posts() {
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus)
  const dispatch = useDispatch<AppDispatch>();

  const [postToEdit, setPostToEdit] = useState(0);

  useEffect(() =>  {
    dispatch((fetchPostsAsync()));
  }, [dispatch])

  const toggleEditForm = (post_id?:number) => {
    if (postToEdit === post_id) {
      setPostToEdit(0);
    } else {
      setPostToEdit(post_id as number);
    }
  }

  const submitEdit = (formData:any) => {
    dispatch(updatePostAsync(formData));
    toggleEditForm();
  }

  let contents;

  if (status !== Statuses.UpToDate) {
    contents = <div>{status}</div>
  } else {
    contents = <div className='card'>
      <div className='card-body'>
        {/* <h3>{status}</h3> */}
        <PostForm />
        {posts && posts.length > 0 && posts.map(post => {
          return <div className='posts' key={post.id}>
            <Post
              dispatch={dispatch}
              post={post}
              toggleEditForm={() => toggleEditForm(post.id)}
              postToEdit={postToEdit}
              submitEdit={submitEdit}
            />
          </div>
        })}
      </div>
    </div>
  }

  return <div className='container posts-container'>
    {contents}
  </div>
}

export default Posts;
