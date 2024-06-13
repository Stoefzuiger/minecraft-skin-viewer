const SearchParams = new URLSearchParams(window.location.search);

var json = null;
var modelType = SearchParams.get('model');

//Wide
if (modelType == "wide") { json =
'{"credit": "Made with Blockbench","texture_size": [64, 64],"textures": {"0": "skin"},"elements": [{"name": "Head","from": [4, 24, 4],"to": [12, 32, 12],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [2, 2, 4, 4], "texture": "#0"},"east": {"uv": [0, 2, 2, 4], "texture": "#0"},"south": {"uv": [6, 2, 8, 4], "texture": "#0"},"west": {"uv": [4, 2, 6, 4], "texture": "#0"},"up": {"uv": [4, 2, 2, 0], "texture": "#0"},"down": {"uv": [6, 0, 4, 2], "texture": "#0"}}},{"name": "Hat Layer","from": [3.5, 23, 3.5],"to": [12.5, 32, 12.5],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [10, 2, 12, 4], "texture": "#0"},"east": {"uv": [8, 2, 10, 4], "texture": "#0"},"south": {"uv": [14, 2, 16, 4], "texture": "#0"},"west": {"uv": [12, 2, 14, 4], "texture": "#0"},"up": {"uv": [12, 2, 10, 0], "texture": "#0"},"down": {"uv": [14, 0, 12, 2], "texture": "#0"}}},{"name": "Body","from": [4, 12, 6],"to": [12, 24, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [5, 5, 7, 8], "texture": "#0"},"east": {"uv": [4, 5, 5, 8], "texture": "#0"},"south": {"uv": [8, 5, 10, 8], "texture": "#0"},"west": {"uv": [7, 5, 8, 8], "texture": "#0"},"up": {"uv": [7, 5, 5, 4], "texture": "#0"},"down": {"uv": [9, 4, 7, 5], "texture": "#0"}}},{"name": "Body Layer","from": [3.75, 11.75, 5.75],"to": [12.25, 24.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [5, 9, 7, 12], "texture": "#0"},"east": {"uv": [4, 9, 5, 12], "texture": "#0"},"south": {"uv": [8, 9, 10, 12], "texture": "#0"},"west": {"uv": [7, 9, 8, 12], "texture": "#0"},"up": {"uv": [7, 9, 5, 8], "texture": "#0"},"down": {"uv": [9, 8, 7, 9], "texture": "#0"}}},{"name": "Right Arm","from": [12, 12, 6],"to": [16, 24, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [11, 5, 12, 8], "texture": "#0"},"east": {"uv": [10, 5, 11, 8], "texture": "#0"},"south": {"uv": [13, 5, 14, 8], "texture": "#0"},"west": {"uv": [12, 5, 13, 8], "texture": "#0"},"up": {"uv": [12, 5, 11, 4], "texture": "#0"},"down": {"uv": [13, 4, 12, 5], "texture": "#0"}}},{"name": "Right Arm Layer","from": [11.75, 11.75, 5.75],"to": [16.25, 24.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [11, 9, 12, 12], "texture": "#0"},"east": {"uv": [10, 9, 11, 12], "texture": "#0"},"south": {"uv": [13, 9, 14, 12], "texture": "#0"},"west": {"uv": [12, 9, 13, 12], "texture": "#0"},"up": {"uv": [12, 9, 11, 8], "texture": "#0"},"down": {"uv": [13, 8, 12, 9], "texture": "#0"}}},{"name": "Left Arm","from": [0, 12, 6],"to": [4, 24, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [9, 13, 10, 16], "texture": "#0"},"east": {"uv": [8, 13, 9, 16], "texture": "#0"},"south": {"uv": [11, 13, 12, 16], "texture": "#0"},"west": {"uv": [10, 13, 11, 16], "texture": "#0"},"up": {"uv": [10, 13, 9, 12], "texture": "#0"},"down": {"uv": [11, 12, 10, 13], "texture": "#0"}}},{"name": "Left Arm Layer","from": [-0.25, 11.75, 5.75],"to": [4.25, 24.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [13, 13, 14, 16], "texture": "#0"},"east": {"uv": [12, 13, 13, 16], "texture": "#0"},"south": {"uv": [15, 13, 16, 16], "texture": "#0"},"west": {"uv": [14, 13, 15, 16], "texture": "#0"},"up": {"uv": [14, 13, 13, 12], "texture": "#0"},"down": {"uv": [15, 12, 14, 13], "texture": "#0"}}},{"name": "Right Leg","from": [7.9, 0, 6],"to": [11.9, 12, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [1, 5, 2, 8], "texture": "#0"},"east": {"uv": [0, 5, 1, 8], "texture": "#0"},"south": {"uv": [3, 5, 4, 8], "texture": "#0"},"west": {"uv": [2, 5, 3, 8], "texture": "#0"},"up": {"uv": [2, 5, 1, 4], "texture": "#0"},"down": {"uv": [3, 4, 2, 5], "texture": "#0"}}},{"name": "Right Leg Layer","from": [7.65, -0.25, 5.75],"to": [12.15, 12.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [1, 9, 2, 12], "texture": "#0"},"east": {"uv": [0, 9, 1, 12], "texture": "#0"},"south": {"uv": [3, 9, 4, 12], "texture": "#0"},"west": {"uv": [2, 9, 3, 12], "texture": "#0"},"up": {"uv": [2, 9, 1, 8], "texture": "#0"},"down": {"uv": [3, 8, 2, 9], "texture": "#0"}}},{"name": "Left Leg","from": [4.1, 0, 6],"to": [8.1, 12, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [5, 13, 6, 16], "texture": "#0"},"east": {"uv": [4, 13, 5, 16], "texture": "#0"},"south": {"uv": [7, 13, 8, 16], "texture": "#0"},"west": {"uv": [6, 13, 7, 16], "texture": "#0"},"up": {"uv": [6, 13, 5, 12], "texture": "#0"},"down": {"uv": [7, 12, 6, 13], "texture": "#0"}}},{"name": "Left Leg Layer","from": [3.85, -0.25, 5.75],"to": [8.35, 12.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [1, 13, 2, 16], "texture": "#0"},"east": {"uv": [0, 13, 1, 16], "texture": "#0"},"south": {"uv": [3, 13, 4, 16], "texture": "#0"},"west": {"uv": [2, 13, 3, 16], "texture": "#0"},"up": {"uv": [2, 13, 1, 12], "texture": "#0"},"down": {"uv": [3, 12, 2, 13], "texture": "#0"}}}],"groups": [{"name": "Head","origin": [8, 24, 8],"color": 0,"children": [0, 1]},{"name": "Body","origin": [8, 24, 8],"color": 0,"children": [2, 3]},{"name": "RightArm","origin": [13, 22, 8],"color": 0,"children": [4, 5]},{"name": "LeftArm","origin": [3, 22, 8],"color": 0,"children": [6, 7]},{"name": "RightLeg","origin": [9.9, 12, 8],"color": 0,"children": [8, 9]},{"name": "LeftLeg","origin": [6.1, 12, 8],"color": 0,"children": [10, 11]}]}'
}

