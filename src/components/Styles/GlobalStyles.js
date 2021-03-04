import {createGlobalStyle} from 'styled-components'

//global style
export const GlobalStyle = createGlobalStyle`

   :root{
      --primary-color: #F26A2E;
      --secondary-color: #3d5af1;
   }

  *{
      font-family: 'Poppins', sans-serif;
      margin:0;
      padding : 0;
      box-sizing:border-box;
      
      ${'' /* overflow-x:hidden; */}
  }
 


`