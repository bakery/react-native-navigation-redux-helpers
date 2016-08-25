# React Native Navigation Redux helpers
[![Travis build status](http://img.shields.io/travis/thebakeryio/react-native-navigation-redux-helpers.svg?style=flat)](https://travis-ci.org/thebakeryio/react-native-navigation-redux-helpers)
[![Code Climate](https://codeclimate.com/github/thebakeryio/react-native-navigation-redux-helpers/badges/gpa.svg)](https://codeclimate.com/github/thebakeryio/react-native-navigation-redux-helpers)
[![Test Coverage](https://codeclimate.com/github/thebakeryio/react-native-navigation-redux-helpers/badges/coverage.svg)](https://codeclimate.com/github/thebakeryio/react-native-navigation-redux-helpers)
[![Dependency Status](https://david-dm.org/thebakeryio/react-native-navigation-redux-helpers.svg)](https://david-dm.org/thebakeryio/react-native-navigation-redux-helpers)
[![devDependency Status](https://david-dm.org/thebakeryio/react-native-navigation-redux-helpers/dev-status.svg)](https://david-dm.org/thebakeryio/react-native-navigation-redux-helpers#info=devDependencies)

Reducers and actions to implement navigation in React Native applications (RN 0.28.0+)

## When to use this

- you are using RN ExperimentalNavigation
- you are using Redux
- you do not want to write and re-write your own actions and reducers for navigation

## Getting started

```bash
npm install --save react-native-navigation-redux-helpers
```

### Card navigation

Define your card reducer 

```javascript
import { cardStackReducer } from 'react-native-navigation-redux-helpers';

const initialState = {
  key: 'global',
  index: 0,
  routes: [
    {
	  key: 'applicationSection1',
      index: 0
    },
  ],
};

module.exports = cardStackReducer(initialState);
```

Use this reducer in NavigationCardStack in your component

```javascript
import { NavigationExperimental } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';

const {
  popRoute,
  pushRoute,
} = actions;

const {
  CardStack: NavigationCardStack
} = NavigationExperimental;

class GlobalNavigation extends Component {
	render() {
		return (
      <NavigationCardStack
        navigationState={this.props.navigation}
        renderOverlay={this._renderOverlay}
        renderScene={this._renderScene}
      />
		);
	}

  /* ... */

	onGoBack() {
    const { dispatch, navigation } = this.props;
    dispatch(popRoute(navigation.key));
	}

  onGoSomewhere() {
    const { dispatch, navigation } = this.props;
    dispatch(pushRoute({ key: 'sowhere else' }, navigation.key));
  }
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

function mapStateToProps(state) {
	return {
	    // XX: assuming you've registered the reducer above under the name 'cardNavigation'
		navigation: state.cardNavigation
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalNavigation);

```

### Tab navigation

Define your tab reducer

```javascript
import { tabReducer } from 'react-native-navigation-redux-helpers';

const tabs = {
  routes: [
    { key: 'feed', title: 'Items' },
    { key: 'notifications', title: 'Notifications' },
    { key: 'settings', title: 'Settings' }
  ],
  key: 'ApplicationTabs',
  index: 0
};

module.exports = tabReducer(tabs);
```

And now put it to good use inside your component

```javascript
import { TabBarIOS } from 'react-native';
import React, { Component } from 'react';
import Feed from '../Feed';
import { connect } from 'react-redux';
import { actions as navigationActions } from 'react-native-navigation-redux-helpers';

const { jumpTo } = navigationActions;

class ApplicationTabs extends Component {
	_renderTabContent(tab) {
		if (tab.key === 'feed') {
			return (
				<Feed />
			);
		}

		/* ... */
	}

	render() {
		const { dispatch, navigation } = this.props;
		const children = navigation.routes.map( (tab, i) => {
			return (
				<TabBarIOS.Item key={tab.key}
						icon={tab.icon}
						selectedIcon={tab.selectedIcon}
						title={tab.title} onPress={ () => dispatch(jumpTo(i, navigation.key)) }
						selected={this.props.navigation.index === i}>
						{ this._renderTabContent(tab) }
				</TabBarIOS.Item>
			);
		});
		return (
			<TabBarIOS tintColor="black">
				{children}
			</TabBarIOS>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

function mapStateToProps(state) {
	return {
		// XX: assuming your tab reducer is registered as 'tabs'
		navigation: state.tabs
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(ApplicationTabs);
```

## Supported actions

### cardStackReducer

- pushRoute
- popRoute
- jumpTo
- reset
- replaceAt
- replaceAtIndex
- jumpToIndex
- back
- forward

### tabReducer

- jumpTo
- jumpToIndex

## Complete examples

- [Example using RN experimental navigation with Redux](https://github.com/thebakeryio/react-native-complex-nav)
- [TodoMVC React Native](https://github.com/thebakeryio/todomvc-react-native)