//Slim
if (modelType == "slim") { json =
'{"credit": "Made with Blockbench","texture_size": [64, 64],"textures": {"0": "skin"},"elements": [{"name": "Head","from": [4, 24, 4],"to": [12, 32, 12],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [2, 2, 4, 4], "texture": "#0"},"east": {"uv": [0, 2, 2, 4], "texture": "#0"},"south": {"uv": [6, 2, 8, 4], "texture": "#0"},"west": {"uv": [4, 2, 6, 4], "texture": "#0"},"up": {"uv": [4, 2, 2, 0], "texture": "#0"},"down": {"uv": [6, 0, 4, 2], "texture": "#0"}}},{"name": "Hat Layer","from": [3.5, 23, 3.5],"to": [12.5, 32, 12.5],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [10, 2, 12, 4], "texture": "#0"},"east": {"uv": [8, 2, 10, 4], "texture": "#0"},"south": {"uv": [14, 2, 16, 4], "texture": "#0"},"west": {"uv": [12, 2, 14, 4], "texture": "#0"},"up": {"uv": [12, 2, 10, 0], "texture": "#0"},"down": {"uv": [14, 0, 12, 2], "texture": "#0"}}},{"name": "Body","from": [4, 12, 6],"to": [12, 24, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [5, 5, 7, 8], "texture": "#0"},"east": {"uv": [4, 5, 5, 8], "texture": "#0"},"south": {"uv": [8, 5, 10, 8], "texture": "#0"},"west": {"uv": [7, 5, 8, 8], "texture": "#0"},"up": {"uv": [7, 5, 5, 4], "texture": "#0"},"down": {"uv": [9, 4, 7, 5], "texture": "#0"}}},{"name": "Body Layer","from": [3.75, 11.75, 5.75],"to": [12.25, 24.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [5, 9, 7, 12], "texture": "#0"},"east": {"uv": [4, 9, 5, 12], "texture": "#0"},"south": {"uv": [8, 9, 10, 12], "texture": "#0"},"west": {"uv": [7, 9, 8, 12], "texture": "#0"},"up": {"uv": [7, 9, 5, 8], "texture": "#0"},"down": {"uv": [9, 8, 7, 9], "texture": "#0"}}},{"name": "Right Arm","from": [12, 12, 6],"to": [15, 24, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [11, 5, 11.75, 8], "texture": "#0"},"east": {"uv": [10, 5, 11, 8], "texture": "#0"},"south": {"uv": [12.75, 5, 13.5, 8], "texture": "#0"},"west": {"uv": [11.75, 5, 12.75, 8], "texture": "#0"},"up": {"uv": [11.75, 5, 11, 4], "texture": "#0"},"down": {"uv": [12.5, 4, 11.75, 5], "texture": "#0"}}},{"name": "Right Arm Layer","from": [11.75, 11.75, 5.75],"to": [15.25, 24.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [11, 9, 11.75, 12], "texture": "#0"},"east": {"uv": [10, 9, 11, 12], "texture": "#0"},"south": {"uv": [12.75, 9, 13.5, 12], "texture": "#0"},"west": {"uv": [11.75, 9, 12.75, 12], "texture": "#0"},"up": {"uv": [11.75, 9, 11, 8], "texture": "#0"},"down": {"uv": [12.5, 8, 11.75, 9], "texture": "#0"}}},{"name": "Left Arm","from": [1, 12, 6],"to": [4, 24, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [9, 13, 9.75, 16], "texture": "#0"},"east": {"uv": [8, 13, 9, 16], "texture": "#0"},"south": {"uv": [10.75, 13, 11.5, 16], "texture": "#0"},"west": {"uv": [9.75, 13, 10.75, 16], "texture": "#0"},"up": {"uv": [9.75, 13, 9, 12], "texture": "#0"},"down": {"uv": [10.5, 12, 9.75, 13], "texture": "#0"}}},{"name": "Left Arm Layer","from": [0.75, 11.75, 5.75],"to": [4.25, 24.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [13, 13, 13.75, 16], "texture": "#0"},"east": {"uv": [12, 13, 13, 16], "texture": "#0"},"south": {"uv": [14.75, 13, 15.5, 16], "texture": "#0"},"west": {"uv": [13.75, 13, 14.75, 16], "texture": "#0"},"up": {"uv": [13.75, 13, 13, 12], "texture": "#0"},"down": {"uv": [14.5, 12, 13.75, 13], "texture": "#0"}}},{"name": "Right Leg","from": [7.9, 0, 6],"to": [11.9, 12, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [1, 5, 2, 8], "texture": "#0"},"east": {"uv": [0, 5, 1, 8], "texture": "#0"},"south": {"uv": [3, 5, 4, 8], "texture": "#0"},"west": {"uv": [2, 5, 3, 8], "texture": "#0"},"up": {"uv": [2, 5, 1, 4], "texture": "#0"},"down": {"uv": [3, 4, 2, 5], "texture": "#0"}}},{"name": "Right Leg Layer","from": [7.65, -0.25, 5.75],"to": [12.15, 12.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [1, 9, 2, 12], "texture": "#0"},"east": {"uv": [0, 9, 1, 12], "texture": "#0"},"south": {"uv": [3, 9, 4, 12], "texture": "#0"},"west": {"uv": [2, 9, 3, 12], "texture": "#0"},"up": {"uv": [2, 9, 1, 8], "texture": "#0"},"down": {"uv": [3, 8, 2, 9], "texture": "#0"}}},{"name": "Left Leg","from": [4.1, 0, 6],"to": [8.1, 12, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [5, 13, 6, 16], "texture": "#0"},"east": {"uv": [4, 13, 5, 16], "texture": "#0"},"south": {"uv": [7, 13, 8, 16], "texture": "#0"},"west": {"uv": [6, 13, 7, 16], "texture": "#0"},"up": {"uv": [6, 13, 5, 12], "texture": "#0"},"down": {"uv": [7, 12, 6, 13], "texture": "#0"}}},{"name": "Left Leg Layer","from": [3.85, -0.25, 5.75],"to": [8.35, 12.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [1, 13, 2, 16], "texture": "#0"},"east": {"uv": [0, 13, 1, 16], "texture": "#0"},"south": {"uv": [3, 13, 4, 16], "texture": "#0"},"west": {"uv": [2, 13, 3, 16], "texture": "#0"},"up": {"uv": [2, 13, 1, 12], "texture": "#0"},"down": {"uv": [3, 12, 2, 13], "texture": "#0"}}}],"groups": [{"name": "Head","origin": [8, 24, 8],"color": 0,"children": [0, 1]},{"name": "Body","origin": [8, 24, 8],"color": 0,"children": [2, 3]},{"name": "RightArm","origin": [13, 22, 8],"color": 0,"children": [4, 5]},{"name": "LeftArm","origin": [3, 22, 8],"color": 0,"children": [6, 7]},{"name": "RightLeg","origin": [9.9, 12, 8],"color": 0,"children": [8, 9]},{"name": "LeftLeg","origin": [6.1, 12, 8],"color": 0,"children": [10, 11]}]}'
}

