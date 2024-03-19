import styled from "styled-components";

export const colors = {
    primary: 'blue',
    secundary: 'dargray',
    danger: 'red',
    warning: 'yellow',
    rosado: '#c71550',
    gris: '#333',
    ligth: '#dff5ff',

    }


    export const theme = {
        fg: '#BF4F74',
        bg: 'white'
        
    };

    export const invertTheme = ({fg, bg}) =>({
        fg: bg,
        bg: fg
    });

    export const ButtonVM = styled.button`
       color: ${props => props.theme.fg};
    border: 2px solid ${props => props.theme.fg};
    background: ${props => props.theme.bg};

    font-size: 1em;
    margin: 0;
    padding: 0%.25em 1em;
    cursor: pointer;
    margin-bottom: 1em;
    `;