import styled from 'styled-components';
  
export const Container = styled.div`
   background-color: black;
   height: 5px;
   position: sticky;
   top: 0;
   left: 0;
   z-index: 1;
   width: 100%;
`
  
export const ProgressBar = styled.div`
   height: 15px;
   background-color: #998150;
`
export const ScrollContent = styled.div`
   overflowY: scroll;
`; 
  
export const Heading = styled.h1`
   text-align: center;
   font-size: 3rem;
`