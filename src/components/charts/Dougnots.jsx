import React from 'react'
import {Bar,Radar,PolarGrid,PolarAngleAxis,PolarRadiusAxis, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, BarChart } from 'recharts';
const Dougnots = () => {
    const data = [
        {
          subject: 'Math',
          A: 120,
          B: 110,
          fullMark: 150,
        },
        {
          subject: 'Chinese',
          A: 98,
          B: 130,
          fullMark: 150,
        },
        {
          subject: 'English',
          A: 86,
          B: 130,
          fullMark: 150,
        },
        {
          subject: 'Geography',
          A: 99,
          B: 100,
          fullMark: 150,
        },
        {
          subject: 'Physics',
          A: 85,
          B: 90,
          fullMark: 150,
        },
        {
          subject: 'History',
          A: 65,
          B: 85,
          fullMark: 150,
        },
      ];
      
  return (
    <div>
         <ResponsiveContainer width="100%" aspect={3}>
       <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="subject" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="A" fill="#8884d8" />
        <Bar dataKey="B" fill="#82ca9d" />
        </BarChart>


         </ResponsiveContainer>

    </div>
  )
}

export default Dougnots