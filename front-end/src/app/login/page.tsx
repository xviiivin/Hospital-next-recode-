import React from 'react'

export default function login() {
    return (
        <div className="w-[100dvw] h-[100dvh] flex items-center justify-center bg-[#0f0f0f]">
            <div className=" bg-[#191919] rounded-md text-white py-10 px-8 h-1/2 w-1/4">
                <div className='flex gap-4 flex-col'>
                    <h1 className='flex justify-center text-2xl'>Welcome Back</h1>
                    <div className='flex flex-cols gap-1'>
                        <h2 className='text-[#838383]'>Don't have an account yet?</h2>
                        <a className='' href='/register'>Sign up</a>
                    </div>
                    <form className='flex gap-4 flex-col'>
                        <input type="email" className='bg-[#121212] rounded-md p-2 w-full' placeholder='email address' />
                        <input type="password" className='bg-[#121212] rounded-md p-2' placeholder='Password' />
                        <button className='w-full bg-blue-600 rounded-md p-2'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
