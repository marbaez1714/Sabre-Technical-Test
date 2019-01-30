import React from 'react';
import style from './tabInterface.css'

// all of the css for the component
let styles = {
    // styles for the box that holds the tab interface
    general: {
        fontSize: '125%',
        lineHeight: '1.5',
        fontFamily: '"Lato", Arial, sans-serif',
        fontSize: '16px',
        maxWidth: '40rem'
    },
    // contains the top tabs and styles them
    topTabContainer: {
        marginBottom: '0',
        paddingLeft: '1vw'
    },
    // basic styling for the top tabs of the interface
    topTabs: {
        display: 'inline-block',
        textDecoration: 'none',
        background: '#fff',
        position: 'relative',
    },
    // styling for the top tabs after being selected
    tabActive: {
        color: 'black',
        display: 'inline-block',
        textDecoration: 'none',
        padding: '0.5rem 1em',
        background: '#fff',
        position: 'relative',
        top: '2px',
        border: '2px solid',
        borderBottom: '0',
    },
    // stlying for the tabs that are not selected - ensures that there is a border underneath them
    tabInactive: {
        color: 'black',
        display: 'inline-block',
        padding: '0.5rem 1em',
        textDecoration: 'none',
        background: '#fff',
        position: 'relative',
    },
    // styling for the panel that is visible to the user
    panelActive: {
        border: '2px solid',
        position: 'realtive',
        marginLeft: '1vw',
        marginTop: '0rem',
        padding: '1.5rem',
        paddingBottom: '0'
    },
    // sets the margin for the title of the panel 
    panelTitle: {
        margin: '0',
    },
    arror: {
        display: 'none',
    }
}

// creates tabs for each of the sections passed through the tabs prop in the TabInterface Class
// loops through each object passed to it to allow for easy updating
function TopTabs(props) {
    let { styleProps, tabs, handleSelectTab } = props;
    return (
        <ul style={styleProps.topTabContainer}>
            {tabs.map((tab, idx) =>
                <li className='topTabs'
                    key={idx}
                    style={styleProps.topTabs}// helps add the border based on whether or not it is selected
                    onClick={event => handleSelectTab(idx)}                             // sets the tab to active
                >
                    <a className='topLinks' href="javascript:;" style={tab.tabOpen ? styleProps.tabActive : styleProps.tabInactive}>
                        {tab.tabName /* adds in the tabs name from the props */}
                        {tab.tabOpen ? <p className='arrow' style={styleProps.arror}>⬅</p> : ''}
                    </a>
                </li>
            )}
        </ul>
    )
}
// active panel text
function TabText(props) {   // adds in the tab text
    let { styleProps, tabs, selectedTab } = props; // cleans up the names of the variables for clearity 
    return (
        <div className='tabTextHolder' style={styleProps.panelActive}>
            <h2 style={styleProps.panelTitle} >{tabs[selectedTab].tabName}</h2>
            {tabs[selectedTab].tabText}
        </div>
    )
}

export default class TabInterface extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabs: props.tabs,
            selectedTab: 0,
            styleProps: styles
        }
        this.selectTab = this.selectTab.bind(this);
    }


    selectTab(tabNumber) {
        // function to select the tab, will be passed the the tab component
        // create a state holder to keep things simple
        // sets all tabs to not be open 
        // sets corret tab to be open
        // updates the state
        let tabStates = this.state.tabs;
        tabStates.forEach(tab => tab.tabOpen = false)
        tabStates[tabNumber].tabOpen = true;
        this.setState({ tabs: tabStates, selectedTab: tabNumber })
    }

    componentDidMount() {
        // makes sure that the first tab is open by default 
        let tabStates = this.state.tabs;
        tabStates[0].tabOpen = true
        this.setState({ tabs: tabStates })
    }

    render() {
        return (
            <div style={this.state.styleProps.general}>
                <TopTabs
                    // sends the tab information to the tab container
                    // callback function that selects the tab 
                    // callback function that adds the box outline 
                    styleProps={this.state.styleProps}
                    tabs={this.state.tabs}
                    handleSelectTab={this.selectTab}
                />
                <TabText
                    // sends the tab information to the tab container
                    // send the panel infromation to the panel container
                    styleProps={this.state.styleProps}
                    tabs={this.state.tabs}
                    selectedTab={this.state.selectedTab}
                />

            </div>
        )
    }
}