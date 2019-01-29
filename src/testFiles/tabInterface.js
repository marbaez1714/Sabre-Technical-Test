import React from 'react';

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
        padding: '0.5rem 1em',
        background: '#fff',
        position: 'relative',
        top: '2px',
    },
    // styling for the top tabs after being selected
    tabActive: {
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



}

// creates tabs for each of the sections passed through the tabs prop in the TabInterface Class
// loops through each object passed to it to allow for easy updating
function TopTabs(props) {
    return (
        <ul style={styles.topTabContainer}>
            {props.tabs.map((tab, idx) =>
                <li
                    style={tab.tabOpen ? styles.tabActive : styles.tabInactive}   // helps add the border based on whether or not it is selected
                    onClick={event => props.handleSelectTab(idx)}                                             // selects the tab
                >
                    {/* adds in the tabs name from the props */}
                    {tab.tabName}
                </li>
            )}
        </ul>
    )
}

// active panel text
function TabText(props) {   // adds in the tab text
    let { tabs, selectedTab } = props; // cleans up the names of the variables for clearity 
    return (
        <section style={styles.panelActive} id="section1">
            <h2 style={styles.panelTitle}>{tabs[selectedTab].tabName}</h2>
            {tabs[selectedTab].tabText}
        </section>
    )
}

export default class TabInterface extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabs: props.tabs,
            selectedTab: 0,
        }
        this.selectTab = this.selectTab.bind(this);
    }

    selectTab(tabNumber) {                                          // function to select the tab, will be passed the the tab component
        let tabStates = this.state.tabs;                            // create a state holder to keep things simple
        tabStates.forEach(tab => tab.tabOpen = false)               // sets all tabs to not be open 
        tabStates[tabNumber].tabOpen = true;                        // sets corret tab to be open
        this.setState({ tabs: tabStates, selectedTab: tabNumber })  // updates the state
    }

    componentDidMount() {                                           // makes sure that the first tab is open by default 
        let tabStates = this.state.tabs;
        tabStates[0].tabOpen = true
        this.setState({ tabs: tabStates })
    }

    render() {
        return (
            <div style={styles.general}>
                <TopTabs
                    tabs={this.state.tabs}                          // sends the tab information to the tab container
                    handleSelectTab={this.selectTab}                      // callback function that selects the tab 
                />
                <TabText
                    tabs={this.state.tabs}                          // sends the tab information to the tab container
                    selectedTab={this.state.selectedTab}            // send the panel infromation to the panel container
                />
            </div>
        )
    }
}