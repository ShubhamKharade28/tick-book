"use client";
import movies from "@/app/assets/movies";
import { useEffect, useState } from "react";

import Nav from "@/app/components/nav";
import Image from "next/image";

const Success = ({params}) => {
    const path = params.path;

    const [movieName, setMovieName] = useState('');
    const [movieSrc, setMovieSrc] = useState(null);

    useEffect(() => {
        movies.forEach(movie => {
            if(movie.path == path){
                setMovieName(movie.name);
                setMovieSrc(movie.thumb);
                return;
            }
        })
    }, [])

    if(!movieName) return <Nav />;
    
    return (
        <div className="flex flex-col h-screen w-screen items-center">
            <Nav />
            <div className="flex flex-col h-full w-full items-center justify-center gap-12 pink-text">
                <div className="h-60 w-auto rounded-lg overflow-hidden">
                    <Image src={movieSrc} height={144} width={100} className="h-full w-full"/>
                </div>
                <span className="text-xl underline underline-offset-8 font-extrabold">{movieName}</span>
                <span className="text-4xl font-bold">Tickets purchased successfully!</span>
            </div>
        </div>
    )
}

export default Success;