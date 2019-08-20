const theme = {
    primary: "#f8509a",
    secondary: "#fe62a7",
    tertiary: "#7349FC",
    alt: "#7c54ff",
    upgrade: "#fcae3f",
    background: "#f5f5f5",
    body: "#ffffff",
    text: "#000000",
    textAlt: "#989898",
    facebook: "#3b5999",
    google: "#DB4437",

}

theme.headerBg = theme.body;
theme.headerBorder = theme.secondary;
theme.headerColor = theme.text;
theme.headerColorAlt = theme.textAlt;
theme.headerTransparentColor = theme.body;
theme.tabBg = theme.body;
theme.tabBgActive = theme.body;

window.fs = function (size) {

    //scale font size here

    return size;

};


window.theme = theme;
export default theme;