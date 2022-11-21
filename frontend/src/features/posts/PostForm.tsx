import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../app/store';
import { createPostAsync } from "./postSlice";

const PostForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  type HTMLElementEvent<T extends HTMLElement> = Event & {
    target: T,
  }

  const submitHandler = (e: HTMLElementEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const { target } = e;
    console.log(target.value);
    const formData = {
      post: {
        title: title,
        body: body,
      }
    }
    dispatch(createPostAsync(formData));
    resetState();
  }

  const resetState = () => {
    setTitle('');
    setBody('');
  }

  return (
    <div className='form-box'>
      <h3>Go ahead, make a post!</h3>
      <form>
        <p className='form-subtitle'>Title <i className="uil uil-link-alt"></i></p>
        <input
          type="text"
          className='form-control text-start'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p className='form-subtitle'>Body <i className="uil uil-align-left-justify"></i></p>
        <textarea
          className='form-control text-start'
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button
          type="submit"
          className='btn-sub'
          onClick={(e: any) => submitHandler(e)}>Submit</button>
      </form>
    </div>
  )
}

export default PostForm;
