import traveSvg from './images/trave.svg'
import homeSvg from './images/home.svg'
import hobbiesSvg from './images/hobbies.svg'
import unknownSvg from './images/unknown.svg'  

import { RouterLink } from "vue-router";
import { defineComponent, h, ref } from "vue";
import seeyou from './audio/seeyouagain.mp3'
export const musicList = [
    {
      name: 'See You Again',
      author: 'Wiz Khalifa / Charlie Puth',
      url: seeyou,
      img: 'http://p2.music.126.net/AuE9HT1fBoRvT23II8Brzw==/109951166715465943.jpg?param=130y130',
      lrc: `[00:00.000] 作词 : Charlie Puth/Cameron Thomaz/Phoebe Cockburn/Andrew Cedar/Dann Hume/Joshua Karl Simon Hardy\n[00:01.000] 作曲 : Charlie Puth/Cameron Thomaz/Phoebe Cockburn/Andrew Cedar/Dann Hume/Joshua Karl Simon Hardy\n[00:10.440]It's been a long day without you my friend\n[00:17.400]And I'll tell you all about it when I see you again\n[00:23.200]We've come a long way from where we began\n[00:29.080]Oh I'll tell you all about it when I see you again\n[00:35.100]When I see you again\n[00:39.920]Damn who knew all the planes we flew\n[00:42.900]Good things we've been through\n[00:44.610]That I'll be standing right here\n[00:46.330]Talking to you about another path\n[00:48.750]I know we loved to hit the road and laugh\n[00:51.020]But something told me that it wouldn't last\n[00:53.390]Had to switch up look at things different see the bigger picture\n[00:57.100]Those were the days hard work forever pays\n[01:00.289]Now I see you in a better place\n[01:05.019]How could we not talk about family when family's all that we got?\n[01:08.659]Everything I went through you were standing there by my side\n[01:11.560]And now you gon' be with me for the last ride\n[01:13.760]It's been a long day without you my friend\n[01:20.330]And I'll tell you all about it when I see you again\n[01:26.200]We've come a long way from where we began\n[01:32.150]Oh I'll tell you all about it when I see you again\n[01:38.170]When I see you again\n[01:56.230]First you both go out your way\n[01:57.750]And the vibe is feeling strong and what's small turn to a friendship\n[02:01.540]a friendship turn to a bond and\n[02:03.390]that bond will never be broken the love will never get lost\n[02:08.229]And when brotherhood come first then the line\n[02:10.310]Will never be crossed established it on our own\n[02:12.729]When that line had to be drawn and that line is what we reach\n[02:15.330]So remember me when I'm gone\n[02:19.960]How could we not talk about family when family's all that we got?\n[02:23.599]Everything I went through you were standing there by my side\n[02:26.550]And now you gon' be with me for the last ride\n[02:29.080]So  let the light guide your way\n[02:32.080]Hold every memory as you go\n[02:38.139]And every road you take will always lead you home\n[02:49.190]Home\n[02:52.650]It's been a long day without you my friend\n[02:59.319]And I'll tell you all about it when I see you again\n[03:05.219]We've come a long way from where we began\n[03:11.129]Oh I'll tell you all about it when I see you again\n[03:16.979]When I see you again\n[03:22.659]Again\n[03:29.050]When I see you again see you again\n[03:41.020]When I see you again\n[03:45.107]Producers : DJ Frank E / Charlie Puth / Andrew Cedar\n[03:45.360]Vocals : Charlie Puth / Wiz Khalifa / Annie & Chloe\n[03:45.538]String Arranger & Conductor : Brian Tyler\n[03:46.038]Recorded in 2014\n`
     },
     {
      name: 'Love Story',
      author: 'Taylor Swift',
      url: 'https://music.163.com/song/media/outer/url?id=1969538016.mp3',
      img: 'https://p2.music.126.net/ZNyjB2ChNsUWbMlg_JnUvA==/109951167746002007.jpg?param=130y130',
      lrc: `[00:00.000] 作词 : Taylor Swift\n[00:01.000] 作曲 : Taylor Swift\n[00:16.191]We were both young when I first saw you\n[00:20.628]I close my eyes and the flashback starts\n[00:23.383]I'm standing there on a balcony in summer air\n[00:32.394]See the lights see the party the ball gowns\n[00:36.590]See you make your way through the crowd\n[00:39.597]And say hello\n[00:43.349]Little did I know\n[00:48.338]That you were Romeo you were throwing pebbles\n[00:52.089]And my daddy said\n[00:53.359]Stay away from Juliet\n[00:55.838]And I was crying on the staircase\n[00:58.591]Begging you please don't go\n[01:03.099]And I said\n[01:04.598]Romeo take me somewhere we can be alone\n[01:08.587]I'll be waiting all there's left to do is run\n[01:12.594]You'll be the prince and I'll be the princess\n[01:16.608]It's a love story baby just say yes\n[01:24.607]So I sneak out to the garden to see you\n[01:28.858]We keep quiet 'cause we're dead if they knew\n[01:32.344]So close your eyes escape this town for a little while\n[01:40.602]'Cause you were Romeo I was a scarlet letter\n[01:44.360]And my daddy said\n[01:45.860]Stay away from Juliet\n[01:48.104]But you were everything to me\n[01:50.347]I was begging you please don't go\n[01:55.596]And I said Romeo take me somewhere we can be alone\n[02:01.103]I'll be waiting all there's left to do is run\n[02:05.103]You'll be the prince and I'll be the princess\n[02:09.090]It's a love story baby just say yes\n[02:13.093]Romeo save me they're trying to tell me how to feel\n[02:17.342]This love is difficult but it's real\n[02:21.351]Don't be afraid we'll make it out of this mess\n[02:25.341]It's a love story baby just say yes\n[02:32.598]Oh oh\n[02:44.098]And I got tired of waiting\n[02:48.340]Wondering if you were ever coming around\n[02:52.347]My faith in you was fading\n[02:56.849]When I met you on the outskirts of town\n[03:00.103]And I said\n[03:01.600]Romeo save me I've been feeling so alone\n[03:05.596]I keep waiting for you but you never come\n[03:09.089]Is this in my head I don't know what to think\n[03:13.096]He knelt to the ground and pulled out a ring and said\n[03:17.841]Marry me Juliet you'll never have to be alone\n[03:21.848]I love you and that's all I really know\n[03:25.344]I talked to your dad go pick out a white dress\n[03:29.855]It's a love story baby just say yes\n[03:37.096]Oh oh\n[03:41.104]Oh oh\n[03:45.605]'Cause we were both young when I first saw you\n`
     },
    {
     name: `We Can't Stop`,
     author: 'Boyce Avenue / Bea Miller',
     url: 'https://music.163.com/song/media/outer/url?id=29480187.mp3',
     img: 'http://p2.music.126.net/wnAdYwv2gisI8npJhJIwQA==/109951167307171307.jpg?param=130y130',
     lrc: `[00:00.000] 作词 : Miley Cyrus/Douglas Davis/Pierre Slaughter/Theron Thomas/Timothy Thomas/Ricky Walters/Michael Williams\n[00:01.000] 作曲 : Miley Cyrus/Douglas Davis/Pierre Slaughter/Theron Thomas/Timothy Thomas/Ricky Walters/Michael Williams\n[00:12.810]Red cups and sweaty bodies everywhere\n[00:15.450]Hands in the air like we don't care\n[00:18.350]'Cause we came to have so much fun now\n[00:21.410]Bet somebody here might be the one now\n[00:24.370]If you're not ready to go home\n[00:29.200]Can I get a "Hell, no？！"\n[00:31.200]Cause we're gonna go all night\n[00:33.090]Till we see the sunlight, alright\n[00:35.570]So la da di da di\n[00:37.330]We like to party\n[00:38.870]Dancing you and me\n[00:40.370]Doing whatever we want\n[00:44.280]And this is our house  And this is our rules\n[00:46.880]And we can't stop\n[00:49.870]And we won't stop\n[00:53.130]Can't you see it's we who own the night?\n[00:56.020]Can't you see it's we who about 'that' life?\n[00:58.900]And we can't stop\n[01:01.786]And we won't stop\n[01:05.218]We run things, things don't run we\n[01:08.156]Don't take nothing from nobody\n[01:11.016]Yeah, yeah\n[01:24.590]To my homegirls just tryin' to live it up, shaking it the like they can't get enough....\n[01:30.468]Remember only god can judge us.\n[01:32.860]Forget the haters,cause somebody loves ya.\n[01:36.560]Memories made 'til the nights through.\n[01:39.518]Surrounded by the ones who love you.\n[01:42.938]We all so turned up here, getting turned up...yeah!!\n[01:47.649]So La, da，di，da，di\n[01:49.319]We like to party.\n[01:50.968]Dancing you and me, doing whatever we want...\n[01:55.920]And, this is our house. And, this is our rules.\n[01:58.908]And we can't stop.\n[02:01.757]And we won't stop.\n[02:05.200]Can't you see it's we who own the night?\n[02:07.980]Can't you see it's we who about "that life?"\n[02:10.877]And we can't stop\n[02:13.687]And we won't stop\n[02:17.116]We run things. Things don't run we.\n[02:20.076]Don't take nothing' from nobody\n[02:23.007]Yeah! Yeah!\n[02:24.426]It's our party. We can do what we want to\n[02:27.198]It's our house. We can LOVE who we want to!\n[02:30.146]It's our song. We can sing if we want to.\n[02:33.116]It's my mouth. I can say what I want to!\n[02:36.138]ohhhh.. ohhhh ohhhh ohhhh\n[02:46.948]And we can't stop.\n[02:49.738]And we won't stop.\n[02:53.116]Can't you see it's we who own the night?\n[02:55.827]Can't you see it’s we who about "that life?"\n[02:58.638]And we can't stop\n[03:01.676]And we won't stop\n[03:04.997]We run things. Things don't run we.\n[03:07.807]Don't take nothing from nobody\n[03:10.978]Yeah! Yeah!\n[03:12.768]It's our party. We can do what we want to\n[03:15.097]It's our house. We can love who we want to\n[03:17.937]Can't you see it's we who own the night?\n[03:19.988]Can't you see it we who about "that life?"\n[03:24.076]It's our song. We can sing if we want to.\n[03:26.948]It's my mouth. I can say what I want to!\n[03:29.537]We run things. Things don't run we\n[03:33.396]Cause we can't stop...\n`
    },
    {
     name: '품（hug）',
     author: 'Bom町',
     url: 'https://music.163.com/song/media/outer/url?id=1455201494.mp3',
     img: 'http://p1.music.126.net/uyXN62vBsyfU-IWCBsUnPA==/109951165059797037.jpg?param=130y130',
     lrc: `[00:00.00] 作词 : 安智英\n[00:01.00] 作曲 : 安智英\n[00:08.45]기분 좋은 날은 늘 그렇게 딱 맞아들어\n[00:12.96]하고 싶은 것도 먹고 싶은 것도\n[00:15.63]애매한 게 없지\n[00:17.47]널 만나러 가는 길도 온종일 설레서 난\n[00:22.28]보고 싶은 것도 느끼고 싶은 것도\n[00:24.91]애매한 게 없지\n[00:26.68]음음 난 좋아 너의 모든 게 말이야\n[00:31.33]아니 아니 나 좋아 그래 거기서 볼게 yeah\n[00:36.93]네가 온다 걸어온다\n[00:44.57]기분 좋은 바람이 후 하고 불어오면\n[00:49.65]내 마음도 후 네가 보고 싶어\n[00:54.04]네게로 달려갈래\n[00:56.00]포근하고 좋은 너의 그 품으로\n[01:12.19]너와 다툰 뒤엔 늘 이렇게 편지를 적어\n[01:17.03]사랑한단 말도 보고 싶단 말도\n[01:19.94]모두 담아 넣지\n[01:21.51]널 만나러 가는 길에 몇 번씩 곱씹어 나\n[01:26.36]하고 싶은 말도 널 생각하는 맘도\n[01:28.89]전부 다 전할게\n[01:30.68]음음 난 좋아 너의 모든 게 말이야\n[01:35.17]아니 아니 나 좋아 그래 너에게 갈게 yeah\n[01:42.00]기분 좋은 바람이 후 하고 불어오면\n[01:46.60]내 마음도 후 네가 보고 싶어\n[01:51.24]네게로 달려갈래\n[01:53.53]포근하고 좋은 너의 그 품으로\n[02:00.77]널 꼭 안고 있으면\n[02:04.77]따뜻하고 참 좋은 것 같아\n[02:09.20]눈부신 햇살 사이로\n[02:14.00]스르르 나 잠들 것 같아\n[02:17.02]기분 좋은 바람이\n[02:24.27]내 뺨을 스치고\n[02:27.71]널 보는 내 맘이\n[02:32.91]네 맘을 닮아 빛나죠\n[02:36.69]널 향한 내 맘이 후 하고 불어오면\n[02:41.46]네 마음도 후 내게 가까워져\n[02:46.03]두 팔을 벌려 갈게\n[02:48.28]포근하고 좋은 너의 그 품으로\n`
    },
    // {
    //  name: 'for ya',
    //  author: '蒋小呢',
    //  url: 'https://music.163.com/song/media/outer/url?id=1497588709.mp3',
    //  img: 'https://p2.music.126.net/GI1Ex39x73zBT-1r7_o-sQ==/109951165494781109.jpg?param=130y130',
    //  lrc: `[00:00.000] 作词 : 小卫\n[00:01.000] 作曲 : 小卫\n[00:02.000] 编曲 : G23\n[00:03.000] 制作人 : 欧几\n[00:04.000] 混音 : 裴济逸\n[00:15.320]监制：你的大表哥曲甲\n[00:20.320]所有美好全部come for ya\n[00:22.990]我的爱也全部come for ya\n[00:25.540]Baby 这是我给你的礼物\n[00:28.150]只想把你藏在我心底\n[00:30.960]所有美好全部come for ya\n[00:33.400]我的爱也全部come for ya\n[00:36.180]Baby 这是我给你的礼物\n[00:38.760]只想把你藏在我心底\n[00:42.250]One\n[00:42.870]About stranger lover\n[00:44.540]第一次见面的时候我马上心动了\n[00:46.970]Oh girl\n[00:48.350]你迷人的发尾\n[00:49.780]记得亲你的时候你害羞往后退\n[00:52.460]我天天都想念着圆圆的你\n[00:54.990]你淡淡的发香是迷人的迷\n[00:57.860]you know 不愿意失去你\n[01:00.439]人群再 熙攘我也可以瞬间抓住你\n[01:03.738]亲爱的 what is wrong\n[01:06.200]告诉我 who  you love\n[01:08.867]亲爱的 what is wrong\n[01:11.459]告诉我 who  you love\n[01:14.027]喜欢你是我 的秘密\n[01:16.268]深度就像在海底十万米\n[01:19.209]我欣赏日出和日落的静谧\n[01:21.718]爱着天空也深爱着你\n[01:23.878]所有美好全部come for ya\n[01:26.158]我的爱也全部come for ya\n[01:28.677]Baby 这是我给你的礼物\n[01:31.369]只想把你藏在我心底\n[01:34.080]所有美好全部come for ya\n[01:36.628]我的爱也全部come for ya\n[01:39.399]Baby 这是我给你的礼物\n[01:42.169]只想把你藏在我心底\n[01:45.568]亲爱的 what is wrong\n[01:48.390]告诉我 who  you love\n[01:50.980]亲爱的 what is wrong\n[01:53.519]告诉我 who  you love\n[01:56.238]喜欢你是我 的秘密\n[01:58.590]深度就像在海底十万米\n[02:01.209]我欣赏日出和日落的静谧\n[02:03.786]爱着天空也深爱着你\n[02:05.849]所有美好全部come for ya\n[02:08.060]我的爱也全部come for ya\n[02:10.596]Baby 这是我给你的礼物\n[02:13.247]只想把你藏在我心底\n[02:15.985]所有美好全部come for ya\n[02:18.474]我的爱也全部come for ya\n[02:21.247]Baby 这是我给你的礼物\n[02:23.395]只想把你藏在我心底\n[02:25.846]监制：姚政\n[02:26.846]企划：刘畅\n[02:27.846]统筹：丁柏昕\n[02:28.846]推广：徐思灵/黄紫嫣\n[02:29.846]网易音乐人x飓风工作室 联合出品\n`
    // },
    {
     name: 'Legends Never Die',
     author: 'Against the Current',
     url: 'https://music.163.com/song/media/outer/url?id=506196018.mp3',
     img: 'http://p2.music.126.net/2aTrg-Zz72Ms6ySsjPcKCg==/109951163918904060.jpg?param=130y130',
     lrc: `[00:00.000] 作词 : Alex Seaver\n[00:01.000] 作曲 : 拳头游戏、Alex Seaver of Mako、Justin Tranter、Oliver\n[00:12.390]Legends never die\n[00:16.270]When the world is calling you\n[00:19.420]Can you hear them screaming out your name?\n[00:25.920]Legends never die\n[00:29.820]They become a part of you\n[00:33.160]Every time you bleed for reaching greatness\n[00:39.310]Relentless you survive\n[00:43.820]They never lose hope when everything's cold and the fighting's near\n[00:50.320]It's deep in their bones, they'll run into smoke when the fire is fierce\n[00:57.110]Oh,  pick yourself up, 'cause\n[00:59.910]Legends never die\n[01:03.908]When the world is calling you\n[01:07.719]Can you hear them screaming out your name?\n[01:14.009]Legends never die\n[01:17.920]They become a part of you\n[01:21.409]Every time you bleed for reaching greatness\n[01:27.709]Legends never die\n[01:31.500]They're written down in eternity\n[01:34.989]But you'll never see the price it costs the scars collected all their lives\n[01:45.340]When everything's lost, they pick up their hearts and avenge defeat\n[01:52.269]Before it all starts, they suffer through harm just to touch a dream\n[01:59.009]Oh, pick yourself up 'cause\n[02:01.959]Legends never die\n[02:05.799]When the world is calling you\n[02:09.188]Can you hear them screaming out your name?\n[02:15.539]Legends never die\n[02:19.389]They become a part of you\n[02:22.839]Every time you bleed for reaching greatness\n[02:29.179]Legends never die\n[02:35.669]When the world is calling out your name\n[02:42.910]Begging you to fight\n[02:50.960]Pick yourself up once more\n[02:54.399]pick yourself up, 'cause\n[02:57.099]Legends never die\n[03:00.838]When the world is calling you\n[03:04.338]Can you hear them screaming out your name?\n[03:10.278]Legends never die\n[03:14.229]They become a part of you\n[03:17.979]Every time you bleed for reaching greatness\n[03:24.369]Legends never die\n`
    },
   ];
   /**
 * 
 * musicList 歌曲列表	 Array  
  interface musicItem {
    name: string,  // 歌曲名称
    author: string,  // 歌手名
    url: string,  // 歌曲文件地址
    img: string,  // 歌曲封面图
    lrc: string   // lrc歌词字符串
  };
 * index 默认播放索引	         Number   0 ~ musicList.length - 1
 * volume 默认音量大小		     Number   0 ~ 100
 * lyrics 歌词是否默认开启      Boolean   
 * playOrder 歌曲默认播放顺序   String   'along' (顺序播放)、 'random' (随机播放)、'loop' (单曲循环)
 * playList 显示播放列表默认是否展开  Boolean
 */

