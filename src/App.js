import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './style.css';

export default function App() {
  const [details, setDetails] = useState([
    {
      name: 'Ashwin',
      type: 'Shy',
      amount: '0',
      check:false
    },
    {
      name: 'Jones',
      type: 'Happiest',
      amount: '0',
      check:false
    },
    {
      name: 'Khabob',
      type: 'HardWork',
      amount: '0',
      check:false
    },
    {
      name: 'McGrgor',
      type: 'Notorius',
      amount: '0',
      check:false
    },
    {
      name: 'GSP',
      type: 'Dedication',
      amount: '0',
      check:false
    }
  ]);
  const [state, setState] = useState('0');
  const [form, setForm] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = data => {
    console.log(data);
     setDetails(()=>{
      details[state]=data
      // details[state].check= details[state].check
      return details
     })
    setForm(false);
  };
  return (
    <div className="m-5 ">
      {form && (
        <div className="editForm container border border-success rounded">
          <div className="header p-2 d-flex justify-content-around">
            <h3>Edit Form</h3>
            <button
              onClick={() => {
                setForm(false);
              }}
              className="btn btn-light text-danger"
            >
              Close ✖
            </button>
          </div>
          <hr />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group d-flex flex-column justify-content-center px-5">
              <label>
                {' '}
                Name{' '}
                <input
                  {...register('name', { required: true })}
                  className="form-control"
                  type="text"
                  placeholder="Enter Name"
                  id=""
                />
                {errors.name && <p>*Name is required!</p>}
              </label>
              <label>
                {' '}
                Type{' '}
                <input
                  {...register('type', { required: true })}
                  className="form-control"
                  type="text"
                  placeholder="Enter Type"
                  id=""
                />
                {errors.type && <p>*Type is required!</p>}
              </label>
              <label>
                {' '}
                Amount{' '}
                <input
                  {...register('amount', { required: true })}
                  className="form-control"
                  type="text"
                  placeholder="Enter Amount"
                  id=""
                />
                {errors.amount && <p>*Amount is required</p>}
              </label>
            </div>
            <button className="btn btn-success m-4 mt-1 ml-4">
              Save & Continue
            </button>
          </form>
        </div>
      )}
      <table class="table container">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {details.map((data, i) => {
            return (
              <tr>
                <td>
                <input
               class="form-check-input"
                key={i}
                type="checkbox"
                onChange={() => {
                  details[i].check = !details[i].check;
                }}
                name={data.name}
                value={ data.name }
              />
              &nbsp;
                  <button
                    key={i}
                    type="button"
                    class="btn btn-outline-light text-dark"
                    onClick={() => {
                      setForm(true);
                      setState(i);
                    }}
                  >
                    {data.name}
                  </button>
                </td>
                <td>{data.type}</td>
                <td>{data.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="btn btn-primary text-light border border-dark" onClick={()=>{
        let arr
        arr=details.filter(data=>{return data.check})
        console.log(arr)
      }}>Submit Details</button>
    </div>
  );
}
