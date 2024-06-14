# minecraft-skin-viewer

View minecraft skins + capes in your browser. Quick (aka; bad!) modification of [json-model-viewer](https://github.com/vberlier/json-model-viewer).
Originally made by [vberlier](https://github.com/vberlier).

A 3d model viewer for minecraft skins. Requires [three.js](https://github.com/mrdoob/three.js/) and [OrbitControls](https://github.com/mrdoob/three.js/blob/master/examples/js/controls/OrbitControls.js).

**:warning: Warning :warning:**

The original author said this about the project: "This project is getting pretty old. I'm considering rewriting it but that'll take some time, so come back later!". That was 6 years ago. 

This is just hijacking the demo functionality, and hosting it on github so it can be used in a .NET MAUI app; use this at your own risk. 

## Usage
To use this, you'll have to append data to the github-sites URL: [https://stoefzuiger.github.io/minecraft-skin-viewer/](https://stoefzuiger.github.io/minecraft-skin-viewer/).
It can use 3 pieces of data, but none are required. 

### Model
You can specify 5 different model-types. These are "wide", "wide_cape", "slim", "slim_cape" and "_cape".
Append it to the base URL like so: ht<span>tps://</span>stoefzuiger.github.io/minecraft-skin-viewer/**?model=[option]**.

For example, [https://stoefzuiger.github.io/minecraft-skin-viewer/**?model=slim**](https://stoefzuiger.github.io/minecraft-skin-viewer/?model=slim).

If no model is specified, it will default to the wide model type.

### Skin
Skins are automatically fetched from ht<span>tps://</span>textures.minecraft.net/texture/.
A example of such an URL is [https://textures.minecraft.net/texture/**9d61ad3a75f62ba6a2104374bc4ed51cf90bc6ae76b8ef04c7d47b60611b50ab**](https://textures.minecraft.net/texture/9d61ad3a75f62ba6a2104374bc4ed51cf90bc6ae76b8ef04c7d47b60611b50ab). 
These URL's can be fetched from Mojang's Profile API endpoint.

You can append skins like this: ht<span>tps://</span>stoefzuiger.github.io/minecraft-skin-viewer/?model=[option]**&skin=[option]**.
For example, [https://stoefzuiger.github.io/minecraft-skin-viewer/?model=wide&**skin=9d61ad3a75f62ba6a2104374bc4ed51cf90bc6ae76b8ef04c7d47b60611b50ab**](https://stoefzuiger.github.io/minecraft-skin-viewer/?model=wide&skin=9d61ad3a75f62ba6a2104374bc4ed51cf90bc6ae76b8ef04c7d47b60611b50ab).

Note that only the last part of the texture link is appended.

### Cape
Finally, you can choose to show a cape. These are again accessed from ht<span>tps://</span>textures.minecraft.net/texture/.
You can append it like so: ht<span>tps://</span>stoefzuiger.github.io/minecraft-skin-viewer/?model=[option]&skin=[option]**&cape=[option]**.

For example: [https://stoefzuiger.github.io/minecraft-skin-viewer/?model=wide_cape&skin=9d61ad3a75f62ba6a2104374bc4ed51cf90bc6ae76b8ef04c7d47b60611b50ab&**cape=17912790ff164b93196f08ba71d0e62129304776d0f347334f8a6eae509f8a56**](https://stoefzuiger.github.io/minecraft-skin-viewer/?model=wide_cape&skin=9d61ad3a75f62ba6a2104374bc4ed51cf90bc6ae76b8ef04c7d47b60611b50ab&cape=17912790ff164b93196f08ba71d0e62129304776d0f347334f8a6eae509f8a56).

Note that the model has been set to wide_cape here.

## Known issues

- Skins can render wrongly in some cases. This has to do with the different skin texture layouts that have existed throughout the years. Because of this, the model's UV mapping becomes wrong, and therefore the texture maps incorrectly to the model.

#

License - [MIT](https://github.com/Stoefzuiger/minecraft-skin-viewer?tab=License-1-ov-file)