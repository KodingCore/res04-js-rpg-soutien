let map = [
    ["W","W","W","S","G","G","G","G","G","D","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G"],
    ["W","W","S","S","G","G","G","G","G","D","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G"],
    ["W","S","S","G","G","G","G","G","D","D","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G"],
    ["W","S","G","G","G","G","G","G","D","G","G","G","G","G","G","G","G","G","W","G","G","G","G","G","G","G","G","G","G","G"],
    ["W","S","G","G","G","G","G","G","D","G","G","G","G","G","G","G","G","W","W","W","G","G","G","G","G","G","G","G","G","G"],
    ["W","S","S","G","G","G","G","G","D","G","G","G","G","G","G","G","W","W","W","W","W","G","G","G","G","G","G","G","G","G"],
    ["W","W","S","S","G","G","G","G","D","D","G","G","G","G","G","G","G","W","W","G","G","G","G","G","G","G","G","G","G","G"],
    ["W","W","W","S","G","G","G","G","G","D","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G"],
    ["W","W","W","S","G","G","G","G","G","D","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G"],
    ["W","W","W","S","G","G","G","G","G","D","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G"],
    ["W","W","W","S","G","G","G","G","G","D","D","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","D","D","D"],
    ["W","W","S","S","G","G","G","G","G","G","D","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","D","D","D"],
    ["W","S","S","G","G","G","G","G","G","G","D","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","D","D","D"],
    ["W","S","G","G","G","G","G","G","G","G","D","D","G","G","G","G","G","G","G","G","G","G","G","G","D","D","D","D","D","D"],
    ["W","S","G","G","G","G","G","G","G","G","G","D","G","G","G","G","G","G","D","D","D","G","D","D","D","G","G","G","D","D"],
    ["W","S","S","G","G","G","G","G","G","D","D","D","G","G","D","D","D","D","D","D","D","D","D","G","G","G","G","G","G","G"],
    ["W","W","S","S","G","D","D","D","G","D","G","D","D","D","D","G","G","G","D","D","D","G","G","G","G","G","G","G","G","G"],
    ["W","W","W","S","G","D","D","D","D","D","G","G","D","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G"],
    ["W","W","W","S","G","D","D","D","G","G","G","G","D","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G"],
    ["W","W","S","S","G","G","G","G","G","G","G","G","D","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G"],
];

let mapUp = [
    ["W","W","S","S","G","G","G","G","G","D","G","G","G","G","D","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G"],
    ["W","S","S","G","G","G","G","G","D","D","G","G","G","G","D","G","G","S","S","S","G","G","G","G","G","G","G","G","G","G"],
    ["W","S","G","G","G","G","G","G","D","G","G","G","G","G","D","G","S","S","W","S","S","G","G","G","G","G","G","G","G","G"],
    ["W","S","G","G","G","G","G","G","D","G","G","G","G","G","D","S","S","W","W","W","S","S","G","G","G","G","G","G","G","G"],
    ["W","S","S","G","G","G","G","G","D","G","G","G","G","G","D","S","W","W","W","W","W","S","G","G","G","G","G","G","G","G"],
    ["W","W","S","S","G","G","G","G","D","D","G","G","G","G","D","S","S","W","W","S","S","S","G","G","G","G","G","G","G","G"],
    ["W","W","W","S","G","G","G","G","G","D","G","G","G","G","D","D","S","S","W","S","G","G","G","G","G","G","G","G","G","G"],
    ["W","W","W","S","G","G","G","G","G","D","G","G","G","G","G","D","G","S","W","S","S","G","G","G","G","G","G","G","G","G"],
    ["W","W","W","S","G","G","G","G","G","D","G","G","G","G","G","D","G","S","W","W","S","G","G","G","G","G","G","G","G","G"],
    ["W","W","W","S","G","G","G","G","G","D","D","D","D","D","D","D","G","S","W","S","S","G","G","G","G","G","G","G","G","G"],
    ["W","W","S","S","G","G","G","G","D","D","G","G","G","G","G","G","G","S","W","S","G","G","G","G","G","G","G","G","G","G"],
    ["W","S","S","G","G","G","G","G","D","G","G","G","G","G","G","G","G","S","W","S","G","G","G","G","G","G","G","G","G","G"],
    ["W","S","G","G","G","G","G","G","D","G","G","G","G","G","G","G","G","S","W","S","S","S","G","G","G","G","G","G","G","G"],
    ["W","S","G","G","G","G","G","G","D","G","G","G","G","G","G","S","S","S","W","W","W","S","G","G","G","G","G","G","G","G"],
    ["W","S","S","G","G","G","G","G","D","G","G","G","G","G","G","S","W","W","W","W","W","S","G","G","G","G","G","G","G","G"],
    ["W","W","S","S","G","G","G","G","D","D","G","G","G","G","G","S","S","W","W","S","S","S","G","G","G","G","G","G","G","G"],
    ["W","W","W","S","G","G","G","G","G","D","G","G","G","G","G","G","S","S","S","S","G","G","G","G","G","G","G","G","G","G"],
    ["W","W","W","S","G","G","G","G","G","D","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G"],
    ["W","W","S","S","G","G","G","G","G","D","D","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G","G"]
]

export { map };
export { mapUp };