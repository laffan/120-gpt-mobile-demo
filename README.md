# GPT / Mobile Demo (CMPM 120)

A simple demo showing of ChatGPT and CapacitorJS can be used 
with phaser to create a simple mobile, AI-powered game.  

Apart from being mobile-ready, [CapacitorJS](https://capacitorjs.com/) 
is installed, allowing the project to be turned in to a native mobile app.

## Installation

This project requires a `.env` file at root which contains the following line : 

```
VITE_OPENAI_API_KEY=your-open-ai-api-key
```

Once this is in place, run 

`npm install`

To deploy to iOS, run

`npx cap add ios`

Note : This project uses [CapacitorJS](https://capacitorjs.com/) to convert
the site in to a working iOS or Android app. If you would like to do the same
to your own app, simply run the following series of npm/npx commands.

```sh
npm install @capacitor/core @capacitor/cli
npx cap init 
npm run build
npm install @capacitor/ios
npx cap add ios
```


### Deployment 

There are a few options to deploy .env variables. I personally 
prefer [Vercel](https://vercel.com/docs/projects/environment-variables) 
but all static site hosts will support this feature. 

## Credits

Font is [Old Newspaper Types by Manfred Klein](https://www.dafont.com/oldnewspapertypes.font)
