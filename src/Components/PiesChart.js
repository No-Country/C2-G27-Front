import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip
} from 'recharts'

/* DATOS DE EJEMPLO */
const data01 = [
  {
    "name": "Group A",
    "value": 400
  },
  {
    "name": "Group B",
    "value": 300
  },
  {
    "name": "Group C",
    "value": 300
  },
  {
    "name": "Group D",
    "value": 200
  },
  {
    "name": "Group E",
    "value": 278
  },
  {
    "name": "Group F",
    "value": 189
  }
];
const data02 = [
  {
    "name": "Group G",
    "value": 2400
  },
  {
    "name": "Group H",
    "value": 4567
  },
  {
    "name": "Group I",
    "value": 1398
  },
  {
    "name": "Group J",
    "value": 9800
  },
  {
    "name": "Group K",
    "value": 3908
  },
  {
    "name": "Group L",
    "value": 4800
  }
];
/*  */

const COLORS01 = ['#0088FE', '#C0C49F', '#FFBB28', '#FF8042'];
const COLORS02 = ['#B097ED', '#0B85EE', '#FF9728', '#FF6809'];

export default function PiesChart() {
  return (
    <ResponsiveContainer width="99%" height="99%">
      <PieChart
      width={500}
      height={400}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
        <Pie data={data02} nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} dataKey="value" >
          {
            data02.map((entry, index) => (
              <Cell key={entry} fill={COLORS02[index % COLORS02.length]} />
            ))
          }
        </Pie>
        <Pie data={data01} fill="black" nameKey="name" cx="50%" cy="50%" outerRadius={50} dataKey="value" >
          {
            data01.map((entry, index) => (
              <Cell key={entry} fill={COLORS01[index % COLORS01.length]} />
            ))
          }
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}