import React from "react";

const Dislay = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="label">Label</label>
          <input type="text" className="form-control" name="label" />
        </div>
        <div className="form-group">
          <label htmlFor="position">Label Position</label>
          <input type="text" className="form-control" name="position" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea type="text" className="form-control" name="description" />
        </div>
        <div className="form-group">
          <label htmlFor="tooltip">Tooltip</label>
          <textarea type="text" className="form-control" name="tooltip" />
        </div>

        <div className="form-group">
          <label htmlFor="customclass">Custom Css Class</label>
          <input type="text" className="form-control" name="customclass" />
        </div>
        <div className="form-group">
          <label htmlFor="tabindex">Tab Index</label>
          <input type="text" className="form-control" name="tabindex" />
        </div>
      </form>
    </div>
  );
};

export default Dislay;
