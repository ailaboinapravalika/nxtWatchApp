import Loader from 'react-loader-spinner'

const LoadingView = () => (
  <div
    className="loader-container"
    data-testid="loader"
    style={{
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
  </div>
)

export default LoadingView
