import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const RiffleButton = () => {
  const [ripple, setRipple] = useState({ status: false })

  const onClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()

    const top = (event.clientY - rect.top) + "px"
    const left = (event.clientX - rect.left) + "px"

    setRipple({ status: true, top, left })

    setTimeout(() => {
      setRipple({ status: false })
    }, 500)

  }

  return (
    <Wrapper onClick={onClick} ripple={ripple}>
      Click me
      {ripple.status && <span className='ripple'></span>}
    </Wrapper>
  )
}


const rippleMe = keyframes`
  0%{
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  50%{
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`

const Wrapper = styled.button`
  padding: 16px 30px;

  border: 0;
  background: #506dd6e8;
  border-radius: 56px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  color: #FFFFFF;
  cursor: pointer;

  position: relative;
  overflow: hidden;

  /* ripple */
  .ripple{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color:rgb(255, 255, 255, 0.2) ;
  
    position: absolute;
    top: ${({ ripple }) => ripple.top};
    left: ${({ ripple }) => ripple.left};
    transform: translate(-50%, -50%);
  
    animation-name: ${rippleMe};
    animation-duration: .6s;
    animation-timing-function: linear;
  }
`

export default RiffleButton