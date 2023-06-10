import './App.css';
import styled from 'styled-components';

// Buttons
import RiffleButton from './components/Buttons/RiffleButton';

function App() {
  return (
    <Wrapper>
      <RiffleButton />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  place-content: center;

  background-color: #edf2f8;
`

export default App;
