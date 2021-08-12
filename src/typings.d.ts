interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
}

interface Promise {
    [key:string]: import("axios").Canceler;
}