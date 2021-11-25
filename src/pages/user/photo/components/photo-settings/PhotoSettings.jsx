import React, { useState } from "react";
import { QUALITY, toggleQuality } from "../../photoPageSlice";
import { useSelector, useDispatch } from "react-redux";
import { SettingsIcon } from "components/icons";
import "./photo-settings.css";

const PhotoSettings = () => {
  const quality = useSelector((state) => state.photopage.quality);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleQualityChange = () => {
    dispatch(toggleQuality());
  };

  const handleToggleClick = () => {
    setOpen(!open);
  };

  return (
    <div id="photo-settings" className={open ? "open" : ""}>
      <button className="toggle" onClick={handleToggleClick}>
        <SettingsIcon />
      </button>
      <div className="content">
        <button
          className={`qualityToggle ${
            quality === QUALITY.HD ? "selected" : ""
          }`}
          onClick={handleQualityChange}
        >
          4K
        </button>
      </div>
    </div>
  );
};

export default PhotoSettings;
