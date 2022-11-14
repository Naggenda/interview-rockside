// import React, { useState } from "react";
// import Form from "../Questions/partials/form";
// import Answers from "../Answers/partials/Ansform";

const preview = (props) => {
  return (
    <div className="preview-questions">
      <div className="title">
        <h3>Candidate Personality Test</h3>
      </div>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th></th>
            {props.data}
          </tr>
        </thead>
        <tbody>
          <tr>
            {props.info}
            <td>
              <input type="radio" name="select" id="" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default preview;
