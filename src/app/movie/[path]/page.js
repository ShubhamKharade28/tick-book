"use client";
import movies from "@/app/assets/movies";
import './movie.scss';
import Nav from "@/app/components/nav";
import BuyTicket from "@/app/components/buy-ticket";

import Image from "next/image";
import { useState, useEffect } from "react";

class Seat {
    constructor(r,c){
        this.row = r;
        this.col = c;
        this.occupied = false;
    }
    
    setOccupied(){
        this.occupied = true;
    }
}

function getSeats(r,c){
    const rows = [];
    for(let i=1; i<=r; i++){
        const row = [];
        for(let j=1; j<=c; j++){
            const seat = new Seat(i,j);
            if(i==2 && j==5) seat.setOccupied();
            row.push(seat);
        }
        rows.push(row);
    }
    return rows;
}

const Movie = ({params}) => {
    let moviePath = params.path;
    const [movie, setMovie] = useState(null);
    const [seats, setSeats] = useState([Seat]);
    const [count, setCount] = useState(0);
    
    const rows = 4, cols = 7;
    const allSeats = getSeats(rows,cols);

    // to show buy ticket option
    const [isBuyVisible, setBuyVisible] = useState(false);

    useEffect(() => {
        movies.forEach((mv) => {
            if(mv.path == moviePath) {
                setMovie(mv);
            }
        })
    }, [])

    function isSeatMarked(seatToCheck){
        let res = false;
        let r = seatToCheck.row, c = seatToCheck.col;
        seats.forEach((seat) => {
            if(seat.row == r && seat.col == c){
                res = true;
                return;
            }
        });
        return res;
    }

    function addSeat(seat){
        let r = seat.row, c = seat.col;
        setSeats((curr) => [...curr, new Seat(r,c)]);
        setCount(count+1);
    }

    function removeSeat(seatToRemove){
        let r = seatToRemove.row, c = seatToRemove.col;
        setSeats((curr) => {
            return curr.filter((seat) => seat.row != r || seat.col != c);
        });
        setCount(count-1);
    }
    
    function handleSeatClick(seat){
        if(isSeatMarked(seat)){
            removeSeat(seat);
        }else{
            addSeat(seat);
        }
    }

    if(!movie) return <Nav />

    return (
        <div className="flex flex-col w-screen items-center min-h-screen grey-bg relative">
            {   isBuyVisible && 
                <BuyTicket 
                    setBuyVisible={setBuyVisible}
                    seats={seats}
                    count={count}
                    movie={movie}
                />
            }
            <Nav />
            <div className="flex h-full justify-start w-screen gap-10 px-10 py-6">
                <movie className="flex flex-col h-full gap-7">
                    <div className="w-60 h-auto rounded-lg overflow-hidden">
                        <Image src={movie.thumb} className="w-full h-full" width={144} height={144}/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-3xl font-semibold">{movie.name}</span>
                        <span className="text-xl font-light">{movie.genre}</span>
                    </div>
                </movie>
                {/* Seating arrangement */}
                <div className="flex flex-col w-full px-5 gap-14 mt-4">
                    <h1 className="text-2xl border-b-2 border-b-black w-fit pb-2 px-0.5">Choose seats</h1>
                    <div className="flex flex-col gap-5">
                    {
                        allSeats.map((row,rowIndex) => {
                            console.log(rowIndex);
                            return (
                                <div className="flex gap-5">
                                    {row.map((seat, colIndex) => {
                                        console.log(colIndex);
                                        let classes = "shadow text-sm font-semibold tracking-wide cursor-pointer flex items-center justify-center w-14 h-14 ";
                                        if(seat.col == 5) {
                                            classes += "mr-10 "
                                        }
                                        if(seat.occupied){
                                            return (    
                                                <div 
                                                className={`bg-red-500 text-white rounded ${classes}`}>
                                                    <span>R</span>{seat.row}
                                                    <span>C</span>{seat.col}
                                                </div>
                                            );
                                        }
                                        if(isSeatMarked(seat)){
                                            classes += "bg-green-500 text-white";
                                        }else{
                                            classes += "bg-white text-black";
                                        }
                                        return (
                                            <div className={`${classes} rounded`} 
                                                onClick={() => handleSeatClick(seat)}>
                                                <span>R</span>{seat.row}
                                                <span>C</span>{seat.col}
                                            </div>
                                        );
                                    })}
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                {/* No of tickets */}
                <div className="flex flex-col mr-10 w-full h-80 justify-around items-center rounded-lg shadow px-10 mt-24 py-10">
                    <div className="text-2xl pink-text font-bold leading-10">
                        <span>{count}</span> seats selected
                    </div>
                    <button className="px-5 py-3 buy-btn text-lg text-white w-fit rounded-2xl font-bold"
                        onClick={() => setBuyVisible(true)}
                    >
                        Buy tickets</button>
                </div>
            </div>
        </div>
    )
}

export default Movie;