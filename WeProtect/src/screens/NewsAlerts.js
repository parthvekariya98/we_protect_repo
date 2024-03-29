import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import colors from '../helper/colors';
import NewsAlertItem from './NewsAlertItem';

const API_KEY = '2230500af3a04d8bb7452d87f78dcf2a';
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

const NewsAlerts = () => {
    const [newsData, setNewsData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [dataType, setDataType] = useState(0);

    const fetchNewsData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(url);
            const data = await response.json();
            setNewsData(data.articles);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching news data:', error);
            setIsLoading(false);
        }
    };

    const setStaticData = () => {
        setIsLoading(true);
        const data = {
            "status": "ok",
            "totalResults": 37,
            "articles": [
                {
                    "source": {
                        "id": "the-wall-street-journal",
                        "name": "The Wall Street Journal"
                    },
                    "author": "Nick Timiraos, Jonathan Weil, David Marino-Nachison, WSJ Staff, David Uberti, Eric Wallerstein, Patricia Kowsmann, Hannah Miao, Chelsey Dulaney, Charley Grant, Bob Henderson, Gunjan Banerji, Carol Ryan, Stephen Wilmot, Katy Barnato",
                    "title": "Fed Meeting Today: FOMC Interest-Rate Decision Due; Powell to Speak at 2:30pm - The Wall Street Journal",
                    "description": "The Federal Reserve's interest rate decision is coming today. The FOMC is expected to increase interest rates again. Follow along for the latest news, updates and Chairman Jerome Powell's press conference.",
                    "url": "https://www.wsj.com/livecoverage/fed-meeting-interest-rate-decision-today-july-2023",
                    "urlToImage": "https://images.wsj.net/im-798997/social",
                    "publishedAt": "2023-07-26T14:21:00Z",
                    "content": "Fed Day is here. U.S. central bankers' interest-rate decision is due at 2 p.m. ET, and Federal Reserve Chair Jerome Powell will hold a press conference at 2.30 p.m. (You'll be able to watch it live h… [+1463 chars]"
                },
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Brynn Gingras, Dakin Andone",
                    "title": "6 injured in New York City crane collapse, FDNY says - CNN",
                    "description": "Six people, including four civilians and two firefighters, suffered minor injuries in a crane collapse Wednesday morning in Manhattan.",
                    "url": "https://www.cnn.com/2023/07/26/us/nyc-crane-collapse/index.html",
                    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230726082849-01-crane-collapse-nyc-0726.jpg?c=16x9&q=w_800,c_fill",
                    "publishedAt": "2023-07-26T14:16:00Z",
                    "content": "Six people, including four civilians and two firefighters, suffered minor injuries in a crane collapse Wednesday morning in Manhattan. \r\nOne of the firefighters had chest pains and was transported to… [+1812 chars]"
                },
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Catherine Nicholls, Christian Edwards",
                    "title": "Actor Kevin Spacey cleared of all charges of sexual assault - CNN",
                    "description": "Oscar-winning actor Kevin Spacey has been cleared of all charges after a four-week trial in London on claims of sexual assault.",
                    "url": "https://www.cnn.com/2023/07/26/uk/kevin-spacey-trial-jury-verdict-intl/index.html",
                    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230726100531-01-kevin-spacey-court-0726.jpg?c=16x9&q=w_800,c_fill",
                    "publishedAt": "2023-07-26T14:15:00Z",
                    "content": "Oscar-winning actor Kevin Spacey has been cleared of all charges after a four-week trial in London on claims of sexual assault.\r\nThe Hollywood star, 64, had tears in his eyes as the jury at Southwark… [+2978 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Investor's Business Daily"
                    },
                    "author": "Investor's Business Daily",
                    "title": "Dow Jones Falls As Fed Decision Looms; Microsoft Slides On These AI Comments - Investor's Business Daily",
                    "description": null,
                    "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-fall-as-fed-decision-looms-microsoft-slides-on-these-ai-comments/",
                    "urlToImage": null,
                    "publishedAt": "2023-07-26T14:11:00Z",
                    "content": null
                },
                {
                    "source": {
                        "id": null,
                        "name": "Florida Today"
                    },
                    "author": "Jamie Groh",
                    "title": "SpaceX Falcon Heavy launch to bring sonic booms to the Space Coast - Florida Today",
                    "description": "Space Coast should prepare for overnight sonic booms with SpaceX Falcon Heavy liftoff from KSC set for late Wednesday.",
                    "url": "https://www.floridatoday.com/story/tech/science/space/2023/07/25/spacex-falcon-heavy-launch-to-bring-sonic-booms-to-the-space-coast/70461678007/",
                    "urlToImage": "https://www.floridatoday.com/gcdn/presto/2023/01/16/PBRE/b05ce1a1-5682-4def-9a8b-cc3098a7c66f-crb011523_spacex_5_.jpg?crop=3731,2099,x0,y42&width=3200&height=1801&format=pjpg&auto=webp",
                    "publishedAt": "2023-07-26T14:00:07Z",
                    "content": "Wednesday night will be a long one for Space Coast residents unaccustomed to middle-of-the-night launches and double booster landings.\r\nAt Kennedy Space Center, SpaceX teams are gearing up for the ov… [+5612 chars]"
                },
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Priscilla Alvarez",
                    "title": "Federal judge blocks Biden’s controversial asylum policy in a major blow to administration - CNN",
                    "description": "A federal judge on Tuesday blocked President Joe Biden’s controversial asylum policy, delivering a major blow to the administration, which has leaned on the measure to drive down border crossings. The judge put the ruling on hold for 14 days for a possible ap…",
                    "url": "https://www.cnn.com/2023/07/25/politics/biden-asylum-court-ruling/index.html",
                    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230725131143-01-biden-asylum-policy-062023.jpg?c=16x9&q=w_800,c_fill",
                    "publishedAt": "2023-07-26T13:51:00Z",
                    "content": "A federal judge on Tuesday blocked President Joe Bidens controversial asylum policy, delivering a major blow to the administration, which has leaned on the measure to drive down border crossings. The… [+6343 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "NBCSports.com"
                    },
                    "author": "Mike Florio",
                    "title": "The truth of Justin Herbert's deal: Seven years, $42.3 million per year - NBC Sports",
                    "description": "On the surface, it's a five-year, $262.5 million extension for Chargers quarterback Justin Herbert.",
                    "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/the-truth-of-justin-herberts-deal-seven-years-42-3-million-per-year",
                    "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/4a5aa7c/2147483647/strip/true/crop/3000x1688+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.amazonaws.com%2Fbrightspot%2F40%2F06%2Fae365e7749c1a13c0b4f0d0473b5%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1456487239",
                    "publishedAt": "2023-07-26T13:46:35Z",
                    "content": "On the surface, its a five-year, $262.5 million extension for Chargers quarterback Justin Herbert. It makes him the highest-paid player in NFL history, at $52.5 million per year.\r\nBut theres an old t… [+1395 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Hollywood Reporter"
                    },
                    "author": "Alex Weprin",
                    "title": "The Strike’s Side Effect: A Cash Hoard for Studios - Hollywood Reporter",
                    "description": "As Hollywood enters earnings season amid a double walkout, it’s becoming clear that, in the short term, the work stoppage is adding to struck companies’ bottom line. What will CEOs do with the windfall?",
                    "url": "https://www.hollywoodreporter.com/business/business-news/actors-strike-studios-cash-earnings-1235545151/",
                    "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2023/07/22rep_strike_Execs-MAIN.jpg?w=1024",
                    "publishedAt": "2023-07-26T13:35:40Z",
                    "content": "The ongoing actors and writers strikes are creating a paradox for major studios and streamers, one that will become more apparent over the coming months, when each company reports quarterly earnings.… [+7480 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "CNBC"
                    },
                    "author": "Jordan Novet",
                    "title": "Microsoft shares fall after earnings report as analysts process a delayed A.I. ramp - CNBC",
                    "description": "Many analysts are hopeful about Microsoft in the long term, but some are disappointed that clear artificial intelligence growth probably won't come this year.",
                    "url": "https://www.cnbc.com/2023/07/26/microsoft-stock-falls-as-analysts-digest-a-delayed-ai-ramp.html",
                    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107000993-1642106153402-gettyimages-626738964-93605503.jpeg?v=1690378221&w=1920&h=1080",
                    "publishedAt": "2023-07-26T13:30:21Z",
                    "content": "Microsoft shares were trading down as much as 5% on Wednesday, a day after the software maker issued worse-than-expected quarterly revenue guidance. Many analysts remained optimistic about the compan… [+3109 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "SciTechDaily"
                    },
                    "author": null,
                    "title": "Olive Oil Boosts Brain Health – Linked to 28% Lower Risk of Fatal Dementia - SciTechDaily",
                    "description": "Regular olive oil consumption is associated with a 28% lower risk of fatal dementia. A recent study suggests that incorporating olive oil into one's diet could help reduce the risk of death from dementia. With many countries witnessing rising rates of Alzheim…",
                    "url": "https://scitechdaily.com/olive-oil-boosts-brain-health-linked-to-28-lower-risk-of-fatal-dementia/",
                    "urlToImage": "https://scitechdaily.com/images/Olive-Oil-Concept-Illustration.jpg",
                    "publishedAt": "2023-07-26T13:13:03Z",
                    "content": "ByAmerican Society for NutritionJuly 26, 2023\r\nOlive oil consumption may reduce the risk of dementia-related death, according to a new study. Despite needing further research, the findings support di… [+4639 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Android Police"
                    },
                    "author": "Taylor Kerns",
                    "title": "Samsung Galaxy Watch 6 vs. Samsung Galaxy Watch 5: It's all in the margins - Android Police",
                    "description": "Samsung's newest wearable is great, but so is last year's",
                    "url": "https://www.androidpolice.com/samsung-galaxy-watch-6-vs-samsung-galaxy-watch-5/",
                    "urlToImage": "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/07/galaxy-watch-6-40mm-gold-render-square.jpg",
                    "publishedAt": "2023-07-26T13:00:00Z",
                    "content": "<ul><li> Samsung Galaxy Watch 6 \r\nNew year, new watch\r\nThe Samsung Galaxy Watch 6 is one of Samsung's new wearables for 2023, introduced at Galaxy Unpacked. It sports a very familiar look to the Gala… [+8326 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "CNET"
                    },
                    "author": null,
                    "title": "Samsung Unpacked: Everything You Need to Know About The Galaxy Z Fold 5, Z Flip 5, Watch 6 and More - CNET",
                    "description": "The new Galaxy Z Fold and Z Flip phones, plus the latest Galaxy Tab and Galaxy Watch, are now official.",
                    "url": "https://www.cnet.com/tech/mobile/samsung-unpacked-everything-you-need-to-know-about-galaxy-z-fold-5-z-flip-5-watch-6-and-more/",
                    "urlToImage": "https://www.cnet.com/a/img/resize/242dfc117183e0d384536873ba27dca199a1c095/hub/2023/07/24/4868a93f-efec-4c50-9325-c325544f50be/samsung-galaxy.jpg?auto=webp&fit=crop&height=675&width=1200",
                    "publishedAt": "2023-07-26T12:43:00Z",
                    "content": "Samsung has taken the wraps off its latest devices. On Wednesday at an event in Seoul, South Korea the electronics giant unveiled a host of new devices including the latest Galaxy Z Fold 5 and Galaxy… [+5662 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Giants.com"
                    },
                    "author": "Dan Salomone",
                    "title": "Giants sign left tackle Andrew Thomas to extension - Giants.com",
                    "description": "The 6-foot-5, 315-pound Georgia product comes off a breakout season in which he was selected second-team All-Pro.",
                    "url": "https://www.giants.com/news/andrew-thomas-contract-extension-left-tackle-georgia-bulldogs-daniel-jones-2023",
                    "urlToImage": "https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/giants/osjcnvapbjommhq755at",
                    "publishedAt": "2023-07-26T12:34:46Z",
                    "content": "The New York Giants today signed Andrew Thomas to a contract extension, securing the standout left tackle for the foreseeable future.\r\nOriginally the fourth overall pick in the 2020 NFL Draft, Thomas… [+1142 chars]"
                },
                {
                    "source": {
                        "id": "reuters",
                        "name": "Reuters"
                    },
                    "author": "Charlotte Van Campenhout, Rishabh Jaiswal",
                    "title": "Ship carrying 3000 cars burns off Dutch coast, crew member dead - Reuters",
                    "description": "A fire blazed on a ship off the Dutch coast with nearly 3,000 vehicles on board on Wednesday, killing one person and injuring several others, the coastguard said.",
                    "url": "https://www.reuters.com/world/europe/one-dead-cargo-ship-fire-electric-car-suspected-source-dutch-coastguard-2023-07-26/",
                    "urlToImage": "https://www.reuters.com/resizer/Tp0YdKI8Io_WXXdtjyLIFR13sOM=/1024x536/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6F5MBC4YRRM3HHINOPJYTOTXYM.jpg",
                    "publishedAt": "2023-07-26T12:05:00Z",
                    "content": "AMSTERDAM, July 26 (Reuters) - A fire blazed on a ship off the Dutch coast with nearly 3,000 vehicles on board on Wednesday, killing one person and injuring several others, the coastguard said.\r\nThe … [+2469 chars]"
                },
                {
                    "source": {
                        "id": "abc-news",
                        "name": "ABC News"
                    },
                    "author": "The Associated Press",
                    "title": "Volunteers working to save nearly 100 beached whales in Australia, but more than half have died - ABC News",
                    "description": "Volunteers are working frantically on a second day to save dozens of pilot whales that have stranded themselves on a beach in Western Australia, but more than 50 have already died",
                    "url": "https://abcnews.go.com/Technology/wireStory/volunteers-working-save-100-beached-whales-australia-half-101658160",
                    "urlToImage": "https://s.abcnews.com/images/International/wirestory_384c2898668dd0f0895572464a68dd76_16x9_992.jpg",
                    "publishedAt": "2023-07-26T12:00:43Z",
                    "content": "PERTH, Australia -- Volunteers worked frantically on a second day Wednesday to save dozens of pilot whales that have stranded themselves on a beach in Western Australia, but more than 50 have already… [+3168 chars]"
                },
                {
                    "source": {
                        "id": "espn",
                        "name": "ESPN"
                    },
                    "author": "Chris Wright",
                    "title": "Inter Miami's Messi scores goal vs. his 100th different club - ESPN - ESPN",
                    "description": "Atlanta became the 100th club that Lionel Messi has scored against in his career. Here are all of them, and how many he's scored against each team.",
                    "url": "https://www.espn.com/soccer/story/_/id/38073373/inter-miami-lionel-messi-just-scored-100th-different-club",
                    "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0726%2Fr1202357_1296x729_16%2D9.jpg",
                    "publishedAt": "2023-07-26T12:00:00Z",
                    "content": "Lionel Messi made his first start for Inter Miami CF on Tuesday and, having assumed the role of captain, lived up to the armband as his new team ran out 4-0 winners over fellow MLS side Atlanta Unite… [+6245 chars]"
                },
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Ivana Kottasová, Amir Tal",
                    "title": "Israel’s Supreme Court says it will not block law that limits its power – for now - CNN",
                    "description": "Israel’s Supreme Court said Wednesday that it will not issue an injunction to temporarily block a controversial new law that curbs its power. The so-called reasonableness law part of Prime Minister Benjamin Netanyahu’s plans to weaken the judiciary, has now e…",
                    "url": "https://www.cnn.com/2023/07/26/middleeast/israel-supreme-court-judicial-reform-law-intl/index.html",
                    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230724175646-20-israel-reform-protests-gallery-072523.jpg?c=16x9&q=w_800,c_fill",
                    "publishedAt": "2023-07-26T11:50:00Z",
                    "content": "Israels Supreme Court said Wednesday that it will not issue an injunction to temporarily block a controversial new law that curbs its power to strike down government decisions. \r\nThe so-called reason… [+333 chars]"
                },
                {
                    "source": {
                        "id": null,
                        "name": "Des Moines Register"
                    },
                    "author": "Jay Stahl",
                    "title": "Des Moines native co-wrote controversial Jason Aldean song 'Try That in a Small Town' - Des Moines Register",
                    "description": "Jason Aldean's longtime guitarist Kurt Allison, a Des Moines native, is co-writer of the country star's controversial No. 2 song \"Try That in a Small Town.\"",
                    "url": "https://www.desmoinesregister.com/story/entertainment/music/2023/07/26/jason-aldean-song-try-that-small-town-kurt-allison-des-moines-cowriter/70465363007/",
                    "urlToImage": "https://www.desmoinesregister.com/gcdn/-mm-/bb91c251c9b19d90b669a453dac9467988926023/c=0-351-1657-1287/local/-/media/2016/01/18/IAGroup/DesMoines/635887201483591541-Allison-2.png?width=1657&height=936&fit=crop&format=pjpg&auto=webp",
                    "publishedAt": "2023-07-26T11:06:18Z",
                    "content": "A co-writer of Jason Aldean's controversial hit song \"Try That in a Small Town\" is from Des Moines.\r\nThe long-running Aldean guitarist and south-side native Kurt Allison co-wrote the song with Kelley… [+3542 chars]"
                },
                {
                    "source": {
                        "id": "engadget",
                        "name": "Engadget"
                    },
                    "author": null,
                    "title": "Samsung Galaxy Tab S9 Ultra hands-on: A premium tablet with water protection - Engadget",
                    "description": "The flagship Galaxy Tab S9  is only the company’s second “Ultra” tablet, and there are many similarities to last year’s Tab S8 Ultra, with its 16:10 screen, dual-camera array on the back and magnetized stylus holster.",
                    "url": "https://www.engadget.com/samsung-galaxy-tab-s9-ultra-hands-on-a-premium-tablet-with-water-protection-110020872.html",
                    "urlToImage": "https://s.yimg.com/uu/api/res/1.2/Y1rIK_oPz47xSeeST3Oi3g--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-07/c0ce2502-2a36-11ee-abff-228ccd4eb757.cf.jpg",
                    "publishedAt": "2023-07-26T11:00:50Z",
                    "content": "This years Galaxy Unpacked foldable showcase is more of a Samsung eco-system barrage. Two foldables, two wearables, and no fewer than three tablets are here to tempt you to stick with the Galaxy fami… [+5424 chars]"
                },
                {
                    "source": {
                        "id": "cnn",
                        "name": "CNN"
                    },
                    "author": "Robert North, Hanna Ziady",
                    "title": "UK bank CEO quits after spat over Brexit campaigner Nigel Farage’s account - CNN",
                    "description": "The CEO of one of the biggest banks in the United Kingdom has resigned after admitting she leaked details about the closure of Brexit campaigner Nigel Farage’s accounts to a BBC journalist.",
                    "url": "https://www.cnn.com/2023/07/26/business/alison-rose-natwest-resignation-farage/index.html",
                    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230726032327-natwest-ceo-resigns-after-nigel-farage-leak-bcc.jpg?c=16x9&q=w_800,c_fill",
                    "publishedAt": "2023-07-26T10:46:00Z",
                    "content": "The CEO of one of the biggest banks in the United Kingdom has resigned after admitting she leaked details about the closure of Brexit campaigner Nigel Farages accounts to a BBC journalist. \r\nAlison R… [+5319 chars]"
                }
            ]
        }
        setNewsData(data.articles);
        setIsLoading(false);
    }

    const handleDataTypeChange = (type) => {
        setDataType(type);
        if (type === 2) {
            // For User data, fetch API
            fetchNewsData();
        } else if (type === 1) {
            setStaticData();
        }
    };

    if (dataType === 0) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: 'black', textAlign:'center', width: '90%', marginBottom: 10 }}>Please select appropriate type this is to reduce the API calls as we are in testing phase of our application.</Text>
                <TouchableOpacity
                    onPress={() => handleDataTypeChange(1)}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        width: '90%',
                        marginHorizontal: '5%',
                        marginVertical: '2%',
                        paddingHorizontal: 20,
                        paddingVertical: 15,
                        backgroundColor: '#0081FB',
                        borderRadius: 8
                    }}
                >
                    <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>DEVELOPER</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handleDataTypeChange(2)}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        width: '90%',
                        marginHorizontal: '5%',
                        marginVertical: '2%',
                        paddingHorizontal: 20,
                        paddingVertical: 15,
                        backgroundColor: '#0081FB',
                        borderRadius: 8
                    }}
                >
                    <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>USER</Text>
                </TouchableOpacity>
            </View>
        );
    }

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="gray" />
            </View>
        );
    }

    if (dataType === 1 || dataType === 2) {
        return (
            <View style={{backgroundColor:colors.primary, alignItems:'center'}}>
                <FlatList
                    data={newsData}
                    keyExtractor={(item) => item.title}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <NewsAlertItem item={item} />
                    )}
                />
            </View>
        );
    }
};

export default NewsAlerts;
