import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import { table, thead, tbody } from 'semantic-ui-react';

const Stat = ({ all, today }) => {
  return (
    <table class="ui celled table">
            <thead>
              <tr><th>Де?</th>
              <th>Захворіли сьогодні</th>
              <th>Захворіли всього</th>
              </tr></thead>
          <tbody>
            <tr>
              <td data-label="Name">Україна</td>
              <td data-label="Today">{today}</td>
              <td data-label="All">{all}</td>
          </tr>
          <tr>
              <td data-label="Name">Світ</td>
              <td data-label="Today">{today}</td>
              <td data-label="All">{all}</td>
          </tr>
            </tbody>
            </table>
  );
};

export default Stat;