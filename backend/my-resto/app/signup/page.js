"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation';



const signUp = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submitHandler =  async (e) => {
        e.preventDefault();
        const u = {
            name: name,
            email: email,
            password: password,
        };
        const res = await (await
            fetch('https://my-resto-nodejs.vercel.app/api/users', {
                method: 'POST',
                body: JSON.stringify(u),
                headers: {
                    'Content-Type': 'application/json'
                }
            })).json()
      
        if (res) {
            router.push('/login');
        }
        else {
            
            console.log(res);
        }
    }

    return (

        <div className="container container-fluid">
            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-10 col-lg-5 ">
                    <form
                        className="border border-secondary rounded p-4"
                        onSubmit={submitHandler}
                    >
                        <h1 className="mb-4">Sign Up</h1>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="text_field">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="email_field">
                                Email address
                            </label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="password_field">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password_field"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-block w-100 btn-danger btn-block mb-4"
                        >
                            Sign Up
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};
export default signUp; 