//Wide cape
if (modelType == "wide_cape") { json = 
'{"credit": "Made with Blockbench","texture_size": [64, 64],"textures": {"0": "skin","1": "cape"},"elements": [{"name": "Head","from": [4, 24, 4],"to": [12, 32, 12],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [2, 2, 4, 4], "texture": "#0"},"east": {"uv": [0, 2, 2, 4], "texture": "#0"},"south": {"uv": [6, 2, 8, 4], "texture": "#0"},"west": {"uv": [4, 2, 6, 4], "texture": "#0"},"up": {"uv": [4, 2, 2, 0], "texture": "#0"},"down": {"uv": [6, 0, 4, 2], "texture": "#0"}}},{"name": "Hat Layer","from": [3.5, 23, 3.5],"to": [12.5, 32, 12.5],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [10, 2, 12, 4], "texture": "#0"},"east": {"uv": [8, 2, 10, 4], "texture": "#0"},"south": {"uv": [14, 2, 16, 4], "texture": "#0"},"west": {"uv": [12, 2, 14, 4], "texture": "#0"},"up": {"uv": [12, 2, 10, 0], "texture": "#0"},"down": {"uv": [14, 0, 12, 2], "texture": "#0"}}},{"name": "Body","from": [4, 12, 6],"to": [12, 24, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [5, 5, 7, 8], "texture": "#0"},"east": {"uv": [4, 5, 5, 8], "texture": "#0"},"south": {"uv": [8, 5, 10, 8], "texture": "#0"},"west": {"uv": [7, 5, 8, 8], "texture": "#0"},"up": {"uv": [7, 5, 5, 4], "texture": "#0"},"down": {"uv": [9, 4, 7, 5], "texture": "#0"}}},{"name": "Body Layer","from": [3.75, 11.75, 5.75],"to": [12.25, 24.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [5, 9, 7, 12], "texture": "#0"},"east": {"uv": [4, 9, 5, 12], "texture": "#0"},"south": {"uv": [8, 9, 10, 12], "texture": "#0"},"west": {"uv": [7, 9, 8, 12], "texture": "#0"},"up": {"uv": [7, 9, 5, 8], "texture": "#0"},"down": {"uv": [9, 8, 7, 9], "texture": "#0"}}},{"name": "Right Arm","from": [12, 12, 6],"to": [16, 24, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [11, 5, 12, 8], "texture": "#0"},"east": {"uv": [10, 5, 11, 8], "texture": "#0"},"south": {"uv": [13, 5, 14, 8], "texture": "#0"},"west": {"uv": [12, 5, 13, 8], "texture": "#0"},"up": {"uv": [12, 5, 11, 4], "texture": "#0"},"down": {"uv": [13, 4, 12, 5], "texture": "#0"}}},{"name": "Right Arm Layer","from": [11.75, 11.75, 5.75],"to": [16.25, 24.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [11, 9, 12, 12], "texture": "#0"},"east": {"uv": [10, 9, 11, 12], "texture": "#0"},"south": {"uv": [13, 9, 14, 12], "texture": "#0"},"west": {"uv": [12, 9, 13, 12], "texture": "#0"},"up": {"uv": [12, 9, 11, 8], "texture": "#0"},"down": {"uv": [13, 8, 12, 9], "texture": "#0"}}},{"name": "Left Arm","from": [0, 12, 6],"to": [4, 24, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [9, 13, 10, 16], "texture": "#0"},"east": {"uv": [8, 13, 9, 16], "texture": "#0"},"south": {"uv": [11, 13, 12, 16], "texture": "#0"},"west": {"uv": [10, 13, 11, 16], "texture": "#0"},"up": {"uv": [10, 13, 9, 12], "texture": "#0"},"down": {"uv": [11, 12, 10, 13], "texture": "#0"}}},{"name": "Left Arm Layer","from": [-0.25, 11.75, 5.75],"to": [4.25, 24.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [13, 13, 14, 16], "texture": "#0"},"east": {"uv": [12, 13, 13, 16], "texture": "#0"},"south": {"uv": [15, 13, 16, 16], "texture": "#0"},"west": {"uv": [14, 13, 15, 16], "texture": "#0"},"up": {"uv": [14, 13, 13, 12], "texture": "#0"},"down": {"uv": [15, 12, 14, 13], "texture": "#0"}}},{"name": "Right Leg","from": [7.9, 0, 6],"to": [11.9, 12, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [1, 5, 2, 8], "texture": "#0"},"east": {"uv": [0, 5, 1, 8], "texture": "#0"},"south": {"uv": [3, 5, 4, 8], "texture": "#0"},"west": {"uv": [2, 5, 3, 8], "texture": "#0"},"up": {"uv": [2, 5, 1, 4], "texture": "#0"},"down": {"uv": [3, 4, 2, 5], "texture": "#0"}}},{"name": "Right Leg Layer","from": [7.65, -0.25, 5.75],"to": [12.15, 12.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [1, 9, 2, 12], "texture": "#0"},"east": {"uv": [0, 9, 1, 12], "texture": "#0"},"south": {"uv": [3, 9, 4, 12], "texture": "#0"},"west": {"uv": [2, 9, 3, 12], "texture": "#0"},"up": {"uv": [2, 9, 1, 8], "texture": "#0"},"down": {"uv": [3, 8, 2, 9], "texture": "#0"}}},{"name": "Left Leg","from": [4.1, 0, 6],"to": [8.1, 12, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [5, 13, 6, 16], "texture": "#0"},"east": {"uv": [4, 13, 5, 16], "texture": "#0"},"south": {"uv": [7, 13, 8, 16], "texture": "#0"},"west": {"uv": [6, 13, 7, 16], "texture": "#0"},"up": {"uv": [6, 13, 5, 12], "texture": "#0"},"down": {"uv": [7, 12, 6, 13], "texture": "#0"}}},{"name": "Left Leg Layer","from": [3.85, -0.25, 5.75],"to": [8.35, 12.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [1, 13, 2, 16], "texture": "#0"},"east": {"uv": [0, 13, 1, 16], "texture": "#0"},"south": {"uv": [3, 13, 4, 16], "texture": "#0"},"west": {"uv": [2, 13, 3, 16], "texture": "#0"},"up": {"uv": [2, 13, 1, 12], "texture": "#0"},"down": {"uv": [3, 12, 2, 13], "texture": "#0"}}},{"from": [3, 8, 10],"to": [13, 24, 11],"rotation": {"angle": 0, "axis": "y", "origin": [3, 8, 10]},"faces": {"north": {"uv": [3, 0.5, 5.5, 8.5], "texture": "#1"},"east": {"uv": [2.75, 0.5, 3, 8.5], "texture": "#1"},"south": {"uv": [0.25, 0.5, 2.75, 8.5], "texture": "#1"},"west": {"uv": [0, 0.5, 0.25, 8.5], "texture": "#1"},"up": {"uv": [0.25, 0, 2.75, 0.5], "texture": "#1"},"down": {"uv": [2.75, 0, 5.25, 0.5], "texture": "#1"}}}],"groups": [{"name": "Head","origin": [8, 24, 8],"color": 0,"children": [0, 1]},{"name": "Body","origin": [8, 24, 8],"color": 0,"children": [2, 3]},{"name": "RightArm","origin": [13, 22, 8],"color": 0,"children": [4, 5]},{"name": "LeftArm","origin": [3, 22, 8],"color": 0,"children": [6, 7]},{"name": "RightLeg","origin": [9.9, 12, 8],"color": 0,"children": [8, 9]},{"name": "LeftLeg","origin": [6.1, 12, 8],"color": 0,"children": [10, 11]},{"name": "Cape","origin": [8, 8, 8],"color": 0,"children": [12]}]}'
}

