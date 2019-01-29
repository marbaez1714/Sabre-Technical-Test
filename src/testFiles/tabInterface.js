import React from 'react';


let styles = {
    // basic styling for the top tabs of the interface
    topTabs: {
        display: 'inline-block',
        textDecoration: 'none',
        padding: '0.5rem 1em',
        background: '#fff',
        position: 'relative',
        top: '2px'
    },
    // styling for the top tabs after being selected
    tabActive: {
        border: '2px solid',
        borderBottom: '0',
    }
}

// creates tabs for each of the sections passed through the tabs prop in the TabInterface Class
// loops through each object passed to it to allow for easy updating
function TopTabs(props) {
    return (
        <ul>
            {props.tabs.map((tab, idx) =>
                <li
                    style={tab.tabOpen ? { ...styles.topTabs, ...styles.tabActive } : styles.topTabs}   // helps add the border based on whether or not it is selected
                    onClick={event => props.selectTab(idx)}                                             // selects the tab
                >
                    {/* adds in the tabs name from the props */}
                    {tab.tabName}
                </li>
            )}
        </ul>
    )
}

function TabText(props) {   // adds in the tab text
    let { tabs, selectedTab } = props; // cleans up the names of the variables for clearity 
    return (
        <section id="section1">
            <h2>{tabs[selectedTab].tabName}</h2>
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

    componentDidMount() { // makes sure that the first tab is open by default 
        let tabStates = this.state.tabs;
        tabStates[0].tabOpen = true
        this.setState({ tabs: tabStates })
    }

    render() {
        return (
            <div class="tabbed">
                <TopTabs
                    tabs={this.state.tabs}
                    selectTab={this.selectTab}
                />
                <TabText
                    tabs={this.state.tabs}
                    selectedTab={this.state.selectedTab}
                />
            </div>
        )
    }

}