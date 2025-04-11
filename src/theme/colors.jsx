const colors = {
    grey: (opacity = 1) => `rgba(109, 125, 154, ${opacity})`,
    blue: (opacity = 1) => `rgba(53, 88, 225, ${opacity})`,
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    darkYellow: (opacity = 1) => `rgba(204, 204, 0, ${opacity})`,
    orangeYellow: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`,
    warmYellow: (opacity = 1) => `rgba(255, 200, 0, ${opacity})`,
    deepOrangeYellow: (opacity = 1) => `rgba(218, 140, 0, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    darkModeBlack: (opacity = 1) => `rgba(27, 27, 27, ${opacity})`,
    darkModeBlue: (opacity = 1) => `rgba(146, 156, 241, ${opacity})`,
}
export default colors;