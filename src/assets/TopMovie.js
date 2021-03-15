import ShawShank from './ShawShank.jpg';
import Godfather from './Godfather.jpg';
import Darknight from './Darknight.jfif';
import Godfather2 from './Godfather2.jpg';
import AngryMen from './AngryMen.jpg';
import Lordoftherings from './Lordoftherings.jpg';
import PulpFiction from './PulpFiction.jpg';
import SchindlerList from './SchindlerList.jpg';
import Inception from './Inception.jpg';
import FightClub from './FightClub.jpg';
import Lordoftherings2 from './Lordoftherings2.jpg';
import ForrestGump from './ForrestGump.jpg';
import goodbadugly from './goodbadugly.jpg';
import Lordoftherings3 from './Lordoftherings3.jpg';
import Matrix from './Matrix.jpg';
import Goodfellas from './Goodfellas.jpg';
import StarWars from './StarWars.jpg';
import CuckoosNest from './CuckoosNest.jpg';
import Raatchasan from './Raatchasan.jpg';
import Parasite from './Parasite.jpg';

const Top20 = {
    Movies:[
        {
            key: 0,
            MovieName: "The Shawshank Redemption",
            Rating: "9.3",
            Poster: ShawShank,
            Genre: "Drama",
            Plot:"Andy Dufresne, a successful banker, is arrested for the murders of his wife and her lover, and is sentenced to life imprisonment at the Shawshank prison. He becomes the most unconventional prisoner.",
            Director:"Frank Darabont",
            Cast:"Morgan Freeman, Tim Robbins",
            Release_date: "22 September 1994",
            Language:"English",
            Duration:"142 min",
        },
        {
            key: 1,
            MovieName: "The Godfather: Part I", 
            Rating: "9.2",
            Poster: Godfather,
            Genre: "Crime, Drama",
            Plot:"Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
            Director:"Francis Ford Coppola",
            Cast:"Al Pacino, Marlon Brando",
            Release_date:"14 March 1972",
            Language:"English, Italian, Latin",
            Duration:"175 min",
        },
        {
            key: 2,
            MovieName: "The Dark Knight", 
            Rating: "9.0",
            Poster: Darknight,
            Genre: "Action, Crime, Drama",
            Plot:"After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.",
            Director:"Christopher Nolan",
            Cast:"Christian Bale, Heath Ledger, Gary Oldman",
            Release_date:"18 July 2008",
            Language:"English, Madarin",
            Duration:"152 min",
        },
        {   
            key: 3,
            MovieName: "The Godfather: Part II", 
            Rating: "9.0",
            Poster: Godfather2,
            Genre: "Crime, Drama",
            Plot:"Michael, Vito Corleone's son, attempts to expand his family's criminal empire. While he strikes a business deal with gangster Hyman Roth, he remains unaware of the lurking danger.",
            Director:"Francis Ford Coppola",
            Cast:"Al Pacino, Marlon Brando",
            Release_date:"12 December 1974",
            Language:"English, Italian, Latin, Spanish",
            Duration:"202 min",
        },
        {
            key: 4,
            MovieName: "12 Angry Men",
            Rating: "9.0",
            Poster: AngryMen,
            Genre: "Crime, Drama",
            Plot:"A dissenting juror in a murder trial slowly manages to convince the others that the case is not as obviously clear as it seemed in court.",
            Director:"Sidney Lumet",
            Cast:"Henry Fonda, Lee J. Cobb",
            Release_date:"April 1957",
            Language:"English",
            Duration:"96 min",
        },
        {
            key: 5,
            MovieName: "The Lord of the Rings: The Return of the King", 
            Rating: "8.9",
            Poster: Lordoftherings,
            Genre: "Action, Adventure, Drama",
            Plot:"The former Fellowship members prepare for the final battle. While Frodo and Sam approach Mount Doom to destroy the One Ring, they follow Gollum, unaware of the path he is leading them to.",
            Director:"Peter Jackson",
            Cast:"Elijah Wood, Viggo Mortensen",
            Release_date:"6 February 2004",
            Language:"English, Quenya, Old English, Sindarin",
            Duration:"251 min"
        },
        {
            key: 6,
            MovieName: "Pulp Fiction", 
            Rating: "8.9",
            Poster: PulpFiction,
            Genre: "Crime, Drama",
            Plot:"In the realm of underworld, a series of incidents intertwines the lives of two Los Angeles mobsters, a gangster's wife, a boxer and two small-time criminals.",
            Director:"Quentin Tarantino",
            Cast:"Samuel L. Jackson, John Travolta",
            Release_date:"10 September 1994",
            Language:"English, Spanish, French",
            Duration:"178 min",
        },
        {
            key: 7,
            MovieName: "Schindler's List", 
            Rating: "8.9",
            Poster: SchindlerList,
            Genre: "Biography, Drama, History",
            Plot:"Oskar Schindler, a German industrialist and member of the Nazi party, tries to save his Jewish employees after witnessing the persecution of Jews in Poland.",
            Director:"Steven Spielberg",
            Cast:"Ben Kingsley, Liam Neeson",
            Release_date:"30 November 1993",
            Language:"English, Hebrew, German, Polish, Latin",
            Duration:"197 min",
        },
        {
            key: 8,
            MovieName: "Inception",
            Rating: "8.8",
            Poster: Inception,
            Genre: "Action, Adventure, Sci-Fi",
            Plot:"Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
            Director:"Christopher Nolan",
            Cast:"Leonardo DiCaprio, Joseph Gordon-Levitt",
            Release_date:"16 July 2010",
            Language:"English",
            Duration:"148 min",
        },
        {
            key: 9,
            MovieName: "Fight Club",
            Rating: "8.8",
            Poster: FightClub,
            Genre: "Drama",
            Plot:"Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.",
            Director:"David Fincher",
            Cast:"Brad Pitt, Edward Norton",
            Release_date:"15 October 1999",
            Language:"English",
            Duration:"151 min",
        },
        {
            key: 10,
            MovieName: "The Lord of the Rings: The Fellowship of the Ring",
            Rating: "8.8",
            Poster: Lordoftherings2,
            Genre: "Action, Adventure, Drama",
            Plot:"A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.",
            Director:"Peter Jackson",
            Cast:"Aragorn, Frodo Baggins",
            Release_date:"15 March 2002",
            Language:"English",
            Duration:"228 min",
        },
        {
            key: 11,
            MovieName: "Forrest Gump", 
            Rating: "8.8",
            Poster: ForrestGump,
            Genre: "Drama, Romance",
            Plot:"Forrest, a man with low IQ, recounts the early years of his life when he found himself in the middle of key historical events. All he wants now is to be reunited with his childhood sweetheart, Jenny.",
            Director:"Robert Zemeckis",
            Cast:"Tom Hanks, Robin Wright",
            Release_date:"23 June 1994",
            Language:"English",
            Duration:"142 min"
        },
        {
            key: 12,
            MovieName: "The Good, the Bad and the Ugly", 
            Rating: "8.8",
            Poster: goodbadugly,
            Genre: "Western",
            Plot:"During the Civil War, two men, Blondie and Tuco, form an uncomfortable alliance while looking for treasure. They must also outwit Angel Eyes, an outlaw who wants to plunder the riches for himself.",
            Director:"Sergio Leone",
            Cast:"Clint Eastwood, Eli Wallach",
            Release_date:"23 December 1966",
            Language:"Italian",
            Duration:"238 min",
        },
        {
            key: 13,
            MovieName: "The Lord of the Rings: The Two Towers", 
            Rating: "8.7",
            Poster: Lordoftherings3,
            Genre: "Action, Adventure, Drama",
            Plot:"Frodo and Sam arrive in Mordor with the help of Gollum. A number of new allies join their former companions to defend Isengard as Saruman launches an assault from his domain.",
            Director:"Peter Jackson",
            Cast:"Viggo Mortensen, Elijah Wood",
            Release_date:"28 March 2003",
            Language:"English, Sindarin, Old English",
            Duration:"223 min",
        },

        {
            key: 14,
            MovieName: "The Matrix",
            Rating: "8.7",
            Poster: Matrix,
            Genre: "Action, Sci-Fi",
            Plot:"Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.",
            Director:"Lana Wachowski, Lilly Wachowski",
            Cast:"Keanu Reeves, Carrie-Anne Moss",
            Release_date:"31 March 1999",
            Language:"English",
            Duration:"150 min",
        },
        {
            key: 15,
            MovieName: "Goodfellas", 
            Rating: "8.7",
            Poster: Goodfellas,
            Genre: "Biography, Crime, Drama",
            Plot:"Young Henry Hill, with his friends Jimmy and Tommy, begins the climb from being a petty criminal to a gangster on the mean streets of New York.",
            Director:"Martin Scorsese",
            Cast:"Ray Liotta, Robert De Niro",
            Release_date:"12 September 1990",
            Language:"English, Italian",
            Duration:"148 min"
        },
        {
            key: 16,
            MovieName: "Star Wars: Episode V - The Empire Strikes Back", 
            Rating: "8.7",
            Poster: StarWars,
            Genre: "Action, Adventure, Fantasy",
            Plot:"Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.",
            Director:"Irvin Kershner",
            Cast:"Mark Hamill, Harrison Ford",
            Release_date:"17 May 1980",
            Language:"English",
            Duration:"127 min",
        },
        {
            key: 17,
            MovieName: "One Flew Over the Cuckoo's Nest", 
            Rating: "8.7",
            Poster: CuckoosNest,
            Genre: "Drama",
            Plot:"In order to escape the prison labour, McMurphy, a prisoner, fakes insanity and is shifted to the special ward for the mentally unstable. In this ward, he must rise up against a cruel nurse, Ratched.",
            Director:"Miloš Forman",
            Cast:"Jack Nicholson, Louise Fletcher, Danny DeVito",
            Release_date:"19 November 1975",
            Language:"English",
            Duration:"134 min",
        },
        {
            key: 18,
            MovieName: "Raatchasan",
            Rating: "8.6",
            Poster: Raatchasan,
            Genre: "Action, Crime, Thriller",
            Plot:"Arun gives up on his dream of becoming a filmmaker and takes up the job of a police officer after his father's death. He then attempts to track down a psychotic killer who targets schoolgirls.",
            Director:"5 October 2018",
            Cast:"Amala Paul, Kaali Venkat",
            Release_date:"5 October 2018",
            Language:"Tamil",
            Duration:"170 min",
        },
        {
            key: 19,
            MovieName: "Parasite",
            Rating: "8.6",
            Poster: Parasite,
            Genre: "Comedy, Drama, Thriller",
            Plot:"The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. Soon, all of them find a way to work within the same household and start living a parasitic life.",
            Director:"Bong Joon-ho",
            Cast:"Kang-ho Song, Lee Sun-kyun",
            Release_date:"30 May 2019",
            Language:"Korean",
            Duration:"132 min",
        },
    ]
}

