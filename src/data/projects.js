import BookingSiteImg from '../assets/bookingSite.png';
import ticTacToeImg from '../assets/tic-tac-toe.png';
import knightImg from '../assets/knight.png';
import todoListImg from '../assets/todoList.png';

const projects = [
{
    path: BookingSiteImg,
    id: '0',
    source: 'https://github.com/Marian421/complex-sportiv',
    techStack: {
        frontend: ['React', 'JavaScript', 'Modules CSS'],
        backend: ['Nodejs', 'Express', 'jest/supertest', 'jwtwebtokens'],
        database: ['PostgreSql']
    },
    features: [
        'Create an account and log in',
        'View available football pitches',
        'See available time slots by date',
        'Book pitches for a selected time',
        'View and manage personal reservations',
        'Add/delete football pitches as an admin',
        'See bookings for a day as an admin',
        'Make bookings for customers who called in as an admin'
    ],
    name: "Booking Platform",
    liveDemo: "https://complex-sportiv.vercel.app",
    description: "A full-stack web application for booking football pitches online, built as a thesis project at Vasile Alecsandri University of Bacău. The platform allows users to browse available time slots, reserve fields, and manage bookings, while providing admins with tools to manage pitches and schedules.",
},
{
    path: knightImg,
    id: '1',
    source: 'https://github.com/Marian421/knight-travails',
    techStack:{
        backend: ['Javascript']
    },
    features: [
        'Uses Breadth-First Search for pathfinding',
        'Calculates valid knight moves with board boundaries',
        'Tracks predecessors to reconstruct the full path'
    ],
    name: "Knight Travails",
    liveDemo: "",
    description: "A simple algorithmic visualization that calculates the shortest path a knight can take on an 8x8 chessboard, using Breadth-First Search (BFS).",
},
{
    path: todoListImg,
    id: '2',
    source: 'https://github.com/Marian421/todo-list',
    techStack: {
        frontend: [
            'JavaScript',
            'HTML',
            'CSS',
            'Webpack',
            'localStorage',
            'date-fns'
        ]
    },
    features: [
        'Create, edit, and delete tasks',
        'Assign due dates and priorities',
        'Organize tasks into separate projects',
        'Persistent data using localStorage',
        'Modular code using ES6 modules',
        'Built with Webpack'
    ],
    name: "Todo list",
    liveDemo: "",
    description: "A dynamic, modular, and persistent ToDo List application built as part of The Odin Project curriculum, using only JavaSript and CSS",
},
{
    path: ticTacToeImg,
    id: '3',
    source: 'https://github.com/Marian421/tic-tac-toe',
    techStack: {
        frontend: [
            'JavaScript',
            'Html',
            'CSS'
        ]
    },
    features: [
        'Two player mode with X and O',
        'Turn-by-turn UI player display',
        'Win and draw detection',
        'Game reset functionality',
        'Code fully organized usind module pattern'
    ],
    name: "Tic Tac Toe",
    liveDemo: "",
    description: "A browser-based implementation of the classic Tic-Tac-Toe game, built as part of The Odin Project curriculum. This project focuses on modular JavaScript, using factory functions, IIFE modules, and clean architecture to separate game logic, display handling, and state management.",
    
}
];

export default projects;
