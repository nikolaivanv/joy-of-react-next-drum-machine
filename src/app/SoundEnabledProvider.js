"use client";

import React from "react";

const SoundEnabledContext = React.createContext();

const SoundEnabledProvider = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = React.useState(true);
  return (
    <SoundEnabledContext value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </SoundEnabledContext>
  );
};

const useSoundEnabled = () => {
  const { soundEnabled, setSoundEnabled } =
    React.useContext(SoundEnabledContext);
  return { soundEnabled, setSoundEnabled };
};

export default SoundEnabledProvider;
export { SoundEnabledContext, useSoundEnabled };
