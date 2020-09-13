import React, { useRef, useEffect } from 'react'
import './Form.css'
import { apiKey } from '../../config';

const Form = ({ submitted }: { submitted: Function }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchIpData()
  }

  const fetchIpData = () => {
    const address = inputRef.current ? inputRef.current.value : '';

    fetch(`https://cors-anywhere.herokuapp.com/https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${address}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res);
        }

        return res.json()
      })
      .then(data => submitted(data))
      .catch(err => console.error(err))
  }

  useEffect(fetchIpData, [])

  return (
    <form className="Form" onSubmit={submitHandler}>
      <h1 className="Form-title">IP Address Tracker</h1>
      <div className="Form-inputWrapper">
        <input className="Form-input" type="text" name="ip" ref={inputRef} placeholder="Type the IP here..." />
        <button className="Form-button" type="submit">
          >
        </button>
      </div>
    </form>
  );
}

export default Form;