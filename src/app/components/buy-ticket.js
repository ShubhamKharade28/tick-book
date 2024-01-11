"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const BuyTicket = ({movie, seats,count,setBuyVisible}) => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [mobile, setMobile] = useState('');
    const [price, setPrice] = useState(0);

    const router = useRouter();

    useEffect(() => {
        setPrice(count*200);
    }, [])

    function onClickBuy() {
        if(name==''){
            alert("Please enter your name");
            return;
        }
        if(gender==''){
            alert("Please select your gender");
            return;
        }
        if(age == '' || age == 0){
            alert("Please enter your age");
            return;
        }
        if(mobile == ''){
            alert("Please enter your mobile number");
            return;
        }
        router.push('/success/'+movie.path);
    }

    return (
        <div className="top-0 left-0 absolute z-0 flex items-center justify-center h-screen w-screen bg-black bg-opacity-50">
            <div className="top-0 left-0 absolute z-0 h-screen w-screen" onClick={() => setBuyVisible(false)}></div>
            <div className="flex flex-col items-center gap-10 py-10 px-10 w-1/2 h-2/3 z-10 top-28 left-1/4 fixed bg-white rounded-2xl">
                <h1 className="text-xl font-semibold pink-text">Personal Details</h1>
                <form className="flex flex-col w-full items-start gap-3 px-10 form">
                    <div className="flex gap-5 w-full items-center justify-end">
                        <label>Name : </label>
                        <input type="text" placeholder="eg. Brian Yu" onChange={(e) => setName(e.target.value)}
                        className="w-2/3 py-2 px-3 rounded outline-none light-border" />
                    </div>
                    <div className="flex gap-5 w-full items-center justify-end">
                        <label>Gender :</label>
                        <select className="w-2/3 py-2 px-3 rounded outline-none light-border"
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option disabled selected className="font-light">Male/Female</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="flex gap-5 w-full items-center justify-end">
                        <label>Age :</label>
                        <input type="text" placeholder="0" onChange={(e) => setAge(e.target.value)}
                        className="w-2/3 py-2 px-3 rounded outline-none light-border" />
                    </div>
                    <div className="flex gap-5 w-full items-center justify-end">
                        <label>Contact No :</label>
                        <input type="text" placeholder="XXX-XXXX-XXXX" onChange={(e) => setMobile(e.target.value)}
                        className="w-2/3 py-2 px-3 rounded outline-none light-border" />
                    </div>
                </form>
                <div className="w-full flex justify-evenly items-center">
                    <span className="pink-text underline underline-offset-8 text-lg">&#8377; {price} for {count} ticket{count>1 && <span>s</span>}</span>
                    <button className="pink-bg py-3 px-10 rounded-xl buy-btn text-white hover:scale-95 font-bold"
                        onClick={onClickBuy}
                    >Buy</button>
                </div>
            </div>
        </div>
    )
}

export default BuyTicket;