const Loading = () => {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img src="/static/images/logo.png" />
      <h1
        style={{
          color: '#F5C518',
          marginTop: '2em',
          fontSize: 25,
          fontFamily: 'sans-serif',
        }}
      >
        Loading.. Please wait.
      </h1>
    </div>
  );
};

export default Loading;
