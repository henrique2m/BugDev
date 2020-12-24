/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import {BugProps} from '.';

export const Container = styled.div<BugProps>`

   @keyframes moveLeftToRight${props => props.coords.xB} {
      from { 
         transform: translate(
            ${props => props.coords.xA}px,
            ${props => props.coords.yA}px
         ) rotate(0deg);
      }
      to {
         transform: translate(
            ${props => props.coords.xB}px,
            ${props => props.coords.yB}px
         ) rotate(${props => props.rotate.x}deg);
      }
   }

   main {
      width: 5.0rem;
      height: 5.0rem;
      background: #eee;
      position: absolute;
      border-radius: 50%;
      animation: moveLeftToRight${props => props.coords.xB} ${props => props.speed}s ease infinite alternate;
      z-index: ${props => props.speed};
   }

   @keyframes wing2Rotation {
      from { 
         transform: rotate(0deg);
         filter: drop-shadow(5px 5px 5px #fff);
      }
      to {
         transform: rotate(45deg);
         filter: drop-shadow(8px 8px 8px #fd0);
      }
   }


   main div {
      width: 5.0rem;
      height: 5.0rem;
      background-color: #eee;
      background: url(${props => props.avatarUrl}) no-repeat;
      background-size: cover;
      border: 1px solid #ffffff;
      border-radius: 50%;
		box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.22);
      z-index: 1; 
   }
   

   main div #wing2 {
      position: absolute;
      margin-left: -5.0rem;
      animation: wing2Rotation 2s ease infinite alternate;
      transform-origin: right bottom;
      z-index: -1;
   }

   @keyframes wing1Rotation {
      from { 
         transform: rotate(0deg);
         filter: drop-shadow(5px 5px 5px #fff);
      }
      to {
         transform: rotate(45deg);
         filter: drop-shadow(8px 8px 8px #fd0);
      }
   }

   main div #wing1 {
      position: absolute;
      margin-top: 3.0rem;
      margin-left: 3.0rem;
      animation: wing1Rotation 2s ease infinite alternate;
      transform-origin: left top;
      z-index: -1;
   }

   @keyframes wing3Rotation {
      from { 
         transform: rotate(90deg);
         filter: drop-shadow(5px 5px 5px #fff);
      }
      to {
         transform: rotate(45deg);
         filter: drop-shadow(8px 8px 8px #fd0);
      }
   }

   main div #wing3 {
      position: absolute;
      margin-top: -3.0rem;
      margin-left: -2.0rem;
      animation: wing3Rotation 2s ease infinite alternate;
      transform-origin: right bottom;
      z-index: -1;
   }

   @keyframes wing4Rotation {
      from { 
         transform: rotate(90deg);
         filter: drop-shadow(5px 5px 5px #fff);
      }
      to {
         transform: rotate(45deg);
         filter: drop-shadow(8px 8px 8px #fd0);
      }
   }

   main div #wing4 {
      position: absolute;
      margin-top: 3.0rem;
      margin-left: 2.0rem;
      animation: wing4Rotation 2s ease infinite alternate;
      transform-origin: left top;
      z-index: -1;
   }
`;