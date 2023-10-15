import classes from './Label.module.css'

export const calculateStyles = (label: string) => {
    switch (label) {
        case "bug":
            return classes.red;
        case "enhancement":
            return classes.cyan;
        case "help":
            return classes.lime;
        case "wontfix":
            return classes.white;
        case "question":
            return classes.orange;
        case "duplicate":
            return classes.rebeccapurple;
        case "feature":
            return classes.blue;
        default:
            return "";
    }
};

export const calculateSelectedStyles = (label: string) => {
    switch (label) {
        case "bug":
            return classes.redSelected;
        case "enhancement":
            return classes.cyanSelected;
        case "help":
            return classes.limeSelected;
        case "wontfix":
            return classes.whiteSelected;
        case "question":
            return classes.orangeSelected;
        case "duplicate":
            return classes.rebeccapurpleSelected;
        case "feature":
            return classes.blueSelected;
        default:
            return "";
    }
};