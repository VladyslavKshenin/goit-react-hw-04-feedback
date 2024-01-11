import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle(() => {
    return {
        body: {
            minHeight: '100vh',
            background: 'linear-gradient(45deg, #8B4513, #A0522D)',
            placeContent: 'center',
            textAlign: 'center',
        },
        ul: {
            listStyle: 'none',
            padding: '0',
            margin: '0',
        },
        li: {
            listStyle: 'none',
            padding: '0',
            margin: '0', 
          }
    }
})