import React from 'react'

const NxtWatchContext = React.createContext({
  lightMode: 'light',
  savedVideosList: [],
  activeView: '',
  onChangeDisplayMode: () => {},
  onChangeActiveView: () => {},
  onAddVideo: () => {},
  onRemoveSavedVideo: () => {},
})

export default NxtWatchContext
