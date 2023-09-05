//api link
const url3 = "http://127.0.0.1:5000/data";

//bring in json data
d3.json(url3).then(function (data) {
    let result = data.data;

    let statesArray = result.reduce(function (prev, curr) {
        if (prev.states.indexOf(curr.locationdesc) === -1) {
            prev.states.push(curr.locationdesc);
        }
        return prev;
    }, { states: [] });
    console.log("statesArray", statesArray);

    let stateDescData = result.filter(item => item["state"] == "Alabama");
        console.log("stateDescData", stateDescData);

        let myData = {};
        console.log("myData", myData);

        stateDescData.forEach(item => {
            let value = item["categorydesc"];
            if (!myData[value]) {
                myData[value] = 1;
            } else {
                myData[value]++;
            }
        });

        let labels = Object.keys(myData);
        console.log("labels", labels);
        let values = Object.values(myData);
        console.log("values", values);

    });
