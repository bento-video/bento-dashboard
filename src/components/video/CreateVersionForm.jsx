import React, { useState } from "react";
import { resolutionOptions } from "../../helpers";

const CreateVersionForm = ({
  onCreateVersion,
  onClose,
  resLimit,
  videoId,
  filename,
}) => {
  const [selectedResolution, setSelected] = useState(resLimit);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedResolution);
    onCreateVersion(videoId, filename, selectedResolution);
    onClose();
  };

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  const formOptions = resolutionOptions(resLimit);
  return (
    <form onSubmit={handleSubmit} id="create-version-form">
      <fieldset className="form-group">
        {formOptions.map((opt, idx) => (
          <div className="form-check" key={opt}>
            <input
              type="radio"
              className="form-check-input"
              id={opt}
              value={opt}
              checked={opt === selectedResolution}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor={opt}>
              <div>{`${opt}${idx === 0 ? " (Original resolution)" : ""}`}</div>
            </label>
          </div>
        ))}
      </fieldset>
      <div className="row">
        <button type="button" className="btn btn-secondary" onClick={onClose}>
          Close
        </button>
        <button type="submit" className="btn btn-success">
          Begin job
        </button>
      </div>
    </form>
  );
};

export default CreateVersionForm;