//Slim cape
if (modelType == "slim_cape") { json =
'{"credit": "Made with Blockbench","texture_size": [64, 64],"textures": {"0": "skin","1": "cape"},"elements": [{"name": "Head","from": [4, 24, 4],"to": [12, 32, 12],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [2, 2, 4, 4], "texture": "#0"},"east": {"uv": [0, 2, 2, 4], "texture": "#0"},"south": {"uv": [6, 2, 8, 4], "texture": "#0"},"west": {"uv": [4, 2, 6, 4], "texture": "#0"},"up": {"uv": [4, 2, 2, 0], "texture": "#0"},"down": {"uv": [6, 0, 4, 2], "texture": "#0"}}},{"name": "Hat Layer","from": [3.5, 23, 3.5],"to": [12.5, 32, 12.5],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [10, 2, 12, 4], "texture": "#0"},"east": {"uv": [8, 2, 10, 4], "texture": "#0"},"south": {"uv": [14, 2, 16, 4], "texture": "#0"},"west": {"uv": [12, 2, 14, 4], "texture": "#0"},"up": {"uv": [12, 2, 10, 0], "texture": "#0"},"down": {"uv": [14, 0, 12, 2], "texture": "#0"}}},{"name": "Body","from": [4, 12, 6],"to": [12, 24, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [5, 5, 7, 8], "texture": "#0"},"east": {"uv": [4, 5, 5, 8], "texture": "#0"},"south": {"uv": [8, 5, 10, 8], "texture": "#0"},"west": {"uv": [7, 5, 8, 8], "texture": "#0"},"up": {"uv": [7, 5, 5, 4], "texture": "#0"},"down": {"uv": [9, 4, 7, 5], "texture": "#0"}}},{"name": "Body Layer","from": [3.75, 11.75, 5.75],"to": [12.25, 24.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [5, 9, 7, 12], "texture": "#0"},"east": {"uv": [4, 9, 5, 12], "texture": "#0"},"south": {"uv": [8, 9, 10, 12], "texture": "#0"},"west": {"uv": [7, 9, 8, 12], "texture": "#0"},"up": {"uv": [7, 9, 5, 8], "texture": "#0"},"down": {"uv": [9, 8, 7, 9], "texture": "#0"}}},{"name": "Right Arm","from": [12, 12, 6],"to": [15, 24, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [11, 5, 11.75, 8], "texture": "#0"},"east": {"uv": [10, 5, 11, 8], "texture": "#0"},"south": {"uv": [12.75, 5, 13.5, 8], "texture": "#0"},"west": {"uv": [11.75, 5, 12.75, 8], "texture": "#0"},"up": {"uv": [11.75, 5, 11, 4], "texture": "#0"},"down": {"uv": [12.5, 4, 11.75, 5], "texture": "#0"}}},{"name": "Right Arm Layer","from": [11.75, 11.75, 5.75],"to": [15.25, 24.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [11, 9, 11.75, 12], "texture": "#0"},"east": {"uv": [10, 9, 11, 12], "texture": "#0"},"south": {"uv": [12.75, 9, 13.5, 12], "texture": "#0"},"west": {"uv": [11.75, 9, 12.75, 12], "texture": "#0"},"up": {"uv": [11.75, 9, 11, 8], "texture": "#0"},"down": {"uv": [12.5, 8, 11.75, 9], "texture": "#0"}}},{"name": "Left Arm","from": [1, 12, 6],"to": [4, 24, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [9, 13, 9.75, 16], "texture": "#0"},"east": {"uv": [8, 13, 9, 16], "texture": "#0"},"south": {"uv": [10.75, 13, 11.5, 16], "texture": "#0"},"west": {"uv": [9.75, 13, 10.75, 16], "texture": "#0"},"up": {"uv": [9.75, 13, 9, 12], "texture": "#0"},"down": {"uv": [10.5, 12, 9.75, 13], "texture": "#0"}}},{"name": "Left Arm Layer","from": [0.75, 11.75, 5.75],"to": [4.25, 24.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [13, 13, 13.75, 16], "texture": "#0"},"east": {"uv": [12, 13, 13, 16], "texture": "#0"},"south": {"uv": [14.75, 13, 15.5, 16], "texture": "#0"},"west": {"uv": [13.75, 13, 14.75, 16], "texture": "#0"},"up": {"uv": [13.75, 13, 13, 12], "texture": "#0"},"down": {"uv": [14.5, 12, 13.75, 13], "texture": "#0"}}},{"name": "Right Leg","from": [7.9, 0, 6],"to": [11.9, 12, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [1, 5, 2, 8], "texture": "#0"},"east": {"uv": [0, 5, 1, 8], "texture": "#0"},"south": {"uv": [3, 5, 4, 8], "texture": "#0"},"west": {"uv": [2, 5, 3, 8], "texture": "#0"},"up": {"uv": [2, 5, 1, 4], "texture": "#0"},"down": {"uv": [3, 4, 2, 5], "texture": "#0"}}},{"name": "Right Leg Layer","from": [7.65, -0.25, 5.75],"to": [12.15, 12.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [1, 9, 2, 12], "texture": "#0"},"east": {"uv": [0, 9, 1, 12], "texture": "#0"},"south": {"uv": [3, 9, 4, 12], "texture": "#0"},"west": {"uv": [2, 9, 3, 12], "texture": "#0"},"up": {"uv": [2, 9, 1, 8], "texture": "#0"},"down": {"uv": [3, 8, 2, 9], "texture": "#0"}}},{"name": "Left Leg","from": [4.1, 0, 6],"to": [8.1, 12, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [5, 13, 6, 16], "texture": "#0"},"east": {"uv": [4, 13, 5, 16], "texture": "#0"},"south": {"uv": [7, 13, 8, 16], "texture": "#0"},"west": {"uv": [6, 13, 7, 16], "texture": "#0"},"up": {"uv": [6, 13, 5, 12], "texture": "#0"},"down": {"uv": [7, 12, 6, 13], "texture": "#0"}}},{"name": "Left Leg Layer","from": [3.85, -0.25, 5.75],"to": [8.35, 12.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [1, 13, 2, 16], "texture": "#0"},"east": {"uv": [0, 13, 1, 16], "texture": "#0"},"south": {"uv": [3, 13, 4, 16], "texture": "#0"},"west": {"uv": [2, 13, 3, 16], "texture": "#0"},"up": {"uv": [2, 13, 1, 12], "texture": "#0"},"down": {"uv": [3, 12, 2, 13], "texture": "#0"}}},{"from": [3, 8, 10],"to": [13, 24, 11],"rotation": {"angle": 0, "axis": "y", "origin": [3, 8, 10]},"faces": {"north": {"uv": [3, 0.5, 5.5, 8.5], "texture": "#1"},"east": {"uv": [2.75, 0.5, 3, 8.5], "texture": "#1"},"south": {"uv": [0.25, 0.5, 2.75, 8.5], "texture": "#1"},"west": {"uv": [0, 0.5, 0.25, 8.5], "texture": "#1"},"up": {"uv": [0.25, 0, 2.75, 0.5], "texture": "#1"},"down": {"uv": [2.75, 0, 5.25, 0.5], "texture": "#1"}}}],"groups": [{"name": "Head","origin": [8, 24, 8],"color": 0,"children": [0, 1]},{"name": "Body","origin": [8, 24, 8],"color": 0,"children": [2, 3]},{"name": "RightArm","origin": [13, 22, 8],"color": 0,"children": [4, 5]},{"name": "LeftArm","origin": [3, 22, 8],"color": 0,"children": [6, 7]},{"name": "RightLeg","origin": [9.9, 12, 8],"color": 0,"children": [8, 9]},{"name": "LeftLeg","origin": [6.1, 12, 8],"color": 0,"children": [10, 11]},{"name": "Cape","origin": [8, 8, 8],"color": 0,"children": [12]}]}' 
}

