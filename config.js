import { BsFacebook, BsYoutube } from "react-icons/bs";
import { CgCrown } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { MdAddModerator } from "react-icons/md";
import { SiProbot } from "react-icons/si";
import { TbMessage2Code } from "react-icons/tb";
const config = {
  name: "PandaBot",
  //BotName
  inviteLink:
    "https://discord.com/api/oauth2/authorize?client_id=1057269627446632498&permissions=8&scope=applications.commands%20bot",
  //BotInvite Link
  Features: [
    {
      name: "AI Chat Bot",
      description:
        "Bot has an answer to most of your questions.",
      logo: <MdAddModerator className="h-10 w-10" />,
    },
    {
      name: "Language",
      description:
        "He can speak English and Chinese.",
      logo: <SiProbot className="h-10 w-10" />,
    },
    {
      name: "Auto reply",
      description:
        "He can respond and talk to you on various topics .",
      logo: <TbMessage2Code className="h-10 w-10" />,
    },
    {
      name: "p!set-chat",
      description:
        "To set bot chat channel",
      logo: <CgCrown className="h-10 w-10" />,
    },
    // You can added more features if need add
  ],
  //Bot Features
  serverCount: 300, //-  - Your
  memberCount: 700, //--   - Bot
  executedCommand: 27000, //--  - Stats
  availableCommand: 400, //---   - Here
  //Do not change if you don't know about them
  faceBookLogo: (
    <BsFacebook className="h-10 w-10 text-[#4267B2] hover:scale-125 easeIn cursor-pointer" />
  ),
  discordLogo: (
    <FaDiscord className="h-10 w-10 text-[#738adb] hover:scale-125 easeIn cursor-pointer" />
  ),
  youTubeLogo: (
    <BsYoutube className="h-10 w-10 text-[#FF0000] hover:scale-125 easeIn cursor-pointer" />
  ),
  //----------------------------------------------------------------
  // Your social handle links
  githubLink: "https://github.com/mohitmimani",
  twitterLink: "https://twitter.com/xUnDarkArTz",
  mediumLink: "https://medium.com/",
  facebookLink: "https://facebook.com",
  discordLink: "https://discord.gg/6XuaaJxTTM",
  youtubeLink: "https://www.youtube.com/channel/UCWJea2NjnWMrskAkcRqqOhw",
};

export default config;
