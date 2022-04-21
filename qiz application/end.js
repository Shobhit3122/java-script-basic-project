var data = [
  {
    values: [30,70],
    labels: ["correct","wrong"],
    type: "pie",
  },
];

var layout = {
  height: 400,
  width: 500,
};

Plotly.newPlot("myDiv", data, layout);




