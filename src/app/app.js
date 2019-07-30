import React from "react"

const AppContext = React.createContext({});

export const AppProvider = AppContext.Provider

export const AppConsumer = AppContext.Consumer

export const withApp = (Component) => {

    return function LayoutComponent(props) {

        return (
            <AppConsumer>
                {app => <Component {...props} app={app} />}
            </AppConsumer>
        );

    };

}
