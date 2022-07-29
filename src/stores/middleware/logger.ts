const logger = (param: { destination: string; }) => (store: any) => (next: (arg0: any) => void) => (action: { type: any; }) => {
    console.log("Logging", param, action.type);
    next(action);
};

export default logger;