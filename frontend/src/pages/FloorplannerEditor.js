import React from "react";

const FloorPlannerEditor = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Floor Planner Editor</h1>

      {/* Embed Sweet Home 3D Design Tool */}
      <div className="mb-6">
        <iframe
          width="100%"  // Makes it responsive to screen size
          height="600"  // Set iframe height
          src="https://roomstyler.com/3dplanner"  // Sweet Home 3D Embed URL
          frameborder="0"
          title="Sweet Home 3D Floor Planner"
        ></iframe>
      </div>
    </div>
  );
};

export default FloorPlannerEditor;
