import React, { useState } from "react";
import Form from "../Questions/partials/form";

const preview = ({ data }) => {
  return (
    <div className="preview-questions">
    <div className="title">
    <h3>Candidate Personality Test</h3>
    </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Excelent</th>
            <th>Good</th>
            <th>Fair</th>
            <th>Poor</th>
          </tr>
          <tr>
            <td>Engilish Level</td>
            <td>
              <input type="radio" />
            </td>
            <td>
              <input type="radio" />
            </td>
            <td>
              <input type="radio" />
            </td>
            <td>
              <input type="radio" />
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
};
export default preview;