// http.get('/song/lyric?os=pc&id=1455201494&lv=-1&kv=-1&tv=-1').then((res)=>{
//  http://music.163.com/api/song/lyric?os=pc&id=29759733&lv=-1&kv=-1&tv=-1

//   console.log(res.lrc.lyric)

// })
export  const menuOptions = [
    {
      label: () => h(
          RouterLink,
        {
          to: {
            name: "home",
          }
        },
         { default: () =>  "首页"}
        
      ),
      key: "hear-the-wind-sing",
      icon: renderImg(homeSvg)
    },
    {
      label: "爱好",
      key: "pinball-1973",
      icon: renderImg(hobbiesSvg),
      children: [
        {
          label: "鼠",
          key: "rat"
        }
      ]
    },
    {
      label: "旅游",
      key: "a-wild-sheep-chase",
      icon: renderImg(traveSvg)
    },
    {
      label: () => h(
        RouterLink,
      {
        to: {
          name: "car",
        }
      },
       { default: () =>  "鹏飞的车"}
      
    ),
      key: "dance-dance-dance",
      icon: renderImg(unknownSvg),

    },
    // {
    //   label: () => h(
    //        'span',
    //     {
    //       onClick: showDialog
    //     },
    //     { default: () =>  "音乐"}
       
    //   ),
    //   key: "music",
    //   icon: renderImg(music),
    // },
  ];

  function renderImg(img) {
    return () =>  h('img', {
                  src: img,
                  width: '20',
                  height: '20',
              })
  }
