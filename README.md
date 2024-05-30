# GPT / Mobile Demo (CMPM 120)

A simple demo showing off how [OpenAI's ChatGPT](https://platform.openai.com/docs/overview) and [CapacitorJS](https://capacitorjs.com/) can be used 
with [Phaser](https://phaser.io/) to create a simple, mobile, AI-powered game.  


## Installation

This project requires a `.env` file at root which contains the following line : 

```
VITE_OPENAI_API_KEY=your-open-ai-api-key
```

To get an API key, you will first need to [sign up with their developer site](https://platform.openai.com/signup) and generate the key on the [API key page](https://platform.openai.com/api-keys). 

Once this is in place, run 

`npm install` to install the node packages required to run the site, then
`npm run dev` to run the site locally on your computer.


## Deployment 

### Online
Because you need an environment variable, deploying on GH pages is not a 
viable option. However, there are several static site hosts that would be
a good fit.  I personally prefer [Vercel](https://vercel.com/docs/projects/environment-variables) 
but all of them will support some version of this feature.

### As a Native App

To deploy to iOS/Android, run


Note : This project uses [CapacitorJS](https://capacitorjs.com/) to convert
the site in to a working iOS or Android app. If you would like to do the same
to your own app, simply run the following series of npm/npx commands.

```sh
npm install @capacitor/core @capacitor/cli
npx cap init 
npm run build
npm install @capacitor/ios @capacitor/android
npx cap add ios // or npx cap add android for the android version of the same.
```



## Credits

Font is [Old Newspaper Types by Manfred Klein](https://www.dafont.com/oldnewspapertypes.font)
