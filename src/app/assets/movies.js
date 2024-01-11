import dunkiThumb from './movie-thumbs/dunki.png';
import aquamanThumb from './movie-thumbs/aquaman.png';
import animalThumb from './movie-thumbs/animal.png';
import oleAaleThumb from './movie-thumbs/ole-aale.png';
import samThumb from './movie-thumbs/sam-bahadur.png';
import salaarThumb from './movie-thumbs/salaar.png';
import twelthFailThumb from './movie-thumbs/twelth-fail.png';

const movies = [
    {
        name: 'Dunki',
        genre: 'Comedy/Drama',
        thumb: dunkiThumb,
        path: 'dunki'
    },{
        name: 'Salaar: Cease Fire - Part 1',
        genre: 'Action/Thriller',
        thumb: salaarThumb,
        path: 'salaar'
    },{
        name: 'Animal',
        genre: 'Action/Crime/Drama',
        thumb: animalThumb,
        path: 'animal'
    },
    {
        name: 'Sam Bahadur',
        genre: 'Biograph/Drama',
        thumb: samThumb,
        path: 'sambaradur'
    },{
        name: 'Aquaman and the Lost Kingdom',
        genre: 'Action/Adventure/Fantasy/Superhero',
        thumb: aquamanThumb,
        path: 'aquaman',
    },{
        name: '12th Fail',
        genre: 'Drama',
        thumb: twelthFailThumb,
        path: 'twelthfail'
    },{
        name: 'Ole Aale',
        genre: 'Adventure/Drama/Family',
        thumb: oleAaleThumb,
        path: 'oleaale'
    },
];

export default movies;