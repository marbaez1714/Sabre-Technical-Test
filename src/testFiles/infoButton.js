import React from 'react';
import style from './infoButton.css'


let styles = {
    // helps style the container of the info button
    toggletipContainer: {
        position: 'relative',
        display: 'inline-block',
        fontFamily: 'sans-serif'
    },
    // styles the info button
    infoButton: {
        width: '2em',
        height: '2em',
        borderRadius: '50%',
        border: '0',
        background: '#000',
        fontFamily: 'serif',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: '150%',
    },
    // styles for the tooltip for when it is displayed
    toggletipBubbleOn: {
        display: 'inline-block',
        position: 'absolute',
        left: '100%',
        top: '0',
        width: '10em',
        padding: '0.5rem',
        background: '#000',
        color: '#fff',
        fontSize: '150%',
        border: '0'
    },
    // hides the tooltip when not needed
    toggletipBubbleOff: {
        display: 'none',
    }
}

export default class InfoButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showToolTip: false
        }
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleToggleTip = this.handleToggleTip.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this)
    }

    // creates a listener to see when the user clicks outide of the tooltip
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    // removes the listener
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    // sets a node that the listener is looking for a mousedown in
    setWrapperRef(node) {
        this.wrapperRef = node;
    }
    // what happens when you click outide of the box - it removes the tooltip
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ showToolTip: false })
        }
    }
    // toggles the tooltip on and off
    handleToggleTip() {
        let toggle = !this.state.showToolTip
        this.setState({ showToolTip: toggle })
    }

    render() {
        return (
            <span style={styles.toggletipContainer} ref={this.setWrapperRef}>
                <button
                    className="infoButton"
                    style={styles.infoButton}
                    onClick={event => this.handleToggleTip()}
                    type="button"
                    aria-label="more info"
                >i</button>
                <button
                    style={this.state.showToolTip ? styles.toggletipBubbleOn : styles.toggletipBubbleOff}
                    onClick={event => this.handleToggleTip()}
                    onBlur={event => this.handleToggleTip()}
                >This clarifies whatever needs clarifying</button>
            </span>
        )
    }
}