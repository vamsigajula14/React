import React from "react";

import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <ProfileCard
        name="Vamsi Gajula"
        age={25}
        bio="Full-stack developer 🚀 | Loves React"
        image =  '\src\assets\react.svg'
        initialFollowers={120}
      />
    </div>
  );
}

export default App;