import React from 'react';


let styles = {
    toggletipContainer: {
        position: 'relative',
        display: 'inline-block',
        fontFamily: 'sans-serif'
    },
    toggletipBubble: {
        display: 'inline-block',
        position: 'absolute',
        left: '100%',
        top: '0',
        width: '10em',
        padding: '0.5rem',
        background: '#000',
        color: '#fff',
        fontSize: '150%',

    },
    button: {
        width: '2em',
        height: '2em',
        borderRadius: '50%',
        border: '0',
        background: '#000',
        fontFamily: 'serif',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: '150%',

    }
}










export default class InfoButton extends React.Component {
    render() {



        return (
            <span style={styles.toggletipContainer}>
                <button style={styles.button} type="button" aria-label="more info" data-toggletip-content="This clarifies whatever needs clarifying">i</button>
                <span style={styles.toggletipBubble}>This clarifies whatever needs clarifying</span>
            </span>
        )
    }
}