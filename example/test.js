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