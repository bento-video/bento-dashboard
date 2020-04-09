import React, { Component } from 'react';

class CreateVersionForm extends Component {
  state = {};
  render() {
    return (
      <form action="#" method="post" id="create-version">
        <fieldset class="form-group">
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="4k_check" />
            <label class="form-check-label" for="4k_check">
              <div>4k</div>
              <span>(3,840 x 2,160)</span>
            </label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="1080_check" />
            <label class="form-check-label" for="1080_check">
              <div>1080p</div>
              <span>(1920x1080)</span>
            </label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="720_check" />
            <label class="form-check-label" for="720_check">
              <div>720p</div>
              <span>(1280x720)</span>
            </label>
          </div>
          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="480_check" />
            <label class="form-check-label" for="480_check">
              <div>480p</div>
              <span>(640x480)</span>
            </label>
          </div>
        </fieldset>
        <div class="row">
          <button
            type="button"
            class="btn btn-secondary"
            data-dismiss="modal">
            Close
        </button>
          <button type="submit" class="btn btn-success">
            Begin job
        </button>
        </div>
      </form>
    );
  }
}

export default CreateVersionForm;