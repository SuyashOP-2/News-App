import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  articles =  [
   
    {
      "source": { "id": null, "name": "CNBC" },
      "author": "Mike Calia",
      "title": "5 things to know before the stock market opens Thursday - CNBC",
      "description": "Here are the most important news items that investors need to start their trading day.",
      "url": "https://www.cnbc.com/2022/08/25/5-things-to-know-before-the-stock-market-opens-thursday-august-25.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/107108812-Stellantis-OB-Photo-220824-CC-PRESS-11.jpg?v=1661361979&w=1920&h=1080",
      "publishedAt": "2022-08-25T11:52:28Z",
      "content": "Traders on the floor of the NYSE, August 24, 2022.\r\nHere are the most important news items that investors need to start their trading day:\r\n1. Stocks seek new winning streak\r\nStock futures pointed to… [+3370 chars]"
    },
   
    {
      "source": { "id": null, "name": "Heat.com" },
      "author": "From NBA.com News Services",
      "title": "Reports: Lakers trade for veteran guard Patrick Beverley - NBA.com",
      "description": "The Jazz would pick up Talen Horton-Tucker and Stanley Johnson in exchange for the playoff-tested point guard.",
      "url": "https://www.nba.com/news/lakers-trade-for-patrick-beverley",
      "urlToImage": "https://cdn.nba.com/manage/2022/04/beverley.jpg",
      "publishedAt": "2022-08-25T11:15:00Z",
      "content": "Patrick Beverley is reportedly on the move for the 2nd time this summer.\r\nThe Los Angeles Lakers look to have made a late offseason move Wednesday night, with multiple reports indicating they’re on t… [+2069 chars]"
    },
    {
      "source": { "id": null, "name": "CNBC" },
      "author": "Lauren Thomas",
      "title": "Peloton reports big loss, decline in revenue as the company grinds through its turnaround plan - CNBC",
      "description": "Peloton has pursued sweeping changes, including price hikes and a shift to emphasizing subscriptions, that have yet to fully pay off.",
      "url": "https://www.cnbc.com/2022/08/25/peloton-pton-reports-q4-2022-losses-mount.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/106976123-1637072850417-peloton.jpg?v=1661429666&w=1920&h=1080",
      "publishedAt": "2022-08-25T11:00:11Z",
      "content": "Peloton on Thursday reported widening losses and slumping sales in its fiscal fourth quarter as the connected fitness equipment maker attempts to win back investors with cost cuts and strategic shift… [+5584 chars]"
    },

    {
      "source": { "id": null, "name": "CNBC" },
      "author": "Arjun Kharpal",
      "title": "Sony hikes the price of its PlayStation 5 console because of soaring inflation - CNBC",
      "description": "Sony on Thursday raised the recommended retail price of its PlayStation 5 games console in several international markets citing the global economic environment.",
      "url": "https://www.cnbc.com/2022/08/25/sony-raises-price-of-playstation-5-console-due-to-soaring-inflation.html",
      "urlToImage": "https://image.cnbcfm.com/api/v1/image/106799601-1605802468554-gettyimages-1220230403-20200615sopamasl064.jpeg?v=1605803796&w=1920&h=1080",
      "publishedAt": "2022-08-25T07:49:50Z",
      "content": "Sony on Thursday raised the recommended retail price of its PlayStation 5 games console in several international markets citing the global economic environment, including high inflation.\r\nThe Japanes… [+3526 chars]"
    },

    {
      "source": { "id": "fox-news", "name": "Fox News" },
      "author": "Lorraine Taylor",
      "title": "Shinzo Abe assassination: Japan’s national police chief to resign over failure to save former leader's life - Fox News",
      "description": "In the wake of Shinzo Abe's assassination, Japan’s national police chief Itaru Nakamura said he would resign. A new report revealed problems with Abe's police protection.",
      "url": "https://www.foxnews.com/world/shinzo-abe-assassination-japans-national-police-chief-resign-failure-save-former-leaders-life",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/07/GettyImages-1269272911.jpg",
      "publishedAt": "2022-08-25T06:34:22Z",
      "content": "The national police chief of Japan announced on Thursday that he will step down in order to take responsibility over the assassination of former Prime Minister Shinzo Abe.\r\nNational Police Agency Chi… [+2660 chars]"
    },
    {
      "source": { "id": null, "name": "Electrek" },
      "author": "Fred Lambert",
      "title": "Tesla (TSLA) stock splits, gets new target at $360 a share - Electrek.co",
      "description": "Tesla’s (TSLA) stock has now officially split 3-for-1 after closing at $891 per share yesterday, which means it should start trading at around $297 per share this morning. But now it already got its first price target update post-split at $360 a share. Tesla’…",
      "url": "https://electrek.co/2022/08/24/tesla-tsla-stock-splits-new-target/",
      "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2016/03/img_1665-e1457955946161.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2022-08-25T06:53:00Z",
      "content": "Tesla’s (TSLA) stock has now officially split 3-for-1 after closing at $891 per share yesterday, which means it should start trading at around $297 per share this morning.\r\nBut now it already got its… [+2622 chars]"
    },


   
  
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Angus Watson, Xiaofei Xu and Niamh Kennedy, CNN",
      "title": "Myanmar junta detains former UK ambassador Vicky Bowman - CNN",
      "description": "The United Kingdom's former ambassador to Myanmar has reportedly been detained by the country's military junta.",
      "url": "https://www.cnn.com/2022/08/25/asia/myanmar-junta-detains-former-uk-ambassador-vicky-bowman-hnk-intl/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220825051620-vicky-bowman-2017-file-restricted-super-tease.jpg",
      "publishedAt": "2022-08-25T09:50:00Z",
      "content": null
    },
    {
      "source": { "id": "cbs-news", "name": "CBS News" },
      "author": null,
      "title": "Uvalde school board fires police Chief Pete Arredondo after mass shooting - CBS News",
      "description": "Pete Arredondo was accused of making several critical mistakes during the May shooting that left 19 students and two teachers dead.",
      "url": "https://www.cbsnews.com/news/uvalde-school-board-fires-police-chief-pete-arredondo-after-mass-shooting/",
      "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2022/08/25/7660557a-64aa-4069-aa9d-38345bd676fb/thumbnail/1200x630/df6181b74c89069418f7d665a161fa33/uvalde-school-board-meeting.jpg",
      "publishedAt": "2022-08-25T09:38:00Z",
      "content": "Uvalde CISD fires Police Chief Arredondo \r\nUvalde CISD fires Police Chief Arredondo01:02\r\nThe Uvalde school district's embattled police chief was fired Wednesday following allegations that he made se… [+5738 chars]"
    },
    {
      "source": { "id": null, "name": "New York Times" },
      "author": "Zeynep Tufekci",
      "title": "Opinion | If You’re Suffering After Being Sick With Covid, It’s Not Just in Your Head - The New York Times",
      "description": "A major new approach is needed to solve many postviral conditions.",
      "url": "https://www.nytimes.com/2022/08/25/opinion/long-covid-pandemic.html",
      "urlToImage": "https://static01.nyt.com/images/2022/08/25/opinion/25tufekci/25tufekci-facebookJumbo.jpg",
      "publishedAt": "2022-08-25T09:00:06Z",
      "content": "After Recovers February 2021 start, the National Institutes of Health put out calls for research proposals. However, it took until early June 2021 for the first awards to go out and until September f… [+1643 chars]"
    },
    {
      "source": { "id": null, "name": "Daily Beast" },
      "author": "Adam Manno",
      "title": "'Batgirl' Directors Tried to Pirate Movie Before HBO Max Locked Them Out of Servers - The Daily Beast",
      "description": "Adil El Arbi and Bilall Fallah were in Morocco for the former’s wedding when they got the news. Panicked, they turned to impromptu piracy.",
      "url": "https://www.thedailybeast.com/obsessed/batgirl-directors-tried-to-pirate-movie-before-hbo-max-locked-them-out-of-servers",
      "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1845,w_3280,x_0,y_83/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1661402859/GettyImages-1399387919_hyk2si",
      "publishedAt": "2022-08-25T08:32:32Z",
      "content": "The creators behind HBO Maxs Batgirl say they were so stunned by the streamers decision to scrap the movie that they tried to log onto the server and record their work on a cellphone before their acc… [+4455 chars]"
    },
    
    {
      "source": { "id": null, "name": "10TV" },
      "author": "10TV Web Staff",
      "title": "Conceptual agreement reached between Columbus school board, teachers' union - 10TV",
      "description": "The Columbus Board of Education and the Columbus Education Association have reached a conceptual agreement, after nearly fourteen continuous hours of negotiations.",
      "url": "https://www.10tv.com/article/news/local/columbus-school-board-reaches-conceptual-agreement-with-teachers-union-thursday-morning/530-c62e83a1-6249-412f-8e7a-4cf5ee0705df",
      "urlToImage": "https://media.tegna-media.com/assets/WKYC/images/fad5622d-aa40-4b30-9ac9-4908108f8591/fad5622d-aa40-4b30-9ac9-4908108f8591_1140x641.jpg",
      "publishedAt": "2022-08-25T07:32:00Z",
      "content": "COLUMBUS, Ohio The Columbus Board of Education and the Columbus Education Association have reached a conceptual agreement after nearly 14 hours of negotiations. The agreement tentatively ended a stri… [+2935 chars]"
    },
    
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Marshall Cohen, CNN",
      "title": "Justice Department releases unredacted Barr memo detailing decision not to charge Trump with obstructing Russia probe - CNN",
      "description": "Former Attorney General Bill Barr concluded that then-President Donald Trump couldn't be charged with obstructing the Russia probe because there wasn't an underlying conspiracy between his campaign and Russia, breaking with special counsel Robert Mueller's vi…",
      "url": "https://www.cnn.com/2022/08/24/politics/barr-mueller-report/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/190222022146-barr-mueller-split-super-tease.jpg",
      "publishedAt": "2022-08-25T07:18:00Z",
      "content": "(CNN)Former Attorney General Bill Barr concluded that then-President Donald Trump couldn't be charged with obstructing the Russia probe because there wasn't an underlying conspiracy between his campa… [+4121 chars]"
    },
    {
      "source": { "id": null, "name": "Electrek" },
      "author": "Fred Lambert",
      "title": "Tesla (TSLA) stock splits, gets new target at $360 a share - Electrek.co",
      "description": "Tesla’s (TSLA) stock has now officially split 3-for-1 after closing at $891 per share yesterday, which means it should start trading at around $297 per share this morning. But now it already got its first price target update post-split at $360 a share. Tesla’…",
      "url": "https://electrek.co/2022/08/24/tesla-tsla-stock-splits-new-target/",
      "urlToImage": "https://i0.wp.com/electrek.co/wp-content/uploads/sites/3/2016/03/img_1665-e1457955946161.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      "publishedAt": "2022-08-25T06:53:00Z",
      "content": "Tesla’s (TSLA) stock has now officially split 3-for-1 after closing at $891 per share yesterday, which means it should start trading at around $297 per share this morning.\r\nBut now it already got its… [+2622 chars]"
    },
    {
      "source": { "id": "fox-news", "name": "Fox News" },
      "author": "Lorraine Taylor",
      "title": "Shinzo Abe assassination: Japan’s national police chief to resign over failure to save former leader's life - Fox News",
      "description": "In the wake of Shinzo Abe's assassination, Japan’s national police chief Itaru Nakamura said he would resign. A new report revealed problems with Abe's police protection.",
      "url": "https://www.foxnews.com/world/shinzo-abe-assassination-japans-national-police-chief-resign-failure-save-former-leaders-life",
      "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/07/GettyImages-1269272911.jpg",
      "publishedAt": "2022-08-25T06:34:22Z",
      "content": "The national police chief of Japan announced on Thursday that he will step down in order to take responsibility over the assassination of former Prime Minister Shinzo Abe.\r\nNational Police Agency Chi… [+2660 chars]"
    },
    {
      "source": { "id": null, "name": "New York Post" },
      "author": "Chuck Arnold",
      "title": "Olivia Rodrigo surprises fans at Billy Joel's latest MSG concert - New York Post ",
      "description": "Billy Joel found a new “Uptown Girl” — one who was born long after that classic 1983 single became one of his biggest hits — at Madison Square Garden on Wednesday night. That would be Olivia Rodrig…",
      "url": "https://nypost.com/2022/08/25/olivia-rodrigo-surprises-fans-at-billy-joels-latest-msg-concert-in-nyc/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/08/billy-joel-index.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2022-08-25T05:58:00Z",
      "content": "Billy Joel found a new Uptown Girl one who was born long after that classic 1983 single became one of his biggest hits at Madison Square Garden on Wednesday night.\r\nThat would be Olivia Rodrigo the 1… [+2518 chars]"
    },
    {
      "source": { "id": null, "name": "CNET" },
      "author": "Ian Sherr",
      "title": "iPhone 14 Launches Sept. 7: Apple Event Confirmed - CNET",
      "description": "Apple's \"Far Out\" launch event is also rumored to include a peek at the Apple Watch 8.",
      "url": "https://www.cnet.com/tech/mobile/iphone-14-launches-sept-7-apple-event-confirmed-watch/",
      "urlToImage": "https://www.cnet.com/a/img/resize/0d13ca28965a2a15fd6519860754cf79915c2eef/2022/08/24/95996d4e-2a27-4deb-b48b-13f2cbab9a2d/opal-d-hero-banner.jpg?auto=webp&fit=crop&height=630&width=1200",
      "publishedAt": "2022-08-25T05:54:26Z",
      "content": "Apple has set the date for its latest iPhone's debut. The new device, which is expected to be called the iPhone 14 and include an always-on display, will be unveiled on Sept. 7 at 10 a.m. PT. Rumors … [+3488 chars]"
    },
    
   
    {
      "source": { "id": "the-washington-post", "name": "The Washington Post" },
      "author": "Reis Thebault",
      "title": "Russian attack on train station, homes in Ukrainian town of Chaplyne kills at least 25 - The Washington Post",
      "description": "The attack underscored Russia’s targeting of transportation infrastructure, a strategy that has killed scores of bystanders during the war.",
      "url": "https://www.washingtonpost.com/world/2022/08/24/russia-ukraine-train-station-strike/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PSXOL6BD5UI63JZPDZYUSBZPXQ.jpg&w=1440",
      "publishedAt": "2022-08-25T05:21:00Z",
      "content": "Comment on this story\r\nAs Ukrainians marked the 31st anniversary of their countrys break from the Soviet Union with a somber parade in Kyiv on Wednesday, Russia launched a deadly missile attack on a … [+3584 chars]"
    },
    {
      "source": {
      "id": null,
      "name": "India Today"
      },
      "author": null,
      "title": "Chilling video captures infiltration bid by Pakistani terrorists in J&K’s Uri - India Today",
      "description": "A video shared by the Indian Army shows an infiltration bid along the LoC in Jammu and Kashmir’s Uri. The terrorists were detected using surveillance devices and the infiltration bid was foiled.",
      "url": "https://www.indiatoday.in/india/story/infiltration-bid-by-pakistani-terrorists-jammu-kashmir-uri-foiled-video-1992661-2022-08-26",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/infiltration1-647x363.png?sW09GKGbdBtL96mvtk1Be6sQ4Zgw6Spj",
      "publishedAt": "2022-08-26T03:10:50Z",
      "content": "A video shared by the Indian Army shows a furtive infiltration bid along the Line of Control (LoC) in the Uri sector of Jammu and Kashmir.\r\nAccording to army officials, three Pakistani terrorists att… [+1132 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "The Indian Express"
      },
      "author": "PTI",
      "title": "Sonali Phogat 'murder': 'Curlies' restaurant at Goa's Anjuna beach back in limelight after 14 years - The Indian Express",
      "description": "Sonali Phogat;s death, earlier suspected to have been caused by a heart attack, is now being treated as a murder and two of her associates have been arrested by the Anjuna police.",
      "url": "https://indianexpress.com/article/cities/goa/sonali-phogat-murder-curlies-anjuna-beach-goa-8112390/",
      "urlToImage": "https://images.indianexpress.com/2022/08/curlies.jpg",
      "publishedAt": "2022-08-26T03:08:30Z",
      "content": "Sonali Phogat (42) had visited ‘Curlies’ restaurant on Monday night and was brought dead to the St Anthony Hospital in Anjuna in North Goa district from her hotel on August 23 morning.\r\nHer death, ea… [+2241 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "The Indian Express"
      },
      "author": "Sandeep Singh",
      "title": "Explained: Can a SEBI order from 2020 stop Adani from acquiring 29% of NDTV? - The Indian Express",
      "description": "In its disclosure to the stock exchanges, NDTV has said a SEBI order from November 27, 2020 restrained Prannoy Roy and Radhika Roy from accessing the securities market, and prohibited them from buying and selling securities, directly or indirectly for two yea…",
      "url": "https://indianexpress.com/article/explained/explained-economics/adani-ndtv-deal-sebi-approval-order-explained-8112365/",
      "urlToImage": "https://images.indianexpress.com/2022/08/Adani.jpg",
      "publishedAt": "2022-08-26T02:38:51Z",
      "content": "NDTV Ltd has told the stock exchanges that the entity called Vishvapradhan Commercial Private Ltd (VCPL) which is now a subsidiary of the Adani Group will have to get approval from the market regulat… [+4939 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "India Today"
      },
      "author": null,
      "title": "Liger box office collection Day 1: Vijay Deverakonda's film takes a grand opening, but slows down in afternoon - India Today",
      "description": "Vijay Deverakonda's Liger took a roaring start at the box office. However, it slowed down from the afternoon shows due to negative word of mouth.",
      "url": "https://www.indiatoday.in/movies/regional-cinema/story/liger-box-office-collection-day-1-vijay-deverakonda-s-film-takes-a-grand-opening-but-slows-down-in-afternoon-1992649-2022-08-26",
      "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/Vijay_Deverakonda_LIger_box_of-647x363.jpeg?JBi0NURaMV1fMcTIvuq2dp_V96RkcTu5",
      "publishedAt": "2022-08-26T02:19:25Z",
      "content": "Vijay Deverakonda and Ananya Panday's Liger was off to a roaring start on August 25, but slowed down eventually due to negative reviews. According to trade reports, Liger is estimated to have earned … [+1430 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Moneycontrol"
      },
      "author": "Sandip Das",
      "title": "Stock Market Today: Top 10 things to know before the market opens today - Moneycontrol",
      "description": "Stock Market News: Trends in SGX Nifty indicate a positive opening for the broader index in India with a gain of 74 points.",
      "url": "https://www.moneycontrol.com/news/business/markets/stock-market-today-top-10-things-to-know-before-the-market-opens-today-61-9087941.html",
      "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/07/SensexBSENSE-770x433.jpg",
      "publishedAt": "2022-08-26T01:54:26Z",
      "content": "The market is expected to open in the green as trends in SGX Nifty indicate a positive opening for the broader index in India with a gain of 74 points.\r\nThe BSE Sensex fell 311 points to 58,775 yeste… [+5371 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "Hindustan Times"
      },
      "author": "Poulomi Ghosh",
      "title": "On Raja Singh episode, BJP says Owaisi is 'one-seat wonder' but KCR... - Hindustan Times",
      "description": "BJP's Amit Malviya said Owaisi is playing the victim card and instigating mob while chief minister KCR has surrendered to him. | Latest News India",
      "url": "https://www.hindustantimes.com/india-news/on-raja-singh-episode-bjp-says-owaisi-is-one-seat-wonder-but-kcr-101661477852193.html",
      "urlToImage": "https://images.hindustantimes.com/img/2022/08/26/1600x900/KCR_1656750737527_1661478051324_1661478051324.JPG",
      "publishedAt": "2022-08-26T01:43:52Z",
      "content": "Telangana chief minister K Chandrasekhar Rao has completely surrendered to AIMIM and its chief Asaduddin Owaisi, the BJP said on Thursday in a jibe after suspended BJP leader T Raja Singh was arreste… [+2116 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "India.com"
      },
      "author": "Piyush Singh Thapa",
      "title": "India vs Pakistan Asia Cup 2022: Rohit Sharma goes all guns blazing against Yuzvendra Chahal and co, WATCH - Zee News",
      "description": "India, Pakistan, and Bangladesh squads with fixtures schedule, Livestream details HERE) Everyone watches the game and its a high-pressure game without a doubt, but within the group we want to create a normal atmosphere, Rohit was quoted as saying. We dont wan…",
      "url": "https://zeenews.india.com/cricket/watch-rohit-sharma-goes-all-guns-blazing-against-yuzvendra-chahal-and-co-ahead-india-vs-pakistan-asia-cup-2022-clash-2501832.html",
      "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2022/08/26/1082165-rohit.jpg",
      "publishedAt": "2022-08-26T01:39:05Z",
      "content": "Ahead the India vs Pakistan Asia Cup 2022, Men in Blue skipper Rohit Sharma was seen hammering sixes against his own bowling attack in the nets as the attacking approach of coach Rahul Dravid looks t… [+1721 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "The Indian Express"
      },
      "author": "PTI",
      "title": "US police arrests woman for assault on Indian Americans: 'I hate you Indians…' - The Indian Express",
      "description": "The video has now gone viral and sent shock waves among the Indian-American community across the United States.",
      "url": "https://indianexpress.com/article/world/texas-police-arrests-woman-for-assault-on-indian-americans-8112310/",
      "urlToImage": "https://images.indianexpress.com/2022/08/Esmeralda-Upton.jpg",
      "publishedAt": "2022-08-26T01:32:06Z",
      "content": "Police in Texas on Thursday arrested a person after a video of her assaulting a group of four Indian-American women surfaced and went viral in which she is abusing them and asking them to go back to … [+2258 chars]"
      },
      {
      "source": {
      "id": null,
      "name": "The Indian Express"
      },
      "author": "Peter Vidal",
      "title": "Horoscope Today: Check Astrological prediction for August 26, 2022 - The Indian Express",
      "description": "Daily horoscope:  Astrological prediction for August 26, 2022--Libra-The last few days may have brought strange feelings and new desires, but the coming ones are crucial as far as short-term romantic, social and work plans are involved",
      "url": "https://indianexpress.com/article/horoscope/horoscope-today-august-26-2022-gemini-aries-pisces-and-other-signs-check-astrological-prediction-8107636/",
      "urlToImage": "https://images.indianexpress.com/2022/08/horoscope-1-5.jpg",
      "publishedAt": "2022-08-25T19:30:49Z",
      "content": "ARIES (Mar 21 – Apr. 20)\r\nThere may be little you can do to avoid a break at home today. Even at work, it seems as if the habits of the past are no longer serving you as well as they once did. If you… [+3495 chars]"
      },
      
      
  ]

  
  constructor(){

    super();
    
    this.state= {

      articles: this.articles,
      loading: false

    }
      

      

      

    }

   async componenetDidMount(){

      console.log("cdm")
      
      let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=01db5a96d63d4ae5b3cfc25e6408620c";
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({articles: parsedData.articles})

   }

    

  
  render() {

    console.log("render")

    
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title.slice(0,45): ""} description={element.description?element.description.slice(0, 88): ""} imageUrl={element.urlToImage} newsUrl={element.url}/>
          </div>

        

        })}
          
          
          
          
        </div>

        
      </div>
    );
  }
}

export default News;
