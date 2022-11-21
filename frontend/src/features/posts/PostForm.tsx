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
    <div>
      <h1>Post Form</h1>
      <form>
        <input
          type="text"
          className='form-control text-start'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className='form-control text-start'
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e: any) => submitHandler(e)}>Submit</button>
      </form>
    </div>
  )
}

export default PostForm;
