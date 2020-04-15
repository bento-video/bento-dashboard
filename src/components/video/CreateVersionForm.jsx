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
      <fieldset class="form-group">
        {formOptions.map((opt, idx) => (
          <div class="form-check">
            <input
              type="radio"
              class="form-check-input"
              id={opt}
              value={opt}
              checked={opt === selectedResolution}
              onChange={handleChange}
            />
            <label class="form-check-label" for={opt}>
              <div>{`${opt}${idx === 0 ? " (Original resolution)" : ""}`}</div>
            </label>
          </div>
        ))}
      </fieldset>
      <div class="row">
        <button type="button" class="btn btn-secondary" onClick={onClose}>
          Close
        </button>
        <button type="submit" class="btn btn-success">
          Begin job
        </button>
      </div>
    </form>
  );
};

export default CreateVersionForm;
