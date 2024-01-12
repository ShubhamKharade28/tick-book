
import movies from './assets/movies';
import Nav from './components/nav';

import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Movie Flex Glamour'
}

const Home = () => {
  return (
    <main className="flex flex-col items-center grey-bg w-screen min-h-screen">
      <Nav />

      <movies className="py-10 px-20 flex flex-col gap-7 w-screen">
        <h1 className="text-2xl font-semibold px-12">Recommended movies</h1>
        <div className="flex flex-wrap gap-x-20 gap-y-10 w-full justify-center">
          {
            movies.map((movie,index) => {
              // if(index > 10) return;
              return (
                <Link className="flex flex-col items-start gap-2 w-56" href={`/movie/${movie.path}`} key={movie.name}>
                  <div className="w-full rounded-lg overflow-hidden">
                    <Image src={movie.thumb} height={144} width={100} className="w-full h-full"/>
                  </div>
                  <span className="break-words text-lg font-bold w-fit">{movie.name}</span>
                  <span className="break-words max-w-min w-min">{movie.genre}</span>
                </Link>
              )
            })
          }
        </div>
      </movies>
    </main>
  )
}

export default Home;