const Top100 = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 },
    { title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
    { title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
    { title: 'Forrest Gump', year: 1994 },
    { title: 'Inception', year: 2010 },
    { title: 'The Lord of the Rings: The Two Towers', year: 2002 },
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
    { title: 'Star Wars: Episode IV - A New Hope', year: 1977 },
    { title: 'City of God', year: 2002 },
    { title: 'Se7en', year: 1995 },
    { title: 'The Silence of the Lambs', year: 1991 },
    { title: "It's a Wonderful Life", year: 1946 },
    { title: 'Life Is Beautiful', year: 1997 },
    { title: 'The Usual Suspects', year: 1995 },
    { title: 'Léon: The Professional', year: 1994 },
    { title: 'Spirited Away', year: 2001 },
    { title: 'Saving Private Ryan', year: 1998 },
    { title: 'Once Upon a Time in the West', year: 1968 },
    { title: 'American History X', year: 1998 },
    { title: 'Interstellar', year: 2014 },
    { title: 'Casablanca', year: 1942 },
    { title: 'City Lights', year: 1931 },
    { title: 'Psycho', year: 1960 },
    { title: 'The Green Mile', year: 1999 },
    { title: 'The Intouchables', year: 2011 },
    { title: 'Modern Times', year: 1936 },
    { title: 'Raiders of the Lost Ark', year: 1981 },
    { title: 'Rear Window', year: 1954 },
    { title: 'The Pianist', year: 2002 },
    { title: 'The Departed', year: 2006 },
    { title: 'Terminator 2: Judgment Day', year: 1991 },
    { title: 'Back to the Future', year: 1985 },
    { title: 'Whiplash', year: 2014 },
    { title: 'Gladiator', year: 2000 },
    { title: 'Memento', year: 2000 },
    { title: 'The Prestige', year: 2006 },
    { title: 'The Lion King', year: 1994 },
    { title: 'Apocalypse Now', year: 1979 },
    { title: 'Alien', year: 1979 },
    { title: 'Sunset Boulevard', year: 1950 },
    { title: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
    { title: 'The Great Dictator', year: 1940 },
    { title: 'Cinema Paradiso', year: 1988 },
    { title: 'The Lives of Others', year: 2006 },
    { title: 'Grave of the Fireflies', year: 1988 },
    { title: 'Paths of Glory', year: 1957 },
    { title: 'Django Unchained', year: 2012 },
    { title: 'The Shining', year: 1980 },
    { title: 'WALL·E', year: 2008 },
    { title: 'American Beauty', year: 1999 },
    { title: 'The Dark Knight Rises', year: 2012 },
    { title: 'Princess Mononoke', year: 1997 },
    { title: 'Aliens', year: 1986 },
    { title: 'Oldboy', year: 2003 },
    { title: 'Once Upon a Time in America', year: 1984 },
    { title: 'Witness for the Prosecution', year: 1957 },
    { title: 'Das Boot', year: 1981 },
    { title: 'Citizen Kane', year: 1941 },
    { title: 'North by Northwest', year: 1959 },
    { title: 'Vertigo', year: 1958 },
    { title: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
    { title: 'Reservoir Dogs', year: 1992 },
    { title: 'Braveheart', year: 1995 },
    { title: 'M', year: 1931 },
    { title: 'Requiem for a Dream', year: 2000 },
    { title: 'Amélie', year: 2001 },
    { title: 'A Clockwork Orange', year: 1971 },
    { title: 'Like Stars on Earth', year: 2007 },
    { title: 'Taxi Driver', year: 1976 },
    { title: 'Lawrence of Arabia', year: 1962 },
    { title: 'Double Indemnity', year: 1944 },
    { title: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
    { title: 'Amadeus', year: 1984 },
    { title: 'To Kill a Mockingbird', year: 1962 },
    { title: 'Toy Story 3', year: 2010 },
    { title: 'Logan', year: 2017 },
    { title: 'Full Metal Jacket', year: 1987 },
    { title: 'Dangal', year: 2016 },
    { title: 'The Sting', year: 1973 },
    { title: '2001: A Space Odyssey', year: 1968 },
    { title: "Singin' in the Rain", year: 1952 },
    { title: 'Toy Story', year: 1995 },
    { title: 'Bicycle Thieves', year: 1948 },
    { title: 'The Kid', year: 1921 },
    { title: 'Inglourious Basterds', year: 2009 },
    { title: 'Snatch', year: 2000 },
    { title: '3 Idiots', year: 2009 },
    { title: 'Monty Python and the Holy Grail', year: 1975 },
  ];
  
export{
    Top20,
    Top100,
};  