//Fallback to wide
if (json == null) json =
'{"credit": "Made with Blockbench","texture_size": [64, 64],"textures": {"0": "skin"},"elements": [{"name": "Head","from": [4, 24, 4],"to": [12, 32, 12],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [2, 2, 4, 4], "texture": "#0"},"east": {"uv": [0, 2, 2, 4], "texture": "#0"},"south": {"uv": [6, 2, 8, 4], "texture": "#0"},"west": {"uv": [4, 2, 6, 4], "texture": "#0"},"up": {"uv": [4, 2, 2, 0], "texture": "#0"},"down": {"uv": [6, 0, 4, 2], "texture": "#0"}}},{"name": "Hat Layer","from": [3.5, 23, 3.5],"to": [12.5, 32, 12.5],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [10, 2, 12, 4], "texture": "#0"},"east": {"uv": [8, 2, 10, 4], "texture": "#0"},"south": {"uv": [14, 2, 16, 4], "texture": "#0"},"west": {"uv": [12, 2, 14, 4], "texture": "#0"},"up": {"uv": [12, 2, 10, 0], "texture": "#0"},"down": {"uv": [14, 0, 12, 2], "texture": "#0"}}},{"name": "Body","from": [4, 12, 6],"to": [12, 24, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [5, 5, 7, 8], "texture": "#0"},"east": {"uv": [4, 5, 5, 8], "texture": "#0"},"south": {"uv": [8, 5, 10, 8], "texture": "#0"},"west": {"uv": [7, 5, 8, 8], "texture": "#0"},"up": {"uv": [7, 5, 5, 4], "texture": "#0"},"down": {"uv": [9, 4, 7, 5], "texture": "#0"}}},{"name": "Body Layer","from": [3.75, 11.75, 5.75],"to": [12.25, 24.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [5, 9, 7, 12], "texture": "#0"},"east": {"uv": [4, 9, 5, 12], "texture": "#0"},"south": {"uv": [8, 9, 10, 12], "texture": "#0"},"west": {"uv": [7, 9, 8, 12], "texture": "#0"},"up": {"uv": [7, 9, 5, 8], "texture": "#0"},"down": {"uv": [9, 8, 7, 9], "texture": "#0"}}},{"name": "Right Arm","from": [12, 12, 6],"to": [16, 24, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [11, 5, 12, 8], "texture": "#0"},"east": {"uv": [10, 5, 11, 8], "texture": "#0"},"south": {"uv": [13, 5, 14, 8], "texture": "#0"},"west": {"uv": [12, 5, 13, 8], "texture": "#0"},"up": {"uv": [12, 5, 11, 4], "texture": "#0"},"down": {"uv": [13, 4, 12, 5], "texture": "#0"}}},{"name": "Right Arm Layer","from": [11.75, 11.75, 5.75],"to": [16.25, 24.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [11, 9, 12, 12], "texture": "#0"},"east": {"uv": [10, 9, 11, 12], "texture": "#0"},"south": {"uv": [13, 9, 14, 12], "texture": "#0"},"west": {"uv": [12, 9, 13, 12], "texture": "#0"},"up": {"uv": [12, 9, 11, 8], "texture": "#0"},"down": {"uv": [13, 8, 12, 9], "texture": "#0"}}},{"name": "Left Arm","from": [0, 12, 6],"to": [4, 24, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [9, 13, 10, 16], "texture": "#0"},"east": {"uv": [8, 13, 9, 16], "texture": "#0"},"south": {"uv": [11, 13, 12, 16], "texture": "#0"},"west": {"uv": [10, 13, 11, 16], "texture": "#0"},"up": {"uv": [10, 13, 9, 12], "texture": "#0"},"down": {"uv": [11, 12, 10, 13], "texture": "#0"}}},{"name": "Left Arm Layer","from": [-0.25, 11.75, 5.75],"to": [4.25, 24.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [13, 13, 14, 16], "texture": "#0"},"east": {"uv": [12, 13, 13, 16], "texture": "#0"},"south": {"uv": [15, 13, 16, 16], "texture": "#0"},"west": {"uv": [14, 13, 15, 16], "texture": "#0"},"up": {"uv": [14, 13, 13, 12], "texture": "#0"},"down": {"uv": [15, 12, 14, 13], "texture": "#0"}}},{"name": "Right Leg","from": [7.9, 0, 6],"to": [11.9, 12, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [1, 5, 2, 8], "texture": "#0"},"east": {"uv": [0, 5, 1, 8], "texture": "#0"},"south": {"uv": [3, 5, 4, 8], "texture": "#0"},"west": {"uv": [2, 5, 3, 8], "texture": "#0"},"up": {"uv": [2, 5, 1, 4], "texture": "#0"},"down": {"uv": [3, 4, 2, 5], "texture": "#0"}}},{"name": "Right Leg Layer","from": [7.65, -0.25, 5.75],"to": [12.15, 12.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [1, 9, 2, 12], "texture": "#0"},"east": {"uv": [0, 9, 1, 12], "texture": "#0"},"south": {"uv": [3, 9, 4, 12], "texture": "#0"},"west": {"uv": [2, 9, 3, 12], "texture": "#0"},"up": {"uv": [2, 9, 1, 8], "texture": "#0"},"down": {"uv": [3, 8, 2, 9], "texture": "#0"}}},{"name": "Left Leg","from": [4.1, 0, 6],"to": [8.1, 12, 10],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [5, 13, 6, 16], "texture": "#0"},"east": {"uv": [4, 13, 5, 16], "texture": "#0"},"south": {"uv": [7, 13, 8, 16], "texture": "#0"},"west": {"uv": [6, 13, 7, 16], "texture": "#0"},"up": {"uv": [6, 13, 5, 12], "texture": "#0"},"down": {"uv": [7, 12, 6, 13], "texture": "#0"}}},{"name": "Left Leg Layer","from": [3.85, -0.25, 5.75],"to": [8.35, 12.25, 10.25],"rotation": {"angle": 0, "axis": "y", "origin": [8, 0, 8]},"faces": {"north": {"uv": [1, 13, 2, 16], "texture": "#0"},"east": {"uv": [0, 13, 1, 16], "texture": "#0"},"south": {"uv": [3, 13, 4, 16], "texture": "#0"},"west": {"uv": [2, 13, 3, 16], "texture": "#0"},"up": {"uv": [2, 13, 1, 12], "texture": "#0"},"down": {"uv": [3, 12, 2, 13], "texture": "#0"}}}],"groups": [{"name": "Head","origin": [8, 24, 8],"color": 0,"children": [0, 1]},{"name": "Body","origin": [8, 24, 8],"color": 0,"children": [2, 3]},{"name": "RightArm","origin": [13, 22, 8],"color": 0,"children": [4, 5]},{"name": "LeftArm","origin": [3, 22, 8],"color": 0,"children": [6, 7]},{"name": "RightLeg","origin": [9.9, 12, 8],"color": 0,"children": [8, 9]},{"name": "LeftLeg","origin": [6.1, 12, 8],"color": 0,"children": [10, 11]}]}'