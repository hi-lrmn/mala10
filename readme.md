# __About__
**Musicard** is a futuristic music card library designed for Discord bots.

# __Installation__
```
npm install mala10
yarn add mala10
pnpm install mala10
```

# __Example__
This example code will generate a music card image and save it.
```js
(async () => {
    const { mala10 } = require("mala10");
    const fs = require("fs");

    const card = new mala10()
        .setName("Bunga Hati")
        .setAuthor("Salma Salsabil")
        .setColor("auto")
        .setTheme("classic")
        .setBrightness(50)
        .setThumbnail("https://cdn.discordapp.com/attachments/1194410866209206412/1196152611594838026/mewwme.png")
        .setRequester("romanromannya")

    const cardBuffer = await card.build();

    fs.writeFileSync(`mala10.png`, cardBuffer);
    console.log("Done!");
})()
```

# __14 themes music card__
- "mewwme" | "themes1" | "themes2" | "themes3" | "themes4" | "themes5" | "themes6" | "themes7" | "themes8" | "themes9" | "themes10" | "themes11" | "themes12" | "themes13" | "themes14" | "themes15" | "themes16"

# __Card Available__
![classic](/example/8.png)
![classic](/example/14.png)
![classic](/example/15.png)

# Projects
|  Sr.  |            Name            |  Platform  |
|:-----:|:--------------------------:|:----------:|
| **1** | [Mewwme's Music](https://discord.com/api/oauth2/authorize?client_id=928711702596423740&permissions=2184571952&scope=bot%20applications.commands) | discord.js |
