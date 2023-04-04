import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartBoard = () => {

    const students = [
        { id: 1, name: 'Alice', phy: 80, chem: 45, math: 65, eng: 90 },
        { id: 2, name: 'Bob', phy: 40, chem: 65, math: 45, eng: 80 },
        { id: 3, name: 'Charlie', phy: 50, chem: 85, math: 75, eng: 90 },
        { id: 4, name: 'David', phy: 40, chem: 65, math: 55, eng: 70 },
        { id: 5, name: 'Emma', phy: 85, chem: 40, math: 80, eng: 85 },
        { id: 6, name: 'Frank', phy: 75, chem: 50, math: 75, eng: 80 },
        { id: 7, name: 'Grace', phy: 55, chem: 90, math: 45, eng: 95 },
        { id: 8, name: 'Harry', phy: 45, chem: 40, math: 50, eng: 75 },
        { id: 9, name: 'Isabelle', phy: 90, chem: 43, math: 80, eng: 85 },
        { id: 10, name: 'Jack', phy: 80, chem: 45, math: 70, eng: 75 },
        { id: 11, name: 'Katie', phy: 35, chem: 50, math: 85, eng: 90 },
        { id: 12, name: 'Luke', phy: 65, chem: 70, math: 75, eng: 80 },
        { id: 13, name: 'Mia', phy: 75, chem: 70, math: 45, eng: 95 },
        { id: 14, name: 'Nate', phy: 60, chem: 65, math: 70, eng: 75 },
        { id: 15, name: 'Olivia', phy: 85, chem: 80, math: 85, eng: 90 },
      ];
      
    return (
        <div className='py-10 mx-auto'>
            <h2 className='mt-10 text-center text-4xl font-bold'>Your Dashboard</h2>
            <LineChart
            width={1000}
            height={500}
            data={students}
            >
                <Line dataKey="phy"></Line>
                <Line stroke="#8884d8" dataKey="chem"></Line>
                <Line stroke="#82ca9d" dataKey="math"></Line>
                <Line stroke="#a3288c" dataKey="eng"></Line>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default ChartBoard;