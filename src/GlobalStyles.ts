import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  font-size: 60%;
  --color-background: #292929;
  --color-text-base: #FFFFFF;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root {
  height: 100vh;
}

body {
  background: var(--color-background);
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  overflow: hidden;
}

#root {
  display: flex;
  align-items: center;
  justify-content: center;
}

body,
input,
button,
textarea {
  color: var(--color-text-base);
  border: 0;
  box-shadow: 0 0 0 0;
  outline: 0;
}
`;
