import {Switch, Route, Redirect} from 'react-router-dom'

import {Component} from 'react'

import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import GamingVideos from './components/GamingVideos'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import PageNotFound from './components/PageNotFound'
import NxtWatchContext from './context/NxtWatchContext'

// Replace your code here
class App extends Component {
  state = {lightMode: 'light', savedVideosList: [], activeView: ''}

  onChangeDisplayMode = () => {
    this.setState(prevState => ({
      lightMode: prevState.lightMode === 'light' ? 'dark' : 'light',
    }))
  }

  onChangeActiveView = viewId => {
    this.setState({activeView: viewId})
  }

  onAddVideo = newVideo => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, newVideo],
    }))
  }

  onRemoveSavedVideo = id => {
    this.setState(prevState => ({
      savedVideosList: prevState.savedVideosList.filter(item => item.id !== id),
    }))
  }

  render() {
    const {lightMode, savedVideosList, activeView} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          lightMode,
          savedVideosList,
          activeView,
          onChangeDisplayMode: this.onChangeDisplayMode,
          onChangeActiveView: this.onChangeActiveView,
          onAddVideo: this.onAddVideo,
          onRemoveSavedVideo: this.onRemoveSavedVideo,
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={GamingVideos} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={PageNotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
