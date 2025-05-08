# minecraft-skin-viewer

View Minecraft skins and capes in your browser. A modification of [json-model-viewer](https://github.com/vberlier/json-model-viewer).
Originally made by [vberlier](https://github.com/vberlier).

A 3D model viewer for Minecraft skins. Requires [three.js](https://github.com/mrdoob/three.js/) and [OrbitControls](https://github.com/mrdoob/three.js/blob/master/examples/js/controls/OrbitControls.js).

Finished on Jun 26, 2024. Reuploaded because I used Git with my personal email originally... oops!

**:warning: Warning :warning:**

The original author said this about the project: “This project is getting pretty old. I'm considering rewriting it but that'll take some time, so come back later!”. That was 6 years ago. 

This project hijacks the demo functionality and hosts it on GitHub Pages so it can be used in a .NET MAUI app; use this at your own risk.

## Usage
To use this, you'll have to append data to the GitHub Pages URL: [https://stoefzuiger.github.io/minecraft-skin-viewer/](https://stoefzuiger.github.io/minecraft-skin-viewer/).
It can use 5 pieces of data, but none are required. 

### Model
You can specify 5 different model types. These are "wide", "wide_cape", "slim", "slim_cape" and "_cape".
Append it to the base URL like so: ht<span>tps://</span>stoefzuiger.github.io/minecraft-skin-viewer/**?model=[option]**.

For example: [https://stoefzuiger.github.io/minecraft-skin-viewer/**?model=slim**](https://stoefzuiger.github.io/minecraft-skin-viewer/?model=slim).

If no model is specified, it will default to the wide model type.

### Skin
Skins are automatically fetched from ht<span>tps://</span>textures.minecraft.net/texture/.
An example of such a URL is [https://textures.minecraft.net/texture/**9d61ad3a75f62ba6a2104374bc4ed51cf90bc6ae76b8ef04c7d47b60611b50ab**](https://textures.minecraft.net/texture/9d61ad3a75f62ba6a2104374bc4ed51cf90bc6ae76b8ef04c7d47b60611b50ab). 
These URLs can be fetched from Mojang's [Profile API endpoint](https://wiki.vg/Mojang_API#UUID_to_Profile_and_Skin.2FCape).

You can append skins like this: ht<span>tps://</span>stoefzuiger.github.io/minecraft-skin-viewer/?model=[option]**&skin=[option]**.
For example: [https://stoefzuiger.github.io/minecraft-skin-viewer/?model=wide&**skin=9d61ad3a75f62ba6a2104374bc4ed51cf90bc6ae76b8ef04c7d47b60611b50ab**](https://stoefzuiger.github.io/minecraft-skin-viewer/?model=wide&skin=9d61ad3a75f62ba6a2104374bc4ed51cf90bc6ae76b8ef04c7d47b60611b50ab).

Note that only the last part of the texture link is appended.

### Cape
You can choose to show a cape. These are again accessed from ht<span>tps://</span>textures.minecraft.net/texture/.
You can append it like this: ht<span>tps://</span>stoefzuiger.github.io/minecraft-skin-viewer/?model=[option]&skin=[option]**&cape=[option]**.

For example: [https://stoefzuiger.github.io/minecraft-skin-viewer/?model=wide_cape&skin=9d61ad3a75f62ba6a2104374bc4ed51cf90bc6ae76b8ef04c7d47b60611b50ab&**cape=17912790ff164b93196f08ba71d0e62129304776d0f347334f8a6eae509f8a56**](https://stoefzuiger.github.io/minecraft-skin-viewer/?model=wide_cape&skin=9d61ad3a75f62ba6a2104374bc4ed51cf90bc6ae76b8ef04c7d47b60611b50ab&cape=17912790ff164b93196f08ba71d0e62129304776d0f347334f8a6eae509f8a56).

Note that the model has been set to wide_cape here.

### Legacy Skins
At some point in Minecraft's history, skins textures were 64 x 32 pixels. Nowadays, the usual resolution is 64 x 64.
However, the game still does support legacy skins.
To make sure legacy skins render correctly, you can append this: ht<span>tps://</span>stoefzuiger.github.io/minecraft-skin-viewer/?model=[option]&skin=[option]&cape=[option]**&isx32=true**.

For example: [https://stoefzuiger.github.io/minecraft-skin-viewer/?model=wide_cape&skin=247c058845f3b6d0348aae56b6aa1a61c469d84cbaba048164050a1d335d6ea0&cape=17912790ff164b93196f08ba71d0e62129304776d0f347334f8a6eae509f8a56&**isx32=true**](https://stoefzuiger.github.io/minecraft-skin-viewer/?model=wide_cape&skin=247c058845f3b6d0348aae56b6aa1a61c469d84cbaba048164050a1d335d6ea0&cape=17912790ff164b93196f08ba71d0e62129304776d0f347334f8a6eae509f8a56&isx32=true).

### Background
Finally, you can specify whether to use a dark or light background. The options are "dark" and "light".
Append them to the URL like so: ht<span>tps://</span>stoefzuiger.github.io/minecraft-skin-viewer/?model=[option]&skin=[option]&cape=[option]**&bg=[option]**.

For example: [https://stoefzuiger.github.io/minecraft-skin-viewer/?model=_cape&cape=2e002d5e1758e79ba51d08d92a0f3a95119f2f435ae7704916507b6c565a7da8&**bg=light**](https://stoefzuiger.github.io/minecraft-skin-viewer/?model=_cape&cape=2e002d5e1758e79ba51d08d92a0f3a95119f2f435ae7704916507b6c565a7da8&bg=light).

If no background type is specified, it will default to dark.

## Known issues

- Instead of rendering transparent pixels in skin files as black, they instead become transparent. This is inaccurate with how they render in game. 
- The amount of background tiles is dependent on the resolution of the viewport. The higher the resolution, the more tiles show up.

#

License - [MIT](https://github.com/Stoefzuiger/minecraft-skin-viewer?tab=License-1-ov-file)