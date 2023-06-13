import React, { useState } from 'react';
import { Radar } from 'react-chartjs-2'
import './Status.css';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const Status = ({selected_number, pokemon_img }) => {
  const data = {
    labels: ['HP', 'こうげき', '防御', 'すばやさ', 'とくぼう', 'とくこう'],
    datasets: [
      {
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointRadius: 0,
        borderWidth: 0,
        data: [
          pokemon_img[selected_number].stats[0].base_stat,
          pokemon_img[selected_number].stats[1].base_stat,
          pokemon_img[selected_number].stats[2].base_stat,
          pokemon_img[selected_number].stats[3].base_stat,
          pokemon_img[selected_number].stats[4].base_stat,
          pokemon_img[selected_number].stats[5].base_stat
        ],
      },
    ],
  };
  const option = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scale: {
      ticks: {
        beginAtZero: true,
        stepSize: 20,
        max: 200,
        display: false
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        font:{
          size: 14
        }
      }
    }
  };

  return (
    <div>
      <div className="Graph">
      <Radar data={data} options={option} width="400px" height="400px"/>
      </div>
    </div>
  )
}

export default Status