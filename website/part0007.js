var spans = document.querySelectorAll("span");
var textToUpdate = document.getElementById("blownupText");
var translation = document.getElementById("translationText");
var pinyin = document.getElementById("pinyinText");

var dic = {
"审议":
{"simp":"审议",
"trad":"審議",
"pinyin":"shěn yì",
"def": ["deliberation","pondering","due consideration"]
},
"处在":
{"simp":"处在",
"trad":"處在",
"pinyin":"chǔ zài",
"def": ["to be situated at","to find oneself at"]
},
"召见":
{"simp":"召见",
"trad":"召見",
"pinyin":"zhào jiàn",
"def": ["call in (one's subordinates)","summon (an envoy of a foreign country) to an interview"]
},
"设法":
{"simp":"设法",
"trad":"設法",
"pinyin":"shè fǎ",
"def": ["to try","to make an attempt","to think of a way (to accomplish sth)"]
},
"良心":
{"simp":"良心",
"trad":"良心",
"pinyin":"liáng xīn",
"def": ["conscience"]
},
"广场":
{"simp":"广场",
"trad":"廣場",
"pinyin":"guǎng chǎng",
"def": ["public square","plaza"]
},
"首都":
{"simp":"首都",
"trad":"首都",
"pinyin":"shǒu dū",
"def": ["capital (city)","CL:個|个[ge4]"]
},
"甄别":
{"simp":"甄别",
"trad":"甄別",
"pinyin":"zhēn bié",
"def": ["to screen","to discriminate","to reexamine a case","screening (of applicants etc)"]
},
"严格":
{"simp":"严格",
"trad":"嚴格",
"pinyin":"yán gé",
"def": ["strict","stringent","tight","rigorous"]
},
"恼怒":
{"simp":"恼怒",
"trad":"惱怒",
"pinyin":"nǎo nù",
"def": ["resentful","angry","to enrage sb"]
},
"唤":
{"simp":"唤",
"trad":"喚",
"pinyin":"huàn",
"def": ["to call"]
},
"例行公事":
{"simp":"例行公事",
"trad":"例行公事",
"pinyin":"lì xíng gōng shì",
"def": ["routine business","usual practice","mere formality"]
},
"在此":
{"simp":"在此",
"trad":"在此",
"pinyin":"zài cǐ",
"def": ["hereto","here"]
},
"电视":
{"simp":"电视",
"trad":"電視",
"pinyin":"diàn shì",
"def": ["television","TV","CL:臺|台[tai2],個|个[ge4]"]
},
"举动":
{"simp":"举动",
"trad":"舉動",
"pinyin":"jǔ dòng",
"def": ["act","action","activity","move","movement"]
},
"白活":
{"simp":"白活",
"trad":"白活",
"pinyin":"bái huó",
"def": ["to waste one's life; to fail to make the most of one's life"]
},
"责任人":
{"simp":"责任人",
"trad":"責任人",
"pinyin":"zé rèn rén",
"def": ["responsible person","coordinator"]
},
"爱上":
{"simp":"爱上",
"trad":"愛上",
"pinyin":"ài shàng",
"def": ["to fall in love with","to be in love with"]
},
"底层":
{"simp":"底层",
"trad":"底層",
"pinyin":"dǐ céng",
"def": ["ground or first floor","bottom (of a pile)","lowest rung (of society)"]
},
"有希望":
{"simp":"有希望",
"trad":"有希望",
"pinyin":"yǒu xī wàng",
"def": ["hopeful","promising","prospective"]
},
"闲适":
{"simp":"闲适",
"trad":"閒適",
"pinyin":"xián shì",
"def": ["leisurely and comfortable","relaxed"]
},
"娇弱":
{"simp":"娇弱",
"trad":"嬌弱",
"pinyin":"jiāo ruò",
"def": ["delicate"]
},
"温室":
{"simp":"温室",
"trad":"溫室",
"pinyin":"wēn shì",
"def": ["greenhouse"]
},
"乱世":
{"simp":"乱世",
"trad":"亂世",
"pinyin":"luàn shì",
"def": ["the world in chaos","troubled times","(in Buddhism) the mortal world"]
},
"短命":
{"simp":"短命",
"trad":"短命",
"pinyin":"duǎn mìng",
"def": ["to die young","short-lived"]
},
"阅":
{"simp":"阅",
"trad":"閱",
"pinyin":"yuè",
"def": ["to inspect","to review","to read","to peruse","to go through","to experience"]
},
"封存":
{"simp":"封存",
"trad":"封存",
"pinyin":"fēng cún",
"def": ["to sequester","to seal up (for safe keeping)","to freeze (an account)","to mothball"]
},
"娇生惯养":
{"simp":"娇生惯养",
"trad":"嬌生慣養",
"pinyin":"jiāo shēng guàn yǎng",
"def": ["pampered and spoiled since childhood"]
},
"民主":
{"simp":"民主",
"trad":"民主",
"pinyin":"mín zhǔ",
"def": ["democracy"]
},
"文化遗产":
{"simp":"文化遗产",
"trad":"文化遺產",
"pinyin":"wén huà yí chǎn",
"def": ["cultural heritage"]
},
"倾诉":
{"simp":"倾诉",
"trad":"傾訴",
"pinyin":"qīng sù",
"def": ["to say everything (that is on one's mind)"]
},
"对美":
{"simp":"对美",
"trad":"對美",
"pinyin":"duì Měi",
"def": ["(policy etc) towards America"]
},
"文学":
{"simp":"文学",
"trad":"文學",
"pinyin":"wén xué",
"def": ["literature","CL:種|种[zhong3]"]
},
"精神生活":
{"simp":"精神生活",
"trad":"精神生活",
"pinyin":"jīng shén shēng huó",
"def": ["spiritual or moral life"]
},
"有罪":
{"simp":"有罪",
"trad":"有罪",
"pinyin":"yǒu zuì",
"def": ["guilty"]
},
"错":
{"simp":"错",
"trad":"錯",
"pinyin":"cuò",
"def": ["mistake","wrong","bad","interlocking","complex","to grind","to polish","to alternate","to stagger","to miss","to let slip","to evade","to inlay with gold or silver"]
},
"战":
{"simp":"战",
"trad":"戰",
"pinyin":"zhàn",
"def": ["to fight","fight","war","battle"]
},
"为生":
{"simp":"为生",
"trad":"為生",
"pinyin":"wéi shēng",
"def": ["to make a living"]
},
"厌倦":
{"simp":"厌倦",
"trad":"厭倦",
"pinyin":"yàn juàn",
"def": ["to be weary of","to be fed up with","tedious"]
},
"责任感":
{"simp":"责任感",
"trad":"責任感",
"pinyin":"zé rèn gǎn",
"def": ["sense of responsibility"]
},
"有一点":
{"simp":"有一点",
"trad":"有一點",
"pinyin":"yǒu yī diǎn",
"def": ["a little","somewhat"]
},
"生育":
{"simp":"生育",
"trad":"生育",
"pinyin":"shēng yù",
"def": ["to bear","to give birth","to grow","to rear","to bring up (children)","fertility"]
},
"禁止":
{"simp":"禁止",
"trad":"禁止",
"pinyin":"jìn zhǐ",
"def": ["to prohibit","to forbid","to ban"]
},
"共存":
{"simp":"共存",
"trad":"共存",
"pinyin":"gòng cún",
"def": ["to coexist"]
},
"分享":
{"simp":"分享",
"trad":"分享",
"pinyin":"fēn xiǎng",
"def": ["to share (let others have some of sth good)"]
},
"止境":
{"simp":"止境",
"trad":"止境",
"pinyin":"zhǐ jìng",
"def": ["limit","boundary","end"]
},
"欲":
{"simp":"欲",
"trad":"欲",
"pinyin":"yù",
"def": ["to wish for","to desire","variant of 慾|欲[yu4]"]
},
"体重":
{"simp":"体重",
"trad":"體重",
"pinyin":"tǐ zhòng",
"def": ["body weight"]
},
"下车":
{"simp":"下车",
"trad":"下車",
"pinyin":"xià chē",
"def": ["to get off or out of (a bus, train, car etc)"]
},
"食品":
{"simp":"食品",
"trad":"食品",
"pinyin":"shí pǐn",
"def": ["foodstuff","food","provisions","CL:種|种[zhong3]"]
},
"再度":
{"simp":"再度",
"trad":"再度",
"pinyin":"zài dù",
"def": ["once more","once again","one more time"]
},
"吃掉":
{"simp":"吃掉",
"trad":"吃掉",
"pinyin":"chī diào",
"def": ["to eat up","to consume"]
},
"车把":
{"simp":"车把",
"trad":"車把",
"pinyin":"chē bǎ",
"def": ["handlebar (bicycle etc)","shaft (rickshaw etc)"]
},
"巡回":
{"simp":"巡回",
"trad":"巡迴",
"pinyin":"xún huí",
"def": ["to go around","to roam","to tour"]
},
"允许":
{"simp":"允许",
"trad":"允許",
"pinyin":"yǔn xǔ",
"def": ["to permit","to allow"]
},
"虚度":
{"simp":"虚度",
"trad":"虛度",
"pinyin":"xū dù",
"def": ["to fritter away (one's time)"]
},
"百余":
{"simp":"百余",
"trad":"百餘",
"pinyin":"bǎi yú",
"def": ["a hundred or more"]
},
"不利":
{"simp":"不利",
"trad":"不利",
"pinyin":"bù lì",
"def": ["unfavorable","disadvantageous","harmful","detrimental"]
},
"消除":
{"simp":"消除",
"trad":"消除",
"pinyin":"xiāo chú",
"def": ["to eliminate","to remove"]
},
"美感":
{"simp":"美感",
"trad":"美感",
"pinyin":"měi gǎn",
"def": ["sense of beauty","aesthetic perception"]
},
"悲伤":
{"simp":"悲伤",
"trad":"悲傷",
"pinyin":"bēi shāng",
"def": ["sad","sorrowful"]
},
"情绪":
{"simp":"情绪",
"trad":"情緒",
"pinyin":"qíng xù",
"def": ["mood","state of mind","moodiness","CL:種|种[zhong3]"]
},
"以上":
{"simp":"以上",
"trad":"以上",
"pinyin":"yǐ shàng",
"def": ["that level or higher","that amount or more","the above-mentioned","(used to indicate that one has completed one's remarks) That is all."]
},
"愤恨":
{"simp":"愤恨",
"trad":"憤恨",
"pinyin":"fèn hèn",
"def": ["to hate","hatred","to resent","embittered"]
},
"狂喜":
{"simp":"狂喜",
"trad":"狂喜",
"pinyin":"kuáng xǐ",
"def": ["ecstasy","rapt"]
},
"在地下":
{"simp":"在地下",
"trad":"在地下",
"pinyin":"zài dì xià",
"def": ["underground"]
},
"官邸":
{"simp":"官邸",
"trad":"官邸",
"pinyin":"guān dǐ",
"def": ["official residence"]
},
"译成":
{"simp":"译成",
"trad":"譯成",
"pinyin":"yì chéng",
"def": ["to translate into (Chinese, English etc)"]
},
"编辑":
{"simp":"编辑",
"trad":"編輯",
"pinyin":"biān jí",
"def": ["to edit","to compile","editor","compiler"]
},
"屏":
{"simp":"屏",
"trad":"屏",
"pinyin":"píng",
"def": ["(standing) screen"]
},
"扑":
{"simp":"扑",
"trad":"撲",
"pinyin":"pū",
"def": ["to throw oneself at","to pounce on","to devote one's energies","to flap","to flutter","to dab","to pat","to bend over"]
},
"极大":
{"simp":"极大",
"trad":"極大",
"pinyin":"jí dà",
"def": ["maximum","enormous"]
},
"显形":
{"simp":"显形",
"trad":"顯形",
"pinyin":"xiǎn xíng",
"def": ["to show one's true nature (derog.)","to betray oneself"]
},
"离子":
{"simp":"离子",
"trad":"離子",
"pinyin":"lí zǐ",
"def": ["ion"]
},
"引诱":
{"simp":"引诱",
"trad":"引誘",
"pinyin":"yǐn yòu",
"def": ["to coerce (sb into doing sth bad)","to lure (into a trap)","to seduce"]
},
"指令":
{"simp":"指令",
"trad":"指令",
"pinyin":"zhǐ lìng",
"def": ["order","command","instruction"]
},
"主动":
{"simp":"主动",
"trad":"主動",
"pinyin":"zhǔ dòng",
"def": ["to take the initiative","to do sth of one's own accord","spontaneous","active","opposite: passive 被動|被动[bei4 dong4]","drive (of gears and shafts etc)"]
},
"延迟":
{"simp":"延迟",
"trad":"延遲",
"pinyin":"yán chí",
"def": ["to delay","to postpone","to keep putting sth off","to procrastinate","(computing) to lag"]
},
"汇":
{"simp":"汇",
"trad":"滙",
"pinyin":"huì",
"def": ["variant of 匯|汇[hui4]"]
},
"近距离":
{"simp":"近距离",
"trad":"近距離",
"pinyin":"jìn jù lí",
"def": ["close range"]
},
"基线":
{"simp":"基线",
"trad":"基線",
"pinyin":"jī xiàn",
"def": ["baseline (surveying, budgeting, typography etc)","(math.) base (of a triangle)"]
},
"测量":
{"simp":"测量",
"trad":"測量",
"pinyin":"cè liáng",
"def": ["survey","to measure","to gauge","to determine"]
},
"远距离":
{"simp":"远距离",
"trad":"遠距離",
"pinyin":"yuǎn jù lí",
"def": ["long-distance"]
},
"无尽":
{"simp":"无尽",
"trad":"無盡",
"pinyin":"wú jìn",
"def": ["endless","inexhaustible"]
},
"食物":
{"simp":"食物",
"trad":"食物",
"pinyin":"shí wù",
"def": ["food","CL:種|种[zhong3]"]
},
"将至":
{"simp":"将至",
"trad":"將至",
"pinyin":"jiāng zhì",
"def": ["to be about to arrive","to be around the corner"]
},
"哪个":
{"simp":"哪个",
"trad":"哪個",
"pinyin":"nǎ ge",
"def": ["which","who"]
},
"年纪":
{"simp":"年纪",
"trad":"年紀",
"pinyin":"nián jì",
"def": ["age","CL:把[ba3],個|个[ge4]"]
},
"幼小":
{"simp":"幼小",
"trad":"幼小",
"pinyin":"yòu xiǎo",
"def": ["young","immature"]
},
"分裂":
{"simp":"分裂",
"trad":"分裂",
"pinyin":"fēn liè",
"def": ["to split up","to divide","to break up","fission","schism"]
},
"更新":
{"simp":"更新",
"trad":"更新",
"pinyin":"gēng xīn",
"def": ["to replace the old with new","to renew","to renovate","to upgrade","to update","to regenerate"]
},
"细胞":
{"simp":"细胞",
"trad":"細胞",
"pinyin":"xì bāo",
"def": ["cell (biology)"]
},
"重新开始":
{"simp":"重新开始",
"trad":"重新開始",
"pinyin":"chóng xīn kāi shǐ",
"def": ["to resume; to restart; to start afresh"]
},
"能源":
{"simp":"能源",
"trad":"能源",
"pinyin":"néng yuán",
"def": ["energy","power source","CL:個|个[ge4]"]
},
"生化":
{"simp":"生化",
"trad":"生化",
"pinyin":"shēng huà",
"def": ["biochemistry"]
},
"三分之一":
{"simp":"三分之一",
"trad":"三分之一",
"pinyin":"sān fēn zhī yī",
"def": ["one third"]
},
"质":
{"simp":"质",
"trad":"質",
"pinyin":"zhì",
"def": ["character","nature","quality","plain","to pawn","pledge","hostage","to question","Taiwan pr. [zhi2]"]
},
"融为一体":
{"simp":"融为一体",
"trad":"融為一體",
"pinyin":"róng wéi yī tǐ",
"def": ["to fuse together (idiom)","hypostatic union (religion)"]
},
"程式":
{"simp":"程式",
"trad":"程式",
"pinyin":"chéng shì",
"def": ["form","pattern","formula","(Tw) (computing) program"]
},
"单一":
{"simp":"单一",
"trad":"單一",
"pinyin":"dān yī",
"def": ["single","only","sole"]
},
"闲人":
{"simp":"闲人",
"trad":"閒人",
"pinyin":"xián rén",
"def": ["idle person","idler","unconcerned person"]
},
"炮火":
{"simp":"炮火",
"trad":"炮火",
"pinyin":"pào huǒ",
"def": ["artillery barrage","gunfire"]
},
"入睡":
{"simp":"入睡",
"trad":"入睡",
"pinyin":"rù shuì",
"def": ["to fall asleep"]
},
"功能":
{"simp":"功能",
"trad":"功能",
"pinyin":"gōng néng",
"def": ["function","capability"]
},
"进化":
{"simp":"进化",
"trad":"進化",
"pinyin":"jìn huà",
"def": ["evolution","CL:個|个[ge4]"]
},
"严酷":
{"simp":"严酷",
"trad":"嚴酷",
"pinyin":"yán kù",
"def": ["bitter","harsh","grim","ruthless","severe","cut-throat (competition)"]
},
"睡眠":
{"simp":"睡眠",
"trad":"睡眠",
"pinyin":"shuì mián",
"def": ["sleep","to sleep","(computing) to enter sleep mode"]
},
"误解":
{"simp":"误解",
"trad":"誤解",
"pinyin":"wù jiě",
"def": ["to misunderstand","to misread","misunderstanding"]
},
"抚摸":
{"simp":"抚摸",
"trad":"撫摸",
"pinyin":"fǔ mō",
"def": ["to gently caress and stroke","to pet","to fondle"]
},
"微风":
{"simp":"微风",
"trad":"微風",
"pinyin":"wēi fēng",
"def": ["breeze","light wind"]
},
"和煦":
{"simp":"和煦",
"trad":"和煦",
"pinyin":"hé xù",
"def": ["warm","genial"]
},
"飞翔":
{"simp":"飞翔",
"trad":"飛翔",
"pinyin":"fēi xiáng",
"def": ["to circle in the air","to soar"]
},
"田野":
{"simp":"田野",
"trad":"田野",
"pinyin":"tián yě",
"def": ["field","open land","CL:片[pian4]"]
},
"翠绿":
{"simp":"翠绿",
"trad":"翠綠",
"pinyin":"cuì lù:",
"def": ["greenish-blue","emerald green"]
},
"永不":
{"simp":"永不",
"trad":"永不",
"pinyin":"yǒng bù",
"def": ["never","will never"]
},
"亿万":
{"simp":"亿万",
"trad":"億萬",
"pinyin":"yì wàn",
"def": ["millions and millions"]
},
"各处":
{"simp":"各处",
"trad":"各處",
"pinyin":"gè chù",
"def": ["every place"]
},
"天堂":
{"simp":"天堂",
"trad":"天堂",
"pinyin":"tiān táng",
"def": ["paradise","heaven"]
},
"风调雨顺":
{"simp":"风调雨顺",
"trad":"風調雨順",
"pinyin":"fēng tiáo yǔ shùn",
"def": ["favorable weather (idiom); good weather for crops"]
},
"尊重":
{"simp":"尊重",
"trad":"尊重",
"pinyin":"zūn zhòng",
"def": ["to esteem","to respect","to honor","to value","eminent","serious","proper"]
},
"价值":
{"simp":"价值",
"trad":"價值",
"pinyin":"jià zhí",
"def": ["value","worth","fig. values (ethical, cultural etc)","CL:個|个[ge4]"]
},
"致力":
{"simp":"致力",
"trad":"致力",
"pinyin":"zhì lì",
"def": ["to work for","to devote one's efforts to"]
},
"各种":
{"simp":"各种",
"trad":"各種",
"pinyin":"gè zhǒng",
"def": ["every kind of","all kinds of","various kinds"]
},
"贫困":
{"simp":"贫困",
"trad":"貧困",
"pinyin":"pín kùn",
"def": ["impoverished","poverty"]
},
"不均":
{"simp":"不均",
"trad":"不均",
"pinyin":"bù jūn",
"def": ["uneven","distributed unevenly"]
},
"财富":
{"simp":"财富",
"trad":"財富",
"pinyin":"cái fù",
"def": ["wealth","riches"]
},
"生产力":
{"simp":"生产力",
"trad":"生產力",
"pinyin":"shēng chǎn lì",
"def": ["production capability","productive force","productivity"]
},
"涌现":
{"simp":"涌现",
"trad":"湧現",
"pinyin":"yǒng xiàn",
"def": ["to emerge in large numbers","to spring up","to emerge prominently"]
},
"劳动":
{"simp":"劳动",
"trad":"勞動",
"pinyin":"láo dòng",
"def": ["work","toil","physical labor","CL:次[ci4]"]
},
"丰富多彩":
{"simp":"丰富多彩",
"trad":"豐富多彩",
"pinyin":"fēng fù duō cǎi",
"def": ["richly colorful"]
},
"祝愿":
{"simp":"祝愿",
"trad":"祝願",
"pinyin":"zhù yuàn",
"def": ["to wish"]
},
"蓝色":
{"simp":"蓝色",
"trad":"藍色",
"pinyin":"lán sè",
"def": ["blue (color)"]
},
"失误":
{"simp":"失误",
"trad":"失誤",
"pinyin":"shī wù",
"def": ["lapse","mistake","to make a mistake","fault","service fault (in volleyball, tennis etc)"]
},
"冰冷":
{"simp":"冰冷",
"trad":"冰冷",
"pinyin":"bīng lěng",
"def": ["ice-cold"]
},
"星光":
{"simp":"星光",
"trad":"星光",
"pinyin":"xīng guāng",
"def": ["starlight"]
},
"植物":
{"simp":"植物",
"trad":"植物",
"pinyin":"zhí wù",
"def": ["plant","vegetation","CL:種|种[zhong3]"]
},
"冬眠":
{"simp":"冬眠",
"trad":"冬眠",
"pinyin":"dōng mián",
"def": ["to hibernate","hibernation"]
},
"窗子":
{"simp":"窗子",
"trad":"窗子",
"pinyin":"chuāng zi",
"def": ["window"]
},
"快乐":
{"simp":"快乐",
"trad":"快樂",
"pinyin":"kuài lè",
"def": ["happy","merry"]
},
"恒":
{"simp":"恒",
"trad":"恒",
"pinyin":"héng",
"def": ["variant of 恆|恒[heng2]"]
},
"享受":
{"simp":"享受",
"trad":"享受",
"pinyin":"xiǎng shòu",
"def": ["to enjoy","to live it up","pleasure","CL:種|种[zhong3]"]
},
"脱水":
{"simp":"脱水",
"trad":"脫水",
"pinyin":"tuō shuǐ",
"def": ["to dry out","to extract water","dehydration","dehydrated","desiccation"]
},
"元":
{"simp":"元",
"trad":"元",
"pinyin":"yuán",
"def": ["currency unit (esp. Chinese yuan)","first","original","primary","fundamental","constituent","part","era (of a reign)","meta- (prefix)","(math.) argument","variable","(Tw) (geology) eon"]
},
"不必":
{"simp":"不必",
"trad":"不必",
"pinyin":"bù bì",
"def": ["need not","does not have to","not necessarily"]
},
"乱纪":
{"simp":"乱纪",
"trad":"亂紀",
"pinyin":"luàn jì",
"def": ["to break the rules","to break discipline"]
},
"供给":
{"simp":"供给",
"trad":"供給",
"pinyin":"gōng jǐ",
"def": ["to furnish","to provide","supply (as in supply and demand)"]
},
"恒温":
{"simp":"恒温",
"trad":"恆溫",
"pinyin":"héng wēn",
"def": ["constant temperature"]
},
"卑微":
{"simp":"卑微",
"trad":"卑微",
"pinyin":"bēi wēi",
"def": ["lowly","humble"]
},
"值守":
{"simp":"值守",
"trad":"值守",
"pinyin":"zhí shǒu",
"def": ["(of a security guard etc) to be on duty, keeping an eye on things","to keep watch"]
},
"进步":
{"simp":"进步",
"trad":"進步",
"pinyin":"jìn bù",
"def": ["progress; improvement","to improve; to progress","CL:個|个[ge4]"]
},
"种族":
{"simp":"种族",
"trad":"種族",
"pinyin":"zhǒng zú",
"def": ["race","ethnicity"]
},
"拉开":
{"simp":"拉开",
"trad":"拉開",
"pinyin":"lā kāi",
"def": ["to pull open","to pull apart","to space out","to increase"]
},
"自然界":
{"simp":"自然界",
"trad":"自然界",
"pinyin":"zì rán jiè",
"def": ["nature","the natural world"]
},
"至此":
{"simp":"至此",
"trad":"至此",
"pinyin":"zhì cǐ",
"def": ["up until now","so far"]
},
"呈现":
{"simp":"呈现",
"trad":"呈現",
"pinyin":"chéng xiàn",
"def": ["to appear","to emerge","to present (a certain appearance)","to demonstrate"]
},
"匪夷所思":
{"simp":"匪夷所思",
"trad":"匪夷所思",
"pinyin":"fěi yí suǒ sī",
"def": ["unimaginable","outrageous","freakish"]
},
"阅读":
{"simp":"阅读",
"trad":"閱讀",
"pinyin":"yuè dú",
"def": ["to read","reading"]
},
"远远超过":
{"simp":"远远超过",
"trad":"遠遠超過",
"pinyin":"yuǎn yuǎn chāo guò",
"def": ["surpassing by far"]
},
"传送":
{"simp":"传送",
"trad":"傳送",
"pinyin":"chuán sòng",
"def": ["to convey","to deliver"]
},
"远程":
{"simp":"远程",
"trad":"遠程",
"pinyin":"yuǎn chéng",
"def": ["remote","long distance","long range"]
},
"一向":
{"simp":"一向",
"trad":"一向",
"pinyin":"yī xiàng",
"def": ["always (previously)","a period of time in the recent past"]
},
"救国":
{"simp":"救国",
"trad":"救國",
"pinyin":"jiù guó",
"def": ["to save the nation"]
},
"深受":
{"simp":"深受",
"trad":"深受",
"pinyin":"shēn shòu",
"def": ["to receive in no small measure"]
},
"推测":
{"simp":"推测",
"trad":"推測",
"pinyin":"tuī cè",
"def": ["speculation","to conjecture","to surmise","to speculate"]
},
"结论":
{"simp":"结论",
"trad":"結論",
"pinyin":"jié lùn",
"def": ["conclusion","verdict","CL:個|个[ge4]","to conclude","to reach a verdict"]
},
"昌明":
{"simp":"昌明",
"trad":"昌明",
"pinyin":"chāng míng",
"def": ["flourishing","thriving"]
},
"跨越":
{"simp":"跨越",
"trad":"跨越",
"pinyin":"kuà yuè",
"def": ["to step across","step over"]
},
"荣幸":
{"simp":"荣幸",
"trad":"榮幸",
"pinyin":"róng xìng",
"def": ["honored (to have the privilege of ...)"]
},
"有限":
{"simp":"有限",
"trad":"有限",
"pinyin":"yǒu xiàn",
"def": ["limited","finite"]
},
"霞":
{"simp":"霞",
"trad":"霞",
"pinyin":"xiá",
"def": ["rose-tinted sky or clouds at sunrise or sunset"]
},
"火红":
{"simp":"火红",
"trad":"火紅",
"pinyin":"huǒ hóng",
"def": ["fiery","blazing"]
},
"走形":
{"simp":"走形",
"trad":"走形",
"pinyin":"zǒu xíng",
"def": ["out of shape","to lose shape","to deform"]
},
"光滑":
{"simp":"光滑",
"trad":"光滑",
"pinyin":"guāng huá",
"def": ["glossy","sleek","smooth"]
},
"深红色":
{"simp":"深红色",
"trad":"深紅色",
"pinyin":"shēn hóng sè",
"def": ["deep red","crimson","scarlet"]
},
"克服":
{"simp":"克服",
"trad":"克服",
"pinyin":"kè fú",
"def": ["(try to) overcome (hardships etc)","to conquer","to put up with","to endure"]
},
"缆索":
{"simp":"缆索",
"trad":"纜索",
"pinyin":"lǎn suǒ",
"def": ["cable","hawser","mooring rope"]
},
"火势":
{"simp":"火势",
"trad":"火勢",
"pinyin":"huǒ shì",
"def": ["intensity of a fire","lively","flourishing"]
},
"剂":
{"simp":"剂",
"trad":"劑",
"pinyin":"jì",
"def": ["dose (medicine)"]
},
"泡沫":
{"simp":"泡沫",
"trad":"泡沫",
"pinyin":"pào mò",
"def": ["foam","(soap) bubble","(economic) bubble"]
},
"工作人员":
{"simp":"工作人员",
"trad":"工作人員",
"pinyin":"gōng zuò rén yuán",
"def": ["staff member"]
},
"灭火":
{"simp":"灭火",
"trad":"滅火",
"pinyin":"miè huǒ",
"def": ["to extinguish a fire","firefighting"]
},
"悬停":
{"simp":"悬停",
"trad":"懸停",
"pinyin":"xuán tíng",
"def": ["to hover (helicopter, computer mouse etc)"]
},
"斑谰":
{"simp":"斑谰",
"trad":"斑讕",
"pinyin":"bān lán",
"def": ["brightly colored","gorgeous","multicolored"]
},
"沿":
{"simp":"沿",
"trad":"沿",
"pinyin":"yán",
"def": ["along","to follow (a line, tradition etc)","to carry on","to trim (a border with braid, tape etc)","border","edge"]
},
"隐蔽":
{"simp":"隐蔽",
"trad":"隱蔽",
"pinyin":"yǐn bì",
"def": ["to conceal","to hide","covert","under cover"]
},
"擦":
{"simp":"擦",
"trad":"擦",
"pinyin":"cā",
"def": ["to wipe","to erase","rubbing (brush stroke in painting)","to clean","to polish"]
},
"倾倒":
{"simp":"倾倒",
"trad":"傾倒",
"pinyin":"qīng dào",
"def": ["to dump","to pour","to empty out"]
},
"绊倒":
{"simp":"绊倒",
"trad":"絆倒",
"pinyin":"bàn dǎo",
"def": ["to trip","to stumble"]
},
"岸上":
{"simp":"岸上",
"trad":"岸上",
"pinyin":"àn shàng",
"def": ["ashore","on the riverbank"]
},
"服务生":
{"simp":"服务生",
"trad":"服務生",
"pinyin":"fú wù shēng",
"def": ["server (at a restaurant)"]
},
"划":
{"simp":"划",
"trad":"劃",
"pinyin":"huà",
"def": ["to delimit","to transfer","to assign","to plan","to draw (a line)","stroke of a Chinese character"]
},
"玻璃":
{"simp":"玻璃",
"trad":"玻璃",
"pinyin":"bō li",
"def": ["glass","CL:張|张[zhang1],塊|块[kuai4]","(slang) male homosexual"]
},
"音":
{"simp":"音",
"trad":"音",
"pinyin":"yīn",
"def": ["sound","noise","note (of musical scale)","tone","news","syllable","reading (phonetic value of a character)"]
},
"尖利":
{"simp":"尖利",
"trad":"尖利",
"pinyin":"jiān lì",
"def": ["sharp","keen","cutting","shrill","piercing"]
},
"磨擦":
{"simp":"磨擦",
"trad":"磨擦",
"pinyin":"mó cā",
"def": ["variant of 摩擦[mo2 ca1]"]
},
"滑动":
{"simp":"滑动",
"trad":"滑動",
"pinyin":"huá dòng",
"def": ["to slide","sliding movement"]
},
"推开":
{"simp":"推开",
"trad":"推開",
"pinyin":"tuī kāi",
"def": ["to push open (a gate etc)","to push away","to reject","to decline"]
},
"错开":
{"simp":"错开",
"trad":"錯開",
"pinyin":"cuò kāi",
"def": ["to stagger (times)"]
},
"薄板":
{"simp":"薄板",
"trad":"薄板",
"pinyin":"báo bǎn",
"def": ["thin plate","sheet","lamina","Taiwan pr. [bo2 ban3]"]
},
"厚度":
{"simp":"厚度",
"trad":"厚度",
"pinyin":"hòu dù",
"def": ["thickness"]
},
"漆黑":
{"simp":"漆黑",
"trad":"漆黑",
"pinyin":"qī hēi",
"def": ["pitch-black"]
},
"薄片":
{"simp":"薄片",
"trad":"薄片",
"pinyin":"báo piàn",
"def": ["thin slice","thin section","flake","Taiwan pr. [bo2 pian4]"]
},
"散":
{"simp":"散",
"trad":"散",
"pinyin":"sàn",
"def": ["to scatter","to break up (a meeting etc)","to disperse","to disseminate","to dispel","(coll.) to sack"]
},
"扑克牌":
{"simp":"扑克牌",
"trad":"撲克牌",
"pinyin":"pū kè pái",
"def": ["poker (card game)","playing card","CL:副[fu4]"]
},
"纤维":
{"simp":"纤维",
"trad":"纖維",
"pinyin":"xiān wéi",
"def": ["fiber","CL:種|种[zhong3]"]
},
"汹涌":
{"simp":"汹涌",
"trad":"洶湧",
"pinyin":"xiōng yǒng",
"def": ["to surge up violently (of ocean, river, lake etc)","turbulent"]
},
"变形":
{"simp":"变形",
"trad":"變形",
"pinyin":"biàn xíng",
"def": ["deformation","to become deformed","to change shape","to morph"]
},
"左岸":
{"simp":"左岸",
"trad":"左岸",
"pinyin":"Zuǒ àn",
"def": ["Left Bank (in Paris)"]
},
"曲轴":
{"simp":"曲轴",
"trad":"曲軸",
"pinyin":"qū zhóu",
"def": ["crankshaft"]
},
"飞出":
{"simp":"飞出",
"trad":"飛出",
"pinyin":"fēi chū",
"def": ["to fly out"]
},
"构件":
{"simp":"构件",
"trad":"構件",
"pinyin":"gòu jiàn",
"def": ["member","component","part"]
},
"洞":
{"simp":"洞",
"trad":"洞",
"pinyin":"dòng",
"def": ["cave","hole","zero (unambiguous spoken form when spelling out numbers)","CL:個|个[ge4]"]
},
"破洞":
{"simp":"破洞",
"trad":"破洞",
"pinyin":"pò dòng",
"def": ["a hole"]
},
"转子":
{"simp":"转子",
"trad":"轉子",
"pinyin":"zhuàn zǐ",
"def": ["rotor (electricity)"]
},
"马达":
{"simp":"马达",
"trad":"馬達",
"pinyin":"mǎ dá",
"def": ["motor (loanword)"]
},
"杂乱":
{"simp":"杂乱",
"trad":"雜亂",
"pinyin":"zá luàn",
"def": ["in a mess","in a jumble","chaotic"]
},
"怪异":
{"simp":"怪异",
"trad":"怪異",
"pinyin":"guài yì",
"def": ["monstrous","strange","strange phenomenon"]
},
"听起来":
{"simp":"听起来",
"trad":"聽起來",
"pinyin":"tīng qi lai",
"def": ["to sound like"]
},
"不变":
{"simp":"不变",
"trad":"不變",
"pinyin":"bù biàn",
"def": ["constant","unvarying","(math.) invariant"]
},
"船尾":
{"simp":"船尾",
"trad":"船尾",
"pinyin":"chuán wěi",
"def": ["back end of a ship","aft"]
},
"切断":
{"simp":"切断",
"trad":"切斷",
"pinyin":"qiē duàn",
"def": ["to cut off","to sever"]
},
"血泊":
{"simp":"血泊",
"trad":"血泊",
"pinyin":"xuè pō",
"def": ["pool of blood"]
},
"一闪而过":
{"simp":"一闪而过",
"trad":"一閃而過",
"pinyin":"yī shǎn ér guò",
"def": ["to flash past","to flit by"]
},
"喷":
{"simp":"喷",
"trad":"噴",
"pinyin":"pèn",
"def": ["(of a smell) strong","peak season (of a crop)","(classifier for the ordinal number of a crop, in the context of multiple harvests)"]
},
"胶":
{"simp":"胶",
"trad":"膠",
"pinyin":"jiāo",
"def": ["to glue","glue","gum","rubber"]
},
"龙头":
{"simp":"龙头",
"trad":"龍頭",
"pinyin":"lóng tóu",
"def": ["faucet","water tap","bicycle handle bar","chief (esp. of gang)","boss","decision maker","(market) leader (of companies)","front end of mud-flow","figurehead on prow of dragon boat 龍船|龙船"]
},
"白花花":
{"simp":"白花花",
"trad":"白花花",
"pinyin":"bái huā huā",
"def": ["shining white"]
},
"滑落":
{"simp":"滑落",
"trad":"滑落",
"pinyin":"huá luò",
"def": ["to slide","to roll"]
},
"僵硬":
{"simp":"僵硬",
"trad":"僵硬",
"pinyin":"jiāng yìng",
"def": ["stiff","rigid"]
},
"缆桩":
{"simp":"缆桩",
"trad":"纜樁",
"pinyin":"lǎn zhuāng",
"def": ["mooring bollard"]
},
"冲洗":
{"simp":"冲洗",
"trad":"沖洗",
"pinyin":"chōng xǐ",
"def": ["to rinse","to wash","to develop (photographic film)"]
},
"水龙头":
{"simp":"水龙头",
"trad":"水龍頭",
"pinyin":"shuǐ lóng tóu",
"def": ["faucet","tap"]
},
"险些":
{"simp":"险些",
"trad":"險些",
"pinyin":"xiǎn xiē",
"def": ["narrowly","almost","nearly"]
},
"后甲板":
{"simp":"后甲板",
"trad":"後甲板",
"pinyin":"hòu jiǎ bǎn",
"def": ["afterdeck"]
},
"滚落":
{"simp":"滚落",
"trad":"滾落",
"pinyin":"gǔn luò",
"def": ["to tumble"]
},
"否定":
{"simp":"否定",
"trad":"否定",
"pinyin":"fǒu dìng",
"def": ["to negate","to deny","to reject","negative (answer)","negation"]
},
"迹象":
{"simp":"迹象",
"trad":"跡象",
"pinyin":"jì xiàng",
"def": ["mark","indication","sign","indicator"]
},
"舰首":
{"simp":"舰首",
"trad":"艦首",
"pinyin":"jiàn shǒu",
"def": ["bow of a warship"]
},
"那边":
{"simp":"那边",
"trad":"那邊",
"pinyin":"nà bian",
"def": ["over there","yonder"]
},
"即":
{"simp":"即",
"trad":"即",
"pinyin":"jí",
"def": ["namely","that is","i.e.","prompt","at once","at present","even if","prompted (by the occasion)","to approach","to come into contact","to assume (office)","to draw near"]
},
"转瞬":
{"simp":"转瞬",
"trad":"轉瞬",
"pinyin":"zhuǎn shùn",
"def": ["in the twinkling of an eye","in a flash","to turn one's eyes"]
},
"涌起":
{"simp":"涌起",
"trad":"湧起",
"pinyin":"yǒng qǐ",
"def": ["to well up","to boil out","to bubble forth","to spurt"]
},
"冲动":
{"simp":"冲动",
"trad":"衝動",
"pinyin":"chōng dòng",
"def": ["to have an urge","to be impetuous","impulse","urge"]
},
"逃离":
{"simp":"逃离",
"trad":"逃離",
"pinyin":"táo lí",
"def": ["to run out","to escape"]
},
"急促":
{"simp":"急促",
"trad":"急促",
"pinyin":"jí cù",
"def": ["urgent","hurried and brief","rushing"]
},
"浪":
{"simp":"浪",
"trad":"浪",
"pinyin":"làng",
"def": ["wave","breaker","unrestrained","dissipated","to stroll","to ramble"]
},
"船首":
{"simp":"船首",
"trad":"船首",
"pinyin":"chuán shǒu",
"def": ["ship's bow"]
},
"浑圆":
{"simp":"浑圆",
"trad":"渾圓",
"pinyin":"hún yuán",
"def": ["perfectly round","(fig.) accommodating","considerate","smooth (way of doing things)"]
},
"不见了":
{"simp":"不见了",
"trad":"不見了",
"pinyin":"bù jiàn le",
"def": ["to have disappeared","to be missing","nowhere to be found"]
},
"朝阳":
{"simp":"朝阳",
"trad":"朝陽",
"pinyin":"zhāo yáng",
"def": ["the morning sun"]
},
"大山":
{"simp":"大山",
"trad":"大山",
"pinyin":"Dà shān",
"def": ["Dashan, stage name of Canadian Mark Henry Rowswell (1965-), actor and well-known TV personality in PRC"]
},
"中行":
{"simp":"中行",
"trad":"中行",
"pinyin":"Zhōng háng",
"def": ["abbr. for 中國銀行|中国银行[Zhong1 guo2 Yin2 hang2]"]
},
"现":
{"simp":"现",
"trad":"現",
"pinyin":"xiàn",
"def": ["to appear","present","now","existing","current"]
},
"突":
{"simp":"突",
"trad":"突",
"pinyin":"tū",
"def": ["to dash","to move forward quickly","to bulge","to protrude","to break through","to rush out","sudden","Taiwan pr. [tu2]"]
},
"波":
{"simp":"波",
"trad":"波",
"pinyin":"bō",
"def": ["wave","ripple","storm","surge"]
},
"侧面":
{"simp":"侧面",
"trad":"側面",
"pinyin":"cè miàn",
"def": ["lateral side","side","aspect","profile"]
},
"上层建筑":
{"simp":"上层建筑",
"trad":"上層建築",
"pinyin":"shàng céng jiàn zhù",
"def": ["superstructure"]
},
"感激":
{"simp":"感激",
"trad":"感激",
"pinyin":"gǎn jī",
"def": ["to be grateful","to appreciate","thankful"]
},
"废话":
{"simp":"废话",
"trad":"廢話",
"pinyin":"fèi huà",
"def": ["nonsense","rubbish","superfluous words","You don't say!","No kidding! (gently sarcastic)"]
},
"唠叨":
{"simp":"唠叨",
"trad":"嘮叨",
"pinyin":"láo dao",
"def": ["to prattle","to chatter away","to nag","garrulous","nagging"]
},
"设想":
{"simp":"设想",
"trad":"設想",
"pinyin":"shè xiǎng",
"def": ["to imagine","to assume","to envisage","tentative plan","to have consideration for"]
},
"新人":
{"simp":"新人",
"trad":"新人",
"pinyin":"xīn rén",
"def": ["newcomer","fresh talent","newlywed, esp. new bride","bride and groom","(paleoanthropology) Homo sapiens"]
},
"两千年":
{"simp":"两千年",
"trad":"兩千年",
"pinyin":"liǎng qiān nián",
"def": ["the year 2000","2000 years"]
},
"每个人":
{"simp":"每个人",
"trad":"每個人",
"pinyin":"měi ge rén",
"def": ["everybody","everyone"]
},
"古老":
{"simp":"古老",
"trad":"古老",
"pinyin":"gǔ lǎo",
"def": ["ancient","old","age-old"]
},
"一点儿":
{"simp":"一点儿",
"trad":"一點兒",
"pinyin":"yī diǎn r5",
"def": ["erhua variant of 一點|一点[yi1 dian3]"]
},
"西海":
{"simp":"西海",
"trad":"西海",
"pinyin":"Xī Hǎi",
"def": ["Yellow Sea (Korean term)"]
},
"正向":
{"simp":"正向",
"trad":"正向",
"pinyin":"zhèng xiàng",
"def": ["forward (direction)","positive (thinking, mood, values etc)"]
},
"东海岸":
{"simp":"东海岸",
"trad":"東海岸",
"pinyin":"Dōng hǎi àn",
"def": ["East Coast"]
},
"视野":
{"simp":"视野",
"trad":"視野",
"pinyin":"shì yě",
"def": ["field of view","(fig.) outlook","perspective"]
},
"太平洋":
{"simp":"太平洋",
"trad":"太平洋",
"pinyin":"Tài píng Yáng",
"def": ["Pacific Ocean"]
},
"目睹":
{"simp":"目睹",
"trad":"目睹",
"pinyin":"mù dǔ",
"def": ["to witness","to see at first hand","to see with one's own eyes"]
},
"升":
{"simp":"升",
"trad":"陞",
"pinyin":"shēng",
"def": ["variant of 升[sheng1]"]
},
"走去":
{"simp":"走去",
"trad":"走去",
"pinyin":"zǒu qù",
"def": ["to walk over (to)"]
},
"穷乡僻壤":
{"simp":"穷乡僻壤",
"trad":"窮鄉僻壤",
"pinyin":"qióng xiāng pì rǎng",
"def": ["a remote and desolate place"]
},
"结果":
{"simp":"结果",
"trad":"結果",
"pinyin":"jié guǒ",
"def": ["outcome","result","conclusion","in the end","as a result","to kill","to dispatch"]
},
"艳丽":
{"simp":"艳丽",
"trad":"艷麗",
"pinyin":"yàn lì",
"def": ["gorgeous","garish and beautiful"]
},
"重设":
{"simp":"重设",
"trad":"重設",
"pinyin":"chóng shè",
"def": ["to reset"]
},
"地位":
{"simp":"地位",
"trad":"地位",
"pinyin":"dì wèi",
"def": ["position","status","place","CL:個|个[ge4]"]
},
"自然":
{"simp":"自然",
"trad":"自然",
"pinyin":"zì rán",
"def": ["nature","natural","naturally"]
},
"遍":
{"simp":"遍",
"trad":"遍",
"pinyin":"biàn",
"def": ["everywhere","all over","classifier for actions: one time"]
},
"冲天":
{"simp":"冲天",
"trad":"沖天",
"pinyin":"chōng tiān",
"def": ["to soar","to rocket"]
},
"抬起":
{"simp":"抬起",
"trad":"抬起",
"pinyin":"tái qǐ",
"def": ["to lift up"]
},
"缆":
{"simp":"缆",
"trad":"纜",
"pinyin":"lǎn",
"def": ["cable","hawser","to moor"]
},
"穿过":
{"simp":"穿过",
"trad":"穿過",
"pinyin":"chuān guò",
"def": ["to pass through"]
},
"察看":
{"simp":"察看",
"trad":"察看",
"pinyin":"chá kàn",
"def": ["to watch","to look carefully at"]
},
"枪声":
{"simp":"枪声",
"trad":"槍聲",
"pinyin":"qiāng shēng",
"def": ["crack","shooting sound","gunshot"]
},
"往常":
{"simp":"往常",
"trad":"往常",
"pinyin":"wǎng cháng",
"def": ["usual","customary"]
},
"成人":
{"simp":"成人",
"trad":"成人",
"pinyin":"chéng rén",
"def": ["adult"]
},
"上方":
{"simp":"上方",
"trad":"上方",
"pinyin":"shàng fāng",
"def": ["place above (it)","upper part (of it)"]
},
"人像":
{"simp":"人像",
"trad":"人像",
"pinyin":"rén xiàng",
"def": ["likeness of a person (sketch, photo, sculpture etc)"]
},
"这类":
{"simp":"这类",
"trad":"這類",
"pinyin":"zhè lèi",
"def": ["this kind (of)"]
},
"风":
{"simp":"风",
"trad":"風",
"pinyin":"fēng",
"def": ["wind","news","style","custom","manner","CL:陣|阵[zhen4],絲|丝[si1]"]
},
"寒":
{"simp":"寒",
"trad":"寒",
"pinyin":"hán",
"def": ["cold","poor","to tremble"]
},
"控":
{"simp":"控",
"trad":"控",
"pinyin":"kòng",
"def": ["to control","to accuse","to charge","to sue","to invert a container to empty it","(suffix) (slang) buff","enthusiast","devotee","-phile or -philia"]
},
"影响":
{"simp":"影响",
"trad":"影響",
"pinyin":"yǐng xiǎng",
"def": ["influence","effect","to influence","to affect (usually adversely)","to disturb","CL:股[gu3]"]
},
"缓存":
{"simp":"缓存",
"trad":"緩存",
"pinyin":"huǎn cún",
"def": ["(computing) cache","buffer memory"]
},
"简短":
{"simp":"简短",
"trad":"簡短",
"pinyin":"jiǎn duǎn",
"def": ["brief (statement, summary etc)","briefly","brevity"]
},
"工资":
{"simp":"工资",
"trad":"工資",
"pinyin":"gōng zī",
"def": ["wages","pay","CL:個|个[ge4],份[fen4],月[yue4]"]
},
"代替":
{"simp":"代替",
"trad":"代替",
"pinyin":"dài tì",
"def": ["to replace","to take the place of"]
},
"松开":
{"simp":"松开",
"trad":"鬆開",
"pinyin":"sōng kāi",
"def": ["to release","to let go","to loosen","to untie","to come loose"]
},
"存":
{"simp":"存",
"trad":"存",
"pinyin":"cún",
"def": ["to exist","to deposit","to store","to keep","to survive"]
},
"阳光":
{"simp":"阳光",
"trad":"陽光",
"pinyin":"yáng guāng",
"def": ["sunshine","(of personality) upbeat; energetic","transparent (open to public scrutiny)"]
},
"转":
{"simp":"转",
"trad":"轉",
"pinyin":"zhuàn",
"def": ["to revolve","to turn","to circle about","to walk about","classifier for revolutions (per minute etc): revs, rpm","classifier for repeated actions"]
},
"肯定":
{"simp":"肯定",
"trad":"肯定",
"pinyin":"kěn dìng",
"def": ["to be certain","to be positive","assuredly","definitely","to give recognition","to affirm","affirmative (answer)"]
},
"查看":
{"simp":"查看",
"trad":"查看",
"pinyin":"chá kàn",
"def": ["to look over","to examine","to check up","to ferret out"]
},
"银色":
{"simp":"银色",
"trad":"銀色",
"pinyin":"yín sè",
"def": ["silver (color)"]
},
"簧":
{"simp":"簧",
"trad":"簧",
"pinyin":"huáng",
"def": ["metallic reed","spring of lock"]
},
"比":
{"simp":"比",
"trad":"比",
"pinyin":"bǐ",
"def": ["to compare","(followed by a noun and adjective) more {adj.} than {noun}","ratio","to gesture","(Taiwan pr. [bi4] in some compounds derived from Classical Chinese)"]
},
"技能":
{"simp":"技能",
"trad":"技能",
"pinyin":"jì néng",
"def": ["technical ability","skill"]
},
"上任":
{"simp":"上任",
"trad":"上任",
"pinyin":"shàng rèn",
"def": ["to take office","previous (incumbent)","predecessor"]
},
"辐射波":
{"simp":"辐射波",
"trad":"輻射波",
"pinyin":"fú shè bō",
"def": ["radiation (wave)","radiated wave"]
},
"咔嚓":
{"simp":"咔嚓",
"trad":"咔嚓",
"pinyin":"kā chā",
"def": ["(onom.) breaking or snapping","(coll.) cut it out","stop it","also written 喀嚓[ka1 cha1]"]
},
"大不相同":
{"simp":"大不相同",
"trad":"大不相同",
"pinyin":"dà bù xiāng tóng",
"def": ["not at all the same","substantially different"]
},
"凌晨":
{"simp":"凌晨",
"trad":"凌晨",
"pinyin":"líng chén",
"def": ["very early in the morning","in the wee hours"]
},
"望远镜":
{"simp":"望远镜",
"trad":"望遠鏡",
"pinyin":"wàng yuǎn jìng",
"def": ["binoculars","telescope","CL:付[fu4],副[fu4],部[bu4]"]
},
"涌进":
{"simp":"涌进",
"trad":"湧進",
"pinyin":"yǒng jìn",
"def": ["to spill","to overflow (of water, crowds)","to crowd (into a space)"]
},
"巨响":
{"simp":"巨响",
"trad":"巨響",
"pinyin":"jù xiǎng",
"def": ["loud sound"]
},
"护士":
{"simp":"护士",
"trad":"護士",
"pinyin":"hù shi",
"def": ["nurse","CL:個|个[ge4]"]
},
"拇指":
{"simp":"拇指",
"trad":"拇指",
"pinyin":"mǔ zhǐ",
"def": ["thumb","big toe"]
},
"三星":
{"simp":"三星",
"trad":"三星",
"pinyin":"sān xīng",
"def": ["three major stars of the Three Stars 參宿|参宿[Shen1 xiu4] Chinese constellation","the belt of Orion","three spirits 福[fu2], 祿|禄[lu4], and 壽|寿[shou4] associated with the Three Stars 參宿|参宿[Shen1 xiu4] Chinese constellation"]
},
"理解":
{"simp":"理解",
"trad":"理解",
"pinyin":"lǐ jiě",
"def": ["to comprehend","to understand","comprehension","understanding"]
},
"一流":
{"simp":"一流",
"trad":"一流",
"pinyin":"yī liú",
"def": ["top quality","front ranking"]
},
"对方":
{"simp":"对方",
"trad":"對方",
"pinyin":"duì fāng",
"def": ["counterpart","other person involved","opposite side","other side","receiving party"]
},
"智力":
{"simp":"智力",
"trad":"智力",
"pinyin":"zhì lì",
"def": ["intelligence","intellect"]
},
"恒星系":
{"simp":"恒星系",
"trad":"恆星系",
"pinyin":"héng xīng xì",
"def": ["stellar system","galaxy"]
},
"部位":
{"simp":"部位",
"trad":"部位",
"pinyin":"bù wèi",
"def": ["position","place"]
},
"入侵":
{"simp":"入侵",
"trad":"入侵",
"pinyin":"rù qīn",
"def": ["to invade"]
},
"半个":
{"simp":"半个",
"trad":"半個",
"pinyin":"bàn ge",
"def": ["half of sth"]
},
"出乎":
{"simp":"出乎",
"trad":"出乎",
"pinyin":"chū hū",
"def": ["due to","to stem from","to go beyond (also fig. beyond reason, expectations etc)","to go against (expectations)"]
},
"其内":
{"simp":"其内",
"trad":"其內",
"pinyin":"qí nèi",
"def": ["included","within that"]
},
"绝望":
{"simp":"绝望",
"trad":"絕望",
"pinyin":"jué wàng",
"def": ["to despair","to give up all hope","desperate","desperation"]
},
"考虑":
{"simp":"考虑",
"trad":"考慮",
"pinyin":"kǎo lù:",
"def": ["to think over","to consider","consideration"]
},
"谈到":
{"simp":"谈到",
"trad":"談到",
"pinyin":"tán dào",
"def": ["to refer to","to speak about","to talk about"]
},
"原始":
{"simp":"原始",
"trad":"原始",
"pinyin":"yuán shǐ",
"def": ["first","original","primitive","original (document etc)"]
},
"几天":
{"simp":"几天",
"trad":"幾天",
"pinyin":"jǐ tiān",
"def": ["several days"]
},
"正式":
{"simp":"正式",
"trad":"正式",
"pinyin":"zhèng shì",
"def": ["formal","official"]
},
"河流":
{"simp":"河流",
"trad":"河流",
"pinyin":"hé liú",
"def": ["river","CL:條|条[tiao2]"]
},
"压抑":
{"simp":"压抑",
"trad":"壓抑",
"pinyin":"yā yì",
"def": ["to constrain or repress emotions","oppressive","stifling","depressing","repression"]
},
"软件":
{"simp":"软件",
"trad":"軟件",
"pinyin":"ruǎn jiàn",
"def": ["(computer) software"]
},
"百分之":
{"simp":"百分之",
"trad":"百分之",
"pinyin":"bǎi fēn zhī",
"def": ["percent"]
},
"英伦":
{"simp":"英伦",
"trad":"英倫",
"pinyin":"Yīng lún",
"def": ["England"]
},
"从未":
{"simp":"从未",
"trad":"從未",
"pinyin":"cóng wèi",
"def": ["never"]
},
"识别":
{"simp":"识别",
"trad":"識別",
"pinyin":"shí bié",
"def": ["to distinguish","to discern","to identify","to recognize"]
},
"键":
{"simp":"键",
"trad":"鍵",
"pinyin":"jiàn",
"def": ["key (on a piano or computer keyboard)","button (on a mouse or other device)","chemical bond","linchpin"]
},
"凭":
{"simp":"凭",
"trad":"憑",
"pinyin":"píng",
"def": ["to lean against","to rely on","on the basis of","no matter (how, what etc)","proof"]
},
"沮丧":
{"simp":"沮丧",
"trad":"沮喪",
"pinyin":"jǔ sàng",
"def": ["dispirited","dejected","dismayed"]
},
"归宿":
{"simp":"归宿",
"trad":"歸宿",
"pinyin":"guī sù",
"def": ["place to return to","home","final destination","ending"]
},
"找不到":
{"simp":"找不到",
"trad":"找不到",
"pinyin":"zhǎo bu dào",
"def": ["can't find"]
},
"轰然":
{"simp":"轰然",
"trad":"轟然",
"pinyin":"hōng rán",
"def": ["loudly","with a loud bang","a loud rumble"]
},
"长得":
{"simp":"长得",
"trad":"長得",
"pinyin":"zhǎng de",
"def": ["to look (pretty, the same etc)"]
},
"沙漠":
{"simp":"沙漠",
"trad":"沙漠",
"pinyin":"shā mò",
"def": ["desert","CL:個|个[ge4]"]
},
"疯狂":
{"simp":"疯狂",
"trad":"瘋狂",
"pinyin":"fēng kuáng",
"def": ["crazy","frantic","extreme popularity"]
},
"一维":
{"simp":"一维",
"trad":"一維",
"pinyin":"yī wéi",
"def": ["one-dimensional (math.)"]
},
"空地":
{"simp":"空地",
"trad":"空地",
"pinyin":"kòng dì",
"def": ["vacant land","open space"]
},
"持续":
{"simp":"持续",
"trad":"持續",
"pinyin":"chí xù",
"def": ["to continue","to persist","to last","sustainable","preservation"]
},
"满脸":
{"simp":"满脸",
"trad":"滿臉",
"pinyin":"mǎn liǎn",
"def": ["across one's whole face"]
},
"话":
{"simp":"话",
"trad":"諙",
"pinyin":"huà",
"def": ["old variant of 話|话[hua4]"]
},
"高低":
{"simp":"高低",
"trad":"高低",
"pinyin":"gāo dī",
"def": ["height","altitude (aviation)","pitch (music)","ups and downs (success or failure)","whether sth is right or wrong","comparative strength, weight, depth, stature","(spoken interjection) anyway, whatever","eventually, in the end"]
},
"黑洞":
{"simp":"黑洞",
"trad":"黑洞",
"pinyin":"hēi dòng",
"def": ["(astronomy) black hole"]
},
"第一":
{"simp":"第一",
"trad":"第一",
"pinyin":"dì yī",
"def": ["first","number one","primary"]
},
"一线":
{"simp":"一线",
"trad":"一線",
"pinyin":"yī xiàn",
"def": ["front line"]
},
"无意":
{"simp":"无意",
"trad":"無意",
"pinyin":"wú yì",
"def": ["inadvertent","accidental","to have no intention of (doing sth)"]
},
"无生命":
{"simp":"无生命",
"trad":"無生命",
"pinyin":"wú shēng mìng",
"def": ["inert","lifeless"]
},
"班":
{"simp":"班",
"trad":"班",
"pinyin":"bān",
"def": ["team","class","squad","work shift","ranking","CL:個|个[ge4]","classifier for groups of people and scheduled transport vehicles"]
},
"花花绿绿":
{"simp":"花花绿绿",
"trad":"花花綠綠",
"pinyin":"huā huā lù: lù:",
"def": ["brightly colored","gaudy"]
},
"意":
{"simp":"意",
"trad":"意",
"pinyin":"yì",
"def": ["idea","meaning","thought","to think","wish","desire","intention","to expect","to anticipate"]
},
"拳头":
{"simp":"拳头",
"trad":"拳頭",
"pinyin":"quán tou",
"def": ["fist","clenched fist","CL:個|个[ge4]","competitive (product)"]
},
"通":
{"simp":"通",
"trad":"通",
"pinyin":"tòng",
"def": ["classifier for an activity, taken in its entirety (tirade of abuse, stint of music playing, bout of drinking etc)"]
},
"听者":
{"simp":"听者",
"trad":"聽者",
"pinyin":"tīng zhě",
"def": ["listener","member of audience"]
},
"厘米":
{"simp":"厘米",
"trad":"釐米",
"pinyin":"lí mǐ",
"def": ["centimeter"]
},
"午夜":
{"simp":"午夜",
"trad":"午夜",
"pinyin":"wǔ yè",
"def": ["midnight"]
},
"错落":
{"simp":"错落",
"trad":"錯落",
"pinyin":"cuò luò",
"def": ["strewn at random","disorderly","untidy","irregular","uneven"]
},
"花钱":
{"simp":"花钱",
"trad":"花錢",
"pinyin":"huā qián",
"def": ["to spend money"]
},
"心态":
{"simp":"心态",
"trad":"心態",
"pinyin":"xīn tài",
"def": ["attitude (of the heart)","state of one's psyche","way of thinking","mentality"]
},
"包含":
{"simp":"包含",
"trad":"包含",
"pinyin":"bāo hán",
"def": ["to contain","to embody","to include"]
},
"无家可归":
{"simp":"无家可归",
"trad":"無家可歸",
"pinyin":"wú jiā kě guī",
"def": ["homeless"]
},
"基督教":
{"simp":"基督教",
"trad":"基督教",
"pinyin":"Jī dū jiào",
"def": ["Christianity","Christian"]
},
"缺失":
{"simp":"缺失",
"trad":"缺失",
"pinyin":"quē shī",
"def": ["deficiency","shortcoming","hiatus"]
},
"贴":
{"simp":"贴",
"trad":"貼",
"pinyin":"tiē",
"def": ["to stick","to paste","to post (e.g. on a blog)","to keep close to","to fit snugly","to subsidize","allowance (e.g. money for food or housing)","sticker","classifier for sticking plaster: strip"]
},
"深重":
{"simp":"深重",
"trad":"深重",
"pinyin":"shēn zhòng",
"def": ["very serious","grave","profound"]
},
"陷入":
{"simp":"陷入",
"trad":"陷入",
"pinyin":"xiàn rù",
"def": ["to sink into","to get caught up in","to land in (a predicament)"]
},
"风度":
{"simp":"风度",
"trad":"風度",
"pinyin":"fēng dù",
"def": ["elegance (for men)","elegant demeanor","grace","poise"]
},
"人世":
{"simp":"人世",
"trad":"人世",
"pinyin":"rén shì",
"def": ["the world","this world","the world of the living"]
},
"不在":
{"simp":"不在",
"trad":"不在",
"pinyin":"bù zài",
"def": ["not to be present","to be out","(euphemism) to pass away","to be deceased"]
},
"道光":
{"simp":"道光",
"trad":"道光",
"pinyin":"Dào guāng",
"def": ["reign name of Qing emperor (1821-1850)"]
},
"准":
{"simp":"准",
"trad":"準",
"pinyin":"zhǔn",
"def": ["accurate","standard","definitely","certainly","about to become (bride, son-in-law etc)","quasi-","para-"]
},
"麦":
{"simp":"麦",
"trad":"麥",
"pinyin":"mài",
"def": ["wheat","barley","oats"]
},
"如果":
{"simp":"如果",
"trad":"如果",
"pinyin":"rú guǒ",
"def": ["if","in case","in the event that"]
},
"接受":
{"simp":"接受",
"trad":"接受",
"pinyin":"jiē shòu",
"def": ["to accept","to receive"]
},
"历史学家":
{"simp":"历史学家",
"trad":"歷史學家",
"pinyin":"lì shǐ xué jiā",
"def": ["historian"]
},
"妻子":
{"simp":"妻子",
"trad":"妻子",
"pinyin":"qī zi",
"def": ["wife","CL:個|个[ge4]"]
},
"活儿":
{"simp":"活儿",
"trad":"活兒",
"pinyin":"huó r5",
"def": ["work","(lots of) things to do"]
},
"磨难":
{"simp":"磨难",
"trad":"磨難",
"pinyin":"mó nàn",
"def": ["a torment","a trial","tribulation","a cross (to bear)","well-tried"]
},
"戴":
{"simp":"戴",
"trad":"戴",
"pinyin":"dài",
"def": ["to put on or wear (glasses, hat, gloves etc)","to respect","to bear","to support"]
},
"娶":
{"simp":"娶",
"trad":"娶",
"pinyin":"qǔ",
"def": ["to take a wife","to marry (a woman)"]
},
"婚姻":
{"simp":"婚姻",
"trad":"婚姻",
"pinyin":"hūn yīn",
"def": ["matrimony","wedding","marriage","CL:樁|桩[zhuang1],次[ci4]"]
},
"反革命":
{"simp":"反革命",
"trad":"反革命",
"pinyin":"fǎn gé mìng",
"def": ["counterrevolutionary"]
},
"技术人员":
{"simp":"技术人员",
"trad":"技術人員",
"pinyin":"jì shù rén yuán",
"def": ["technical staff"]
},
"墙":
{"simp":"墙",
"trad":"牆",
"pinyin":"qiáng",
"def": ["wall","CL:面[mian4],堵[du3]"]
},
"熟练":
{"simp":"熟练",
"trad":"熟練",
"pinyin":"shú liàn",
"def": ["practiced","proficient","skilled","skillful"]
},
"无力":
{"simp":"无力",
"trad":"無力",
"pinyin":"wú lì",
"def": ["powerless","lacking strength"]
},
"蜡烛":
{"simp":"蜡烛",
"trad":"蠟燭",
"pinyin":"là zhú",
"def": ["candle","CL:根[gen1],支[zhi1]"]
},
"蘑菇":
{"simp":"蘑菇",
"trad":"蘑菇",
"pinyin":"mó gu",
"def": ["mushroom","to pester","to dawdle"]
},
"站起":
{"simp":"站起",
"trad":"站起",
"pinyin":"zhàn qǐ",
"def": ["to get up on hind legs (esp. of horse)","to stand","to spring up"]
},
"高处":
{"simp":"高处",
"trad":"高處",
"pinyin":"gāo chù",
"def": ["high place","elevation"]
},
"热":
{"simp":"热",
"trad":"熱",
"pinyin":"rè",
"def": ["to warm up","to heat up","hot (of weather)","heat","fervent"]
},
"折":
{"simp":"折",
"trad":"摺",
"pinyin":"zhé",
"def": ["variant of 折[zhe2]","to fold"]
},
"等等":
{"simp":"等等",
"trad":"等等",
"pinyin":"děng děng",
"def": ["et cetera","and so on ...","wait a minute!","hold on!"]
},
"收工":
{"simp":"收工",
"trad":"收工",
"pinyin":"shōu gōng",
"def": ["to stop work for the day (generally of laborers)","to knock off"]
},
"可怕":
{"simp":"可怕",
"trad":"可怕",
"pinyin":"kě pà",
"def": ["awful","dreadful","fearful","formidable","frightful","scary","hideous","horrible","terrible","terribly"]
},
"水准":
{"simp":"水准",
"trad":"水準",
"pinyin":"shuǐ zhǔn",
"def": ["level (of achievement etc)","standard","level (surveying)"]
},
"敏感":
{"simp":"敏感",
"trad":"敏感",
"pinyin":"mǐn gǎn",
"def": ["sensitive","susceptible"]
},
"着地":
{"simp":"着地",
"trad":"著地",
"pinyin":"zháo dì",
"def": ["to land","to touch the ground","also pr. [zhuo2 di4]"]
},
"守":
{"simp":"守",
"trad":"守",
"pinyin":"shǒu",
"def": ["to guard","to defend","to keep watch","to abide by the law","to observe (rules or ritual)","nearby","adjoining"]
},
"地平线":
{"simp":"地平线",
"trad":"地平線",
"pinyin":"dì píng xiàn",
"def": ["horizon"]
},
"抡":
{"simp":"抡",
"trad":"掄",
"pinyin":"lún",
"def": ["to select"]
},
"导":
{"simp":"导",
"trad":"導",
"pinyin":"dǎo",
"def": ["to transmit","to lead","to guide","to conduct","to direct"]
},
"雪橇":
{"simp":"雪橇",
"trad":"雪橇",
"pinyin":"xuě qiāo",
"def": ["sled","sledge","sleigh","bobsled"]
},
"软弱":
{"simp":"软弱",
"trad":"軟弱",
"pinyin":"ruǎn ruò",
"def": ["weak","feeble","flabby"]
},
"眼":
{"simp":"眼",
"trad":"眼",
"pinyin":"yǎn",
"def": ["eye","small hole","crux (of a matter)","CL:隻|只[zhi1],雙|双[shuang1]","classifier for big hollow things (wells, stoves, pots etc)"]
},
"艘":
{"simp":"艘",
"trad":"艘",
"pinyin":"sōu",
"def": ["classifier for ships","Taiwan pr. [sao1]"]
},
"B":
{"simp":"B",
"trad":"B",
"pinyin":"bī",
"def": ["euphemistic variant of 屄[bi1]"]
},
"引起":
{"simp":"引起",
"trad":"引起",
"pinyin":"yǐn qǐ",
"def": ["to give rise to","to lead to","to cause","to arouse"]
},
"二维":
{"simp":"二维",
"trad":"二維",
"pinyin":"èr wéi",
"def": ["two-dimensional"]
},
"桌面":
{"simp":"桌面",
"trad":"桌面",
"pinyin":"zhuō miàn",
"def": ["desktop","tabletop"]
},
"仅":
{"simp":"仅",
"trad":"僅",
"pinyin":"jǐn",
"def": ["barely","only","merely"]
},
"锯条":
{"simp":"锯条",
"trad":"鋸條",
"pinyin":"jù tiáo",
"def": ["a sawblade"]
},
"径直":
{"simp":"径直",
"trad":"徑直",
"pinyin":"jìng zhí",
"def": ["directly"]
},
"意味着":
{"simp":"意味着",
"trad":"意味著",
"pinyin":"yì wèi zhe",
"def": ["to signify","to mean","to imply"]
},
"一笑置之":
{"simp":"一笑置之",
"trad":"一笑置之",
"pinyin":"yī xiào zhì zhī",
"def": ["to dismiss with a laugh","to make light of"]
},
"叠加":
{"simp":"叠加",
"trad":"疊加",
"pinyin":"dié jiā",
"def": ["to superimpose","to layer","to overlay","to superpose"]
},
"黑夜":
{"simp":"黑夜",
"trad":"黑夜",
"pinyin":"hēi yè",
"def": ["night"]
},
"理想主义":
{"simp":"理想主义",
"trad":"理想主義",
"pinyin":"lǐ xiǎng zhǔ yì",
"def": ["idealism"]
},
"晴朗":
{"simp":"晴朗",
"trad":"晴朗",
"pinyin":"qíng lǎng",
"def": ["sunny and cloudless"]
},
"或":
{"simp":"或",
"trad":"或",
"pinyin":"huò",
"def": ["maybe","perhaps","might","possibly","or"]
},
"发射井":
{"simp":"发射井",
"trad":"發射井",
"pinyin":"fā shè jǐng",
"def": ["launching silo"]
},
"大陆":
{"simp":"大陆",
"trad":"大陸",
"pinyin":"dà lù",
"def": ["continent","mainland","CL:個|个[ge4],塊|块[kuai4]"]
},
"边":
{"simp":"边",
"trad":"邊",
"pinyin":"bian",
"def": ["suffix of a noun of locality"]
},
"贫穷":
{"simp":"贫穷",
"trad":"貧窮",
"pinyin":"pín qióng",
"def": ["poor","impoverished"]
},
"美苏":
{"simp":"美苏",
"trad":"美蘇",
"pinyin":"Měi Sū",
"def": ["American-Soviet (tension, rapprochement etc)"]
},
"绿树":
{"simp":"绿树",
"trad":"綠樹",
"pinyin":"lù: shù",
"def": ["trees","greenery"]
},
"数不清":
{"simp":"数不清",
"trad":"數不清",
"pinyin":"shǔ bù qīng",
"def": ["countless","innumerable"]
},
"围":
{"simp":"围",
"trad":"圍",
"pinyin":"wéi",
"def": ["to encircle","to surround","all around","to wear by wrapping around (scarf, shawl)"]
},
"原油":
{"simp":"原油",
"trad":"原油",
"pinyin":"yuán yóu",
"def": ["crude oil"]
},
"成行":
{"simp":"成行",
"trad":"成行",
"pinyin":"chéng xíng",
"def": ["to embark on a journey"]
},
"非":
{"simp":"非",
"trad":"非",
"pinyin":"fēi",
"def": ["to not be","not","wrong","incorrect","non-","un-","in-","de-","to reproach or blame","(colloquial) to insist on","simply must"]
},
"火":
{"simp":"火",
"trad":"火",
"pinyin":"huǒ",
"def": ["fire","urgent","ammunition","fiery or flaming","internal heat (Chinese medicine)","hot (popular)","classifier for military units (old)","Kangxi radical 86"]
},
"燃起":
{"simp":"燃起",
"trad":"燃起",
"pinyin":"rán qǐ",
"def": ["to ignite","to light","fig. to spark off (hopes, controversy, flames of revolution)"]
},
"烧荒":
{"simp":"烧荒",
"trad":"燒荒",
"pinyin":"shāo huāng",
"def": ["to clear waste land or forest by burning","slash-and-burn (agriculture)"]
},
"易":
{"simp":"易",
"trad":"易",
"pinyin":"yì",
"def": ["easy","amiable","to change","to exchange","prefix corresponding to the English adjective suffix \"-able\" or \"-ible\""]
},
"威信":
{"simp":"威信",
"trad":"威信",
"pinyin":"wēi xìn",
"def": ["prestige","reputation","trust","credit with the people"]
},
"先":
{"simp":"先",
"trad":"先",
"pinyin":"xiān",
"def": ["early","prior","former","in advance","first"]
},
"光秃秃":
{"simp":"光秃秃",
"trad":"光禿禿",
"pinyin":"guāng tū tū",
"def": ["bald","bare"]
},
"幸存":
{"simp":"幸存",
"trad":"倖存",
"pinyin":"xìng cún",
"def": ["to survive (a disaster)"]
},
"过人":
{"simp":"过人",
"trad":"過人",
"pinyin":"guò rén",
"def": ["to surpass others","outstanding","(basketball, soccer etc) to get past an opponent"]
},
"深山":
{"simp":"深山",
"trad":"深山",
"pinyin":"shēn shān",
"def": ["deep in the mountains"]
},
"部分":
{"simp":"部分",
"trad":"部分",
"pinyin":"bù fen",
"def": ["part","share","section","piece","CL:個|个[ge4]"]
},
"明月":
{"simp":"明月",
"trad":"明月",
"pinyin":"míng yuè",
"def": ["bright moon","refers to 夜明珠, a legendary pearl that can glow in the dark","CL:輪|轮[lun2]"]
},
"剥":
{"simp":"剥",
"trad":"剝",
"pinyin":"bō",
"def": ["to peel","to skin","to flay","to shuck"]
},
"等":
{"simp":"等",
"trad":"等",
"pinyin":"děng",
"def": ["class","rank","grade","equal to","same as","to wait for","to await","et cetera","and so on","et al. (and other authors)","after","as soon as","once"]
},
"去皮":
{"simp":"去皮",
"trad":"去皮",
"pinyin":"qù pí",
"def": ["to peel","to remove the skin","to tare"]
},
"现实":
{"simp":"现实",
"trad":"現實",
"pinyin":"xiàn shí",
"def": ["reality","actuality","real","actual","realistic","pragmatic","materialistic","self-interested"]
},
"白":
{"simp":"白",
"trad":"白",
"pinyin":"bái",
"def": ["white","snowy","pure","bright","empty","blank","plain","clear","to make clear","in vain","gratuitous","free of charge","reactionary","anti-communist","funeral","to stare coldly","to write wrong character","to state","to explain","vernacular","spoken lines in opera"]
},
"有着":
{"simp":"有着",
"trad":"有著",
"pinyin":"yǒu zhe",
"def": ["to have","to possess"]
},
"扩大":
{"simp":"扩大",
"trad":"擴大",
"pinyin":"kuò dà",
"def": ["to expand","to enlarge","to broaden one's scope"]
},
"滚烫":
{"simp":"滚烫",
"trad":"滾燙",
"pinyin":"gǔn tàng",
"def": ["boiling","scalding"]
},
"人性":
{"simp":"人性",
"trad":"人性",
"pinyin":"rén xìng",
"def": ["human nature","humanity","human","the totality of human attributes"]
},
"一点点":
{"simp":"一点点",
"trad":"一點點",
"pinyin":"yī diǎn diǎn",
"def": ["a little bit"]
},
"思想家":
{"simp":"思想家",
"trad":"思想家",
"pinyin":"sī xiǎng jiā",
"def": ["thinker"]
},
"贡献":
{"simp":"贡献",
"trad":"貢獻",
"pinyin":"gòng xiàn",
"def": ["to contribute","to dedicate","to devote","contribution","CL:個|个[ge4]"]
},
"图解":
{"simp":"图解",
"trad":"圖解",
"pinyin":"tú jiě",
"def": ["illustration","diagram","graphical representation","to explain with the aid of a diagram"]
},
"经典":
{"simp":"经典",
"trad":"經典",
"pinyin":"jīng diǎn",
"def": ["the classics","scriptures","classical","classic (example, case etc)","typical"]
},
"哲学":
{"simp":"哲学",
"trad":"哲學",
"pinyin":"zhé xué",
"def": ["philosophy","CL:個|个[ge4]"]
},
"迸":
{"simp":"迸",
"trad":"迸",
"pinyin":"bèng",
"def": ["to burst forth","to spurt","to crack","split"]
},
"上船":
{"simp":"上船",
"trad":"上船",
"pinyin":"shàng chuán",
"def": ["to get on the boat"]
},
"儿":
{"simp":"儿",
"trad":"兒",
"pinyin":"r5",
"def": ["non-syllabic diminutive suffix","retroflex final"]
},
"收集":
{"simp":"收集",
"trad":"收集",
"pinyin":"shōu jí",
"def": ["to gather","to collect"]
},
"每人":
{"simp":"每人",
"trad":"每人",
"pinyin":"měi rén",
"def": ["each person","everybody","per person"]
},
"丈夫":
{"simp":"丈夫",
"trad":"丈夫",
"pinyin":"zhàng fu",
"def": ["husband","CL:個|个[ge4]"]
},
"动机":
{"simp":"动机",
"trad":"動機",
"pinyin":"dòng jī",
"def": ["motor","locomotive","motive","motivation","intention"]
},
"思考":
{"simp":"思考",
"trad":"思考",
"pinyin":"sī kǎo",
"def": ["to reflect on","to ponder over"]
},
"击中":
{"simp":"击中",
"trad":"擊中",
"pinyin":"jī zhòng",
"def": ["to hit (a target etc)","to strike"]
},
"伤害":
{"simp":"伤害",
"trad":"傷害",
"pinyin":"shāng hài",
"def": ["to injure","to harm"]
},
"噪声":
{"simp":"噪声",
"trad":"噪聲",
"pinyin":"zào shēng",
"def": ["noise"]
},
"鸣枪":
{"simp":"鸣枪",
"trad":"鳴槍",
"pinyin":"míng qiāng",
"def": ["to fire warning shots"]
},
"暂停":
{"simp":"暂停",
"trad":"暫停",
"pinyin":"zàn tíng",
"def": ["to suspend","time-out (e.g. in sports)","stoppage","pause (media player)"]
},
"理性":
{"simp":"理性",
"trad":"理性",
"pinyin":"lǐ xìng",
"def": ["reason","rationality","rational"]
},
"遭遇":
{"simp":"遭遇",
"trad":"遭遇",
"pinyin":"zāo yù",
"def": ["to meet with","to encounter","(bitter) experience"]
},
"女性":
{"simp":"女性",
"trad":"女性",
"pinyin":"nǔ: xìng",
"def": ["woman","the female sex"]
},
"规模":
{"simp":"规模",
"trad":"規模",
"pinyin":"guī mó",
"def": ["scale","scope","extent","CL:個|个[ge4]"]
},
"人民战争":
{"simp":"人民战争",
"trad":"人民戰爭",
"pinyin":"rén mín zhàn zhēng",
"def": ["people's war, military strategy advocated by Mao whereby a large number of ordinary citizens provide support in a campaign"]
},
"旺":
{"simp":"旺",
"trad":"旺",
"pinyin":"wàng",
"def": ["prosperous","flourishing","(of flowers) blooming","(of fire) roaring"]
},
"伤痛":
{"simp":"伤痛",
"trad":"傷痛",
"pinyin":"shāng tòng",
"def": ["pain (from wound)","sorrow"]
},
"旧账":
{"simp":"旧账",
"trad":"舊賬",
"pinyin":"jiù zhàng",
"def": ["lit. old account","old debt","fig. old scores to settle","old quarrels","old grudge"]
},
"变得":
{"simp":"变得",
"trad":"變得",
"pinyin":"biàn de",
"def": ["to become"]
},
"饿死":
{"simp":"饿死",
"trad":"餓死",
"pinyin":"è sǐ",
"def": ["to starve to death","to be very hungry"]
},
"磨合":
{"simp":"磨合",
"trad":"磨合",
"pinyin":"mó hé",
"def": ["to break in","to wear in"]
},
"稍微":
{"simp":"稍微",
"trad":"稍微",
"pinyin":"shāo wēi",
"def": ["a little bit"]
},
"造成":
{"simp":"造成",
"trad":"造成",
"pinyin":"zào chéng",
"def": ["to bring about","to create","to cause"]
},
"净化":
{"simp":"净化",
"trad":"淨化",
"pinyin":"jìng huà",
"def": ["to purify"]
},
"海潮":
{"simp":"海潮",
"trad":"海潮",
"pinyin":"hǎi cháo",
"def": ["tide"]
},
"苏醒":
{"simp":"苏醒",
"trad":"甦醒",
"pinyin":"sū xǐng",
"def": ["to come to","to awaken","to regain consciousness"]
},
"磅礴":
{"simp":"磅礴",
"trad":"磅礡",
"pinyin":"páng bó",
"def": ["majestic","boundless"]
},
"强劲":
{"simp":"强劲",
"trad":"強勁",
"pinyin":"qiáng jìng",
"def": ["strong","powerful","robust"]
},
"加上":
{"simp":"加上",
"trad":"加上",
"pinyin":"jiā shàng",
"def": ["plus","to put in","to add","to add on","to add into","in addition","on top of that"]
},
"房":
{"simp":"房",
"trad":"房",
"pinyin":"fáng",
"def": ["house","room","CL:間|间[jian1]","branch of an extended family","classifier for family members (or concubines)"]
},
"作案":
{"simp":"作案",
"trad":"作案",
"pinyin":"zuò àn",
"def": ["to commit a crime"]
},
"小树林":
{"simp":"小树林",
"trad":"小樹林",
"pinyin":"xiǎo shù lín",
"def": ["grove"]
},
"中心":
{"simp":"中心",
"trad":"中心",
"pinyin":"zhōng xīn",
"def": ["center","heart","core","CL:個|个[ge4]"]
},
"德":
{"simp":"德",
"trad":"惪",
"pinyin":"dé",
"def": ["variant of 德[de2]"]
},
"铁钩":
{"simp":"铁钩",
"trad":"鐵鈎",
"pinyin":"tiě gōu",
"def": ["iron hook"]
},
"啼":
{"simp":"啼",
"trad":"嗁",
"pinyin":"tí",
"def": ["variant of 啼[ti2]"]
},
"热气":
{"simp":"热气",
"trad":"熱氣",
"pinyin":"rè qì",
"def": ["steam","heat","CL:股[gu3]"]
},
"困扰":
{"simp":"困扰",
"trad":"困擾",
"pinyin":"kùn rǎo",
"def": ["to perplex","to disturb","to cause complications"]
},
"信任":
{"simp":"信任",
"trad":"信任",
"pinyin":"xìn rèn",
"def": ["to trust","to have confidence in"]
},
"含":
{"simp":"含",
"trad":"含",
"pinyin":"hán",
"def": ["to keep","to contain","to suck (keep in your mouth without chewing)"]
},
"精确":
{"simp":"精确",
"trad":"精確",
"pinyin":"jīng què",
"def": ["accurate","precise"]
},
"配合":
{"simp":"配合",
"trad":"配合",
"pinyin":"pèi hé",
"def": ["matching","fitting in with","compatible with","to correspond","to fit","to conform to","rapport","to coordinate with","to act in concert with","to cooperate","to become man and wife","to combine parts of machine"]
},
"突然":
{"simp":"突然",
"trad":"突然",
"pinyin":"tū rán",
"def": ["sudden","abrupt","unexpected"]
},
"洪水":
{"simp":"洪水",
"trad":"洪水",
"pinyin":"hóng shuǐ",
"def": ["deluge","flood"]
},
"绚丽":
{"simp":"绚丽",
"trad":"絢麗",
"pinyin":"xuàn lì",
"def": ["gorgeous","magnificent"]
},
"显得":
{"simp":"显得",
"trad":"顯得",
"pinyin":"xiǎn de",
"def": ["to seem","to look","to appear"]
},
"连续":
{"simp":"连续",
"trad":"連續",
"pinyin":"lián xù",
"def": ["continuous","in a row","serial","consecutive"]
},
"尤其":
{"simp":"尤其",
"trad":"尤其",
"pinyin":"yóu qí",
"def": ["especially","particularly"]
},
"生活":
{"simp":"生活",
"trad":"生活",
"pinyin":"shēng huó",
"def": ["life","activity","to live","livelihood"]
},
"设":
{"simp":"设",
"trad":"設",
"pinyin":"shè",
"def": ["to set up","to arrange","to establish","to found","to display"]
},
"剩下":
{"simp":"剩下",
"trad":"剩下",
"pinyin":"shèng xià",
"def": ["to remain","left over"]
},
"咋":
{"simp":"咋",
"trad":"咋",
"pinyin":"zhà",
"def": ["loud noise","shout","suddenly"]
},
"山地":
{"simp":"山地",
"trad":"山地",
"pinyin":"shān dì",
"def": ["mountainous region","hilly area","hilly country"]
},
"饭盒":
{"simp":"饭盒",
"trad":"飯盒",
"pinyin":"fàn hé",
"def": ["lunchbox","mess tin"]
},
"住处":
{"simp":"住处",
"trad":"住處",
"pinyin":"zhù chù",
"def": ["residence","dwelling","dwelling place"]
},
"以便":
{"simp":"以便",
"trad":"以便",
"pinyin":"yǐ biàn",
"def": ["so that","so as to","in order to"]
},
"而已":
{"simp":"而已",
"trad":"而已",
"pinyin":"ér yǐ",
"def": ["that's all","nothing more"]
},
"坚定不移":
{"simp":"坚定不移",
"trad":"堅定不移",
"pinyin":"jiān dìng bù yí",
"def": ["unswerving","unflinching"]
},
"帮":
{"simp":"帮",
"trad":"幫",
"pinyin":"bāng",
"def": ["to help","to assist","to support","for sb (i.e. as a help)","hired (as worker)","side (of pail, boat etc)","outer layer","upper (of a shoe)","group","gang","clique","party","secret society"]
},
"创伤":
{"simp":"创伤",
"trad":"創傷",
"pinyin":"chuāng shāng",
"def": ["wound","injury","trauma"]
},
"医院":
{"simp":"医院",
"trad":"醫院",
"pinyin":"yī yuàn",
"def": ["hospital","CL:所[suo3],家[jia1],座[zuo4]"]
},
"吻合":
{"simp":"吻合",
"trad":"吻合",
"pinyin":"wěn hé",
"def": ["to be a good fit","to be identical with","to adjust oneself to","to fit in"]
},
"自由落体":
{"simp":"自由落体",
"trad":"自由落體",
"pinyin":"zì yóu luò tǐ",
"def": ["free-fall"]
},
"复印纸":
{"simp":"复印纸",
"trad":"複印紙",
"pinyin":"fù yìn zhǐ",
"def": ["photocopier paper"]
},
"差":
{"simp":"差",
"trad":"差",
"pinyin":"cī",
"def": ["used in 參差|参差[cen1 ci1]"]
},
"联想":
{"simp":"联想",
"trad":"聯想",
"pinyin":"lián xiǎng",
"def": ["to associate (cognitively)","to make an associative connection","mental association","word prediction and auto-complete functions of input method editing programs"]
},
"复印机":
{"simp":"复印机",
"trad":"複印機",
"pinyin":"fù yìn jī",
"def": ["photocopier"]
},
"坏笑":
{"simp":"坏笑",
"trad":"壞笑",
"pinyin":"huài xiào",
"def": ["to smirk","to grin wickedly","to snicker"]
},
"时候":
{"simp":"时候",
"trad":"時候",
"pinyin":"shí hou",
"def": ["time","length of time","moment","period"]
},
"纸":
{"simp":"纸",
"trad":"紙",
"pinyin":"zhǐ",
"def": ["paper","CL:張|张[zhang1],沓[da2]","classifier for documents, letter etc"]
},
"处死":
{"simp":"处死",
"trad":"處死",
"pinyin":"chǔ sǐ",
"def": ["an execution","to put sb to death"]
},
"星空":
{"simp":"星空",
"trad":"星空",
"pinyin":"xīng kōng",
"def": ["starry sky","the heavens"]
},
"轻蔑":
{"simp":"轻蔑",
"trad":"輕蔑",
"pinyin":"qīng miè",
"def": ["scornful; disdainful; contemptuous; pejorative","disdain; contempt"]
},
"申请":
{"simp":"申请",
"trad":"申請",
"pinyin":"shēn qǐng",
"def": ["to apply for sth","application (form etc)","CL:份[fen4]"]
},
"生态环境":
{"simp":"生态环境",
"trad":"生態環境",
"pinyin":"shēng tài huán jìng",
"def": ["ecosystem","natural environment"]
},
"世界末日":
{"simp":"世界末日",
"trad":"世界末日",
"pinyin":"shì jiè mò rì",
"def": ["end of the world"]
},
"同行":
{"simp":"同行",
"trad":"同行",
"pinyin":"tóng xíng",
"def": ["to journey together"]
},
"中国":
{"simp":"中国",
"trad":"中國",
"pinyin":"Zhōng guó",
"def": ["China"]
},
"电磁学":
{"simp":"电磁学",
"trad":"電磁學",
"pinyin":"diàn cí xué",
"def": ["electromagnetism"]
},
"译":
{"simp":"译",
"trad":"譯",
"pinyin":"yì",
"def": ["to translate","to interpret"]
},
"印章":
{"simp":"印章",
"trad":"印章",
"pinyin":"yìn zhāng",
"def": ["seal","signet","chop","stamp","CL:方[fang1]"]
},
"盖":
{"simp":"盖",
"trad":"蓋",
"pinyin":"gài",
"def": ["lid","top","cover","canopy","to cover","to conceal","to build"]
},
"部":
{"simp":"部",
"trad":"部",
"pinyin":"bù",
"def": ["ministry","department","section","part","division","troops","board","classifier for works of literature, films, machines etc"]
},
"上面":
{"simp":"上面",
"trad":"上面",
"pinyin":"shàng miàn",
"def": ["on top of","above-mentioned","also pr. [shang4 mian5]"]
},
"于是":
{"simp":"于是",
"trad":"於是",
"pinyin":"yú shì",
"def": ["thereupon","as a result","consequently","thus","hence"]
},
"上期":
{"simp":"上期",
"trad":"上期",
"pinyin":"shàng qī",
"def": ["previous period (week, month or quarter etc)"]
},
"递给":
{"simp":"递给",
"trad":"遞給",
"pinyin":"dì gěi",
"def": ["to hand it (i.e. the aforementioned item) to (sb)"]
},
"珍贵":
{"simp":"珍贵",
"trad":"珍貴",
"pinyin":"zhēn guì",
"def": ["precious"]
},
"藏":
{"simp":"藏",
"trad":"藏",
"pinyin":"zàng",
"def": ["storehouse","depository","Buddhist or Taoist scripture"]
},
"困":
{"simp":"困",
"trad":"睏",
"pinyin":"kùn",
"def": ["sleepy","tired"]
},
"给定":
{"simp":"给定",
"trad":"給定",
"pinyin":"gěi dìng",
"def": ["to state in advance","preset","given"]
},
"用作":
{"simp":"用作",
"trad":"用作",
"pinyin":"yòng zuò",
"def": ["to use for the purpose of","to serve as"]
},
"目标":
{"simp":"目标",
"trad":"目標",
"pinyin":"mù biāo",
"def": ["target","goal","objective","CL:個|个[ge4]"]
},
"急难":
{"simp":"急难",
"trad":"急難",
"pinyin":"jí nàn",
"def": ["misfortune","crisis","grave danger","critical situation","disaster","emergency","to be zealous in helping others out of a predicament"]
},
"美国":
{"simp":"美国",
"trad":"美國",
"pinyin":"Měi guó",
"def": ["United States","USA","US"]
},
"经历":
{"simp":"经历",
"trad":"經歷",
"pinyin":"jīng lì",
"def": ["experience","CL:個|个[ge4],次[ci4]","to experience","to go through"]
},
"甲虫":
{"simp":"甲虫",
"trad":"甲蟲",
"pinyin":"jiǎ chóng",
"def": ["beetle"]
},
"天文学家":
{"simp":"天文学家",
"trad":"天文學家",
"pinyin":"tiān wén xué jiā",
"def": ["astronomer"]
},
"压碎":
{"simp":"压碎",
"trad":"壓碎",
"pinyin":"yā suì",
"def": ["to crush"]
},
"代表":
{"simp":"代表",
"trad":"代表",
"pinyin":"dài biǎo",
"def": ["representative","delegate","CL:位[wei4],個|个[ge4],名[ming2]","to represent","to stand for","on behalf of","in the name of"]
},
"没收":
{"simp":"没收",
"trad":"沒收",
"pinyin":"mò shōu",
"def": ["to confiscate","to seize"]
},
"人士":
{"simp":"人士",
"trad":"人士",
"pinyin":"rén shì",
"def": ["person","figure","public figure"]
},
"二十":
{"simp":"二十",
"trad":"二十",
"pinyin":"èr shí",
"def": ["twenty","20"]
},
"得到":
{"simp":"得到",
"trad":"得到",
"pinyin":"dé dào",
"def": ["to get","to obtain","to receive"]
},
"闷":
{"simp":"闷",
"trad":"悶",
"pinyin":"mèn",
"def": ["bored","depressed","melancholy","sealed","airtight","tightly closed"]
},
"随着":
{"simp":"随着",
"trad":"隨著",
"pinyin":"suí zhe",
"def": ["along with","in the wake of","following"]
},
"变化":
{"simp":"变化",
"trad":"變化",
"pinyin":"biàn huà",
"def": ["change","variation","to change","to vary","CL:個|个[ge4]"]
},
"戴上":
{"simp":"戴上",
"trad":"戴上",
"pinyin":"dài shang",
"def": ["to put on (hat etc)"]
},
"避风港":
{"simp":"避风港",
"trad":"避風港",
"pinyin":"bì fēng gǎng",
"def": ["haven","refuge","harbor","CL:座[zuo4],個|个[ge4]"]
},
"文件":
{"simp":"文件",
"trad":"文件",
"pinyin":"wén jiàn",
"def": ["document","file","CL:份[fen4]"]
},
"形象":
{"simp":"形象",
"trad":"形象",
"pinyin":"xíng xiàng",
"def": ["image","form","figure","CL:個|个[ge4]","visualization","vivid"]
},
"顶峰":
{"simp":"顶峰",
"trad":"頂峰",
"pinyin":"dǐng fēng",
"def": ["peak","summit","fig. high point","masterpiece"]
},
"效率":
{"simp":"效率",
"trad":"效率",
"pinyin":"xiào lù:",
"def": ["efficiency"]
},
"一带":
{"simp":"一带",
"trad":"一帶",
"pinyin":"yī dài",
"def": ["region","district"]
},
"感情":
{"simp":"感情",
"trad":"感情",
"pinyin":"gǎn qíng",
"def": ["emotion","sentiment","affection","feelings between two persons","CL:個|个[ge4],種|种[zhong3]"]
},
"总":
{"simp":"总",
"trad":"總",
"pinyin":"zǒng",
"def": ["always","to assemble","gather","total","overall","head","chief","general","in every case"]
},
"草地":
{"simp":"草地",
"trad":"草地",
"pinyin":"cǎo dì",
"def": ["lawn","meadow","sod","turf","CL:片[pian4]"]
},
"到处":
{"simp":"到处",
"trad":"到處",
"pinyin":"dào chù",
"def": ["everywhere"]
},
"出错":
{"simp":"出错",
"trad":"出錯",
"pinyin":"chū cuò",
"def": ["to make a mistake","error"]
},
"帽子":
{"simp":"帽子",
"trad":"帽子",
"pinyin":"mào zi",
"def": ["hat","cap","(fig.) label","bad name","CL:頂|顶[ding3]"]
},
"山穷水尽":
{"simp":"山穷水尽",
"trad":"山窮水盡",
"pinyin":"shān qióng shuǐ jìn",
"def": ["mountain and river exhausted (idiom); at the end of the line","nowhere to go"]
},
"埋藏":
{"simp":"埋藏",
"trad":"埋藏",
"pinyin":"mái cáng",
"def": ["to bury","to hide by burying","hidden"]
},
"的话":
{"simp":"的话",
"trad":"的話",
"pinyin":"de huà",
"def": ["if (coming after a conditional clause)"]
},
"毛发":
{"simp":"毛发",
"trad":"毛髮",
"pinyin":"máo fà",
"def": ["hair"]
},
"超出":
{"simp":"超出",
"trad":"超出",
"pinyin":"chāo chū",
"def": ["to exceed","to overstep","to go too far","to encroach"]
},
"意义":
{"simp":"意义",
"trad":"意義",
"pinyin":"yì yì",
"def": ["sense","meaning","significance","importance","CL:個|个[ge4]"]
},
"不得不":
{"simp":"不得不",
"trad":"不得不",
"pinyin":"bù dé bù",
"def": ["have no choice or option but to","cannot but","have to","can't help it","can't avoid"]
},
"警觉":
{"simp":"警觉",
"trad":"警覺",
"pinyin":"jǐng jué",
"def": ["to be on guard","alert","vigilance","alertness"]
},
"丝毫":
{"simp":"丝毫",
"trad":"絲毫",
"pinyin":"sī háo",
"def": ["the slightest amount or degree","a bit"]
},
"男":
{"simp":"男",
"trad":"男",
"pinyin":"nán",
"def": ["male","Baron, lowest of five orders of nobility 五等爵位[wu3 deng3 jue2 wei4]"]
},
"下不为例":
{"simp":"下不为例",
"trad":"下不為例",
"pinyin":"xià bù wéi lì",
"def": ["not to be repeated","not to be taken as a precedent","just this once"]
},
"紧张":
{"simp":"紧张",
"trad":"緊張",
"pinyin":"jǐn zhāng",
"def": ["nervous","keyed up","intense","tense","strained","in short supply","scarce","CL:陣|阵[zhen4]"]
},
"啥":
{"simp":"啥",
"trad":"啥",
"pinyin":"shá",
"def": ["dialectal equivalent of 什麼|什么[shen2 me5]","also pr. [sha4]"]
},
"接近":
{"simp":"接近",
"trad":"接近",
"pinyin":"jiē jìn",
"def": ["to approach","to get close to"]
},
"有效":
{"simp":"有效",
"trad":"有效",
"pinyin":"yǒu xiào",
"def": ["effective","in effect","valid"]
},
"边缘":
{"simp":"边缘",
"trad":"邊緣",
"pinyin":"biān yuán",
"def": ["edge; fringe; verge; brink; periphery","marginal; borderline"]
},
"躲避":
{"simp":"躲避",
"trad":"躲避",
"pinyin":"duǒ bì",
"def": ["to hide","to evade","to dodge","to take shelter","to avoid (difficulties)"]
},
"月球":
{"simp":"月球",
"trad":"月球",
"pinyin":"yuè qiú",
"def": ["the moon"]
},
"衣服":
{"simp":"衣服",
"trad":"衣服",
"pinyin":"yī fu",
"def": ["clothes","CL:件[jian4],套[tao4]"]
},
"活动":
{"simp":"活动",
"trad":"活動",
"pinyin":"huó dòng",
"def": ["to exercise","to move about","to operate","to use connections (personal influence)","loose","shaky","active","movable","activity","campaign","maneuver","behavior","CL:項|项[xiang4],個|个[ge4]"]
},
"东方":
{"simp":"东方",
"trad":"東方",
"pinyin":"dōng fāng",
"def": ["east"]
},
"不尽":
{"simp":"不尽",
"trad":"不盡",
"pinyin":"bù jìn",
"def": ["not completely","endlessly"]
},
"回":
{"simp":"回",
"trad":"逥",
"pinyin":"huí",
"def": ["variant of 迴|回[hui2]"]
},
"组装":
{"simp":"组装",
"trad":"組裝",
"pinyin":"zǔ zhuāng",
"def": ["to assemble; to put together"]
},
"不用":
{"simp":"不用",
"trad":"不用",
"pinyin":"bù yòng",
"def": ["need not"]
},
"拆卸":
{"simp":"拆卸",
"trad":"拆卸",
"pinyin":"chāi xiè",
"def": ["to unload","to dismantle"]
},
"称":
{"simp":"称",
"trad":"稱",
"pinyin":"chèng",
"def": ["variant of 秤[cheng4]","steelyard"]
},
"短时间":
{"simp":"短时间",
"trad":"短時間",
"pinyin":"duǎn shí jiān",
"def": ["short term","short time"]
},
"白天":
{"simp":"白天",
"trad":"白天",
"pinyin":"bái tiān",
"def": ["daytime","during the day","day","CL:個|个[ge4]"]
},
"吩咐":
{"simp":"吩咐",
"trad":"吩咐",
"pinyin":"fēn fù",
"def": ["to tell","to instruct","to command"]
},
"一举":
{"simp":"一举",
"trad":"一舉",
"pinyin":"yī jǔ",
"def": ["a move","an action","in one move","at a stroke","in one go"]
},
"预热":
{"simp":"预热",
"trad":"預熱",
"pinyin":"yù rè",
"def": ["to preheat","warm-up"]
},
"一句":
{"simp":"一句",
"trad":"一句",
"pinyin":"yī jù",
"def": ["a line of verse","a sentence"]
},
"人质":
{"simp":"人质",
"trad":"人質",
"pinyin":"rén zhì",
"def": ["hostage"]
},
"情况":
{"simp":"情况",
"trad":"情況",
"pinyin":"qíng kuàng",
"def": ["circumstances","state of affairs","situation","CL:個|个[ge4],種|种[zhong3]"]
},
"濒危":
{"simp":"濒危",
"trad":"瀕危",
"pinyin":"bīn wēi",
"def": ["endangered (species)","in imminent danger","critically ill"]
},
"电脑":
{"simp":"电脑",
"trad":"電腦",
"pinyin":"diàn nǎo",
"def": ["computer","CL:臺|台[tai2]"]
},
"叠纸":
{"simp":"叠纸",
"trad":"疊紙",
"pinyin":"dié zhǐ",
"def": ["to fold paper","origami"]
},
"脸":
{"simp":"脸",
"trad":"臉",
"pinyin":"liǎn",
"def": ["face","CL:張|张[zhang1],個|个[ge4]"]
},
"拿出":
{"simp":"拿出",
"trad":"拿出",
"pinyin":"ná chū",
"def": ["to take out","to put out","to provide","to put forward (a proposal)","to come up with (evidence)"]
},
"广阔":
{"simp":"广阔",
"trad":"廣闊",
"pinyin":"guǎng kuò",
"def": ["wide","vast"]
},
"头发":
{"simp":"头发",
"trad":"頭髮",
"pinyin":"tóu fa",
"def": ["hair (on the head)"]
},
"批准":
{"simp":"批准",
"trad":"批准",
"pinyin":"pī zhǔn",
"def": ["to approve","to ratify"]
},
"喘":
{"simp":"喘",
"trad":"喘",
"pinyin":"chuǎn",
"def": ["to gasp","to pant","asthma"]
},
"情景":
{"simp":"情景",
"trad":"情景",
"pinyin":"qíng jǐng",
"def": ["scene","spectacle","circumstances","situation"]
},
"汗水":
{"simp":"汗水",
"trad":"汗水",
"pinyin":"hàn shuǐ",
"def": ["sweat","perspiration"]
},
"著作":
{"simp":"著作",
"trad":"著作",
"pinyin":"zhù zuò",
"def": ["to write","literary work","book","article","writings","CL:部[bu4]"]
},
"睡着":
{"simp":"睡着",
"trad":"睡著",
"pinyin":"shuì zháo",
"def": ["to fall asleep"]
},
"水":
{"simp":"水",
"trad":"水",
"pinyin":"shuǐ",
"def": ["water","river","liquid","beverage","additional charges or income","(of clothes) classifier for number of washes"]
},
"喝":
{"simp":"喝",
"trad":"喝",
"pinyin":"hè",
"def": ["to shout"]
},
"维护":
{"simp":"维护",
"trad":"維護",
"pinyin":"wéi hù",
"def": ["to defend","to safeguard","to protect","to uphold","to maintain"]
},
"事儿":
{"simp":"事儿",
"trad":"事兒",
"pinyin":"shì r5",
"def": ["one's employment","business","matter that needs to be settled","(northern dialect) (of a person) demanding","trying","troublesome","erhua variant of 事[shi4]","CL:件[jian4],樁|桩[zhuang1]"]
},
"收拾":
{"simp":"收拾",
"trad":"收拾",
"pinyin":"shōu shi",
"def": ["to put in order","to tidy up","to pack","to repair","(coll.) to sort sb out","to fix sb"]
},
"角":
{"simp":"角",
"trad":"角",
"pinyin":"jué",
"def": ["role (theater)","to compete","ancient three legged wine vessel","third note of pentatonic scale"]
},
"十几":
{"simp":"十几",
"trad":"十幾",
"pinyin":"shí jǐ",
"def": ["more than ten","a dozen or more"]
},
"关闭":
{"simp":"关闭",
"trad":"關閉",
"pinyin":"guān bì",
"def": ["to close","to shut"]
},
"信":
{"simp":"信",
"trad":"信",
"pinyin":"xìn",
"def": ["letter","mail","CL:封[feng1]","to trust","to believe","to profess faith in","truthful","confidence","trust","at will","at random"]
},
"野蛮人":
{"simp":"野蛮人",
"trad":"野蠻人",
"pinyin":"yě mán rén",
"def": ["barbarian"]
},
"躺椅":
{"simp":"躺椅",
"trad":"躺椅",
"pinyin":"tǎng yǐ",
"def": ["deck chair","recliner","couch","lounge"]
},
"有关":
{"simp":"有关",
"trad":"有關",
"pinyin":"yǒu guān",
"def": ["to have sth to do with","to relate to","related to","to concern","concerning"]
},
"航程":
{"simp":"航程",
"trad":"航程",
"pinyin":"háng chéng",
"def": ["flight","passage","sea or air distance"]
},
"审判":
{"simp":"审判",
"trad":"審判",
"pinyin":"shěn pàn",
"def": ["a trial","to try sb"]
},
"突破":
{"simp":"突破",
"trad":"突破",
"pinyin":"tū pò",
"def": ["to break through","to make a breakthrough","to surmount (an obstacle)","(sports) to break through the opponent's defense"]
},
"控制台":
{"simp":"控制台",
"trad":"控制臺",
"pinyin":"kòng zhì tái",
"def": ["control desk","console"]
},
"扭头":
{"simp":"扭头",
"trad":"扭頭",
"pinyin":"niǔ tóu",
"def": ["to turn one's head","to turn around"]
},
"加速":
{"simp":"加速",
"trad":"加速",
"pinyin":"jiā sù",
"def": ["to speed up","to expedite"]
},
"浸透":
{"simp":"浸透",
"trad":"浸透",
"pinyin":"jìn tòu",
"def": ["to soak","to saturate","to drench","to permeate"]
},
"文革":
{"simp":"文革",
"trad":"文革",
"pinyin":"Wén gé",
"def": ["Cultural Revolution (1966-76) (abbr. for 文化大革命[Wen2 hua4 Da4 ge2 ming4])"]
},
"显示":
{"simp":"显示",
"trad":"顯示",
"pinyin":"xiǎn shì",
"def": ["to show","to illustrate","to display","to demonstrate"]
},
"机":
{"simp":"机",
"trad":"機",
"pinyin":"jī",
"def": ["machine","engine","opportunity","intention","aircraft","pivot","crucial point","flexible (quick-witted)","organic","CL:臺|台[tai2]"]
},
"爬行":
{"simp":"爬行",
"trad":"爬行",
"pinyin":"pá xíng",
"def": ["to crawl","to creep"]
},
"起":
{"simp":"起",
"trad":"起",
"pinyin":"qǐ",
"def": ["to rise","to raise","to get up","to set out","to start","to appear","to launch","to initiate (action)","to draft","to establish","to get (from a depot or counter)","verb suffix, to start","starting from (a time, place, price etc)","classifier for occurrences or unpredictable events: case, instance","classifier for groups: batch, group"]
},
"亮":
{"simp":"亮",
"trad":"亮",
"pinyin":"liàng",
"def": ["bright","clear","resonant","to shine","to show","to reveal"]
},
"翻看":
{"simp":"翻看",
"trad":"翻看",
"pinyin":"fān kàn",
"def": ["to browse","to look over (books)"]
},
"著名":
{"simp":"著名",
"trad":"著名",
"pinyin":"zhù míng",
"def": ["famous","noted","well-known","celebrated"]
},
"异样":
{"simp":"异样",
"trad":"異樣",
"pinyin":"yì yàng",
"def": ["difference","peculiar"]
},
"浑身":
{"simp":"浑身",
"trad":"渾身",
"pinyin":"hún shēn",
"def": ["all over","from head to foot"]
},
"幸运":
{"simp":"幸运",
"trad":"幸運",
"pinyin":"xìng yùn",
"def": ["fortunate","lucky","fortune","luck"]
},
"反而":
{"simp":"反而",
"trad":"反而",
"pinyin":"fǎn ér",
"def": ["instead","on the contrary","contrary (to expectations)"]
},
"背叛者":
{"simp":"背叛者",
"trad":"背叛者",
"pinyin":"bèi pàn zhě",
"def": ["traitor"]
},
"山顶":
{"simp":"山顶",
"trad":"山頂",
"pinyin":"shān dǐng",
"def": ["hilltop"]
},
"手动":
{"simp":"手动",
"trad":"手動",
"pinyin":"shǒu dòng",
"def": ["manual","manually operated","manual gear-change"]
},
"向日葵":
{"simp":"向日葵",
"trad":"向日葵",
"pinyin":"xiàng rì kuí",
"def": ["sunflower (Helianthus annuus)"]
},
"灼":
{"simp":"灼",
"trad":"灼",
"pinyin":"zhuó",
"def": ["luminous","burning","to burn","to cauterize"]
},
"内部":
{"simp":"内部",
"trad":"內部",
"pinyin":"nèi bù",
"def": ["interior","inside (part, section)","internal"]
},
"麻烦":
{"simp":"麻烦",
"trad":"麻煩",
"pinyin":"má fan",
"def": ["trouble; inconvenience","inconvenient; troublesome; annoying","to bother sb; to put sb to trouble"]
},
"端":
{"simp":"端",
"trad":"耑",
"pinyin":"duān",
"def": ["old variant of 端[duan1]","start","origin"]
},
"处于":
{"simp":"处于",
"trad":"處於",
"pinyin":"chǔ yú",
"def": ["to be in (some state, position, or condition)"]
},
"秋天":
{"simp":"秋天",
"trad":"秋天",
"pinyin":"qiū tiān",
"def": ["autumn","CL:個|个[ge4]"]
},
"掏出":
{"simp":"掏出",
"trad":"掏出",
"pinyin":"tāo chū",
"def": ["to fish out","to take out (from a pocket, bag etc)"]
},
"布置":
{"simp":"布置",
"trad":"佈置",
"pinyin":"bù zhì",
"def": ["to put in order","to arrange","to decorate","to fix up","to deploy"]
},
"总部":
{"simp":"总部",
"trad":"總部",
"pinyin":"zǒng bù",
"def": ["general headquarters"]
},
"灵魂":
{"simp":"灵魂",
"trad":"靈魂",
"pinyin":"líng hún",
"def": ["soul","spirit"]
},
"杆":
{"simp":"杆",
"trad":"桿",
"pinyin":"gǎn",
"def": ["stick","pole","lever","classifier for long objects such as guns"]
},
"心不在焉":
{"simp":"心不在焉",
"trad":"心不在焉",
"pinyin":"xīn bù zài yān",
"def": ["absent-minded","preoccupied","inattentive","with one's thoughts wandering"]
},
"如下":
{"simp":"如下",
"trad":"如下",
"pinyin":"rú xià",
"def": ["as follows"]
},
"圈":
{"simp":"圈",
"trad":"圈",
"pinyin":"quān",
"def": ["circle","ring","loop","classifier for loops, orbits, laps of race etc","CL:個|个[ge4]","to surround","to circle"]
},
"工程师":
{"simp":"工程师",
"trad":"工程師",
"pinyin":"gōng chéng shī",
"def": ["engineer","CL:個|个[ge4],位[wei4],名[ming2]"]
},
"百分之百":
{"simp":"百分之百",
"trad":"百分之百",
"pinyin":"bǎi fēn zhī bǎi",
"def": ["a hundred percent","out and out","absolutely"]
},
"射":
{"simp":"射",
"trad":"射",
"pinyin":"shè",
"def": ["to shoot","to launch","to allude to","radio- (chemistry)"]
},
"方向":
{"simp":"方向",
"trad":"方向",
"pinyin":"fāng xiàng",
"def": ["direction","orientation","path to follow","CL:個|个[ge4]"]
},
"平面":
{"simp":"平面",
"trad":"平面",
"pinyin":"píng miàn",
"def": ["plane (flat surface)","print media"]
},
"粪":
{"simp":"粪",
"trad":"糞",
"pinyin":"fèn",
"def": ["manure","dung"]
},
"专制":
{"simp":"专制",
"trad":"專制",
"pinyin":"zhuān zhì",
"def": ["autocracy","dictatorship"]
},
"达观":
{"simp":"达观",
"trad":"達觀",
"pinyin":"dá guān",
"def": ["to take things philosophically"]
},
"像":
{"simp":"像",
"trad":"像",
"pinyin":"xiàng",
"def": ["to resemble","to be like","to look as if","such as","appearance","image","portrait","image under a mapping (math.)"]
},
"省去":
{"simp":"省去",
"trad":"省去",
"pinyin":"shěng qù",
"def": ["to omit","to dispense with","to make unnecesary","to save (time, trouble etc)"]
},
"折磨":
{"simp":"折磨",
"trad":"折磨",
"pinyin":"zhé mó",
"def": ["to torment","to torture"]
},
"分配":
{"simp":"分配",
"trad":"分配",
"pinyin":"fēn pèi",
"def": ["to distribute","to assign","to allocate","to partition (a hard drive)"]
},
"照亮":
{"simp":"照亮",
"trad":"照亮",
"pinyin":"zhào liàng",
"def": ["to illuminate","to light up","lighting"]
},
"亿":
{"simp":"亿",
"trad":"億",
"pinyin":"yì",
"def": ["100 million"]
},
"苗条":
{"simp":"苗条",
"trad":"苗條",
"pinyin":"miáo tiao",
"def": ["(of a woman) slim","slender","graceful"]
},
"仇":
{"simp":"仇",
"trad":"讐",
"pinyin":"chóu",
"def": ["variant of 仇[chou2]"]
},
"决":
{"simp":"决",
"trad":"決",
"pinyin":"jué",
"def": ["to decide","to determine","to execute (sb)","(of a dam etc) to breach or burst","definitely","certainly"]
},
"回信":
{"simp":"回信",
"trad":"回信",
"pinyin":"huí xìn",
"def": ["to reply","to write back","letter written in reply","CL:封[feng1]"]
},
"试":
{"simp":"试",
"trad":"試",
"pinyin":"shì",
"def": ["to test","to try","experiment","examination","test"]
},
"办":
{"simp":"办",
"trad":"辦",
"pinyin":"bàn",
"def": ["to do","to manage","to handle","to go about","to run","to set up","to deal with"]
},
"要是":
{"simp":"要是",
"trad":"要是",
"pinyin":"yào shi",
"def": ["(coll.) if"]
},
"有可能":
{"simp":"有可能",
"trad":"有可能",
"pinyin":"yǒu kě néng",
"def": ["possible","probable","possibly","probably","may","might"]
},
"全面":
{"simp":"全面",
"trad":"全面",
"pinyin":"quán miàn",
"def": ["all-around","comprehensive","total","overall"]
},
"粒":
{"simp":"粒",
"trad":"粒",
"pinyin":"lì",
"def": ["grain","granule","classifier for small round things (peas, bullets, peanuts, pills, grains etc)"]
},
"显示屏":
{"simp":"显示屏",
"trad":"顯示屏",
"pinyin":"xiǎn shì píng",
"def": ["display screen"]
},
"大灭绝":
{"simp":"大灭绝",
"trad":"大滅絕",
"pinyin":"dà miè jué",
"def": ["mass extinction"]
},
"率":
{"simp":"率",
"trad":"率",
"pinyin":"shuài",
"def": ["to lead","to command","rash","hasty","frank","straightforward","generally","usually"]
},
"返回":
{"simp":"返回",
"trad":"返回",
"pinyin":"fǎn huí",
"def": ["to return to","to come (or go) back"]
},
"生产":
{"simp":"生产",
"trad":"生產",
"pinyin":"shēng chǎn",
"def": ["to produce","to manufacture","to give birth to a child"]
},
"职工":
{"simp":"职工",
"trad":"職工",
"pinyin":"zhí gōng",
"def": ["workers","staff","CL:個|个[ge4]"]
},
"险":
{"simp":"险",
"trad":"險",
"pinyin":"xiǎn",
"def": ["danger","dangerous","rugged"]
},
"流浪":
{"simp":"流浪",
"trad":"流浪",
"pinyin":"liú làng",
"def": ["to drift about","to wander","to roam","nomadic","homeless","unsettled (e.g. population)","vagrant"]
},
"灰蒙蒙":
{"simp":"灰蒙蒙",
"trad":"灰蒙蒙",
"pinyin":"huī mēng mēng",
"def": ["dusky","overcast (of weather)"]
},
"惊惧":
{"simp":"惊惧",
"trad":"驚懼",
"pinyin":"jīng jù",
"def": ["to be alarmed","to be terrified"]
},
"上交":
{"simp":"上交",
"trad":"上交",
"pinyin":"shàng jiāo",
"def": ["to hand over to","to give to higher authority","to seek connections in high places"]
},
"而后":
{"simp":"而后",
"trad":"而後",
"pinyin":"ér hòu",
"def": ["after that","then"]
},
"瞠目结舌":
{"simp":"瞠目结舌",
"trad":"瞠目結舌",
"pinyin":"chēng mù jié shé",
"def": ["stupefied","flabbergasted"]
},
"森":
{"simp":"森",
"trad":"森",
"pinyin":"sēn",
"def": ["forest"]
},
"摔":
{"simp":"摔",
"trad":"摔",
"pinyin":"shuāi",
"def": ["to throw down","to fall","to drop and break"]
},
"梦":
{"simp":"梦",
"trad":"夢",
"pinyin":"mèng",
"def": ["dream","CL:場|场[chang2],個|个[ge4]","(bound form) to dream"]
},
"上都":
{"simp":"上都",
"trad":"上都",
"pinyin":"Shàng dū",
"def": ["Shangdu, also known as Xanadu, summer capital of the Yuan Dynasty (1279-1368)"]
},
"要求":
{"simp":"要求",
"trad":"要求",
"pinyin":"yāo qiú",
"def": ["to request","to require","requirement","to stake a claim","to ask","to demand","CL:點|点[dian3]"]
},
"一切事物":
{"simp":"一切事物",
"trad":"一切事物",
"pinyin":"yī qiè shì wù",
"def": ["everything"]
},
"成说":
{"simp":"成说",
"trad":"成說",
"pinyin":"chéng shuō",
"def": ["accepted theory or formulation"]
},
"震撼":
{"simp":"震撼",
"trad":"震撼",
"pinyin":"zhèn hàn",
"def": ["to shake","to shock","to stun","shocking","stunning","shock"]
},
"栋":
{"simp":"栋",
"trad":"棟",
"pinyin":"dòng",
"def": ["classifier for houses or buildings","ridgepole (old)"]
},
"飘落":
{"simp":"飘落",
"trad":"飄落",
"pinyin":"piāo luò",
"def": ["to float down","to fall gently (snowflakes, leaves etc)"]
},
"不止一次":
{"simp":"不止一次",
"trad":"不止一次",
"pinyin":"bù zhǐ yī cì",
"def": ["many times","on more than one occasion"]
},
"困难":
{"simp":"困难",
"trad":"困難",
"pinyin":"kùn nan",
"def": ["difficult","challenging","straitened circumstances","difficult situation"]
},
"核武器":
{"simp":"核武器",
"trad":"核武器",
"pinyin":"hé wǔ qì",
"def": ["nuclear weapon"]
},
"尽头":
{"simp":"尽头",
"trad":"盡頭",
"pinyin":"jìn tóu",
"def": ["end","extremity","limit"]
},
"拥有":
{"simp":"拥有",
"trad":"擁有",
"pinyin":"yōng yǒu",
"def": ["to have","to possess"]
},
"要不":
{"simp":"要不",
"trad":"要不",
"pinyin":"yào bù",
"def": ["otherwise","or else","how about...?","either... (or...)"]
},
"容纳":
{"simp":"容纳",
"trad":"容納",
"pinyin":"róng nà",
"def": ["to hold","to contain","to accommodate","to tolerate (different opinions)"]
},
"实验":
{"simp":"实验",
"trad":"實驗",
"pinyin":"shí yàn",
"def": ["experiment","test","CL:個|个[ge4],次[ci4]","experimental","to experiment"]
},
"忽略":
{"simp":"忽略",
"trad":"忽略",
"pinyin":"hū lu:è",
"def": ["to neglect","to overlook","to ignore"]
},
"荒凉":
{"simp":"荒凉",
"trad":"荒涼",
"pinyin":"huāng liáng",
"def": ["desolate"]
},
"摘":
{"simp":"摘",
"trad":"摘",
"pinyin":"zhāi",
"def": ["to take","to borrow","to pick (flowers, fruit etc)","to pluck","to select","to remove","to take off (glasses, hat etc)"]
},
"不容":
{"simp":"不容",
"trad":"不容",
"pinyin":"bù róng",
"def": ["must not","cannot","to not allow","cannot tolerate"]
},
"拨开":
{"simp":"拨开",
"trad":"撥開",
"pinyin":"bō kāi",
"def": ["to push aside","to part","to brush away"]
},
"干校":
{"simp":"干校",
"trad":"幹校",
"pinyin":"gàn xiào",
"def": ["school for cadres","May 7 Cadre School 五七幹校|五七干校[Wu3 Qi1 Gan4 xiao4]"]
},
"偏执":
{"simp":"偏执",
"trad":"偏執",
"pinyin":"piān zhí",
"def": ["prejudice","bigotry"]
},
"不自在":
{"simp":"不自在",
"trad":"不自在",
"pinyin":"bù zì zai",
"def": ["uneasy","ill at ease"]
},
"分成":
{"simp":"分成",
"trad":"分成",
"pinyin":"fēn chéng",
"def": ["to divide (into)","to split a bonus","to break into","tenths","percentage allotment"]
},
"理":
{"simp":"理",
"trad":"理",
"pinyin":"lǐ",
"def": ["texture","grain (of wood)","inner essence","intrinsic order","reason","logic","truth","science","natural science (esp. physics)","to manage","to pay attention to","to run (affairs)","to handle","to put in order","to tidy up"]
},
"书":
{"simp":"书",
"trad":"書",
"pinyin":"shū",
"def": ["book","letter","document","CL:本[ben3],冊|册[ce4],部[bu4]","to write"]
},
"遭到":
{"simp":"遭到",
"trad":"遭到",
"pinyin":"zāo dào",
"def": ["to suffer","to meet with (sth unfortunate)"]
},
"准备":
{"simp":"准备",
"trad":"準備",
"pinyin":"zhǔn bèi",
"def": ["preparation","to prepare","to intend","to be about to","reserve (fund)"]
},
"说出":
{"simp":"说出",
"trad":"說出",
"pinyin":"shuō chū",
"def": ["to speak out","to declare (one's view)"]
},
"事实上":
{"simp":"事实上",
"trad":"事實上",
"pinyin":"shì shí shàng",
"def": ["in fact","in reality","actually","as a matter of fact","de facto","ipso facto"]
},
"年前":
{"simp":"年前",
"trad":"年前",
"pinyin":"nián qián",
"def": ["before the end of the year","before the new year"]
},
"养":
{"simp":"养",
"trad":"養",
"pinyin":"yǎng",
"def": ["to raise (animals)","to bring up (children)","to keep (pets)","to support","to give birth"]
},
"资格":
{"simp":"资格",
"trad":"資格",
"pinyin":"zī gé",
"def": ["qualifications","seniority"]
},
"一头":
{"simp":"一头",
"trad":"一頭",
"pinyin":"yī tóu",
"def": ["one head","a head full of sth","one end (of a stick)","one side","headlong","directly","rapidly","simultaneously"]
},
"睡":
{"simp":"睡",
"trad":"睡",
"pinyin":"shuì",
"def": ["to sleep","to lie down"]
},
"方法":
{"simp":"方法",
"trad":"方法",
"pinyin":"fāng fǎ",
"def": ["method","way","means","CL:個|个[ge4]"]
},
"等待":
{"simp":"等待",
"trad":"等待",
"pinyin":"děng dài",
"def": ["to wait","to wait for"]
},
"过去":
{"simp":"过去",
"trad":"過去",
"pinyin":"guò qu",
"def": ["(verb suffix)"]
},
"滔":
{"simp":"滔",
"trad":"滔",
"pinyin":"tāo",
"def": ["overflow","torrent-dash"]
},
"小心":
{"simp":"小心",
"trad":"小心",
"pinyin":"xiǎo xīn",
"def": ["to be careful","to take care"]
},
"岔":
{"simp":"岔",
"trad":"岔",
"pinyin":"chà",
"def": ["fork in road","bifurcation","branch in road, river, mountain range etc","to branch off","to turn off","to diverge","to stray (from the path)","to change the subject","to interrupt","to stagger (times)"]
},
"起航":
{"simp":"起航",
"trad":"起航",
"pinyin":"qǐ háng",
"def": ["(of a ship) to set sail","(of an aeroplane) to take off","also written 啟航|启航[qi3 hang2]"]
},
"感慨":
{"simp":"感慨",
"trad":"感慨",
"pinyin":"gǎn kǎi",
"def": ["to sigh with sorrow, regret etc","rueful","deeply moved"]
},
"部门":
{"simp":"部门",
"trad":"部門",
"pinyin":"bù mén",
"def": ["department","branch","section","division","CL:個|个[ge4]"]
},
"就是说":
{"simp":"就是说",
"trad":"就是說",
"pinyin":"jiù shì shuō",
"def": ["in other words","that is"]
},
"渠道":
{"simp":"渠道",
"trad":"渠道",
"pinyin":"qú dào",
"def": ["irrigation ditch","(fig.) channel","means"]
},
"年代":
{"simp":"年代",
"trad":"年代",
"pinyin":"nián dài",
"def": ["a decade of a century (e.g. the Sixties)","age","era","period","CL:個|个[ge4]"]
},
"估计":
{"simp":"估计",
"trad":"估計",
"pinyin":"gū jì",
"def": ["to estimate","to reckon","CL:個|个[ge4]","(coll.) to suppose"]
},
"取得":
{"simp":"取得",
"trad":"取得",
"pinyin":"qǔ dé",
"def": ["to acquire","to get","to obtain"]
},
"经过":
{"simp":"经过",
"trad":"經過",
"pinyin":"jīng guò",
"def": ["to pass","to go through","process","course","CL:個|个[ge4]"]
},
"波形":
{"simp":"波形",
"trad":"波形",
"pinyin":"bō xíng",
"def": ["wave form"]
},
"设定":
{"simp":"设定",
"trad":"設定",
"pinyin":"shè dìng",
"def": ["to set","to set up","to install","setting","preferences"]
},
"通信卫星":
{"simp":"通信卫星",
"trad":"通信衛星",
"pinyin":"tōng xìn wèi xīng",
"def": ["communications satellite"]
},
"得出":
{"simp":"得出",
"trad":"得出",
"pinyin":"dé chū",
"def": ["to obtain (results)","to arrive at (a conclusion)"]
},
"能级":
{"simp":"能级",
"trad":"能級",
"pinyin":"néng jí",
"def": ["energy level"]
},
"称得上":
{"simp":"称得上",
"trad":"稱得上",
"pinyin":"chēng de shàng",
"def": ["can be counted as"]
},
"刻骨":
{"simp":"刻骨",
"trad":"刻骨",
"pinyin":"kè gǔ",
"def": ["ingrained","entrenched","deep-rooted"]
},
"激动":
{"simp":"激动",
"trad":"激動",
"pinyin":"jī dòng",
"def": ["to move emotionally","to stir up (emotions)","to excite"]
},
"挡住":
{"simp":"挡住",
"trad":"擋住",
"pinyin":"dǎng zhù",
"def": ["to obstruct"]
},
"功率":
{"simp":"功率",
"trad":"功率",
"pinyin":"gōng lù:",
"def": ["rate of work","power (output)"]
},
"皮":
{"simp":"皮",
"trad":"皮",
"pinyin":"pí",
"def": ["leather","skin","fur","CL:張|张[zhang1]","pico- (one trillionth)","naughty"]
},
"向前":
{"simp":"向前",
"trad":"向前",
"pinyin":"xiàng qián",
"def": ["forward","onward"]
},
"玄乎":
{"simp":"玄乎",
"trad":"玄乎",
"pinyin":"xuán hū",
"def": ["unreliable","incredible"]
},
"有机物":
{"simp":"有机物",
"trad":"有機物",
"pinyin":"yǒu jī wù",
"def": ["organic substance","organic matter"]
},
"飘忽不定":
{"simp":"飘忽不定",
"trad":"飄忽不定",
"pinyin":"piāo hū bù dìng",
"def": ["to drift without a resting place (idiom)","roving","errant","vagrant","erratic"]
},
"之上":
{"simp":"之上",
"trad":"之上",
"pinyin":"zhī shàng",
"def": ["above"]
},
"偏见":
{"simp":"偏见",
"trad":"偏見",
"pinyin":"piān jiàn",
"def": ["prejudice","bias"]
},
"不息":
{"simp":"不息",
"trad":"不息",
"pinyin":"bù xī",
"def": ["continually","without a break","ceaselessly"]
},
"山下":
{"simp":"山下",
"trad":"山下",
"pinyin":"Shān xià",
"def": ["Yamashita (Japanese surname)"]
},
"桌子":
{"simp":"桌子",
"trad":"桌子",
"pinyin":"zhuō zi",
"def": ["table","desk","CL:張|张[zhang1],套[tao4]"]
},
"演绎":
{"simp":"演绎",
"trad":"演繹",
"pinyin":"yǎn yì",
"def": ["(of a story etc) to unfold","to play out","to develop (a technique etc)","to enact","(logic) to deduce","to infer"]
},
"屏蔽":
{"simp":"屏蔽",
"trad":"屏蔽",
"pinyin":"píng bì",
"def": ["to screen","to block (sth or sb)","to shield","(protective) shield"]
},
"原因":
{"simp":"原因",
"trad":"原因",
"pinyin":"yuán yīn",
"def": ["cause","origin","root cause","reason","CL:個|个[ge4]"]
},
"心中":
{"simp":"心中",
"trad":"心中",
"pinyin":"xīn zhōng",
"def": ["central point","in one's thoughts","in one's heart"]
},
"高":
{"simp":"高",
"trad":"高",
"pinyin":"gāo",
"def": ["high","tall","above average","loud","your (honorific)"]
},
"为什么":
{"simp":"为什么",
"trad":"為什麼",
"pinyin":"wèi shén me",
"def": ["why?","for what reason?"]
},
"推托":
{"simp":"推托",
"trad":"推托",
"pinyin":"tuī tuō",
"def": ["to make excuses","to give an excuse (for not doing something)"]
},
"另一":
{"simp":"另一",
"trad":"另一",
"pinyin":"lìng yī",
"def": ["another","the other"]
},
"绝大部分":
{"simp":"绝大部分",
"trad":"絕大部分",
"pinyin":"jué dà bù fen",
"def": ["overwhelming majority"]
},
"溢出":
{"simp":"溢出",
"trad":"溢出",
"pinyin":"yì chū",
"def": ["to overflow","to spill over","(computing) overflow"]
},
"同一":
{"simp":"同一",
"trad":"同一",
"pinyin":"tóng yī",
"def": ["identical","the same"]
},
"无线电波":
{"simp":"无线电波",
"trad":"無線電波",
"pinyin":"wú xiàn diàn bō",
"def": ["radio waves","wireless electric wave"]
},
"传回":
{"simp":"传回",
"trad":"傳回",
"pinyin":"chuán huí",
"def": ["to send back"]
},
"又":
{"simp":"又",
"trad":"又",
"pinyin":"yòu",
"def": ["(once) again","also","both... and...","and yet","(used for emphasis) anyway"]
},
"八":
{"simp":"八",
"trad":"八",
"pinyin":"bā",
"def": ["eight","8"]
},
"进而":
{"simp":"进而",
"trad":"進而",
"pinyin":"jìn ér",
"def": ["and then (what follows next)"]
},
"少数":
{"simp":"少数",
"trad":"少數",
"pinyin":"shǎo shù",
"def": ["small number","few","minority"]
},
"接过":
{"simp":"接过",
"trad":"接過",
"pinyin":"jiē guò",
"def": ["to take (sth proffered)"]
},
"回复":
{"simp":"回复",
"trad":"回復",
"pinyin":"huí fù",
"def": ["to reply","to recover","to return (to a previous condition)","Re: in reply to (email)"]
},
"种种":
{"simp":"种种",
"trad":"種種",
"pinyin":"zhǒng zhǒng",
"def": ["all kinds of"]
},
"每时每刻":
{"simp":"每时每刻",
"trad":"每時每刻",
"pinyin":"měi shí měi kè",
"def": ["at all times","at every moment"]
},
"与":
{"simp":"与",
"trad":"與",
"pinyin":"yù",
"def": ["to take part in"]
},
"差分":
{"simp":"差分",
"trad":"差分",
"pinyin":"chā fēn",
"def": ["(math.) increment","difference","(engineering) differential"]
},
"强度":
{"simp":"强度",
"trad":"強度",
"pinyin":"qiáng dù",
"def": ["strength","intensity","CL:個|个[ge4]"]
},
"通讯":
{"simp":"通讯",
"trad":"通訊",
"pinyin":"tōng xùn",
"def": ["communications","news story","dispatch","CL:個|个[ge4]"]
},
"观察":
{"simp":"观察",
"trad":"觀察",
"pinyin":"guān chá",
"def": ["to observe","to watch","to survey","to examine","observation","view","perspective","CL:個|个[ge4]"]
},
"星条旗":
{"simp":"星条旗",
"trad":"星條旗",
"pinyin":"xīng tiáo qí",
"def": ["Stars and Stripes, the flag of the United States"]
},
"猜想":
{"simp":"猜想",
"trad":"猜想",
"pinyin":"cāi xiǎng",
"def": ["to guess","to conjecture","to suppose","to suspect"]
},
"早就":
{"simp":"早就",
"trad":"早就",
"pinyin":"zǎo jiù",
"def": ["already at an earlier time"]
},
"初步":
{"simp":"初步",
"trad":"初步",
"pinyin":"chū bù",
"def": ["initial","preliminary","tentative"]
},
"斟酌":
{"simp":"斟酌",
"trad":"斟酌",
"pinyin":"zhēn zhuó",
"def": ["to consider","to deliberate","to fill up a cup to the brim"]
},
"中产":
{"simp":"中产",
"trad":"中產",
"pinyin":"zhōng chǎn",
"def": ["middle class","bourgeois"]
},
"小岛":
{"simp":"小岛",
"trad":"小島",
"pinyin":"xiǎo dǎo",
"def": ["isle"]
},
"头脑":
{"simp":"头脑",
"trad":"頭腦",
"pinyin":"tóu nǎo",
"def": ["brains","mind","skull","(fig.) gist (of a matter)","leader","boss"]
},
"有责任":
{"simp":"有责任",
"trad":"有責任",
"pinyin":"yǒu zé rèn",
"def": ["liable","responsible"]
},
"答应":
{"simp":"答应",
"trad":"答應",
"pinyin":"dā ying",
"def": ["to answer; to respond","to answer positively; to agree; to accept; to promise"]
},
"新北":
{"simp":"新北",
"trad":"新北",
"pinyin":"Xīn běi",
"def": ["Xinbei district of Changzhou city 常州市[Chang2 zhou1 shi4], Jiangsu","Hsinpei or New Taipei city in north Taiwan"]
},
"目眩":
{"simp":"目眩",
"trad":"目眩",
"pinyin":"mù xuàn",
"def": ["dizzy","dazzled"]
},
"难以":
{"simp":"难以",
"trad":"難以",
"pinyin":"nán yǐ",
"def": ["hard to (predict, imagine etc)"]
},
"相":
{"simp":"相",
"trad":"相",
"pinyin":"xiàng",
"def": ["appearance","portrait","picture","government minister","(physics) phase","(literary) to appraise (esp. by scrutinizing physical features)","to read sb's fortune (by physiognomy, palmistry etc)"]
},
"最初":
{"simp":"最初",
"trad":"最初",
"pinyin":"zuì chū",
"def": ["first","primary","initial","original","at first","initially","originally"]
},
"离奇":
{"simp":"离奇",
"trad":"離奇",
"pinyin":"lí qí",
"def": ["odd","bizarre"]
},
"装饰":
{"simp":"装饰",
"trad":"裝飾",
"pinyin":"zhuāng shì",
"def": ["to decorate","decoration","decorative","ornamental"]
},
"一同":
{"simp":"一同",
"trad":"一同",
"pinyin":"yī tóng",
"def": ["along","together"]
},
"谜":
{"simp":"谜",
"trad":"謎",
"pinyin":"mí",
"def": ["riddle"]
},
"孕育":
{"simp":"孕育",
"trad":"孕育",
"pinyin":"yùn yù",
"def": ["to be pregnant","to produce offspring","to nurture (a development, school of thought, artwork etc)","fig. replete with (culture etc)"]
},
"特性":
{"simp":"特性",
"trad":"特性",
"pinyin":"tè xìng",
"def": ["property","characteristic"]
},
"发生":
{"simp":"发生",
"trad":"發生",
"pinyin":"fā shēng",
"def": ["to happen","to occur","to take place","to break out"]
},
"死去":
{"simp":"死去",
"trad":"死去",
"pinyin":"sǐ qù",
"def": ["to die"]
},
"认出":
{"simp":"认出",
"trad":"認出",
"pinyin":"rèn chū",
"def": ["recognition","to recognize"]
},
"增益":
{"simp":"增益",
"trad":"增益",
"pinyin":"zēng yì",
"def": ["to increase","gain (electronics)","(gaming) buff"]
},
"甚至":
{"simp":"甚至",
"trad":"甚至",
"pinyin":"shèn zhì",
"def": ["even","so much so that"]
},
"电浆":
{"simp":"电浆",
"trad":"電漿",
"pinyin":"diàn jiāng",
"def": ["plasma (physics)"]
},
"暗想":
{"simp":"暗想",
"trad":"暗想",
"pinyin":"àn xiǎng",
"def": ["think to oneself"]
},
"凑近":
{"simp":"凑近",
"trad":"湊近",
"pinyin":"còu jìn",
"def": ["to approach","to lean close to"]
},
"反射":
{"simp":"反射",
"trad":"反射",
"pinyin":"fǎn shè",
"def": ["to reflect","reflection (from a mirror etc)","reflex (i.e. automatic reaction of organism)"]
},
"将来":
{"simp":"将来",
"trad":"將來",
"pinyin":"jiāng lái",
"def": ["in the future","future","the future","CL:個|个[ge4]"]
},
"瘦小":
{"simp":"瘦小",
"trad":"瘦小",
"pinyin":"shòu xiǎo",
"def": ["slightly-built","petite"]
},
"冒昧":
{"simp":"冒昧",
"trad":"冒昧",
"pinyin":"mào mèi",
"def": ["bold","presumptuous","to take the liberty of"]
},
"传统":
{"simp":"传统",
"trad":"傳統",
"pinyin":"chuán tǒng",
"def": ["tradition","traditional","convention","conventional","CL:個|个[ge4]"]
},
"等级":
{"simp":"等级",
"trad":"等級",
"pinyin":"děng jí",
"def": ["grade","rank","status"]
},
"然而":
{"simp":"然而",
"trad":"然而",
"pinyin":"rán ér",
"def": ["however","yet","but"]
},
"细致":
{"simp":"细致",
"trad":"細緻",
"pinyin":"xì zhì",
"def": ["delicate","fine","careful","meticulous","painstaking"]
},
"笼罩":
{"simp":"笼罩",
"trad":"籠罩",
"pinyin":"lǒng zhào",
"def": ["to envelop","to shroud"]
},
"增长":
{"simp":"增长",
"trad":"增長",
"pinyin":"zēng zhǎng",
"def": ["to grow","to increase"]
},
"有所不同":
{"simp":"有所不同",
"trad":"有所不同",
"pinyin":"yǒu suǒ bù tóng",
"def": ["to differ to some extent (idiom)"]
},
"钟":
{"simp":"钟",
"trad":"鐘",
"pinyin":"zhōng",
"def": ["clock","o'clock","time as measured in hours and minutes","bell","CL:架[jia4],座[zuo4]"]
},
"水上":
{"simp":"水上",
"trad":"水上",
"pinyin":"shuǐ shàng",
"def": ["on water","aquatic"]
},
"极":
{"simp":"极",
"trad":"極",
"pinyin":"jí",
"def": ["extremely","pole (geography, physics)","utmost","top"]
},
"千年":
{"simp":"千年",
"trad":"千年",
"pinyin":"qiān nián",
"def": ["millennium"]
},
"分子":
{"simp":"分子",
"trad":"分子",
"pinyin":"fèn zi",
"def": ["Taiwan variant of 份子[fen4 zi5]"]
},
"脱离":
{"simp":"脱离",
"trad":"脫離",
"pinyin":"tuō lí",
"def": ["to separate oneself from","to break away from","diastasis (medicine)","abscission","abjunction (botany)"]
},
"蝴蝶":
{"simp":"蝴蝶",
"trad":"蝴蝶",
"pinyin":"hú dié",
"def": ["butterfly","CL:隻|只[zhi1]"]
},
"荒漠":
{"simp":"荒漠",
"trad":"荒漠",
"pinyin":"huāng mò",
"def": ["desert; desolate wilderness; barren wasteland","vast and desolate"]
},
"光子":
{"simp":"光子",
"trad":"光子",
"pinyin":"guāng zǐ",
"def": ["photon (particle physics)"]
},
"实现":
{"simp":"实现",
"trad":"實現",
"pinyin":"shí xiàn",
"def": ["to achieve","to implement","to realize","to bring about"]
},
"物理学":
{"simp":"物理学",
"trad":"物理學",
"pinyin":"wù lǐ xué",
"def": ["physics"]
},
"前者":
{"simp":"前者",
"trad":"前者",
"pinyin":"qián zhě",
"def": ["the former"]
},
"吸收":
{"simp":"吸收",
"trad":"吸收",
"pinyin":"xī shōu",
"def": ["to absorb","to assimilate","to ingest","to recruit"]
},
"斜":
{"simp":"斜",
"trad":"斜",
"pinyin":"xié",
"def": ["inclined","slanting","oblique","tilting"]
},
"淹死":
{"simp":"淹死",
"trad":"淹死",
"pinyin":"yān sǐ",
"def": ["to drown"]
},
"第一线":
{"simp":"第一线",
"trad":"第一線",
"pinyin":"dì yī xiàn",
"def": ["front line","forefront"]
},
"类地行星":
{"simp":"类地行星",
"trad":"類地行星",
"pinyin":"lèi dì xíng xīng",
"def": ["terrestrial planet"]
},
"义":
{"simp":"义",
"trad":"義",
"pinyin":"yì",
"def": ["justice","righteousness","meaning","foster (father etc)","adopted","artificial (tooth, limb etc)","relationship","friendship"]
},
"区":
{"simp":"区",
"trad":"區",
"pinyin":"qū",
"def": ["area","region","district","small","distinguish","CL:個|个[ge4]"]
},
"携带":
{"simp":"携带",
"trad":"攜帶",
"pinyin":"xié dài",
"def": ["to carry (on one's person)","to support (old)","Taiwan pr. [xi1 dai4]"]
},
"镜":
{"simp":"镜",
"trad":"鏡",
"pinyin":"jìng",
"def": ["mirror","lens"]
},
"好半天":
{"simp":"好半天",
"trad":"好半天",
"pinyin":"hǎo bàn tiān",
"def": ["most of the day"]
},
"回忆":
{"simp":"回忆",
"trad":"回憶",
"pinyin":"huí yì",
"def": ["to recall","memories","CL:個|个[ge4]"]
},
"抗菌素":
{"simp":"抗菌素",
"trad":"抗菌素",
"pinyin":"kàng jūn sù",
"def": ["antibiotic"]
},
"高能粒子":
{"simp":"高能粒子",
"trad":"高能粒子",
"pinyin":"gāo néng lì zǐ",
"def": ["high energy particle"]
},
"两者":
{"simp":"两者",
"trad":"兩者",
"pinyin":"liǎng zhě",
"def": ["both sides"]
},
"烧焦":
{"simp":"烧焦",
"trad":"燒焦",
"pinyin":"shāo jiāo",
"def": ["to burn","to scorch","burned","burning","scorched","charred"]
},
"胡言乱语":
{"simp":"胡言乱语",
"trad":"胡言亂語",
"pinyin":"hú yán luàn yǔ",
"def": ["babbling nonsense (idiom); crazy and unfounded ravings","double Dutch"]
},
"上分":
{"simp":"上分",
"trad":"上分",
"pinyin":"shàng fēn",
"def": ["(coll.) (gaming) to progress to the next level","to level up"]
},
"元件":
{"simp":"元件",
"trad":"元件",
"pinyin":"yuán jiàn",
"def": ["element","component"]
},
"大大":
{"simp":"大大",
"trad":"大大",
"pinyin":"dà dà",
"def": ["greatly","enormously","(dialect) dad","uncle"]
},
"罗":
{"simp":"罗",
"trad":"羅",
"pinyin":"luó",
"def": ["gauze","to collect","to gather","to catch","to sift"]
},
"弦":
{"simp":"弦",
"trad":"弦",
"pinyin":"xián",
"def": ["bow string","string of musical instrument","watchspring","chord (segment of curve)","hypotenuse","CL:根[gen1]"]
},
"心灵":
{"simp":"心灵",
"trad":"心靈",
"pinyin":"xīn líng",
"def": ["bright","smart","quick-witted","heart","thoughts","spirit"]
},
"游轮":
{"simp":"游轮",
"trad":"遊輪",
"pinyin":"yóu lún",
"def": ["cruise ship"]
},
"黑板":
{"simp":"黑板",
"trad":"黑板",
"pinyin":"hēi bǎn",
"def": ["blackboard","CL:塊|块[kuai4],個|个[ge4]"]
},
"平息":
{"simp":"平息",
"trad":"平息",
"pinyin":"píng xī",
"def": ["to settle (a dispute)","to quieten down","to suppress"]
},
"为主":
{"simp":"为主",
"trad":"為主",
"pinyin":"wéi zhǔ",
"def": ["to rely mainly on","to attach most importance to"]
},
"下午":
{"simp":"下午",
"trad":"下午",
"pinyin":"xià wǔ",
"def": ["afternoon","CL:個|个[ge4]","p.m."]
},
"犹豫":
{"simp":"犹豫",
"trad":"猶豫",
"pinyin":"yóu yù",
"def": ["to hesitate"]
},
"分":
{"simp":"分",
"trad":"分",
"pinyin":"fèn",
"def": ["part","share","ingredient","component"]
},
"学术":
{"simp":"学术",
"trad":"學術",
"pinyin":"xué shù",
"def": ["learning","science","academic","CL:個|个[ge4]"]
},
"日期":
{"simp":"日期",
"trad":"日期",
"pinyin":"rì qī",
"def": ["date","CL:個|个[ge4]"]
},
"记得":
{"simp":"记得",
"trad":"記得",
"pinyin":"jì de",
"def": ["to remember"]
},
"复杂":
{"simp":"复杂",
"trad":"複雜",
"pinyin":"fù zá",
"def": ["complicated","complex"]
},
"归结":
{"simp":"归结",
"trad":"歸結",
"pinyin":"guī jié",
"def": ["to sum up; to conclude; to put in a nutshell","conclusion; end (of a story etc)"]
},
"火焰":
{"simp":"火焰",
"trad":"火焰",
"pinyin":"huǒ yàn",
"def": ["blaze","flame"]
},
"轮子":
{"simp":"轮子",
"trad":"輪子",
"pinyin":"lún zi",
"def": ["wheel","(derog.) Falun Gong practitioner","CL:個|个[ge4]"]
},
"粗细":
{"simp":"粗细",
"trad":"粗細",
"pinyin":"cū xì",
"def": ["thick and thin","coarse and fine","thickness (caliber)","coarseness","quality of work"]
},
"与世隔绝":
{"simp":"与世隔绝",
"trad":"與世隔絕",
"pinyin":"yǔ shì gé jué",
"def": ["to be cut off from the rest of the world (idiom)"]
},
"公里":
{"simp":"公里",
"trad":"公里",
"pinyin":"gōng lǐ",
"def": ["kilometer"]
},
"重要":
{"simp":"重要",
"trad":"重要",
"pinyin":"zhòng yào",
"def": ["important","significant","major"]
},
"就是":
{"simp":"就是",
"trad":"就是",
"pinyin":"jiù shì",
"def": ["(emphasizes that sth is precisely or exactly as stated)","precisely","exactly","even","if","just like","in the same way as"]
},
"密":
{"simp":"密",
"trad":"密",
"pinyin":"mì",
"def": ["secret","confidential","close","thick","dense"]
},
"看似":
{"simp":"看似",
"trad":"看似",
"pinyin":"kàn sì",
"def": ["to look as if","to seem"]
},
"片断":
{"simp":"片断",
"trad":"片斷",
"pinyin":"piàn duàn",
"def": ["section","fragment","segment"]
},
"斑斑":
{"simp":"斑斑",
"trad":"斑斑",
"pinyin":"bān bān",
"def": ["full of stains or spots"]
},
"朝着":
{"simp":"朝着",
"trad":"朝著",
"pinyin":"cháo zhe",
"def": ["facing","advancing (towards)"]
},
"反面":
{"simp":"反面",
"trad":"反面",
"pinyin":"fǎn miàn",
"def": ["reverse side","backside","the other side (of a problem etc)","negative","bad"]
},
"后台":
{"simp":"后台",
"trad":"後台",
"pinyin":"hòu tái",
"def": ["backstage area","behind-the-scenes supporter","(computing) back-end","background"]
},
"下课":
{"simp":"下课",
"trad":"下課",
"pinyin":"xià kè",
"def": ["to finish class","to get out of class","(fig.) (esp. of a sports coach) to be dismissed","to be fired"]
},
"齐":
{"simp":"齐",
"trad":"齊",
"pinyin":"qí",
"def": ["neat","even","level with","identical","simultaneous","all together","to even sth out"]
},
"北美":
{"simp":"北美",
"trad":"北美",
"pinyin":"Běi měi",
"def": ["North America"]
},
"草":
{"simp":"草",
"trad":"草",
"pinyin":"cào",
"def": ["variant of 肏[cao4]"]
},
"整条":
{"simp":"整条",
"trad":"整條",
"pinyin":"zhěng tiáo",
"def": ["entire","whole (fish, road etc)"]
},
"半":
{"simp":"半",
"trad":"半",
"pinyin":"bàn",
"def": ["half","semi-","incomplete","(after a number) and a half"]
},
"延伸":
{"simp":"延伸",
"trad":"延伸",
"pinyin":"yán shēn",
"def": ["to extend","to spread"]
},
"大兴":
{"simp":"大兴",
"trad":"大興",
"pinyin":"dà xīng",
"def": ["to go in for something in a big way","to undertake on a large scale"]
},
"不愿":
{"simp":"不愿",
"trad":"不願",
"pinyin":"bù yuàn",
"def": ["unwilling","unwillingness"]
},
"面":
{"simp":"面",
"trad":"麵",
"pinyin":"miàn",
"def": ["flour","noodles","(of food) soft (not crunchy)","(slang) (of a person) ineffectual","spineless"]
},
"在行":
{"simp":"在行",
"trad":"在行",
"pinyin":"zài háng",
"def": ["to be adept at sth","to be an expert in a trade or profession"]
},
"补发":
{"simp":"补发",
"trad":"補發",
"pinyin":"bǔ fā",
"def": ["to supply again (sth lost)","to reissue","to pay retroactively"]
},
"十四":
{"simp":"十四",
"trad":"十四",
"pinyin":"shí sì",
"def": ["fourteen","14"]
},
"某些":
{"simp":"某些",
"trad":"某些",
"pinyin":"mǒu xiē",
"def": ["some","certain (things)"]
},
"移民":
{"simp":"移民",
"trad":"移民",
"pinyin":"yí mín",
"def": ["to immigrate","to migrate","emigrant","immigrant"]
},
"复苏":
{"simp":"复苏",
"trad":"復蘇",
"pinyin":"fù sū",
"def": ["variant of 復甦|复苏[fu4 su1]","to recover (health, economic)","to resuscitate","anabiosis"]
},
"射电":
{"simp":"射电",
"trad":"射電",
"pinyin":"shè diàn",
"def": ["radio wave (astronomy)"]
},
"比起":
{"simp":"比起",
"trad":"比起",
"pinyin":"bǐ qǐ",
"def": ["compared with"]
},
"说":
{"simp":"说",
"trad":"説",
"pinyin":"shuō",
"def": ["variant of 說|说[shuo1]"]
},
"冒着":
{"simp":"冒着",
"trad":"冒著",
"pinyin":"mào zhe",
"def": ["to brave","to face dangers"]
},
"形状":
{"simp":"形状",
"trad":"形狀",
"pinyin":"xíng zhuàng",
"def": ["form","shape","CL:個|个[ge4]"]
},
"每次":
{"simp":"每次",
"trad":"每次",
"pinyin":"měi cì",
"def": ["every time"]
},
"只好":
{"simp":"只好",
"trad":"只好",
"pinyin":"zhǐ hǎo",
"def": ["without any better option","to have to","to be forced to"]
},
"它":
{"simp":"它",
"trad":"它",
"pinyin":"tā",
"def": ["it"]
},
"这":
{"simp":"这",
"trad":"這",
"pinyin":"zhè",
"def": ["this","these","(commonly pr. [zhei4] before a classifier, esp. in Beijing)"]
},
"遇到":
{"simp":"遇到",
"trad":"遇到",
"pinyin":"yù dào",
"def": ["to meet","to run into","to come across"]
},
"导致":
{"simp":"导致",
"trad":"導致",
"pinyin":"dǎo zhì",
"def": ["to lead to","to create","to cause","to bring about"]
},
"批":
{"simp":"批",
"trad":"批",
"pinyin":"pī",
"def": ["to ascertain","to act on","to criticize","to pass on","classifier for batches, lots, military flights","tier (for the ranking of universities and colleges)"]
},
"光年":
{"simp":"光年",
"trad":"光年",
"pinyin":"guāng nián",
"def": ["light-year"]
},
"公布":
{"simp":"公布",
"trad":"公佈",
"pinyin":"gōng bù",
"def": ["to announce","to make public","to publish"]
},
"流逝":
{"simp":"流逝",
"trad":"流逝",
"pinyin":"liú shì",
"def": ["(of time) to pass","to elapse"]
},
"招":
{"simp":"招",
"trad":"招",
"pinyin":"zhāo",
"def": ["to recruit","to provoke","to beckon","to incur","to infect","contagious","a move (chess)","a maneuver","device","trick","to confess"]
},
"大于":
{"simp":"大于",
"trad":"大於",
"pinyin":"dà yú",
"def": ["greater than","bigger than","more than, >"]
},
"途中":
{"simp":"途中",
"trad":"途中",
"pinyin":"tú zhōng",
"def": ["en route"]
},
"蛛丝马迹":
{"simp":"蛛丝马迹",
"trad":"蛛絲馬跡",
"pinyin":"zhū sī mǎ jì",
"def": ["lit. spider's thread and horse track","tiny hints (of a secret)","traces","clue"]
},
"体操运动员":
{"simp":"体操运动员",
"trad":"體操運動員",
"pinyin":"tǐ cāo yùn dòng yuán",
"def": ["gymnast"]
},
"值夜":
{"simp":"值夜",
"trad":"值夜",
"pinyin":"zhí yè",
"def": ["on night duty"]
},
"扣":
{"simp":"扣",
"trad":"釦",
"pinyin":"kòu",
"def": ["button"]
},
"幻想":
{"simp":"幻想",
"trad":"幻想",
"pinyin":"huàn xiǎng",
"def": ["delusion","fantasy"]
},
"第一声":
{"simp":"第一声",
"trad":"第一聲",
"pinyin":"dì yī shēng",
"def": ["first tone in Mandarin","high, level tone"]
},
"想法":
{"simp":"想法",
"trad":"想法",
"pinyin":"xiǎng fǎ",
"def": ["way of thinking","opinion","notion","to think of a way (to do sth)","CL:個|个[ge4]"]
},
"哈里":
{"simp":"哈里",
"trad":"哈里",
"pinyin":"Hā lǐ",
"def": ["Harry or Hari (name)"]
},
"所有":
{"simp":"所有",
"trad":"所有",
"pinyin":"suǒ yǒu",
"def": ["all","to have; to possess; to own"]
},
"一条道走到黑":
{"simp":"一条道走到黑",
"trad":"一條道走到黑",
"pinyin":"yī tiáo dào zǒu dào hēi",
"def": ["to stick to one's ways","to cling to one's course"]
},
"幸福":
{"simp":"幸福",
"trad":"幸福",
"pinyin":"xìng fú",
"def": ["happiness","happy","blessed"]
},
"居然":
{"simp":"居然",
"trad":"居然",
"pinyin":"jū rán",
"def": ["unexpectedly","to one's surprise","go so far as to"]
},
"档":
{"simp":"档",
"trad":"檔",
"pinyin":"dàng",
"def": ["official records","grade (of goods)","file","records","shelves","slot","gap","crosspiece","classifier for crosspieces","classifier for events, affairs etc","Taiwan pr. [dang3]"]
},
"主机":
{"simp":"主机",
"trad":"主機",
"pinyin":"zhǔ jī",
"def": ["main engine","(military) lead aircraft","(computing) host computer","main processor","server"]
},
"下降":
{"simp":"下降",
"trad":"下降",
"pinyin":"xià jiàng",
"def": ["to decline","to drop","to fall","to go down","to decrease"]
},
"极好":
{"simp":"极好",
"trad":"極好",
"pinyin":"jí hǎo",
"def": ["fabulous","superb","excellent"]
},
"山":
{"simp":"山",
"trad":"山",
"pinyin":"shān",
"def": ["mountain","hill","anything that resembles a mountain","CL:座[zuo4]","bundled straw in which silkworms spin cocoons","gable"]
},
"短讯":
{"simp":"短讯",
"trad":"短訊",
"pinyin":"duǎn xùn",
"def": ["SMS","text message"]
},
"右":
{"simp":"右",
"trad":"右",
"pinyin":"yòu",
"def": ["right (-hand)","the Right (politics)","west (old)"]
},
"关于":
{"simp":"关于",
"trad":"關於",
"pinyin":"guān yú",
"def": ["pertaining to","concerning","with regard to","about","a matter of"]
},
"按钮":
{"simp":"按钮",
"trad":"按鈕",
"pinyin":"àn niǔ",
"def": ["push button"]
},
"随便":
{"simp":"随便",
"trad":"隨便",
"pinyin":"suí biàn",
"def": ["as one wishes","as one pleases","at random","negligent","casual","wanton"]
},
"作为":
{"simp":"作为",
"trad":"作為",
"pinyin":"zuò wéi",
"def": ["one's conduct","deed","activity","accomplishment","achievement","to act as","as (in the capacity of)","qua","to view as","to look upon (sth as)","to take sth to be"]
},
"柔":
{"simp":"柔",
"trad":"柔",
"pinyin":"róu",
"def": ["soft","flexible","supple","yielding","rho (Greek letter Ρρ)"]
},
"仅仅":
{"simp":"仅仅",
"trad":"僅僅",
"pinyin":"jǐn jǐn",
"def": ["barely","only","merely","only (this and nothing more)"]
},
"杂志":
{"simp":"杂志",
"trad":"雜誌",
"pinyin":"zá zhì",
"def": ["magazine","CL:本[ben3],份[fen4],期[qi1]"]
},
"告终":
{"simp":"告终",
"trad":"告終",
"pinyin":"gào zhōng",
"def": ["to end","to reach an end"]
},
"握":
{"simp":"握",
"trad":"握",
"pinyin":"wò",
"def": ["to hold","to grasp","to clench (one's fist)","to master","classifier: a handful"]
},
"不寒而栗":
{"simp":"不寒而栗",
"trad":"不寒而慄",
"pinyin":"bù hán ér lì",
"def": ["lit. not cold, yet shivering (idiom)","fig. to tremble with fear","to be terrified"]
},
"期":
{"simp":"期",
"trad":"期",
"pinyin":"qī",
"def": ["a period of time","phase","stage","classifier for issues of a periodical, courses of study","time","term","period","to hope","Taiwan pr. [qi2]"]
},
"最新":
{"simp":"最新",
"trad":"最新",
"pinyin":"zuì xīn",
"def": ["latest","newest"]
},
"冻僵":
{"simp":"冻僵",
"trad":"凍僵",
"pinyin":"dòng jiāng",
"def": ["frozen stiff","numb with cold"]
},
"必要":
{"simp":"必要",
"trad":"必要",
"pinyin":"bì yào",
"def": ["necessary","essential","indispensable","required"]
},
"无际":
{"simp":"无际",
"trad":"無際",
"pinyin":"wú jì",
"def": ["limitless","boundless"]
},
"确保":
{"simp":"确保",
"trad":"確保",
"pinyin":"què bǎo",
"def": ["to ensure","to guarantee"]
},
"台":
{"simp":"台",
"trad":"颱",
"pinyin":"tái",
"def": ["typhoon"]
},
"似乎":
{"simp":"似乎",
"trad":"似乎",
"pinyin":"sì hū",
"def": ["apparently","to seem","to appear","as if","seemingly"]
},
"祖先":
{"simp":"祖先",
"trad":"祖先",
"pinyin":"zǔ xiān",
"def": ["ancestor","forebears"]
},
"迫不及待":
{"simp":"迫不及待",
"trad":"迫不及待",
"pinyin":"pò bù jí dài",
"def": ["impatient (idiom); in a hurry","itching to get on with it"]
},
"可能性":
{"simp":"可能性",
"trad":"可能性",
"pinyin":"kě néng xìng",
"def": ["possibility","probability"]
},
"段":
{"simp":"段",
"trad":"段",
"pinyin":"duàn",
"def": ["paragraph","section","segment","stage (of a process)","classifier for stories, periods of time, lengths of thread etc"]
},
"乘":
{"simp":"乘",
"trad":"椉",
"pinyin":"chéng",
"def": ["old variant of 乘[cheng2]"]
},
"完成":
{"simp":"完成",
"trad":"完成",
"pinyin":"wán chéng",
"def": ["to complete","to accomplish"]
},
"没什么":
{"simp":"没什么",
"trad":"沒什麼",
"pinyin":"méi shén me",
"def": ["nothing","it doesn't matter","it's nothing","never mind"]
},
"图灵奖":
{"simp":"图灵奖",
"trad":"圖靈獎",
"pinyin":"Tú líng jiǎng",
"def": ["Turing Award"]
},
"探测":
{"simp":"探测",
"trad":"探測",
"pinyin":"tàn cè",
"def": ["to probe; to survey"]
},
"夜里":
{"simp":"夜里",
"trad":"夜裡",
"pinyin":"yè li",
"def": ["during the night","at night","nighttime"]
},
"精英":
{"simp":"精英",
"trad":"精英",
"pinyin":"jīng yīng",
"def": ["cream","elite","essence","quintessence"]
},
"跑出":
{"simp":"跑出",
"trad":"跑出",
"pinyin":"pǎo chū",
"def": ["to run out"]
},
"潜心":
{"simp":"潜心",
"trad":"潛心",
"pinyin":"qián xīn",
"def": ["to concentrate fully on sth","single-minded"]
},
"下去":
{"simp":"下去",
"trad":"下去",
"pinyin":"xià qù",
"def": ["to go down","to descend","to go on","to continue","(of a servant) to withdraw"]
},
"学术界":
{"simp":"学术界",
"trad":"學術界",
"pinyin":"xué shù jiè",
"def": ["academic circles","academia"]
},
"实际上":
{"simp":"实际上",
"trad":"實際上",
"pinyin":"shí jì shàng",
"def": ["in fact","in reality","as a matter of fact","in practice"]
},
"通向":
{"simp":"通向",
"trad":"通向",
"pinyin":"tōng xiàng",
"def": ["to lead to"]
},
"颤抖":
{"simp":"颤抖",
"trad":"顫抖",
"pinyin":"chàn dǒu",
"def": ["to shudder","to shiver","to shake","to tremble"]
},
"再也":
{"simp":"再也",
"trad":"再也",
"pinyin":"zài yě",
"def": ["(not) any more"]
},
"铁":
{"simp":"铁",
"trad":"鐵",
"pinyin":"tiě",
"def": ["iron (metal)","arms","weapons","hard","strong","violent","unshakeable","determined","close","tight (slang)"]
},
"脸色":
{"simp":"脸色",
"trad":"臉色",
"pinyin":"liǎn sè",
"def": ["complexion","look"]
},
"敌人":
{"simp":"敌人",
"trad":"敵人",
"pinyin":"dí rén",
"def": ["enemy","CL:個|个[ge4]"]
},
"生产关系":
{"simp":"生产关系",
"trad":"生產關係",
"pinyin":"shēng chǎn guān xì",
"def": ["relations between levels of production","socio-economic relations"]
},
"将会":
{"simp":"将会",
"trad":"將會",
"pinyin":"jiāng huì",
"def": ["auxiliary verb introducing future action: may (be able to)","will (cause)","should (enable)","going to"]
},
"断":
{"simp":"断",
"trad":"斷",
"pinyin":"duàn",
"def": ["to break","to snap","to cut off","to give up or abstain from sth","to judge","(usu. used in the negative) absolutely","definitely","decidedly"]
},
"浪潮":
{"simp":"浪潮",
"trad":"浪潮",
"pinyin":"làng cháo",
"def": ["wave","tides"]
},
"叛军":
{"simp":"叛军",
"trad":"叛軍",
"pinyin":"pàn jūn",
"def": ["rebel army"]
},
"层次":
{"simp":"层次",
"trad":"層次",
"pinyin":"céng cì",
"def": ["layer","level","gradation","arrangement of ideas","(a person's) standing"]
},
"坏":
{"simp":"坏",
"trad":"壞",
"pinyin":"huài",
"def": ["bad","spoiled","broken","to break down","(suffix) to the utmost"]
},
"项":
{"simp":"项",
"trad":"項",
"pinyin":"xiàng",
"def": ["back of neck","item","thing","term (in a mathematical formula)","sum (of money)","classifier for principles, items, clauses, tasks, research projects etc"]
},
"并":
{"simp":"并",
"trad":"竝",
"pinyin":"bìng",
"def": ["variant of 並|并[bing4]"]
},
"打":
{"simp":"打",
"trad":"打",
"pinyin":"dǎ",
"def": ["to beat","to strike","to hit","to break","to type","to mix up","to build","to fight","to fetch","to make","to tie up","to issue","to shoot","to calculate","to play (a game)","since","from"]
},
"老鼠":
{"simp":"老鼠",
"trad":"老鼠",
"pinyin":"lǎo shǔ",
"def": ["rat","mouse","CL:隻|只[zhi1]"]
},
"恐龙":
{"simp":"恐龙",
"trad":"恐龍",
"pinyin":"kǒng lóng",
"def": ["dinosaur; CL:頭|头[tou2]","(old) (slang) ugly person"]
},
"虚伪":
{"simp":"虚伪",
"trad":"虛偽",
"pinyin":"xū wěi",
"def": ["false","hypocritical","artificial","sham"]
},
"问题":
{"simp":"问题",
"trad":"問題",
"pinyin":"wèn tí",
"def": ["question","problem","issue","topic","CL:個|个[ge4]"]
},
"再":
{"simp":"再",
"trad":"再",
"pinyin":"zài",
"def": ["again; once more; re-","second; another","then (after sth, and not until then)","no matter how ... (followed by an adjective or verb, and then (usually) 也[ye3] or 都[dou1] for emphasis)"]
},
"二":
{"simp":"二",
"trad":"二",
"pinyin":"èr",
"def": ["two","2","(Beijing dialect) stupid"]
},
"失败":
{"simp":"失败",
"trad":"失敗",
"pinyin":"shī bài",
"def": ["to be defeated","to lose","to fail (e.g. experiments)","failure","defeat","CL:次[ci4]"]
},
"类似":
{"simp":"类似",
"trad":"類似",
"pinyin":"lèi sì",
"def": ["similar","analogous"]
},
"大学":
{"simp":"大学",
"trad":"大學",
"pinyin":"dà xué",
"def": ["university","college","CL:所[suo3]"]
},
"逝":
{"simp":"逝",
"trad":"逝",
"pinyin":"shì",
"def": ["(of time) to pass","to die"]
},
"保护":
{"simp":"保护",
"trad":"保護",
"pinyin":"bǎo hù",
"def": ["to protect","to defend","to safeguard","protection","CL:種|种[zhong3]"]
},
"委托":
{"simp":"委托",
"trad":"委託",
"pinyin":"wěi tuō",
"def": ["to entrust","to trust","to commission"]
},
"军方":
{"simp":"军方",
"trad":"軍方",
"pinyin":"jūn fāng",
"def": ["military"]
},
"交待":
{"simp":"交待",
"trad":"交待",
"pinyin":"jiāo dài",
"def": ["variant of 交代[jiao1 dai4]"]
},
"不同":
{"simp":"不同",
"trad":"不同",
"pinyin":"bù tóng",
"def": ["different","distinct","not the same","not alike"]
},
"天体物理学":
{"simp":"天体物理学",
"trad":"天體物理學",
"pinyin":"tiān tǐ wù lǐ xué",
"def": ["astrophysics"]
},
"前途无量":
{"simp":"前途无量",
"trad":"前途無量",
"pinyin":"qián tú wú liàng",
"def": ["to have boundless prospects"]
},
"满身":
{"simp":"满身",
"trad":"滿身",
"pinyin":"mǎn shēn",
"def": ["covered all over"]
},
"和数":
{"simp":"和数",
"trad":"和數",
"pinyin":"hé shù",
"def": ["sum (math.)"]
},
"本":
{"simp":"本",
"trad":"本",
"pinyin":"běn",
"def": ["root","stem","origin","source","this","the current","original","inherent","originally","classifier for books, periodicals, files etc"]
},
"承认":
{"simp":"承认",
"trad":"承認",
"pinyin":"chéng rèn",
"def": ["to admit","to concede","to recognize","recognition (diplomatic, artistic etc)","to acknowledge"]
},
"苍穹":
{"simp":"苍穹",
"trad":"蒼穹",
"pinyin":"cāng qióng",
"def": ["the blue dome of heaven"]
},
"射线":
{"simp":"射线",
"trad":"射線",
"pinyin":"shè xiàn",
"def": ["ray"]
},
"地质":
{"simp":"地质",
"trad":"地質",
"pinyin":"dì zhì",
"def": ["geology"]
},
"没有什么":
{"simp":"没有什么",
"trad":"沒有什麼",
"pinyin":"méi yǒu shén me",
"def": ["it is nothing","there's nothing ... about it"]
},
"地步":
{"simp":"地步",
"trad":"地步",
"pinyin":"dì bù",
"def": ["stage","degree (to which a situation has evolved)","situation","leeway"]
},
"视为":
{"simp":"视为",
"trad":"視為",
"pinyin":"shì wéi",
"def": ["to view as","to see as","to consider to be","to deem"]
},
"哪里":
{"simp":"哪里",
"trad":"哪裡",
"pinyin":"nǎ lǐ",
"def": ["where?","somewhere","anywhere","wherever","nowhere (negative answer to question)","humble expression denying compliment"]
},
"美洲":
{"simp":"美洲",
"trad":"美洲",
"pinyin":"Měi zhōu",
"def": ["America (including North, Central and South America)","the Americas","abbr. for 亞美利加洲|亚美利加洲[Ya4 mei3 li4 jia1 Zhou1]"]
},
"巡航":
{"simp":"巡航",
"trad":"巡航",
"pinyin":"xún háng",
"def": ["to cruise"]
},
"求":
{"simp":"求",
"trad":"求",
"pinyin":"qiú",
"def": ["to seek","to look for","to request","to demand","to beseech"]
},
"越":
{"simp":"越",
"trad":"越",
"pinyin":"yuè",
"def": ["to exceed","to climb over","to surpass","the more... the more"]
},
"报恩":
{"simp":"报恩",
"trad":"報恩",
"pinyin":"bào ēn",
"def": ["to pay a debt of gratitude","to repay a kindness"]
},
"狭窄":
{"simp":"狭窄",
"trad":"狹窄",
"pinyin":"xiá zhǎi",
"def": ["narrow"]
},
"试一试":
{"simp":"试一试",
"trad":"試一試",
"pinyin":"shì yī shì",
"def": ["to have a try"]
},
"闪动":
{"simp":"闪动",
"trad":"閃動",
"pinyin":"shǎn dòng",
"def": ["to flicker or flash"]
},
"扰动":
{"simp":"扰动",
"trad":"擾動",
"pinyin":"rǎo dòng",
"def": ["to disturb","to stir up","disturbance","agitation","turmoil"]
},
"够":
{"simp":"够",
"trad":"夠",
"pinyin":"gòu",
"def": ["enough (sufficient)","enough (too much)","(coll.) (before adj.) really","(coll.) to reach by stretching out"]
},
"纪元":
{"simp":"纪元",
"trad":"紀元",
"pinyin":"jì yuán",
"def": ["calendar era","epoch"]
},
"移动":
{"simp":"移动",
"trad":"移動",
"pinyin":"yí dòng",
"def": ["to move","movement","migration","mobile","portable"]
},
"多模块":
{"simp":"多模块",
"trad":"多模塊",
"pinyin":"duō mó kuài",
"def": ["many modules","multiblock"]
},
"核能":
{"simp":"核能",
"trad":"核能",
"pinyin":"hé néng",
"def": ["nuclear energy"]
},
"产生":
{"simp":"产生",
"trad":"產生",
"pinyin":"chǎn shēng",
"def": ["to arise; to come into being; to come about","to give rise to; to bring into being; to bring about; to produce; to engender; to generate"]
},
"潜行":
{"simp":"潜行",
"trad":"潛行",
"pinyin":"qián xíng",
"def": ["to slink","to move stealthily","to advance through the water"]
},
"远处":
{"simp":"远处",
"trad":"遠處",
"pinyin":"yuǎn chù",
"def": ["distant place"]
},
"获得":
{"simp":"获得",
"trad":"獲得",
"pinyin":"huò dé",
"def": ["to obtain","to receive","to get"]
},
"爱":
{"simp":"爱",
"trad":"愛",
"pinyin":"ài",
"def": ["to love; to be fond of; to like","affection","to be inclined (to do sth); to tend to (happen)"]
},
"米":
{"simp":"米",
"trad":"米",
"pinyin":"mǐ",
"def": ["rice","CL:粒[li4]","meter (classifier)"]
},
"上半部分":
{"simp":"上半部分",
"trad":"上半部分",
"pinyin":"shàng bàn bù fèn",
"def": ["upper part","top half"]
},
"常":
{"simp":"常",
"trad":"常",
"pinyin":"cháng",
"def": ["always","ever","often","frequently","common","general","constant"]
},
"平静":
{"simp":"平静",
"trad":"平靜",
"pinyin":"píng jìng",
"def": ["tranquil","undisturbed","serene"]
},
"频段":
{"simp":"频段",
"trad":"頻段",
"pinyin":"pín duàn",
"def": ["(radio) band","frequency band"]
},
"上述":
{"simp":"上述",
"trad":"上述",
"pinyin":"shàng shù",
"def": ["aforementioned","above-mentioned"]
},
"退休":
{"simp":"退休",
"trad":"退休",
"pinyin":"tuì xiū",
"def": ["to retire","retirement (from work)"]
},
"处":
{"simp":"处",
"trad":"處",
"pinyin":"chù",
"def": ["place","location","spot","point","office","department","bureau","respect","classifier for locations or items of damage: spot, point"]
},
"大半":
{"simp":"大半",
"trad":"大半",
"pinyin":"dà bàn",
"def": ["more than half","greater part","most","probably","most likely"]
},
"有时":
{"simp":"有时",
"trad":"有時",
"pinyin":"yǒu shí",
"def": ["sometimes","now and then"]
},
"炊具":
{"simp":"炊具",
"trad":"炊具",
"pinyin":"chuī jù",
"def": ["cooking utensils","cookware","cooker"]
},
"粘":
{"simp":"粘",
"trad":"粘",
"pinyin":"zhān",
"def": ["to glue","to paste","to adhere","to stick to"]
},
"无法忍受":
{"simp":"无法忍受",
"trad":"無法忍受",
"pinyin":"wú fǎ rěn shòu",
"def": ["intolerable"]
},
"光影":
{"simp":"光影",
"trad":"光影",
"pinyin":"guāng yǐng",
"def": ["light and shadow","sunlight and shade"]
},
"迷惑":
{"simp":"迷惑",
"trad":"迷惑",
"pinyin":"mí huo",
"def": ["to puzzle","to confuse","to baffle"]
},
"顶":
{"simp":"顶",
"trad":"頂",
"pinyin":"dǐng",
"def": ["apex","crown of the head","top","roof","most","to carry on the head","to push to the top","to go against","to replace","to substitute","to be subjected to (an aerial bombing, hailstorm etc)","(slang) to \"bump\" a forum thread to raise its profile","classifier for headwear, hats, veils etc"]
},
"放射性沾染":
{"simp":"放射性沾染",
"trad":"放射性沾染",
"pinyin":"fàng shè xìng zhān rǎn",
"def": ["radioactive contamination"]
},
"影":
{"simp":"影",
"trad":"影",
"pinyin":"yǐng",
"def": ["picture","image","film","movie","photograph","reflection","shadow","trace"]
},
"两句":
{"simp":"两句",
"trad":"兩句",
"pinyin":"liǎng jù",
"def": ["(say) a few words"]
},
"频率":
{"simp":"频率",
"trad":"頻率",
"pinyin":"pín lù:",
"def": ["frequency"]
},
"核弹头":
{"simp":"核弹头",
"trad":"核彈頭",
"pinyin":"hé dàn tóu",
"def": ["nuclear reentry vehicle","nuclear warhead"]
},
"货车":
{"simp":"货车",
"trad":"貨車",
"pinyin":"huò chē",
"def": ["truck","van","freight wagon"]
},
"极小":
{"simp":"极小",
"trad":"極小",
"pinyin":"jí xiǎo",
"def": ["minimal","extremely small"]
},
"半年":
{"simp":"半年",
"trad":"半年",
"pinyin":"bàn nián",
"def": ["half a year"]
},
"审阅":
{"simp":"审阅",
"trad":"審閱",
"pinyin":"shěn yuè",
"def": ["to review or peruse"]
},
"黄河":
{"simp":"黄河",
"trad":"黃河",
"pinyin":"Huáng Hé",
"def": ["Yellow River or Huang He"]
},
"队长":
{"simp":"队长",
"trad":"隊長",
"pinyin":"duì zhǎng",
"def": ["captain","team leader","CL:個|个[ge4]"]
},
"数据":
{"simp":"数据",
"trad":"數據",
"pinyin":"shù jù",
"def": ["data","numbers","digital"]
},
"观测":
{"simp":"观测",
"trad":"觀測",
"pinyin":"guān cè",
"def": ["to observe","to survey","observation (scientific etc)"]
},
"搜索":
{"simp":"搜索",
"trad":"搜索",
"pinyin":"sōu suǒ",
"def": ["to search (a place)","to search (a database)","to search for (sth)"]
},
"唉":
{"simp":"唉",
"trad":"唉",
"pinyin":"ài",
"def": ["alas","oh dear"]
},
"科研":
{"simp":"科研",
"trad":"科研",
"pinyin":"kē yán",
"def": ["(scientific) research"]
},
"首先":
{"simp":"首先",
"trad":"首先",
"pinyin":"shǒu xiān",
"def": ["first (of all)","in the first place"]
},
"堆满":
{"simp":"堆满",
"trad":"堆滿",
"pinyin":"duī mǎn",
"def": ["to pile up"]
},
"生日":
{"simp":"生日",
"trad":"生日",
"pinyin":"shēng rì",
"def": ["birthday","CL:個|个[ge4]"]
},
"不带":
{"simp":"不带",
"trad":"不帶",
"pinyin":"bù dài",
"def": ["not to have","without","un-"]
},
"年内":
{"simp":"年内",
"trad":"年內",
"pinyin":"nián nèi",
"def": ["during the current year"]
},
"家":
{"simp":"家",
"trad":"家",
"pinyin":"jiā",
"def": ["home","family","(polite) my (sister, uncle etc)","classifier for families or businesses","refers to the philosophical schools of pre-Han China","noun suffix for a specialist in some activity, such as a musician or revolutionary, corresponding to English -ist, -er, -ary or -ian","CL:個|个[ge4]"]
},
"资料":
{"simp":"资料",
"trad":"資料",
"pinyin":"zī liào",
"def": ["material","resources","data","information","profile (Internet)","CL:份[fen4],個|个[ge4]"]
},
"液态":
{"simp":"液态",
"trad":"液態",
"pinyin":"yè tài",
"def": ["liquid (state)"]
},
"嘿":
{"simp":"嘿",
"trad":"嘿",
"pinyin":"hēi",
"def": ["hey"]
},
"及时":
{"simp":"及时",
"trad":"及時",
"pinyin":"jí shí",
"def": ["in time","promptly","without delay","timely"]
},
"一声":
{"simp":"一声",
"trad":"一聲",
"pinyin":"yī shēng",
"def": ["first tone in Mandarin (high, level tone)"]
},
"丢掉":
{"simp":"丢掉",
"trad":"丟掉",
"pinyin":"diū diào",
"def": ["to lose","to throw away","to discard","to cast away"]
},
"还有":
{"simp":"还有",
"trad":"還有",
"pinyin":"hái yǒu",
"def": ["furthermore","in addition","still","also"]
},
"外文":
{"simp":"外文",
"trad":"外文",
"pinyin":"wài wén",
"def": ["foreign language (written)"]
},
"终于":
{"simp":"终于",
"trad":"終於",
"pinyin":"zhōng yú",
"def": ["at last","in the end","finally","eventually"]
},
"绷":
{"simp":"绷",
"trad":"繃",
"pinyin":"běng",
"def": ["to have a taut face"]
},
"趣":
{"simp":"趣",
"trad":"趣",
"pinyin":"qù",
"def": ["interesting","to interest"]
},
"具":
{"simp":"具",
"trad":"具",
"pinyin":"jù",
"def": ["tool","device","utensil","equipment","instrument","talent","ability","to possess","to have","to provide","to furnish","to state","classifier for devices, coffins, dead bodies"]
},
"开关":
{"simp":"开关",
"trad":"開關",
"pinyin":"kāi guān",
"def": ["power switch","gas valve","to open the city (or frontier) gate","to open and close","to switch on and off"]
},
"液":
{"simp":"液",
"trad":"液",
"pinyin":"yè",
"def": ["liquid","fluid","Taiwan pr. [yi4]"]
},
"室":
{"simp":"室",
"trad":"室",
"pinyin":"shì",
"def": ["room","work unit","grave","scabbard","family or clan","one of the 28 constellations of Chinese astronomy"]
},
"山野":
{"simp":"山野",
"trad":"山野",
"pinyin":"shān yě",
"def": ["mountain and fields"]
},
"幅":
{"simp":"幅",
"trad":"幅",
"pinyin":"fú",
"def": ["width","roll","classifier for textiles or pictures"]
},
"见":
{"simp":"见",
"trad":"見",
"pinyin":"xiàn",
"def": ["to appear","also written 現|现[xian4]"]
},
"指尖":
{"simp":"指尖",
"trad":"指尖",
"pinyin":"zhǐ jiān",
"def": ["fingertips"]
},
"确实":
{"simp":"确实",
"trad":"確實",
"pinyin":"què shí",
"def": ["indeed","really","reliable","real","true"]
},
"消失":
{"simp":"消失",
"trad":"消失",
"pinyin":"xiāo shī",
"def": ["to disappear","to fade away"]
},
"正常":
{"simp":"正常",
"trad":"正常",
"pinyin":"zhèng cháng",
"def": ["regular","normal","ordinary"]
},
"层":
{"simp":"层",
"trad":"層",
"pinyin":"céng",
"def": ["to pile on top of one another","layer; stratum","floor (of a building); story","(math.) sheaf","classifier for layers"]
},
"抛射":
{"simp":"抛射",
"trad":"拋射",
"pinyin":"pāo shè",
"def": ["to throw","to shoot"]
},
"屋":
{"simp":"屋",
"trad":"屋",
"pinyin":"wū",
"def": ["house","room","CL:間|间[jian1],個|个[ge4]"]
},
"流失":
{"simp":"流失",
"trad":"流失",
"pinyin":"liú shī",
"def": ["(of soil etc) to wash away","to be eroded","(fig.) (of talented staff, followers of a religious faith, investment funds etc) to go elsewhere","to fail to be retained"]
},
"以下":
{"simp":"以下",
"trad":"以下",
"pinyin":"yǐ xià",
"def": ["that level or lower","that amount or less","the following"]
},
"耀斑":
{"simp":"耀斑",
"trad":"耀斑",
"pinyin":"yào bān",
"def": ["solar flare"]
},
"后天":
{"simp":"后天",
"trad":"後天",
"pinyin":"hòu tiān",
"def": ["the day after tomorrow","life after birth (the period in which one develops through experiences, contrasted with 先天[xian1 tian1])","acquired (not innate or congenital)","a posteriori"]
},
"红外":
{"simp":"红外",
"trad":"紅外",
"pinyin":"hóng wài",
"def": ["infrared (ray)"]
},
"奉献":
{"simp":"奉献",
"trad":"奉獻",
"pinyin":"fèng xiàn",
"def": ["to offer respectfully","to consecrate","to dedicate","to devote"]
},
"普通民众":
{"simp":"普通民众",
"trad":"普通民眾",
"pinyin":"pǔ tōng mín zhòng",
"def": ["ordinary people","the masses"]
},
"不解":
{"simp":"不解",
"trad":"不解",
"pinyin":"bù jiě",
"def": ["to not understand","to be puzzled by","indissoluble"]
},
"神经":
{"simp":"神经",
"trad":"神經",
"pinyin":"shén jīng",
"def": ["nerve","mental state","(coll.) unhinged","nutjob"]
},
"大会":
{"simp":"大会",
"trad":"大會",
"pinyin":"dà huì",
"def": ["general assembly","general meeting","convention","CL:個|个[ge4],屆|届[jie4]"]
},
"包围":
{"simp":"包围",
"trad":"包圍",
"pinyin":"bāo wéi",
"def": ["to surround","to encircle","to hem in"]
},
"听到":
{"simp":"听到",
"trad":"聽到",
"pinyin":"tīng dào",
"def": ["to hear"]
},
"严整":
{"simp":"严整",
"trad":"嚴整",
"pinyin":"yán zhěng",
"def": ["(of troops) in neat formation","(fig.) orderly"]
},
"深":
{"simp":"深",
"trad":"深",
"pinyin":"shēn",
"def": ["deep","depth","deeply","(of a color) dark","deep","rich"]
},
"完美":
{"simp":"完美",
"trad":"完美",
"pinyin":"wán měi",
"def": ["perfect","perfection","perfectly"]
},
"局限于":
{"simp":"局限于",
"trad":"局限於",
"pinyin":"jú xiàn yú",
"def": ["to be limited to"]
},
"轰轰":
{"simp":"轰轰",
"trad":"轟轟",
"pinyin":"hōng hōng",
"def": ["booming","roaring"]
},
"林立":
{"simp":"林立",
"trad":"林立",
"pinyin":"lín lì",
"def": ["to stand in great numbers"]
},
"人员":
{"simp":"人员",
"trad":"人員",
"pinyin":"rén yuán",
"def": ["staff","crew","personnel","CL:個|个[ge4]"]
},
"则":
{"simp":"则",
"trad":"則",
"pinyin":"zé",
"def": ["(conjunction used to express contrast with a previous clause) but","then","standard","norm","principle","to imitate","to follow","classifier for written items"]
},
"疑心":
{"simp":"疑心",
"trad":"疑心",
"pinyin":"yí xīn",
"def": ["suspicion","to suspect"]
},
"内行":
{"simp":"内行",
"trad":"內行",
"pinyin":"nèi háng",
"def": ["expert","adept","experienced","an expert","a professional"]
},
"山洞":
{"simp":"山洞",
"trad":"山洞",
"pinyin":"shān dòng",
"def": ["cavern","cave"]
},
"历史性":
{"simp":"历史性",
"trad":"歷史性",
"pinyin":"lì shǐ xìng",
"def": ["historic"]
},
"执政":
{"simp":"执政",
"trad":"執政",
"pinyin":"zhí zhèng",
"def": ["to hold power","in office"]
},
"团":
{"simp":"团",
"trad":"糰",
"pinyin":"tuán",
"def": ["dumpling"]
},
"排除":
{"simp":"排除",
"trad":"排除",
"pinyin":"pái chú",
"def": ["to eliminate","to remove","to exclude","to rule out"]
},
"滤波":
{"simp":"滤波",
"trad":"濾波",
"pinyin":"lù: bō",
"def": ["filtering radio waves (i.e. to pick out one frequency)"]
},
"数字":
{"simp":"数字",
"trad":"數字",
"pinyin":"shù zì",
"def": ["numeral","digit","number","figure","amount","digital (electronics etc)","CL:個|个[ge4]"]
},
"一个人":
{"simp":"一个人",
"trad":"一個人",
"pinyin":"yī gè rén",
"def": ["by oneself (without assistance)","alone (without company)"]
},
"规律":
{"simp":"规律",
"trad":"規律",
"pinyin":"guī lù:",
"def": ["rule (e.g. of science)","law of behavior","regular pattern","rhythm","discipline"]
},
"晶亮":
{"simp":"晶亮",
"trad":"晶亮",
"pinyin":"jīng liàng",
"def": ["bright","shiny"]
},
"清":
{"simp":"清",
"trad":"清",
"pinyin":"qīng",
"def": ["clear","distinct","quiet","just and honest","pure","to settle or clear up","to clean up or purge"]
},
"之一":
{"simp":"之一",
"trad":"之一",
"pinyin":"zhī yī",
"def": ["one of (sth)","one out of a multitude","one (third, quarter, percent etc)"]
},
"最多":
{"simp":"最多",
"trad":"最多",
"pinyin":"zuì duō",
"def": ["at most","maximum","greatest (amount)","maximal"]
},
"竟然":
{"simp":"竟然",
"trad":"竟然",
"pinyin":"jìng rán",
"def": ["unexpectedly","to one's surprise","in spite of everything","in that crazy way","actually","to go as far as to"]
},
"巨型":
{"simp":"巨型",
"trad":"巨型",
"pinyin":"jù xíng",
"def": ["giant","enormous"]
},
"电磁波":
{"simp":"电磁波",
"trad":"電磁波",
"pinyin":"diàn cí bō",
"def": ["electromagnetic wave"]
},
"缩水":
{"simp":"缩水",
"trad":"縮水",
"pinyin":"suō shuǐ",
"def": ["to shrink (in the wash)","fig. to shrink (of profits etc)"]
},
"纳":
{"simp":"纳",
"trad":"納",
"pinyin":"nà",
"def": ["to receive","to accept","to enjoy","to bring into","to pay (tax etc)","nano- (one billionth)","to reinforce sole of shoes or stockings by close sewing"]
},
"频繁":
{"simp":"频繁",
"trad":"頻繁",
"pinyin":"pín fán",
"def": ["frequently","often"]
},
"含量":
{"simp":"含量",
"trad":"含量",
"pinyin":"hán liàng",
"def": ["content","quantity contained"]
},
"越战":
{"simp":"越战",
"trad":"越戰",
"pinyin":"Yuè zhàn",
"def": ["Vietnam War (1955-1975)"]
},
"血迹":
{"simp":"血迹",
"trad":"血跡",
"pinyin":"xuè jì",
"def": ["bloodstain"]
},
"汉子":
{"simp":"汉子",
"trad":"漢子",
"pinyin":"hàn zi",
"def": ["man","fellow","(dialect) husband"]
},
"似":
{"simp":"似",
"trad":"佀",
"pinyin":"sì",
"def": ["old variant of 似[si4]"]
},
"油灯":
{"simp":"油灯",
"trad":"油燈",
"pinyin":"yóu dēng",
"def": ["oil lamp"]
},
"某种":
{"simp":"某种",
"trad":"某種",
"pinyin":"mǒu zhǒng",
"def": ["some kind (of)"]
},
"林边":
{"simp":"林边",
"trad":"林邊",
"pinyin":"Lín biān",
"def": ["Linpien township in Pingtung County 屏東縣|屏东县[Ping2 dong1 Xian4], Taiwan"]
},
"外太空":
{"simp":"外太空",
"trad":"外太空",
"pinyin":"wài tài kōng",
"def": ["outer space"]
},
"微波":
{"simp":"微波",
"trad":"微波",
"pinyin":"wēi bō",
"def": ["ripple","microwave"]
},
"大":
{"simp":"大",
"trad":"大",
"pinyin":"dài",
"def": ["see 大夫[dai4 fu5]"]
},
"站住":
{"simp":"站住",
"trad":"站住",
"pinyin":"zhàn zhù",
"def": ["to stand"]
},
"产后":
{"simp":"产后",
"trad":"產後",
"pinyin":"chǎn hòu",
"def": ["postnatal"]
},
"首批":
{"simp":"首批",
"trad":"首批",
"pinyin":"shǒu pī",
"def": ["first batch"]
},
"宏观":
{"simp":"宏观",
"trad":"宏觀",
"pinyin":"hóng guān",
"def": ["macro-","macroscopic","holistic"]
},
"有能力":
{"simp":"有能力",
"trad":"有能力",
"pinyin":"yǒu néng lì",
"def": ["able"]
},
"屏幕":
{"simp":"屏幕",
"trad":"屏幕",
"pinyin":"píng mù",
"def": ["screen (TV, computer or movie)"]
},
"曲线":
{"simp":"曲线",
"trad":"曲線",
"pinyin":"qū xiàn",
"def": ["curve","curved line","indirect","in a roundabout way"]
},
"型":
{"simp":"型",
"trad":"型",
"pinyin":"xíng",
"def": ["mold","type","style","model"]
},
"间":
{"simp":"间",
"trad":"間",
"pinyin":"jiàn",
"def": ["gap","to separate","to thin out (seedlings)","to sow discontent"]
},
"对准":
{"simp":"对准",
"trad":"對準",
"pinyin":"duì zhǔn",
"def": ["to aim at","to target","to point at","to be directed at","registration","alignment (mechanical engineering)"]
},
"总是":
{"simp":"总是",
"trad":"總是",
"pinyin":"zǒng shì",
"def": ["always"]
},
"老":
{"simp":"老",
"trad":"老",
"pinyin":"lǎo",
"def": ["prefix used before the surname of a person or a numeral indicating the order of birth of the children in a family or to indicate affection or familiarity","old (of people)","venerable (person)","experienced","of long standing","always","all the time","of the past","very","outdated","(of meat etc) tough"]
},
"严冬":
{"simp":"严冬",
"trad":"嚴冬",
"pinyin":"yán dōng",
"def": ["severe winter"]
},
"天线":
{"simp":"天线",
"trad":"天線",
"pinyin":"tiān xiàn",
"def": ["antenna","mast","connection with high-ranking officials"]
},
"云石":
{"simp":"云石",
"trad":"雲石",
"pinyin":"yún shí",
"def": ["marble"]
},
"亲切":
{"simp":"亲切",
"trad":"親切",
"pinyin":"qīn qiè",
"def": ["amiable","cordial","close and dear","familiar"]
},
"烧":
{"simp":"烧",
"trad":"燒",
"pinyin":"shāo",
"def": ["to burn","to cook","to stew","to bake","to roast","to heat","to boil (tea, water etc)","fever","to run a temperature","(coll.) to let things go to one's head"]
},
"借":
{"simp":"借",
"trad":"藉",
"pinyin":"jiè",
"def": ["variant of 借[jie4]"]
},
"终结":
{"simp":"终结",
"trad":"終結",
"pinyin":"zhōng jié",
"def": ["end; conclusion","to come to an end; to terminate (sth)"]
},
"山区":
{"simp":"山区",
"trad":"山區",
"pinyin":"shān qū",
"def": ["mountain area","CL:個|个[ge4]"]
},
"手忙脚乱":
{"simp":"手忙脚乱",
"trad":"手忙腳亂",
"pinyin":"shǒu máng jiǎo luàn",
"def": ["to act with confusion","to be in a flurry","to be flustered"]
},
"强烈":
{"simp":"强烈",
"trad":"強烈",
"pinyin":"qiáng liè",
"def": ["intense","(violently) strong"]
},
"负责":
{"simp":"负责",
"trad":"負責",
"pinyin":"fù zé",
"def": ["to be in charge of","to take responsibility for","to be to blame","conscientious"]
},
"这边":
{"simp":"这边",
"trad":"這邊",
"pinyin":"zhè biān",
"def": ["this side","here"]
},
"当地":
{"simp":"当地",
"trad":"當地",
"pinyin":"dāng dì",
"def": ["local"]
},
"大功":
{"simp":"大功",
"trad":"大功",
"pinyin":"dà gōng",
"def": ["great merit","great service"]
},
"河岸":
{"simp":"河岸",
"trad":"河岸",
"pinyin":"hé àn",
"def": ["riverside","river bank"]
},
"刚":
{"simp":"刚",
"trad":"剛",
"pinyin":"gāng",
"def": ["hard","firm","strong","just","barely","exactly"]
},
"名词":
{"simp":"名词",
"trad":"名詞",
"pinyin":"míng cí",
"def": ["noun"]
},
"摞":
{"simp":"摞",
"trad":"摞",
"pinyin":"luò",
"def": ["to pile up","to stack","a pile","a stack"]
},
"操作":
{"simp":"操作",
"trad":"操作",
"pinyin":"cāo zuò",
"def": ["to work","to operate","to manipulate"]
},
"目镜":
{"simp":"目镜",
"trad":"目鏡",
"pinyin":"mù jìng",
"def": ["eyepiece"]
},
"人数":
{"simp":"人数",
"trad":"人數",
"pinyin":"rén shù",
"def": ["number of people"]
},
"想":
{"simp":"想",
"trad":"想",
"pinyin":"xiǎng",
"def": ["to think","to believe","to suppose","to wish","to want","to miss (feel wistful about the absence of sb or sth)"]
},
"干扰":
{"simp":"干扰",
"trad":"干擾",
"pinyin":"gān rǎo",
"def": ["to disturb","to interfere","perturbation","interference (physics)"]
},
"高能":
{"simp":"高能",
"trad":"高能",
"pinyin":"gāo néng",
"def": ["high energy"]
},
"解释":
{"simp":"解释",
"trad":"解釋",
"pinyin":"jiě shì",
"def": ["explanation","to explain","to interpret","to resolve","CL:個|个[ge4]"]
},
"动人":
{"simp":"动人",
"trad":"動人",
"pinyin":"dòng rén",
"def": ["touching","moving"]
},
"异国他乡":
{"simp":"异国他乡",
"trad":"異國他鄉",
"pinyin":"yì guó tā xiāng",
"def": ["foreign lands and places (idiom); living as expatriate"]
},
"不停":
{"simp":"不停",
"trad":"不停",
"pinyin":"bù tíng",
"def": ["incessant"]
},
"至":
{"simp":"至",
"trad":"至",
"pinyin":"zhì",
"def": ["to arrive","most","to","until"]
},
"报纸":
{"simp":"报纸",
"trad":"報紙",
"pinyin":"bào zhǐ",
"def": ["newspaper","newsprint","CL:份[fen4],期[qi1],張|张[zhang1]"]
},
"虽然":
{"simp":"虽然",
"trad":"雖然",
"pinyin":"suī rán",
"def": ["although","even though","even if"]
},
"工程":
{"simp":"工程",
"trad":"工程",
"pinyin":"gōng chéng",
"def": ["engineering","an engineering project","project","undertaking","CL:個|个[ge4],項|项[xiang4]"]
},
"种":
{"simp":"种",
"trad":"種",
"pinyin":"zhòng",
"def": ["to plant","to grow","to cultivate"]
},
"整":
{"simp":"整",
"trad":"整",
"pinyin":"zhěng",
"def": ["exactly","in good order","whole","complete","entire","in order","orderly","to repair","to mend","to renovate","(coll.) to fix sb","to give sb a hard time","to mess with sb"]
},
"只":
{"simp":"只",
"trad":"隻",
"pinyin":"zhī",
"def": ["classifier for birds and certain animals, one of a pair, some utensils, vessels etc"]
},
"必然":
{"simp":"必然",
"trad":"必然",
"pinyin":"bì rán",
"def": ["inevitable","certain","necessity"]
},
"什么的":
{"simp":"什么的",
"trad":"什麼的",
"pinyin":"shén me de",
"def": ["and so on","and what not"]
},
"氢":
{"simp":"氢",
"trad":"氫",
"pinyin":"qīng",
"def": ["hydrogen (chemistry)"]
},
"跟着":
{"simp":"跟着",
"trad":"跟著",
"pinyin":"gēn zhe",
"def": ["to follow after","immediately afterwards"]
},
"更":
{"simp":"更",
"trad":"更",
"pinyin":"gèng",
"def": ["more","even more","further","still","still more"]
},
"不复":
{"simp":"不复",
"trad":"不復",
"pinyin":"bù fù",
"def": ["no longer","no more"]
},
"新":
{"simp":"新",
"trad":"新",
"pinyin":"xīn",
"def": ["new","newly","meso- (chemistry)"]
},
"浴火重生":
{"simp":"浴火重生",
"trad":"浴火重生",
"pinyin":"yù huǒ chóng shēng",
"def": ["to rise from the ashes (idiom)","to thrive again after surviving an ordeal"]
},
"那么":
{"simp":"那么",
"trad":"那麼",
"pinyin":"nà me",
"def": ["like that","in that way","or so","so","so very much","about","in that case"]
},
"篇":
{"simp":"篇",
"trad":"篇",
"pinyin":"piān",
"def": ["sheet","piece of writing","bound set of bamboo slips used for record keeping (old)","classifier for written items: chapter, article"]
},
"学报":
{"simp":"学报",
"trad":"學報",
"pinyin":"xué bào",
"def": ["a scholarly journal","Journal, Bulletin etc"]
},
"发表":
{"simp":"发表",
"trad":"發表",
"pinyin":"fā biǎo",
"def": ["to issue","to publish"]
},
"袋":
{"simp":"袋",
"trad":"袋",
"pinyin":"dài",
"def": ["pouch","bag","sack","pocket"]
},
"不适":
{"simp":"不适",
"trad":"不適",
"pinyin":"bù shì",
"def": ["unwell","indisposed","out of sorts"]
},
"船员":
{"simp":"船员",
"trad":"船員",
"pinyin":"chuán yuán",
"def": ["sailor","crew member"]
},
"研究生":
{"simp":"研究生",
"trad":"研究生",
"pinyin":"yán jiū shēng",
"def": ["graduate student","postgraduate student","research student"]
},
"哗":
{"simp":"哗",
"trad":"譁",
"pinyin":"huá",
"def": ["variant of 嘩|哗[hua2]"]
},
"调集":
{"simp":"调集",
"trad":"調集",
"pinyin":"diào jí",
"def": ["to summon","to muster","to assemble"]
},
"行动":
{"simp":"行动",
"trad":"行動",
"pinyin":"xíng dòng",
"def": ["operation","action","CL:個|个[ge4]","to move about","mobile"]
},
"政工":
{"simp":"政工",
"trad":"政工",
"pinyin":"zhèng gōng",
"def": ["political work","ideological work"]
},
"动荡":
{"simp":"动荡",
"trad":"動蕩",
"pinyin":"dòng dàng",
"def": ["unrest (social or political)","turmoil","upheaval","commotion"]
},
"上将":
{"simp":"上将",
"trad":"上將",
"pinyin":"shàng jiàng",
"def": ["general","admiral","air chief marshal"]
},
"论文":
{"simp":"论文",
"trad":"論文",
"pinyin":"lùn wén",
"def": ["paper","treatise","thesis","CL:篇[pian1]","to discuss a paper or thesis (old)"]
},
"哥哥":
{"simp":"哥哥",
"trad":"哥哥",
"pinyin":"gē ge",
"def": ["older brother","CL:個|个[ge4],位[wei4]"]
},
"观点":
{"simp":"观点",
"trad":"觀點",
"pinyin":"guān diǎn",
"def": ["point of view","viewpoint","standpoint","CL:個|个[ge4]"]
},
"专业":
{"simp":"专业",
"trad":"專業",
"pinyin":"zhuān yè",
"def": ["specialty","specialized field","main field of study (at university)","major","CL:門|门[men2],個|个[ge4]","professional"]
},
"截":
{"simp":"截",
"trad":"截",
"pinyin":"jié",
"def": ["to cut off (a length)","to stop","to intercept","section","chunk","length"]
},
"交":
{"simp":"交",
"trad":"交",
"pinyin":"jiāo",
"def": ["to hand over","to deliver","to pay (money)","to turn over","to make friends","to intersect (lines)","variant of 跤[jiao1]"]
},
"身份":
{"simp":"身份",
"trad":"身份",
"pinyin":"shēn fèn",
"def": ["identity","aspect of one's identity (i.e. sth that one is – mayor, father, permanent resident etc)","role","capacity (as in \"in his capacity as a ...\" 以…的身份[yi3 xx5 de5 shen1 fen4])","status (social, legal etc)","position","rank"]
},
"迷雾":
{"simp":"迷雾",
"trad":"迷霧",
"pinyin":"mí wù",
"def": ["dense fog","fig. completely misleading"]
},
"蹲下":
{"simp":"蹲下",
"trad":"蹲下",
"pinyin":"dūn xià",
"def": ["to squat down","to crouch"]
},
"天体物理":
{"simp":"天体物理",
"trad":"天體物理",
"pinyin":"tiān tǐ wù lǐ",
"def": ["astrophysics"]
},
"手":
{"simp":"手",
"trad":"手",
"pinyin":"shǒu",
"def": ["hand","(formal) to hold","person engaged in certain types of work","person skilled in certain types of work","personal(ly)","convenient","classifier for skill","CL:雙|双[shuang1],隻|只[zhi1]"]
},
"无罪":
{"simp":"无罪",
"trad":"無罪",
"pinyin":"wú zuì",
"def": ["innocent","guileless","not guilty (of crime)"]
},
"雷":
{"simp":"雷",
"trad":"雷",
"pinyin":"léi",
"def": ["thunder","mine (weapon)","(Internet slang) terrifying","terrific"]
},
"自私":
{"simp":"自私",
"trad":"自私",
"pinyin":"zì sī",
"def": ["selfish","selfishness"]
},
"灾":
{"simp":"灾",
"trad":"菑",
"pinyin":"zāi",
"def": ["old variant of 災|灾[zai1]"]
},
"前后":
{"simp":"前后",
"trad":"前後",
"pinyin":"qián hòu",
"def": ["around","from beginning to end","all around","front and rear"]
},
"介":
{"simp":"介",
"trad":"介",
"pinyin":"jiè",
"def": ["to introduce","to lie between","between","shell","armor"]
},
"在那儿":
{"simp":"在那儿",
"trad":"在那兒",
"pinyin":"zài na r5",
"def": ["(adverbial expression indicating that the attention of the subject of the verb is focused on what they are doing, not distracted by anything else)","just ...ing (and nothing else)"]
},
"桌":
{"simp":"桌",
"trad":"槕",
"pinyin":"zhuō",
"def": ["old variant of 桌[zhuo1]"]
},
"清华大学":
{"simp":"清华大学",
"trad":"清華大學",
"pinyin":"Qīng huá Dà xué",
"def": ["Tsinghua or Qinghua University, Beijing","National Tsing Hua University, Hsinchu, Taiwan"]
},
"迄":
{"simp":"迄",
"trad":"迄",
"pinyin":"qì",
"def": ["as yet","until"]
},
"更深":
{"simp":"更深",
"trad":"更深",
"pinyin":"gēng shēn",
"def": ["deep at night"]
},
"多少":
{"simp":"多少",
"trad":"多少",
"pinyin":"duō shao",
"def": ["how much?","how many?","(phone number, student ID etc) what number?"]
},
"凭着":
{"simp":"凭着",
"trad":"憑著",
"pinyin":"píng zhe",
"def": ["relying on","on the basis of"]
},
"埋头":
{"simp":"埋头",
"trad":"埋頭",
"pinyin":"mái tóu",
"def": ["to immerse oneself in","engrossed in sth","to lower the head (e.g. to avoid rain)","countersunk (of screws, rivets etc)"]
},
"干部":
{"simp":"干部",
"trad":"幹部",
"pinyin":"gàn bù",
"def": ["cadre","official","officer","manager"]
},
"性质":
{"simp":"性质",
"trad":"性質",
"pinyin":"xìng zhì",
"def": ["nature","characteristic","CL:個|个[ge4]"]
},
"梭子":
{"simp":"梭子",
"trad":"梭子",
"pinyin":"suō zi",
"def": ["shuttle (textile)","cartridge clip","classifier for bullet clips and bursts of gunfire"]
},
"相同":
{"simp":"相同",
"trad":"相同",
"pinyin":"xiāng tóng",
"def": ["identical","same"]
},
"中层":
{"simp":"中层",
"trad":"中層",
"pinyin":"zhōng céng",
"def": ["middle-ranking"]
},
"杀死":
{"simp":"杀死",
"trad":"殺死",
"pinyin":"shā sǐ",
"def": ["to kill"]
},
"输入":
{"simp":"输入",
"trad":"輸入",
"pinyin":"shū rù",
"def": ["to import","to input"]
},
"绝密":
{"simp":"绝密",
"trad":"絕密",
"pinyin":"jué mì",
"def": ["top secret"]
},
"拆开":
{"simp":"拆开",
"trad":"拆開",
"pinyin":"chāi kāi",
"def": ["to dismantle","to disassemble","to open up (sth sealed)","to unpick"]
},
"电话":
{"simp":"电话",
"trad":"電話",
"pinyin":"diàn huà",
"def": ["telephone","CL:部[bu4]","phone call","CL:通[tong1]","phone number"]
},
"单位":
{"simp":"单位",
"trad":"單位",
"pinyin":"dān wèi",
"def": ["unit (of measure)","unit (group of people as a whole)","work unit (place of employment, esp. in the PRC prior to economic reform)","CL:個|个[ge4]"]
},
"和":
{"simp":"和",
"trad":"龢",
"pinyin":"hé",
"def": ["old variant of 和[he2]","harmonious"]
},
"玩意儿":
{"simp":"玩意儿",
"trad":"玩意兒",
"pinyin":"wán yì r5",
"def": ["erhua variant of 玩意[wan2 yi4]"]
},
"目的":
{"simp":"目的",
"trad":"目的",
"pinyin":"mù dì",
"def": ["purpose","aim","goal","target","objective","CL:個|个[ge4]"]
},
"传递":
{"simp":"传递",
"trad":"傳遞",
"pinyin":"chuán dì",
"def": ["to transmit","to pass on to sb else","(math.) transitive"]
},
"名义":
{"simp":"名义",
"trad":"名義",
"pinyin":"míng yì",
"def": ["name","titular","nominal","in name","ostensible purpose"]
},
"进入":
{"simp":"进入",
"trad":"進入",
"pinyin":"jìn rù",
"def": ["to enter","to join","to go into"]
},
"蠢":
{"simp":"蠢",
"trad":"蠢",
"pinyin":"chǔn",
"def": ["stupid","sluggish","clumsy","to wiggle (of worms)","to move in a disorderly fashion"]
},
"那种":
{"simp":"那种",
"trad":"那種",
"pinyin":"nà zhǒng",
"def": ["that","that kind of","that sort of","that type of"]
},
"凶手":
{"simp":"凶手",
"trad":"兇手",
"pinyin":"xiōng shǒu",
"def": ["murderer","assassin"]
},
"侧":
{"simp":"侧",
"trad":"側",
"pinyin":"zhāi",
"def": ["lean on one side"]
},
"志愿者":
{"simp":"志愿者",
"trad":"志願者",
"pinyin":"zhì yuàn zhě",
"def": ["volunteer"]
},
"闪电":
{"simp":"闪电",
"trad":"閃電",
"pinyin":"shǎn diàn",
"def": ["lightning","CL:道[dao4]"]
},
"焦急":
{"simp":"焦急",
"trad":"焦急",
"pinyin":"jiāo jí",
"def": ["anxiety","anxious"]
},
"以前":
{"simp":"以前",
"trad":"以前",
"pinyin":"yǐ qián",
"def": ["before","formerly","previous","ago"]
},
"可能":
{"simp":"可能",
"trad":"可能",
"pinyin":"kě néng",
"def": ["might (happen)","possible","probable","possibility","probability","maybe","perhaps","CL:個|个[ge4]"]
},
"面对":
{"simp":"面对",
"trad":"面對",
"pinyin":"miàn duì",
"def": ["to confront","to face"]
},
"黄土高原":
{"simp":"黄土高原",
"trad":"黃土高原",
"pinyin":"Huáng tǔ Gāo yuán",
"def": ["Loess Plateau of northwest China"]
},
"神圣":
{"simp":"神圣",
"trad":"神聖",
"pinyin":"shén shèng",
"def": ["divine","hallow","holy","sacred"]
},
"如":
{"simp":"如",
"trad":"如",
"pinyin":"rú",
"def": ["as","as if","such as"]
},
"学名":
{"simp":"学名",
"trad":"學名",
"pinyin":"xué míng",
"def": ["scientific name","Latin name (of plant or animal)","(according to an old system of nomenclature) on entering school life, a formal personal name given to new students"]
},
"方案":
{"simp":"方案",
"trad":"方案",
"pinyin":"fāng àn",
"def": ["plan","program (for action etc)","proposal","proposed bill","CL:個|个[ge4],套[tao4]"]
},
"相比":
{"simp":"相比",
"trad":"相比",
"pinyin":"xiāng bǐ",
"def": ["to compare"]
},
"监测":
{"simp":"监测",
"trad":"監測",
"pinyin":"jiān cè",
"def": ["to monitor"]
},
"一样":
{"simp":"一样",
"trad":"一樣",
"pinyin":"yī yàng",
"def": ["same","like","equal to","the same as","just like"]
},
"俱佳":
{"simp":"俱佳",
"trad":"俱佳",
"pinyin":"jù jiā",
"def": ["excellent","wonderful"]
},
"揭开":
{"simp":"揭开",
"trad":"揭開",
"pinyin":"jiē kāi",
"def": ["to uncover","to open"]
},
"坚定":
{"simp":"坚定",
"trad":"堅定",
"pinyin":"jiān dìng",
"def": ["firm","steady","staunch","resolute"]
},
"入":
{"simp":"入",
"trad":"入",
"pinyin":"rù",
"def": ["to enter","to go into","to join","to become a member of","to confirm or agree with","abbr. for 入聲|入声[ru4 sheng1]"]
},
"宇宙飞船":
{"simp":"宇宙飞船",
"trad":"宇宙飛船",
"pinyin":"yǔ zhòu fēi chuán",
"def": ["spacecraft"]
},
"内心":
{"simp":"内心",
"trad":"內心",
"pinyin":"nèi xīn",
"def": ["heart","innermost being","(math.) incenter"]
},
"太":
{"simp":"太",
"trad":"太",
"pinyin":"tài",
"def": ["highest","greatest","too (much)","very","extremely"]
},
"举火":
{"simp":"举火",
"trad":"舉火",
"pinyin":"jǔ huǒ",
"def": ["(literary) to light a fire"]
},
"解放":
{"simp":"解放",
"trad":"解放",
"pinyin":"jiě fàng",
"def": ["to liberate","to emancipate","liberation","refers to the Communists' victory over the Nationalists in 1949","CL:次[ci4]"]
},
"发信":
{"simp":"发信",
"trad":"發信",
"pinyin":"fā xìn",
"def": ["to post a letter"]
},
"一号电池":
{"simp":"一号电池",
"trad":"一號電池",
"pinyin":"yī hào diàn chí",
"def": ["D size battery"]
},
"上来":
{"simp":"上来",
"trad":"上來",
"pinyin":"shàng lái",
"def": ["to come up","to approach","(verb complement indicating success)"]
},
"陌生":
{"simp":"陌生",
"trad":"陌生",
"pinyin":"mò shēng",
"def": ["strange","unfamiliar"]
},
"相对":
{"simp":"相对",
"trad":"相對",
"pinyin":"xiāng duì",
"def": ["relatively","opposite","to resist","to oppose","relative","vis-a-vis","counterpart"]
},
"稍":
{"simp":"稍",
"trad":"稍",
"pinyin":"shào",
"def": ["see 稍息[shao4 xi1]"]
},
"尴尬":
{"simp":"尴尬",
"trad":"尷尬",
"pinyin":"gān gà",
"def": ["awkward","embarrassed"]
},
"空旷":
{"simp":"空旷",
"trad":"空曠",
"pinyin":"kōng kuàng",
"def": ["spacious and empty","void"]
},
"彻底":
{"simp":"彻底",
"trad":"徹底",
"pinyin":"chè dǐ",
"def": ["thorough","thoroughly","complete"]
},
"军":
{"simp":"军",
"trad":"軍",
"pinyin":"jūn",
"def": ["(bound form) army","military"]
},
"晚饭":
{"simp":"晚饭",
"trad":"晚飯",
"pinyin":"wǎn fàn",
"def": ["evening meal","dinner","supper","CL:份[fen4],頓|顿[dun4],次[ci4],餐[can1]"]
},
"神采飞扬":
{"simp":"神采飞扬",
"trad":"神采飛揚",
"pinyin":"shén cǎi fēi yáng",
"def": ["in high spirits (idiom); glowing with health and vigor"]
},
"生物":
{"simp":"生物",
"trad":"生物",
"pinyin":"shēng wù",
"def": ["organism","living creature","life form","biological","CL:個|个[ge4]"]
},
"垄断":
{"simp":"垄断",
"trad":"壟斷",
"pinyin":"lǒng duàn",
"def": ["to monopolize"]
},
"睡梦中":
{"simp":"睡梦中",
"trad":"睡夢中",
"pinyin":"shuì mèng zhōng",
"def": ["fast asleep","dreaming"]
},
"其中":
{"simp":"其中",
"trad":"其中",
"pinyin":"qí zhōng",
"def": ["among","in","included among these"]
},
"措施":
{"simp":"措施",
"trad":"措施",
"pinyin":"cuò shī",
"def": ["measure","step","CL:個|个[ge4]"]
},
"剧毒":
{"simp":"剧毒",
"trad":"劇毒",
"pinyin":"jù dú",
"def": ["highly toxic","extremely poisonous"]
},
"浸":
{"simp":"浸",
"trad":"浸",
"pinyin":"jìn",
"def": ["to immerse","to soak","to steep","gradually"]
},
"终端":
{"simp":"终端",
"trad":"終端",
"pinyin":"zhōng duān",
"def": ["end","terminal"]
},
"派":
{"simp":"派",
"trad":"派",
"pinyin":"pài",
"def": ["clique","school","group","faction","to dispatch","to send","to assign","to appoint","pi (Greek letter Ππ)","the circular ratio pi = 3.1415926","(loanword) pie"]
},
"相互":
{"simp":"相互",
"trad":"相互",
"pinyin":"xiāng hù",
"def": ["each other","mutual"]
},
"这种":
{"simp":"这种",
"trad":"這種",
"pinyin":"zhè zhǒng",
"def": ["this","this kind of","this sort of","this type of"]
},
"叫声":
{"simp":"叫声",
"trad":"叫聲",
"pinyin":"jiào shēng",
"def": ["yelling (sound made by person)","barking","braying","roaring (sound made by animals)"]
},
"精巧":
{"simp":"精巧",
"trad":"精巧",
"pinyin":"jīng qiǎo",
"def": ["elaborate"]
},
"慢慢":
{"simp":"慢慢",
"trad":"慢慢",
"pinyin":"màn màn",
"def": ["slowly"]
},
"背叛":
{"simp":"背叛",
"trad":"背叛",
"pinyin":"bèi pàn",
"def": ["to betray"]
},
"如何":
{"simp":"如何",
"trad":"如何",
"pinyin":"rú hé",
"def": ["how","what way","what"]
},
"存在":
{"simp":"存在",
"trad":"存在",
"pinyin":"cún zài",
"def": ["to exist","to be","existence"]
},
"金":
{"simp":"金",
"trad":"金",
"pinyin":"jīn",
"def": ["gold","chemical element Au","generic term for lustrous and ductile metals","money","golden","highly respected","one of the eight categories of ancient musical instruments 八音[ba1 yin1]"]
},
"能量":
{"simp":"能量",
"trad":"能量",
"pinyin":"néng liàng",
"def": ["energy","capabilities"]
},
"尾":
{"simp":"尾",
"trad":"尾",
"pinyin":"yǐ",
"def": ["horse's tail","pointed posterior section of a locust etc"]
},
"一堆":
{"simp":"一堆",
"trad":"一堆",
"pinyin":"yī duī",
"def": ["pile"]
},
"邪恶":
{"simp":"邪恶",
"trad":"邪惡",
"pinyin":"xié è",
"def": ["sinister","vicious","wicked","evil"]
},
"上去":
{"simp":"上去",
"trad":"上去",
"pinyin":"shàng qù",
"def": ["to go up"]
},
"掌":
{"simp":"掌",
"trad":"掌",
"pinyin":"zhǎng",
"def": ["palm of the hand","sole of the foot","paw","horseshoe","to slap","to hold in one's hand","to wield"]
},
"民族":
{"simp":"民族",
"trad":"民族",
"pinyin":"mín zú",
"def": ["nationality","ethnic group","CL:個|个[ge4]"]
},
"原样":
{"simp":"原样",
"trad":"原樣",
"pinyin":"yuán yàng",
"def": ["original shape","the same as before"]
},
"核聚变":
{"simp":"核聚变",
"trad":"核聚變",
"pinyin":"hé jù biàn",
"def": ["nuclear fusion"]
},
"捞取":
{"simp":"捞取",
"trad":"撈取",
"pinyin":"lāo qǔ",
"def": ["to fish for","to seek profit (by improper means)"]
},
"政治舞台":
{"simp":"政治舞台",
"trad":"政治舞台",
"pinyin":"zhèng zhì wǔ tái",
"def": ["political arena"]
},
"为":
{"simp":"为",
"trad":"爲",
"pinyin":"wèi",
"def": ["variant of 為|为[wei4]"]
},
"政治":
{"simp":"政治",
"trad":"政治",
"pinyin":"zhèng zhì",
"def": ["politics","political"]
},
"以至于":
{"simp":"以至于",
"trad":"以至於",
"pinyin":"yǐ zhì yú",
"def": ["down to","up to","to the extent that..."]
},
"预测":
{"simp":"预测",
"trad":"預測",
"pinyin":"yù cè",
"def": ["to forecast","to predict"]
},
"进去":
{"simp":"进去",
"trad":"進去",
"pinyin":"jìn qù",
"def": ["to go in"]
},
"着":
{"simp":"着",
"trad":"著",
"pinyin":"zhuó",
"def": ["to wear (clothes)","to contact","to use","to apply"]
},
"特征":
{"simp":"特征",
"trad":"特徵",
"pinyin":"tè zhēng",
"def": ["characteristic","diagnostic property","distinctive feature","trait"]
},
"明白":
{"simp":"明白",
"trad":"明白",
"pinyin":"míng bai",
"def": ["clear","obvious","unequivocal","to understand","to realize"]
},
"写":
{"simp":"写",
"trad":"寫",
"pinyin":"xiě",
"def": ["to write"]
},
"激起":
{"simp":"激起",
"trad":"激起",
"pinyin":"jī qǐ",
"def": ["to arouse","to evoke","to cause","to stir up"]
},
"眩晕":
{"simp":"眩晕",
"trad":"眩暈",
"pinyin":"xuàn yùn",
"def": ["vertigo","dizziness","fainting","feeling of swaying, head spinning, lack of balance or floating (e.g. from a stroke)","Taiwan pr. [xuan4 yun1]"]
},
"领导":
{"simp":"领导",
"trad":"領導",
"pinyin":"lǐng dǎo",
"def": ["lead","leading","to lead","leadership","leader","CL:位[wei4],個|个[ge4]"]
},
"解":
{"simp":"解",
"trad":"解",
"pinyin":"xiè",
"def": ["acrobatic display (esp. on horseback) (old)","variant of 懈[xie4] and 邂[xie4] (old)"]
},
"那样":
{"simp":"那样",
"trad":"那樣",
"pinyin":"nà yàng",
"def": ["that kind","that sort"]
},
"首长":
{"simp":"首长",
"trad":"首長",
"pinyin":"shǒu zhǎng",
"def": ["senior official"]
},
"询问":
{"simp":"询问",
"trad":"詢問",
"pinyin":"xún wèn",
"def": ["to inquire"]
},
"坦克":
{"simp":"坦克",
"trad":"坦克",
"pinyin":"tǎn kè",
"def": ["tank (military vehicle) (loanword)"]
},
"话说":
{"simp":"话说",
"trad":"話說",
"pinyin":"huà shuō",
"def": ["It is said that ... (at the start of a narrative)","to discuss","to recount"]
},
"差异":
{"simp":"差异",
"trad":"差異",
"pinyin":"chā yì",
"def": ["difference","discrepancy"]
},
"得了":
{"simp":"得了",
"trad":"得了",
"pinyin":"dé liǎo",
"def": ["(emphatically, in rhetorical questions) possible"]
},
"不":
{"simp":"不",
"trad":"不",
"pinyin":"bù",
"def": ["(negative prefix)","not","no"]
},
"出于":
{"simp":"出于",
"trad":"出於",
"pinyin":"chū yú",
"def": ["due to","to stem from"]
},
"回答":
{"simp":"回答",
"trad":"回答",
"pinyin":"huí dá",
"def": ["to reply; to answer","reply; answer"]
},
"子":
{"simp":"子",
"trad":"子",
"pinyin":"zi",
"def": ["(noun suffix)"]
},
"杀人":
{"simp":"杀人",
"trad":"殺人",
"pinyin":"shā rén",
"def": ["homicide","to murder","to kill (a person)"]
},
"清除":
{"simp":"清除",
"trad":"清除",
"pinyin":"qīng chú",
"def": ["to clear away","to eliminate","to get rid of"]
},
"肌肤":
{"simp":"肌肤",
"trad":"肌膚",
"pinyin":"jī fū",
"def": ["skin","flesh","fig. close physical relationship"]
},
"给":
{"simp":"给",
"trad":"給",
"pinyin":"jǐ",
"def": ["to supply","to provide"]
},
"乎":
{"simp":"乎",
"trad":"乎",
"pinyin":"hū",
"def": ["(classical particle similar to 於|于[yu2]) in","at","from","because","than","(classical final particle similar to 嗎|吗[ma5], 吧[ba5], 呢[ne5], expressing question, doubt or astonishment)"]
},
"哪门子":
{"simp":"哪门子",
"trad":"哪門子",
"pinyin":"nǎ mén zi",
"def": ["(coll.) (emphasizing a rhetorical question) what","what kind","why on earth"]
},
"背景":
{"simp":"背景",
"trad":"背景",
"pinyin":"bèi jǐng",
"def": ["background","backdrop","context","(fig.) powerful backer","CL:種|种[zhong3]"]
},
"今天":
{"simp":"今天",
"trad":"今天",
"pinyin":"jīn tiān",
"def": ["today","at the present","now"]
},
"头晕目眩":
{"simp":"头晕目眩",
"trad":"頭暈目眩",
"pinyin":"tóu yūn mù xuàn",
"def": ["to have a dizzy spell","dazzled"]
},
"弱":
{"simp":"弱",
"trad":"弱",
"pinyin":"ruò",
"def": ["weak","feeble","young","inferior","(following a decimal or fraction) slightly less than"]
},
"枷":
{"simp":"枷",
"trad":"枷",
"pinyin":"jiā",
"def": ["cangue (wooden collar like stocks used to restrain and punish criminals in China)"]
},
"菲":
{"simp":"菲",
"trad":"菲",
"pinyin":"fěi",
"def": ["poor","humble","unworthy","radish (old)"]
},
"玉":
{"simp":"玉",
"trad":"玉",
"pinyin":"yù",
"def": ["jade"]
},
"网友":
{"simp":"网友",
"trad":"網友",
"pinyin":"wǎng yǒu",
"def": ["online friend","Internet user"]
},
"浮着":
{"simp":"浮着",
"trad":"浮著",
"pinyin":"fú zhe",
"def": ["afloat"]
},
"为了":
{"simp":"为了",
"trad":"為了",
"pinyin":"wèi le",
"def": ["in order to","for the purpose of","so as to"]
},
"未":
{"simp":"未",
"trad":"未",
"pinyin":"wèi",
"def": ["not yet","did not","have not","not","8th earthly branch: 1-3 p.m., 6th solar month (7th July-6th August), year of the Sheep","ancient Chinese compass point: 210°"]
},
"是不是":
{"simp":"是不是",
"trad":"是不是",
"pinyin":"shì bù shì",
"def": ["is or isn't","yes or no","whether or not"]
},
"十六":
{"simp":"十六",
"trad":"十六",
"pinyin":"shí liù",
"def": ["sixteen","16"]
},
"愿意":
{"simp":"愿意",
"trad":"願意",
"pinyin":"yuàn yì",
"def": ["to wish","to want","ready","willing (to do sth)"]
},
"离不开":
{"simp":"离不开",
"trad":"離不開",
"pinyin":"lí bu kāi",
"def": ["inseparable","inevitably linked to"]
},
"放弃":
{"simp":"放弃",
"trad":"放棄",
"pinyin":"fàng qì",
"def": ["to renounce","to abandon","to give up"]
},
"电磁":
{"simp":"电磁",
"trad":"電磁",
"pinyin":"diàn cí",
"def": ["electromagnetic"]
},
"分散":
{"simp":"分散",
"trad":"分散",
"pinyin":"fēn sàn",
"def": ["to scatter","to disperse","to distribute"]
},
"破烂":
{"simp":"破烂",
"trad":"破爛",
"pinyin":"pò làn",
"def": ["worn-out","rotten","dilapidated","tattered","ragged","rubbish","junk"]
},
"希望":
{"simp":"希望",
"trad":"希望",
"pinyin":"xī wàng",
"def": ["to wish for","to desire","hope","CL:個|个[ge4]"]
},
"冒":
{"simp":"冒",
"trad":"冒",
"pinyin":"mào",
"def": ["to emit","to give off","to send out (or up, forth)","to brave","to face","reckless","to falsely adopt (sb's identity etc)","to feign","(literary) to cover"]
},
"地利":
{"simp":"地利",
"trad":"地利",
"pinyin":"dì lì",
"def": ["favorable location","in the right place","productivity of land"]
},
"此事":
{"simp":"此事",
"trad":"此事",
"pinyin":"cǐ shì",
"def": ["this matter"]
},
"感觉":
{"simp":"感觉",
"trad":"感覺",
"pinyin":"gǎn jué",
"def": ["to feel","to become aware of","feeling","sense","perception","CL:個|个[ge4]"]
},
"张开":
{"simp":"张开",
"trad":"張開",
"pinyin":"zhāng kāi",
"def": ["to open up","to spread","to extend"]
},
"旁边":
{"simp":"旁边",
"trad":"旁邊",
"pinyin":"páng biān",
"def": ["lateral","side","to the side","beside"]
},
"没":
{"simp":"没",
"trad":"沒",
"pinyin":"mò",
"def": ["drowned","to end","to die","to inundate"]
},
"爆炸物":
{"simp":"爆炸物",
"trad":"爆炸物",
"pinyin":"bào zhà wù",
"def": ["explosive (material)"]
},
"负责人":
{"simp":"负责人",
"trad":"負責人",
"pinyin":"fù zé rén",
"def": ["person in charge"]
},
"九十":
{"simp":"九十",
"trad":"九十",
"pinyin":"jiǔ shí",
"def": ["ninety"]
},
"潘":
{"simp":"潘",
"trad":"潘",
"pinyin":"Pān",
"def": ["surname Pan","Pan, faun in Greek mythology, son of Hermes"]
},
"迅速":
{"simp":"迅速",
"trad":"迅速",
"pinyin":"xùn sù",
"def": ["rapid","speedy","fast"]
},
"设置":
{"simp":"设置",
"trad":"設置",
"pinyin":"shè zhì",
"def": ["to set up","to install"]
},
"中央":
{"simp":"中央",
"trad":"中央",
"pinyin":"zhōng yāng",
"def": ["central","middle","center","central authorities (of a state)"]
},
"一起":
{"simp":"一起",
"trad":"一起",
"pinyin":"yī qǐ",
"def": ["in the same place","together","with","altogether (in total)"]
},
"光盘":
{"simp":"光盘",
"trad":"光盤",
"pinyin":"guāng pán",
"def": ["compact disc","CD or DVD","CD ROM","CL:片[pian4],張|张[zhang1]"]
},
"问":
{"simp":"问",
"trad":"問",
"pinyin":"wèn",
"def": ["to ask","to inquire"]
},
"造诣":
{"simp":"造诣",
"trad":"造詣",
"pinyin":"zào yì",
"def": ["level of mastery (of a skill or area of knowledge)","(archaic) to pay a visit to sb"]
},
"纪念":
{"simp":"纪念",
"trad":"紀念",
"pinyin":"jì niàn",
"def": ["to commemorate","to remember","CL:個|个[ge4]"]
},
"核反应":
{"simp":"核反应",
"trad":"核反應",
"pinyin":"hé fǎn yìng",
"def": ["nuclear reaction"]
},
"跳":
{"simp":"跳",
"trad":"跳",
"pinyin":"tiào",
"def": ["to jump","to hop","to skip over","to bounce","to palpitate"]
},
"乱":
{"simp":"乱",
"trad":"亂",
"pinyin":"luàn",
"def": ["in confusion or disorder","in a confused state of mind","disorder","upheaval","riot","illicit sexual relations","to throw into disorder","to mix up","indiscriminate","random","arbitrary"]
},
"不算":
{"simp":"不算",
"trad":"不算",
"pinyin":"bù suàn",
"def": ["to not calculate","to not count","to not be considered (as)","to have no weight"]
},
"重压":
{"simp":"重压",
"trad":"重壓",
"pinyin":"zhòng yā",
"def": ["high pressure","bearing a heavy weight"]
},
"薄膜":
{"simp":"薄膜",
"trad":"薄膜",
"pinyin":"bó mó",
"def": ["membrane","film","CL:層|层[ceng2]"]
},
"细长":
{"simp":"细长",
"trad":"細長",
"pinyin":"xì cháng",
"def": ["slender"]
},
"境地":
{"simp":"境地",
"trad":"境地",
"pinyin":"jìng dì",
"def": ["circumstances"]
},
"艺术品":
{"simp":"艺术品",
"trad":"藝術品",
"pinyin":"yì shù pǐn",
"def": ["art piece","work of art","CL:件[jian4]"]
},
"中间":
{"simp":"中间",
"trad":"中間",
"pinyin":"zhōng jiān",
"def": ["between","intermediate","mid","middle"]
},
"说不出":
{"simp":"说不出",
"trad":"說不出",
"pinyin":"shuō bu chū",
"def": ["unable to say"]
},
"着眼":
{"simp":"着眼",
"trad":"著眼",
"pinyin":"zhuó yǎn",
"def": ["to have one's eyes on (a goal)","having sth in mind","to concentrate"]
},
"初升":
{"simp":"初升",
"trad":"初升",
"pinyin":"chū shēng",
"def": ["rising (sun, moon etc)"]
},
"电筒":
{"simp":"电筒",
"trad":"電筒",
"pinyin":"diàn tǒng",
"def": ["flashlight"]
},
"禁":
{"simp":"禁",
"trad":"禁",
"pinyin":"jìn",
"def": ["to prohibit","to forbid"]
},
"不等":
{"simp":"不等",
"trad":"不等",
"pinyin":"bù děng",
"def": ["unequal","varied"]
},
"理想":
{"simp":"理想",
"trad":"理想",
"pinyin":"lǐ xiǎng",
"def": ["an ideal","a dream","ideal","perfect"]
},
"这么":
{"simp":"这么",
"trad":"這麼",
"pinyin":"zhè me",
"def": ["so much","this much","how much?","this way","like this"]
},
"频":
{"simp":"频",
"trad":"頻",
"pinyin":"pín",
"def": ["frequency","frequently","repetitious"]
},
"由":
{"simp":"由",
"trad":"由",
"pinyin":"yóu",
"def": ["to follow","from","because of","due to","by","via","through","(before a noun and a verb) it is for ... to ..."]
},
"把":
{"simp":"把",
"trad":"把",
"pinyin":"bà",
"def": ["handle"]
},
"排":
{"simp":"排",
"trad":"排",
"pinyin":"pái",
"def": ["a row","a line","to set in order","to arrange","to line up","to eliminate","to drain","to push open","platoon","raft","classifier for lines, rows etc"]
},
"告诉":
{"simp":"告诉",
"trad":"告訴",
"pinyin":"gào su",
"def": ["to tell","to inform","to let know"]
},
"一遍":
{"simp":"一遍",
"trad":"一遍",
"pinyin":"yī biàn",
"def": ["one time (all the way through)","once through"]
},
"弄":
{"simp":"弄",
"trad":"衖",
"pinyin":"lòng",
"def": ["variant of 弄[long4]"]
},
"要命":
{"simp":"要命",
"trad":"要命",
"pinyin":"yào mìng",
"def": ["to cause sb's death","extremely; terribly","(used in complaining about sth) to be a nuisance"]
},
"随机":
{"simp":"随机",
"trad":"隨機",
"pinyin":"suí jī",
"def": ["according to the situation","pragmatic","random"]
},
"提出":
{"simp":"提出",
"trad":"提出",
"pinyin":"tí chū",
"def": ["to raise (an issue)","to propose","to put forward","to suggest","to post (on a website)","to withdraw (cash)"]
},
"于":
{"simp":"于",
"trad":"於",
"pinyin":"yú",
"def": ["in","at","to","from","by","than","out of"]
},
"猜测":
{"simp":"猜测",
"trad":"猜測",
"pinyin":"cāi cè",
"def": ["to guess","to conjecture","to surmise"]
},
"所在":
{"simp":"所在",
"trad":"所在",
"pinyin":"suǒ zài",
"def": ["place","location","(after a noun) place where it is located"]
},
"比来":
{"simp":"比来",
"trad":"比來",
"pinyin":"bǐ lái",
"def": ["lately","recently"]
},
"熟悉":
{"simp":"熟悉",
"trad":"熟悉",
"pinyin":"shú xī",
"def": ["to be familiar with","to know well"]
},
"掉":
{"simp":"掉",
"trad":"掉",
"pinyin":"diào",
"def": ["to fall","to drop","to lag behind","to lose","to go missing","to reduce","fall (in prices)","to lose (value, weight etc)","to wag","to swing","to turn","to change","to exchange","to swap","to show off","to shed (hair)","(used after certain verbs to express completion, fulfillment, removal etc)"]
},
"无限":
{"simp":"无限",
"trad":"無限",
"pinyin":"wú xiàn",
"def": ["unlimited","unbounded"]
},
"留下":
{"simp":"留下",
"trad":"留下",
"pinyin":"liú xià",
"def": ["to leave behind","to stay behind","to remain","to keep","not to let (sb) go"]
},
"捐给":
{"simp":"捐给",
"trad":"捐給",
"pinyin":"juān gěi",
"def": ["to donate"]
},
"黑炭":
{"simp":"黑炭",
"trad":"黑炭",
"pinyin":"hēi tàn",
"def": ["coal","charcoal","(of skin) darkly pigmented","charcoal (color)","bituminous coal (mining)"]
},
"吸引":
{"simp":"吸引",
"trad":"吸引",
"pinyin":"xī yǐn",
"def": ["to attract (interest, investment etc)","CL:個|个[ge4]"]
},
"子目录":
{"simp":"子目录",
"trad":"子目錄",
"pinyin":"zǐ mù lù",
"def": ["subdirectory (computing)"]
},
"院士":
{"simp":"院士",
"trad":"院士",
"pinyin":"yuàn shì",
"def": ["scholar","academician","fellow (of an academy)"]
},
"似曾相识":
{"simp":"似曾相识",
"trad":"似曾相識",
"pinyin":"sì céng xiāng shí",
"def": ["déjà vu (the experience of seeing exactly the same situation a second time)","seemingly familiar","apparently already acquainted"]
},
"费解":
{"simp":"费解",
"trad":"費解",
"pinyin":"fèi jiě",
"def": ["to be puzzled","hard to understand","unintelligible","incomprehensible"]
},
"已经":
{"simp":"已经",
"trad":"已經",
"pinyin":"yǐ jīng",
"def": ["already"]
},
"文学家":
{"simp":"文学家",
"trad":"文學家",
"pinyin":"wén xué jiā",
"def": ["writer","man of letters","CL:個|个[ge4]"]
},
"没想到":
{"simp":"没想到",
"trad":"沒想到",
"pinyin":"méi xiǎng dào",
"def": ["didn't expect"]
},
"容忍":
{"simp":"容忍",
"trad":"容忍",
"pinyin":"róng rěn",
"def": ["to put up with","to tolerate"]
},
"有著":
{"simp":"有着",
"trad":"有著",
"pinyin":"yǒu zhe",
"def": ["to have","to possess"]
},
"草屋":
{"simp":"草屋",
"trad":"草屋",
"pinyin":"cǎo wū",
"def": ["thatched hut"]
},
"坐":
{"simp":"坐",
"trad":"坐",
"pinyin":"zuò",
"def": ["to sit","to take a seat","to take (a bus, airplane etc)","to bear fruit","variant of 座[zuo4]"]
},
"淹没":
{"simp":"淹没",
"trad":"淹沒",
"pinyin":"yān mò",
"def": ["to submerge","to drown","to flood","to drown out (also fig.)"]
},
"迄今为止":
{"simp":"迄今为止",
"trad":"迄今為止",
"pinyin":"qì jīn wéi zhǐ",
"def": ["so far","up to now","still (not)"]
},
"法则":
{"simp":"法则",
"trad":"法則",
"pinyin":"fǎ zé",
"def": ["law","rule","code"]
},
"许多":
{"simp":"许多",
"trad":"許多",
"pinyin":"xǔ duō",
"def": ["many","a lot of","much"]
},
"探头":
{"simp":"探头",
"trad":"探頭",
"pinyin":"tàn tóu",
"def": ["to extend one's head (out or into)","a probe","detector","search unit"]
},
"苦":
{"simp":"苦",
"trad":"苦",
"pinyin":"kǔ",
"def": ["bitter","hardship","pain","to suffer","to bring suffering to","painstakingly"]
},
"启动":
{"simp":"启动",
"trad":"啟動",
"pinyin":"qǐ dòng",
"def": ["to start (a machine)","(fig.) to set in motion","to launch (an operation)","to activate (a plan)"]
},
"杰克逊":
{"simp":"杰克逊",
"trad":"傑克遜",
"pinyin":"Jié kè xùn",
"def": ["Jackson (name)","Jackson city, capital of Mississippi"]
},
"难题":
{"simp":"难题",
"trad":"難題",
"pinyin":"nán tí",
"def": ["difficult problem"]
},
"片刻":
{"simp":"片刻",
"trad":"片刻",
"pinyin":"piàn kè",
"def": ["short period of time","a moment"]
},
"羽毛":
{"simp":"羽毛",
"trad":"羽毛",
"pinyin":"yǔ máo",
"def": ["feather","plumage","plume"]
},
"对外":
{"simp":"对外",
"trad":"對外",
"pinyin":"duì wài",
"def": ["external","foreign","pertaining to external or foreign (affairs)"]
},
"宽敞":
{"simp":"宽敞",
"trad":"寬敞",
"pinyin":"kuān chang",
"def": ["spacious","wide"]
},
"西方":
{"simp":"西方",
"trad":"西方",
"pinyin":"Xī fāng",
"def": ["the West","the Occident","Western countries"]
},
"放下":
{"simp":"放下",
"trad":"放下",
"pinyin":"fàng xià",
"def": ["to lay down","to put down","to let go of","to relinquish","to set aside","to lower (the blinds etc)"]
},
"娃":
{"simp":"娃",
"trad":"娃",
"pinyin":"wá",
"def": ["baby","doll"]
},
"逃":
{"simp":"逃",
"trad":"逃",
"pinyin":"táo",
"def": ["to escape","to run away","to flee"]
},
"建筑":
{"simp":"建筑",
"trad":"建築",
"pinyin":"jiàn zhù",
"def": ["to construct","building","CL:個|个[ge4]"]
},
"搬迁":
{"simp":"搬迁",
"trad":"搬遷",
"pinyin":"bān qiān",
"def": ["to move","to relocate","removal"]
},
"车厢":
{"simp":"车厢",
"trad":"車廂",
"pinyin":"chē xiāng",
"def": ["carriage","CL:節|节[jie2]"]
},
"哥白尼":
{"simp":"哥白尼",
"trad":"哥白尼",
"pinyin":"Gē bái ní",
"def": ["Mikolaj Kopernik or Nicolaus Copernicus (1473-1543), Polish astronomer, mathematician and polymath"]
},
"一部分":
{"simp":"一部分",
"trad":"一部分",
"pinyin":"yī bù fen",
"def": ["portion","part of","subset"]
},
"温柔":
{"simp":"温柔",
"trad":"溫柔",
"pinyin":"wēn róu",
"def": ["gentle and soft","tender"]
},
"半天":
{"simp":"半天",
"trad":"半天",
"pinyin":"bàn tiān",
"def": ["half of the day","a long time","quite a while","midair","CL:個|个[ge4]"]
},
"躲":
{"simp":"躲",
"trad":"躲",
"pinyin":"duǒ",
"def": ["to hide","to dodge","to avoid"]
},
"想出":
{"simp":"想出",
"trad":"想出",
"pinyin":"xiǎng chū",
"def": ["to figure out","to work out (a solution etc)","to think up","to come up with (an idea etc)"]
},
"里":
{"simp":"里",
"trad":"里",
"pinyin":"lǐ",
"def": ["li, ancient measure of length, approx. 500 m","neighborhood","ancient administrative unit of 25 families","(Tw) borough, administrative unit between the township 鎮|镇[zhen4] and neighborhood 鄰|邻[lin2] levels"]
},
"运动":
{"simp":"运动",
"trad":"運動",
"pinyin":"yùn dòng",
"def": ["to move","to exercise","sports","exercise","motion","movement","campaign","CL:場|场[chang3]"]
},
"大武":
{"simp":"大武",
"trad":"大武",
"pinyin":"Dà wǔ",
"def": ["Dawu or Tawu township in Taitung County 臺東縣|台东县[Tai2 dong1 Xian4], southeast Taiwan"]
},
"话音":
{"simp":"话音",
"trad":"話音",
"pinyin":"huà yīn",
"def": ["one's speaking voice","tone","implication"]
},
"向后":
{"simp":"向后",
"trad":"向後",
"pinyin":"xiàng hòu",
"def": ["backward"]
},
"锁定":
{"simp":"锁定",
"trad":"鎖定",
"pinyin":"suǒ dìng",
"def": ["to lock (a door)","to close with a latch","to lock into place","a lock","a latch","to lock a computer file (to prevent it being overwritten)","to lock (denying access to a computer system or device or files, e.g. by password-protection)","to focus attention on","to target"]
},
"头顶":
{"simp":"头顶",
"trad":"頭頂",
"pinyin":"tóu dǐng",
"def": ["top of the head"]
},
"地点":
{"simp":"地点",
"trad":"地點",
"pinyin":"dì diǎn",
"def": ["place","site","location","venue","CL:個|个[ge4]"]
},
"鸟儿":
{"simp":"鸟儿",
"trad":"鳥兒",
"pinyin":"niǎo r5",
"def": ["bird"]
},
"拓宽":
{"simp":"拓宽",
"trad":"拓寬",
"pinyin":"tuò kuān",
"def": ["to broaden"]
},
"事业":
{"simp":"事业",
"trad":"事業",
"pinyin":"shì yè",
"def": ["undertaking","project","activity","(charitable, political or revolutionary) cause","publicly funded institution, enterprise or foundation","career","occupation","CL:個|个[ge4]"]
},
"是":
{"simp":"是",
"trad":"昰",
"pinyin":"shì",
"def": ["variant of 是[shi4]","(used in given names)"]
},
"相反":
{"simp":"相反",
"trad":"相反",
"pinyin":"xiāng fǎn",
"def": ["opposite","contrary"]
},
"不该":
{"simp":"不该",
"trad":"不該",
"pinyin":"bù gāi",
"def": ["should not","to owe nothing"]
},
"冲":
{"simp":"冲",
"trad":"衝",
"pinyin":"chòng",
"def": ["powerful","vigorous","pungent","towards","in view of"]
},
"上次":
{"simp":"上次",
"trad":"上次",
"pinyin":"shàng cì",
"def": ["last time"]
},
"小行星":
{"simp":"小行星",
"trad":"小行星",
"pinyin":"xiǎo xíng xīng",
"def": ["asteroid","minor planet"]
},
"倒流":
{"simp":"倒流",
"trad":"倒流",
"pinyin":"dào liú",
"def": ["to flow backwards","reverse flow"]
},
"信号":
{"simp":"信号",
"trad":"信號",
"pinyin":"xìn hào",
"def": ["signal"]
},
"优美":
{"simp":"优美",
"trad":"優美",
"pinyin":"yōu měi",
"def": ["graceful","fine","elegant"]
},
"出名":
{"simp":"出名",
"trad":"出名",
"pinyin":"chū míng",
"def": ["well-known for sth","to become well known","to make one's mark","to lend one's name (to an event, endeavor etc)"]
},
"游戏":
{"simp":"游戏",
"trad":"遊戲",
"pinyin":"yóu xì",
"def": ["game","CL:場|场[chang3]","to play"]
},
"震昏":
{"simp":"震昏",
"trad":"震昏",
"pinyin":"zhèn hūn",
"def": ["to knock out (of a jolt from an earthquake or crash)"]
},
"关门":
{"simp":"关门",
"trad":"關門",
"pinyin":"guān mén",
"def": ["to close a door","to lock a door","(of a shop etc) to close (for the night, or permanently)"]
},
"睡相":
{"simp":"睡相",
"trad":"睡相",
"pinyin":"shuì xiàng",
"def": ["sleeping posture"]
},
"主要":
{"simp":"主要",
"trad":"主要",
"pinyin":"zhǔ yào",
"def": ["main","principal","major","primary"]
},
"亮光":
{"simp":"亮光",
"trad":"亮光",
"pinyin":"liàng guāng",
"def": ["light","beam of light","gleam of light","light reflected from an object"]
},
"员":
{"simp":"员",
"trad":"員",
"pinyin":"yuán",
"def": ["person","employee","member"]
},
"走向":
{"simp":"走向",
"trad":"走向",
"pinyin":"zǒu xiàng",
"def": ["direction","strike (i.e. angle of inclination in geology)","inclination","trend","to move towards","to head for"]
},
"濒临":
{"simp":"濒临",
"trad":"瀕臨",
"pinyin":"bīn lín",
"def": ["on the edge of","(fig.) on the verge of","close to"]
},
"真相":
{"simp":"真相",
"trad":"真相",
"pinyin":"zhēn xiàng",
"def": ["the truth about sth","the actual facts"]
},
"消逝":
{"simp":"消逝",
"trad":"消逝",
"pinyin":"xiāo shì",
"def": ["to fade away"]
},
"工业":
{"simp":"工业",
"trad":"工業",
"pinyin":"gōng yè",
"def": ["industry"]
},
"过得":
{"simp":"过得",
"trad":"過得",
"pinyin":"guò dé",
"def": ["How are you getting by?","How's life?","contraction of 過得去|过得去, can get by","tolerably well","not too bad"]
},
"扭曲":
{"simp":"扭曲",
"trad":"扭曲",
"pinyin":"niǔ qū",
"def": ["to twist","to warp","to distort"]
},
"带":
{"simp":"带",
"trad":"帶",
"pinyin":"dài",
"def": ["band","belt","girdle","ribbon","tire","area","zone","region","CL:條|条[tiao2]","to wear","to carry","to take along","to bear (i.e. to have)","to lead","to bring","to look after","to raise"]
},
"震惊":
{"simp":"震惊",
"trad":"震驚",
"pinyin":"zhèn jīng",
"def": ["to shock","to astonish"]
},
"锅":
{"simp":"锅",
"trad":"鍋",
"pinyin":"guō",
"def": ["pot; pan; wok; cauldron","pot-shaped thing","CL:口[kou3],隻|只[zhi1]"]
},
"长":
{"simp":"长",
"trad":"長",
"pinyin":"zhǎng",
"def": ["chief","head","elder","to grow","to develop","to increase","to enhance"]
},
"就":
{"simp":"就",
"trad":"就",
"pinyin":"jiù",
"def": ["at once","right away","only","just (emphasis)","as early as","already","as soon as","then","in that case","as many as","even if","to approach","to move towards","to undertake","to engage in","to suffer","subjected to","to accomplish","to take advantage of","to go with (of foods)","with regard to","concerning"]
},
"战争":
{"simp":"战争",
"trad":"戰爭",
"pinyin":"zhàn zhēng",
"def": ["war","conflict","CL:場|场[chang2],次[ci4]"]
},
"丫头":
{"simp":"丫头",
"trad":"丫頭",
"pinyin":"yā tou",
"def": ["girl","servant girl","(used deprecatingly, but sometimes also as a term of endearment)"]
},
"俩":
{"simp":"俩",
"trad":"倆",
"pinyin":"liǎng",
"def": ["used in 伎倆|伎俩[ji4 liang3]"]
},
"接触":
{"simp":"接触",
"trad":"接觸",
"pinyin":"jiē chù",
"def": ["to touch","to contact","access","in touch with"]
},
"找到":
{"simp":"找到",
"trad":"找到",
"pinyin":"zhǎo dào",
"def": ["to find"]
},
"这不":
{"simp":"这不",
"trad":"這不",
"pinyin":"zhè bu",
"def": ["(coll.) As a matter of fact, ... (used to introduce evidence for what one has just asserted)"]
},
"少见":
{"simp":"少见",
"trad":"少見",
"pinyin":"shǎo jiàn",
"def": ["rare; seldom seen","(formal) it's a rare pleasure to see you"]
},
"能够":
{"simp":"能够",
"trad":"能夠",
"pinyin":"néng gòu",
"def": ["to be capable of","to be able to","can"]
},
"联系":
{"simp":"联系",
"trad":"聯繫",
"pinyin":"lián xì",
"def": ["connection","contact","relation","to get in touch with","to integrate","to link","to touch"]
},
"伟大":
{"simp":"伟大",
"trad":"偉大",
"pinyin":"wěi dà",
"def": ["huge","great","grand","worthy of the greatest admiration","important (contribution etc)"]
},
"口音":
{"simp":"口音",
"trad":"口音",
"pinyin":"kǒu yin",
"def": ["voice","accent"]
},
"致":
{"simp":"致",
"trad":"致",
"pinyin":"zhì",
"def": ["to send","to devote","to deliver","to cause","to convey"]
},
"环保":
{"simp":"环保",
"trad":"環保",
"pinyin":"huán bǎo",
"def": ["environmental protection","environmentally friendly","abbr. for 環境保護|环境保护[huan2 jing4 bao3 hu4]"]
},
"子路":
{"simp":"子路",
"trad":"子路",
"pinyin":"Zǐ Lù",
"def": ["Zi Lu (542-480 BC), disciple of Confucius 孔夫子[Kong3 fu1 zi3], also known as Ji Lu 季路[Ji4 Lu4]"]
},
"负责任":
{"simp":"负责任",
"trad":"負責任",
"pinyin":"fù zé rèn",
"def": ["to take responsibility","to bear responsibility","to be responsible"]
},
"出卖":
{"simp":"出卖",
"trad":"出賣",
"pinyin":"chū mài",
"def": ["to offer for sale","to sell","to sell out or betray"]
},
"重点":
{"simp":"重点",
"trad":"重點",
"pinyin":"zhòng diǎn",
"def": ["important point; main point; focus","key (project etc)","to focus on; to put the emphasis on"]
},
"伊":
{"simp":"伊",
"trad":"伊",
"pinyin":"yī",
"def": ["(old) third person singular pronoun (\"he\" or \"she\")","second person singular pronoun (\"you\")","(May 4th period) third person singular feminine pronoun (\"she\")","(Classical Chinese) introductory particle with no specific meaning","that (preceding a noun)"]
},
"有缘":
{"simp":"有缘",
"trad":"有緣",
"pinyin":"yǒu yuán",
"def": ["related","brought together by fate"]
},
"怎么":
{"simp":"怎么",
"trad":"怎麽",
"pinyin":"zěn me",
"def": ["variant of 怎麼|怎么[zen3 me5]"]
},
"那天":
{"simp":"那天",
"trad":"那天",
"pinyin":"nà tiān",
"def": ["that day","the other day"]
},
"尔":
{"simp":"尔",
"trad":"爾",
"pinyin":"ěr",
"def": ["thus","so","like that","you","thou"]
},
"普通":
{"simp":"普通",
"trad":"普通",
"pinyin":"pǔ tōng",
"def": ["common","ordinary","general","average"]
},
"设备":
{"simp":"设备",
"trad":"設備",
"pinyin":"shè bèi",
"def": ["equipment","facilities","installations","CL:個|个[ge4]"]
},
"官员":
{"simp":"官员",
"trad":"官員",
"pinyin":"guān yuán",
"def": ["official (in an organization or government)","administrator"]
},
"单薄":
{"simp":"单薄",
"trad":"單薄",
"pinyin":"dān bó",
"def": ["weak","frail","thin","flimsy"]
},
"中科院":
{"simp":"中科院",
"trad":"中科院",
"pinyin":"Zhōng kē yuàn",
"def": ["abbr. for 中國社會科學院|中国社会科学院[Zhong1 guo2 She4 hui4 Ke1 xue2 yuan4], Chinese Academy of Sciences (CAS)"]
},
"交汇":
{"simp":"交汇",
"trad":"交彙",
"pinyin":"jiāo huì",
"def": ["variant of 交匯|交汇","to flow together","confluence (of rivers, airflow, roads)","(international) cooperation"]
},
"声":
{"simp":"声",
"trad":"聲",
"pinyin":"shēng",
"def": ["sound","voice","tone","noise","reputation","classifier for sounds"]
},
"是以":
{"simp":"是以",
"trad":"是以",
"pinyin":"shì yǐ",
"def": ["therefore","thus","so"]
},
"一旦":
{"simp":"一旦",
"trad":"一旦",
"pinyin":"yī dàn",
"def": ["in case (sth happens)","if","once (sth happens, then...)","when","in a short time","in one day"]
},
"呼之欲出":
{"simp":"呼之欲出",
"trad":"呼之欲出",
"pinyin":"hū zhī yù chū",
"def": ["lit. ready to appear at the call (idiom)","fig. on the verge of coming out into the open","(of a person's choice etc) on the point of being disclosed","(of an artistic depiction) vividly portrayed"]
},
"对象":
{"simp":"对象",
"trad":"對象",
"pinyin":"duì xiàng",
"def": ["target","object","partner","boyfriend","girlfriend","CL:個|个[ge4]"]
},
"全无":
{"simp":"全无",
"trad":"全無",
"pinyin":"quán wú",
"def": ["none","completely without"]
},
"而":
{"simp":"而",
"trad":"而",
"pinyin":"ér",
"def": ["and","as well as","and so","but (not)","yet (not)","(indicates causal relation)","(indicates change of state)","(indicates contrast)"]
},
"上报":
{"simp":"上报",
"trad":"上報",
"pinyin":"shàng bào",
"def": ["to report to one's superiors","to appear in the news","to reply to a letter"]
},
"浮出水面":
{"simp":"浮出水面",
"trad":"浮出水面",
"pinyin":"fú chū shuǐ miàn",
"def": ["to float up (idiom); to become evident","to surface","to appear"]
},
"醒":
{"simp":"醒",
"trad":"醒",
"pinyin":"xǐng",
"def": ["to wake up","to be awake","to become aware","to sober up","to come to"]
},
"思":
{"simp":"思",
"trad":"思",
"pinyin":"sī",
"def": ["to think","to consider"]
},
"采取":
{"simp":"采取",
"trad":"採取",
"pinyin":"cǎi qǔ",
"def": ["to adopt or carry out (measures, policies, course of action)","to take"]
},
"界":
{"simp":"界",
"trad":"界",
"pinyin":"jiè",
"def": ["(bound form) boundary; border","(bound form) realm"]
},
"宁":
{"simp":"宁",
"trad":"甯",
"pinyin":"níng",
"def": ["variant of 寧|宁[ning2]"]
},
"可以":
{"simp":"可以",
"trad":"可以",
"pinyin":"kě yǐ",
"def": ["can","may","possible","able to","not bad","pretty good"]
},
"鞭炮":
{"simp":"鞭炮",
"trad":"鞭炮",
"pinyin":"biān pào",
"def": ["firecrackers","string of small firecrackers","CL:枚[mei2]"]
},
"因而":
{"simp":"因而",
"trad":"因而",
"pinyin":"yīn ér",
"def": ["therefore","as a result","thus","and as a result, ..."]
},
"没有":
{"simp":"没有",
"trad":"沒有",
"pinyin":"méi yǒu",
"def": ["haven't","hasn't","doesn't exist","to not have","to not be"]
},
"冒烟":
{"simp":"冒烟",
"trad":"冒煙",
"pinyin":"mào yān",
"def": ["to discharge smoke","to fume with rage"]
},
"打开":
{"simp":"打开",
"trad":"打開",
"pinyin":"dǎ kāi",
"def": ["to open","to show (a ticket)","to turn on","to switch on"]
},
"发给":
{"simp":"发给",
"trad":"發給",
"pinyin":"fā gěi",
"def": ["to issue","to grant","to distribute"]
},
"极端":
{"simp":"极端",
"trad":"極端",
"pinyin":"jí duān",
"def": ["extreme"]
},
"一排":
{"simp":"一排",
"trad":"一排",
"pinyin":"yī pái",
"def": ["row"]
},
"权力":
{"simp":"权力",
"trad":"權力",
"pinyin":"quán lì",
"def": ["power","authority"]
},
"人":
{"simp":"人",
"trad":"人",
"pinyin":"rén",
"def": ["person","people","CL:個|个[ge4],位[wei4]"]
},
"暴":
{"simp":"暴",
"trad":"暴",
"pinyin":"bào",
"def": ["sudden","violent","cruel","to show or expose","to injure"]
},
"三条":
{"simp":"三条",
"trad":"三條",
"pinyin":"sān tiáo",
"def": ["three of a kind (poker)"]
},
"朝":
{"simp":"朝",
"trad":"朝",
"pinyin":"zhāo",
"def": ["morning"]
},
"前面":
{"simp":"前面",
"trad":"前面",
"pinyin":"qián miàn",
"def": ["ahead","in front","preceding","above","also pr. [qian2 mian5]"]
},
"奇":
{"simp":"奇",
"trad":"奇",
"pinyin":"qí",
"def": ["strange","odd","weird","wonderful","surprisingly","unusually"]
},
"什么":
{"simp":"什么",
"trad":"什麼",
"pinyin":"shén me",
"def": ["what?","something","anything"]
},
"寒气":
{"simp":"寒气",
"trad":"寒氣",
"pinyin":"hán qì",
"def": ["cold air"]
},
"违反":
{"simp":"违反",
"trad":"違反",
"pinyin":"wéi fǎn",
"def": ["to violate (a law)"]
},
"辅导":
{"simp":"辅导",
"trad":"輔導",
"pinyin":"fǔ dǎo",
"def": ["to give guidance","to mentor","to counsel","to coach","to tutor"]
},
"时":
{"simp":"时",
"trad":"時",
"pinyin":"shí",
"def": ["o'clock","time","when","hour","season","period"]
},
"百":
{"simp":"百",
"trad":"百",
"pinyin":"bǎi",
"def": ["hundred","numerous","all kinds of"]
},
"至于":
{"simp":"至于",
"trad":"至於",
"pinyin":"zhì yú",
"def": ["as for","as to","to go so far as to"]
},
"一阵":
{"simp":"一阵",
"trad":"一陣",
"pinyin":"yī zhèn",
"def": ["a burst","a fit","a peal","a spell (period of time)"]
},
"望":
{"simp":"望",
"trad":"朢",
"pinyin":"wàng",
"def": ["15th day of month (lunar calendar)","old variant of 望[wang4]"]
},
"得知":
{"simp":"得知",
"trad":"得知",
"pinyin":"dé zhī",
"def": ["to find out","to learn of"]
},
"您":
{"simp":"您",
"trad":"您",
"pinyin":"nín",
"def": ["you (courteous, as opposed to informal 你[ni3])"]
},
"楼上":
{"simp":"楼上",
"trad":"樓上",
"pinyin":"lóu shàng",
"def": ["upstairs","(Internet slang) previous poster in a forum thread"]
},
"秒":
{"simp":"秒",
"trad":"秒",
"pinyin":"miǎo",
"def": ["second (unit of time)","arc second (angular measurement unit)","(coll.) instantly"]
},
"热情":
{"simp":"热情",
"trad":"熱情",
"pinyin":"rè qíng",
"def": ["cordial","enthusiastic","passion","passionate","passionately"]
},
"不下":
{"simp":"不下",
"trad":"不下",
"pinyin":"bù xià",
"def": ["to be not less than (a certain quantity, amount etc)"]
},
"块":
{"simp":"块",
"trad":"塊",
"pinyin":"kuài",
"def": ["lump (of earth)","chunk","piece","classifier for pieces of cloth, cake, soap etc","(coll.) classifier for money and currency units"]
},
"正在":
{"simp":"正在",
"trad":"正在",
"pinyin":"zhèng zài",
"def": ["just at (that time)","right in (that place)","right in the middle of (doing sth)"]
},
"沙粒":
{"simp":"沙粒",
"trad":"沙粒",
"pinyin":"shā lì",
"def": ["grain of sand"]
},
"海关":
{"simp":"海关",
"trad":"海關",
"pinyin":"hǎi guān",
"def": ["customs (i.e. border crossing inspection)","CL:個|个[ge4]"]
},
"代价":
{"simp":"代价",
"trad":"代價",
"pinyin":"dài jià",
"def": ["price","cost","consideration (in share dealing)"]
},
"在":
{"simp":"在",
"trad":"在",
"pinyin":"zài",
"def": ["(located) at","(to be) in","to exist","in the middle of doing sth","(indicating an action in progress)"]
},
"看不出":
{"simp":"看不出",
"trad":"看不出",
"pinyin":"kàn bu chū",
"def": ["can't see","can't make out","unable to tell"]
},
"杀":
{"simp":"杀",
"trad":"殺",
"pinyin":"shā",
"def": ["to kill","to murder","to attack","to weaken or reduce","to smart (dialect)","(used after a verb) extremely"]
},
"太阳能":
{"simp":"太阳能",
"trad":"太陽能",
"pinyin":"tài yáng néng",
"def": ["solar energy"]
},
"一种":
{"simp":"一种",
"trad":"一種",
"pinyin":"yī zhǒng",
"def": ["one kind of","one type of"]
},
"的确":
{"simp":"的确",
"trad":"的確",
"pinyin":"dí què",
"def": ["really","indeed"]
},
"摆放":
{"simp":"摆放",
"trad":"擺放",
"pinyin":"bǎi fàng",
"def": ["to set up","to arrange","to lay out"]
},
"选择":
{"simp":"选择",
"trad":"選擇",
"pinyin":"xuǎn zé",
"def": ["to select","to pick","choice","option","alternative"]
},
"赞美":
{"simp":"赞美",
"trad":"讚美",
"pinyin":"zàn měi",
"def": ["to admire","to praise","to eulogize"]
},
"级别":
{"simp":"级别",
"trad":"級別",
"pinyin":"jí bié",
"def": ["(military) rank","level","grade"]
},
"得以":
{"simp":"得以",
"trad":"得以",
"pinyin":"dé yǐ",
"def": ["able to","so that sb can","enabling","in order to","finally in a position to","with sth in view"]
},
"因为":
{"simp":"因为",
"trad":"因為",
"pinyin":"yīn wèi",
"def": ["because","owing to","on account of"]
},
"美元":
{"simp":"美元",
"trad":"美元",
"pinyin":"Měi yuán",
"def": ["American dollar","US dollar"]
},
"裸体":
{"simp":"裸体",
"trad":"裸體",
"pinyin":"luǒ tǐ",
"def": ["naked"]
},
"但是":
{"simp":"但是",
"trad":"但是",
"pinyin":"dàn shì",
"def": ["but","however"]
},
"直到":
{"simp":"直到",
"trad":"直到",
"pinyin":"zhí dào",
"def": ["until"]
},
"山村":
{"simp":"山村",
"trad":"山村",
"pinyin":"shān cūn",
"def": ["mountain village"]
},
"失业":
{"simp":"失业",
"trad":"失業",
"pinyin":"shī yè",
"def": ["unemployment","to lose one's job"]
},
"三体":
{"simp":"三体",
"trad":"三體",
"pinyin":"sān tǐ",
"def": ["trisomy"]
},
"默默":
{"simp":"默默",
"trad":"默默",
"pinyin":"mò mò",
"def": ["in silence","not speaking"]
},
"新生":
{"simp":"新生",
"trad":"新生",
"pinyin":"xīn shēng",
"def": ["new","newborn","emerging","nascent","rebirth","regeneration","new life","new student"]
},
"技术员":
{"simp":"技术员",
"trad":"技術員",
"pinyin":"jì shù yuán",
"def": ["technician","CL:個|个[ge4]"]
},
"不一样":
{"simp":"不一样",
"trad":"不一樣",
"pinyin":"bù yī yàng",
"def": ["different","distinctive","unlike"]
},
"移":
{"simp":"移",
"trad":"移",
"pinyin":"yí",
"def": ["to move","to shift","to change","to alter","to remove"]
},
"军事":
{"simp":"军事",
"trad":"軍事",
"pinyin":"jūn shì",
"def": ["military affairs","military matters","military"]
},
"智能":
{"simp":"智能",
"trad":"智能",
"pinyin":"zhì néng",
"def": ["intelligent","able","smart (phone, system, bomb etc)"]
},
"回去":
{"simp":"回去",
"trad":"回去",
"pinyin":"huí qu",
"def": ["to return","to go back"]
},
"汽":
{"simp":"汽",
"trad":"汽",
"pinyin":"qì",
"def": ["steam","vapor"]
},
"事故":
{"simp":"事故",
"trad":"事故",
"pinyin":"shì gù",
"def": ["accident","CL:樁|桩[zhuang1],起[qi3],次[ci4]"]
},
"政委":
{"simp":"政委",
"trad":"政委",
"pinyin":"zhèng wěi",
"def": ["political commissar (within the army)"]
},
"低级":
{"simp":"低级",
"trad":"低級",
"pinyin":"dī jí",
"def": ["low level","rudimentary","vulgar","low","inferior"]
},
"聚变":
{"simp":"聚变",
"trad":"聚變",
"pinyin":"jù biàn",
"def": ["fusion (physics)"]
},
"来自":
{"simp":"来自",
"trad":"來自",
"pinyin":"lái zì",
"def": ["to come from (a place)","From: (in email header)"]
},
"身材":
{"simp":"身材",
"trad":"身材",
"pinyin":"shēn cái",
"def": ["stature","build (height and weight)","figure"]
},
"本质":
{"simp":"本质",
"trad":"本質",
"pinyin":"běn zhì",
"def": ["essence","nature","innate character","intrinsic quality"]
},
"外形":
{"simp":"外形",
"trad":"外形",
"pinyin":"wài xíng",
"def": ["figure","shape","external form","contour"]
},
"干什么":
{"simp":"干什么",
"trad":"幹什麼",
"pinyin":"gàn shén me",
"def": ["what are you doing?","what's he up to?"]
},
"种地":
{"simp":"种地",
"trad":"種地",
"pinyin":"zhòng dì",
"def": ["to farm","to work the land"]
},
"号":
{"simp":"号",
"trad":"號",
"pinyin":"hào",
"def": ["ordinal number","day of a month","mark","sign","business establishment","size","ship suffix","horn (wind instrument)","bugle call","assumed name","to take a pulse","classifier used to indicate number of people"]
},
"讨厌":
{"simp":"讨厌",
"trad":"討厭",
"pinyin":"tǎo yàn",
"def": ["to dislike","to loathe","disagreeable","troublesome","annoying"]
},
"昔日":
{"simp":"昔日",
"trad":"昔日",
"pinyin":"xī rì",
"def": ["former days","in the past"]
},
"火种":
{"simp":"火种",
"trad":"火種",
"pinyin":"huǒ zhǒng",
"def": ["tinder","source of a fire","inflammable material","(fig.) spark (of a revolution etc)"]
},
"责任":
{"simp":"责任",
"trad":"責任",
"pinyin":"zé rèn",
"def": ["responsibility","blame","duty","CL:個|个[ge4]"]
},
"辐射":
{"simp":"辐射",
"trad":"輻射",
"pinyin":"fú shè",
"def": ["radiation"]
},
"后":
{"simp":"后",
"trad":"後",
"pinyin":"hòu",
"def": ["back","behind","rear","afterwards","after","later","post-"]
},
"水位":
{"simp":"水位",
"trad":"水位",
"pinyin":"shuǐ wèi",
"def": ["water level"]
},
"在一起":
{"simp":"在一起",
"trad":"在一起",
"pinyin":"zài yī qǐ",
"def": ["together"]
},
"僻静":
{"simp":"僻静",
"trad":"僻靜",
"pinyin":"pì jìng",
"def": ["lonely","secluded"]
},
"教授":
{"simp":"教授",
"trad":"教授",
"pinyin":"jiào shòu",
"def": ["professor","to instruct","to lecture on","CL:個|个[ge4],位[wei4]"]
},
"五":
{"simp":"五",
"trad":"五",
"pinyin":"wǔ",
"def": ["five","5"]
},
"大方":
{"simp":"大方",
"trad":"大方",
"pinyin":"dà fang",
"def": ["generous","magnanimous","stylish","in good taste","easy-mannered","natural and relaxed"]
},
"接收":
{"simp":"接收",
"trad":"接收",
"pinyin":"jiē shōu",
"def": ["reception (of transmitted signal)","to receive","to accept","to admit","to take over (e.g. a factory)","to expropriate"]
},
"尽收眼底":
{"simp":"尽收眼底",
"trad":"盡收眼底",
"pinyin":"jìn shōu yǎn dǐ",
"def": ["to take in the whole scene at once","to have a panoramic view"]
},
"出去":
{"simp":"出去",
"trad":"出去",
"pinyin":"chū qù",
"def": ["to go out"]
},
"滴":
{"simp":"滴",
"trad":"滴",
"pinyin":"dī",
"def": ["a drop","to drip"]
},
"生":
{"simp":"生",
"trad":"生",
"pinyin":"shēng",
"def": ["to be born","to give birth","life","to grow","raw","uncooked","student"]
},
"此":
{"simp":"此",
"trad":"此",
"pinyin":"cǐ",
"def": ["this","these"]
},
"本来":
{"simp":"本来",
"trad":"本來",
"pinyin":"běn lái",
"def": ["original","originally","at first","it goes without saying","of course"]
},
"天文台":
{"simp":"天文台",
"trad":"天文台",
"pinyin":"tiān wén tái",
"def": ["astronomical observatory"]
},
"长条":
{"simp":"长条",
"trad":"長條",
"pinyin":"cháng tiáo",
"def": ["strip"]
},
"反复":
{"simp":"反复",
"trad":"反覆",
"pinyin":"fǎn fù",
"def": ["repeatedly","over and over","to upend","unstable","to come and go","(of an illness) to return"]
},
"淡":
{"simp":"淡",
"trad":"淡",
"pinyin":"dàn",
"def": ["insipid","diluted","weak","mild","light in color","tasteless","indifferent","(variant of 氮[dan4]) nitrogen"]
},
"抽烟":
{"simp":"抽烟",
"trad":"抽煙",
"pinyin":"chōu yān",
"def": ["to smoke (a cigarette, tobacco)"]
},
"迎来":
{"simp":"迎来",
"trad":"迎來",
"pinyin":"yíng lái",
"def": ["to welcome (a visitor or newcomer)","(fig.) to usher in"]
},
"句":
{"simp":"句",
"trad":"句",
"pinyin":"jù",
"def": ["sentence","clause","phrase","classifier for phrases or lines of verse"]
},
"微微":
{"simp":"微微",
"trad":"微微",
"pinyin":"wēi wēi",
"def": ["slight","faint","humble"]
},
"张":
{"simp":"张",
"trad":"張",
"pinyin":"zhāng",
"def": ["to open up","to spread","sheet of paper","classifier for flat objects, sheet","classifier for votes"]
},
"老子":
{"simp":"老子",
"trad":"老子",
"pinyin":"lǎo zi",
"def": ["father","daddy","\"I, your father\" (in anger, or out of contempt)","I (used arrogantly or jocularly)"]
},
"被":
{"simp":"被",
"trad":"被",
"pinyin":"bèi",
"def": ["quilt","by","(indicates passive-voice clauses)","(literary) to cover","to meet with","(coll.) (since c. 2009) used before a verb that does not accurately represent what actually happened, to describe with black humor how sb or sth was dealt with by the authorities (as in 被自殺|被自杀[bei4 zi4 sha1])"]
},
"倾向":
{"simp":"倾向",
"trad":"傾向",
"pinyin":"qīng xiàng",
"def": ["trend","tendency","orientation"]
},
"终生":
{"simp":"终生",
"trad":"終生",
"pinyin":"zhōng shēng",
"def": ["throughout one's life","lifetime","lifelong"]
},
"患":
{"simp":"患",
"trad":"患",
"pinyin":"huàn",
"def": ["to suffer (from illness)","to contract (a disease)","misfortune","trouble","danger","worry"]
},
"提前":
{"simp":"提前",
"trad":"提前",
"pinyin":"tí qián",
"def": ["to shift to an earlier date","to do sth ahead of time","in advance"]
},
"早晨":
{"simp":"早晨",
"trad":"早晨",
"pinyin":"zǎo chén",
"def": ["early morning","CL:個|个[ge4]","also pr. [zao3 chen5]"]
},
"办公室":
{"simp":"办公室",
"trad":"辦公室",
"pinyin":"bàn gōng shì",
"def": ["office","business premises","bureau","CL:間|间[jian1]"]
},
"原":
{"simp":"原",
"trad":"原",
"pinyin":"yuán",
"def": ["former","original","primary","raw","level","cause","source"]
},
"急剧":
{"simp":"急剧",
"trad":"急劇",
"pinyin":"jí jù",
"def": ["rapid","sudden"]
},
"期间":
{"simp":"期间",
"trad":"期間",
"pinyin":"qī jiān",
"def": ["period of time","time","time period","period","CL:個|个[ge4]"]
},
"进":
{"simp":"进",
"trad":"進",
"pinyin":"jìn",
"def": ["to go forward","to advance","to go in","to enter","to put in","to submit","to take in","to admit","(math.) base of a number system","classifier for sections in a building or residential compound"]
},
"不乏":
{"simp":"不乏",
"trad":"不乏",
"pinyin":"bù fá",
"def": ["there is no lack of"]
},
"肉":
{"simp":"肉",
"trad":"肉",
"pinyin":"ròu",
"def": ["meat","flesh","pulp (of a fruit)","(coll.) (of a fruit) squashy","(of a person) flabby","irresolute","Kangxi radical 130"]
},
"库":
{"simp":"库",
"trad":"庫",
"pinyin":"kù",
"def": ["warehouse","storehouse","(file) library"]
},
"漫长":
{"simp":"漫长",
"trad":"漫長",
"pinyin":"màn cháng",
"def": ["very long","endless"]
},
"照例":
{"simp":"照例",
"trad":"照例",
"pinyin":"zhào lì",
"def": ["as a rule","as usual","usually"]
},
"通过":
{"simp":"通过",
"trad":"通過",
"pinyin":"tōng guò",
"def": ["to pass through; to get through","to adopt (a resolution); to pass (legislation)","to pass (a test)","by means of; through; via"]
},
"齐声":
{"simp":"齐声",
"trad":"齊聲",
"pinyin":"qí shēng",
"def": ["all speaking together","in chorus"]
},
"下":
{"simp":"下",
"trad":"下",
"pinyin":"xià",
"def": ["down","downwards","below","lower","later","next (week etc)","second (of two parts)","to decline","to go down","to arrive at (a decision, conclusion etc)","measure word to show the frequency of an action"]
},
"再发":
{"simp":"再发",
"trad":"再發",
"pinyin":"zài fā",
"def": ["to reissue","(of a disease) to recur","(of a patient) to suffer a relapse"]
},
"无能为力":
{"simp":"无能为力",
"trad":"無能為力",
"pinyin":"wú néng wéi lì",
"def": ["impotent (idiom)","powerless","helpless"]
},
"禁区":
{"simp":"禁区",
"trad":"禁區",
"pinyin":"jìn qū",
"def": ["restricted area","forbidden region"]
},
"毫升":
{"simp":"毫升",
"trad":"毫升",
"pinyin":"háo shēng",
"def": ["milliliter"]
},
"清晨":
{"simp":"清晨",
"trad":"清晨",
"pinyin":"qīng chén",
"def": ["early morning"]
},
"管理":
{"simp":"管理",
"trad":"管理",
"pinyin":"guǎn lǐ",
"def": ["to supervise","to manage","to administer","management","administration","CL:個|个[ge4]"]
},
"占领者":
{"simp":"占领者",
"trad":"佔領者",
"pinyin":"zhàn lǐng zhě",
"def": ["occupant"]
},
"身上":
{"simp":"身上",
"trad":"身上",
"pinyin":"shēn shang",
"def": ["on the body","at hand","among"]
},
"那是":
{"simp":"那是",
"trad":"那是",
"pinyin":"nà shi",
"def": ["(coll.) of course","naturally","indeed"]
},
"巨":
{"simp":"巨",
"trad":"巨",
"pinyin":"jù",
"def": ["very large","huge","tremendous","gigantic"]
},
"映":
{"simp":"映",
"trad":"暎",
"pinyin":"yìng",
"def": ["old variant of 映[ying4]"]
},
"会议":
{"simp":"会议",
"trad":"會議",
"pinyin":"huì yì",
"def": ["meeting","conference","CL:場|场[chang3],屆|届[jie4]"]
},
"消耗":
{"simp":"消耗",
"trad":"消耗",
"pinyin":"xiāo hào",
"def": ["to use up","to consume"]
},
"对于":
{"simp":"对于",
"trad":"對於",
"pinyin":"duì yú",
"def": ["regarding","as far as sth is concerned","with regards to"]
},
"磁悬浮":
{"simp":"磁悬浮",
"trad":"磁懸浮",
"pinyin":"cí xuán fú",
"def": ["magnetic levitation (train)","maglev"]
},
"粼粼":
{"simp":"粼粼",
"trad":"粼粼",
"pinyin":"lín lín",
"def": ["clear and crystalline (of water)"]
},
"最":
{"simp":"最",
"trad":"最",
"pinyin":"zuì",
"def": ["most","the most","-est (superlative suffix)"]
},
"夹":
{"simp":"夹",
"trad":"裌",
"pinyin":"jiá",
"def": ["variant of 夾|夹[jia2]"]
},
"站点":
{"simp":"站点",
"trad":"站點",
"pinyin":"zhàn diǎn",
"def": ["website"]
},
"逐渐":
{"simp":"逐渐",
"trad":"逐漸",
"pinyin":"zhú jiàn",
"def": ["gradually"]
},
"座":
{"simp":"座",
"trad":"座",
"pinyin":"zuò",
"def": ["seat","base","stand","(archaic) suffix used in a respectful form of address, e.g. 师座|师座[shi1 zuo4]","CL:個|个[ge4]","classifier for buildings, mountains and similar immovable objects"]
},
"抑制":
{"simp":"抑制",
"trad":"抑制",
"pinyin":"yì zhì",
"def": ["to inhibit","to keep down","to suppress"]
},
"琳":
{"simp":"琳",
"trad":"琳",
"pinyin":"lín",
"def": ["gem"]
},
"欢呼":
{"simp":"欢呼",
"trad":"歡呼",
"pinyin":"huān hū",
"def": ["to cheer for","to acclaim"]
},
"危急":
{"simp":"危急",
"trad":"危急",
"pinyin":"wēi jí",
"def": ["critical","desperate (situation)"]
},
"铜":
{"simp":"铜",
"trad":"銅",
"pinyin":"tóng",
"def": ["copper (chemistry)","see also 紅銅|红铜[hong2 tong2]","CL:塊|块[kuai4]"]
},
"背着":
{"simp":"背着",
"trad":"背著",
"pinyin":"bèi zhe",
"def": ["turning one's back to (sth or sb)","keeping sth secret from (sb)","keeping (one's hands) behind one's back"]
},
"这时":
{"simp":"这时",
"trad":"這時",
"pinyin":"zhè shí",
"def": ["at this time","at this moment"]
},
"法拉利":
{"simp":"法拉利",
"trad":"法拉利",
"pinyin":"Fǎ lā lì",
"def": ["Ferrari"]
},
"感":
{"simp":"感",
"trad":"感",
"pinyin":"gǎn",
"def": ["to feel","to move","to touch","to affect","feeling","emotion","(suffix) sense of ~"]
},
"时刻":
{"simp":"时刻",
"trad":"時刻",
"pinyin":"shí kè",
"def": ["time","juncture","moment","period of time","CL:個|个[ge4],段[duan4]","constantly","always"]
},
"毕竟":
{"simp":"毕竟",
"trad":"畢竟",
"pinyin":"bì jìng",
"def": ["after all","all in all","when all is said and done","in the final analysis"]
},
"严寒":
{"simp":"严寒",
"trad":"嚴寒",
"pinyin":"yán hán",
"def": ["bitter cold","severe winter"]
},
"汽化":
{"simp":"汽化",
"trad":"汽化",
"pinyin":"qì huà",
"def": ["to boil","to vaporize"]
},
"开始":
{"simp":"开始",
"trad":"開始",
"pinyin":"kāi shǐ",
"def": ["to begin","beginning","to start","initial","CL:個|个[ge4]"]
},
"基于":
{"simp":"基于",
"trad":"基於",
"pinyin":"jī yú",
"def": ["because of","on the basis of","in view of","on account of"]
},
"专":
{"simp":"专",
"trad":"耑",
"pinyin":"zhuān",
"def": ["variant of 專|专[zhuan1]"]
},
"吨级":
{"simp":"吨级",
"trad":"噸級",
"pinyin":"dūn jí",
"def": ["tonnage","class in tons (of a passenger ship)"]
},
"雷达":
{"simp":"雷达",
"trad":"雷達",
"pinyin":"léi dá",
"def": ["radar (loanword)"]
},
"看到":
{"simp":"看到",
"trad":"看到",
"pinyin":"kàn dào",
"def": ["to see"]
},
"男人":
{"simp":"男人",
"trad":"男人",
"pinyin":"nán rén",
"def": ["a man","a male","men","CL:個|个[ge4]"]
},
"建立":
{"simp":"建立",
"trad":"建立",
"pinyin":"jiàn lì",
"def": ["to establish","to set up","to found"]
},
"仪式":
{"simp":"仪式",
"trad":"儀式",
"pinyin":"yí shì",
"def": ["ceremony"]
},
"频谱":
{"simp":"频谱",
"trad":"頻譜",
"pinyin":"pín pǔ",
"def": ["frequency spectrum","spectrum","spectrogram"]
},
"秒钟":
{"simp":"秒钟",
"trad":"秒鐘",
"pinyin":"miǎo zhōng",
"def": ["(time) second"]
},
"泥":
{"simp":"泥",
"trad":"泥",
"pinyin":"nì",
"def": ["restrained"]
},
"太阳系":
{"simp":"太阳系",
"trad":"太陽系",
"pinyin":"tài yáng xì",
"def": ["solar system"]
},
"仍":
{"simp":"仍",
"trad":"仍",
"pinyin":"réng",
"def": ["still","yet","to remain"]
},
"很":
{"simp":"很",
"trad":"很",
"pinyin":"hěn",
"def": ["(adverb of degree)","quite","very","awfully"]
},
"光速":
{"simp":"光速",
"trad":"光速",
"pinyin":"guāng sù",
"def": ["the speed of light"]
},
"物":
{"simp":"物",
"trad":"物",
"pinyin":"wù",
"def": ["thing","object","matter","abbr. for physics 物理"]
},
"崖":
{"simp":"崖",
"trad":"崖",
"pinyin":"yá",
"def": ["precipice","cliff","Taiwan pr. [yai2]"]
},
"北极星":
{"simp":"北极星",
"trad":"北極星",
"pinyin":"Běi jí xīng",
"def": ["North Star","Polaris"]
},
"手续":
{"simp":"手续",
"trad":"手續",
"pinyin":"shǒu xù",
"def": ["procedure","CL:道[dao4],個|个[ge4]","formalities"]
},
"出现":
{"simp":"出现",
"trad":"出現",
"pinyin":"chū xiàn",
"def": ["to appear","to arise","to emerge","to show up"]
},
"构成":
{"simp":"构成",
"trad":"構成",
"pinyin":"gòu chéng",
"def": ["to constitute","to form","to compose","to make up","to configure (computing)"]
},
"之后":
{"simp":"之后",
"trad":"之後",
"pinyin":"zhī hòu",
"def": ["afterwards","following","later","after"]
},
"疼":
{"simp":"疼",
"trad":"疼",
"pinyin":"téng",
"def": ["(it) hurts","sore","to love dearly"]
},
"不正常":
{"simp":"不正常",
"trad":"不正常",
"pinyin":"bù zhèng cháng",
"def": ["abnormal"]
},
"低声":
{"simp":"低声",
"trad":"低聲",
"pinyin":"dī shēng",
"def": ["in a low voice","softly"]
},
"编制":
{"simp":"编制",
"trad":"編製",
"pinyin":"biān zhì",
"def": ["to weave","to plait","to compile","to put together (a lesson plan, budget etc)"]
},
"学":
{"simp":"学",
"trad":"學",
"pinyin":"xué",
"def": ["to learn","to study","to imitate","science","-ology"]
},
"自卫":
{"simp":"自卫",
"trad":"自衛",
"pinyin":"zì wèi",
"def": ["to defend oneself","self-defense"]
},
"结局":
{"simp":"结局",
"trad":"結局",
"pinyin":"jié jú",
"def": ["conclusion","ending"]
},
"银河系":
{"simp":"银河系",
"trad":"銀河系",
"pinyin":"Yín hé xì",
"def": ["Milky Way Galaxy","the galaxy (our galaxy)"]
},
"晚":
{"simp":"晚",
"trad":"晚",
"pinyin":"wǎn",
"def": ["evening","night","late"]
},
"之":
{"simp":"之",
"trad":"之",
"pinyin":"zhī",
"def": ["(possessive particle, literary equivalent of 的[de5])","him","her","it"]
},
"话匣子":
{"simp":"话匣子",
"trad":"話匣子",
"pinyin":"huà xiá zi",
"def": ["phonograph or radio (old term)","chatterbox","talkative person"]
},
"峰":
{"simp":"峰",
"trad":"峰",
"pinyin":"fēng",
"def": ["(of a mountain) high and tapered peak or summit","mountain-like in appearance","highest level","classifier for camels"]
},
"袭击":
{"simp":"袭击",
"trad":"襲擊",
"pinyin":"xí jī",
"def": ["attack (esp. surprise attack)","raid","to attack"]
},
"年":
{"simp":"年",
"trad":"秊",
"pinyin":"nián",
"def": ["grain","harvest (old)","variant of 年[nian2]"]
},
"帆船":
{"simp":"帆船",
"trad":"帆船",
"pinyin":"fān chuán",
"def": ["sailboat"]
},
"吐":
{"simp":"吐",
"trad":"吐",
"pinyin":"tù",
"def": ["to vomit","to throw up"]
},
"对了":
{"simp":"对了",
"trad":"對了",
"pinyin":"duì le",
"def": ["Correct!","Oh, that's right, ... (when one suddenly remembers sth one wanted to mention)","Oh, by the way, ..."]
},
"方阵":
{"simp":"方阵",
"trad":"方陣",
"pinyin":"fāng zhèn",
"def": ["square-shaped formation (military)","phalanx","(math.) matrix"]
},
"显然":
{"simp":"显然",
"trad":"顯然",
"pinyin":"xiǎn rán",
"def": ["clearly; evidently; obviously"]
},
"炸弹":
{"simp":"炸弹",
"trad":"炸彈",
"pinyin":"zhà dàn",
"def": ["bomb","CL:枚[mei2],顆|颗[ke1]"]
},
"美丽":
{"simp":"美丽",
"trad":"美麗",
"pinyin":"měi lì",
"def": ["beautiful"]
},
"加":
{"simp":"加",
"trad":"加",
"pinyin":"jiā",
"def": ["to add","plus","(used after an adverb such as 不, 大, 稍 etc, and before a disyllabic verb, to indicate that the action of the verb is applied to sth or sb previously mentioned)","to apply (restrictions etc) to (sb)","to give (support, consideration etc) to (sth)"]
},
"也":
{"simp":"也",
"trad":"也",
"pinyin":"yě",
"def": ["also","too","(in Classical Chinese) final particle implying affirmation"]
},
"心理":
{"simp":"心理",
"trad":"心理",
"pinyin":"xīn lǐ",
"def": ["psychology","mentality"]
},
"在这之前":
{"simp":"在这之前",
"trad":"在這之前",
"pinyin":"zài zhè zhī qián",
"def": ["before then","up until that point"]
},
"奴隶":
{"simp":"奴隶",
"trad":"奴隸",
"pinyin":"nú lì",
"def": ["slave"]
},
"外国":
{"simp":"外国",
"trad":"外國",
"pinyin":"wài guó",
"def": ["foreign (country)","CL:個|个[ge4]"]
},
"以":
{"simp":"以",
"trad":"以",
"pinyin":"yǐ",
"def": ["to use","by means of","according to","in order to","because of","at (a certain date or place)"]
},
"啊":
{"simp":"啊",
"trad":"啊",
"pinyin":"a",
"def": ["modal particle ending sentence, showing affirmation, approval, or consent"]
},
"怒气":
{"simp":"怒气",
"trad":"怒氣",
"pinyin":"nù qì",
"def": ["anger"]
},
"使得":
{"simp":"使得",
"trad":"使得",
"pinyin":"shǐ de",
"def": ["usable","workable","feasible","doable","to make","to cause"]
},
"不好":
{"simp":"不好",
"trad":"不好",
"pinyin":"bù hǎo",
"def": ["no good"]
},
"中的":
{"simp":"中的",
"trad":"中的",
"pinyin":"zhòng dì",
"def": ["to hit the target","to hit the nail on the head"]
},
"根":
{"simp":"根",
"trad":"根",
"pinyin":"gēn",
"def": ["root","basis","classifier for long slender objects, e.g. cigarettes, guitar strings","CL:條|条[tiao2]","radical (chemistry)"]
},
"沽":
{"simp":"沽",
"trad":"沽",
"pinyin":"gū",
"def": ["to buy","to sell"]
},
"下来":
{"simp":"下来",
"trad":"下來",
"pinyin":"xià lai",
"def": ["to come down","(completed action marker)","(after verb of motion, indicates motion down and towards us, also fig.)","(indicates continuation from the past towards us)","to be harvested (of crops)","to be over (of a period of time)","to go among the masses (said of leaders)"]
},
"上校":
{"simp":"上校",
"trad":"上校",
"pinyin":"shàng xiào",
"def": ["high ranking officer in Chinese army","colonel"]
},
"远征":
{"simp":"远征",
"trad":"遠征",
"pinyin":"yuǎn zhēng",
"def": ["an expedition, esp. military","march to remote regions"]
},
"中正":
{"simp":"中正",
"trad":"中正",
"pinyin":"zhōng zhèng",
"def": ["fair and honest"]
},
"含义":
{"simp":"含义",
"trad":"含義",
"pinyin":"hán yì",
"def": ["meaning (implicit in a phrase)","implied meaning","hidden meaning","hint","connotation"]
},
"随时":
{"simp":"随时",
"trad":"隨時",
"pinyin":"suí shí",
"def": ["at any time","at all times","at the right time"]
},
"十一":
{"simp":"十一",
"trad":"十一",
"pinyin":"shí yī",
"def": ["eleven","11"]
},
"圣经":
{"simp":"圣经",
"trad":"聖經",
"pinyin":"Shèng jīng",
"def": ["Holy Bible","the Confucian classics","CL:本[ben3],部[bu4]"]
},
"地":
{"simp":"地",
"trad":"地",
"pinyin":"dì",
"def": ["earth","ground","field","place","land","CL:片[pian4]"]
},
"道":
{"simp":"道",
"trad":"道",
"pinyin":"dào",
"def": ["road","path","CL:條|条[tiao2],股[gu3]","principle","truth","morality","reason","skill","method","Dao (of Daoism)","to say","to speak","to talk","classifier for long thin things (rivers, cracks etc), barriers (walls, doors etc), questions (in an exam etc), commands, courses in a meal, steps in a process","(old) circuit (administrative division)"]
},
"坚决":
{"simp":"坚决",
"trad":"堅決",
"pinyin":"jiān jué",
"def": ["firm","resolute","determined"]
},
"这儿":
{"simp":"这儿",
"trad":"這兒",
"pinyin":"zhè r5",
"def": ["here"]
},
"依靠":
{"simp":"依靠",
"trad":"依靠",
"pinyin":"yī kào",
"def": ["to rely on sth (for support etc)","to depend on"]
},
"群":
{"simp":"群",
"trad":"群",
"pinyin":"qún",
"def": ["group","crowd","flock, herd, pack etc"]
},
"直接":
{"simp":"直接",
"trad":"直接",
"pinyin":"zhí jiē",
"def": ["direct (opposite: indirect 間接|间接[jian4 jie1])","immediate","straightforward"]
},
"不要":
{"simp":"不要",
"trad":"不要",
"pinyin":"bù yào",
"def": ["don't!","must not"]
},
"过半":
{"simp":"过半",
"trad":"過半",
"pinyin":"guò bàn",
"def": ["over fifty percent","more than half"]
},
"极其":
{"simp":"极其",
"trad":"極其",
"pinyin":"jí qí",
"def": ["extremely"]
},
"花朵":
{"simp":"花朵",
"trad":"花朵",
"pinyin":"huā duǒ",
"def": ["flower"]
},
"股":
{"simp":"股",
"trad":"股",
"pinyin":"gǔ",
"def": ["thigh","part of a whole","portion of a sum","(stock) share","strand of a thread","low-level administrative unit, translated as \"section\" or \"department\" etc, ranked below 科[ke1]","classifier for long winding things like ropes, rivers etc","classifier for smoke, smells etc: thread, puff, whiff","classifier for bands of people, gangs etc","classifier for sudden forceful actions"]
},
"们":
{"simp":"们",
"trad":"們",
"pinyin":"men",
"def": ["plural marker for pronouns, and nouns referring to individuals"]
},
"起爆":
{"simp":"起爆",
"trad":"起爆",
"pinyin":"qǐ bào",
"def": ["to explode","to set off an explosion","to detonate"]
},
"整整":
{"simp":"整整",
"trad":"整整",
"pinyin":"zhěng zhěng",
"def": ["whole","full"]
},
"订阅":
{"simp":"订阅",
"trad":"訂閱",
"pinyin":"dìng yuè",
"def": ["subscription","to subscribe to"]
},
"调节":
{"simp":"调节",
"trad":"調節",
"pinyin":"tiáo jié",
"def": ["to adjust","to regulate","to harmonize","to reconcile (accountancy etc)"]
},
"神秘":
{"simp":"神秘",
"trad":"神秘",
"pinyin":"shén mì",
"def": ["mysterious","mystery"]
},
"真正":
{"simp":"真正",
"trad":"真正",
"pinyin":"zhēn zhèng",
"def": ["genuine","real","true","genuinely"]
},
"避难所":
{"simp":"避难所",
"trad":"避難所",
"pinyin":"bì nàn suǒ",
"def": ["refuge","asylum"]
},
"转移":
{"simp":"转移",
"trad":"轉移",
"pinyin":"zhuǎn yí",
"def": ["to shift","to divert or distract (attention etc)","to change","to transform","metastasis (medicine)","to evacuate (people)"]
},
"没关系":
{"simp":"没关系",
"trad":"沒關係",
"pinyin":"méi guān xi",
"def": ["it doesn't matter"]
},
"起身":
{"simp":"起身",
"trad":"起身",
"pinyin":"qǐ shēn",
"def": ["to get up","to leave","to set forth"]
},
"看不起":
{"simp":"看不起",
"trad":"看不起",
"pinyin":"kàn bu qǐ",
"def": ["to look down upon","to despise"]
},
"实际":
{"simp":"实际",
"trad":"實際",
"pinyin":"shí jì",
"def": ["reality","practice","practical","realistic","real","actual"]
},
"玩具":
{"simp":"玩具",
"trad":"玩具",
"pinyin":"wán jù",
"def": ["plaything","toy"]
},
"淼":
{"simp":"淼",
"trad":"淼",
"pinyin":"miǎo",
"def": ["a flood","infinity"]
},
"融":
{"simp":"融",
"trad":"螎",
"pinyin":"róng",
"def": ["old variant of 融[rong2]"]
},
"跟踪":
{"simp":"跟踪",
"trad":"跟蹤",
"pinyin":"gēn zōng",
"def": ["to follow sb's tracks","to tail","to shadow","tracking"]
},
"的":
{"simp":"的",
"trad":"的",
"pinyin":"dì",
"def": ["aim","clear"]
},
"石":
{"simp":"石",
"trad":"石",
"pinyin":"shí",
"def": ["rock","stone","stone inscription","one of the eight categories of ancient musical instruments 八音[ba1 yin1]"]
},
"引导":
{"simp":"引导",
"trad":"引導",
"pinyin":"yǐn dǎo",
"def": ["to guide","to lead (around)","to conduct","to boot","introduction","primer"]
},
"恶":
{"simp":"恶",
"trad":"惡",
"pinyin":"wù",
"def": ["to hate","to loathe","ashamed","to fear","to slander"]
},
"化工厂":
{"simp":"化工厂",
"trad":"化工廠",
"pinyin":"huà gōng chǎng",
"def": ["chemical factory; chemical plant"]
},
"牵引":
{"simp":"牵引",
"trad":"牽引",
"pinyin":"qiān yǐn",
"def": ["to pull","to draw (a cart)","to tow"]
},
"证实":
{"simp":"证实",
"trad":"證實",
"pinyin":"zhèng shí",
"def": ["to confirm (sth to be true)","to verify"]
},
"后者":
{"simp":"后者",
"trad":"後者",
"pinyin":"hòu zhě",
"def": ["the latter"]
},
"一点":
{"simp":"一点",
"trad":"一點",
"pinyin":"yī diǎn",
"def": ["a bit","a little","one dot","one point"]
},
"白求恩":
{"simp":"白求恩",
"trad":"白求恩",
"pinyin":"Bái Qiú ēn",
"def": ["Norman Bethune (1890-1939), Canadian doctor, worked for communists in Spanish civil war and for Mao in Yan'an, where he died of blood poisoning"]
},
"屯子":
{"simp":"屯子",
"trad":"屯子",
"pinyin":"tún zi",
"def": ["village"]
},
"出":
{"simp":"出",
"trad":"齣",
"pinyin":"chū",
"def": ["variant of 出[chu1] (classifier for plays or chapters of classical novels)"]
},
"有利于":
{"simp":"有利于",
"trad":"有利於",
"pinyin":"yǒu lì yú",
"def": ["to be advantageous to","to be beneficial for"]
},
"紫外线":
{"simp":"紫外线",
"trad":"紫外線",
"pinyin":"zǐ wài xiàn",
"def": ["ultraviolet ray"]
},
"众多":
{"simp":"众多",
"trad":"眾多",
"pinyin":"zhòng duō",
"def": ["numerous"]
},
"引火烧身":
{"simp":"引火烧身",
"trad":"引火燒身",
"pinyin":"yǐn huǒ shāo shēn",
"def": ["to invite trouble"]
},
"摧毁":
{"simp":"摧毁",
"trad":"摧毀",
"pinyin":"cuī huǐ",
"def": ["to destroy","to wreck"]
},
"粮":
{"simp":"粮",
"trad":"糧",
"pinyin":"liáng",
"def": ["grain","food","provisions","agricultural tax paid in grain"]
},
"共用":
{"simp":"共用",
"trad":"共用",
"pinyin":"gòng yòng",
"def": ["to share the use of; to have joint use of","communal (bathroom); shared (antenna)","to use, in total, ..."]
},
"机场":
{"simp":"机场",
"trad":"機場",
"pinyin":"jī chǎng",
"def": ["airport","airfield","(slang) service provider for Shadowsocks or similar software for circumventing Internet censorship","CL:家[jia1],處|处[chu4]"]
},
"光明":
{"simp":"光明",
"trad":"光明",
"pinyin":"guāng míng",
"def": ["light","radiance","(fig.) bright (prospects etc)","openhearted"]
},
"见面":
{"simp":"见面",
"trad":"見面",
"pinyin":"jiàn miàn",
"def": ["to meet","to see each other","CL:次[ci4]"]
},
"姑娘":
{"simp":"姑娘",
"trad":"姑娘",
"pinyin":"gū niang",
"def": ["girl","young woman","young lady","daughter","paternal aunt (old)","CL:個|个[ge4]"]
},
"打散":
{"simp":"打散",
"trad":"打散",
"pinyin":"dǎ sàn",
"def": ["to scatter","to break sth up","to beat (an egg)"]
},
"当":
{"simp":"当",
"trad":"當",
"pinyin":"dàng",
"def": ["at or in the very same...","suitable","adequate","fitting","proper","to replace","to regard as","to think","to pawn","(coll.) to fail (a student)"]
},
"选址":
{"simp":"选址",
"trad":"選址",
"pinyin":"xuǎn zhǐ",
"def": ["to select a suitable site","site","location"]
},
"投":
{"simp":"投",
"trad":"投",
"pinyin":"tóu",
"def": ["to cast","to send","to throw oneself (into the river etc)","to seek refuge","to place oneself into the hands of"]
},
"有道":
{"simp":"有道",
"trad":"有道",
"pinyin":"yǒu dào",
"def": ["to have attained the Way","(of a government or a ruler) enlightened","wise and just"]
},
"饶恕":
{"simp":"饶恕",
"trad":"饒恕",
"pinyin":"ráo shù",
"def": ["to forgive","to pardon","to spare"]
},
"泄":
{"simp":"泄",
"trad":"洩",
"pinyin":"xiè",
"def": ["variant of 泄[xie4]"]
},
"子孙":
{"simp":"子孙",
"trad":"子孫",
"pinyin":"zǐ sūn",
"def": ["offspring","posterity"]
},
"发送":
{"simp":"发送",
"trad":"發送",
"pinyin":"fā sòng",
"def": ["to transmit","to dispatch","to issue (an official document or credential)"]
},
"幽灵":
{"simp":"幽灵",
"trad":"幽靈",
"pinyin":"yōu líng",
"def": ["specter","apparition","ghost"]
},
"前一天":
{"simp":"前一天",
"trad":"前一天",
"pinyin":"qián yī tiān",
"def": ["the day before (an event)"]
},
"草原":
{"simp":"草原",
"trad":"草原",
"pinyin":"cǎo yuán",
"def": ["grassland","prairie","CL:片[pian4]"]
},
"比不上":
{"simp":"比不上",
"trad":"比不上",
"pinyin":"bǐ bù shàng",
"def": ["can't compare with"]
},
"倒戈":
{"simp":"倒戈",
"trad":"倒戈",
"pinyin":"dǎo gē",
"def": ["to change sides in a war","turncoat"]
},
"顶端":
{"simp":"顶端",
"trad":"頂端",
"pinyin":"dǐng duān",
"def": ["summit","peak"]
},
"源源不断":
{"simp":"源源不断",
"trad":"源源不斷",
"pinyin":"yuán yuán bù duàn",
"def": ["a steady flow (idiom); an unending stream"]
},
"三":
{"simp":"三",
"trad":"三",
"pinyin":"sān",
"def": ["three","3"]
},
"一口气":
{"simp":"一口气",
"trad":"一口氣",
"pinyin":"yī kǒu qì",
"def": ["one breath","in one breath","at a stretch"]
},
"打击":
{"simp":"打击",
"trad":"打擊",
"pinyin":"dǎ jī",
"def": ["to hit","to strike","to attack","to crack down on sth","blow","(psychological) shock","percussion (music)"]
},
"棵":
{"simp":"棵",
"trad":"棵",
"pinyin":"kē",
"def": ["classifier for trees, cabbages, plants etc"]
},
"表层":
{"simp":"表层",
"trad":"表層",
"pinyin":"biǎo céng",
"def": ["surface layer"]
},
"承担":
{"simp":"承担",
"trad":"承擔",
"pinyin":"chéng dān",
"def": ["to undertake","to assume (responsibility etc)"]
},
"现代":
{"simp":"现代",
"trad":"現代",
"pinyin":"xiàn dài",
"def": ["modern times","modern age","modern era"]
},
"外界":
{"simp":"外界",
"trad":"外界",
"pinyin":"wài jiè",
"def": ["the outside world","external"]
},
"百年":
{"simp":"百年",
"trad":"百年",
"pinyin":"bǎi nián",
"def": ["hundred years","century","lifetime"]
},
"广泛":
{"simp":"广泛",
"trad":"廣泛",
"pinyin":"guǎng fàn",
"def": ["extensive","wide range"]
},
"压":
{"simp":"压",
"trad":"壓",
"pinyin":"yà",
"def": ["see 壓根兒|压根儿[ya4 gen1 r5]"]
},
"作":
{"simp":"作",
"trad":"作",
"pinyin":"zuò",
"def": ["to do","to grow","to write or compose","to pretend","to regard as","to feel","writings or works"]
},
"冬":
{"simp":"冬",
"trad":"鼕",
"pinyin":"dōng",
"def": ["(onom.) beating a drum","rat-a-tat"]
},
"之间":
{"simp":"之间",
"trad":"之間",
"pinyin":"zhī jiān",
"def": ["between","among","inter-"]
},
"灭顶":
{"simp":"灭顶",
"trad":"滅頂",
"pinyin":"miè dǐng",
"def": ["to be drowned (figurative and literal)"]
},
"惩罚":
{"simp":"惩罚",
"trad":"懲罰",
"pinyin":"chéng fá",
"def": ["penalty","punishment","to punish"]
},
"男孩子":
{"simp":"男孩子",
"trad":"男孩子",
"pinyin":"nán hái zi",
"def": ["boy"]
},
"最优":
{"simp":"最优",
"trad":"最優",
"pinyin":"zuì yōu",
"def": ["optimal","optimum"]
},
"甚":
{"simp":"甚",
"trad":"甚",
"pinyin":"shèn",
"def": ["what","very","extremely","any"]
},
"感叹":
{"simp":"感叹",
"trad":"感嘆",
"pinyin":"gǎn tàn",
"def": ["to sigh (with feeling)","to lament"]
},
"篡改":
{"simp":"篡改",
"trad":"篡改",
"pinyin":"cuàn gǎi",
"def": ["to tamper with","to falsify"]
},
"界面":
{"simp":"界面",
"trad":"界面",
"pinyin":"jiè miàn",
"def": ["contact surface","(computing) interface"]
},
"死":
{"simp":"死",
"trad":"死",
"pinyin":"sǐ",
"def": ["to die","impassable","uncrossable","inflexible","rigid","extremely","damned"]
},
"相信":
{"simp":"相信",
"trad":"相信",
"pinyin":"xiāng xìn",
"def": ["to be convinced (that sth is true)","to believe","to accept sth as true"]
},
"南":
{"simp":"南",
"trad":"南",
"pinyin":"nán",
"def": ["south"]
},
"过程":
{"simp":"过程",
"trad":"過程",
"pinyin":"guò chéng",
"def": ["course of events","process","CL:個|个[ge4]"]
},
"这里":
{"simp":"这里",
"trad":"這裡",
"pinyin":"zhè lǐ",
"def": ["here"]
},
"不想":
{"simp":"不想",
"trad":"不想",
"pinyin":"bù xiǎng",
"def": ["unexpectedly"]
},
"严重":
{"simp":"严重",
"trad":"嚴重",
"pinyin":"yán zhòng",
"def": ["grave","serious","severe","critical"]
},
"板":
{"simp":"板",
"trad":"闆",
"pinyin":"pàn",
"def": ["to catch sight of in a doorway (old)"]
},
"具有":
{"simp":"具有",
"trad":"具有",
"pinyin":"jù yǒu",
"def": ["to have","to possess"]
},
"荒地":
{"simp":"荒地",
"trad":"荒地",
"pinyin":"huāng dì",
"def": ["wasteland","uncultivated land"]
},
"噩梦":
{"simp":"噩梦",
"trad":"噩夢",
"pinyin":"è mèng",
"def": ["nightmare"]
},
"对流层":
{"simp":"对流层",
"trad":"對流層",
"pinyin":"duì liú céng",
"def": ["troposphere","lower atmosphere"]
},
"极少":
{"simp":"极少",
"trad":"極少",
"pinyin":"jí shǎo",
"def": ["very little","very few"]
},
"运行":
{"simp":"运行",
"trad":"運行",
"pinyin":"yùn xíng",
"def": ["to move along one's course (of celestial bodies etc)","(fig.) to function; to be in operation","(of a train service etc) to operate; to run","(of a computer) to run"]
},
"企图":
{"simp":"企图",
"trad":"企圖",
"pinyin":"qǐ tú",
"def": ["to attempt","to try","attempt","CL:種|种[zhong3]"]
},
"请":
{"simp":"请",
"trad":"請",
"pinyin":"qǐng",
"def": ["to ask","to invite","please (do sth)","to treat (to a meal etc)","to request"]
},
"近乎":
{"simp":"近乎",
"trad":"近乎",
"pinyin":"jìn hu",
"def": ["close to","intimate"]
},
"庞大":
{"simp":"庞大",
"trad":"龐大",
"pinyin":"páng dà",
"def": ["huge","enormous","tremendous"]
},
"安排":
{"simp":"安排",
"trad":"安排",
"pinyin":"ān pái",
"def": ["to arrange","to plan","to set up","arrangements","plans"]
},
"轨道":
{"simp":"轨道",
"trad":"軌道",
"pinyin":"guǐ dào",
"def": ["track (for trains etc)","orbit (of a satellite)","(fig.) a person's established path in life","desired trajectory (of a business or other endeavor)","(audio engineering) track","(quantum mechanics) orbital"]
},
"名义上":
{"simp":"名义上",
"trad":"名義上",
"pinyin":"míng yì shàng",
"def": ["nominally"]
},
"响应":
{"simp":"响应",
"trad":"響應",
"pinyin":"xiǎng yìng",
"def": ["to respond to","answer","CL:個|个[ge4]"]
},
"呼唤":
{"simp":"呼唤",
"trad":"呼喚",
"pinyin":"hū huàn",
"def": ["to call out (a name etc)","to shout"]
},
"真实":
{"simp":"真实",
"trad":"真實",
"pinyin":"zhēn shí",
"def": ["true","real"]
},
"稠":
{"simp":"稠",
"trad":"稠",
"pinyin":"chóu",
"def": ["dense","crowded","thick","many"]
},
"摸爬滚打":
{"simp":"摸爬滚打",
"trad":"摸爬滾打",
"pinyin":"mō pá gǔn dǎ",
"def": ["to go through challenging experiences","to become seasoned (in one's profession etc)"]
},
"小心翼翼":
{"simp":"小心翼翼",
"trad":"小心翼翼",
"pinyin":"xiǎo xīn yì yì",
"def": ["cautious and solemn (idiom); very carefully","prudent","gently and cautiously"]
},
"多":
{"simp":"多",
"trad":"多",
"pinyin":"duō",
"def": ["many","much","often","a lot of","numerous","more","in excess","how (to what extent)","multi-","Taiwan pr. [duo2] when it means \"how\""]
},
"惊奇":
{"simp":"惊奇",
"trad":"驚奇",
"pinyin":"jīng qí",
"def": ["to be amazed","to be surprised","to wonder"]
},
"足以":
{"simp":"足以",
"trad":"足以",
"pinyin":"zú yǐ",
"def": ["sufficient to...","so much so that","so that"]
},
"详细":
{"simp":"详细",
"trad":"詳細",
"pinyin":"xiáng xì",
"def": ["detailed","in detail","minute"]
},
"多么":
{"simp":"多么",
"trad":"多麼",
"pinyin":"duō me",
"def": ["how (wonderful etc)","what (a great idea etc)","however (difficult it may be etc)","(in interrogative sentences) how (much etc)","to what extent"]
},
"井":
{"simp":"井",
"trad":"井",
"pinyin":"jǐng",
"def": ["a well","CL:口[kou3]","neat","orderly"]
},
"指":
{"simp":"指",
"trad":"指",
"pinyin":"zhǐ",
"def": ["finger","to point at or to","to indicate or refer to","to depend on","to count on","(of hair) to stand on end"]
},
"速":
{"simp":"速",
"trad":"速",
"pinyin":"sù",
"def": ["fast","rapid","quick","velocity"]
},
"历历在目":
{"simp":"历历在目",
"trad":"歷歷在目",
"pinyin":"lì lì zài mù",
"def": ["vivid in one's mind (idiom)"]
},
"关键":
{"simp":"关键",
"trad":"關鍵",
"pinyin":"guān jiàn",
"def": ["crucial point","crux","CL:個|个[ge4]","key","crucial","pivotal"]
},
"显出":
{"simp":"显出",
"trad":"顯出",
"pinyin":"xiǎn chū",
"def": ["to express","to exhibit"]
},
"吹":
{"simp":"吹",
"trad":"吹",
"pinyin":"chuī",
"def": ["to blow","to play a wind instrument","to blast","to puff","to boast","to brag","to end in failure","to fall through"]
},
"呵呵":
{"simp":"呵呵",
"trad":"呵呵",
"pinyin":"hē hē",
"def": ["(onom.) gentle laughter","chuckle"]
},
"公开":
{"simp":"公开",
"trad":"公開",
"pinyin":"gōng kāi",
"def": ["public","to publish","to make public"]
},
"没问题":
{"simp":"没问题",
"trad":"沒問題",
"pinyin":"méi wèn tí",
"def": ["no problem"]
},
"婚":
{"simp":"婚",
"trad":"婚",
"pinyin":"hūn",
"def": ["to marry","marriage","wedding","to take a wife"]
},
"银光":
{"simp":"银光",
"trad":"銀光",
"pinyin":"yín guāng",
"def": ["silvery light","bright white light","shining white light"]
},
"位于":
{"simp":"位于",
"trad":"位於",
"pinyin":"wèi yú",
"def": ["to be located at","to be situated at","to lie"]
},
"奇特":
{"simp":"奇特",
"trad":"奇特",
"pinyin":"qí tè",
"def": ["peculiar","unusual","queer"]
},
"放大器":
{"simp":"放大器",
"trad":"放大器",
"pinyin":"fàng dà qì",
"def": ["amplifier"]
},
"否决":
{"simp":"否决",
"trad":"否決",
"pinyin":"fǒu jué",
"def": ["to veto","to overrule"]
},
"放松":
{"simp":"放松",
"trad":"放鬆",
"pinyin":"fàng sōng",
"def": ["to loosen","to relax"]
},
"是否":
{"simp":"是否",
"trad":"是否",
"pinyin":"shì fǒu",
"def": ["whether (or not)","if","is or isn't"]
},
"屎":
{"simp":"屎",
"trad":"屎",
"pinyin":"shǐ",
"def": ["stool","feces","ear wax","nasal mucus"]
},
"显示器":
{"simp":"显示器",
"trad":"顯示器",
"pinyin":"xiǎn shì qì",
"def": ["monitor (computer)"]
},
"该":
{"simp":"该",
"trad":"該",
"pinyin":"gāi",
"def": ["should","ought to","probably","must be","to deserve","to owe","to be sb's turn to do sth","that","the above-mentioned"]
},
"曾":
{"simp":"曾",
"trad":"曾",
"pinyin":"zēng",
"def": ["great- (grandfather, grandchild etc)"]
},
"静":
{"simp":"静",
"trad":"靜",
"pinyin":"jìng",
"def": ["still","calm","quiet","not moving"]
},
"少女":
{"simp":"少女",
"trad":"少女",
"pinyin":"shào nǔ:",
"def": ["girl","young lady"]
},
"检阅":
{"simp":"检阅",
"trad":"檢閱",
"pinyin":"jiǎn yuè",
"def": ["to inspect","to review (troops etc)","military review"]
},
"面孔":
{"simp":"面孔",
"trad":"面孔",
"pinyin":"miàn kǒng",
"def": ["face"]
},
"枯竭":
{"simp":"枯竭",
"trad":"枯竭",
"pinyin":"kū jié",
"def": ["used up","dried up","exhausted (of resources)"]
},
"西边":
{"simp":"西边",
"trad":"西邊",
"pinyin":"xī biān",
"def": ["west","west side","western part","to the west of"]
},
"绝对":
{"simp":"绝对",
"trad":"絕對",
"pinyin":"jué duì",
"def": ["absolute","unconditional"]
},
"绿色":
{"simp":"绿色",
"trad":"綠色",
"pinyin":"lù: sè",
"def": ["green"]
},
"在下面":
{"simp":"在下面",
"trad":"在下面",
"pinyin":"zài xià miàn",
"def": ["underneath"]
},
"外":
{"simp":"外",
"trad":"外",
"pinyin":"wài",
"def": ["outside","in addition","foreign","external"]
},
"各个":
{"simp":"各个",
"trad":"各個",
"pinyin":"gè gè",
"def": ["every","various","separately, one by one"]
},
"片":
{"simp":"片",
"trad":"片",
"pinyin":"piàn",
"def": ["thin piece","flake","a slice","film","TV play","to slice","to carve thin","partial","incomplete","one-sided","classifier for slices, tablets, tract of land, area of water","classifier for CDs, movies, DVDs etc","used with numeral 一[yi1]: classifier for scenario, scene, feeling, atmosphere, sound etc","Kangxi radical 91"]
},
"信息":
{"simp":"信息",
"trad":"信息",
"pinyin":"xìn xī",
"def": ["information","news","message"]
},
"快":
{"simp":"快",
"trad":"快",
"pinyin":"kuài",
"def": ["rapid","quick","speed","rate","soon","almost","to make haste","clever","sharp (of knives or wits)","forthright","plainspoken","gratified","pleased","pleasant"]
},
"徐徐":
{"simp":"徐徐",
"trad":"徐徐",
"pinyin":"xú xú",
"def": ["slowly","gently"]
},
"繁琐":
{"simp":"繁琐",
"trad":"繁瑣",
"pinyin":"fán suǒ",
"def": ["many and complicated","mired in minor details"]
},
"最近":
{"simp":"最近",
"trad":"最近",
"pinyin":"zuì jìn",
"def": ["recently","soon","nearest"]
},
"小":
{"simp":"小",
"trad":"小",
"pinyin":"xiǎo",
"def": ["small","tiny","few","young"]
},
"说话":
{"simp":"说话",
"trad":"說話",
"pinyin":"shuō huà",
"def": ["to speak","to say","to talk","to gossip","to tell stories","talk","word"]
},
"走出":
{"simp":"走出",
"trad":"走出",
"pinyin":"zǒu chū",
"def": ["to leave (a room etc)","to go out through (a door etc)"]
},
"井上":
{"simp":"井上",
"trad":"井上",
"pinyin":"Jǐng shàng",
"def": ["Inoue (Japanese surname, pr. \"ee-no-oo-ay\")"]
},
"世界":
{"simp":"世界",
"trad":"世界",
"pinyin":"shì jiè",
"def": ["world","CL:個|个[ge4]"]
},
"推":
{"simp":"推",
"trad":"推",
"pinyin":"tuī",
"def": ["to push","to cut","to refuse","to reject","to decline","to shirk (responsibility)","to put off","to delay","to push forward","to nominate","to elect","massage"]
},
"注意力":
{"simp":"注意力",
"trad":"注意力",
"pinyin":"zhù yì lì",
"def": ["attention"]
},
"带有":
{"simp":"带有",
"trad":"帶有",
"pinyin":"dài yǒu",
"def": ["to have","to involve"]
},
"社":
{"simp":"社",
"trad":"社",
"pinyin":"shè",
"def": ["society","group","club","agency","(old) god of the land"]
},
"注意":
{"simp":"注意",
"trad":"注意",
"pinyin":"zhù yì",
"def": ["to take note of","to pay attention to"]
},
"至少":
{"simp":"至少",
"trad":"至少",
"pinyin":"zhì shǎo",
"def": ["at least","(to say the) least"]
},
"隧道":
{"simp":"隧道",
"trad":"隧道",
"pinyin":"suì dào",
"def": ["tunnel"]
},
"提起":
{"simp":"提起",
"trad":"提起",
"pinyin":"tí qǐ",
"def": ["to mention","to speak of","to lift","to pick up","to arouse","to raise (a topic, a heavy weight, one's fist, one's spirits etc)"]
},
"自由":
{"simp":"自由",
"trad":"自由",
"pinyin":"zì yóu",
"def": ["freedom; liberty","free; unrestricted","CL:種|种[zhong3]"]
},
"目光":
{"simp":"目光",
"trad":"目光",
"pinyin":"mù guāng",
"def": ["sight","vision","view","gaze","look"]
},
"一面":
{"simp":"一面",
"trad":"一面",
"pinyin":"yī miàn",
"def": ["one side","one aspect","simultaneously... (and...)","one's whole face"]
},
"装置":
{"simp":"装置",
"trad":"裝置",
"pinyin":"zhuāng zhì",
"def": ["to install","installation","equipment","system","unit","device"]
},
"飞跃":
{"simp":"飞跃",
"trad":"飛躍",
"pinyin":"fēi yuè",
"def": ["to leap"]
},
"定位":
{"simp":"定位",
"trad":"定位",
"pinyin":"dìng wèi",
"def": ["to orientate","to position","to categorize (as)","to characterize (as)","positioning","position","niche"]
},
"报复":
{"simp":"报复",
"trad":"報復",
"pinyin":"bào fù",
"def": ["to make reprisals","to retaliate","revenge","retaliation"]
},
"发动机":
{"simp":"发动机",
"trad":"發動機",
"pinyin":"fā dòng jī",
"def": ["engine","motor","CL:臺|台[tai2]"]
},
"以后":
{"simp":"以后",
"trad":"以後",
"pinyin":"yǐ hòu",
"def": ["after","later","afterwards","following","later on","in the future"]
},
"党":
{"simp":"党",
"trad":"黨",
"pinyin":"dǎng",
"def": ["party","association","club","society","CL:個|个[ge4]"]
},
"才能":
{"simp":"才能",
"trad":"才能",
"pinyin":"cái néng",
"def": ["talent","ability","capacity"]
},
"千":
{"simp":"千",
"trad":"韆",
"pinyin":"qiān",
"def": ["see 鞦韆|秋千[qiu1 qian1]"]
},
"剧烈":
{"simp":"剧烈",
"trad":"劇烈",
"pinyin":"jù liè",
"def": ["violent","acute","severe","fierce"]
},
"小小":
{"simp":"小小",
"trad":"小小",
"pinyin":"xiǎo xiǎo",
"def": ["very small","very few","very minor"]
},
"谁":
{"simp":"谁",
"trad":"誰",
"pinyin":"shéi",
"def": ["who","also pr. [shui2]"]
},
"一边":
{"simp":"一边",
"trad":"一邊",
"pinyin":"yī biān",
"def": ["one side","either side","on the one hand","on the other hand","doing while"]
},
"冷":
{"simp":"冷",
"trad":"冷",
"pinyin":"lěng",
"def": ["cold"]
},
"杨":
{"simp":"杨",
"trad":"楊",
"pinyin":"yáng",
"def": ["poplar"]
},
"远":
{"simp":"远",
"trad":"遠",
"pinyin":"yuàn",
"def": ["to distance oneself from (classical)"]
},
"八十":
{"simp":"八十",
"trad":"八十",
"pinyin":"bā shí",
"def": ["eighty","80"]
},
"暗淡":
{"simp":"暗淡",
"trad":"暗淡",
"pinyin":"àn dàn",
"def": ["dark","dim (light)","dull (color)","drab","(fig.) gloomy","bleak"]
},
"荡":
{"simp":"荡",
"trad":"蕩",
"pinyin":"dàng",
"def": ["to wash","to squander","to sweep away","to move","to shake","dissolute","pond"]
},
"保龄球":
{"simp":"保龄球",
"trad":"保齡球",
"pinyin":"bǎo líng qiú",
"def": ["ten-pin bowling (loanword)","bowling ball"]
},
"你们":
{"simp":"你们",
"trad":"你們",
"pinyin":"nǐ men",
"def": ["you (plural)"]
},
"软和":
{"simp":"软和",
"trad":"軟和",
"pinyin":"ruǎn huo",
"def": ["(coll.) pleasantly soft","comfy","(of words) gentle","soothing"]
},
"转换":
{"simp":"转换",
"trad":"轉換",
"pinyin":"zhuǎn huàn",
"def": ["to change","to switch","to convert","to transform"]
},
"反映":
{"simp":"反映",
"trad":"反映",
"pinyin":"fǎn yìng",
"def": ["to mirror","to reflect","mirror image","reflection","(fig.) to report","to make known","to render"]
},
"成熟":
{"simp":"成熟",
"trad":"成熟",
"pinyin":"chéng shú",
"def": ["mature","ripe","to mature","to ripen","Taiwan pr. [cheng2 shou2]"]
},
"缺":
{"simp":"缺",
"trad":"缺",
"pinyin":"quē",
"def": ["deficiency","lack","scarce","vacant post","to run short of"]
},
"破":
{"simp":"破",
"trad":"破",
"pinyin":"pò",
"def": ["broken","damaged","worn out","lousy","rotten","to break, split or cleave","to get rid of","to destroy","to break with","to defeat","to capture (a city etc)","to expose the truth of"]
},
"错过":
{"simp":"错过",
"trad":"錯過",
"pinyin":"cuò guò",
"def": ["to miss (train, opportunity etc)"]
},
"接口":
{"simp":"接口",
"trad":"接口",
"pinyin":"jiē kǒu",
"def": ["interface","port","connector"]
},
"减弱":
{"simp":"减弱",
"trad":"減弱",
"pinyin":"jiǎn ruò",
"def": ["to weaken","to fall off"]
},
"科学":
{"simp":"科学",
"trad":"科學",
"pinyin":"kē xué",
"def": ["science","scientific knowledge","scientific","rational","CL:門|门[men2],個|个[ge4],種|种[zhong3]"]
},
"光":
{"simp":"光",
"trad":"光",
"pinyin":"guāng",
"def": ["light","ray","CL:道[dao4]","bright","only","merely","to use up"]
},
"似的":
{"simp":"似的",
"trad":"似的",
"pinyin":"shì de",
"def": ["seems as if","rather like","Taiwan pr. [si4 de5]"]
},
"谣传":
{"simp":"谣传",
"trad":"謠傳",
"pinyin":"yáo chuán",
"def": ["rumor"]
},
"爆炸":
{"simp":"爆炸",
"trad":"爆炸",
"pinyin":"bào zhà",
"def": ["explosion","to explode","to blow up","to detonate"]
},
"啦":
{"simp":"啦",
"trad":"啦",
"pinyin":"la",
"def": ["sentence-final particle, contraction of 了啊, indicating exclamation","particle placed after each item in a list of examples"]
},
"真":
{"simp":"真",
"trad":"真",
"pinyin":"zhēn",
"def": ["really","truly","indeed","real","true","genuine"]
},
"这样":
{"simp":"这样",
"trad":"這樣",
"pinyin":"zhè yàng",
"def": ["this kind of","so","this way","like this","such"]
},
"只是":
{"simp":"只是",
"trad":"只是",
"pinyin":"zhǐ shì",
"def": ["merely","simply","only","but"]
},
"已":
{"simp":"已",
"trad":"已",
"pinyin":"yǐ",
"def": ["already","to stop","then","afterwards"]
},
"经":
{"simp":"经",
"trad":"經",
"pinyin":"jīng",
"def": ["classics","sacred book","scripture","to pass through","to undergo","to bear","to endure","warp (textile)","longitude","menstruation","channel (TCM)","abbr. for economics 經濟|经济[jing1 ji4]"]
},
"光学":
{"simp":"光学",
"trad":"光學",
"pinyin":"guāng xué",
"def": ["optics","optical (instrument)"]
},
"抽":
{"simp":"抽",
"trad":"抽",
"pinyin":"chōu",
"def": ["to draw out","to pull out from in between","to remove part of the whole","(of certain plants) to sprout or bud","to whip or thrash"]
},
"地面":
{"simp":"地面",
"trad":"地面",
"pinyin":"dì miàn",
"def": ["floor","ground","surface"]
},
"烈士":
{"simp":"烈士",
"trad":"烈士",
"pinyin":"liè shì",
"def": ["martyr"]
},
"到来":
{"simp":"到来",
"trad":"到來",
"pinyin":"dào lái",
"def": ["to arrive","arrival","advent"]
},
"外衣":
{"simp":"外衣",
"trad":"外衣",
"pinyin":"wài yī",
"def": ["outer clothing","semblance","appearance"]
},
"另外":
{"simp":"另外",
"trad":"另外",
"pinyin":"lìng wài",
"def": ["additional","in addition","besides","separate","other","moreover","furthermore"]
},
"银":
{"simp":"银",
"trad":"銀",
"pinyin":"yín",
"def": ["silver","silver-colored","relating to money or currency"]
},
"长叹":
{"simp":"长叹",
"trad":"長嘆",
"pinyin":"cháng tàn",
"def": ["long sigh","deep sigh"]
},
"始":
{"simp":"始",
"trad":"始",
"pinyin":"shǐ",
"def": ["to begin","to start","then","only then"]
},
"设计":
{"simp":"设计",
"trad":"設計",
"pinyin":"shè jì",
"def": ["plan","design","to design","to plan","CL:個|个[ge4]"]
},
"裂痕":
{"simp":"裂痕",
"trad":"裂痕",
"pinyin":"liè hén",
"def": ["crack","gap","split"]
},
"受到":
{"simp":"受到",
"trad":"受到",
"pinyin":"shòu dào",
"def": ["to receive (praise, an education, punishment etc)","to be ...ed (praised, educated, punished etc)"]
},
"争霸":
{"simp":"争霸",
"trad":"爭霸",
"pinyin":"zhēng bà",
"def": ["to contend for hegemony","a power struggle"]
},
"做":
{"simp":"做",
"trad":"做",
"pinyin":"zuò",
"def": ["to make; to produce","to write; to compose","to do; to engage in; to hold (a party etc)","(of a person) to be (an intermediary, a good student etc); to become (husband and wife, friends etc)","(of a thing) to serve as; to be used for","to assume (an air or manner)"]
},
"你":
{"simp":"你",
"trad":"你",
"pinyin":"nǐ",
"def": ["you (informal, as opposed to courteous 您[nin2])"]
},
"信心":
{"simp":"信心",
"trad":"信心",
"pinyin":"xìn xīn",
"def": ["confidence","faith (in sb or sth)","CL:個|个[ge4]"]
},
"事":
{"simp":"事",
"trad":"事",
"pinyin":"shì",
"def": ["matter","thing","item","work","affair","CL:件[jian4],樁|桩[zhuang1],回[hui2]"]
},
"发现":
{"simp":"发现",
"trad":"發現",
"pinyin":"fā xiàn",
"def": ["to find","to discover"]
},
"汇款":
{"simp":"汇款",
"trad":"匯款",
"pinyin":"huì kuǎn",
"def": ["to remit money","remittance"]
},
"转入":
{"simp":"转入",
"trad":"轉入",
"pinyin":"zhuǎn rù",
"def": ["to change over to; to shift to; to switch to"]
},
"形式":
{"simp":"形式",
"trad":"形式",
"pinyin":"xíng shì",
"def": ["outer appearance","form","shape","formality","CL:個|个[ge4]"]
},
"发出":
{"simp":"发出",
"trad":"發出",
"pinyin":"fā chū",
"def": ["to issue (an order, decree etc)","to send out","to dispatch","to produce (a sound)","to let out (a laugh)"]
},
"国家":
{"simp":"国家",
"trad":"國家",
"pinyin":"guó jiā",
"def": ["country","nation","state","CL:個|个[ge4]"]
},
"东北":
{"simp":"东北",
"trad":"東北",
"pinyin":"dōng běi",
"def": ["northeast"]
},
"别":
{"simp":"别",
"trad":"彆",
"pinyin":"biè",
"def": ["to make sb change their ways, opinions etc"]
},
"用力":
{"simp":"用力",
"trad":"用力",
"pinyin":"yòng lì",
"def": ["to exert oneself physically"]
},
"挂":
{"simp":"挂",
"trad":"掛",
"pinyin":"guà",
"def": ["to hang or suspend (from a hook etc)","to hang up (the phone)","(of a line) to be dead","to be worried or concerned","to make a phone call (dialect)","to register or record","classifier for sets or clusters of objects","(slang) to kill","to die","to be finished","to fail (an exam)"]
},
"出来":
{"simp":"出来",
"trad":"出來",
"pinyin":"chu lai",
"def": ["(after a verb, indicates coming out, completion of an action, or ability to discern or detect)"]
},
"天边":
{"simp":"天边",
"trad":"天邊",
"pinyin":"tiān biān",
"def": ["horizon","ends of the earth","remotest places"]
},
"表现":
{"simp":"表现",
"trad":"表現",
"pinyin":"biǎo xiàn",
"def": ["to show","to show off","to display","to manifest","expression","manifestation","show","display","performance (at work etc)","behavior"]
},
"导电性":
{"simp":"导电性",
"trad":"導電性",
"pinyin":"dǎo diàn xìng",
"def": ["conductivity (elec.)"]
},
"一时":
{"simp":"一时",
"trad":"一時",
"pinyin":"yī shí",
"def": ["a period of time","a while","for a short while","temporary","momentary","at the same time"]
},
"艰难":
{"simp":"艰难",
"trad":"艱難",
"pinyin":"jiān nán",
"def": ["difficult","hard","challenging"]
},
"姐姐":
{"simp":"姐姐",
"trad":"姐姐",
"pinyin":"jiě jie",
"def": ["older sister","CL:個|个[ge4]"]
},
"破旧":
{"simp":"破旧",
"trad":"破舊",
"pinyin":"pò jiù",
"def": ["shabby"]
},
"所":
{"simp":"所",
"trad":"所",
"pinyin":"suǒ",
"def": ["actually","place","classifier for houses, small buildings, institutions etc","that which","particle introducing a relative clause or passive","CL:個|个[ge4]"]
},
"受":
{"simp":"受",
"trad":"受",
"pinyin":"shòu",
"def": ["to receive","to accept","to suffer","subjected to","to bear","to stand","pleasant","(passive marker)"]
},
"重重":
{"simp":"重重",
"trad":"重重",
"pinyin":"zhòng zhòng",
"def": ["heavily","severely"]
},
"献出":
{"simp":"献出",
"trad":"獻出",
"pinyin":"xiàn chū",
"def": ["to offer","to give (as tribute)","to devote (one's life)","to sacrifice (oneself)"]
},
"奇缺":
{"simp":"奇缺",
"trad":"奇缺",
"pinyin":"qí quē",
"def": ["very short of (food, clean water etc)","extreme shortage","deficit"]
},
"对不上":
{"simp":"对不上",
"trad":"對不上",
"pinyin":"duì bù shàng",
"def": ["to disagree","I can't agree with that."]
},
"由此可见":
{"simp":"由此可见",
"trad":"由此可見",
"pinyin":"yóu cǐ kě jiàn",
"def": ["from this, it can be seen that..."]
},
"保准":
{"simp":"保准",
"trad":"保準",
"pinyin":"bǎo zhǔn",
"def": ["variant of 保准[bao3 zhun3]"]
},
"同步":
{"simp":"同步",
"trad":"同步",
"pinyin":"tóng bù",
"def": ["synchronous","to synchronize","to keep step with"]
},
"温和":
{"simp":"温和",
"trad":"溫和",
"pinyin":"wēn huo",
"def": ["lukewarm"]
},
"进行":
{"simp":"进行",
"trad":"進行",
"pinyin":"jìn xíng",
"def": ["to advance","to conduct","underway","in progress","to do","to carry out","to carry on","to execute"]
},
"树木":
{"simp":"树木",
"trad":"樹木",
"pinyin":"shù mù",
"def": ["tree"]
},
"令":
{"simp":"令",
"trad":"令",
"pinyin":"lìng",
"def": ["to order","to command","an order","warrant","writ","to cause","to make sth happen","virtuous","honorific title","season","government position (old)","type of short song or poem"]
},
"测试":
{"simp":"测试",
"trad":"測試",
"pinyin":"cè shì",
"def": ["to test (machinery etc)","to test (students)","test","quiz","exam","beta (software)"]
},
"普通人":
{"simp":"普通人",
"trad":"普通人",
"pinyin":"pǔ tōng rén",
"def": ["ordinary person","private citizen","people","the person in the street"]
},
"星星":
{"simp":"星星",
"trad":"星星",
"pinyin":"xīng xing",
"def": ["star in the sky"]
},
"总数":
{"simp":"总数",
"trad":"總數",
"pinyin":"zǒng shù",
"def": ["total","sum","aggregate"]
},
"理论":
{"simp":"理论",
"trad":"理論",
"pinyin":"lǐ lùn",
"def": ["theory","CL:個|个[ge4]","to argue","to take notice of"]
},
"距":
{"simp":"距",
"trad":"距",
"pinyin":"jù",
"def": ["at a distance of","distance","to be apart"]
},
"兵戎相见":
{"simp":"兵戎相见",
"trad":"兵戎相見",
"pinyin":"bīng róng xiāng jiàn",
"def": ["to meet on the battlefield (idiom)"]
},
"面积":
{"simp":"面积",
"trad":"面積",
"pinyin":"miàn jī",
"def": ["area (of a floor, piece of land etc)","surface area","tract of land"]
},
"大个儿":
{"simp":"大个儿",
"trad":"大個兒",
"pinyin":"dà gè r5",
"def": ["tall person"]
},
"商量":
{"simp":"商量",
"trad":"商量",
"pinyin":"shāng liang",
"def": ["to consult","to talk over","to discuss"]
},
"修养":
{"simp":"修养",
"trad":"修養",
"pinyin":"xiū yǎng",
"def": ["accomplishment","training","self-cultivation"]
},
"电波":
{"simp":"电波",
"trad":"電波",
"pinyin":"diàn bō",
"def": ["electric wave","alternating current"]
},
"计算":
{"simp":"计算",
"trad":"計算",
"pinyin":"jì suàn",
"def": ["to count","to calculate","to compute","CL:個|个[ge4]"]
},
"参数":
{"simp":"参数",
"trad":"參數",
"pinyin":"cān shù",
"def": ["parameter"]
},
"字幕":
{"simp":"字幕",
"trad":"字幕",
"pinyin":"zì mù",
"def": ["caption","subtitle"]
},
"欢迎":
{"simp":"欢迎",
"trad":"歡迎",
"pinyin":"huān yíng",
"def": ["to welcome","welcome"]
},
"电子邮件":
{"simp":"电子邮件",
"trad":"電子郵件",
"pinyin":"diàn zǐ yóu jiàn",
"def": ["email","CL:封[feng1],份[fen4]"]
},
"醒目":
{"simp":"醒目",
"trad":"醒目",
"pinyin":"xǐng mù",
"def": ["eye-grabbing (headline)","striking (illustration)"]
},
"费劲":
{"simp":"费劲",
"trad":"費勁",
"pinyin":"fèi jìn",
"def": ["to require effort","strenuous"]
},
"神奇":
{"simp":"神奇",
"trad":"神奇",
"pinyin":"shén qí",
"def": ["magical","mystical","miraculous"]
},
"成了":
{"simp":"成了",
"trad":"成了",
"pinyin":"chéng le",
"def": ["to be done","to be ready","that's enough!","that will do!"]
},
"较为":
{"simp":"较为",
"trad":"較為",
"pinyin":"jiào wéi",
"def": ["comparatively","relatively","fairly"]
},
"海":
{"simp":"海",
"trad":"海",
"pinyin":"hǎi",
"def": ["ocean","sea","CL:個|个[ge4],片[pian4]","great number of people or things","(dialect) numerous"]
},
"在场":
{"simp":"在场",
"trad":"在場",
"pinyin":"zài chǎng",
"def": ["to be present","to be on the scene"]
},
"达到":
{"simp":"达到",
"trad":"達到",
"pinyin":"dá dào",
"def": ["to reach","to achieve","to attain"]
},
"城市":
{"simp":"城市",
"trad":"城市",
"pinyin":"chéng shì",
"def": ["city","town","CL:座[zuo4]"]
},
"世外桃源":
{"simp":"世外桃源",
"trad":"世外桃源",
"pinyin":"shì wài táo yuán",
"def": ["see 桃花源[tao2 hua1 yuan2]"]
},
"计划":
{"simp":"计划",
"trad":"計劃",
"pinyin":"jì huà",
"def": ["plan","project","program","to plan","to map out","CL:個|个[ge4],項|项[xiang4]"]
},
"位居":
{"simp":"位居",
"trad":"位居",
"pinyin":"wèi jū",
"def": ["to be located at"]
},
"前":
{"simp":"前",
"trad":"前",
"pinyin":"qián",
"def": ["front","forward","ahead","first","top (followed by a number)","future","ago","before","BC (e.g. 前293年)","former","formerly"]
},
"郡":
{"simp":"郡",
"trad":"郡",
"pinyin":"jùn",
"def": ["canton","county","region"]
},
"价钱":
{"simp":"价钱",
"trad":"價錢",
"pinyin":"jià qian",
"def": ["price"]
},
"在旁":
{"simp":"在旁",
"trad":"在旁",
"pinyin":"zài páng",
"def": ["alongside","nearby"]
},
"趟":
{"simp":"趟",
"trad":"趟",
"pinyin":"tàng",
"def": ["classifier for times, round trips or rows","a time","a trip"]
},
"无影无踪":
{"simp":"无影无踪",
"trad":"無影無蹤",
"pinyin":"wú yǐng wú zōng",
"def": ["to disappear without trace (idiom)"]
},
"海浪":
{"simp":"海浪",
"trad":"海浪",
"pinyin":"hǎi làng",
"def": ["sea wave"]
},
"件":
{"simp":"件",
"trad":"件",
"pinyin":"jiàn",
"def": ["item","component","classifier for events, things, clothes etc"]
},
"教学":
{"simp":"教学",
"trad":"教學",
"pinyin":"jiào xué",
"def": ["teaching","instruction","CL:門|门[men2],個|个[ge4]"]
},
"沸腾":
{"simp":"沸腾",
"trad":"沸騰",
"pinyin":"fèi téng",
"def": ["(of a liquid) to boil","(of sentiments etc) to boil over","to flare up","to be impassioned"]
},
"个":
{"simp":"个",
"trad":"箇",
"pinyin":"gè",
"def": ["variant of 個|个[ge4]"]
},
"这个":
{"simp":"这个",
"trad":"這個",
"pinyin":"zhè ge",
"def": ["this","this one"]
},
"执政官":
{"simp":"执政官",
"trad":"執政官",
"pinyin":"zhí zhèng guān",
"def": ["consul (of the Roman Republic)","magistrate (chief administrator)"]
},
"不在乎":
{"simp":"不在乎",
"trad":"不在乎",
"pinyin":"bù zài hu",
"def": ["not to care"]
},
"明显":
{"simp":"明显",
"trad":"明顯",
"pinyin":"míng xiǎn",
"def": ["clear","distinct","obvious"]
},
"真诚":
{"simp":"真诚",
"trad":"真誠",
"pinyin":"zhēn chéng",
"def": ["true","sincere","genuine"]
},
"缓慢":
{"simp":"缓慢",
"trad":"緩慢",
"pinyin":"huǎn màn",
"def": ["slow","slow-moving"]
},
"有":
{"simp":"有",
"trad":"有",
"pinyin":"yǒu",
"def": ["to have","there is","there are","to exist","to be"]
},
"成功":
{"simp":"成功",
"trad":"成功",
"pinyin":"chéng gōng",
"def": ["success","to succeed","CL:次[ci4],個|个[ge4]"]
},
"鉴于":
{"simp":"鉴于",
"trad":"鑒於",
"pinyin":"jiàn yú",
"def": ["in view of","seeing that","considering","whereas"]
},
"一层":
{"simp":"一层",
"trad":"一層",
"pinyin":"yī céng",
"def": ["layer"]
},
"会":
{"simp":"会",
"trad":"會",
"pinyin":"kuài",
"def": ["to balance an account","accountancy","accounting"]
},
"梦乡":
{"simp":"梦乡",
"trad":"夢鄉",
"pinyin":"mèng xiāng",
"def": ["the land of dreams","slumberland"]
},
"看上去":
{"simp":"看上去",
"trad":"看上去",
"pinyin":"kàn shang qu",
"def": ["it would appear","it seems (that)"]
},
"游客":
{"simp":"游客",
"trad":"遊客",
"pinyin":"yóu kè",
"def": ["traveler","tourist","(online gaming) guest player"]
},
"己":
{"simp":"己",
"trad":"己",
"pinyin":"jǐ",
"def": ["self","oneself","sixth of the ten Heavenly Stems 十天干[shi2 tian1 gan1]","sixth in order","letter \"F\" or Roman \"VI\" in list \"A, B, C\", or \"I, II, III\" etc","hexa"]
},
"加总":
{"simp":"加总",
"trad":"加總",
"pinyin":"jiā zǒng",
"def": ["sum (result of addition)","addition","total","to add up a number of items","to accumulate"]
},
"是的":
{"simp":"是的",
"trad":"是的",
"pinyin":"shì de",
"def": ["yes, that's right","variant of 似的[shi4 de5]"]
},
"索":
{"simp":"索",
"trad":"索",
"pinyin":"suǒ",
"def": ["to search","to demand","to ask","to exact","large rope","isolated"]
},
"去除":
{"simp":"去除",
"trad":"去除",
"pinyin":"qù chú",
"def": ["to remove","to dislodge"]
},
"场面":
{"simp":"场面",
"trad":"場面",
"pinyin":"chǎng miàn",
"def": ["scene","spectacle","occasion","situation"]
},
"危险":
{"simp":"危险",
"trad":"危險",
"pinyin":"wēi xiǎn",
"def": ["danger","dangerous"]
},
"中装":
{"simp":"中装",
"trad":"中裝",
"pinyin":"zhōng zhuāng",
"def": ["Chinese dress"]
},
"逐":
{"simp":"逐",
"trad":"逐",
"pinyin":"zhú",
"def": ["(bound form) to pursue","to chase away","individually","one by one"]
},
"在地":
{"simp":"在地",
"trad":"在地",
"pinyin":"zài dì",
"def": ["local"]
},
"对家":
{"simp":"对家",
"trad":"對家",
"pinyin":"duì jiā",
"def": ["partner (in four person game)","family of proposed marriage partner"]
},
"杰":
{"simp":"杰",
"trad":"杰",
"pinyin":"jié",
"def": ["variant of 傑|杰[jie2]"]
},
"幼稚":
{"simp":"幼稚",
"trad":"幼稚",
"pinyin":"yòu zhì",
"def": ["young","childish","puerile"]
},
"减小":
{"simp":"减小",
"trad":"減小",
"pinyin":"jiǎn xiǎo",
"def": ["to reduce","to decrease","to diminish"]
},
"在理":
{"simp":"在理",
"trad":"在理",
"pinyin":"zài lǐ",
"def": ["reasonable","sensible"]
},
"厚实":
{"simp":"厚实",
"trad":"厚實",
"pinyin":"hòu shi",
"def": ["thick","substantial","sturdy","solid"]
},
"万岁":
{"simp":"万岁",
"trad":"萬歲",
"pinyin":"wàn suì",
"def": ["Long live (the king, the revolution etc)!","Your Majesty","His Majesty"]
},
"无线电":
{"simp":"无线电",
"trad":"無線電",
"pinyin":"wú xiàn diàn",
"def": ["wireless"]
},
"申诉":
{"simp":"申诉",
"trad":"申訴",
"pinyin":"shēn sù",
"def": ["to file a complaint","to appeal (to an authority, a higher court of justice etc)","complaint","appeal"]
},
"人生":
{"simp":"人生",
"trad":"人生",
"pinyin":"rén shēng",
"def": ["life (one's time on earth)"]
},
"协调员":
{"simp":"协调员",
"trad":"協調員",
"pinyin":"xié tiáo yuán",
"def": ["coordinator"]
},
"走":
{"simp":"走",
"trad":"走",
"pinyin":"zǒu",
"def": ["to walk","to go","to run","to move (of vehicle)","to visit","to leave","to go away","to die (euph.)","from","through","away (in compound verbs, such as 撤走[che4 zou3])","to change (shape, form, meaning)"]
},
"化学":
{"simp":"化学",
"trad":"化學",
"pinyin":"huà xué",
"def": ["chemistry","chemical"]
},
"行":
{"simp":"行",
"trad":"行",
"pinyin":"xíng",
"def": ["to walk","to go","to travel","a visit","temporary","makeshift","current","in circulation","to do","to perform","capable","competent","effective","all right","OK!","will do","behavior","conduct","Taiwan pr. [xing4] for the behavior-conduct sense"]
},
"飞舞":
{"simp":"飞舞",
"trad":"飛舞",
"pinyin":"fēi wǔ",
"def": ["to flutter","to dance in the breeze"]
},
"说到底":
{"simp":"说到底",
"trad":"說到底",
"pinyin":"shuō dào dǐ",
"def": ["in the final analysis","in the end"]
},
"自己":
{"simp":"自己",
"trad":"自己",
"pinyin":"zì jǐ",
"def": ["oneself","one's own"]
},
"解决":
{"simp":"解决",
"trad":"解決",
"pinyin":"jiě jué",
"def": ["to settle (a dispute)","to resolve","to solve","to dispose of","to dispatch"]
},
"肾":
{"simp":"肾",
"trad":"腎",
"pinyin":"shèn",
"def": ["kidney"]
},
"白色":
{"simp":"白色",
"trad":"白色",
"pinyin":"bái sè",
"def": ["white","fig. reactionary","anti-communist"]
},
"二号":
{"simp":"二号",
"trad":"二號",
"pinyin":"èr hào",
"def": ["2nd day of the month"]
},
"永远":
{"simp":"永远",
"trad":"永遠",
"pinyin":"yǒng yuǎn",
"def": ["forever","eternal"]
},
"奇怪":
{"simp":"奇怪",
"trad":"奇怪",
"pinyin":"qí guài",
"def": ["strange","odd","to marvel","to be baffled"]
},
"志":
{"simp":"志",
"trad":"誌",
"pinyin":"zhì",
"def": ["sign","mark","to record","to write a footnote"]
},
"死灰复燃":
{"simp":"死灰复燃",
"trad":"死灰復燃",
"pinyin":"sǐ huī fù rán",
"def": ["lit. ashes burn once more (idiom); fig. sb lost returns to have influence","sth malevolent returns to haunt one"]
},
"人海":
{"simp":"人海",
"trad":"人海",
"pinyin":"rén hǎi",
"def": ["a multitude","a sea of people"]
},
"央求":
{"simp":"央求",
"trad":"央求",
"pinyin":"yāng qiú",
"def": ["to implore","to plead","to ask earnestly"]
},
"做错":
{"simp":"做错",
"trad":"做錯",
"pinyin":"zuò cuò",
"def": ["to make an error"]
},
"正":
{"simp":"正",
"trad":"正",
"pinyin":"zhèng",
"def": ["straight","upright","proper","main","principal","to correct","to rectify","exactly","just (at that time)","right (in that place)","(math.) positive"]
},
"多重":
{"simp":"多重",
"trad":"多重",
"pinyin":"duō chóng",
"def": ["multi- (faceted, cultural, ethnic etc)"]
},
"晨":
{"simp":"晨",
"trad":"晨",
"pinyin":"chén",
"def": ["morning","dawn","daybreak"]
},
"矩阵":
{"simp":"矩阵",
"trad":"矩陣",
"pinyin":"jǔ zhèn",
"def": ["array","matrix (math.)"]
},
"引力":
{"simp":"引力",
"trad":"引力",
"pinyin":"yǐn lì",
"def": ["gravitation (force)","attraction"]
},
"操控":
{"simp":"操控",
"trad":"操控",
"pinyin":"cāo kòng",
"def": ["to control","to manipulate"]
},
"理会":
{"simp":"理会",
"trad":"理會",
"pinyin":"lǐ huì",
"def": ["to understand","to pay attention to","to take notice of"]
},
"脑海":
{"simp":"脑海",
"trad":"腦海",
"pinyin":"nǎo hǎi",
"def": ["the mind","the brain"]
},
"机械性":
{"simp":"机械性",
"trad":"機械性",
"pinyin":"jī xiè xìng",
"def": ["mechanical"]
},
"应":
{"simp":"应",
"trad":"應",
"pinyin":"yìng",
"def": ["to answer","to respond","to comply with","to deal or cope with"]
},
"骚动":
{"simp":"骚动",
"trad":"騷動",
"pinyin":"sāo dòng",
"def": ["disturbance","uproar","CL:陣|阵[zhen4]","to become restless"]
},
"臂":
{"simp":"臂",
"trad":"臂",
"pinyin":"bì",
"def": ["arm"]
},
"了":
{"simp":"了",
"trad":"瞭",
"pinyin":"liào",
"def": ["unofficial variant of 瞭[liao4]"]
},
"一":
{"simp":"一",
"trad":"一",
"pinyin":"yī",
"def": ["one","single","a (article)","as soon as","entire; whole; all; throughout","\"one\" radical in Chinese characters (Kangxi radical 1)","also pr. [yao1] for greater clarity when spelling out numbers digit by digit"]
},
"睛":
{"simp":"睛",
"trad":"睛",
"pinyin":"jīng",
"def": ["eye","eyeball"]
},
"名":
{"simp":"名",
"trad":"名",
"pinyin":"míng",
"def": ["name","noun (part of speech)","place (e.g. among winners)","famous","classifier for people"]
},
"亮度":
{"simp":"亮度",
"trad":"亮度",
"pinyin":"liàng dù",
"def": ["brightness"]
},
"破坏":
{"simp":"破坏",
"trad":"破壞",
"pinyin":"pò huài",
"def": ["destruction","damage","to wreck","to break","to destroy"]
},
"行星":
{"simp":"行星",
"trad":"行星",
"pinyin":"xíng xīng",
"def": ["planet","CL:顆|颗[ke1]"]
},
"基座":
{"simp":"基座",
"trad":"基座",
"pinyin":"jī zuò",
"def": ["underlay","foundation","pedestal"]
},
"左右":
{"simp":"左右",
"trad":"左右",
"pinyin":"zuǒ yòu",
"def": ["left and right","nearby","approximately","attendant","to control","to influence"]
},
"嘴":
{"simp":"嘴",
"trad":"嘴",
"pinyin":"zuǐ",
"def": ["mouth","beak","nozzle","spout (of teapot etc)","CL:張|张[zhang1],個|个[ge4]"]
},
"馅":
{"simp":"馅",
"trad":"餡",
"pinyin":"xiàn",
"def": ["stuffing","forcemeat","filling"]
},
"社会阶层":
{"simp":"社会阶层",
"trad":"社會階層",
"pinyin":"shè huì jiē céng",
"def": ["social hierarchy","stratum in society","social status"]
},
"看":
{"simp":"看",
"trad":"看",
"pinyin":"kàn",
"def": ["to see","to look at","to read","to watch","to visit","to call on","to consider","to regard as","to look after","to treat (an illness)","to depend on","to feel (that)","(after verb) to give it a try","Watch out! (for a danger)"]
},
"城":
{"simp":"城",
"trad":"城",
"pinyin":"chéng",
"def": ["city walls","city","town","CL:座[zuo4],道[dao4],個|个[ge4]"]
},
"开凿":
{"simp":"开凿",
"trad":"開鑿",
"pinyin":"kāi záo",
"def": ["to cut (a canal, tunnel, well etc)"]
},
"环境":
{"simp":"环境",
"trad":"環境",
"pinyin":"huán jìng",
"def": ["environment","circumstances","surroundings","CL:個|个[ge4]","ambient"]
},
"咱们":
{"simp":"咱们",
"trad":"咱們",
"pinyin":"zán men",
"def": ["we or us (including both the speaker and the person(s) spoken to)","(dialect) I or me","(dialect) (in a coaxing or familiar way) you","also pr. [za2 men5]"]
},
"中":
{"simp":"中",
"trad":"中",
"pinyin":"zhòng",
"def": ["to hit (the mark)","to be hit by","to suffer","to win (a prize, a lottery)"]
},
"购":
{"simp":"购",
"trad":"購",
"pinyin":"gòu",
"def": ["to buy","to purchase"]
},
"接收器":
{"simp":"接收器",
"trad":"接收器",
"pinyin":"jiē shōu qì",
"def": ["receiver"]
},
"心跳":
{"simp":"心跳",
"trad":"心跳",
"pinyin":"xīn tiào",
"def": ["heartbeat","pulse"]
},
"浪费":
{"simp":"浪费",
"trad":"浪費",
"pinyin":"làng fèi",
"def": ["to waste","to squander"]
},
"舱":
{"simp":"舱",
"trad":"艙",
"pinyin":"cāng",
"def": ["cabin","the hold of a ship or airplane"]
},
"一打":
{"simp":"一打",
"trad":"一打",
"pinyin":"yī dá",
"def": ["dozen"]
},
"掏":
{"simp":"掏",
"trad":"搯",
"pinyin":"tāo",
"def": ["variant of 掏[tao1]"]
},
"海上":
{"simp":"海上",
"trad":"海上",
"pinyin":"hǎi shàng",
"def": ["maritime"]
},
"持续时间":
{"simp":"持续时间",
"trad":"持續時間",
"pinyin":"chí xù shí jiān",
"def": ["duration"]
},
"欺骗":
{"simp":"欺骗",
"trad":"欺騙",
"pinyin":"qī piàn",
"def": ["to deceive","to cheat"]
},
"在内":
{"simp":"在内",
"trad":"在內",
"pinyin":"zài nèi",
"def": ["(included) in it","among them"]
},
"人造":
{"simp":"人造",
"trad":"人造",
"pinyin":"rén zào",
"def": ["man-made","artificial","synthetic"]
},
"放":
{"simp":"放",
"trad":"放",
"pinyin":"fàng",
"def": ["to put","to place","to release","to free","to let go","to let out","to set off (fireworks)"]
},
"潜伏":
{"simp":"潜伏",
"trad":"潛伏",
"pinyin":"qián fú",
"def": ["to hide","to cover up","to conceal"]
},
"具备":
{"simp":"具备",
"trad":"具備",
"pinyin":"jù bèi",
"def": ["to possess","to have","equipped with","able to fulfill (conditions or requirements)"]
},
"炙":
{"simp":"炙",
"trad":"炙",
"pinyin":"zhì",
"def": ["to broil","to roast"]
},
"日冕":
{"simp":"日冕",
"trad":"日冕",
"pinyin":"rì miǎn",
"def": ["corona"]
},
"最高":
{"simp":"最高",
"trad":"最高",
"pinyin":"zuì gāo",
"def": ["tallest","highest","supreme (court etc)"]
},
"文献":
{"simp":"文献",
"trad":"文獻",
"pinyin":"wén xiàn",
"def": ["document"]
},
"足下":
{"simp":"足下",
"trad":"足下",
"pinyin":"zú xià",
"def": ["you (used to a superior or between persons of the same generation)","below the foot"]
},
"冬天":
{"simp":"冬天",
"trad":"冬天",
"pinyin":"dōng tiān",
"def": ["winter","CL:個|个[ge4]"]
},
"正弦波":
{"simp":"正弦波",
"trad":"正弦波",
"pinyin":"zhèng xián bō",
"def": ["sine wave","simple harmonic vibration"]
},
"结了":
{"simp":"结了",
"trad":"結了",
"pinyin":"jié le",
"def": ["that's that","that's it","that will do"]
},
"过多":
{"simp":"过多",
"trad":"過多",
"pinyin":"guò duō",
"def": ["too many","excessive"]
},
"地籍":
{"simp":"地籍",
"trad":"地籍",
"pinyin":"dì jí",
"def": ["cadaster"]
},
"不断":
{"simp":"不断",
"trad":"不斷",
"pinyin":"bù duàn",
"def": ["unceasing","uninterrupted","continuous","constant"]
},
"粗鲁":
{"simp":"粗鲁",
"trad":"粗魯",
"pinyin":"cū lǔ",
"def": ["coarse","crude (in one's manner)","boorish"]
},
"螺栓":
{"simp":"螺栓",
"trad":"螺栓",
"pinyin":"luó shuān",
"def": ["bolt (male component of nut and bolt)","screw"]
},
"太阳黑子":
{"simp":"太阳黑子",
"trad":"太陽黑子",
"pinyin":"tài yáng hēi zǐ",
"def": ["sunspot"]
},
"大量":
{"simp":"大量",
"trad":"大量",
"pinyin":"dà liàng",
"def": ["great amount","large quantity","bulk","numerous","generous","magnanimous"]
},
"办公":
{"simp":"办公",
"trad":"辦公",
"pinyin":"bàn gōng",
"def": ["to handle official business","to work (esp. in an office)"]
},
"核":
{"simp":"核",
"trad":"覈",
"pinyin":"hé",
"def": ["variant of 核[he2]","to investigate"]
},
"中时":
{"simp":"中时",
"trad":"中時",
"pinyin":"Zhōng Shí",
"def": ["China Times (newspaper), abbr. for 中國時報|中国时报[Zhong1 guo2 Shi2 bao4]"]
},
"到目前":
{"simp":"到目前",
"trad":"到目前",
"pinyin":"dào mù qián",
"def": ["up until now","to date"]
},
"共鸣":
{"simp":"共鸣",
"trad":"共鳴",
"pinyin":"gòng míng",
"def": ["resonance (physics)","sympathetic response to sth"]
},
"到了":
{"simp":"到了",
"trad":"到了",
"pinyin":"dào liǎo",
"def": ["at last","finally","in the end"]
},
"原来":
{"simp":"原来",
"trad":"原來",
"pinyin":"yuán lái",
"def": ["original","former","originally","formerly","at first","so, actually, as it turns out"]
},
"操作员":
{"simp":"操作员",
"trad":"操作員",
"pinyin":"cāo zuò yuán",
"def": ["operator"]
},
"巨轮":
{"simp":"巨轮",
"trad":"巨輪",
"pinyin":"jù lún",
"def": ["large ship","large wheel"]
},
"震荡":
{"simp":"震荡",
"trad":"震蕩",
"pinyin":"zhèn dàng",
"def": ["to vibrate","to shake","to shudder"]
},
"远航":
{"simp":"远航",
"trad":"遠航",
"pinyin":"yuǎn háng",
"def": ["to travel a great distance by sea or air","voyage","long-haul flight"]
},
"十分之一":
{"simp":"十分之一",
"trad":"十分之一",
"pinyin":"shí fēn zhī yī",
"def": ["one tenth"]
},
"罪犯":
{"simp":"罪犯",
"trad":"罪犯",
"pinyin":"zuì fàn",
"def": ["criminal"]
},
"消息":
{"simp":"消息",
"trad":"消息",
"pinyin":"xiāo xi",
"def": ["news","information","CL:條|条[tiao2]"]
},
"整体":
{"simp":"整体",
"trad":"整體",
"pinyin":"zhěng tǐ",
"def": ["whole entity","entire body","synthesis","as a whole (situation, construction, team etc)","global","macrocosm","integral","holistic","whole"]
},
"洁":
{"simp":"洁",
"trad":"潔",
"pinyin":"jié",
"def": ["clean"]
},
"大厅":
{"simp":"大厅",
"trad":"大廳",
"pinyin":"dà tīng",
"def": ["hall","lounge"]
},
"还是":
{"simp":"还是",
"trad":"還是",
"pinyin":"hái shi",
"def": ["or","still","nevertheless","had better"]
},
"地址":
{"simp":"地址",
"trad":"地址",
"pinyin":"dì zhǐ",
"def": ["address","CL:個|个[ge4]"]
},
"老婆":
{"simp":"老婆",
"trad":"老婆",
"pinyin":"lǎo pó",
"def": ["(coll.) wife"]
},
"飞船":
{"simp":"飞船",
"trad":"飛船",
"pinyin":"fēi chuán",
"def": ["spaceship","spacecraft","dirigible","airship"]
},
"关心":
{"simp":"关心",
"trad":"關心",
"pinyin":"guān xīn",
"def": ["to be concerned about","to care about"]
},
"致以":
{"simp":"致以",
"trad":"致以",
"pinyin":"zhì yǐ",
"def": ["to express","to present","to extend","to tender (greetings, thanks etc)"]
},
"星体":
{"simp":"星体",
"trad":"星體",
"pinyin":"xīng tǐ",
"def": ["celestial body (planet, satellite etc)"]
},
"避免":
{"simp":"避免",
"trad":"避免",
"pinyin":"bì miǎn",
"def": ["to avert","to prevent","to avoid","to refrain from"]
},
"除":
{"simp":"除",
"trad":"除",
"pinyin":"chú",
"def": ["to get rid of","to remove","to exclude","to eliminate","to wipe out","to divide","except","not including"]
},
"慢":
{"simp":"慢",
"trad":"慢",
"pinyin":"màn",
"def": ["slow"]
},
"下面":
{"simp":"下面",
"trad":"下麵",
"pinyin":"xià miàn",
"def": ["to boil noodles"]
},
"晃":
{"simp":"晃",
"trad":"晃",
"pinyin":"huàng",
"def": ["to sway","to shake","to wander about"]
},
"知识":
{"simp":"知识",
"trad":"知識",
"pinyin":"zhī shi",
"def": ["knowledge","CL:門|门[men2]","intellectual"]
},
"光环":
{"simp":"光环",
"trad":"光環",
"pinyin":"guāng huán",
"def": ["halo","ring of light"]
},
"扭":
{"simp":"扭",
"trad":"扭",
"pinyin":"niǔ",
"def": ["to turn","to twist","to wring","to sprain","to swing one's hips"]
},
"烈日":
{"simp":"烈日",
"trad":"烈日",
"pinyin":"liè rì",
"def": ["scorching sun"]
},
"清晰":
{"simp":"清晰",
"trad":"清晰",
"pinyin":"qīng xī",
"def": ["clear","distinct"]
},
"既然":
{"simp":"既然",
"trad":"既然",
"pinyin":"jì rán",
"def": ["since","as","this being the case"]
},
"结束":
{"simp":"结束",
"trad":"結束",
"pinyin":"jié shù",
"def": ["termination","to finish","to end","to conclude","to close"]
},
"内":
{"simp":"内",
"trad":"內",
"pinyin":"nèi",
"def": ["inside","inner","internal","within","interior"]
},
"直":
{"simp":"直",
"trad":"直",
"pinyin":"zhí",
"def": ["straight","to straighten","fair and reasonable","frank","straightforward","(indicates continuing motion or action)","vertical","vertical downward stroke in Chinese characters"]
},
"声音":
{"simp":"声音",
"trad":"聲音",
"pinyin":"shēng yīn",
"def": ["voice","sound","CL:個|个[ge4]"]
},
"组织":
{"simp":"组织",
"trad":"組織",
"pinyin":"zǔ zhī",
"def": ["to organize","organization","(biology) tissue","(textiles) weave","CL:個|个[ge4]"]
},
"变成":
{"simp":"变成",
"trad":"變成",
"pinyin":"biàn chéng",
"def": ["to change into","to turn into","to become"]
},
"知":
{"simp":"知",
"trad":"知",
"pinyin":"zhī",
"def": ["to know","to be aware"]
},
"斩断":
{"simp":"斩断",
"trad":"斬斷",
"pinyin":"zhǎn duàn",
"def": ["to cut off","to chop sth in half"]
},
"同意":
{"simp":"同意",
"trad":"同意",
"pinyin":"tóng yì",
"def": ["to agree","to consent","to approve"]
},
"亲眼":
{"simp":"亲眼",
"trad":"親眼",
"pinyin":"qīn yǎn",
"def": ["with one's own eyes","personally"]
},
"在后":
{"simp":"在后",
"trad":"在後",
"pinyin":"zài hòu",
"def": ["behind"]
},
"垃圾":
{"simp":"垃圾",
"trad":"垃圾",
"pinyin":"lā jī",
"def": ["trash","refuse","garbage","(coll.) of poor quality","Taiwan pr. [le4 se4]"]
},
"泄漏":
{"simp":"泄漏",
"trad":"泄漏",
"pinyin":"xiè lòu",
"def": ["(of a liquid or gas) to leak","to divulge; to leak (information)"]
},
"得":
{"simp":"得",
"trad":"得",
"pinyin":"děi",
"def": ["to have to","must","ought to","to need to"]
},
"通知":
{"simp":"通知",
"trad":"通知",
"pinyin":"tōng zhī",
"def": ["to notify","to inform","notice","notification","CL:個|个[ge4]"]
},
"默":
{"simp":"默",
"trad":"默",
"pinyin":"mò",
"def": ["silent","to write from memory"]
},
"丝":
{"simp":"丝",
"trad":"絲",
"pinyin":"sī",
"def": ["silk","thread","trace","(cuisine) shreds or julienne strips","CL:條|条[tiao2]","classifier: a thread (of cloud, smoke etc), a bit, an iota, a hint (of sth) etc"]
},
"对生":
{"simp":"对生",
"trad":"對生",
"pinyin":"duì shēng",
"def": ["(botany) opposite leaf arrangement","paired leaf arrangement"]
},
"运算":
{"simp":"运算",
"trad":"運算",
"pinyin":"yùn suàn",
"def": ["to perform calculations","(mathematical) operation"]
},
"确定":
{"simp":"确定",
"trad":"確定",
"pinyin":"què dìng",
"def": ["definite","certain","fixed","to fix (on sth)","to determine","to be sure","to ensure","to make certain","to ascertain","to clinch","to recognize","to confirm","OK (on computer dialog box)"]
},
"展开":
{"simp":"展开",
"trad":"展開",
"pinyin":"zhǎn kāi",
"def": ["to unfold","to carry out","to be in full swing","to launch"]
},
"全":
{"simp":"全",
"trad":"全",
"pinyin":"quán",
"def": ["all","whole","entire","every","complete"]
},
"关":
{"simp":"关",
"trad":"關",
"pinyin":"guān",
"def": ["mountain pass","to close; to shut; to turn off","to confine; to lock (sb) up; to shut (sb in a room, a bird in a cage etc)","to concern; to involve"]
},
"好战":
{"simp":"好战",
"trad":"好戰",
"pinyin":"hào zhàn",
"def": ["warlike"]
},
"A":
{"simp":"A",
"trad":"A",
"pinyin":"A",
"def": ["(slang) (Tw) to steal"]
},
"恐":
{"simp":"恐",
"trad":"恐",
"pinyin":"kǒng",
"def": ["afraid","frightened","to fear"]
},
"老人":
{"simp":"老人",
"trad":"老人",
"pinyin":"lǎo rén",
"def": ["old man or woman","the elderly","one's aged parents or grandparents"]
},
"来":
{"simp":"来",
"trad":"來",
"pinyin":"lái",
"def": ["to come","to arrive","to come round","ever since","next"]
},
"刚才":
{"simp":"刚才",
"trad":"剛纔",
"pinyin":"gāng cái",
"def": ["just now (variant of 剛才|刚才[gang1 cai2])"]
},
"征兆":
{"simp":"征兆",
"trad":"徵兆",
"pinyin":"zhēng zhào",
"def": ["omen","sign (that sth is about to happen)","warning sign"]
},
"科学家":
{"simp":"科学家",
"trad":"科學家",
"pinyin":"kē xué jiā",
"def": ["scientist","CL:個|个[ge4]"]
},
"诞生":
{"simp":"诞生",
"trad":"誕生",
"pinyin":"dàn shēng",
"def": ["to be born"]
},
"蔚蓝":
{"simp":"蔚蓝",
"trad":"蔚藍",
"pinyin":"wèi lán",
"def": ["azure","sky blue"]
},
"道路":
{"simp":"道路",
"trad":"道路",
"pinyin":"dào lù",
"def": ["road","path","way","CL:條|条[tiao2]"]
},
"单纯":
{"simp":"单纯",
"trad":"單純",
"pinyin":"dān chún",
"def": ["simple","pure","unsophisticated","merely","purely"]
},
"范围":
{"simp":"范围",
"trad":"範圍",
"pinyin":"fàn wéi",
"def": ["range","scope","limit","extent","CL:個|个[ge4]"]
},
"听懂":
{"simp":"听懂",
"trad":"聽懂",
"pinyin":"tīng dǒng",
"def": ["to understand (on hearing)","to catch (what is spoken)"]
},
"场":
{"simp":"场",
"trad":"塲",
"pinyin":"chǎng",
"def": ["variant of 場|场[chang3]"]
},
"套":
{"simp":"套",
"trad":"套",
"pinyin":"tào",
"def": ["to cover","to encase","cover","sheath","to overlap","to interleave","to model after","to copy","formula","harness","loop of rope","(fig.) to fish for","to obtain slyly","classifier for sets, collections","bend (of a river or mountain range, in place names)","tau (Greek letter Ττ)"]
},
"平滑":
{"simp":"平滑",
"trad":"平滑",
"pinyin":"píng huá",
"def": ["flat and smooth"]
},
"有些":
{"simp":"有些",
"trad":"有些",
"pinyin":"yǒu xiē",
"def": ["some","somewhat"]
},
"动感":
{"simp":"动感",
"trad":"動感",
"pinyin":"dòng gǎn",
"def": ["sense of movement (often in a static work of art)","dynamic","vivid","lifelike"]
},
"快要":
{"simp":"快要",
"trad":"快要",
"pinyin":"kuài yào",
"def": ["nearly at the point of (doing sth); about to (do sth)"]
},
"涌":
{"simp":"涌",
"trad":"湧",
"pinyin":"yǒng",
"def": ["to bubble up","to rush forth"]
},
"传真":
{"simp":"传真",
"trad":"傳真",
"pinyin":"chuán zhēn",
"def": ["fax","facsimile"]
},
"有人":
{"simp":"有人",
"trad":"有人",
"pinyin":"yǒu rén",
"def": ["someone","people","anyone","there is someone there","occupied (as in restroom)"]
},
"反物质":
{"simp":"反物质",
"trad":"反物質",
"pinyin":"fǎn wù zhì",
"def": ["antimatter"]
},
"它们":
{"simp":"它们",
"trad":"它們",
"pinyin":"tā men",
"def": ["they (for inanimate objects)"]
},
"要":
{"simp":"要",
"trad":"要",
"pinyin":"yào",
"def": ["important","vital","to want","to ask for","will","going to (as future auxiliary)","may","must","(used in a comparison) must be","probably","if"]
},
"后面":
{"simp":"后面",
"trad":"後面",
"pinyin":"hòu miàn",
"def": ["rear","back","behind","later","afterwards","also pr. [hou4 mian5]"]
},
"眼中":
{"simp":"眼中",
"trad":"眼中",
"pinyin":"yǎn zhōng",
"def": ["in one's eyes"]
},
"意外":
{"simp":"意外",
"trad":"意外",
"pinyin":"yì wài",
"def": ["unexpected","accident","mishap","CL:個|个[ge4]"]
},
"质问":
{"simp":"质问",
"trad":"質問",
"pinyin":"zhì wèn",
"def": ["to question","to ask questions","to inquire","to bring to account","to interrogate"]
},
"文章":
{"simp":"文章",
"trad":"文章",
"pinyin":"wén zhāng",
"def": ["article","essay","literary works","writings","hidden meaning","CL:篇[pian1],段[duan4],頁|页[ye4]"]
},
"空":
{"simp":"空",
"trad":"空",
"pinyin":"kòng",
"def": ["to empty","vacant","unoccupied","space","leisure","free time"]
},
"缩成":
{"simp":"缩成",
"trad":"縮成",
"pinyin":"suō chéng",
"def": ["to shrink into"]
},
"听不懂":
{"simp":"听不懂",
"trad":"聽不懂",
"pinyin":"tīng bu dǒng",
"def": ["unable to make sense of what one is hearing"]
},
"技术":
{"simp":"技术",
"trad":"技術",
"pinyin":"jì shù",
"def": ["technology","technique","skill","CL:門|门[men2],種|种[zhong3],項|项[xiang4]"]
},
"阵列":
{"simp":"阵列",
"trad":"陣列",
"pinyin":"zhèn liè",
"def": ["(computing) array (data structure)","(hardware) array (photovoltaic cells, radio telescopes etc)"]
},
"头上":
{"simp":"头上",
"trad":"頭上",
"pinyin":"tóu shàng",
"def": ["overhead","above"]
},
"研究":
{"simp":"研究",
"trad":"研究",
"pinyin":"yán jiū",
"def": ["research","a study","CL:項|项[xiang4]","to research","to look into"]
},
"安全":
{"simp":"安全",
"trad":"安全",
"pinyin":"ān quán",
"def": ["safe; secure","safety; security"]
},
"对":
{"simp":"对",
"trad":"對",
"pinyin":"duì",
"def": ["right","correct","couple","pair","towards","at","for","to face","opposite","to treat (sb a certain way)","to match together","to adjust","to fit","to suit","to answer","to reply","classifier: couple"]
},
"事实":
{"simp":"事实",
"trad":"事實",
"pinyin":"shì shí",
"def": ["fact","CL:個|个[ge4]"]
},
"自从":
{"simp":"自从",
"trad":"自從",
"pinyin":"zì cóng",
"def": ["since (a time)","ever since"]
},
"灵敏度":
{"simp":"灵敏度",
"trad":"靈敏度",
"pinyin":"líng mǐn dù",
"def": ["(level of) sensitivity"]
},
"分支":
{"simp":"分支",
"trad":"分支",
"pinyin":"fēn zhī",
"def": ["branch (of company, river etc)","to branch","to diverge","to ramify","to subdivide"]
},
"文化":
{"simp":"文化",
"trad":"文化",
"pinyin":"wén huà",
"def": ["culture","civilization","cultural","CL:個|个[ge4],種|种[zhong3]"]
},
"拍":
{"simp":"拍",
"trad":"拍",
"pinyin":"pāi",
"def": ["to pat","to clap","to slap","to swat","to take (a photo)","to shoot (a film)","racket (sports)","beat (music)"]
},
"他":
{"simp":"他",
"trad":"他",
"pinyin":"tā",
"def": ["he or him","(used for either sex when the sex is unknown or unimportant)","(used before sb's name for emphasis)","(used as a meaningless mock object)","other","another"]
},
"本身":
{"simp":"本身",
"trad":"本身",
"pinyin":"běn shēn",
"def": ["itself","in itself","per se"]
},
"生产队":
{"simp":"生产队",
"trad":"生產隊",
"pinyin":"shēng chǎn duì",
"def": ["production team"]
},
"比例":
{"simp":"比例",
"trad":"比例",
"pinyin":"bǐ lì",
"def": ["proportion","scale"]
},
"凝重":
{"simp":"凝重",
"trad":"凝重",
"pinyin":"níng zhòng",
"def": ["dignified","grave (expression)","imposing (attitude)","heavy (atmosphere)","(music etc) deep and resounding"]
},
"颗":
{"simp":"颗",
"trad":"顆",
"pinyin":"kē",
"def": ["classifier for small spheres, pearls, corn grains, teeth, hearts, satellites etc"]
},
"点缀":
{"simp":"点缀",
"trad":"點綴",
"pinyin":"diǎn zhuì",
"def": ["to decorate","to adorn","sprinkled","studded","only for show"]
},
"民":
{"simp":"民",
"trad":"民",
"pinyin":"mín",
"def": ["(bound form) the people","inhabitants of a country"]
},
"呢":
{"simp":"呢",
"trad":"呢",
"pinyin":"ní",
"def": ["woolen material"]
},
"秘密":
{"simp":"秘密",
"trad":"秘密",
"pinyin":"mì mì",
"def": ["secret","CL:個|个[ge4]"]
},
"叛":
{"simp":"叛",
"trad":"叛",
"pinyin":"pàn",
"def": ["to betray","to rebel","to revolt"]
},
"粗暴":
{"simp":"粗暴",
"trad":"粗暴",
"pinyin":"cū bào",
"def": ["rough","cruel"]
},
"双手":
{"simp":"双手",
"trad":"雙手",
"pinyin":"shuāng shǒu",
"def": ["both hands"]
},
"恒星":
{"simp":"恒星",
"trad":"恆星",
"pinyin":"héng xīng",
"def": ["(fixed) star"]
},
"去":
{"simp":"去",
"trad":"去",
"pinyin":"qù",
"def": ["to go","to go to (a place)","(of a time etc) last","just passed","to send","to remove","to get rid of","to reduce","to be apart from in space or time","to die (euphemism)","to play (a part)","(when used either before or after a verb) to go in order to do sth","(after a verb of motion indicates movement away from the speaker)","(used after certain verbs to indicate detachment or separation)"]
},
"解乏":
{"simp":"解乏",
"trad":"解乏",
"pinyin":"jiě fá",
"def": ["to relieve tiredness","to freshen up"]
},
"我们":
{"simp":"我们",
"trad":"我們",
"pinyin":"wǒ men",
"def": ["we","us","ourselves","our"]
},
"当回事儿":
{"simp":"当回事儿",
"trad":"當回事兒",
"pinyin":"dàng huí shì r5",
"def": ["erhua variant of 當回事|当回事[dang4 hui2 shi4]"]
},
"地球":
{"simp":"地球",
"trad":"地球",
"pinyin":"dì qiú",
"def": ["the earth","CL:個|个[ge4]"]
},
"痛":
{"simp":"痛",
"trad":"痛",
"pinyin":"tòng",
"def": ["ache","pain","sorrow","deeply","thoroughly"]
},
"没事儿":
{"simp":"没事儿",
"trad":"沒事兒",
"pinyin":"méi shì r5",
"def": ["to have spare time","free from work","it's not important","it's nothing","never mind"]
},
"无法":
{"simp":"无法",
"trad":"無法",
"pinyin":"wú fǎ",
"def": ["unable","incapable"]
},
"刑警":
{"simp":"刑警",
"trad":"刑警",
"pinyin":"xíng jǐng",
"def": ["abbr. for 刑事警察[xing2 shi4 jing3 cha2]","criminal police"]
},
"简单":
{"simp":"简单",
"trad":"簡單",
"pinyin":"jiǎn dān",
"def": ["simple","not complicated"]
},
"成就":
{"simp":"成就",
"trad":"成就",
"pinyin":"chéng jiù",
"def": ["accomplishment","success","achievement","CL:個|个[ge4]","to achieve (a result)","to create","to bring about"]
},
"接生":
{"simp":"接生",
"trad":"接生",
"pinyin":"jiē shēng",
"def": ["to deliver (a newborn child)"]
},
"展示":
{"simp":"展示",
"trad":"展示",
"pinyin":"zhǎn shì",
"def": ["to reveal","to display","to show","to exhibit sth"]
},
"颈":
{"simp":"颈",
"trad":"頸",
"pinyin":"jǐng",
"def": ["neck"]
},
"长方形":
{"simp":"长方形",
"trad":"長方形",
"pinyin":"cháng fāng xíng",
"def": ["rectangle"]
},
"社会":
{"simp":"社会",
"trad":"社會",
"pinyin":"shè huì",
"def": ["society","CL:個|个[ge4]"]
},
"出嫁":
{"simp":"出嫁",
"trad":"出嫁",
"pinyin":"chū jià",
"def": ["to get married (of woman)"]
},
"其":
{"simp":"其",
"trad":"其",
"pinyin":"qí",
"def": ["his","her","its","their","that","such","it (refers to sth preceding it)"]
},
"其他":
{"simp":"其他",
"trad":"其他",
"pinyin":"qí tā",
"def": ["other","(sth or sb) else","the rest"]
},
"可":
{"simp":"可",
"trad":"可",
"pinyin":"kè",
"def": ["used in 可汗[ke4 han2]"]
},
"卫":
{"simp":"卫",
"trad":"衛",
"pinyin":"wèi",
"def": ["to guard","to protect","to defend","abbr. for 衛生|卫生, hygiene","health","abbr. for 衛生間|卫生间, toilet"]
},
"战友":
{"simp":"战友",
"trad":"戰友",
"pinyin":"zhàn yǒu",
"def": ["comrade-in-arms","battle companion"]
},
"这就":
{"simp":"这就",
"trad":"這就",
"pinyin":"zhè jiù",
"def": ["immediately","at once"]
},
"降临":
{"simp":"降临",
"trad":"降臨",
"pinyin":"jiàng lín",
"def": ["to descend","to arrive","to come"]
},
"心术":
{"simp":"心术",
"trad":"心術",
"pinyin":"xīn shù",
"def": ["designs","schemes","intentions","scheming","calculating (of a person)"]
},
"好几":
{"simp":"好几",
"trad":"好幾",
"pinyin":"hǎo jǐ",
"def": ["several","quite a few"]
},
"干净":
{"simp":"干净",
"trad":"乾淨",
"pinyin":"gān jìng",
"def": ["clean","neat"]
},
"回波":
{"simp":"回波",
"trad":"回波",
"pinyin":"huí bō",
"def": ["echo (e.g. radar)","returning wave"]
},
"均匀":
{"simp":"均匀",
"trad":"均勻",
"pinyin":"jūn yún",
"def": ["even","well-distributed","homogeneous","well-proportioned (figure, body etc)"]
},
"他们":
{"simp":"他们",
"trad":"他們",
"pinyin":"tā men",
"def": ["they"]
},
"战斗":
{"simp":"战斗",
"trad":"戰鬥",
"pinyin":"zhàn dòu",
"def": ["to fight","to engage in combat","struggle","battle","CL:場|场[chang2],次[ci4]"]
},
"暗":
{"simp":"暗",
"trad":"闇",
"pinyin":"àn",
"def": ["to close (a door)","to eclipse","muddled","stupid","ignorant","variant of 暗[an4]"]
},
"因此":
{"simp":"因此",
"trad":"因此",
"pinyin":"yīn cǐ",
"def": ["thus","consequently","as a result"]
},
"吝啬":
{"simp":"吝啬",
"trad":"吝嗇",
"pinyin":"lìn sè",
"def": ["stingy","mean","miserly"]
},
"远近":
{"simp":"远近",
"trad":"遠近",
"pinyin":"yuǎn jìn",
"def": ["far and near","distance"]
},
"伸":
{"simp":"伸",
"trad":"伸",
"pinyin":"shēn",
"def": ["to stretch","to extend"]
},
"那时":
{"simp":"那时",
"trad":"那時",
"pinyin":"nà shí",
"def": ["then","at that time","in those days"]
},
"播撒":
{"simp":"播撒",
"trad":"播撒",
"pinyin":"bō sǎ",
"def": ["to sow (seeds)","to scatter"]
},
"来访者":
{"simp":"来访者",
"trad":"來訪者",
"pinyin":"lái fǎng zhě",
"def": ["visitor","(psychological counseling) client"]
},
"材料":
{"simp":"材料",
"trad":"材料",
"pinyin":"cái liào",
"def": ["material","data","makings","stuff","CL:個|个[ge4],種|种[zhong3]"]
},
"中断":
{"simp":"中断",
"trad":"中斷",
"pinyin":"zhōng duàn",
"def": ["to cut short","to break off","to discontinue","to interrupt"]
},
"相当":
{"simp":"相当",
"trad":"相當",
"pinyin":"xiāng dāng",
"def": ["equivalent to","appropriate","considerably","to a certain extent","fairly","quite"]
},
"噪音":
{"simp":"噪音",
"trad":"噪音",
"pinyin":"zào yīn",
"def": ["rumble","noise","static (in a signal)"]
},
"些":
{"simp":"些",
"trad":"些",
"pinyin":"xiē",
"def": ["classifier indicating a small amount or small number greater than 1: some, a few, several"]
},
"半人马座":
{"simp":"半人马座",
"trad":"半人馬座",
"pinyin":"Bàn rén mǎ zuò",
"def": ["Centaurus (constellation)"]
},
"英语":
{"simp":"英语",
"trad":"英語",
"pinyin":"Yīng yǔ",
"def": ["English (language)"]
},
"敬重":
{"simp":"敬重",
"trad":"敬重",
"pinyin":"jìng zhòng",
"def": ["to respect deeply","to revere","to esteem"]
},
"统帅":
{"simp":"统帅",
"trad":"統帥",
"pinyin":"tǒng shuài",
"def": ["command","commander-in-chief"]
},
"伊甸园":
{"simp":"伊甸园",
"trad":"伊甸園",
"pinyin":"Yī diàn yuán",
"def": ["Garden of Eden"]
},
"太阳":
{"simp":"太阳",
"trad":"太陽",
"pinyin":"tài yang",
"def": ["sun","CL:個|个[ge4]","abbr. for 太陽穴|太阳穴[tai4 yang2 xue2]"]
},
"台大":
{"simp":"台大",
"trad":"臺大",
"pinyin":"Tái Dà",
"def": ["abbr. for 臺灣大學|台湾大学[Tai2 wan1 Da4 xue2]"]
},
"火烧":
{"simp":"火烧",
"trad":"火燒",
"pinyin":"huǒ shāo",
"def": ["to set fire to","to burn down","burning hot","baked cake"]
},
"一直":
{"simp":"一直",
"trad":"一直",
"pinyin":"yī zhí",
"def": ["straight (in a straight line)","continuously","always","from the beginning of ... up to ...","all along"]
},
"进门":
{"simp":"进门",
"trad":"進門",
"pinyin":"jìn mén",
"def": ["to enter a door","to go in","to learn the basics of a subject","to join one's husband's household upon marriage"]
},
"捞":
{"simp":"捞",
"trad":"撈",
"pinyin":"lāo",
"def": ["to fish up","to dredge up"]
},
"锁":
{"simp":"锁",
"trad":"鎻",
"pinyin":"suǒ",
"def": ["old variant of 鎖|锁[suo3]"]
},
"间距":
{"simp":"间距",
"trad":"間距",
"pinyin":"jiān jù",
"def": ["gap; spacing; distance between objects; interval between events"]
},
"非常":
{"simp":"非常",
"trad":"非常",
"pinyin":"fēi cháng",
"def": ["very","very much","unusual","extraordinary"]
},
"晴":
{"simp":"晴",
"trad":"晴",
"pinyin":"qíng",
"def": ["clear","fine (weather)"]
},
"惊叹":
{"simp":"惊叹",
"trad":"驚嘆",
"pinyin":"jīng tàn",
"def": ["to exclaim in admiration","a gasp of surprise"]
},
"太空":
{"simp":"太空",
"trad":"太空",
"pinyin":"tài kōng",
"def": ["outer space"]
},
"传达":
{"simp":"传达",
"trad":"傳達",
"pinyin":"chuán dá",
"def": ["to pass on","to convey","to relay","to transmit","transmission"]
},
"算":
{"simp":"算",
"trad":"算",
"pinyin":"suàn",
"def": ["to regard as","to figure","to calculate","to compute"]
},
"庄严":
{"simp":"庄严",
"trad":"莊嚴",
"pinyin":"zhuāng yán",
"def": ["solemn","dignified","stately"]
},
"崖壁":
{"simp":"崖壁",
"trad":"崖壁",
"pinyin":"yá bì",
"def": ["escarpment","precipice","cliff"]
},
"觉":
{"simp":"觉",
"trad":"覺",
"pinyin":"jué",
"def": ["to feel","to find that","thinking","awake","aware"]
},
"到":
{"simp":"到",
"trad":"到",
"pinyin":"dào",
"def": ["to (a place)","until (a time)","up to","to go","to arrive","(verb complement denoting completion or result of an action)"]
},
"兆赫":
{"simp":"兆赫",
"trad":"兆赫",
"pinyin":"zhào hè",
"def": ["megahertz"]
},
"树丛":
{"simp":"树丛",
"trad":"樹叢",
"pinyin":"shù cóng",
"def": ["thicket","undergrowth"]
},
"寂静":
{"simp":"寂静",
"trad":"寂靜",
"pinyin":"jì jìng",
"def": ["quiet"]
},
"读":
{"simp":"读",
"trad":"讀",
"pinyin":"dú",
"def": ["to read","to study","reading of word (i.e. pronunciation), similar to 拼音[pin1 yin1]"]
},
"觉得":
{"simp":"觉得",
"trad":"覺得",
"pinyin":"jué de",
"def": ["to think","to feel"]
},
"罩":
{"simp":"罩",
"trad":"罩",
"pinyin":"zhào",
"def": ["cover","fish trap (basket)","shade"]
},
"起伏":
{"simp":"起伏",
"trad":"起伏",
"pinyin":"qǐ fú",
"def": ["to move up and down","to undulate","ups and downs"]
},
"警":
{"simp":"警",
"trad":"警",
"pinyin":"jǐng",
"def": ["to alert","to warn","police"]
},
"军人":
{"simp":"军人",
"trad":"軍人",
"pinyin":"jūn rén",
"def": ["serviceman","soldier","military personnel"]
},
"六":
{"simp":"六",
"trad":"六",
"pinyin":"liù",
"def": ["six","6"]
},
"一望无际":
{"simp":"一望无际",
"trad":"一望無際",
"pinyin":"yī wàng wú jì",
"def": ["as far as the eye can see (idiom)"]
},
"刚刚":
{"simp":"刚刚",
"trad":"剛剛",
"pinyin":"gāng gang",
"def": ["just recently","just a moment ago"]
},
"波峰":
{"simp":"波峰",
"trad":"波峰",
"pinyin":"bō fēng",
"def": ["wave crest"]
},
"那些":
{"simp":"那些",
"trad":"那些",
"pinyin":"nà xiē",
"def": ["those"]
},
"西面":
{"simp":"西面",
"trad":"西面",
"pinyin":"xī miàn",
"def": ["west side","west"]
},
"而言":
{"simp":"而言",
"trad":"而言",
"pinyin":"ér yán",
"def": ["(typically preceded by 就…[jiu4 xx5] or 對…|对…[dui4 xx5] etc) as far as ... is concerned; speaking in terms of ..."]
},
"从":
{"simp":"从",
"trad":"從",
"pinyin":"cóng",
"def": ["from","through","via","to follow","to obey","to engage in (an activity)","never (in negative sentence)","(Taiwan pr. [zong4]) retainer","assistant","auxiliary","subordinate","related by common paternal grandfather or earlier ancestor"]
},
"星":
{"simp":"星",
"trad":"星",
"pinyin":"xīng",
"def": ["star","heavenly body","satellite","small amount"]
},
"脆弱":
{"simp":"脆弱",
"trad":"脆弱",
"pinyin":"cuì ruò",
"def": ["weak","frail"]
},
"维":
{"simp":"维",
"trad":"維",
"pinyin":"wéi",
"def": ["to preserve","to maintain","to hold together","dimension","vitamin (abbr. for 維生素|维生素[wei2 sheng1 su4])"]
},
"嫌疑":
{"simp":"嫌疑",
"trad":"嫌疑",
"pinyin":"xián yí",
"def": ["suspicion","to have suspicions"]
},
"旁人":
{"simp":"旁人",
"trad":"旁人",
"pinyin":"páng rén",
"def": ["other people","bystanders","onlookers","outsiders"]
},
"地上":
{"simp":"地上",
"trad":"地上",
"pinyin":"dì shang",
"def": ["on the ground","on the floor"]
},
"每":
{"simp":"每",
"trad":"每",
"pinyin":"měi",
"def": ["each","every"]
},
"电台":
{"simp":"电台",
"trad":"電臺",
"pinyin":"diàn tái",
"def": ["transmitter-receiver","broadcasting station","radio station","CL:個|个[ge4],家[jia1]"]
},
"果然":
{"simp":"果然",
"trad":"果然",
"pinyin":"guǒ rán",
"def": ["really","sure enough","as expected","if indeed"]
},
"增加":
{"simp":"增加",
"trad":"增加",
"pinyin":"zēng jiā",
"def": ["to raise","to increase"]
},
"纯粹":
{"simp":"纯粹",
"trad":"純粹",
"pinyin":"chún cuì",
"def": ["pure","unadulterated","purely","completely"]
},
"值":
{"simp":"值",
"trad":"值",
"pinyin":"zhí",
"def": ["value","(to be) worth","to happen to","to be on duty"]
},
"轻信":
{"simp":"轻信",
"trad":"輕信",
"pinyin":"qīng xìn",
"def": ["to easily trust","gullible","naïve"]
},
"推动":
{"simp":"推动",
"trad":"推動",
"pinyin":"tuī dòng",
"def": ["to push (for acceptance of a plan)","to push forward","to promote","to actuate","CL:個|个[ge4]"]
},
"晨曦":
{"simp":"晨曦",
"trad":"晨曦",
"pinyin":"chén xī",
"def": ["first rays of morning sun","first glimmer of dawn"]
},
"即使":
{"simp":"即使",
"trad":"即使",
"pinyin":"jí shǐ",
"def": ["even if","even though"]
},
"古筝":
{"simp":"古筝",
"trad":"古箏",
"pinyin":"gǔ zhēng",
"def": ["zither or guzheng","large zither with 13 to 25 strings, developed from guqin 古琴[gu3 qin2] during Tang and Song times"]
},
"超":
{"simp":"超",
"trad":"超",
"pinyin":"chāo",
"def": ["to exceed","to overtake","to surpass","to transcend","to pass","to cross","ultra-","super-"]
},
"扰乱":
{"simp":"扰乱",
"trad":"擾亂",
"pinyin":"rǎo luàn",
"def": ["to disturb","to perturb","to harass"]
},
"主":
{"simp":"主",
"trad":"主",
"pinyin":"zhǔ",
"def": ["owner","master","host","individual or party concerned","God","Lord","main","to indicate or signify","trump card (in card games)"]
},
"面貌":
{"simp":"面貌",
"trad":"面貌",
"pinyin":"miàn mào",
"def": ["appearance","face","features","CL:個|个[ge4]"]
},
"制造":
{"simp":"制造",
"trad":"製造",
"pinyin":"zhì zào",
"def": ["to manufacture","to make"]
},
"羡慕":
{"simp":"羡慕",
"trad":"羨慕",
"pinyin":"xiàn mù",
"def": ["to envy","to admire"]
},
"劳改":
{"simp":"劳改",
"trad":"勞改",
"pinyin":"láo gǎi",
"def": ["abbr. for 勞動改造|劳动改造[lao2 dong4 gai3 zao4]","reform through labor","laogai (prison camp)"]
},
"月":
{"simp":"月",
"trad":"月",
"pinyin":"yuè",
"def": ["moon","month","monthly","CL:個|个[ge4],輪|轮[lun2]"]
},
"白昼":
{"simp":"白昼",
"trad":"白晝",
"pinyin":"bái zhòu",
"def": ["daytime"]
},
"掠过":
{"simp":"掠过",
"trad":"掠過",
"pinyin":"lu:è guò",
"def": ["to flit across","to sweep past","to glance (strike at an angle)"]
},
"强":
{"simp":"强",
"trad":"彊",
"pinyin":"qiǎng",
"def": ["variant of 強|强[qiang3]"]
},
"直径":
{"simp":"直径",
"trad":"直徑",
"pinyin":"zhí jìng",
"def": ["diameter"]
},
"面的":
{"simp":"面的",
"trad":"麵的",
"pinyin":"miàn dī",
"def": ["abbr. of 麵包車的士|面包车的士[mian4 bao1 che1 di1 shi4]","minivan taxi"]
},
"山脉":
{"simp":"山脉",
"trad":"山脈",
"pinyin":"shān mài",
"def": ["mountain range","CL:條|条[tiao2]"]
},
"东":
{"simp":"东",
"trad":"東",
"pinyin":"dōng",
"def": ["east","host (i.e. sitting on east side of guest)","landlord"]
},
"多个":
{"simp":"多个",
"trad":"多個",
"pinyin":"duō ge",
"def": ["many","multiple","multi- (faceted, ethnic etc)"]
},
"移开":
{"simp":"移开",
"trad":"移開",
"pinyin":"yí kāi",
"def": ["to move away"]
},
"系上":
{"simp":"系上",
"trad":"繫上",
"pinyin":"jì shang",
"def": ["to tie on","to buckle up","to fasten"]
},
"但":
{"simp":"但",
"trad":"但",
"pinyin":"dàn",
"def": ["but","yet","however","only","merely","still"]
},
"规则":
{"simp":"规则",
"trad":"規則",
"pinyin":"guī zé",
"def": ["rule","regulation","rules and regulations"]
},
"水库":
{"simp":"水库",
"trad":"水庫",
"pinyin":"shuǐ kù",
"def": ["reservoir","CL:座[zuo4]"]
},
"如此":
{"simp":"如此",
"trad":"如此",
"pinyin":"rú cǐ",
"def": ["in this way","so"]
},
"日志":
{"simp":"日志",
"trad":"日誌",
"pinyin":"rì zhì",
"def": ["journal","log (computing)"]
},
"平行线":
{"simp":"平行线",
"trad":"平行線",
"pinyin":"píng xíng xiàn",
"def": ["parallel lines"]
},
"不是":
{"simp":"不是",
"trad":"不是",
"pinyin":"bù shì",
"def": ["no","is not","not"]
},
"论":
{"simp":"论",
"trad":"論",
"pinyin":"lùn",
"def": ["opinion","view","theory","doctrine","to discuss","to talk about","to regard","to consider","per","by the (kilometer, hour etc)"]
},
"人类":
{"simp":"人类",
"trad":"人類",
"pinyin":"rén lèi",
"def": ["humanity","human race","mankind"]
},
"不成熟":
{"simp":"不成熟",
"trad":"不成熟",
"pinyin":"bù chéng shú",
"def": ["unripe","immature"]
},
"识破":
{"simp":"识破",
"trad":"識破",
"pinyin":"shí pò",
"def": ["to penetrate","to see through"]
},
"挺":
{"simp":"挺",
"trad":"挺",
"pinyin":"tǐng",
"def": ["straight","erect","to stick out (a part of the body)","to (physically) straighten up","to support","to withstand","outstanding","(coll.) quite","very","classifier for machine guns"]
},
"吸附":
{"simp":"吸附",
"trad":"吸附",
"pinyin":"xī fù",
"def": ["to adhere to a surface","to absorb","to draw in","(fig.) to attract","(chemistry) adsorption"]
},
"斑":
{"simp":"斑",
"trad":"斑",
"pinyin":"bān",
"def": ["spot","colored patch","stripe","spotted","striped","variegated"]
},
"孩子":
{"simp":"孩子",
"trad":"孩子",
"pinyin":"hái zi",
"def": ["child"]
},
"物种":
{"simp":"物种",
"trad":"物種",
"pinyin":"wù zhǒng",
"def": ["species"]
},
"现在":
{"simp":"现在",
"trad":"現在",
"pinyin":"xiàn zài",
"def": ["now","at present","at the moment","modern","current","nowadays"]
},
"得体":
{"simp":"得体",
"trad":"得體",
"pinyin":"dé tǐ",
"def": ["appropriate to the occasion","fitting"]
},
"听":
{"simp":"听",
"trad":"聽",
"pinyin":"tìng",
"def": ["(literary pronunciation, still advocated in Taiwan) to rule","to sentence","to allow"]
},
"漏掉":
{"simp":"漏掉",
"trad":"漏掉",
"pinyin":"lòu diào",
"def": ["to miss","to leave out","to omit","to be omitted","to be missing","to slip through","to leak out","to seep away"]
},
"显现":
{"simp":"显现",
"trad":"顯現",
"pinyin":"xiǎn xiàn",
"def": ["appearance","to appear"]
},
"直视":
{"simp":"直视",
"trad":"直視",
"pinyin":"zhí shì",
"def": ["to look straight at"]
},
"唯一":
{"simp":"唯一",
"trad":"唯一",
"pinyin":"wéi yī",
"def": ["only","sole"]
},
"仔细":
{"simp":"仔细",
"trad":"仔細",
"pinyin":"zǐ xì",
"def": ["careful","attentive","cautious"]
},
"搞":
{"simp":"搞",
"trad":"搞",
"pinyin":"gǎo",
"def": ["to do","to make","to go in for","to set up","to get hold of","to take care of"]
},
"监督":
{"simp":"监督",
"trad":"監督",
"pinyin":"jiān dū",
"def": ["to control","to supervise","to inspect"]
},
"颈椎":
{"simp":"颈椎",
"trad":"頸椎",
"pinyin":"jǐng zhuī",
"def": ["cervical vertebra","the seven cervical vertebrae in the neck of humans and most mammals"]
},
"竖立":
{"simp":"竖立",
"trad":"豎立",
"pinyin":"shù lì",
"def": ["to erect","to set upright","to stand"]
},
"吸引力":
{"simp":"吸引力",
"trad":"吸引力",
"pinyin":"xī yǐn lì",
"def": ["attractive force (such as gravitation)","sex appeal","attractiveness"]
},
"繁忙":
{"simp":"繁忙",
"trad":"繁忙",
"pinyin":"fán máng",
"def": ["busy","bustling"]
},
"宏伟":
{"simp":"宏伟",
"trad":"宏偉",
"pinyin":"hóng wěi",
"def": ["grand","imposing","magnificent"]
},
"刁":
{"simp":"刁",
"trad":"刁",
"pinyin":"diāo",
"def": ["artful","wicked"]
},
"高维":
{"simp":"高维",
"trad":"高維",
"pinyin":"gāo wéi",
"def": ["(math.) higher dimensional"]
},
"深海":
{"simp":"深海",
"trad":"深海",
"pinyin":"shēn hǎi",
"def": ["deep sea"]
},
"条件":
{"simp":"条件",
"trad":"條件",
"pinyin":"tiáo jiàn",
"def": ["condition","circumstances","term","factor","requirement","prerequisite","qualification","CL:個|个[ge4]"]
},
"应用":
{"simp":"应用",
"trad":"應用",
"pinyin":"yìng yòng",
"def": ["to put to use","to apply","practical","applied (science, linguistics etc)","application","practical use","(computing) app"]
},
"器":
{"simp":"器",
"trad":"器",
"pinyin":"qì",
"def": ["device","tool","utensil","CL:臺|台[tai2]"]
},
"警告":
{"simp":"警告",
"trad":"警告",
"pinyin":"jǐng gào",
"def": ["to warn","to admonish"]
},
"状态":
{"simp":"状态",
"trad":"狀態",
"pinyin":"zhuàng tài",
"def": ["state of affairs","state","mode","situation","CL:個|个[ge4]"]
},
"份":
{"simp":"份",
"trad":"份",
"pinyin":"fèn",
"def": ["classifier for gifts, newspaper, magazine, papers, reports, contracts etc","variant of 分[fen4]"]
},
"王国":
{"simp":"王国",
"trad":"王國",
"pinyin":"wáng guó",
"def": ["kingdom","realm"]
},
"记录":
{"simp":"记录",
"trad":"記錄",
"pinyin":"jì lù",
"def": ["to record","record (written account)","note-taker","record (in sports etc)","CL:個|个[ge4]"]
},
"理念":
{"simp":"理念",
"trad":"理念",
"pinyin":"lǐ niàn",
"def": ["idea","concept","philosophy","theory"]
},
"领主":
{"simp":"领主",
"trad":"領主",
"pinyin":"lǐng zhǔ",
"def": ["feudal lord","suzerain","overlord"]
},
"前途":
{"simp":"前途",
"trad":"前途",
"pinyin":"qián tú",
"def": ["prospects","future outlook","journey"]
},
"分布":
{"simp":"分布",
"trad":"分佈",
"pinyin":"fēn bù",
"def": ["to scatter","to distribute","to be distributed (over an area etc)","(statistical, geographic) distribution"]
},
"支走":
{"simp":"支走",
"trad":"支走",
"pinyin":"zhī zǒu",
"def": ["to send sb away (with an excuse)"]
},
"搜捕":
{"simp":"搜捕",
"trad":"搜捕",
"pinyin":"sōu bǔ",
"def": ["to hunt and arrest (fugitives)","to track down and arrest","a manhunt"]
},
"拯救":
{"simp":"拯救",
"trad":"拯救",
"pinyin":"zhěng jiù",
"def": ["to save","to rescue"]
},
"估量":
{"simp":"估量",
"trad":"估量",
"pinyin":"gū liang",
"def": ["to estimate","to assess"]
},
"变幻莫测":
{"simp":"变幻莫测",
"trad":"變幻莫測",
"pinyin":"biàn huàn mò cè",
"def": ["to change unpredictably","unpredictable","erratic","treacherous"]
},
"当然":
{"simp":"当然",
"trad":"當然",
"pinyin":"dāng rán",
"def": ["only natural","as it should be","certainly","of course","without doubt"]
},
"信口开河":
{"simp":"信口开河",
"trad":"信口開河",
"pinyin":"xìn kǒu kāi hé",
"def": ["to speak without thinking (idiom)","to blurt sth out"]
},
"光亮":
{"simp":"光亮",
"trad":"光亮",
"pinyin":"guāng liàng",
"def": ["bright"]
},
"丰富":
{"simp":"丰富",
"trad":"豐富",
"pinyin":"fēng fù",
"def": ["to enrich","rich","plentiful","abundant"]
},
"钢锯":
{"simp":"钢锯",
"trad":"鋼鋸",
"pinyin":"gāng jù",
"def": ["hacksaw"]
},
"判别":
{"simp":"判别",
"trad":"判別",
"pinyin":"pàn bié",
"def": ["to differentiate","to discriminate"]
},
"投身":
{"simp":"投身",
"trad":"投身",
"pinyin":"tóu shēn",
"def": ["to throw oneself into sth"]
},
"转化":
{"simp":"转化",
"trad":"轉化",
"pinyin":"zhuǎn huà",
"def": ["to change","to transform","isomerization (chemistry)"]
},
"大家":
{"simp":"大家",
"trad":"大家",
"pinyin":"dà jiā",
"def": ["everyone","influential family","great expert"]
},
"多半":
{"simp":"多半",
"trad":"多半",
"pinyin":"duō bàn",
"def": ["most","mostly","most likely"]
},
"说不定":
{"simp":"说不定",
"trad":"說不定",
"pinyin":"shuō bu dìng",
"def": ["can't say for sure","maybe"]
},
"这天":
{"simp":"这天",
"trad":"這天",
"pinyin":"zhè tiān",
"def": ["today","this day"]
},
"哪":
{"simp":"哪",
"trad":"哪",
"pinyin":"něi",
"def": ["which? (interrogative, followed by classifier or numeral-classifier)"]
},
"做出":
{"simp":"做出",
"trad":"做出",
"pinyin":"zuò chū",
"def": ["to put out","to issue"]
},
"前提":
{"simp":"前提",
"trad":"前提",
"pinyin":"qián tí",
"def": ["premise","precondition","prerequisite"]
},
"呼号":
{"simp":"呼号",
"trad":"呼號",
"pinyin":"hū háo",
"def": ["to wail","to cry out in distress"]
},
"危机":
{"simp":"危机",
"trad":"危機",
"pinyin":"wēi jī",
"def": ["crisis","CL:個|个[ge4]"]
},
"火车":
{"simp":"火车",
"trad":"火車",
"pinyin":"huǒ chē",
"def": ["train","CL:列[lie4],節|节[jie2],班[ban1],趟[tang4]"]
},
"来看":
{"simp":"来看",
"trad":"來看",
"pinyin":"lái kàn",
"def": ["to come and see","to see a topic from a certain point of view"]
},
"着凉":
{"simp":"着凉",
"trad":"著涼",
"pinyin":"zháo liáng",
"def": ["to catch cold","Taiwan pr. [zhao1 liang2]"]
},
"者":
{"simp":"者",
"trad":"者",
"pinyin":"zhě",
"def": ["(after a verb or adjective) one who (is) ...","(after a noun) person involved in ...","-er","-ist","(used after a number or 後|后[hou4] or 前[qian2] to refer to sth mentioned previously)","(used after a term, to mark a pause before defining the term)","(old) (used at the end of a command)","(old) this"]
},
"取":
{"simp":"取",
"trad":"取",
"pinyin":"qǔ",
"def": ["to take","to get","to choose","to fetch"]
},
"木":
{"simp":"木",
"trad":"木",
"pinyin":"mù",
"def": ["tree","wood","coffin","wooden","simple","numb","one of the eight categories of ancient musical instruments 八音[ba1 yin1]"]
},
"倍":
{"simp":"倍",
"trad":"倍",
"pinyin":"bèi",
"def": ["(two, three etc) -fold","times (multiplier)","double","to increase or multiply"]
},
"位":
{"simp":"位",
"trad":"位",
"pinyin":"wèi",
"def": ["position","location","place","seat","classifier for people (honorific)","classifier for binary bits (e.g. 十六位 16-bit or 2 bytes)","(physics) potential"]
},
"角落":
{"simp":"角落",
"trad":"角落",
"pinyin":"jiǎo luò",
"def": ["nook","corner"]
},
"上":
{"simp":"上",
"trad":"上",
"pinyin":"shàng",
"def": ["on top","upon","above","upper","previous","first (of multiple parts)","to climb","to get onto","to go up","to attend (class or university)"]
},
"夜":
{"simp":"夜",
"trad":"夜",
"pinyin":"yè",
"def": ["night"]
},
"专家":
{"simp":"专家",
"trad":"專家",
"pinyin":"zhuān jiā",
"def": ["expert","specialist","CL:個|个[ge4]"]
},
"接着":
{"simp":"接着",
"trad":"接著",
"pinyin":"jiē zhe",
"def": ["to catch and hold on","to continue","to go on to do sth","to follow","to carry on","then","after that","subsequently","to proceed","to ensue","in turn","in one's turn"]
},
"上好":
{"simp":"上好",
"trad":"上好",
"pinyin":"shàng hǎo",
"def": ["first-rate","top-notch"]
},
"振":
{"simp":"振",
"trad":"振",
"pinyin":"zhèn",
"def": ["to shake","to flap","to vibrate","to resonate","to rise up with spirit","to rouse oneself"]
},
"置换":
{"simp":"置换",
"trad":"置換",
"pinyin":"zhì huàn",
"def": ["to permute","permutation (math.)","to displace","displacement","to replace","replacement"]
},
"黄":
{"simp":"黄",
"trad":"黃",
"pinyin":"huáng",
"def": ["yellow","pornographic","to fall through"]
},
"挥":
{"simp":"挥",
"trad":"揮",
"pinyin":"huī",
"def": ["to wave","to brandish","to command","to conduct","to scatter","to disperse"]
},
"出自":
{"simp":"出自",
"trad":"出自",
"pinyin":"chū zì",
"def": ["to come from"]
},
"落下":
{"simp":"落下",
"trad":"落下",
"pinyin":"luò xià",
"def": ["to fall","to drop","to land (of projectile)"]
},
"全部":
{"simp":"全部",
"trad":"全部",
"pinyin":"quán bù",
"def": ["whole","entire","complete"]
},
"看出":
{"simp":"看出",
"trad":"看出",
"pinyin":"kàn chū",
"def": ["to make out","to see"]
},
"早已":
{"simp":"早已",
"trad":"早已",
"pinyin":"zǎo yǐ",
"def": ["long ago","for a long time"]
},
"元素":
{"simp":"元素",
"trad":"元素",
"pinyin":"yuán sù",
"def": ["element","element of a set","chemical element"]
},
"燕子":
{"simp":"燕子",
"trad":"燕子",
"pinyin":"yàn zi",
"def": ["swallow"]
},
"全球":
{"simp":"全球",
"trad":"全球",
"pinyin":"quán qiú",
"def": ["entire","total","global","the (whole) world","worldwide"]
},
"拧":
{"simp":"拧",
"trad":"擰",
"pinyin":"nìng",
"def": ["stubborn"]
},
"鲜艳":
{"simp":"鲜艳",
"trad":"鮮艷",
"pinyin":"xiān yàn",
"def": ["bright-colored","gaily-colored"]
},
"申":
{"simp":"申",
"trad":"申",
"pinyin":"shēn",
"def": ["to extend","to state","to explain","9th earthly branch: 3-5 p.m., 7th solar month (7th August-7th September), year of the Monkey","ancient Chinese compass point: 240°"]
},
"合格":
{"simp":"合格",
"trad":"合格",
"pinyin":"hé gé",
"def": ["to meet the standard required","qualified","eligible (voter etc)"]
},
"呼吸":
{"simp":"呼吸",
"trad":"呼吸",
"pinyin":"hū xī",
"def": ["to breathe"]
},
"枝":
{"simp":"枝",
"trad":"枝",
"pinyin":"zhī",
"def": ["branch","classifier for sticks, rods, pencils etc"]
},
"自取灭亡":
{"simp":"自取灭亡",
"trad":"自取滅亡",
"pinyin":"zì qǔ miè wáng",
"def": ["to court disaster (idiom)","to dig one's own grave"]
},
"推翻":
{"simp":"推翻",
"trad":"推翻",
"pinyin":"tuī fān",
"def": ["to overthrow"]
},
"词汇":
{"simp":"词汇",
"trad":"詞彙",
"pinyin":"cí huì",
"def": ["vocabulary","list of words (e.g. for language teaching purposes)","word"]
},
"平淡":
{"simp":"平淡",
"trad":"平淡",
"pinyin":"píng dàn",
"def": ["flat","dull","ordinary","nothing special"]
},
"千里":
{"simp":"千里",
"trad":"千里",
"pinyin":"qiān lǐ",
"def": ["a thousand miles","a thousand li (i.e. 500 kilometers)","a long distance"]
},
"令人":
{"simp":"令人",
"trad":"令人",
"pinyin":"lìng rén",
"def": ["to cause one (to do sth)","to make one (angry, delighted etc)"]
},
"精神":
{"simp":"精神",
"trad":"精神",
"pinyin":"jīng shen",
"def": ["vigor","vitality","drive","spiritual"]
},
"渐变":
{"simp":"渐变",
"trad":"漸變",
"pinyin":"jiàn biàn",
"def": ["gradual change","(graphic design) gradient"]
},
"继续":
{"simp":"继续",
"trad":"繼續",
"pinyin":"jì xù",
"def": ["to continue","to proceed with","to go on with"]
},
"塞":
{"simp":"塞",
"trad":"塞",
"pinyin":"sè",
"def": ["to stop up","to stuff","to cope with"]
},
"荒唐":
{"simp":"荒唐",
"trad":"荒唐",
"pinyin":"huāng táng",
"def": ["beyond belief","preposterous","absurd","intemperate","dissipated"]
},
"超级":
{"simp":"超级",
"trad":"超級",
"pinyin":"chāo jí",
"def": ["super-","ultra-","hyper-"]
},
"顽强":
{"simp":"顽强",
"trad":"頑強",
"pinyin":"wán qiáng",
"def": ["tenacious","hard to defeat"]
},
"别看":
{"simp":"别看",
"trad":"別看",
"pinyin":"bié kàn",
"def": ["don't be fooled by the fact that"]
},
"母校":
{"simp":"母校",
"trad":"母校",
"pinyin":"mǔ xiào",
"def": ["alma mater"]
},
"种子":
{"simp":"种子",
"trad":"種子",
"pinyin":"zhǒng zi",
"def": ["seed","CL:顆|颗[ke1],粒[li4]"]
},
"关系":
{"simp":"关系",
"trad":"關系",
"pinyin":"guān xi",
"def": ["variant of 關係|关系[guan1 xi5]"]
},
"头颅":
{"simp":"头颅",
"trad":"頭顱",
"pinyin":"tóu lú",
"def": ["head","skull"]
},
"井冈山":
{"simp":"井冈山",
"trad":"井岡山",
"pinyin":"Jǐng gāng shān",
"def": ["Jinggangshan, county-level city in Ji'an 吉安, Jiangxi"]
},
"顶点":
{"simp":"顶点",
"trad":"頂點",
"pinyin":"dǐng diǎn",
"def": ["summit","peak","(math.) vertex"]
},
"缓步":
{"simp":"缓步",
"trad":"緩步",
"pinyin":"huǎn bù",
"def": ["to walk slowly","to amble along","gradually","slowly"]
},
"在世":
{"simp":"在世",
"trad":"在世",
"pinyin":"zài shì",
"def": ["to be alive"]
},
"能干":
{"simp":"能干",
"trad":"能幹",
"pinyin":"néng gàn",
"def": ["capable","competent"]
},
"降旗":
{"simp":"降旗",
"trad":"降旗",
"pinyin":"jiàng qí",
"def": ["to lower a flag","to strike the colors"]
},
"知识分子":
{"simp":"知识分子",
"trad":"知識分子",
"pinyin":"zhī shi fèn zǐ",
"def": ["intellectual","intelligentsia","learned person"]
},
"第一次":
{"simp":"第一次",
"trad":"第一次",
"pinyin":"dì yī cì",
"def": ["the first time","first","number one"]
},
"电磁干扰":
{"simp":"电磁干扰",
"trad":"電磁干擾",
"pinyin":"diàn cí gān rǎo",
"def": ["electromagnetic interference"]
},
"闻":
{"simp":"闻",
"trad":"聞",
"pinyin":"wén",
"def": ["to hear","news","well-known","famous","reputation","fame","to smell","to sniff at"]
},
"饭厅":
{"simp":"饭厅",
"trad":"飯廳",
"pinyin":"fàn tīng",
"def": ["dining room","dining hall","mess hall"]
},
"否则":
{"simp":"否则",
"trad":"否則",
"pinyin":"fǒu zé",
"def": ["if not","otherwise","else","or else"]
},
"标志":
{"simp":"标志",
"trad":"標誌",
"pinyin":"biāo zhì",
"def": ["sign","mark","symbol","logo","to symbolize","to indicate","to mark"]
},
"昆虫学":
{"simp":"昆虫学",
"trad":"昆蟲學",
"pinyin":"kūn chóng xué",
"def": ["entomology"]
},
"声响":
{"simp":"声响",
"trad":"聲響",
"pinyin":"shēng xiǎng",
"def": ["sound","noise"]
},
"个例":
{"simp":"个例",
"trad":"個例",
"pinyin":"gè lì",
"def": ["specific example","rare instance"]
},
"坚持":
{"simp":"坚持",
"trad":"堅持",
"pinyin":"jiān chí",
"def": ["to persevere with","to persist in","to insist on"]
},
"无":
{"simp":"无",
"trad":"無",
"pinyin":"wú",
"def": ["not to have","no","none","not","to lack","un-","-less"]
},
"渐渐":
{"simp":"渐渐",
"trad":"漸漸",
"pinyin":"jiàn jiàn",
"def": ["gradually"]
},
"厚":
{"simp":"厚",
"trad":"厚",
"pinyin":"hòu",
"def": ["thick","deep or profound","kind","generous","rich or strong in flavor","to favor","to stress"]
},
"距离":
{"simp":"距离",
"trad":"距離",
"pinyin":"jù lí",
"def": ["distance","CL:個|个[ge4]","to be apart from"]
},
"能":
{"simp":"能",
"trad":"能",
"pinyin":"néng",
"def": ["can","to be able to","might possibly","ability","(physics) energy"]
},
"全体":
{"simp":"全体",
"trad":"全體",
"pinyin":"quán tǐ",
"def": ["all","entire"]
},
"群体":
{"simp":"群体",
"trad":"群體",
"pinyin":"qún tǐ",
"def": ["community","colony"]
},
"三分":
{"simp":"三分",
"trad":"三分",
"pinyin":"sān fēn",
"def": ["somewhat","to some degree"]
},
"核心":
{"simp":"核心",
"trad":"核心",
"pinyin":"hé xīn",
"def": ["core","nucleus"]
},
"警卫":
{"simp":"警卫",
"trad":"警衛",
"pinyin":"jǐng wèi",
"def": ["to stand guard over","(security) guard"]
},
"方舟":
{"simp":"方舟",
"trad":"方舟",
"pinyin":"fāng zhōu",
"def": ["ark"]
},
"雪茄":
{"simp":"雪茄",
"trad":"雪茄",
"pinyin":"xuě jiā",
"def": ["cigar (loanword)"]
},
"紧":
{"simp":"紧",
"trad":"緊",
"pinyin":"jǐn",
"def": ["tight","strict","close at hand","near","urgent","tense","hard up","short of money","to tighten"]
},
"善良":
{"simp":"善良",
"trad":"善良",
"pinyin":"shàn liáng",
"def": ["good and honest","kindhearted"]
},
"组成":
{"simp":"组成",
"trad":"組成",
"pinyin":"zǔ chéng",
"def": ["to form","to make up","to constitute"]
},
"球":
{"simp":"球",
"trad":"球",
"pinyin":"qiú",
"def": ["ball","sphere","globe","CL:個|个[ge4]","ball game","match","CL:場|场[chang3]"]
},
"嘟":
{"simp":"嘟",
"trad":"嘟",
"pinyin":"dū",
"def": ["toot","honk","to pout"]
},
"列车":
{"simp":"列车",
"trad":"列車",
"pinyin":"liè chē",
"def": ["(railway) train"]
},
"多次":
{"simp":"多次",
"trad":"多次",
"pinyin":"duō cì",
"def": ["many times","repeatedly"]
},
"差点":
{"simp":"差点",
"trad":"差點",
"pinyin":"chà diǎn",
"def": ["almost","nearly"]
},
"工作量":
{"simp":"工作量",
"trad":"工作量",
"pinyin":"gōng zuò liàng",
"def": ["workload","volume of work"]
},
"放大":
{"simp":"放大",
"trad":"放大",
"pinyin":"fàng dà",
"def": ["to enlarge","to magnify"]
},
"怎么办":
{"simp":"怎么办",
"trad":"怎麼辦",
"pinyin":"zěn me bàn",
"def": ["what's to be done"]
},
"之前":
{"simp":"之前",
"trad":"之前",
"pinyin":"zhī qián",
"def": ["before","prior to","ago","previously","beforehand"]
},
"警方":
{"simp":"警方",
"trad":"警方",
"pinyin":"jǐng fāng",
"def": ["police"]
},
"天才":
{"simp":"天才",
"trad":"天才",
"pinyin":"tiān cái",
"def": ["talent","gift","genius","talented","gifted"]
},
"接触不良":
{"simp":"接触不良",
"trad":"接觸不良",
"pinyin":"jiē chù bù liáng",
"def": ["loose or defective contact (elec.)"]
},
"早":
{"simp":"早",
"trad":"早",
"pinyin":"zǎo",
"def": ["early","morning","Good morning!","long ago","prematurely"]
},
"讲台":
{"simp":"讲台",
"trad":"講臺",
"pinyin":"jiǎng tái",
"def": ["platform","podium","rostrum","lectern","(teacher's) desk"]
},
"正好":
{"simp":"正好",
"trad":"正好",
"pinyin":"zhèng hǎo",
"def": ["just (in time)","just right","just enough","to happen to","to chance to","by chance","it just so happens that"]
},
"都会":
{"simp":"都会",
"trad":"都會",
"pinyin":"dū huì",
"def": ["city","metropolis"]
},
"力":
{"simp":"力",
"trad":"力",
"pinyin":"lì",
"def": ["power","force","strength","ability","strenuously"]
},
"最后":
{"simp":"最后",
"trad":"最後",
"pinyin":"zuì hòu",
"def": ["final","last","finally","ultimate"]
},
"围绕":
{"simp":"围绕",
"trad":"圍繞",
"pinyin":"wéi rào",
"def": ["to revolve around","to center on (an issue)"]
},
"击沉":
{"simp":"击沉",
"trad":"擊沉",
"pinyin":"jī chén",
"def": ["to attack and sink (a ship)"]
},
"却是":
{"simp":"却是",
"trad":"卻是",
"pinyin":"què shì",
"def": ["nevertheless","actually","the fact is ..."]
},
"重量级":
{"simp":"重量级",
"trad":"重量級",
"pinyin":"zhòng liàng jí",
"def": ["heavyweight (boxing etc)"]
},
"下落":
{"simp":"下落",
"trad":"下落",
"pinyin":"xià luò",
"def": ["whereabouts","to drop","to fall"]
},
"地接":
{"simp":"地接",
"trad":"地接",
"pinyin":"dì jiē",
"def": ["local guide","tour escort"]
},
"桥墩":
{"simp":"桥墩",
"trad":"橋墩",
"pinyin":"qiáo dūn",
"def": ["bridge pier"]
},
"明智":
{"simp":"明智",
"trad":"明智",
"pinyin":"míng zhì",
"def": ["sensible","wise","judicious","sagacious"]
},
"主人":
{"simp":"主人",
"trad":"主人",
"pinyin":"zhǔ rén",
"def": ["master","host","owner","CL:個|个[ge4]"]
},
"有意识":
{"simp":"有意识",
"trad":"有意識",
"pinyin":"yǒu yì shí",
"def": ["conscious"]
},
"一些":
{"simp":"一些",
"trad":"一些",
"pinyin":"yī xiē",
"def": ["some","a few","a little","(following an adjective) slightly ...er"]
},
"那个人":
{"simp":"那个人",
"trad":"那個人",
"pinyin":"nà gè rén",
"def": ["lit. that person","fig. the person you have been looking for","Mr Right","the girl of one's dreams"]
},
"知道了":
{"simp":"知道了",
"trad":"知道了",
"pinyin":"zhī dào le",
"def": ["OK!","Got it!"]
},
"沉":
{"simp":"沉",
"trad":"沉",
"pinyin":"chén",
"def": ["to submerge","to immerse","to sink","to keep down","to lower","to drop","deep","profound","heavy"]
},
"巨大":
{"simp":"巨大",
"trad":"巨大",
"pinyin":"jù dà",
"def": ["huge","immense","very large","tremendous","gigantic","enormous"]
},
"喊":
{"simp":"喊",
"trad":"喊",
"pinyin":"hǎn",
"def": ["to yell","to shout","to call out for (a person)"]
},
"坐标":
{"simp":"坐标",
"trad":"坐標",
"pinyin":"zuò biāo",
"def": ["coordinate (geometry)"]
},
"黑白":
{"simp":"黑白",
"trad":"黑白",
"pinyin":"hēi bái",
"def": ["black and white","right and wrong","monochrome"]
},
"贮":
{"simp":"贮",
"trad":"貯",
"pinyin":"zhù",
"def": ["to store","to save","stockpile","Taiwan pr. [zhu3]"]
},
"人群":
{"simp":"人群",
"trad":"人群",
"pinyin":"rén qún",
"def": ["crowd"]
},
"标":
{"simp":"标",
"trad":"標",
"pinyin":"biāo",
"def": ["mark","sign","label","to mark with a symbol, label, lettering etc","to bear (a brand name, registration number etc)","prize","award","bid","target","quota","(old) the topmost branches of a tree","visible symptom","classifier for military units"]
},
"当时":
{"simp":"当时",
"trad":"當時",
"pinyin":"dàng shí",
"def": ["at once","right away"]
},
"上层":
{"simp":"上层",
"trad":"上層",
"pinyin":"shàng céng",
"def": ["upper layer"]
},
"原理":
{"simp":"原理",
"trad":"原理",
"pinyin":"yuán lǐ",
"def": ["principle","theory"]
},
"相当于":
{"simp":"相当于",
"trad":"相當於",
"pinyin":"xiāng dāng yú",
"def": ["equivalent to"]
},
"抬":
{"simp":"抬",
"trad":"抬",
"pinyin":"tái",
"def": ["to lift","to raise","(of two or more persons) to carry"]
},
"两":
{"simp":"两",
"trad":"兩",
"pinyin":"liǎng",
"def": ["two","both","some","a few","tael, unit of weight equal to 50 grams (modern) or 1⁄16 of a catty 斤[jin1] (old)"]
},
"色彩":
{"simp":"色彩",
"trad":"色彩",
"pinyin":"sè cǎi",
"def": ["tint","coloring","coloration","(fig.) flavor","character"]
},
"犯":
{"simp":"犯",
"trad":"犯",
"pinyin":"fàn",
"def": ["to violate","to offend","to assault","criminal","crime","to make a mistake","recurrence (of mistake or sth bad)"]
},
"记忆":
{"simp":"记忆",
"trad":"記憶",
"pinyin":"jì yì",
"def": ["to remember","to recall","memory","CL:個|个[ge4]"]
},
"准确":
{"simp":"准确",
"trad":"準確",
"pinyin":"zhǔn què",
"def": ["accurate","exact","precise"]
},
"重新":
{"simp":"重新",
"trad":"重新",
"pinyin":"chóng xīn",
"def": ["again; once more; re-"]
},
"年轻":
{"simp":"年轻",
"trad":"年輕",
"pinyin":"nián qīng",
"def": ["young"]
},
"弥合":
{"simp":"弥合",
"trad":"彌合",
"pinyin":"mí hé",
"def": ["to cause a wound to close up and heal"]
},
"护卫":
{"simp":"护卫",
"trad":"護衛",
"pinyin":"hù wèi",
"def": ["to guard","to protect","bodyguard (for officials in ancient times)"]
},
"跟随":
{"simp":"跟随",
"trad":"跟隨",
"pinyin":"gēn suí",
"def": ["to follow"]
},
"稳步":
{"simp":"稳步",
"trad":"穩步",
"pinyin":"wěn bù",
"def": ["steadily","a steady pace"]
},
"别人":
{"simp":"别人",
"trad":"別人",
"pinyin":"bié ren",
"def": ["other people","others","other person"]
},
"数学":
{"simp":"数学",
"trad":"數學",
"pinyin":"shù xué",
"def": ["mathematics","mathematical"]
},
"迫害":
{"simp":"迫害",
"trad":"迫害",
"pinyin":"pò hài",
"def": ["to persecute","persecution"]
},
"船只":
{"simp":"船只",
"trad":"船隻",
"pinyin":"chuán zhī",
"def": ["ship","boat","vessel"]
},
"究竟":
{"simp":"究竟",
"trad":"究竟",
"pinyin":"jiū jìng",
"def": ["to go to the bottom of a matter","after all","when all is said and done","(in an interrogative sentence) finally","outcome","result"]
},
"悬崖":
{"simp":"悬崖",
"trad":"懸崖",
"pinyin":"xuán yá",
"def": ["precipice","overhanging cliff"]
},
"满":
{"simp":"满",
"trad":"滿",
"pinyin":"mǎn",
"def": ["to fill","full","filled","packed","fully","completely","quite","to reach the limit","to satisfy","satisfied","contented"]
},
"切口":
{"simp":"切口",
"trad":"切口",
"pinyin":"qiè kǒu",
"def": ["slang","argot","private language used as secret code"]
},
"穿透":
{"simp":"穿透",
"trad":"穿透",
"pinyin":"chuān tòu",
"def": ["to penetrate"]
},
"抢购":
{"simp":"抢购",
"trad":"搶購",
"pinyin":"qiǎng gòu",
"def": ["to buy frenetically","to snap up (bargains, dwindling supplies etc)"]
},
"消灭":
{"simp":"消灭",
"trad":"消滅",
"pinyin":"xiāo miè",
"def": ["to put an end to","to annihilate","to cause to perish","to perish","annihilation (in quantum field theory)"]
},
"无数":
{"simp":"无数",
"trad":"無數",
"pinyin":"wú shù",
"def": ["countless","numberless","innumerable"]
},
"一辈子":
{"simp":"一辈子",
"trad":"一輩子",
"pinyin":"yī bèi zi",
"def": ["(for) a lifetime"]
},
"阶级":
{"simp":"阶级",
"trad":"階級",
"pinyin":"jiē jí",
"def": ["(social) class","CL:個|个[ge4]"]
},
"阈值":
{"simp":"阈值",
"trad":"閾值",
"pinyin":"yù zhí",
"def": ["threshold"]
},
"进口":
{"simp":"进口",
"trad":"進口",
"pinyin":"jìn kǒu",
"def": ["to import","imported","entrance","inlet (for the intake of air, water etc)"]
},
"次":
{"simp":"次",
"trad":"次",
"pinyin":"cì",
"def": ["next in sequence","second","the second (day, time etc)","secondary","vice-","sub-","infra-","inferior quality","substandard","order","sequence","hypo- (chemistry)","classifier for enumerated events: time"]
},
"隐形":
{"simp":"隐形",
"trad":"隱形",
"pinyin":"yǐn xíng",
"def": ["invisible"]
},
"晕":
{"simp":"晕",
"trad":"暈",
"pinyin":"yùn",
"def": ["dizzy","halo","ring around moon or sun"]
},
"时间":
{"simp":"时间",
"trad":"時間",
"pinyin":"shí jiān",
"def": ["time","period","CL:段[duan4]"]
},
"宇宙":
{"simp":"宇宙",
"trad":"宇宙",
"pinyin":"yǔ zhòu",
"def": ["universe","cosmos"]
},
"纳米":
{"simp":"纳米",
"trad":"納米",
"pinyin":"nà mǐ",
"def": ["nanometer"]
},
"开":
{"simp":"开",
"trad":"開",
"pinyin":"kāi",
"def": ["to open","to start","to turn on","to boil","to write out (a prescription, check, invoice etc)","to operate (a vehicle)","carat (gold)","abbr. for Kelvin, 開爾文|开尔文[Kai1 er3 wen2]","abbr. for 開本|开本[kai1 ben3], book format"]
},
"失忆症":
{"simp":"失忆症",
"trad":"失憶症",
"pinyin":"shī yì zhèng",
"def": ["amnesia"]
},
"源于":
{"simp":"源于",
"trad":"源於",
"pinyin":"yuán yú",
"def": ["has its origins in"]
},
"形势严峻":
{"simp":"形势严峻",
"trad":"形勢嚴峻",
"pinyin":"xíng shì yán jùn",
"def": ["in grave difficulties","the situation is grim"]
},
"道别":
{"simp":"道别",
"trad":"道別",
"pinyin":"dào bié",
"def": ["leave-taking","to say goodbye"]
},
"灰":
{"simp":"灰",
"trad":"灰",
"pinyin":"huī",
"def": ["ash","dust","lime","gray","discouraged; dejected"]
},
"危难":
{"simp":"危难",
"trad":"危難",
"pinyin":"wēi nàn",
"def": ["calamity"]
},
"以外":
{"simp":"以外",
"trad":"以外",
"pinyin":"yǐ wài",
"def": ["apart from","other than","except for","external","outside of","on the other side of","beyond"]
},
"矛盾":
{"simp":"矛盾",
"trad":"矛盾",
"pinyin":"máo dùn",
"def": ["contradiction","CL:個|个[ge4]","conflicting views","contradictory"]
},
"量":
{"simp":"量",
"trad":"量",
"pinyin":"liàng",
"def": ["capacity","quantity","amount","to estimate","abbr. for 量詞|量词[liang4 ci2], classifier (in Chinese grammar)","measure word"]
},
"残酷":
{"simp":"残酷",
"trad":"殘酷",
"pinyin":"cán kù",
"def": ["cruel","cruelty"]
},
"剧痛":
{"simp":"剧痛",
"trad":"劇痛",
"pinyin":"jù tòng",
"def": ["acute pain","sharp pain","twinge","stab","pang"]
},
"下层":
{"simp":"下层",
"trad":"下層",
"pinyin":"xià céng",
"def": ["underlayer","lower class","lower strata","substrate"]
},
"轻声":
{"simp":"轻声",
"trad":"輕聲",
"pinyin":"qīng shēng",
"def": ["quietly","softly","neutral tone","light stress"]
},
"留":
{"simp":"留",
"trad":"畱",
"pinyin":"liú",
"def": ["old variant of 留[liu2]"]
},
"膝":
{"simp":"膝",
"trad":"膝",
"pinyin":"xī",
"def": ["knee"]
},
"景":
{"simp":"景",
"trad":"景",
"pinyin":"jǐng",
"def": ["(bound form) scenery","circumstance","situation","scene (of a play)","(literary) sunlight"]
},
"信封":
{"simp":"信封",
"trad":"信封",
"pinyin":"xìn fēng",
"def": ["envelope","CL:個|个[ge4]"]
},
"楞":
{"simp":"楞",
"trad":"楞",
"pinyin":"lèng",
"def": ["variant of 愣[leng4]","to look distracted","to stare blankly","distracted","blank"]
},
"影响力":
{"simp":"影响力",
"trad":"影響力",
"pinyin":"yǐng xiǎng lì",
"def": ["influence","impact"]
},
"海洋":
{"simp":"海洋",
"trad":"海洋",
"pinyin":"hǎi yáng",
"def": ["ocean","CL:個|个[ge4]"]
},
"恢复":
{"simp":"恢复",
"trad":"恢復",
"pinyin":"huī fù",
"def": ["to reinstate","to resume","to restore","to recover","to regain","to rehabilitate"]
},
"肉眼":
{"simp":"肉眼",
"trad":"肉眼",
"pinyin":"ròu yǎn",
"def": ["naked eye","layman's eyes"]
},
"大发":
{"simp":"大发",
"trad":"大發",
"pinyin":"Dà fā",
"def": ["Daihatsu, Japanese car company"]
},
"瘦削":
{"simp":"瘦削",
"trad":"瘦削",
"pinyin":"shòu xuē",
"def": ["slim"]
},
"修改":
{"simp":"修改",
"trad":"修改",
"pinyin":"xiū gǎi",
"def": ["to amend","to alter","to modify"]
},
"程":
{"simp":"程",
"trad":"程",
"pinyin":"chéng",
"def": ["rule","order","regulations","formula","journey","procedure","sequence"]
},
"六十":
{"simp":"六十",
"trad":"六十",
"pinyin":"liù shí",
"def": ["sixty","60"]
},
"提供者":
{"simp":"提供者",
"trad":"提供者",
"pinyin":"tí gōng zhě",
"def": ["supplier","provider"]
},
"给予":
{"simp":"给予",
"trad":"給予",
"pinyin":"jǐ yǔ",
"def": ["to accord","to give","to show (respect)"]
},
"而是":
{"simp":"而是",
"trad":"而是",
"pinyin":"ér shì",
"def": ["rather"]
},
"扳动":
{"simp":"扳动",
"trad":"扳動",
"pinyin":"bān dòng",
"def": ["to pull out","to pull a lever"]
},
"来源":
{"simp":"来源",
"trad":"來源",
"pinyin":"lái yuán",
"def": ["source (of information etc)","origin"]
},
"三角形":
{"simp":"三角形",
"trad":"三角形",
"pinyin":"sān jiǎo xíng",
"def": ["triangle"]
},
"冷漠":
{"simp":"冷漠",
"trad":"冷漠",
"pinyin":"lěng mò",
"def": ["cold and detached towards sb","lack of regard","indifference","neglect"]
},
"电极":
{"simp":"电极",
"trad":"電極",
"pinyin":"diàn jí",
"def": ["electrode"]
},
"次日":
{"simp":"次日",
"trad":"次日",
"pinyin":"cì rì",
"def": ["next day","the morrow"]
},
"水平":
{"simp":"水平",
"trad":"水平",
"pinyin":"shuǐ píng",
"def": ["level (of achievement etc)","standard","horizontal"]
},
"才":
{"simp":"才",
"trad":"纔",
"pinyin":"cái",
"def": ["(variant of 才[cai2]) just now","(before an expression of quantity) only"]
},
"夜空":
{"simp":"夜空",
"trad":"夜空",
"pinyin":"yè kōng",
"def": ["night sky"]
},
"青春":
{"simp":"青春",
"trad":"青春",
"pinyin":"qīng chūn",
"def": ["youth","youthfulness"]
},
"无关":
{"simp":"无关",
"trad":"無關",
"pinyin":"wú guān",
"def": ["unrelated","having nothing to do (with sth else)"]
},
"南方":
{"simp":"南方",
"trad":"南方",
"pinyin":"nán fāng",
"def": ["south","the southern part of the country","the South"]
},
"不会":
{"simp":"不会",
"trad":"不會",
"pinyin":"bù huì",
"def": ["improbable","unlikely","will not (act, happen etc)","not able","not having learned to do sth","(coll.) (Tw) don't mention it","not at all"]
},
"柜":
{"simp":"柜",
"trad":"櫃",
"pinyin":"guì",
"def": ["cupboard","cabinet","wardrobe"]
},
"报偿":
{"simp":"报偿",
"trad":"報償",
"pinyin":"bào cháng",
"def": ["repay","recompense"]
},
"感受":
{"simp":"感受",
"trad":"感受",
"pinyin":"gǎn shòu",
"def": ["to sense","perception","to feel (through the senses)","to experience","a feeling","an impression","an experience"]
},
"知道":
{"simp":"知道",
"trad":"知道",
"pinyin":"zhī dào",
"def": ["to know","to become aware of","also pr. [zhi1 dao5]"]
},
"装有":
{"simp":"装有",
"trad":"裝有",
"pinyin":"zhuāng yǒu",
"def": ["fitted with"]
},
"领域":
{"simp":"领域",
"trad":"領域",
"pinyin":"lǐng yù",
"def": ["domain","sphere","field","territory","area"]
},
"伸出":
{"simp":"伸出",
"trad":"伸出",
"pinyin":"shēn chū",
"def": ["to extend"]
},
"让":
{"simp":"让",
"trad":"讓",
"pinyin":"ràng",
"def": ["to yield","to permit","to let sb do sth","to have sb do sth","to make sb (feel sad etc)","by (indicates the agent in a passive clause, like 被[bei4])"]
},
"再次":
{"simp":"再次",
"trad":"再次",
"pinyin":"zài cì",
"def": ["one more time","again","one more","once again"]
},
"零星":
{"simp":"零星",
"trad":"零星",
"pinyin":"líng xīng",
"def": ["fragmentary","random","bits and pieces","sporadic"]
},
"查":
{"simp":"查",
"trad":"查",
"pinyin":"zhā",
"def": ["variant of 楂[zha1]"]
},
"这些":
{"simp":"这些",
"trad":"這些",
"pinyin":"zhè xiē",
"def": ["these"]
},
"高级":
{"simp":"高级",
"trad":"高級",
"pinyin":"gāo jí",
"def": ["high level","high grade","advanced","high-ranking"]
},
"保重":
{"simp":"保重",
"trad":"保重",
"pinyin":"bǎo zhòng",
"def": ["to take care of oneself"]
},
"户":
{"simp":"户",
"trad":"戶",
"pinyin":"hù",
"def": ["a household","door","family"]
},
"分队":
{"simp":"分队",
"trad":"分隊",
"pinyin":"fēn duì",
"def": ["military platoon or squad"]
},
"馒头":
{"simp":"馒头",
"trad":"饅頭",
"pinyin":"mán tou",
"def": ["steamed roll","steamed bun","steamed bread","CL:個|个[ge4]"]
},
"重大":
{"simp":"重大",
"trad":"重大",
"pinyin":"zhòng dà",
"def": ["great","important","major","significant"]
},
"处理":
{"simp":"处理",
"trad":"處理",
"pinyin":"chǔ lǐ",
"def": ["to handle","to treat","to deal with","to process","to deal with a criminal case","to mete out punishment","to offer for sale at a reduced price","to punish"]
},
"走进":
{"simp":"走进",
"trad":"走進",
"pinyin":"zǒu jìn",
"def": ["to enter"]
},
"飞机":
{"simp":"飞机",
"trad":"飛機",
"pinyin":"fēi jī",
"def": ["airplane","CL:架[jia4]"]
},
"先例":
{"simp":"先例",
"trad":"先例",
"pinyin":"xiān lì",
"def": ["antecedent","precedent"]
},
"降":
{"simp":"降",
"trad":"降",
"pinyin":"xiáng",
"def": ["to surrender","to capitulate","to subdue","to tame"]
},
"还":
{"simp":"还",
"trad":"還",
"pinyin":"huán",
"def": ["to pay back","to return"]
},
"小事":
{"simp":"小事",
"trad":"小事",
"pinyin":"xiǎo shì",
"def": ["trifle","trivial matter","CL:點|点[dian3]"]
},
"就要":
{"simp":"就要",
"trad":"就要",
"pinyin":"jiù yào",
"def": ["will","shall","to be going to"]
},
"众人":
{"simp":"众人",
"trad":"眾人",
"pinyin":"zhòng rén",
"def": ["everyone"]
},
"系统":
{"simp":"系统",
"trad":"系統",
"pinyin":"xì tǒng",
"def": ["system","CL:個|个[ge4]"]
},
"几":
{"simp":"几",
"trad":"幾",
"pinyin":"jǐ",
"def": ["how much","how many","several","a few"]
},
"出格":
{"simp":"出格",
"trad":"出格",
"pinyin":"chū gé",
"def": ["to overstep the bounds of what is proper","to take sth too far","(of a measuring device) to go off the scale"]
},
"却":
{"simp":"却",
"trad":"卻",
"pinyin":"què",
"def": ["but","yet","however","while","to go back","to decline","to retreat","nevertheless","even though"]
},
"审问":
{"simp":"审问",
"trad":"審問",
"pinyin":"shěn wèn",
"def": ["to interrogate","to examine","to question"]
},
"不动声色":
{"simp":"不动声色",
"trad":"不動聲色",
"pinyin":"bù dòng shēng sè",
"def": ["not a word or movement (idiom); remaining calm and collected","not batting an eyelid"]
},
"不错":
{"simp":"不错",
"trad":"不錯",
"pinyin":"bù cuò",
"def": ["correct","right","not bad","pretty good"]
},
"比较":
{"simp":"比较",
"trad":"比較",
"pinyin":"bǐ jiào",
"def": ["to compare","to contrast","comparatively","relatively","quite","comparison"]
},
"桦树":
{"simp":"桦树",
"trad":"樺樹",
"pinyin":"huà shù",
"def": ["birch"]
},
"废铁":
{"simp":"废铁",
"trad":"廢鐵",
"pinyin":"fèi tiě",
"def": ["scrap iron"]
},
"试图":
{"simp":"试图",
"trad":"試圖",
"pinyin":"shì tú",
"def": ["to attempt","to try"]
},
"发展":
{"simp":"发展",
"trad":"發展",
"pinyin":"fā zhǎn",
"def": ["development","growth","to develop","to grow","to expand"]
},
"共产主义":
{"simp":"共产主义",
"trad":"共產主義",
"pinyin":"gòng chǎn zhǔ yì",
"def": ["communism"]
},
"敢":
{"simp":"敢",
"trad":"敢",
"pinyin":"gǎn",
"def": ["to dare","daring","(polite) may I venture"]
},
"放过":
{"simp":"放过",
"trad":"放過",
"pinyin":"fàng guò",
"def": ["to let off","to let slip by","to let sb get away with sth"]
},
"照顾":
{"simp":"照顾",
"trad":"照顧",
"pinyin":"zhào gu",
"def": ["to take care of","to show consideration","to attend to","to look after"]
},
"深处":
{"simp":"深处",
"trad":"深處",
"pinyin":"shēn chù",
"def": ["abyss","depths","deepest or most distant part"]
},
"巨额":
{"simp":"巨额",
"trad":"巨額",
"pinyin":"jù é",
"def": ["large sum (of money)","a huge amount"]
},
"披":
{"simp":"披",
"trad":"披",
"pinyin":"pī",
"def": ["to drape over one's shoulders","to open","to unroll","to split open","to spread out"]
},
"建筑物":
{"simp":"建筑物",
"trad":"建築物",
"pinyin":"jiàn zhù wù",
"def": ["building","structure","edifice"]
},
"落日":
{"simp":"落日",
"trad":"落日",
"pinyin":"luò rì",
"def": ["setting sun"]
},
"表面":
{"simp":"表面",
"trad":"表面",
"pinyin":"biǎo miàn",
"def": ["surface","face","outside","appearance"]
},
"冤":
{"simp":"冤",
"trad":"寃",
"pinyin":"yuān",
"def": ["old variant of 冤[yuan1]"]
},
"课题":
{"simp":"课题",
"trad":"課題",
"pinyin":"kè tí",
"def": ["task","problem","issue"]
},
"概":
{"simp":"概",
"trad":"槩",
"pinyin":"gài",
"def": ["old variant of 概[gai4]"]
},
"应该":
{"simp":"应该",
"trad":"應該",
"pinyin":"yīng gāi",
"def": ["ought to","should","must"]
},
"后来":
{"simp":"后来",
"trad":"後來",
"pinyin":"hòu lái",
"def": ["afterwards","later"]
},
"文":
{"simp":"文",
"trad":"文",
"pinyin":"wén",
"def": ["language","culture","writing","formal","literary","gentle","(old) classifier for coins","Kangxi radical 67"]
},
"柔和":
{"simp":"柔和",
"trad":"柔和",
"pinyin":"róu hé",
"def": ["gentle","soft"]
},
"自":
{"simp":"自",
"trad":"自",
"pinyin":"zì",
"def": ["self","oneself","from","since","naturally","surely"]
},
"大小":
{"simp":"大小",
"trad":"大小",
"pinyin":"dà xiǎo",
"def": ["dimension","magnitude","size","measurement","large and small","at any rate","adults and children","consideration of seniority"]
},
"完好":
{"simp":"完好",
"trad":"完好",
"pinyin":"wán hǎo",
"def": ["intact","in good condition"]
},
"和平主义":
{"simp":"和平主义",
"trad":"和平主義",
"pinyin":"hé píng zhǔ yì",
"def": ["pacifism"]
},
"面临":
{"simp":"面临",
"trad":"面臨",
"pinyin":"miàn lín",
"def": ["to face sth","to be confronted with"]
},
"遇难":
{"simp":"遇难",
"trad":"遇難",
"pinyin":"yù nàn",
"def": ["to perish","to be killed"]
},
"异己":
{"simp":"异己",
"trad":"異己",
"pinyin":"yì jǐ",
"def": ["dissident","alien","outsider","non-self","others"]
},
"手臂":
{"simp":"手臂",
"trad":"手臂",
"pinyin":"shǒu bì",
"def": ["arm","helper"]
},
"暴露":
{"simp":"暴露",
"trad":"暴露",
"pinyin":"bào lù",
"def": ["to expose","to reveal","to lay bare","also pr. [pu4 lu4]"]
},
"质量":
{"simp":"质量",
"trad":"質量",
"pinyin":"zhì liàng",
"def": ["quality","(physics) mass","CL:個|个[ge4]"]
},
"遥望":
{"simp":"遥望",
"trad":"遙望",
"pinyin":"yáo wàng",
"def": ["to look into the distance"]
},
"最终":
{"simp":"最终",
"trad":"最終",
"pinyin":"zuì zhōng",
"def": ["final","ultimate"]
},
"板块":
{"simp":"板块",
"trad":"板塊",
"pinyin":"bǎn kuài",
"def": ["slab","(geology) tectonic plate","(fig.) sector (of the stock market or of industry)","(economic) bloc"]
},
"不由":
{"simp":"不由",
"trad":"不由",
"pinyin":"bù yóu",
"def": ["can't help (doing sth)"]
},
"壮丽":
{"simp":"壮丽",
"trad":"壯麗",
"pinyin":"zhuàng lì",
"def": ["magnificence","magnificent","majestic","glorious"]
},
"包括":
{"simp":"包括",
"trad":"包括",
"pinyin":"bāo kuò",
"def": ["to comprise","to include","to involve","to incorporate","to consist of"]
},
"装":
{"simp":"装",
"trad":"裝",
"pinyin":"zhuāng",
"def": ["adornment","to adorn","dress","clothing","costume (of an actor in a play)","to play a role","to pretend","to install","to fix","to wrap (sth in a bag)","to load","to pack"]
},
"叠":
{"simp":"叠",
"trad":"疊",
"pinyin":"dié",
"def": ["to fold","to fold over in layers","to furl","to layer","to pile up","to repeat","to duplicate"]
},
"惊人":
{"simp":"惊人",
"trad":"驚人",
"pinyin":"jīng rén",
"def": ["astonishing"]
},
"军事情报":
{"simp":"军事情报",
"trad":"軍事情報",
"pinyin":"jūn shì qíng bào",
"def": ["military intelligence"]
},
"荒山":
{"simp":"荒山",
"trad":"荒山",
"pinyin":"huāng shān",
"def": ["desert mountain","barren hill"]
},
"不大":
{"simp":"不大",
"trad":"不大",
"pinyin":"bù dà",
"def": ["not very","not too","not often"]
},
"压迫":
{"simp":"压迫",
"trad":"壓迫",
"pinyin":"yā pò",
"def": ["to oppress","to repress","to constrict","oppression","stress (physics)"]
},
"历史":
{"simp":"历史",
"trad":"歷史",
"pinyin":"lì shǐ",
"def": ["history","CL:門|门[men2],段[duan4]"]
},
"空白":
{"simp":"空白",
"trad":"空白",
"pinyin":"kòng bái",
"def": ["blank space"]
},
"走近":
{"simp":"走近",
"trad":"走近",
"pinyin":"zǒu jìn",
"def": ["to approach","to draw near to"]
},
"宣布":
{"simp":"宣布",
"trad":"宣布",
"pinyin":"xuān bù",
"def": ["to declare","to announce","to proclaim"]
},
"一触即发":
{"simp":"一触即发",
"trad":"一觸即發",
"pinyin":"yī chù jí fā",
"def": ["could happen at any moment","on the verge"]
},
"高干":
{"simp":"高干",
"trad":"高幹",
"pinyin":"gāo gàn",
"def": ["high cadre","top party member"]
},
"氦":
{"simp":"氦",
"trad":"氦",
"pinyin":"hài",
"def": ["helium (chemistry)"]
},
"更加":
{"simp":"更加",
"trad":"更加",
"pinyin":"gèng jiā",
"def": ["more (than sth else)","even more"]
},
"怎么回事":
{"simp":"怎么回事",
"trad":"怎麼回事",
"pinyin":"zěn me huí shì",
"def": ["what's the matter?","what's going on?","how could that be?","how did that come about?","what's it all about?"]
},
"老态":
{"simp":"老态",
"trad":"老態",
"pinyin":"lǎo tài",
"def": ["old and frail","decrepit","doddering","decrepitude","infirmities of old age"]
},
"看看":
{"simp":"看看",
"trad":"看看",
"pinyin":"kàn kan",
"def": ["to take a look at","to examine","to survey","(coll.) pretty soon"]
},
"珍视":
{"simp":"珍视",
"trad":"珍視",
"pinyin":"zhēn shì",
"def": ["to place great importance on","to treasure"]
},
"忌讳":
{"simp":"忌讳",
"trad":"忌諱",
"pinyin":"jì huì",
"def": ["taboo","to avoid as taboo","to abstain from"]
},
"别墅":
{"simp":"别墅",
"trad":"別墅",
"pinyin":"bié shù",
"def": ["villa","CL:幢[zhuang4],座[zuo4]"]
},
"为此":
{"simp":"为此",
"trad":"為此",
"pinyin":"wèi cǐ",
"def": ["for this reason","with regards to this","in this respect","in order to do this","to this end"]
},
"千万":
{"simp":"千万",
"trad":"千萬",
"pinyin":"qiān wàn",
"def": ["ten million","countless","many","one must by all means"]
},
"闸":
{"simp":"闸",
"trad":"閘",
"pinyin":"zhá",
"def": ["gear","brake","sluice","lock (on waterway)","electric switch or circuit breaker"]
},
"得很":
{"simp":"得很",
"trad":"得很",
"pinyin":"de hěn",
"def": ["(after an adjective) very"]
},
"阳":
{"simp":"阳",
"trad":"陽",
"pinyin":"yáng",
"def": ["positive (electric.)","sun","male principle (Taoism)","Yang, opposite: 陰|阴[yin1]"]
},
"带回":
{"simp":"带回",
"trad":"帶回",
"pinyin":"dài huí",
"def": ["to bring back"]
},
"教育":
{"simp":"教育",
"trad":"教育",
"pinyin":"jiào yù",
"def": ["to educate","to teach","education"]
},
"控制室":
{"simp":"控制室",
"trad":"控制室",
"pinyin":"kòng zhì shì",
"def": ["control room"]
},
"过滤":
{"simp":"过滤",
"trad":"過濾",
"pinyin":"guò lù:",
"def": ["to filter","filter"]
},
"肤":
{"simp":"肤",
"trad":"膚",
"pinyin":"fū",
"def": ["skin"]
},
"怕":
{"simp":"怕",
"trad":"怕",
"pinyin":"pà",
"def": ["to be afraid","to fear","to dread","to be unable to endure","perhaps"]
},
"求生":
{"simp":"求生",
"trad":"求生",
"pinyin":"qiú shēng",
"def": ["to seek survival","to possess the will to live"]
},
"正面":
{"simp":"正面",
"trad":"正面",
"pinyin":"zhèng miàn",
"def": ["front","obverse side","right side","positive","direct","open"]
},
"造":
{"simp":"造",
"trad":"造",
"pinyin":"zào",
"def": ["to make","to build","to manufacture","to invent","to fabricate","to go to","party (in a lawsuit or legal agreement)","crop","classifier for crops"]
},
"完整":
{"simp":"完整",
"trad":"完整",
"pinyin":"wán zhěng",
"def": ["complete","intact"]
},
"值班":
{"simp":"值班",
"trad":"值班",
"pinyin":"zhí bān",
"def": ["to work a shift","on duty"]
},
"枪":
{"simp":"枪",
"trad":"鎗",
"pinyin":"qiāng",
"def": ["variant of 槍|枪[qiang1]","rifle","spear"]
},
"以太":
{"simp":"以太",
"trad":"以太",
"pinyin":"yǐ tài",
"def": ["Ether-"]
},
"越过":
{"simp":"越过",
"trad":"越過",
"pinyin":"yuè guò",
"def": ["to cross over","to transcend","to cover distance","to overcome","to rise above"]
},
"奶":
{"simp":"奶",
"trad":"嬭",
"pinyin":"nǎi",
"def": ["mother","variant of 奶[nai3]"]
},
"肯":
{"simp":"肯",
"trad":"肯",
"pinyin":"kěn",
"def": ["to agree","to consent","to be ready (to do sth)","willing"]
},
"黏":
{"simp":"黏",
"trad":"黏",
"pinyin":"nián",
"def": ["sticky","glutinous","(Tw) to adhere","to stick on","to glue"]
},
"瞬间":
{"simp":"瞬间",
"trad":"瞬間",
"pinyin":"shùn jiān",
"def": ["in an instant","in a flash"]
},
"来不及":
{"simp":"来不及",
"trad":"來不及",
"pinyin":"lái bu jí",
"def": ["there's not enough time (to do sth)","it's too late (to do sth)"]
},
"提":
{"simp":"提",
"trad":"提",
"pinyin":"tí",
"def": ["to carry (hanging down from the hand)","to lift","to put forward","to mention","to raise (an issue)","upwards character stroke","lifting brush stroke (in painting)","scoop for measuring liquid"]
},
"点点":
{"simp":"点点",
"trad":"點點",
"pinyin":"diǎn diǎn",
"def": ["point","speck"]
},
"空格键":
{"simp":"空格键",
"trad":"空格鍵",
"pinyin":"kòng gé jiàn",
"def": ["space bar (keyboard)"]
},
"间断":
{"simp":"间断",
"trad":"間斷",
"pinyin":"jiàn duàn",
"def": ["disconnected","interrupted","suspended","a gap","a break"]
},
"恐怖":
{"simp":"恐怖",
"trad":"恐怖",
"pinyin":"kǒng bù",
"def": ["terrible","frightful","frightening","terror","terrorist"]
},
"每天":
{"simp":"每天",
"trad":"每天",
"pinyin":"měi tiān",
"def": ["every day","everyday"]
},
"第二":
{"simp":"第二",
"trad":"第二",
"pinyin":"dì èr",
"def": ["second","number two","next","secondary"]
},
"扭转":
{"simp":"扭转",
"trad":"扭轉",
"pinyin":"niǔ zhuǎn",
"def": ["to reverse","to turn around (an undesirable situation)","(mechanics) torsion"]
},
"卓越":
{"simp":"卓越",
"trad":"卓越",
"pinyin":"zhuó yuè",
"def": ["outstanding","surpassing","distinguished","splendid"]
},
"瓦":
{"simp":"瓦",
"trad":"瓦",
"pinyin":"wǎ",
"def": ["roof tile","abbr. for 瓦特[wa3 te4]"]
},
"天体物理学家":
{"simp":"天体物理学家",
"trad":"天體物理學家",
"pinyin":"tiān tǐ wù lǐ xué jiā",
"def": ["astrophysicist"]
},
"作用":
{"simp":"作用",
"trad":"作用",
"pinyin":"zuò yòng",
"def": ["to act on","to affect","action","function","activity","impact","result","effect","purpose","intent","(suffix) -ation, -tion etc, as in 抑制作用[yi4 zhi4 zuo4 yong4], inhibition"]
},
"骤变":
{"simp":"骤变",
"trad":"驟變",
"pinyin":"zhòu biàn",
"def": ["to change suddenly","to change abruptly"]
},
"控制":
{"simp":"控制",
"trad":"控制",
"pinyin":"kòng zhì",
"def": ["to control"]
},
"工作":
{"simp":"工作",
"trad":"工作",
"pinyin":"gōng zuò",
"def": ["to work","(of a machine) to operate","job","work","task","CL:個|个[ge4],份[fen4],項|项[xiang4]"]
},
"审核":
{"simp":"审核",
"trad":"審核",
"pinyin":"shěn hé",
"def": ["to audit","to investigate thoroughly"]
},
"气候":
{"simp":"气候",
"trad":"氣候",
"pinyin":"qì hòu",
"def": ["climate","atmosphere","situation","CL:種|种[zhong3]"]
},
"包扎":
{"simp":"包扎",
"trad":"包紮",
"pinyin":"bāo zā",
"def": ["to wrap up","to pack","to bind up (a wound)"]
},
"改造":
{"simp":"改造",
"trad":"改造",
"pinyin":"gǎi zào",
"def": ["to transform","to reform","to remodel","to remold"]
},
"激烈":
{"simp":"激烈",
"trad":"激烈",
"pinyin":"jī liè",
"def": ["(of competition or fighting) intense","fierce","(of pain) acute","(of an expression of opinion) impassioned","vehement","(of a course of action) drastic","extreme"]
},
"锄头":
{"simp":"锄头",
"trad":"鋤頭",
"pinyin":"chú tou",
"def": ["hoe","CL:把[ba3]"]
},
"供":
{"simp":"供",
"trad":"供",
"pinyin":"gòng",
"def": ["sacrificial offering","to confess"]
},
"滥用":
{"simp":"滥用",
"trad":"濫用",
"pinyin":"làn yòng",
"def": ["to misuse","to abuse"]
},
"不可能":
{"simp":"不可能",
"trad":"不可能",
"pinyin":"bù kě néng",
"def": ["impossible","cannot","not able"]
},
"医疗":
{"simp":"医疗",
"trad":"醫療",
"pinyin":"yī liáo",
"def": ["medical treatment"]
},
"百万":
{"simp":"百万",
"trad":"百萬",
"pinyin":"bǎi wàn",
"def": ["million","millions"]
},
"责任心":
{"simp":"责任心",
"trad":"責任心",
"pinyin":"zé rèn xīn",
"def": ["sense of responsibility"]
},
"扯":
{"simp":"扯",
"trad":"撦",
"pinyin":"chě",
"def": ["variant of 扯[che3]","to pull","to tear"]
},
"所以":
{"simp":"所以",
"trad":"所以",
"pinyin":"suǒ yǐ",
"def": ["therefore","as a result","so","the reason why"]
},
"尽管":
{"simp":"尽管",
"trad":"儘管",
"pinyin":"jǐn guǎn",
"def": ["despite","although","even though","in spite of","unhesitatingly","do not hesitate (to ask, complain etc)","(go ahead and do it) without hesitating"]
},
"强制":
{"simp":"强制",
"trad":"強制",
"pinyin":"qiáng zhì",
"def": ["to enforce","enforcement","forcibly","compulsory"]
},
"认":
{"simp":"认",
"trad":"認",
"pinyin":"rèn",
"def": ["to recognize","to know","to admit"]
},
"删除":
{"simp":"删除",
"trad":"刪除",
"pinyin":"shān chú",
"def": ["to delete","to cancel"]
},
"性":
{"simp":"性",
"trad":"性",
"pinyin":"xìng",
"def": ["nature","character","property","quality","attribute","sexuality","sex","gender","suffix forming adjective from verb","suffix forming noun from adjective, corresponding to -ness or -ity","essence","CL:個|个[ge4]"]
},
"黑色":
{"simp":"黑色",
"trad":"黑色",
"pinyin":"hēi sè",
"def": ["black"]
},
"忠于":
{"simp":"忠于",
"trad":"忠於",
"pinyin":"zhōng yú",
"def": ["to be loyal to"]
},
"复":
{"simp":"复",
"trad":"覆",
"pinyin":"fù",
"def": ["variant of 復|复[fu4]","to reply to a letter"]
},
"创造":
{"simp":"创造",
"trad":"創造",
"pinyin":"chuàng zào",
"def": ["to create","to bring about","to produce","to set (a record)"]
},
"全新":
{"simp":"全新",
"trad":"全新",
"pinyin":"quán xīn",
"def": ["all new","completely new"]
},
"疑惑":
{"simp":"疑惑",
"trad":"疑惑",
"pinyin":"yí huò",
"def": ["to doubt","to distrust","unconvincing","to puzzle over","misgivings","suspicions"]
},
"任何":
{"simp":"任何",
"trad":"任何",
"pinyin":"rèn hé",
"def": ["any","whatever","whichever","whatsoever"]
},
"过分":
{"simp":"过分",
"trad":"過分",
"pinyin":"guò fèn",
"def": ["excessive","undue","overly"]
},
"步":
{"simp":"步",
"trad":"步",
"pinyin":"bù",
"def": ["a step","a pace","walk","march","stages in a process","situation"]
},
"皱纹":
{"simp":"皱纹",
"trad":"皺紋",
"pinyin":"zhòu wén",
"def": ["wrinkle","CL:道[dao4]"]
},
"访问":
{"simp":"访问",
"trad":"訪問",
"pinyin":"fǎng wèn",
"def": ["to visit","to call on","to interview","CL:次[ci4]"]
},
"扫":
{"simp":"扫",
"trad":"掃",
"pinyin":"sào",
"def": ["broom"]
},
"快速":
{"simp":"快速",
"trad":"快速",
"pinyin":"kuài sù",
"def": ["fast","high-speed","rapid"]
},
"粒子":
{"simp":"粒子",
"trad":"粒子",
"pinyin":"lì zi",
"def": ["grain (of rice)","granule"]
},
"陪伴":
{"simp":"陪伴",
"trad":"陪伴",
"pinyin":"péi bàn",
"def": ["to accompany"]
},
"以色列人":
{"simp":"以色列人",
"trad":"以色列人",
"pinyin":"Yǐ sè liè rén",
"def": ["Israelite","Israeli"]
},
"不可解":
{"simp":"不可解",
"trad":"不可解",
"pinyin":"bù kě jiě",
"def": ["insoluble (i.e. impossible to solve)"]
},
"旭日":
{"simp":"旭日",
"trad":"旭日",
"pinyin":"xù rì",
"def": ["the rising sun"]
},
"欧洲人":
{"simp":"欧洲人",
"trad":"歐洲人",
"pinyin":"Oū zhōu rén",
"def": ["European (person)"]
},
"精度":
{"simp":"精度",
"trad":"精度",
"pinyin":"jīng dù",
"def": ["precision"]
},
"船闸":
{"simp":"船闸",
"trad":"船閘",
"pinyin":"chuán zhá",
"def": ["a canal lock"]
},
"由于":
{"simp":"由于",
"trad":"由於",
"pinyin":"yóu yú",
"def": ["due to","as a result of","thanks to","owing to","since","because"]
},
"聚集":
{"simp":"聚集",
"trad":"聚集",
"pinyin":"jù jí",
"def": ["to assemble","to gather"]
},
"光晕":
{"simp":"光晕",
"trad":"光暈",
"pinyin":"guāng yùn",
"def": ["halo","(photography) halation"]
},
"挤":
{"simp":"挤",
"trad":"擠",
"pinyin":"jǐ",
"def": ["to crowd in","to cram in","to force others aside","to press","to squeeze","to find (time in one's busy schedule)"]
},
"沉默":
{"simp":"沉默",
"trad":"沉默",
"pinyin":"chén mò",
"def": ["taciturn","uncommunicative","silent"]
},
"拉":
{"simp":"拉",
"trad":"拉",
"pinyin":"lā",
"def": ["to pull","to play (a bowed instrument)","to drag","to draw","to chat","(coll.) to empty one's bowels"]
},
"耐心":
{"simp":"耐心",
"trad":"耐心",
"pinyin":"nài xīn",
"def": ["to be patient","patience"]
},
"相应":
{"simp":"相应",
"trad":"相應",
"pinyin":"xiāng yìng",
"def": ["to correspond","answering (one another)","to agree (among the part)","corresponding","relevant","appropriate","(modify) accordingly"]
},
"某":
{"simp":"某",
"trad":"某",
"pinyin":"mǒu",
"def": ["some","a certain","sb or sth indefinite","such-and-such"]
},
"设施":
{"simp":"设施",
"trad":"設施",
"pinyin":"shè shī",
"def": ["facilities","installation"]
},
"变为":
{"simp":"变为",
"trad":"變為",
"pinyin":"biàn wéi",
"def": ["to change into"]
},
"两全其美":
{"simp":"两全其美",
"trad":"兩全其美",
"pinyin":"liǎng quán qí měi",
"def": ["to satisfy rival demands (idiom)","to get the best of both worlds","to have it both ways","to have one's cake and eat it too"]
},
"联席会议":
{"simp":"联席会议",
"trad":"聯席會議",
"pinyin":"lián xí huì yì",
"def": ["joint conference"]
},
"舞曲":
{"simp":"舞曲",
"trad":"舞曲",
"pinyin":"wǔ qǔ",
"def": ["dance music"]
},
"九":
{"simp":"九",
"trad":"九",
"pinyin":"jiǔ",
"def": ["nine","9"]
},
"巴勒斯坦":
{"simp":"巴勒斯坦",
"trad":"巴勒斯坦",
"pinyin":"Bā lè sī tǎn",
"def": ["Palestine"]
},
"大人":
{"simp":"大人",
"trad":"大人",
"pinyin":"dà ren",
"def": ["adult","grownup","title of respect toward superiors"]
},
"尿毒症":
{"simp":"尿毒症",
"trad":"尿毒症",
"pinyin":"niào dú zhèng",
"def": ["uremia (medicine)"]
},
"高粱":
{"simp":"高粱",
"trad":"高粱",
"pinyin":"gāo liáng",
"def": ["sorghum","common sorghum (Sorghum vulgare)"]
},
"那个":
{"simp":"那个",
"trad":"那個",
"pinyin":"nà ge",
"def": ["that one","that thing","that (as opposed to this)","(used before a verb or adjective for emphasis)","(used to humorously or indirectly refer to sth embarrassing, funny etc, or when one can't think of the right word)","(used in speech as a filler, similar to \"umm\", \"you know\" etc)","(euph.) menstruation","sex","also pr. [nei4 ge5]"]
},
"所需":
{"simp":"所需",
"trad":"所需",
"pinyin":"suǒ xū",
"def": ["necessary (for)","required"]
},
"模型":
{"simp":"模型",
"trad":"模型",
"pinyin":"mó xíng",
"def": ["model","mold","matrix","pattern"]
},
"夕阳":
{"simp":"夕阳",
"trad":"夕陽",
"pinyin":"xī yáng",
"def": ["sunset","the setting sun"]
},
"对地":
{"simp":"对地",
"trad":"對地",
"pinyin":"duì dì",
"def": ["targeted (e.g. attacks)"]
},
"来源于":
{"simp":"来源于",
"trad":"來源於",
"pinyin":"lái yuán yú",
"def": ["to originate in"]
},
"女孩":
{"simp":"女孩",
"trad":"女孩",
"pinyin":"nǔ: hái",
"def": ["girl","lass"]
},
"门口":
{"simp":"门口",
"trad":"門口",
"pinyin":"mén kǒu",
"def": ["doorway","gate","CL:個|个[ge4]"]
},
"外星人":
{"simp":"外星人",
"trad":"外星人",
"pinyin":"wài xīng rén",
"def": ["space alien","extraterrestrial"]
},
"部队":
{"simp":"部队",
"trad":"部隊",
"pinyin":"bù duì",
"def": ["army","armed forces","troops","force","unit","CL:個|个[ge4]"]
},
"表达":
{"simp":"表达",
"trad":"表達",
"pinyin":"biǎo dá",
"def": ["to express","to convey"]
},
"天":
{"simp":"天",
"trad":"天",
"pinyin":"tiān",
"def": ["day","sky","heaven"]
},
"纪律":
{"simp":"纪律",
"trad":"紀律",
"pinyin":"jì lù:",
"def": ["discipline"]
},
"相处":
{"simp":"相处",
"trad":"相處",
"pinyin":"xiāng chǔ",
"def": ["to be in contact (with sb)","to associate","to interact","to get along (well, poorly)"]
},
"大桥":
{"simp":"大桥",
"trad":"大橋",
"pinyin":"Dà Qiáo",
"def": ["Da Qiao, one of the Two Qiaos, according to Romance of the Three Kingdoms 三國演義|三国演义[San1 guo2 Yan3 yi4], the two great beauties of ancient China"]
},
"十分":
{"simp":"十分",
"trad":"十分",
"pinyin":"shí fēn",
"def": ["very","completely","utterly","extremely","absolutely","hundred percent","to divide into ten equal parts"]
},
"或者":
{"simp":"或者",
"trad":"或者",
"pinyin":"huò zhě",
"def": ["or","possibly","maybe","perhaps"]
},
"愿望":
{"simp":"愿望",
"trad":"願望",
"pinyin":"yuàn wàng",
"def": ["desire","wish"]
},
"许":
{"simp":"许",
"trad":"許",
"pinyin":"xǔ",
"def": ["to allow","to permit","to promise","to praise","somewhat","perhaps"]
},
"少":
{"simp":"少",
"trad":"少",
"pinyin":"shào",
"def": ["young"]
},
"正中":
{"simp":"正中",
"trad":"正中",
"pinyin":"zhèng zhōng",
"def": ["middle","center","right in the middle or center","nub"]
},
"越陷越深":
{"simp":"越陷越深",
"trad":"越陷越深",
"pinyin":"yuè xiàn yuè shēn",
"def": ["to fall deeper and deeper (in debt, in love etc)"]
},
"报":
{"simp":"报",
"trad":"報",
"pinyin":"bào",
"def": ["to announce","to inform","report","newspaper","recompense","revenge","CL:份[fen4],張|张[zhang1]"]
},
"盏":
{"simp":"盏",
"trad":"盞",
"pinyin":"zhǎn",
"def": ["a small cup","classifier for lamps"]
},
"知青":
{"simp":"知青",
"trad":"知青",
"pinyin":"zhī qīng",
"def": ["educated youth (sent to work in farms during the Cultural Revolution), abbr. for 知識青年|知识青年[zhi1 shi5 qing1 nian2]"]
},
"跑":
{"simp":"跑",
"trad":"跑",
"pinyin":"pǎo",
"def": ["to run","to run away","to escape","to run around (on errands etc)","(of a gas or liquid) to leak or evaporate","(verb complement) away","off"]
},
"用":
{"simp":"用",
"trad":"用",
"pinyin":"yòng",
"def": ["to use","to employ","to have to","to eat or drink","expense or outlay","usefulness","hence","therefore"]
},
"燃烧":
{"simp":"燃烧",
"trad":"燃燒",
"pinyin":"rán shāo",
"def": ["to ignite","to combust","to burn","combustion","flaming"]
},
"容":
{"simp":"容",
"trad":"容",
"pinyin":"róng",
"def": ["to hold","to contain","to allow","to tolerate","appearance","look","countenance"]
},
"语言":
{"simp":"语言",
"trad":"語言",
"pinyin":"yǔ yán",
"def": ["language","CL:門|门[men2],種|种[zhong3]"]
},
"重力":
{"simp":"重力",
"trad":"重力",
"pinyin":"zhòng lì",
"def": ["gravity"]
},
"容易":
{"simp":"容易",
"trad":"容易",
"pinyin":"róng yì",
"def": ["easy","likely","liable (to)"]
},
"过":
{"simp":"过",
"trad":"過",
"pinyin":"guo",
"def": ["(experienced action marker)"]
},
"使":
{"simp":"使",
"trad":"使",
"pinyin":"shǐ",
"def": ["to make","to cause","to enable","to use","to employ","to send","to instruct sb to do sth","envoy","messenger"]
},
"微":
{"simp":"微",
"trad":"微",
"pinyin":"wēi",
"def": ["tiny","miniature","slightly","profound","abtruse","to decline","one millionth part of","micro-","Taiwan pr. [wei2]"]
},
"极端分子":
{"simp":"极端分子",
"trad":"極端份子",
"pinyin":"jí duān fèn zǐ",
"def": ["extremist"]
},
"讲":
{"simp":"讲",
"trad":"講",
"pinyin":"jiǎng",
"def": ["to speak","to explain","to negotiate","to emphasize","to be particular about","as far as sth is concerned","speech","lecture"]
},
"恶梦":
{"simp":"恶梦",
"trad":"惡夢",
"pinyin":"è mèng",
"def": ["nightmare"]
},
"转动":
{"simp":"转动",
"trad":"轉動",
"pinyin":"zhuàn dòng",
"def": ["to rotate (about an axis)","to revolve","to turn","to move in a circle","to gyrate"]
},
"氢原子核":
{"simp":"氢原子核",
"trad":"氫原子核",
"pinyin":"qīng yuán zǐ hé",
"def": ["hydrogen nucleus"]
},
"复印":
{"simp":"复印",
"trad":"複印",
"pinyin":"fù yìn",
"def": ["to photocopy","to duplicate a document"]
},
"捐助":
{"simp":"捐助",
"trad":"捐助",
"pinyin":"juān zhù",
"def": ["to donate","to offer (aid)","contribution","donation"]
},
"生机":
{"simp":"生机",
"trad":"生機",
"pinyin":"shēng jī",
"def": ["opportunity to live","to reprieve from death","life force","vitality"]
},
"哦":
{"simp":"哦",
"trad":"哦",
"pinyin":"o",
"def": ["sentence-final particle that conveys informality, warmth, friendliness or intimacy","may also indicate that one is stating a fact that the other person is not aware of"]
},
"常常":
{"simp":"常常",
"trad":"常常",
"pinyin":"cháng cháng",
"def": ["frequently","often"]
},
"样子":
{"simp":"样子",
"trad":"樣子",
"pinyin":"yàng zi",
"def": ["appearance","manner","pattern","model"]
},
"隆隆":
{"simp":"隆隆",
"trad":"隆隆",
"pinyin":"lóng lóng",
"def": ["rumble"]
},
"射手":
{"simp":"射手",
"trad":"射手",
"pinyin":"shè shǒu",
"def": ["archer","shooter","marksman","(football etc) striker"]
},
"分外":
{"simp":"分外",
"trad":"分外",
"pinyin":"fèn wài",
"def": ["exceptionally","not one's responsibility or job"]
},
"分别":
{"simp":"分别",
"trad":"分別",
"pinyin":"fēn bié",
"def": ["to part or leave each other","to distinguish","difference","in different ways","differently","separately or individually"]
},
"占领":
{"simp":"占领",
"trad":"佔領",
"pinyin":"zhàn lǐng",
"def": ["to occupy (a territory)","to hold"]
},
"试验":
{"simp":"试验",
"trad":"試驗",
"pinyin":"shì yàn",
"def": ["experiment","test","CL:次[ci4],個|个[ge4]","to experiment","experimental"]
},
"血肉":
{"simp":"血肉",
"trad":"血肉",
"pinyin":"xuè ròu",
"def": ["flesh"]
},
"树":
{"simp":"树",
"trad":"樹",
"pinyin":"shù",
"def": ["tree","CL:棵[ke1]","to cultivate","to set up"]
},
"执行":
{"simp":"执行",
"trad":"執行",
"pinyin":"zhí xíng",
"def": ["to implement","to carry out","to execute","to run"]
},
"冷静":
{"simp":"冷静",
"trad":"冷靜",
"pinyin":"lěng jìng",
"def": ["calm","cool-headed"]
},
"吃水":
{"simp":"吃水",
"trad":"吃水",
"pinyin":"chī shuǐ",
"def": ["drinking water","to obtain water (for daily needs)","to absorb water","draft (of ship)"]
},
"数学模型":
{"simp":"数学模型",
"trad":"數學模型",
"pinyin":"shù xué mó xíng",
"def": ["mathematical model"]
},
"演变":
{"simp":"演变",
"trad":"演變",
"pinyin":"yǎn biàn",
"def": ["to develop","to evolve","development","evolution"]
},
"观察哨":
{"simp":"观察哨",
"trad":"觀察哨",
"pinyin":"guān chá shào",
"def": ["sentry post"]
},
"冲出":
{"simp":"冲出",
"trad":"衝出",
"pinyin":"chōng chū",
"def": ["to rush out"]
},
"悬浮":
{"simp":"悬浮",
"trad":"懸浮",
"pinyin":"xuán fú",
"def": ["to float (in the air etc)","suspension"]
},
"憎恨":
{"simp":"憎恨",
"trad":"憎恨",
"pinyin":"zēng hèn",
"def": ["to detest","hatred"]
},
"遇害":
{"simp":"遇害",
"trad":"遇害",
"pinyin":"yù hài",
"def": ["to be murdered"]
},
"海岸":
{"simp":"海岸",
"trad":"海岸",
"pinyin":"hǎi àn",
"def": ["coastal","seacoast"]
},
"狂人":
{"simp":"狂人",
"trad":"狂人",
"pinyin":"kuáng rén",
"def": ["madman"]
},
"挥手":
{"simp":"挥手",
"trad":"揮手",
"pinyin":"huī shǒu",
"def": ["to wave (one's hand)"]
},
"提要":
{"simp":"提要",
"trad":"提要",
"pinyin":"tí yào",
"def": ["summary","abstract"]
},
"故事":
{"simp":"故事",
"trad":"故事",
"pinyin":"gù shi",
"def": ["narrative","story","tale"]
},
"灭绝":
{"simp":"灭绝",
"trad":"滅絕",
"pinyin":"miè jué",
"def": ["to extinguish","to become extinct","to die out"]
},
"成为":
{"simp":"成为",
"trad":"成為",
"pinyin":"chéng wéi",
"def": ["to become","to turn into"]
},
"隐没":
{"simp":"隐没",
"trad":"隱沒",
"pinyin":"yǐn mò",
"def": ["to vanish gradually","to disappear","to fade out"]
},
"沿岸":
{"simp":"沿岸",
"trad":"沿岸",
"pinyin":"yán àn",
"def": ["coastal area","littoral or riparian"]
},
"有意义":
{"simp":"有意义",
"trad":"有意義",
"pinyin":"yǒu yì yì",
"def": ["to make sense","to have meaning","to have significance","meaningful","significant","worthwhile","important","interesting"]
},
"古兰经":
{"simp":"古兰经",
"trad":"古蘭經",
"pinyin":"Gǔ lán jīng",
"def": ["Koran (Islamic scripture)","Quran"]
},
"成果":
{"simp":"成果",
"trad":"成果",
"pinyin":"chéng guǒ",
"def": ["result","achievement","gain","profit","CL:個|个[ge4]"]
},
"理由":
{"simp":"理由",
"trad":"理由",
"pinyin":"lǐ yóu",
"def": ["reason","grounds","justification","CL:個|个[ge4]"]
},
"四下":
{"simp":"四下",
"trad":"四下",
"pinyin":"sì xià",
"def": ["everywhere"]
},
"水电站":
{"simp":"水电站",
"trad":"水電站",
"pinyin":"shuǐ diàn zhàn",
"def": ["hydroelectric power plant"]
},
"站稳":
{"simp":"站稳",
"trad":"站穩",
"pinyin":"zhàn wěn",
"def": ["to stand firm"]
},
"漏斗":
{"simp":"漏斗",
"trad":"漏斗",
"pinyin":"lòu dǒu",
"def": ["funnel"]
},
"台风":
{"simp":"台风",
"trad":"颱風",
"pinyin":"tái fēng",
"def": ["typhoon"]
},
"仍然":
{"simp":"仍然",
"trad":"仍然",
"pinyin":"réng rán",
"def": ["still","yet"]
},
"陕西":
{"simp":"陕西",
"trad":"陝西",
"pinyin":"Shǎn xī",
"def": ["Shaanxi province (Shensi) in northwest China, abbr. 陝|陕[Shan3] or 秦[Qin2], capital Xi'an 西安[Xi1 an1]"]
},
"虫子":
{"simp":"虫子",
"trad":"蟲子",
"pinyin":"chóng zi",
"def": ["insect","bug","worm","CL:條|条[tiao2],隻|只[zhi1]"]
},
"只要":
{"simp":"只要",
"trad":"只要",
"pinyin":"zhǐ yào",
"def": ["if only","so long as"]
},
"一生":
{"simp":"一生",
"trad":"一生",
"pinyin":"yī shēng",
"def": ["all one's life","throughout one's life"]
},
"红":
{"simp":"红",
"trad":"紅",
"pinyin":"hóng",
"def": ["red","popular","revolutionary","bonus"]
},
"较":
{"simp":"较",
"trad":"較",
"pinyin":"jiào",
"def": ["to compare","to dispute","compared to","(before adj.) relatively","comparatively","rather","also pr. [jiao3]"]
},
"牛仔":
{"simp":"牛仔",
"trad":"牛仔",
"pinyin":"niú zǎi",
"def": ["cowboy"]
},
"她们":
{"simp":"她们",
"trad":"她們",
"pinyin":"tā men",
"def": ["they","them (for females)"]
},
"外星":
{"simp":"外星",
"trad":"外星",
"pinyin":"wài xīng",
"def": ["alien","extraterrestrial"]
},
"索然":
{"simp":"索然",
"trad":"索然",
"pinyin":"suǒ rán",
"def": ["dull","dry"]
},
"岸":
{"simp":"岸",
"trad":"岸",
"pinyin":"àn",
"def": ["bank; shore; beach; coast","CL:個|个[ge4]"]
},
"轻伤":
{"simp":"轻伤",
"trad":"輕傷",
"pinyin":"qīng shāng",
"def": ["lightly wounded","minor injuries"]
},
"正是":
{"simp":"正是",
"trad":"正是",
"pinyin":"zhèng shì",
"def": ["(emphasizes that sth is precisely or exactly as stated)","precisely","exactly","even","if","just like","in the same way as"]
},
"谈话":
{"simp":"谈话",
"trad":"談話",
"pinyin":"tán huà",
"def": ["to talk (with sb)","to have a conversation","talk","conversation","CL:次[ci4]"]
},
"按":
{"simp":"按",
"trad":"按",
"pinyin":"àn",
"def": ["to press","to push","to leave aside or shelve","to control","to restrain","to keep one's hand on","to check or refer to","according to","in the light of","(of an editor or author) to make a comment"]
},
"貌似":
{"simp":"貌似",
"trad":"貌似",
"pinyin":"mào sì",
"def": ["to appear to be","to seem as if"]
},
"监听":
{"simp":"监听",
"trad":"監聽",
"pinyin":"jiān tīng",
"def": ["to monitor","to listen in","to eavesdrop"]
},
"不可":
{"simp":"不可",
"trad":"不可",
"pinyin":"bù kě",
"def": ["cannot","should not","must not"]
},
"收到":
{"simp":"收到",
"trad":"收到",
"pinyin":"shōu dào",
"def": ["to receive"]
},
"女人":
{"simp":"女人",
"trad":"女人",
"pinyin":"nǔ: ren",
"def": ["wife"]
},
"小时":
{"simp":"小时",
"trad":"小時",
"pinyin":"xiǎo shí",
"def": ["hour","CL:個|个[ge4]"]
},
"固":
{"simp":"固",
"trad":"固",
"pinyin":"gù",
"def": ["hard","strong","solid","sure","assuredly","undoubtedly","of course","indeed","admittedly"]
},
"汪":
{"simp":"汪",
"trad":"汪",
"pinyin":"wāng",
"def": ["expanse of water","ooze","(onom.) bark","classifier for liquids: pool, puddle"]
},
"充满":
{"simp":"充满",
"trad":"充滿",
"pinyin":"chōng mǎn",
"def": ["full of","brimming with","very full","permeated"]
},
"掌握":
{"simp":"掌握",
"trad":"掌握",
"pinyin":"zhǎng wò",
"def": ["to grasp (often fig.)","to control","to seize (initiative, opportunity, destiny)","to master","to know well","to understand sth well and know how to use it","fluency"]
},
"而且":
{"simp":"而且",
"trad":"而且",
"pinyin":"ér qiě",
"def": ["(not only ...) but also","moreover","in addition","furthermore"]
},
"其实":
{"simp":"其实",
"trad":"其實",
"pinyin":"qí shí",
"def": ["actually","in fact","really"]
},
"未经":
{"simp":"未经",
"trad":"未經",
"pinyin":"wèi jīng",
"def": ["not having undergone","without (having gone though a certain process)"]
},
"毁灭性":
{"simp":"毁灭性",
"trad":"毀滅性",
"pinyin":"huǐ miè xìng",
"def": ["destructive","devastating"]
},
"推卸":
{"simp":"推卸",
"trad":"推卸",
"pinyin":"tuī xiè",
"def": ["to avoid (esp. responsibility)","to shift (the blame)","to pass the buck"]
},
"哨兵":
{"simp":"哨兵",
"trad":"哨兵",
"pinyin":"shào bīng",
"def": ["sentinel"]
},
"会场":
{"simp":"会场",
"trad":"會場",
"pinyin":"huì chǎng",
"def": ["meeting place","place where people gather","CL:個|个[ge4]"]
},
"祖父":
{"simp":"祖父",
"trad":"祖父",
"pinyin":"zǔ fù",
"def": ["father's father","paternal grandfather"]
},
"核弹":
{"simp":"核弹",
"trad":"核彈",
"pinyin":"hé dàn",
"def": ["nuclear warhead"]
},
"支书":
{"simp":"支书",
"trad":"支書",
"pinyin":"zhī shū",
"def": ["branch secretary","secretary of a branch of the Communist Party or the Communist Youth League","abbr. for 支部書記|支部书记"]
},
"日":
{"simp":"日",
"trad":"日",
"pinyin":"rì",
"def": ["sun","day","date, day of the month"]
},
"马":
{"simp":"马",
"trad":"馬",
"pinyin":"mǎ",
"def": ["horse","CL:匹[pi3]","horse or cavalry piece in Chinese chess","knight in Western chess"]
},
"大火":
{"simp":"大火",
"trad":"大火",
"pinyin":"dà huǒ",
"def": ["conflagration","large fire","CL:場|场[chang2]"]
},
"头皮":
{"simp":"头皮",
"trad":"頭皮",
"pinyin":"tóu pí",
"def": ["scalp"]
},
"计算机":
{"simp":"计算机",
"trad":"計算機",
"pinyin":"jì suàn jī",
"def": ["computer","(Tw) calculator","CL:臺|台[tai2]"]
},
"切":
{"simp":"切",
"trad":"切",
"pinyin":"qiè",
"def": ["definitely","absolutely (not)","(scoffing or dismissive interjection) Yeah, right.","Tut!","to grind","close to","eager","to correspond to","see also 反切[fan3 qie4]"]
},
"误导":
{"simp":"误导",
"trad":"誤導",
"pinyin":"wù dǎo",
"def": ["to mislead","to misguide","misleading"]
},
"生成":
{"simp":"生成",
"trad":"生成",
"pinyin":"shēng chéng",
"def": ["to generate","to produce","generated","produced"]
},
"响":
{"simp":"响",
"trad":"響",
"pinyin":"xiǎng",
"def": ["echo","sound","noise","to make a sound","to sound","to ring","loud","classifier for noises"]
},
"枫":
{"simp":"枫",
"trad":"楓",
"pinyin":"fēng",
"def": ["maple (genus Acer)"]
},
"重":
{"simp":"重",
"trad":"重",
"pinyin":"zhòng",
"def": ["heavy","serious","to attach importance to"]
},
"除夕":
{"simp":"除夕",
"trad":"除夕",
"pinyin":"Chú xī",
"def": ["lunar New Year's Eve"]
},
"简陋":
{"simp":"简陋",
"trad":"簡陋",
"pinyin":"jiǎn lòu",
"def": ["simple and crude"]
},
"瞄准":
{"simp":"瞄准",
"trad":"瞄準",
"pinyin":"miáo zhǔn",
"def": ["to take aim at","to target"]
},
"凄婉":
{"simp":"凄婉",
"trad":"淒婉",
"pinyin":"qī wǎn",
"def": ["melancholy","moving and sad","sweet and piteous"]
},
"细线":
{"simp":"细线",
"trad":"細線",
"pinyin":"xì xiàn",
"def": ["string","thread"]
},
"暮色":
{"simp":"暮色",
"trad":"暮色",
"pinyin":"mù sè",
"def": ["twilight"]
},
"然后":
{"simp":"然后",
"trad":"然後",
"pinyin":"rán hòu",
"def": ["after","then (afterwards)","after that","afterwards"]
},
"和合":
{"simp":"和合",
"trad":"和合",
"pinyin":"hé hé",
"def": ["harmony"]
},
"仿佛":
{"simp":"仿佛",
"trad":"彷彿",
"pinyin":"fǎng fú",
"def": ["to seem","as if","alike","similar"]
},
"告":
{"simp":"告",
"trad":"告",
"pinyin":"gào",
"def": ["to say","to tell","to announce","to report","to denounce","to file a lawsuit","to sue"]
},
"毁掉":
{"simp":"毁掉",
"trad":"毀掉",
"pinyin":"huǐ diào",
"def": ["to destroy"]
},
"环保主义者":
{"simp":"环保主义者",
"trad":"環保主義者",
"pinyin":"huán bǎo zhǔ yì zhě",
"def": ["environmentalist"]
},
"总算":
{"simp":"总算",
"trad":"總算",
"pinyin":"zǒng suàn",
"def": ["at long last","finally","on the whole"]
},
"联合国":
{"simp":"联合国",
"trad":"聯合國",
"pinyin":"Lián hé guó",
"def": ["United Nations"]
},
"证据":
{"simp":"证据",
"trad":"證據",
"pinyin":"zhèng jù",
"def": ["evidence","proof","testimony"]
},
"油轮":
{"simp":"油轮",
"trad":"油輪",
"pinyin":"yóu lún",
"def": ["tanker (ship)","CL:艘[sou1]"]
},
"表情":
{"simp":"表情",
"trad":"表情",
"pinyin":"biǎo qíng",
"def": ["(facial) expression","to express one's feelings"]
},
"行为":
{"simp":"行为",
"trad":"行為",
"pinyin":"xíng wéi",
"def": ["action","conduct","behavior","activity"]
},
"尽":
{"simp":"尽",
"trad":"盡",
"pinyin":"jìn",
"def": ["to use up","to exhaust","to end","to finish","to the utmost","exhausted","finished","to the limit (of sth)","all","entirely"]
},
"形势":
{"simp":"形势",
"trad":"形勢",
"pinyin":"xíng shì",
"def": ["circumstances","situation","terrain","CL:個|个[ge4]"]
},
"相连":
{"simp":"相连",
"trad":"相連",
"pinyin":"xiāng lián",
"def": ["to link","to join","link","connection"]
},
"拒绝":
{"simp":"拒绝",
"trad":"拒絕",
"pinyin":"jù jué",
"def": ["to refuse","to decline","to reject"]
},
"采":
{"simp":"采",
"trad":"采",
"pinyin":"cài",
"def": ["allotment to a feudal noble"]
},
"高度":
{"simp":"高度",
"trad":"高度",
"pinyin":"gāo dù",
"def": ["height","altitude","elevation","high degree","highly","CL:個|个[ge4]"]
},
"动作":
{"simp":"动作",
"trad":"動作",
"pinyin":"dòng zuò",
"def": ["movement","motion","action","CL:個|个[ge4]"]
},
"与会":
{"simp":"与会",
"trad":"與會",
"pinyin":"yù huì",
"def": ["to participate in a meeting"]
},
"来得":
{"simp":"来得",
"trad":"來得",
"pinyin":"lái de",
"def": ["to emerge (from a comparison)","to come out as","to be competent or equal to"]
},
"死死":
{"simp":"死死",
"trad":"死死",
"pinyin":"sǐ sǐ",
"def": ["rigid","unwavering","unbendable","firm (hold on sth)","tenacious"]
},
"沿着":
{"simp":"沿着",
"trad":"沿著",
"pinyin":"yán zhe",
"def": ["to go along","to follow"]
},
"调":
{"simp":"调",
"trad":"調",
"pinyin":"tiáo",
"def": ["to harmonize","to reconcile","to blend","to suit well","to adjust","to regulate","to season (food)","to provoke","to incite"]
},
"动":
{"simp":"动",
"trad":"動",
"pinyin":"dòng",
"def": ["(of sth) to move","to set in movement","to displace","to touch","to make use of","to stir (emotions)","to alter","abbr. for 動詞|动词[dong4 ci2], verb"]
},
"大多":
{"simp":"大多",
"trad":"大多",
"pinyin":"dà duō",
"def": ["for the most part","many","most","the greater part","mostly"]
},
"心悸":
{"simp":"心悸",
"trad":"心悸",
"pinyin":"xīn jì",
"def": ["palpitation"]
},
"初露":
{"simp":"初露",
"trad":"初露",
"pinyin":"chū lù",
"def": ["first sign (of budding talent)"]
},
"舌头":
{"simp":"舌头",
"trad":"舌頭",
"pinyin":"shé tou",
"def": ["tongue","CL:個|个[ge4]","enemy soldier captured for the purpose of extracting information"]
},
"顺着":
{"simp":"顺着",
"trad":"順著",
"pinyin":"shùn zhe",
"def": ["to follow","following","along"]
},
"挽救":
{"simp":"挽救",
"trad":"挽救",
"pinyin":"wǎn jiù",
"def": ["to save","to remedy","to rescue"]
},
"我":
{"simp":"我",
"trad":"我",
"pinyin":"wǒ",
"def": ["I","me","my"]
},
"农民":
{"simp":"农民",
"trad":"農民",
"pinyin":"nóng mín",
"def": ["peasant","farmer","CL:個|个[ge4]"]
},
"近":
{"simp":"近",
"trad":"近",
"pinyin":"jìn",
"def": ["near","close to","approximately"]
},
"笑容":
{"simp":"笑容",
"trad":"笑容",
"pinyin":"xiào róng",
"def": ["smile","smiling expression","CL:副[fu4]"]
},
"所闻":
{"simp":"所闻",
"trad":"所聞",
"pinyin":"suǒ wén",
"def": ["heard","what one hears"]
},
"引向":
{"simp":"引向",
"trad":"引向",
"pinyin":"yǐn xiàng",
"def": ["to lead to","to draw to","to steer towards"]
},
"剔除":
{"simp":"剔除",
"trad":"剔除",
"pinyin":"tī chú",
"def": ["to reject","to discard","to get rid of"]
},
"物质":
{"simp":"物质",
"trad":"物質",
"pinyin":"wù zhì",
"def": ["matter","substance","material","materialistic","CL:個|个[ge4]"]
},
"翻":
{"simp":"翻",
"trad":"飜",
"pinyin":"fān",
"def": ["variant of 翻[fan1]"]
},
"眼前":
{"simp":"眼前",
"trad":"眼前",
"pinyin":"yǎn qián",
"def": ["before one's eyes","now","at present"]
},
"丢":
{"simp":"丢",
"trad":"丟",
"pinyin":"diū",
"def": ["to lose","to put aside","to throw"]
},
"落":
{"simp":"落",
"trad":"落",
"pinyin":"luò",
"def": ["to fall or drop","(of the sun) to set","(of a tide) to go out","to lower","to decline or sink","to lag or fall behind","to fall onto","to rest with","to get or receive","to write down","whereabouts","settlement"]
},
"残骸":
{"simp":"残骸",
"trad":"殘骸",
"pinyin":"cán hái",
"def": ["remains","wreckage"]
},
"星际":
{"simp":"星际",
"trad":"星際",
"pinyin":"xīng jì",
"def": ["interstellar","interplanetary"]
},
"具体":
{"simp":"具体",
"trad":"具體",
"pinyin":"jù tǐ",
"def": ["concrete","definite","specific"]
},
"身体":
{"simp":"身体",
"trad":"身體",
"pinyin":"shēn tǐ",
"def": ["the body","one's health","CL:具[ju4],個|个[ge4]","in person"]
},
"丢失":
{"simp":"丢失",
"trad":"丟失",
"pinyin":"diū shī",
"def": ["to lose","lost"]
},
"只有":
{"simp":"只有",
"trad":"只有",
"pinyin":"zhǐ yǒu",
"def": ["only have ...","there is only ...","(used in combination with 才[cai2]) it is only if one ... (that one can ...) (Example: 只有通過治療才能痊愈|只有通过治疗才能痊愈[zhi3 you3 tong1 guo4 zhi4 liao2 cai2 neng2 quan2 yu4] \"the only way to cure it is with therapy\")","it is only ... (who ...) (Example: 只有男性才有此需要[zhi3 you3 nan2 xing4 cai2 you3 ci3 xu1 yao4] \"only men would have such a requirement\")","(used to indicate that one has no alternative) one can only (do a certain thing) (Example: 只有屈服[zhi3 you3 qu1 fu2] \"the only thing you can do is give in\")"]
},
"饭桌":
{"simp":"饭桌",
"trad":"飯桌",
"pinyin":"fàn zhuō",
"def": ["dining table"]
},
"一手":
{"simp":"一手",
"trad":"一手",
"pinyin":"yī shǒu",
"def": ["a skill","mastery of a trade","by oneself","without outside help"]
},
"各国":
{"simp":"各国",
"trad":"各國",
"pinyin":"gè guó",
"def": ["each country","every country","various countries"]
},
"警惕":
{"simp":"警惕",
"trad":"警惕",
"pinyin":"jǐng tì",
"def": ["to be on the alert","vigilant","alert","on guard","to warn"]
},
"百家":
{"simp":"百家",
"trad":"百家",
"pinyin":"bǎi jiā",
"def": ["many schools of thought","many people or households"]
},
"一半":
{"simp":"一半",
"trad":"一半",
"pinyin":"yī bàn",
"def": ["half"]
},
"胸前":
{"simp":"胸前",
"trad":"胸前",
"pinyin":"xiōng qián",
"def": ["(on the) chest","bosom"]
},
"过来":
{"simp":"过来",
"trad":"過來",
"pinyin":"guò lai",
"def": ["see 過來|过来[guo4 lai2]"]
},
"同":
{"simp":"同",
"trad":"衕",
"pinyin":"tòng",
"def": ["see 衚衕|胡同[hu2 tong4]"]
},
"吃":
{"simp":"吃",
"trad":"喫",
"pinyin":"chī",
"def": ["variant of 吃[chi1]"]
},
"史":
{"simp":"史",
"trad":"史",
"pinyin":"shǐ",
"def": ["history","annals","title of an official historian in ancient China"]
},
"流产":
{"simp":"流产",
"trad":"流產",
"pinyin":"liú chǎn",
"def": ["to have a miscarriage","miscarriage","to fail","to fall through"]
},
"柔软":
{"simp":"柔软",
"trad":"柔軟",
"pinyin":"róu ruǎn",
"def": ["soft"]
},
"东面":
{"simp":"东面",
"trad":"東面",
"pinyin":"dōng miàn",
"def": ["east side (of sth)"]
},
"忘却":
{"simp":"忘却",
"trad":"忘卻",
"pinyin":"wàng què",
"def": ["to forget"]
},
"当量":
{"simp":"当量",
"trad":"當量",
"pinyin":"dāng liàng",
"def": ["equivalent","yield"]
},
"点燃":
{"simp":"点燃",
"trad":"點燃",
"pinyin":"diǎn rán",
"def": ["to ignite","to set on fire","aflame"]
},
"脖":
{"simp":"脖",
"trad":"脖",
"pinyin":"bó",
"def": ["neck"]
},
"男的":
{"simp":"男的",
"trad":"男的",
"pinyin":"nán de",
"def": ["man"]
},
"打成一片":
{"simp":"打成一片",
"trad":"打成一片",
"pinyin":"dǎ chéng yī piàn",
"def": ["to merge","to integrate","to become as one","to unify together"]
},
"驶":
{"simp":"驶",
"trad":"駛",
"pinyin":"shǐ",
"def": ["(of a vehicle, horse etc) to go fast; to speed","(of a vehicle) to run; to go","(of a boat) to sail"]
},
"难能可贵":
{"simp":"难能可贵",
"trad":"難能可貴",
"pinyin":"nán néng kě guì",
"def": ["rare and precious","valuable","remarkable"]
},
"不可思议":
{"simp":"不可思议",
"trad":"不可思議",
"pinyin":"bù kě sī yì",
"def": ["inconceivable (idiom); unimaginable","unfathomable"]
},
"闲逛":
{"simp":"闲逛",
"trad":"閑逛",
"pinyin":"xián guàng",
"def": ["to stroll"]
},
"发":
{"simp":"发",
"trad":"髮",
"pinyin":"fà",
"def": ["hair","Taiwan pr. [fa3]"]
},
"眼睛":
{"simp":"眼睛",
"trad":"眼睛",
"pinyin":"yǎn jing",
"def": ["eye","CL:隻|只[zhi1],雙|双[shuang1]"]
},
"晶莹":
{"simp":"晶莹",
"trad":"晶瑩",
"pinyin":"jīng yíng",
"def": ["sparkling and translucent"]
},
"看重":
{"simp":"看重",
"trad":"看重",
"pinyin":"kàn zhòng",
"def": ["to regard as important","to care about"]
},
"口":
{"simp":"口",
"trad":"口",
"pinyin":"kǒu",
"def": ["mouth","classifier for things with mouths (people, domestic animals, cannons, wells etc)","classifier for bites or mouthfuls"]
},
"涛":
{"simp":"涛",
"trad":"濤",
"pinyin":"tāo",
"def": ["big wave","Taiwan pr. [tao2]"]
},
"倒":
{"simp":"倒",
"trad":"倒",
"pinyin":"dào",
"def": ["to place upside down","to invert","to pour","to throw out","to move backwards","however","actually","as a matter of fact","contrary to expectation"]
},
"单独":
{"simp":"单独",
"trad":"單獨",
"pinyin":"dān dú",
"def": ["alone","by oneself","on one's own"]
},
"苦难":
{"simp":"苦难",
"trad":"苦難",
"pinyin":"kǔ nàn",
"def": ["suffering"]
},
"都":
{"simp":"都",
"trad":"都",
"pinyin":"dū",
"def": ["capital city","metropolis"]
},
"铰":
{"simp":"铰",
"trad":"鉸",
"pinyin":"jiǎo",
"def": ["scissors","to cut (with scissors)"]
},
"发烫":
{"simp":"发烫",
"trad":"發燙",
"pinyin":"fā tàng",
"def": ["burning hot"]
},
"灾难":
{"simp":"灾难",
"trad":"災難",
"pinyin":"zāi nàn",
"def": ["disaster","catastrophe"]
},
"有力":
{"simp":"有力",
"trad":"有力",
"pinyin":"yǒu lì",
"def": ["powerful","forceful","vigorous"]
},
"手枪":
{"simp":"手枪",
"trad":"手槍",
"pinyin":"shǒu qiāng",
"def": ["pistol","CL:把[ba3]"]
},
"纷纷":
{"simp":"纷纷",
"trad":"紛紛",
"pinyin":"fēn fēn",
"def": ["one after another","in succession","one by one","continuously","diverse","in profusion","numerous and confused","pell-mell"]
},
"逃脱":
{"simp":"逃脱",
"trad":"逃脫",
"pinyin":"táo tuō",
"def": ["to run away","to escape"]
},
"滑":
{"simp":"滑",
"trad":"滑",
"pinyin":"huá",
"def": ["to slip; to slide","slippery; smooth","sly; slippery; not to be trusted"]
},
"出身":
{"simp":"出身",
"trad":"出身",
"pinyin":"chū shēn",
"def": ["to be born of","to come from","family background","class origin"]
},
"网":
{"simp":"网",
"trad":"網",
"pinyin":"wǎng",
"def": ["net","network"]
},
"宗教团":
{"simp":"宗教团",
"trad":"宗教團",
"pinyin":"zōng jiào tuán",
"def": ["religious order","religious grouping"]
},
"躯体":
{"simp":"躯体",
"trad":"軀體",
"pinyin":"qū tǐ",
"def": ["body","carcass"]
},
"暴政":
{"simp":"暴政",
"trad":"暴政",
"pinyin":"bào zhèng",
"def": ["tyranny","despotic rule"]
},
"抽搐":
{"simp":"抽搐",
"trad":"抽搐",
"pinyin":"chōu chù",
"def": ["to twitch"]
},
"面前":
{"simp":"面前",
"trad":"面前",
"pinyin":"miàn qián",
"def": ["in front of","facing","(in the) presence (of)"]
},
"双眼":
{"simp":"双眼",
"trad":"雙眼",
"pinyin":"shuāng yǎn",
"def": ["the two eyes"]
},
"从来":
{"simp":"从来",
"trad":"從來",
"pinyin":"cóng lái",
"def": ["always","at all times","never (if used in negative sentence)"]
},
"岁":
{"simp":"岁",
"trad":"歲",
"pinyin":"suì",
"def": ["classifier for years (of age)","year","year (of crop harvests)"]
},
"多年":
{"simp":"多年",
"trad":"多年",
"pinyin":"duō nián",
"def": ["many years","for many years","longstanding"]
},
"口袋":
{"simp":"口袋",
"trad":"口袋",
"pinyin":"kǒu dài",
"def": ["pocket","bag","sack","CL:個|个[ge4]"]
},
"机制":
{"simp":"机制",
"trad":"機製",
"pinyin":"jī zhì",
"def": ["machine-processed; machine-made"]
},
"几个":
{"simp":"几个",
"trad":"幾個",
"pinyin":"jǐ ge",
"def": ["a few","several","how many"]
},
"词":
{"simp":"词",
"trad":"詞",
"pinyin":"cí",
"def": ["word","statement","speech","lyrics","CL:組|组[zu3],個|个[ge4]","a form of lyric poetry, flourishing in the Song dynasty 宋朝|宋朝[Song4 chao2]","CL:首[shou3]"]
},
"乏":
{"simp":"乏",
"trad":"乏",
"pinyin":"fá",
"def": ["short of","tired"]
},
"靠边":
{"simp":"靠边",
"trad":"靠邊",
"pinyin":"kào biān",
"def": ["to keep to the side","to pull over","move aside!"]
},
"心头":
{"simp":"心头",
"trad":"心頭",
"pinyin":"xīn tóu",
"def": ["heart","thoughts","mind"]
},
"血":
{"simp":"血",
"trad":"血",
"pinyin":"xuè",
"def": ["blood","colloquial pr. [xie3]","CL:滴[di1],片[pian4]"]
},
"科学院":
{"simp":"科学院",
"trad":"科學院",
"pinyin":"kē xué yuàn",
"def": ["academy of sciences","CL:個|个[ge4]"]
},
"个儿":
{"simp":"个儿",
"trad":"個兒",
"pinyin":"gè r5",
"def": ["size","height","stature"]
},
"故障":
{"simp":"故障",
"trad":"故障",
"pinyin":"gù zhàng",
"def": ["malfunction","breakdown","defect","shortcoming","fault","failure","impediment","error","bug (in software)"]
},
"你好":
{"simp":"你好",
"trad":"你好",
"pinyin":"nǐ hǎo",
"def": ["hello","hi"]
},
"微笑":
{"simp":"微笑",
"trad":"微笑",
"pinyin":"wēi xiào",
"def": ["smile","CL:個|个[ge4],絲|丝[si1]","to smile"]
},
"怀里":
{"simp":"怀里",
"trad":"懷裡",
"pinyin":"huái lǐ",
"def": ["embrace","bosom"]
},
"不定":
{"simp":"不定",
"trad":"不定",
"pinyin":"bù dìng",
"def": ["indefinite","indeterminate","(botany) adventitious"]
},
"扑灭":
{"simp":"扑灭",
"trad":"撲滅",
"pinyin":"pū miè",
"def": ["to eradicate","to extinguish"]
},
"一眼":
{"simp":"一眼",
"trad":"一眼",
"pinyin":"yī yǎn",
"def": ["a glance","a quick look","a glimpse"]
},
"大红":
{"simp":"大红",
"trad":"大紅",
"pinyin":"dà hóng",
"def": ["crimson"]
},
"表示":
{"simp":"表示",
"trad":"表示",
"pinyin":"biǎo shì",
"def": ["to express","to show","to say","to state","to indicate","to mean"]
},
"从中":
{"simp":"从中",
"trad":"從中",
"pinyin":"cóng zhōng",
"def": ["from within","therefrom"]
},
"烦":
{"simp":"烦",
"trad":"煩",
"pinyin":"fán",
"def": ["to feel vexed","to bother","to trouble","superfluous and confusing","edgy"]
},
"照":
{"simp":"照",
"trad":"照",
"pinyin":"zhào",
"def": ["according to","in accordance with","to shine","to illuminate","to reflect","to look at (one's reflection)","to take (a photo)","photo","as requested","as before"]
},
"微小":
{"simp":"微小",
"trad":"微小",
"pinyin":"wēi xiǎo",
"def": ["minute (i.e. extremely small)","infinitesimal"]
},
"果断":
{"simp":"果断",
"trad":"果斷",
"pinyin":"guǒ duàn",
"def": ["firm","decisive"]
},
"衣袖":
{"simp":"衣袖",
"trad":"衣袖",
"pinyin":"yī xiù",
"def": ["the sleeve of a garment"]
},
"名誉":
{"simp":"名誉",
"trad":"名譽",
"pinyin":"míng yù",
"def": ["fame","reputation","honor","honorary","emeritus (of retired professor)"]
},
"真心":
{"simp":"真心",
"trad":"真心",
"pinyin":"zhēn xīn",
"def": ["sincere","heartfelt","CL:片[pian4]"]
},
"头骨":
{"simp":"头骨",
"trad":"頭骨",
"pinyin":"tóu gǔ",
"def": ["skull"]
},
"完":
{"simp":"完",
"trad":"完",
"pinyin":"wán",
"def": ["to finish","to be over","whole","complete","entire"]
},
"刃":
{"simp":"刃",
"trad":"刃",
"pinyin":"rèn",
"def": ["edge of blade"]
},
"历程":
{"simp":"历程",
"trad":"歷程",
"pinyin":"lì chéng",
"def": ["course","process"]
},
"呆":
{"simp":"呆",
"trad":"呆",
"pinyin":"dāi",
"def": ["foolish","stupid","expressionless","blank","to stay"]
},
"不规则":
{"simp":"不规则",
"trad":"不規則",
"pinyin":"bù guī zé",
"def": ["irregular"]
},
"超过":
{"simp":"超过",
"trad":"超過",
"pinyin":"chāo guò",
"def": ["to surpass","to exceed","to outstrip"]
},
"盼":
{"simp":"盼",
"trad":"盼",
"pinyin":"pàn",
"def": ["to hope for","to long for","to expect"]
},
"入神":
{"simp":"入神",
"trad":"入神",
"pinyin":"rù shén",
"def": ["to be enthralled","to be entranced"]
},
"武器":
{"simp":"武器",
"trad":"武器",
"pinyin":"wǔ qì",
"def": ["weapon","arms","CL:種|种[zhong3]"]
},
"偷窥":
{"simp":"偷窥",
"trad":"偷窺",
"pinyin":"tōu kuī",
"def": ["to peep","to peek","to act as voyeur"]
},
"外部":
{"simp":"外部",
"trad":"外部",
"pinyin":"wài bù",
"def": ["external part","external"]
},
"泥潭":
{"simp":"泥潭",
"trad":"泥潭",
"pinyin":"ní tán",
"def": ["quagmire"]
},
"耿耿于怀":
{"simp":"耿耿于怀",
"trad":"耿耿於懷",
"pinyin":"gěng gěng yú huái",
"def": ["to take troubles to heart (idiom); brooding"]
},
"平":
{"simp":"平",
"trad":"平",
"pinyin":"píng",
"def": ["flat","level","equal","to tie (make the same score)","to draw (score)","calm","peaceful","abbr. for 平聲|平声[ping2 sheng1]"]
},
"上岸":
{"simp":"上岸",
"trad":"上岸",
"pinyin":"shàng àn",
"def": ["to go ashore","to climb ashore"]
},
"遗产":
{"simp":"遗产",
"trad":"遺產",
"pinyin":"yí chǎn",
"def": ["heritage","legacy","inheritance","bequest","CL:筆|笔[bi3]"]
},
"透过":
{"simp":"透过",
"trad":"透過",
"pinyin":"tòu guò",
"def": ["to pass through","to penetrate","by means of","via"]
},
"到达":
{"simp":"到达",
"trad":"到達",
"pinyin":"dào dá",
"def": ["to reach","to arrive"]
},
"笔":
{"simp":"笔",
"trad":"筆",
"pinyin":"bǐ",
"def": ["pen","pencil","writing brush","to write or compose","the strokes of Chinese characters","classifier for sums of money, deals","CL:支[zhi1],枝[zhi1]"]
},
"婴儿":
{"simp":"婴儿",
"trad":"嬰兒",
"pinyin":"yīng ér",
"def": ["infant","baby","CL:個|个[ge4]","lead (Pb)"]
},
"休息":
{"simp":"休息",
"trad":"休息",
"pinyin":"xiū xi",
"def": ["rest","to rest"]
},
"球体":
{"simp":"球体",
"trad":"球體",
"pinyin":"qiú tǐ",
"def": ["spheroid"]
},
"固然":
{"simp":"固然",
"trad":"固然",
"pinyin":"gù rán",
"def": ["admittedly (it's true that...)"]
},
"震动":
{"simp":"震动",
"trad":"震動",
"pinyin":"zhèn dòng",
"def": ["to shake","to vibrate","to strongly affect","shock","vibration"]
},
"传":
{"simp":"传",
"trad":"傳",
"pinyin":"zhuàn",
"def": ["biography","historical narrative","commentaries","relay station"]
},
"十字丝":
{"simp":"十字丝",
"trad":"十字絲",
"pinyin":"shí zì sī",
"def": ["crosshairs"]
},
"泪":
{"simp":"泪",
"trad":"淚",
"pinyin":"lèi",
"def": ["tears"]
},
"晚上":
{"simp":"晚上",
"trad":"晚上",
"pinyin":"wǎn shang",
"def": ["evening","night","CL:個|个[ge4]","in the evening"]
},
"连绵":
{"simp":"连绵",
"trad":"連綿",
"pinyin":"lián mián",
"def": ["continuous","unbroken","uninterrupted","extending forever into the distance (of mountain range, river etc)"]
},
"痛苦":
{"simp":"痛苦",
"trad":"痛苦",
"pinyin":"tòng kǔ",
"def": ["pain","suffering","painful","CL:個|个[ge4]"]
},
"就绪":
{"simp":"就绪",
"trad":"就緒",
"pinyin":"jiù xù",
"def": ["to be ready","to be in order"]
},
"呈":
{"simp":"呈",
"trad":"呈",
"pinyin":"chéng",
"def": ["to present to a superior","memorial","petition","to present (a certain appearance)","to assume (a shape)","to be (a certain color)"]
},
"成员":
{"simp":"成员",
"trad":"成員",
"pinyin":"chéng yuán",
"def": ["member"]
},
"键盘":
{"simp":"键盘",
"trad":"鍵盤",
"pinyin":"jiàn pán",
"def": ["keyboard"]
},
"红色":
{"simp":"红色",
"trad":"紅色",
"pinyin":"hóng sè",
"def": ["red (color)","revolutionary"]
},
"他妈的":
{"simp":"他妈的",
"trad":"他媽的",
"pinyin":"tā mā de",
"def": ["(taboo curse) damn it!","fucking"]
},
"手指":
{"simp":"手指",
"trad":"手指",
"pinyin":"shǒu zhǐ",
"def": ["finger","CL:個|个[ge4],隻|只[zhi1]"]
},
"预料":
{"simp":"预料",
"trad":"預料",
"pinyin":"yù liào",
"def": ["to forecast","to anticipate","expectation"]
},
"描述":
{"simp":"描述",
"trad":"描述",
"pinyin":"miáo shù",
"def": ["to describe","description"]
},
"悬":
{"simp":"悬",
"trad":"懸",
"pinyin":"xuán",
"def": ["to hang or suspend","to worry","public announcement","unresolved","baseless","without foundation"]
},
"值得":
{"simp":"值得",
"trad":"值得",
"pinyin":"zhí de",
"def": ["to be worth","to deserve"]
},
"位置":
{"simp":"位置",
"trad":"位置",
"pinyin":"wèi zhi",
"def": ["position","place","seat","CL:個|个[ge4]"]
},
"列":
{"simp":"列",
"trad":"列",
"pinyin":"liè",
"def": ["to arrange","to line up","file","series","(in data tables) column","(Tw) row"]
},
"存亡":
{"simp":"存亡",
"trad":"存亡",
"pinyin":"cún wáng",
"def": ["to live or die","to exist or perish"]
},
"命运":
{"simp":"命运",
"trad":"命運",
"pinyin":"mìng yùn",
"def": ["fate","destiny","CL:個|个[ge4]"]
},
"纤细":
{"simp":"纤细",
"trad":"纖細",
"pinyin":"xiān xì",
"def": ["fine","slim","tender"]
},
"按下":
{"simp":"按下",
"trad":"按下",
"pinyin":"àn xià",
"def": ["to press down","to press a button"]
},
"爬":
{"simp":"爬",
"trad":"爬",
"pinyin":"pá",
"def": ["to crawl","to climb","to get up or sit up"]
},
"随即":
{"simp":"随即",
"trad":"隨即",
"pinyin":"suí jí",
"def": ["immediately","presently","following which"]
},
"革新":
{"simp":"革新",
"trad":"革新",
"pinyin":"gé xīn",
"def": ["to innovate","innovation"]
},
"中止":
{"simp":"中止",
"trad":"中止",
"pinyin":"zhōng zhǐ",
"def": ["to cease","to suspend","to break off","to stop","to discontinue"]
},
"改变":
{"simp":"改变",
"trad":"改變",
"pinyin":"gǎi biàn",
"def": ["to change","to alter","to transform"]
},
"废墟":
{"simp":"废墟",
"trad":"廢墟",
"pinyin":"fèi xū",
"def": ["ruins"]
},
"指向":
{"simp":"指向",
"trad":"指向",
"pinyin":"zhǐ xiàng",
"def": ["to point towards","aimed at","facing","the direction indicated"]
},
"占去":
{"simp":"占去",
"trad":"佔去",
"pinyin":"zhàn qù",
"def": ["to take up (one's time etc)","to occupy (one's attention etc)","to account for (a proportion of sth)"]
},
"比如":
{"simp":"比如",
"trad":"比如",
"pinyin":"bǐ rú",
"def": ["for example","for instance","such as"]
},
"多少有些":
{"simp":"多少有些",
"trad":"多少有些",
"pinyin":"duō shǎo yǒu xiē",
"def": ["somewhat","more or less"]
},
"下班":
{"simp":"下班",
"trad":"下班",
"pinyin":"xià bān",
"def": ["to finish work","to get off work"]
},
"说明":
{"simp":"说明",
"trad":"說明",
"pinyin":"shuō míng",
"def": ["to explain","to illustrate","to indicate","to show","to prove","explanation","directions","caption","CL:個|个[ge4]"]
},
"表":
{"simp":"表",
"trad":"錶",
"pinyin":"biǎo",
"def": ["wrist or pocket watch"]
},
"宗教":
{"simp":"宗教",
"trad":"宗教",
"pinyin":"zōng jiào",
"def": ["religion"]
},
"完了":
{"simp":"完了",
"trad":"完了",
"pinyin":"wán le",
"def": ["to be finished","to be done for","ruined","gone to the dogs","oh no"]
},
"异常":
{"simp":"异常",
"trad":"異常",
"pinyin":"yì cháng",
"def": ["exceptional","abnormal","an anomaly"]
},
"纸带":
{"simp":"纸带",
"trad":"紙帶",
"pinyin":"zhǐ dài",
"def": ["paper tape","ticker tape","paper streamer"]
},
"姐":
{"simp":"姐",
"trad":"姐",
"pinyin":"jiě",
"def": ["older sister"]
},
"原位":
{"simp":"原位",
"trad":"原位",
"pinyin":"yuán wèi",
"def": ["original position","(in) the same place","normal position","the place where one currently is","in situ"]
},
"想到":
{"simp":"想到",
"trad":"想到",
"pinyin":"xiǎng dào",
"def": ["to think of","to call to mind","to anticipate"]
},
"粗笨":
{"simp":"粗笨",
"trad":"粗笨",
"pinyin":"cū bèn",
"def": ["awkward","clumsy","unwieldy","heavy-handed"]
},
"灿烂":
{"simp":"灿烂",
"trad":"燦爛",
"pinyin":"càn làn",
"def": ["to glitter","brilliant","splendid"]
},
"濒死":
{"simp":"濒死",
"trad":"瀕死",
"pinyin":"bīn sǐ",
"def": ["nearing death","on the point of demise","approaching extinction"]
},
"哈欠":
{"simp":"哈欠",
"trad":"哈欠",
"pinyin":"hā qian",
"def": ["yawn"]
},
"帽":
{"simp":"帽",
"trad":"帽",
"pinyin":"mào",
"def": ["hat","cap"]
},
"森林":
{"simp":"森林",
"trad":"森林",
"pinyin":"sēn lín",
"def": ["forest","CL:片[pian4]"]
},
"帮助":
{"simp":"帮助",
"trad":"幫助",
"pinyin":"bāng zhù",
"def": ["assistance","aid","to help","to assist"]
},
"佛教":
{"simp":"佛教",
"trad":"佛教",
"pinyin":"Fó jiào",
"def": ["Buddhism"]
},
"上心":
{"simp":"上心",
"trad":"上心",
"pinyin":"shàng xīn",
"def": ["carefully","meticulously","to set one's heart on sth"]
},
"介入":
{"simp":"介入",
"trad":"介入",
"pinyin":"jiè rù",
"def": ["to intervene","to get involved"]
},
"出门":
{"simp":"出门",
"trad":"出門",
"pinyin":"chū mén",
"def": ["to go out","to leave home","to go on a journey","away from home","(of a woman) to get married"]
},
"昏倒":
{"simp":"昏倒",
"trad":"昏倒",
"pinyin":"hūn dǎo",
"def": ["to faint"]
},
"请看":
{"simp":"请看",
"trad":"請看",
"pinyin":"qǐng kàn",
"def": ["please see ...","vide"]
},
"创世":
{"simp":"创世",
"trad":"創世",
"pinyin":"chuàng shì",
"def": ["the creation (in mythology and Genesis 1-2)","the first foundational steps"]
},
"松":
{"simp":"松",
"trad":"鬆",
"pinyin":"sōng",
"def": ["loose","to loosen","to relax","floss (dry, fluffy food product made from shredded, seasoned meat or fish, used as a topping or filling)"]
},
"医务室":
{"simp":"医务室",
"trad":"醫務室",
"pinyin":"yī wù shì",
"def": ["infirmary","sick bay","CL:個|个[ge4]"]
},
"保密":
{"simp":"保密",
"trad":"保密",
"pinyin":"bǎo mì",
"def": ["to keep sth confidential","to maintain secrecy"]
},
"人民":
{"simp":"人民",
"trad":"人民",
"pinyin":"rén mín",
"def": ["the people","CL:個|个[ge4]"]
},
"躺":
{"simp":"躺",
"trad":"躺",
"pinyin":"tǎng",
"def": ["to recline","to lie down"]
},
"床边":
{"simp":"床边",
"trad":"床邊",
"pinyin":"chuáng biān",
"def": ["bedside"]
},
"上部":
{"simp":"上部",
"trad":"上部",
"pinyin":"shàng bù",
"def": ["upper section"]
},
"达":
{"simp":"达",
"trad":"達",
"pinyin":"dá",
"def": ["to attain","to reach","to amount to","to communicate","eminent"]
},
"谈谈":
{"simp":"谈谈",
"trad":"談談",
"pinyin":"tán tán",
"def": ["to discuss","to have a chat"]
},
"关切":
{"simp":"关切",
"trad":"關切",
"pinyin":"guān qiè",
"def": ["to be deeply concerned","to be troubled (by)"]
},
"医生":
{"simp":"医生",
"trad":"醫生",
"pinyin":"yī shēng",
"def": ["doctor","CL:個|个[ge4],位[wei4],名[ming2]"]
},
"只能":
{"simp":"只能",
"trad":"只能",
"pinyin":"zhǐ néng",
"def": ["can only","obliged to do sth","to have no other choice"]
},
"擅自":
{"simp":"擅自",
"trad":"擅自",
"pinyin":"shàn zì",
"def": ["without permission"]
},
"怀孕":
{"simp":"怀孕",
"trad":"懷孕",
"pinyin":"huái yùn",
"def": ["pregnant","to have conceived","gestation","pregnancy"]
},
"讲述":
{"simp":"讲述",
"trad":"講述",
"pinyin":"jiǎng shù",
"def": ["to talk about","to narrate","to give an account"]
},
"静默":
{"simp":"静默",
"trad":"靜默",
"pinyin":"jìng mò",
"def": ["silence","to stand in silence (in mourning)"]
},
"人工":
{"simp":"人工",
"trad":"人工",
"pinyin":"rén gōng",
"def": ["artificial","manpower","manual work"]
},
"金属":
{"simp":"金属",
"trad":"金屬",
"pinyin":"jīn shǔ",
"def": ["metal","CL:種|种[zhong3]"]
},
"深深":
{"simp":"深深",
"trad":"深深",
"pinyin":"shēn shēn",
"def": ["deep","profound"]
},
"身后":
{"simp":"身后",
"trad":"身後",
"pinyin":"shēn hòu",
"def": ["posthumous","one's social background","behind the body"]
},
"忘记":
{"simp":"忘记",
"trad":"忘記",
"pinyin":"wàng jì",
"def": ["to forget"]
},
"问道":
{"simp":"问道",
"trad":"問道",
"pinyin":"wèn dào",
"def": ["to ask the way","to ask"]
},
"认识":
{"simp":"认识",
"trad":"認識",
"pinyin":"rèn shi",
"def": ["to know","to recognize","to be familiar with","to get acquainted with sb","knowledge","understanding","awareness","cognition"]
},
"中看":
{"simp":"中看",
"trad":"中看",
"pinyin":"zhōng kàn",
"def": ["pleasant to the eye","Taiwan pr. [zhong4 kan4]"]
},
"第二位":
{"simp":"第二位",
"trad":"第二位",
"pinyin":"dì èr wèi",
"def": ["second place"]
},
"小玩意":
{"simp":"小玩意",
"trad":"小玩意",
"pinyin":"xiǎo wán yì",
"def": ["gadget","widget (small item of software)"]
},
"说起":
{"simp":"说起",
"trad":"說起",
"pinyin":"shuō qǐ",
"def": ["to mention","to bring up (a subject)","with regard to","as for"]
},
"玩耍":
{"simp":"玩耍",
"trad":"玩耍",
"pinyin":"wán shuǎ",
"def": ["to play (as children do)","to amuse oneself"]
},
"木星":
{"simp":"木星",
"trad":"木星",
"pinyin":"Mù xīng",
"def": ["Jupiter (planet)"]
},
"机会":
{"simp":"机会",
"trad":"機會",
"pinyin":"jī huì",
"def": ["opportunity","chance","occasion","CL:個|个[ge4]"]
},
"害怕":
{"simp":"害怕",
"trad":"害怕",
"pinyin":"hài pà",
"def": ["to be afraid","to be scared"]
},
"日益":
{"simp":"日益",
"trad":"日益",
"pinyin":"rì yì",
"def": ["day by day","more and more","increasingly","more and more with each passing day"]
},
"洗面":
{"simp":"洗面",
"trad":"洗面",
"pinyin":"xǐ miàn",
"def": ["facial cleansing"]
},
"摆脱":
{"simp":"摆脱",
"trad":"擺脫",
"pinyin":"bǎi tuō",
"def": ["to break away from","to cast off (old ideas etc)","to get rid of","to break away (from)","to break out (of)","to free oneself from","to extricate oneself"]
},
"高强":
{"simp":"高强",
"trad":"高強",
"pinyin":"gāo qiáng",
"def": ["excellent","outstanding"]
},
"建设":
{"simp":"建设",
"trad":"建設",
"pinyin":"jiàn shè",
"def": ["to build","to construct","construction","constructive"]
},
"林":
{"simp":"林",
"trad":"林",
"pinyin":"lín",
"def": ["woods","forest","CL:片[pian4]","circle(s) (i.e. specific group of people)","a collection (of similar things)"]
},
"游荡":
{"simp":"游荡",
"trad":"遊蕩",
"pinyin":"yóu dàng",
"def": ["to wander","to roam about","to loaf about","to be idle"]
},
"招呼":
{"simp":"招呼",
"trad":"招呼",
"pinyin":"zhāo hu",
"def": ["to call out to","to greet","to say hello to","to inform","to take care of","to take care that one does not"]
},
"地表":
{"simp":"地表",
"trad":"地表",
"pinyin":"dì biǎo",
"def": ["the surface (of the earth)"]
},
"多久":
{"simp":"多久",
"trad":"多久",
"pinyin":"duō jiǔ",
"def": ["(of time) how long?","(not) a long time"]
},
"灭":
{"simp":"灭",
"trad":"滅",
"pinyin":"miè",
"def": ["to extinguish or put out","to go out (of a fire etc)","to exterminate or wipe out","to drown"]
},
"猎":
{"simp":"猎",
"trad":"獵",
"pinyin":"liè",
"def": ["hunting"]
},
"阻止":
{"simp":"阻止",
"trad":"阻止",
"pinyin":"zǔ zhǐ",
"def": ["to prevent","to block"]
},
"直达":
{"simp":"直达",
"trad":"直達",
"pinyin":"zhí dá",
"def": ["to go nonstop to","through (as in \"through train\")","nonstop"]
},
"满头大汗":
{"simp":"满头大汗",
"trad":"滿頭大汗",
"pinyin":"mǎn tóu dà hàn",
"def": ["brow beaded with sweat","perspiring freely"]
},
"表明":
{"simp":"表明",
"trad":"表明",
"pinyin":"biǎo míng",
"def": ["to make clear","to make known","to state clearly","to indicate","known"]
},
"隔":
{"simp":"隔",
"trad":"隔",
"pinyin":"gé",
"def": ["to separate","to partition","to stand or lie between","at a distance from","after or at an interval of"]
},
"轻易":
{"simp":"轻易",
"trad":"輕易",
"pinyin":"qīng yì",
"def": ["easily","lightly","rashly"]
},
"防御":
{"simp":"防御",
"trad":"防禦",
"pinyin":"fáng yù",
"def": ["defense","to defend"]
},
"体系":
{"simp":"体系",
"trad":"體系",
"pinyin":"tǐ xì",
"def": ["system","setup","CL:個|个[ge4]"]
},
"加以":
{"simp":"加以",
"trad":"加以",
"pinyin":"jiā yǐ",
"def": ["in addition","moreover","(used before a disyllabic verb to indicate that the action of the verb is applied to sth or sb previously mentioned)","to apply (restrictions etc) to (sb)","to give (support, consideration etc) to (sth)"]
},
"地调":
{"simp":"地调",
"trad":"地調",
"pinyin":"dì diào",
"def": ["geological survey, abbr. for 地質調查|地质调查[di4 zhi4 diao4 cha2]"]
},
"倒下":
{"simp":"倒下",
"trad":"倒下",
"pinyin":"dǎo xià",
"def": ["to collapse","to topple over"]
},
"便":
{"simp":"便",
"trad":"便",
"pinyin":"pián",
"def": ["used in 便宜|便宜[pian2 yi5]","used in 便便[pian2 pian2]","used in 便嬛[pian2 xuan1]"]
},
"收":
{"simp":"收",
"trad":"收",
"pinyin":"shōu",
"def": ["to receive","to accept","to collect","to put away","to restrain","to stop","in care of (used on address line after name)"]
},
"国产":
{"simp":"国产",
"trad":"國產",
"pinyin":"guó chǎn",
"def": ["domestically produced"]
},
"倒计时":
{"simp":"倒计时",
"trad":"倒計時",
"pinyin":"dào jì shí",
"def": ["to count down","countdown"]
},
"终点":
{"simp":"终点",
"trad":"終點",
"pinyin":"zhōng diǎn",
"def": ["the end","end point","finishing line (in a race)","destination","terminus","CL:個|个[ge4]"]
},
"目的地":
{"simp":"目的地",
"trad":"目的地",
"pinyin":"mù dì dì",
"def": ["destination (location)"]
},
"研究者":
{"simp":"研究者",
"trad":"研究者",
"pinyin":"yán jiū zhě",
"def": ["investigator","researcher"]
},
"接地":
{"simp":"接地",
"trad":"接地",
"pinyin":"jiē dì",
"def": ["earth (electric connection)","to earth"]
},
"不理":
{"simp":"不理",
"trad":"不理",
"pinyin":"bù lǐ",
"def": ["to refuse to acknowledge","to pay no attention to","to take no notice of","to ignore"]
},
"说到":
{"simp":"说到",
"trad":"說到",
"pinyin":"shuō dào",
"def": ["to talk about","to mention","(preposition) as for"]
},
"确切":
{"simp":"确切",
"trad":"確切",
"pinyin":"què qiè",
"def": ["definite","exact","precise"]
},
"女儿":
{"simp":"女儿",
"trad":"女兒",
"pinyin":"nǔ: ér",
"def": ["daughter"]
},
"几乎不":
{"simp":"几乎不",
"trad":"幾乎不",
"pinyin":"jī hū bù",
"def": ["hardly","seems not"]
},
"眼神":
{"simp":"眼神",
"trad":"眼神",
"pinyin":"yǎn shén",
"def": ["expression or emotion showing in one's eyes","meaningful glance","wink","eyesight (dialect)"]
},
"的士":
{"simp":"的士",
"trad":"的士",
"pinyin":"dī shì",
"def": ["taxi (loanword)"]
},
"为人":
{"simp":"为人",
"trad":"為人",
"pinyin":"wèi rén",
"def": ["for sb","for others' interest"]
},
"察觉":
{"simp":"察觉",
"trad":"察覺",
"pinyin":"chá jué",
"def": ["to sense","to perceive","to become aware of","to detect"]
},
"不起眼":
{"simp":"不起眼",
"trad":"不起眼",
"pinyin":"bù qǐ yǎn",
"def": ["unremarkable","nothing out of the ordinary"]
},
"起来":
{"simp":"起来",
"trad":"起來",
"pinyin":"qi lai",
"def": ["(after a verb) indicating the beginning and continuation of an action or a state","indicating an upward movement (e.g. after 站[zhan4])","indicating completion","(after a perception verb, e.g. 看[kan4]) expressing preliminary judgment","also pr. [qi3 lai5]"]
},
"接下":
{"simp":"接下",
"trad":"接下",
"pinyin":"jiē xià",
"def": ["to take on (a responsibility)"]
},
"捂":
{"simp":"捂",
"trad":"捂",
"pinyin":"wǔ",
"def": ["to enclose","to cover with the hand (one's eyes, nose or ears)","to cover up (an affair)","contrary","to contradict"]
},
"凄凉":
{"simp":"凄凉",
"trad":"淒涼",
"pinyin":"qī liáng",
"def": ["desolate (place)"]
},
"题":
{"simp":"题",
"trad":"題",
"pinyin":"tí",
"def": ["topic","problem for discussion","exam question","subject","to inscribe","to mention","CL:個|个[ge4],道[dao4]"]
},
"无比":
{"simp":"无比",
"trad":"無比",
"pinyin":"wú bǐ",
"def": ["incomparable","matchless"]
},
"做自己":
{"simp":"做自己",
"trad":"做自己",
"pinyin":"zuò zì jǐ",
"def": ["to be oneself"]
},
"博士":
{"simp":"博士",
"trad":"博士",
"pinyin":"bó shì",
"def": ["doctor","court academician (in feudal China)","Ph.D."]
},
"扇":
{"simp":"扇",
"trad":"扇",
"pinyin":"shàn",
"def": ["fan","sliding, hinged or detachable flat part of sth","classifier for doors, windows etc"]
},
"东西":
{"simp":"东西",
"trad":"東西",
"pinyin":"dōng xi",
"def": ["thing","stuff","person","CL:個|个[ge4],件[jian4]"]
},
"正规军":
{"simp":"正规军",
"trad":"正規軍",
"pinyin":"zhèng guī jūn",
"def": ["regular army","standing army"]
},
"使用":
{"simp":"使用",
"trad":"使用",
"pinyin":"shǐ yòng",
"def": ["to use","to employ","to apply","to make use of"]
},
"进来":
{"simp":"进来",
"trad":"進來",
"pinyin":"jìn lái",
"def": ["to come in"]
},
"低于":
{"simp":"低于",
"trad":"低於",
"pinyin":"dī yú",
"def": ["to be lower than"]
},
"兵":
{"simp":"兵",
"trad":"兵",
"pinyin":"bīng",
"def": ["soldiers","a force","an army","weapons","arms","military","warlike","CL:個|个[ge4]"]
},
"武警":
{"simp":"武警",
"trad":"武警",
"pinyin":"wǔ jǐng",
"def": ["armed police"]
},
"来得及":
{"simp":"来得及",
"trad":"來得及",
"pinyin":"lái de jí",
"def": ["there's still time","able to do sth in time"]
},
"被捕":
{"simp":"被捕",
"trad":"被捕",
"pinyin":"bèi bǔ",
"def": ["to be arrested","under arrest"]
},
"裁减":
{"simp":"裁减",
"trad":"裁減",
"pinyin":"cái jiǎn",
"def": ["to reduce","to lessen","to cut down"]
},
"充分":
{"simp":"充分",
"trad":"充分",
"pinyin":"chōng fèn",
"def": ["ample","sufficient","adequate","full","fully","to the full"]
},
"几乎":
{"simp":"几乎",
"trad":"幾乎",
"pinyin":"jī hū",
"def": ["almost","nearly","practically"]
},
"周围":
{"simp":"周围",
"trad":"周圍",
"pinyin":"zhōu wéi",
"def": ["surroundings","environment","to encompass"]
},
"时期":
{"simp":"时期",
"trad":"時期",
"pinyin":"shí qī",
"def": ["period","phase","CL:個|个[ge4]"]
},
"指甲油":
{"simp":"指甲油",
"trad":"指甲油",
"pinyin":"zhǐ jia yóu",
"def": ["nail polish"]
},
"上空":
{"simp":"上空",
"trad":"上空",
"pinyin":"shàng kōng",
"def": ["overhead","in the sky"]
},
"克":
{"simp":"克",
"trad":"尅",
"pinyin":"kè",
"def": ["variant of 剋|克[ke4]"]
},
"欧洲":
{"simp":"欧洲",
"trad":"歐洲",
"pinyin":"Oū zhōu",
"def": ["Europe","abbr. for 歐羅巴洲|欧罗巴洲[Ou1 luo2 ba1 Zhou1]"]
},
"公认":
{"simp":"公认",
"trad":"公認",
"pinyin":"gōng rèn",
"def": ["publicly known (to be)","accepted (as)"]
},
"敞":
{"simp":"敞",
"trad":"敞",
"pinyin":"chǎng",
"def": ["open to the view of all","spacious","to open wide","to disclose"]
},
"电子":
{"simp":"电子",
"trad":"電子",
"pinyin":"diàn zǐ",
"def": ["electronic","electron (particle physics)"]
},
"强大":
{"simp":"强大",
"trad":"強大",
"pinyin":"qiáng dà",
"def": ["large","formidable","powerful","strong"]
},
"怀":
{"simp":"怀",
"trad":"懷",
"pinyin":"huái",
"def": ["bosom","heart","mind","to think of","to harbor in one's mind","to conceive (a child)"]
},
"枪管":
{"simp":"枪管",
"trad":"槍管",
"pinyin":"qiāng guǎn",
"def": ["gun barrel"]
},
"榔头":
{"simp":"榔头",
"trad":"榔頭",
"pinyin":"láng tou",
"def": ["hammer","large hammer","sledgehammer"]
},
"柄":
{"simp":"柄",
"trad":"柄",
"pinyin":"bǐng",
"def": ["handle or shaft (of an axe etc)","(of a flower, leaf or fruit) stem","sth that affords an advantage to an opponent","classifier for knives or blades"]
},
"露出":
{"simp":"露出",
"trad":"露出",
"pinyin":"lù chū",
"def": ["to expose","to show","also pr. [lou4 chu1]"]
},
"刻":
{"simp":"刻",
"trad":"刻",
"pinyin":"kè",
"def": ["quarter (hour)","moment","to carve","to engrave","to cut","oppressive","classifier for short time intervals"]
},
"凉":
{"simp":"凉",
"trad":"涼",
"pinyin":"liàng",
"def": ["to let sth cool down"]
},
"嫁":
{"simp":"嫁",
"trad":"嫁",
"pinyin":"jià",
"def": ["(of a woman) to marry","to marry off a daughter","to shift (blame etc)"]
},
"名利":
{"simp":"名利",
"trad":"名利",
"pinyin":"míng lì",
"def": ["fame and profit"]
},
"不祥之兆":
{"simp":"不祥之兆",
"trad":"不祥之兆",
"pinyin":"bù xiáng zhī zhào",
"def": ["bad omen"]
},
"例":
{"simp":"例",
"trad":"例",
"pinyin":"lì",
"def": ["example","precedent","rule","case","instance"]
},
"大片":
{"simp":"大片",
"trad":"大片",
"pinyin":"dà piàn",
"def": ["wide expanse","large area","vast stretch","extending widely","blockbuster movie"]
},
"磁力":
{"simp":"磁力",
"trad":"磁力",
"pinyin":"cí lì",
"def": ["magnetic force","magnetic"]
},
"之内":
{"simp":"之内",
"trad":"之內",
"pinyin":"zhī nèi",
"def": ["inside","within"]
},
"航空母舰":
{"simp":"航空母舰",
"trad":"航空母艦",
"pinyin":"háng kōng mǔ jiàn",
"def": ["aircraft carrier","CL:艘[sou1]","(coll.) (fig.) sth huge","(like) a whale"]
},
"冲向":
{"simp":"冲向",
"trad":"衝嚮",
"pinyin":"chōng xiàng",
"def": ["to charge into"]
},
"整齐划一":
{"simp":"整齐划一",
"trad":"整齊劃一",
"pinyin":"zhěng qí huà yī",
"def": ["to be adjusted to uniformity (usually of weights and measures) (idiom)"]
},
"战士":
{"simp":"战士",
"trad":"戰士",
"pinyin":"zhàn shì",
"def": ["fighter","soldier","warrior","CL:個|个[ge4]"]
},
"寿命":
{"simp":"寿命",
"trad":"壽命",
"pinyin":"shòu mìng",
"def": ["life span","life expectancy","lifetime (of a machine)"]
},
"天花板":
{"simp":"天花板",
"trad":"天花板",
"pinyin":"tiān huā bǎn",
"def": ["ceiling"]
},
"抽出":
{"simp":"抽出",
"trad":"抽出",
"pinyin":"chōu chū",
"def": ["to take out","to extract"]
},
"凭借":
{"simp":"凭借",
"trad":"憑借",
"pinyin":"píng jiè",
"def": ["to rely on","to depend on","by means of","thanks to","sth that one relies on"]
},
"首":
{"simp":"首",
"trad":"首",
"pinyin":"shǒu",
"def": ["head","chief","first (occasion, thing etc)","classifier for poems, songs etc"]
},
"老远":
{"simp":"老远",
"trad":"老遠",
"pinyin":"lǎo yuǎn",
"def": ["very far away"]
},
"纲领":
{"simp":"纲领",
"trad":"綱領",
"pinyin":"gāng lǐng",
"def": ["program (i.e. plan of action)","guiding principle"]
},
"名士":
{"simp":"名士",
"trad":"名士",
"pinyin":"míng shì",
"def": ["famous scholar","worthy","celebrity, esp. distinguished literary person having no official post"]
},
"种树":
{"simp":"种树",
"trad":"種樹",
"pinyin":"zhòng shù",
"def": ["to plant trees"]
},
"尘土":
{"simp":"尘土",
"trad":"塵土",
"pinyin":"chén tǔ",
"def": ["dust"]
},
"士兵":
{"simp":"士兵",
"trad":"士兵",
"pinyin":"shì bīng",
"def": ["soldier","CL:個|个[ge4]"]
},
"穿":
{"simp":"穿",
"trad":"穿",
"pinyin":"chuān",
"def": ["to wear","to put on","to dress","to bore through","to pierce","to perforate","to penetrate","to pass through","to thread"]
},
"斯":
{"simp":"斯",
"trad":"斯",
"pinyin":"sī",
"def": ["(phonetic)","this"]
},
"丫":
{"simp":"丫",
"trad":"丫",
"pinyin":"yā",
"def": ["fork","branch","bifurcation","girl"]
},
"面容":
{"simp":"面容",
"trad":"面容",
"pinyin":"miàn róng",
"def": ["appearance","facial features"]
},
"完全":
{"simp":"完全",
"trad":"完全",
"pinyin":"wán quán",
"def": ["complete","whole","totally","entirely"]
},
"各位":
{"simp":"各位",
"trad":"各位",
"pinyin":"gè wèi",
"def": ["everybody","all (guests, colleagues etc)","all of you"]
},
"命":
{"simp":"命",
"trad":"命",
"pinyin":"mìng",
"def": ["life","fate","order or command","to assign a name, title etc"]
},
"搁":
{"simp":"搁",
"trad":"擱",
"pinyin":"gé",
"def": ["to bear","to stand","to endure"]
},
"敌":
{"simp":"敌",
"trad":"敵",
"pinyin":"dí",
"def": ["enemy","to be a match for","to rival","to resist","to withstand"]
},
"精神领袖":
{"simp":"精神领袖",
"trad":"精神領袖",
"pinyin":"jīng shén lǐng xiù",
"def": ["spiritual leader (of a nation or church)","religious leader"]
},
"手册":
{"simp":"手册",
"trad":"手冊",
"pinyin":"shǒu cè",
"def": ["manual","handbook"]
},
"惊慌":
{"simp":"惊慌",
"trad":"驚慌",
"pinyin":"jīng huāng",
"def": ["to panic","to be alarmed"]
},
"女孩儿":
{"simp":"女孩儿",
"trad":"女孩兒",
"pinyin":"nǔ: hái r5",
"def": ["erhua variant of 女孩[nu:3 hai2]"]
},
"悔":
{"simp":"悔",
"trad":"悔",
"pinyin":"huǐ",
"def": ["to regret"]
},
"抓住":
{"simp":"抓住",
"trad":"抓住",
"pinyin":"zhuā zhù",
"def": ["to grab hold of; to capture"]
},
"飞":
{"simp":"飞",
"trad":"飛",
"pinyin":"fēi",
"def": ["to fly"]
},
"紧紧":
{"simp":"紧紧",
"trad":"緊緊",
"pinyin":"jǐn jǐn",
"def": ["closely","tightly"]
},
"公司":
{"simp":"公司",
"trad":"公司",
"pinyin":"gōng sī",
"def": ["(business) company","company","firm","corporation","incorporated","CL:家[jia1]"]
},
"托":
{"simp":"托",
"trad":"託",
"pinyin":"tuō",
"def": ["to trust","to entrust","to be entrusted with","to act as trustee"]
},
"透明":
{"simp":"透明",
"trad":"透明",
"pinyin":"tòu míng",
"def": ["transparent","open (non-secretive)"]
},
"封闭":
{"simp":"封闭",
"trad":"封閉",
"pinyin":"fēng bì",
"def": ["to seal","to close","to confine","to seal off","to close down","sealed","confined","closed","unreceptive"]
},
"艺术":
{"simp":"艺术",
"trad":"藝術",
"pinyin":"yì shù",
"def": ["art"]
},
"素昧平生":
{"simp":"素昧平生",
"trad":"素昧平生",
"pinyin":"sù mèi píng shēng",
"def": ["to have never met sb before (idiom); entirely unacquainted","a complete stranger","not to know sb from Adam"]
},
"今晚":
{"simp":"今晚",
"trad":"今晚",
"pinyin":"jīn wǎn",
"def": ["tonight"]
},
"原子弹":
{"simp":"原子弹",
"trad":"原子彈",
"pinyin":"yuán zǐ dàn",
"def": ["atom bomb","atomic bomb","A-bomb"]
},
"悦耳":
{"simp":"悦耳",
"trad":"悅耳",
"pinyin":"yuè ěr",
"def": ["sweet-sounding","beautiful (of sound)"]
},
"怪":
{"simp":"怪",
"trad":"恠",
"pinyin":"guài",
"def": ["variant of 怪[guai4]"]
},
"漏":
{"simp":"漏",
"trad":"漏",
"pinyin":"lòu",
"def": ["to leak","to divulge","to leave out by mistake","waterclock or hourglass (old)"]
},
"上火":
{"simp":"上火",
"trad":"上火",
"pinyin":"shàng huǒ",
"def": ["to get angry","to suffer from excessive internal heat (TCM)"]
},
"撩开":
{"simp":"撩开",
"trad":"撩開",
"pinyin":"liāo kai",
"def": ["to push aside (clothing, curtain etc) to reveal something","to toss aside"]
},
"弄巧成拙":
{"simp":"弄巧成拙",
"trad":"弄巧成拙",
"pinyin":"nòng qiǎo chéng zhuō",
"def": ["to overreach oneself","to try to be clever and end up with egg on one's face"]
},
"警官":
{"simp":"警官",
"trad":"警官",
"pinyin":"jǐng guān",
"def": ["constable","police officer"]
},
"死亡":
{"simp":"死亡",
"trad":"死亡",
"pinyin":"sǐ wáng",
"def": ["to die","death"]
},
"拿":
{"simp":"拿",
"trad":"拿",
"pinyin":"ná",
"def": ["to hold","to seize","to catch","to apprehend","to take","(used in the same way as 把[ba3]: to mark the following noun as a direct object)"]
},
"枚":
{"simp":"枚",
"trad":"枚",
"pinyin":"méi",
"def": ["classifier for coins, rings, badges, pearls, sporting medals, rockets, satellites etc","tree trunk","whip","wooden peg, used as a gag for marching soldiers (old)"]
},
"玩艺儿":
{"simp":"玩艺儿",
"trad":"玩藝兒",
"pinyin":"wán yì r5",
"def": ["variant of 玩意兒|玩意儿[wan2 yi4 r5]"]
},
"立刻":
{"simp":"立刻",
"trad":"立刻",
"pinyin":"lì kè",
"def": ["forthwith","immediate","prompt","promptly","straightway","thereupon","at once"]
},
"减轻":
{"simp":"减轻",
"trad":"減輕",
"pinyin":"jiǎn qīng",
"def": ["to lighten","to ease","to alleviate"]
},
"天文学":
{"simp":"天文学",
"trad":"天文學",
"pinyin":"tiān wén xué",
"def": ["astronomy"]
},
"安放":
{"simp":"安放",
"trad":"安放",
"pinyin":"ān fàng",
"def": ["to lay","to place","to put in a certain place"]
},
"发电机":
{"simp":"发电机",
"trad":"發電機",
"pinyin":"fā diàn jī",
"def": ["electricity generator","dynamo"]
},
"河面":
{"simp":"河面",
"trad":"河面",
"pinyin":"hé miàn",
"def": ["surface of a river"]
},
"认为":
{"simp":"认为",
"trad":"認為",
"pinyin":"rèn wéi",
"def": ["to believe","to think","to consider","to feel"]
},
"电子书":
{"simp":"电子书",
"trad":"電子書",
"pinyin":"diàn zǐ shū",
"def": ["electronic book","e-book","e-book reader"]
},
"顿时":
{"simp":"顿时",
"trad":"頓時",
"pinyin":"dùn shí",
"def": ["immediately","suddenly"]
},
"凝固":
{"simp":"凝固",
"trad":"凝固",
"pinyin":"níng gù",
"def": ["to freeze","to solidify","to congeal","fig. with rapt attention"]
},
"惧怕":
{"simp":"惧怕",
"trad":"懼怕",
"pinyin":"jù pà",
"def": ["to be afraid"]
},
"腋下":
{"simp":"腋下",
"trad":"腋下",
"pinyin":"yè xià",
"def": ["underarm","armpit"]
},
"左":
{"simp":"左",
"trad":"左",
"pinyin":"zuǒ",
"def": ["left","the Left (politics)","east","unorthodox","queer","wrong","differing","opposite","variant of 佐[zuo3]"]
},
"神态":
{"simp":"神态",
"trad":"神態",
"pinyin":"shén tài",
"def": ["appearance","manner","bearing","deportment","look","expression","mien"]
},
"毁灭":
{"simp":"毁灭",
"trad":"毀滅",
"pinyin":"huǐ miè",
"def": ["to perish","to ruin","to destroy"]
},
"紧迫":
{"simp":"紧迫",
"trad":"緊迫",
"pinyin":"jǐn pò",
"def": ["pressing","urgent"]
},
"摇":
{"simp":"摇",
"trad":"搖",
"pinyin":"yáo",
"def": ["to shake","to rock","to row","to crank"]
},
"自若":
{"simp":"自若",
"trad":"自若",
"pinyin":"zì ruò",
"def": ["calm","composed","at ease"]
},
"拍手":
{"simp":"拍手",
"trad":"拍手",
"pinyin":"pāi shǒu",
"def": ["to clap one's hands"]
},
"小说":
{"simp":"小说",
"trad":"小說",
"pinyin":"xiǎo shuō",
"def": ["novel","fiction","CL:本[ben3],部[bu4]"]
},
"升起":
{"simp":"升起",
"trad":"升起",
"pinyin":"shēng qǐ",
"def": ["to raise","to hoist","to rise"]
},
"恐惧":
{"simp":"恐惧",
"trad":"恐懼",
"pinyin":"kǒng jù",
"def": ["to be frightened","fear","dread"]
},
"凉亭":
{"simp":"凉亭",
"trad":"涼亭",
"pinyin":"liáng tíng",
"def": ["pavilion"]
},
"下载":
{"simp":"下载",
"trad":"下載",
"pinyin":"xià zǎi",
"def": ["to download","also pr. [xia4 zai4]"]
},
"算出":
{"simp":"算出",
"trad":"算出",
"pinyin":"suàn chū",
"def": ["to figure out"]
},
"乐园":
{"simp":"乐园",
"trad":"樂園",
"pinyin":"lè yuán",
"def": ["paradise"]
},
"w":
{"simp":"w",
"trad":"w",
"pinyin":"w",
"def": ["(Internet slang) ten thousand (abbr. for 萬|万[wan4])"]
},
"Q":
{"simp":"Q",
"trad":"Q",
"pinyin":"Q",
"def": ["cute (loanword)","(of food) having a pleasant chewiness (like mochi, tapioca pearls, taro balls etc – foods with a springy or gel-like mouthfeel)","(loanword) to cue sb"]
},
"玩":
{"simp":"玩",
"trad":"翫",
"pinyin":"wán",
"def": ["variant of 玩[wan2]","Taiwan pr. [wan4]"]
},
"入微":
{"simp":"入微",
"trad":"入微",
"pinyin":"rù wēi",
"def": ["down to the smallest detail","thoroughgoing","fine and detailed"]
},
"修剪":
{"simp":"修剪",
"trad":"修剪",
"pinyin":"xiū jiǎn",
"def": ["to prune","to trim"]
},
"娇嗔":
{"simp":"娇嗔",
"trad":"嬌嗔",
"pinyin":"jiāo chēn",
"def": ["(of a girl) to feign anger coquettishly"]
},
"磨":
{"simp":"磨",
"trad":"磨",
"pinyin":"mò",
"def": ["grindstone","to grind","to turn round"]
},
"巴拿马城":
{"simp":"巴拿马城",
"trad":"巴拿馬城",
"pinyin":"Bā ná mǎ Chéng",
"def": ["Panama City"]
},
"住":
{"simp":"住",
"trad":"住",
"pinyin":"zhù",
"def": ["to live","to dwell","to stay","to reside","to stop","(suffix indicating firmness, steadiness, or coming to a halt)"]
},
"塑料袋":
{"simp":"塑料袋",
"trad":"塑料袋",
"pinyin":"sù liào dài",
"def": ["plastic bag"]
},
"高举":
{"simp":"高举",
"trad":"高舉",
"pinyin":"gāo jǔ",
"def": ["to lift up","to hold high"]
},
"弹簧秤":
{"simp":"弹簧秤",
"trad":"彈簧秤",
"pinyin":"tán huáng chèng",
"def": ["spring balance"]
},
"跟前":
{"simp":"跟前",
"trad":"跟前",
"pinyin":"gēn qian",
"def": ["(of children, parents etc) at one's side","living with one"]
},
"密切":
{"simp":"密切",
"trad":"密切",
"pinyin":"mì qiè",
"def": ["close","familiar","intimate","closely (related)","to foster close ties","to pay close attention"]
},
"取出":
{"simp":"取出",
"trad":"取出",
"pinyin":"qǔ chū",
"def": ["to take out","to extract","to draw out"]
},
"哈哈":
{"simp":"哈哈",
"trad":"哈哈",
"pinyin":"hā hā",
"def": ["(onom.) laughing out loud"]
},
"唐":
{"simp":"唐",
"trad":"唐",
"pinyin":"táng",
"def": ["to exaggerate","empty","in vain","old variant of 螗[tang2]"]
},
"标尺":
{"simp":"标尺",
"trad":"標尺",
"pinyin":"biāo chǐ",
"def": ["surveyor's rod","staff","staff gauge","rear sight"]
},
"裂变材料":
{"simp":"裂变材料",
"trad":"裂變材料",
"pinyin":"liè biàn cái liào",
"def": ["fissionable material"]
},
"重元素":
{"simp":"重元素",
"trad":"重元素",
"pinyin":"zhòng yuán sù",
"def": ["heavy element (such as uranium)"]
},
"里面":
{"simp":"里面",
"trad":"裡面",
"pinyin":"lǐ miàn",
"def": ["inside","interior","also pr. [li3 mian5]"]
},
"不清楚":
{"simp":"不清楚",
"trad":"不清楚",
"pinyin":"bù qīng chu",
"def": ["unclear","not understood","currently unknown"]
},
"建议":
{"simp":"建议",
"trad":"建議",
"pinyin":"jiàn yì",
"def": ["to propose","to suggest","to recommend","proposal","suggestion","recommendation","CL:個|个[ge4],點|点[dian3]"]
},
"引爆":
{"simp":"引爆",
"trad":"引爆",
"pinyin":"yǐn bào",
"def": ["to ignite; to detonate"]
},
"松一口气":
{"simp":"松一口气",
"trad":"鬆一口氣",
"pinyin":"sōng yī kǒu qì",
"def": ["to heave a sigh of relief"]
},
"不行":
{"simp":"不行",
"trad":"不行",
"pinyin":"bù xíng",
"def": ["won't do","be out of the question","be no good","not work","not be capable"]
},
"出发":
{"simp":"出发",
"trad":"出發",
"pinyin":"chū fā",
"def": ["to set off","to start (on a journey)"]
},
"光柱":
{"simp":"光柱",
"trad":"光柱",
"pinyin":"guāng zhù",
"def": ["light beam","light pillar (atmospheric optics)"]
},
"决定":
{"simp":"决定",
"trad":"決定",
"pinyin":"jué dìng",
"def": ["to decide (to do something)","to resolve","decision","CL:個|个[ge4],項|项[xiang4]","certainly"]
},
"坝":
{"simp":"坝",
"trad":"壩",
"pinyin":"bà",
"def": ["dam","dike","embankment","CL:條|条[tiao2]"]
},
"花":
{"simp":"花",
"trad":"蘤",
"pinyin":"huā",
"def": ["variant of 花[hua1]","flower","blossom","also pr. [wei3]"]
},
"聚光灯":
{"simp":"聚光灯",
"trad":"聚光燈",
"pinyin":"jù guāng dēng",
"def": ["spotlight"]
},
"抛撒":
{"simp":"抛撒",
"trad":"拋撒",
"pinyin":"pāo sǎ",
"def": ["to sprinkle"]
},
"连":
{"simp":"连",
"trad":"連",
"pinyin":"lián",
"def": ["to link","to join","to connect","continuously","in succession","including","(used with 也[ye3], 都[dou1] etc) even","company (military)"]
},
"冥":
{"simp":"冥",
"trad":"冥",
"pinyin":"míng",
"def": ["dark","deep","stupid","the underworld"]
},
"接":
{"simp":"接",
"trad":"接",
"pinyin":"jiē",
"def": ["to receive","to answer (the phone)","to meet or welcome sb","to connect","to catch","to join","to extend","to take one's turn on duty","to take over for sb"]
},
"大概":
{"simp":"大概",
"trad":"大概",
"pinyin":"dà gài",
"def": ["roughly","probably","rough","approximate","about","general idea"]
},
"野火":
{"simp":"野火",
"trad":"野火",
"pinyin":"yě huǒ",
"def": ["wildfire","(spreading like) wildfire","bush fire","farm fire (for clearing fields)"]
},
"T":
{"simp":"T",
"trad":"T",
"pinyin":"T",
"def": ["(slang) butch (lesbian stereotype)"]
},
"酒":
{"simp":"酒",
"trad":"酒",
"pinyin":"jiǔ",
"def": ["wine (esp. rice wine)","liquor","spirits","alcoholic beverage","CL:杯[bei1],瓶[ping2],罐[guan4],桶[tong3],缸[gang1]"]
},
"迎接":
{"simp":"迎接",
"trad":"迎接",
"pinyin":"yíng jiē",
"def": ["to meet","to welcome","to greet"]
},
"化":
{"simp":"化",
"trad":"化",
"pinyin":"huà",
"def": ["to make into","to change into","-ization","to ... -ize","to transform","abbr. for 化學|化学[hua4 xue2]"]
},
"掌声":
{"simp":"掌声",
"trad":"掌聲",
"pinyin":"zhǎng shēng",
"def": ["applause","CL:陣|阵[zhen4]"]
},
"此类":
{"simp":"此类",
"trad":"此類",
"pinyin":"cǐ lèi",
"def": ["this kind","these kinds","such"]
},
"硬盘":
{"simp":"硬盘",
"trad":"硬盤",
"pinyin":"yìng pán",
"def": ["hard disk"]
},
"般":
{"simp":"般",
"trad":"般",
"pinyin":"pán",
"def": ["see 般樂|般乐[pan2 le4]"]
},
"办法":
{"simp":"办法",
"trad":"辦法",
"pinyin":"bàn fǎ",
"def": ["means","method","way (of doing sth)","CL:條|条[tiao2],個|个[ge4]"]
},
"转达":
{"simp":"转达",
"trad":"轉達",
"pinyin":"zhuǎn dá",
"def": ["to pass on","to convey","to communicate"]
},
"射击":
{"simp":"射击",
"trad":"射擊",
"pinyin":"shè jī",
"def": ["to shoot","to fire (a gun)"]
},
"检测":
{"simp":"检测",
"trad":"檢測",
"pinyin":"jiǎn cè",
"def": ["to detect","to test","detection","sensing"]
},
"穷国":
{"simp":"穷国",
"trad":"窮國",
"pinyin":"qióng guó",
"def": ["poor country"]
},
"卫生":
{"simp":"卫生",
"trad":"衛生",
"pinyin":"wèi shēng",
"def": ["health","hygiene","sanitation"]
},
"鄙夷":
{"simp":"鄙夷",
"trad":"鄙夷",
"pinyin":"bǐ yí",
"def": ["to despise","to look down upon","despicable"]
},
"耳":
{"simp":"耳",
"trad":"耳",
"pinyin":"ěr",
"def": ["ear","handle (archaeology)","and that is all (Classical Chinese)"]
},
"核爆炸":
{"simp":"核爆炸",
"trad":"核爆炸",
"pinyin":"hé bào zhà",
"def": ["nuclear explosion"]
},
"末日":
{"simp":"末日",
"trad":"末日",
"pinyin":"mò rì",
"def": ["last day","end","final days","doomsday"]
},
"声说":
{"simp":"声说",
"trad":"聲說",
"pinyin":"shēng shuō",
"def": ["to narrate"]
},
"外围":
{"simp":"外围",
"trad":"外圍",
"pinyin":"wài wéi",
"def": ["surrounding"]
},
"炸药":
{"simp":"炸药",
"trad":"炸藥",
"pinyin":"zhà yào",
"def": ["explosive (material)"]
},
"光芒":
{"simp":"光芒",
"trad":"光芒",
"pinyin":"guāng máng",
"def": ["rays of light","brilliant rays","radiance"]
},
"狙击手":
{"simp":"狙击手",
"trad":"狙擊手",
"pinyin":"jū jī shǒu",
"def": ["sniper","marksman"]
},
"凉爽":
{"simp":"凉爽",
"trad":"涼爽",
"pinyin":"liáng shuǎng",
"def": ["cool and refreshing"]
},
"感兴趣":
{"simp":"感兴趣",
"trad":"感興趣",
"pinyin":"gǎn xìng qù",
"def": ["to be interested"]
},
"刺":
{"simp":"刺",
"trad":"刺",
"pinyin":"cì",
"def": ["thorn","sting","thrust","to prick","to pierce","to stab","to assassinate","to murder"]
},
"精":
{"simp":"精",
"trad":"精",
"pinyin":"jīng",
"def": ["essence","extract","vitality","energy","semen","sperm","mythical goblin spirit","highly perfected","elite","the pick of sth","proficient (refined ability)","extremely (fine)","selected rice (archaic)"]
},
"捉":
{"simp":"捉",
"trad":"捉",
"pinyin":"zhuō",
"def": ["to clutch","to grab","to capture"]
},
"大海":
{"simp":"大海",
"trad":"大海",
"pinyin":"dà hǎi",
"def": ["sea","ocean"]
},
"长久":
{"simp":"长久",
"trad":"長久",
"pinyin":"cháng jiǔ",
"def": ["(for a) long time"]
},
"鬼":
{"simp":"鬼",
"trad":"鬼",
"pinyin":"guǐ",
"def": ["ghost","demon","terrible","damnable","clever","sly","crafty","(suffix for sb with a certain vice or addiction etc)","one of the 28 constellations"]
},
"觉察":
{"simp":"觉察",
"trad":"覺察",
"pinyin":"jué chá",
"def": ["to sense","to perceive","to come to realize","to be aware"]
},
"媚眼":
{"simp":"媚眼",
"trad":"媚眼",
"pinyin":"mèi yǎn",
"def": ["charming eyes","coquettish glances"]
},
"抛":
{"simp":"抛",
"trad":"拋",
"pinyin":"pāo",
"def": ["to throw","to toss","to fling","to cast","to abandon"]
},
"右手":
{"simp":"右手",
"trad":"右手",
"pinyin":"yòu shǒu",
"def": ["right hand","right-hand side"]
},
"闪亮":
{"simp":"闪亮",
"trad":"閃亮",
"pinyin":"shǎn liàng",
"def": ["brilliant","shiny","a flare","to glisten","to twinkle"]
},
"悠着":
{"simp":"悠着",
"trad":"悠著",
"pinyin":"yōu zhe",
"def": ["to take it easy"]
},
"什么地方":
{"simp":"什么地方",
"trad":"什麼地方",
"pinyin":"shén me dì fang",
"def": ["somewhere","someplace","where"]
},
"点儿":
{"simp":"点儿",
"trad":"點兒",
"pinyin":"diǎn r5",
"def": ["erhua variant of 點|点[dian3]"]
},
"七":
{"simp":"七",
"trad":"七",
"pinyin":"qī",
"def": ["seven","7"]
},
"衣袋":
{"simp":"衣袋",
"trad":"衣袋",
"pinyin":"yī dài",
"def": ["pocket"]
},
"形":
{"simp":"形",
"trad":"形",
"pinyin":"xíng",
"def": ["to appear","to look","form","shape"]
},
"工具":
{"simp":"工具",
"trad":"工具",
"pinyin":"gōng jù",
"def": ["tool","instrument","utensil","means (to achieve a goal etc)"]
},
"母亲":
{"simp":"母亲",
"trad":"母親",
"pinyin":"mǔ qīn",
"def": ["mother","also pr. [mu3 qin5]","CL:個|个[ge4]"]
},
"欧姆":
{"simp":"欧姆",
"trad":"歐姆",
"pinyin":"ōu mǔ",
"def": ["ohm (loanword)"]
},
"黯淡":
{"simp":"黯淡",
"trad":"黯淡",
"pinyin":"àn dàn",
"def": ["variant of 暗淡[an4 dan4]"]
},
"七十":
{"simp":"七十",
"trad":"七十",
"pinyin":"qī shí",
"def": ["seventy","70"]
},
"趁机":
{"simp":"趁机",
"trad":"趁機",
"pinyin":"chèn jī",
"def": ["to seize an opportunity","to take advantage of situation"]
},
"食堂":
{"simp":"食堂",
"trad":"食堂",
"pinyin":"shí táng",
"def": ["dining hall; cafeteria","CL:個|个[ge4],間|间[jian1]"]
},
"跨":
{"simp":"跨",
"trad":"跨",
"pinyin":"kuà",
"def": ["to step across","to stride over","to straddle","to span"]
},
"适应":
{"simp":"适应",
"trad":"適應",
"pinyin":"shì yìng",
"def": ["to adapt","to fit","to suit"]
},
"缩短":
{"simp":"缩短",
"trad":"縮短",
"pinyin":"suō duǎn",
"def": ["to curtail","to cut down"]
},
"制止":
{"simp":"制止",
"trad":"制止",
"pinyin":"zhì zhǐ",
"def": ["to curb","to put a stop to","to stop","to check","to limit"]
},
"假":
{"simp":"假",
"trad":"叚",
"pinyin":"jiǎ",
"def": ["variant of 假[jia3]","to borrow"]
},
"使命":
{"simp":"使命",
"trad":"使命",
"pinyin":"shǐ mìng",
"def": ["mission","long-term task to which one devotes oneself","a calling"]
},
"也许":
{"simp":"也许",
"trad":"也許",
"pinyin":"yě xǔ",
"def": ["perhaps","maybe"]
},
"举":
{"simp":"举",
"trad":"舉",
"pinyin":"jǔ",
"def": ["to lift","to hold up","to cite","to enumerate","to act","to raise","to choose","to elect","act","move","deed"]
},
"信仰":
{"simp":"信仰",
"trad":"信仰",
"pinyin":"xìn yǎng",
"def": ["to believe in (a religion)","firm belief","conviction"]
},
"取信":
{"simp":"取信",
"trad":"取信",
"pinyin":"qǔ xìn",
"def": ["to win the trust of"]
},
"讲课":
{"simp":"讲课",
"trad":"講課",
"pinyin":"jiǎng kè",
"def": ["teach","lecture"]
},
"趁":
{"simp":"趁",
"trad":"趂",
"pinyin":"chèn",
"def": ["old variant of 趁[chen4]"]
},
"宏观世界":
{"simp":"宏观世界",
"trad":"宏觀世界",
"pinyin":"hóng guān shì jiè",
"def": ["macrocosm","the world in the large"]
},
"紫外":
{"simp":"紫外",
"trad":"紫外",
"pinyin":"zǐ wài",
"def": ["ultraviolet (ray)"]
},
"罪行":
{"simp":"罪行",
"trad":"罪行",
"pinyin":"zuì xíng",
"def": ["crime","offense"]
},
"沉闷":
{"simp":"沉闷",
"trad":"沉悶",
"pinyin":"chén mèn",
"def": ["oppressive (of weather)","heavy","depressed","not happy","(of sound) dull","muffled"]
},
"黑":
{"simp":"黑",
"trad":"黑",
"pinyin":"hēi",
"def": ["black","dark","sinister","secret","shady","illegal","to hide (sth) away","to vilify","(loanword) to hack (computing)"]
},
"寒冷":
{"simp":"寒冷",
"trad":"寒冷",
"pinyin":"hán lěng",
"def": ["cold (climate)","frigid","very cold"]
},
"时时":
{"simp":"时时",
"trad":"時時",
"pinyin":"shí shí",
"def": ["often","constantly"]
},
"与此同时":
{"simp":"与此同时",
"trad":"與此同時",
"pinyin":"yǔ cǐ tóng shí",
"def": ["at the same time","meanwhile"]
},
"砸":
{"simp":"砸",
"trad":"砸",
"pinyin":"zá",
"def": ["to smash","to pound","to fail","to muck up","to bungle"]
},
"鸟类":
{"simp":"鸟类",
"trad":"鳥類",
"pinyin":"niǎo lèi",
"def": ["birds"]
},
"五度":
{"simp":"五度",
"trad":"五度",
"pinyin":"wǔ dù",
"def": ["five degrees","fifth (basic musical interval, doh to soh)"]
},
"浓烟":
{"simp":"浓烟",
"trad":"濃煙",
"pinyin":"nóng yān",
"def": ["thick smoke"]
},
"涌出":
{"simp":"涌出",
"trad":"湧出",
"pinyin":"yǒng chū",
"def": ["to gush","to gush out","to pour out"]
},
"那":
{"simp":"那",
"trad":"那",
"pinyin":"nuó",
"def": ["(archaic) many","beautiful","how","old variant of 挪[nuo2]"]
},
"喧闹":
{"simp":"喧闹",
"trad":"喧鬧",
"pinyin":"xuān nào",
"def": ["to make a noise","noisy"]
},
"外面":
{"simp":"外面",
"trad":"外面",
"pinyin":"wài miàn",
"def": ["outside (also pr. [wai4 mian5] for this sense)","surface","exterior","external appearance"]
},
"事情":
{"simp":"事情",
"trad":"事情",
"pinyin":"shì qing",
"def": ["affair","matter","thing","business","CL:件[jian4],樁|桩[zhuang1]"]
},
"组":
{"simp":"组",
"trad":"組",
"pinyin":"zǔ",
"def": ["to form","to organize","group","team","classifier for sets, series, groups of people, batteries"]
},
"要冲":
{"simp":"要冲",
"trad":"要衝",
"pinyin":"yào chōng",
"def": ["road hub","major crossroad"]
},
"苦苦":
{"simp":"苦苦",
"trad":"苦苦",
"pinyin":"kǔ kǔ",
"def": ["strenuously","persistently","hard","painful"]
},
"放射性":
{"simp":"放射性",
"trad":"放射性",
"pinyin":"fàng shè xìng",
"def": ["radioactive"]
},
"波段":
{"simp":"波段",
"trad":"波段",
"pinyin":"bō duàn",
"def": ["wave band"]
},
"当心":
{"simp":"当心",
"trad":"當心",
"pinyin":"dāng xīn",
"def": ["to take care","to look out"]
},
"混乱":
{"simp":"混乱",
"trad":"混亂",
"pinyin":"hùn luàn",
"def": ["confusion","chaos","disorder"]
},
"高明":
{"simp":"高明",
"trad":"高明",
"pinyin":"gāo míng",
"def": ["brilliant","superior","tall and bright"]
},
"奇妙":
{"simp":"奇妙",
"trad":"奇妙",
"pinyin":"qí miào",
"def": ["fantastic","wonderful"]
},
"击毙":
{"simp":"击毙",
"trad":"擊斃",
"pinyin":"jī bì",
"def": ["to kill","to shoot dead"]
},
"献身":
{"simp":"献身",
"trad":"獻身",
"pinyin":"xiàn shēn",
"def": ["to commit one's energy to","to devote oneself to","to sacrifice one's life for","(coll.) (of a woman) to give one's virginity to"]
},
"其余":
{"simp":"其余",
"trad":"其餘",
"pinyin":"qí yú",
"def": ["the rest","the others","remaining","remainder","apart from them"]
},
"挣钱":
{"simp":"挣钱",
"trad":"掙錢",
"pinyin":"zhèng qián",
"def": ["to make money"]
},
"说法":
{"simp":"说法",
"trad":"說法",
"pinyin":"shuō fa",
"def": ["way of speaking","wording","formulation","one's version (of events)","statement","theory","hypothesis","interpretation"]
},
"合适":
{"simp":"合适",
"trad":"合適",
"pinyin":"hé shì",
"def": ["suitable","fitting","appropriate"]
},
"重伤":
{"simp":"重伤",
"trad":"重傷",
"pinyin":"zhòng shāng",
"def": ["seriously hurt","serious injury"]
},
"遮挡":
{"simp":"遮挡",
"trad":"遮擋",
"pinyin":"zhē dǎng",
"def": ["to shelter","to shelter from"]
},
"少不了":
{"simp":"少不了",
"trad":"少不了",
"pinyin":"shǎo bu liǎo",
"def": ["cannot do without","to be unavoidable","are bound to be many"]
},
"待":
{"simp":"待",
"trad":"待",
"pinyin":"dài",
"def": ["to wait","to treat","to deal with","to need","going to (do sth)","about to","intending to"]
},
"救护车":
{"simp":"救护车",
"trad":"救護車",
"pinyin":"jiù hù chē",
"def": ["ambulance","CL:輛|辆[liang4]"]
},
"防护服":
{"simp":"防护服",
"trad":"防護服",
"pinyin":"fáng hù fú",
"def": ["protective clothing; hazmat suit"]
},
"不到":
{"simp":"不到",
"trad":"不到",
"pinyin":"bù dào",
"def": ["not to arrive","not reaching","insufficient","less than"]
},
"比喻":
{"simp":"比喻",
"trad":"比喻",
"pinyin":"bǐ yù",
"def": ["to compare","to liken to","metaphor","analogy","figure of speech","figuratively"]
},
"车":
{"simp":"车",
"trad":"車",
"pinyin":"jū",
"def": ["war chariot (archaic)","rook (in Chinese chess)","rook (in chess)"]
},
"事后":
{"simp":"事后",
"trad":"事後",
"pinyin":"shì hòu",
"def": ["after the event","in hindsight","in retrospect"]
},
"流血":
{"simp":"流血",
"trad":"流血",
"pinyin":"liú xuè",
"def": ["to bleed","to shed blood"]
},
"伤":
{"simp":"伤",
"trad":"傷",
"pinyin":"shāng",
"def": ["to injure","injury","wound"]
},
"内容":
{"simp":"内容",
"trad":"內容",
"pinyin":"nèi róng",
"def": ["content","substance","details","CL:個|个[ge4],項|项[xiang4]"]
},
"袖管":
{"simp":"袖管",
"trad":"袖管",
"pinyin":"xiù guǎn",
"def": ["sleeve"]
},
"穿着":
{"simp":"穿着",
"trad":"穿著",
"pinyin":"chuān zhuó",
"def": ["attire","clothes","dress"]
},
"马上":
{"simp":"马上",
"trad":"馬上",
"pinyin":"mǎ shàng",
"def": ["at once","right away","immediately","on horseback (i.e. by military force)"]
},
"手机":
{"simp":"手机",
"trad":"手機",
"pinyin":"shǒu jī",
"def": ["cell phone","mobile phone","CL:部[bu4],支[zhi1]"]
},
"势":
{"simp":"势",
"trad":"勢",
"pinyin":"shì",
"def": ["power","influence","potential","momentum","tendency","trend","situation","conditions","outward appearance","sign","gesture","male genitals"]
},
"将":
{"simp":"将",
"trad":"將",
"pinyin":"qiāng",
"def": ["to desire","to invite","to request"]
},
"女孩子":
{"simp":"女孩子",
"trad":"女孩子",
"pinyin":"nǔ: hái zi",
"def": ["girl"]
},
"瞎猜":
{"simp":"瞎猜",
"trad":"瞎猜",
"pinyin":"xiā cāi",
"def": ["to make a wild guess","blind guess"]
},
"中国人":
{"simp":"中国人",
"trad":"中國人",
"pinyin":"Zhōng guó rén",
"def": ["Chinese person"]
},
"级":
{"simp":"级",
"trad":"級",
"pinyin":"jí",
"def": ["level","grade","rank","step (of stairs)","CL:個|个[ge4]","classifier: step, level"]
},
"妈":
{"simp":"妈",
"trad":"媽",
"pinyin":"mā",
"def": ["ma","mom","mother"]
},
"烤":
{"simp":"烤",
"trad":"烤",
"pinyin":"kǎo",
"def": ["to roast","to bake","to broil"]
},
"大批":
{"simp":"大批",
"trad":"大批",
"pinyin":"dà pī",
"def": ["large quantities of"]
},
"就学":
{"simp":"就学",
"trad":"就學",
"pinyin":"jiù xué",
"def": ["to attend school"]
},
"赢":
{"simp":"赢",
"trad":"贏",
"pinyin":"yíng",
"def": ["to beat","to win","to profit"]
},
"十亿":
{"simp":"十亿",
"trad":"十億",
"pinyin":"shí yì",
"def": ["one billion","giga-"]
},
"捣鬼":
{"simp":"捣鬼",
"trad":"搗鬼",
"pinyin":"dǎo guǐ",
"def": ["to play tricks","to cause mischief"]
},
"挤出":
{"simp":"挤出",
"trad":"擠出",
"pinyin":"jǐ chū",
"def": ["to squeeze out","to extrude","to drain","to find the time","to burst out"]
},
"玲":
{"simp":"玲",
"trad":"玲",
"pinyin":"líng",
"def": ["(onom.) ting-a-ling (in compounds such as 玎玲 or 玲瓏|玲珑)","tinkling of gem-pendants"]
},
"十三":
{"simp":"十三",
"trad":"十三",
"pinyin":"shí sān",
"def": ["thirteen","13"]
},
"忽视":
{"simp":"忽视",
"trad":"忽視",
"pinyin":"hū shì",
"def": ["to neglect","to ignore"]
},
"宽":
{"simp":"宽",
"trad":"寬",
"pinyin":"kuān",
"def": ["wide","broad","loose","relaxed","lenient"]
},
"毫无疑问":
{"simp":"毫无疑问",
"trad":"毫無疑問",
"pinyin":"háo wú yí wèn",
"def": ["certainty","without a doubt"]
},
"隐隐":
{"simp":"隐隐",
"trad":"隱隱",
"pinyin":"yǐn yǐn",
"def": ["faint","indistinct"]
},
"老弟":
{"simp":"老弟",
"trad":"老弟",
"pinyin":"lǎo dì",
"def": ["(affectionate form of address for a male who is not very much younger than oneself) my boy","old pal"]
},
"喂":
{"simp":"喂",
"trad":"餵",
"pinyin":"wèi",
"def": ["to feed"]
},
"萌芽":
{"simp":"萌芽",
"trad":"萌芽",
"pinyin":"méng yá",
"def": ["to sprout (lit. or fig.)","to bud","to germinate","germ","seed","bud"]
},
"叛徒":
{"simp":"叛徒",
"trad":"叛徒",
"pinyin":"pàn tú",
"def": ["traitor","turncoat","rebel","renegade","insurgent"]
},
"那儿":
{"simp":"那儿",
"trad":"那兒",
"pinyin":"nà r5",
"def": ["there"]
},
"姓名":
{"simp":"姓名",
"trad":"姓名",
"pinyin":"xìng míng",
"def": ["surname and given name","full name"]
},
"锋利":
{"simp":"锋利",
"trad":"鋒利",
"pinyin":"fēng lì",
"def": ["sharp (e.g. knife blade)","incisive","to the point"]
},
"出生日期":
{"simp":"出生日期",
"trad":"出生日期",
"pinyin":"chū shēng rì qī",
"def": ["date of birth"]
},
"职业":
{"simp":"职业",
"trad":"職業",
"pinyin":"zhí yè",
"def": ["occupation","profession","vocation","professional"]
},
"底":
{"simp":"底",
"trad":"底",
"pinyin":"dǐ",
"def": ["background","bottom","base","end (of the month, year etc)","remnants","(math.) radix","base"]
},
"谢谢":
{"simp":"谢谢",
"trad":"謝謝",
"pinyin":"xiè xie",
"def": ["to thank","thanks","thank you"]
},
"史上":
{"simp":"史上",
"trad":"史上",
"pinyin":"shǐ shàng",
"def": ["in history"]
},
"滤":
{"simp":"滤",
"trad":"濾",
"pinyin":"lù:",
"def": ["to strain","to filter"]
},
"刑事":
{"simp":"刑事",
"trad":"刑事",
"pinyin":"xíng shì",
"def": ["criminal","penal"]
},
"打死":
{"simp":"打死",
"trad":"打死",
"pinyin":"dǎ sǐ",
"def": ["to kill","to beat to death"]
},
"伊斯兰教":
{"simp":"伊斯兰教",
"trad":"伊斯蘭教",
"pinyin":"Yī sī lán jiào",
"def": ["Islam"]
},
"调查":
{"simp":"调查",
"trad":"調查",
"pinyin":"diào chá",
"def": ["investigation","inquiry","to investigate","to survey","survey","(opinion) poll","CL:項|项[xiang4],個|个[ge4]"]
},
"数":
{"simp":"数",
"trad":"數",
"pinyin":"shuò",
"def": ["frequently","repeatedly"]
},
"代号":
{"simp":"代号",
"trad":"代號",
"pinyin":"dài hào",
"def": ["code name"]
},
"摇头":
{"simp":"摇头",
"trad":"搖頭",
"pinyin":"yáo tóu",
"def": ["to shake one's head"]
},
"航标":
{"simp":"航标",
"trad":"航標",
"pinyin":"háng biāo",
"def": ["buoy","channel marker","signal light"]
},
"高层":
{"simp":"高层",
"trad":"高層",
"pinyin":"gāo céng",
"def": ["high level","high class"]
},
"驶入":
{"simp":"驶入",
"trad":"駛入",
"pinyin":"shǐ rù",
"def": ["(of a car, ship, train etc) to enter"]
},
"受害者":
{"simp":"受害者",
"trad":"受害者",
"pinyin":"shòu hài zhě",
"def": ["casualty","victim","those injured and wounded"]
},
"河":
{"simp":"河",
"trad":"河",
"pinyin":"hé",
"def": ["river","CL:條|条[tiao2],道[dao4]"]
},
"两手":
{"simp":"两手",
"trad":"兩手",
"pinyin":"liǎng shǒu",
"def": ["one's two hands","two prongs (of a strategy)","both aspects, eventualities etc","skills","expertise"]
},
"假设":
{"simp":"假设",
"trad":"假設",
"pinyin":"jiǎ shè",
"def": ["to suppose","to presume","to assume","supposing that ...","if","hypothesis","conjecture"]
},
"承":
{"simp":"承",
"trad":"承",
"pinyin":"chéng",
"def": ["to bear","to carry","to hold","to continue","to undertake","to take charge","owing to","due to","to receive"]
},
"提供":
{"simp":"提供",
"trad":"提供",
"pinyin":"tí gōng",
"def": ["to offer","to supply","to provide","to furnish"]
},
"思想":
{"simp":"思想",
"trad":"思想",
"pinyin":"sī xiǎng",
"def": ["thought","thinking","idea","ideology","CL:個|个[ge4]"]
},
"高于":
{"simp":"高于",
"trad":"高於",
"pinyin":"gāo yú",
"def": ["greater than","to exceed"]
},
"相关":
{"simp":"相关",
"trad":"相關",
"pinyin":"xiāng guān",
"def": ["related","relevant","pertinent","to be interrelated","(statistics) correlation"]
},
"即将":
{"simp":"即将",
"trad":"即將",
"pinyin":"jí jiāng",
"def": ["on the eve of","to be about to","to be on the verge of"]
},
"喊道":
{"simp":"喊道",
"trad":"喊道",
"pinyin":"hǎn dào",
"def": ["to yell"]
},
"居多":
{"simp":"居多",
"trad":"居多",
"pinyin":"jū duō",
"def": ["to be in the majority"]
},
"有所":
{"simp":"有所",
"trad":"有所",
"pinyin":"yǒu suǒ",
"def": ["somewhat","to some extent"]
},
"提问":
{"simp":"提问",
"trad":"提問",
"pinyin":"tí wèn",
"def": ["to question","to quiz","to grill"]
},
"阶级斗争":
{"simp":"阶级斗争",
"trad":"階級鬥爭",
"pinyin":"jiē jí dòu zhēng",
"def": ["class struggle"]
},
"不止":
{"simp":"不止",
"trad":"不止",
"pinyin":"bù zhǐ",
"def": ["incessantly","without end","more than","not limited to"]
},
"富裕":
{"simp":"富裕",
"trad":"富裕",
"pinyin":"fù yù",
"def": ["prosperous","well-to-do","well-off"]
},
"大部分":
{"simp":"大部分",
"trad":"大部分",
"pinyin":"dà bù fen",
"def": ["in large part","the greater part","the majority"]
},
"娃儿":
{"simp":"娃儿",
"trad":"娃兒",
"pinyin":"wá ér",
"def": ["children (colloquial)"]
},
"编码":
{"simp":"编码",
"trad":"編碼",
"pinyin":"biān mǎ",
"def": ["to code","to encode","code"]
},
"宇航":
{"simp":"宇航",
"trad":"宇航",
"pinyin":"yǔ háng",
"def": ["space flight"]
},
"读取":
{"simp":"读取",
"trad":"讀取",
"pinyin":"dú qǔ",
"def": ["(of a computer etc) to read (data)"]
},
"静悄悄":
{"simp":"静悄悄",
"trad":"靜悄悄",
"pinyin":"jìng qiāo qiāo",
"def": ["extremely quiet"]
},
"温":
{"simp":"温",
"trad":"溫",
"pinyin":"wēn",
"def": ["warm","lukewarm","temperature","to warm up","mild","soft","tender","to review (a lesson etc)","fever (TCM)","old variant of 瘟[wen1]"]
},
"必":
{"simp":"必",
"trad":"必",
"pinyin":"bì",
"def": ["certainly","must","will","necessarily"]
},
"隐藏":
{"simp":"隐藏",
"trad":"隱藏",
"pinyin":"yǐn cáng",
"def": ["to hide","to conceal","to mask","to shelter","to harbor (i.e. keep sth hidden)","to hide oneself","to lie low","to nestle","hidden","implicit","private","covert","recessed (lighting)"]
},
"盆":
{"simp":"盆",
"trad":"盆",
"pinyin":"pén",
"def": ["basin","flower pot","unit of volume equal to 12 斗[dou3] and 8 升[sheng1], approx 128 liters","CL:個|个[ge4]"]
},
"赫然":
{"simp":"赫然",
"trad":"赫然",
"pinyin":"hè rán",
"def": ["with astonishment","with a shock","awe-inspiringly","impressively","furiously (angry)"]
},
"昨夜":
{"simp":"昨夜",
"trad":"昨夜",
"pinyin":"zuó yè",
"def": ["last night"]
},
"羊":
{"simp":"羊",
"trad":"羊",
"pinyin":"yáng",
"def": ["sheep","goat","CL:頭|头[tou2],隻|只[zhi1]"]
},
"到现在":
{"simp":"到现在",
"trad":"到現在",
"pinyin":"dào xiàn zài",
"def": ["up until now","to date"]
},
"数量":
{"simp":"数量",
"trad":"數量",
"pinyin":"shù liàng",
"def": ["amount","quantity","CL:個|个[ge4]","quantitative"]
},
"捧":
{"simp":"捧",
"trad":"捧",
"pinyin":"pěng",
"def": ["to clasp","to cup the hands","to hold up with both hands","to offer (esp. in cupped hands)","to praise","to flatter"]
},
"侵略者":
{"simp":"侵略者",
"trad":"侵略者",
"pinyin":"qīn lu:è zhě",
"def": ["aggressors","invaders"]
},
"爆发性":
{"simp":"爆发性",
"trad":"爆發性",
"pinyin":"bào fā xìng",
"def": ["explosive power","explosive"]
},
"打算":
{"simp":"打算",
"trad":"打算",
"pinyin":"dǎ suàn",
"def": ["to plan","to intend","to calculate","plan","intention","calculation","CL:個|个[ge4]"]
},
"咖啡":
{"simp":"咖啡",
"trad":"咖啡",
"pinyin":"kā fēi",
"def": ["coffee (loanword)","CL:杯[bei1]"]
},
"回电":
{"simp":"回电",
"trad":"回電",
"pinyin":"huí diàn",
"def": ["to call sb back (on the phone)","a return call","to reply to a telegram","to wire back","a reply telegram"]
},
"自言自语":
{"simp":"自言自语",
"trad":"自言自語",
"pinyin":"zì yán zì yǔ",
"def": ["to talk to oneself","to think aloud","to soliloquize"]
},
"退":
{"simp":"退",
"trad":"退",
"pinyin":"tuì",
"def": ["to retreat","to decline","to move back","to withdraw"]
},
"钢铁":
{"simp":"钢铁",
"trad":"鋼鐵",
"pinyin":"gāng tiě",
"def": ["steel"]
},
"处处":
{"simp":"处处",
"trad":"處處",
"pinyin":"chù chù",
"def": ["everywhere","in all respects"]
},
"目前":
{"simp":"目前",
"trad":"目前",
"pinyin":"mù qián",
"def": ["at the present time","currently"]
},
"万":
{"simp":"万",
"trad":"萬",
"pinyin":"wàn",
"def": ["ten thousand","a great number"]
},
"浓重":
{"simp":"浓重",
"trad":"濃重",
"pinyin":"nóng zhòng",
"def": ["dense","thick","strong","rich (colors)","heavy (aroma)","deep (friendship)","profound (effect)"]
},
"加密":
{"simp":"加密",
"trad":"加密",
"pinyin":"jiā mì",
"def": ["to encrypt","encryption","to protect with a password"]
},
"感到":
{"simp":"感到",
"trad":"感到",
"pinyin":"gǎn dào",
"def": ["to feel","to sense","to have the feeling that","to think that","to move","to affect"]
},
"汪洋":
{"simp":"汪洋",
"trad":"汪洋",
"pinyin":"wāng yáng",
"def": ["vast body of water","CL:片[pian4]"]
},
"之中":
{"simp":"之中",
"trad":"之中",
"pinyin":"zhī zhōng",
"def": ["inside","among","in the midst of (doing sth)","during"]
},
"老两口":
{"simp":"老两口",
"trad":"老兩口",
"pinyin":"lǎo liǎng kǒu",
"def": ["old married couple"]
},
"监视":
{"simp":"监视",
"trad":"監視",
"pinyin":"jiān shì",
"def": ["to monitor","to keep a close watch over","surveillance"]
},
"深思熟虑":
{"simp":"深思熟虑",
"trad":"深思熟慮",
"pinyin":"shēn sī shú lù:",
"def": ["mature reflection","after careful deliberations"]
},
"绕":
{"simp":"绕",
"trad":"遶",
"pinyin":"rào",
"def": ["variant of 繞|绕[rao4], to rotate around","to spiral","to move around","to go round (an obstacle)","to by-pass","to make a detour"]
},
"有意思":
{"simp":"有意思",
"trad":"有意思",
"pinyin":"yǒu yì si",
"def": ["interesting","meaningful","enjoyable","fun"]
},
"怀有":
{"simp":"怀有",
"trad":"懷有",
"pinyin":"huái yǒu",
"def": ["to have in one's person (feelings, talent etc)"]
},
"怀抱":
{"simp":"怀抱",
"trad":"懷抱",
"pinyin":"huái bào",
"def": ["to hug","to cherish","within the bosom (of the family)","to embrace (also fig. an ideal, aspiration etc)"]
},
"当初":
{"simp":"当初",
"trad":"當初",
"pinyin":"dāng chū",
"def": ["at that time","originally"]
},
"仇恨":
{"simp":"仇恨",
"trad":"仇恨",
"pinyin":"chóu hèn",
"def": ["to hate","hatred","enmity","hostility"]
},
"后果":
{"simp":"后果",
"trad":"後果",
"pinyin":"hòu guǒ",
"def": ["consequences","aftermath"]
},
"个体":
{"simp":"个体",
"trad":"個體",
"pinyin":"gè tǐ",
"def": ["individual"]
},
"隐":
{"simp":"隐",
"trad":"隱",
"pinyin":"yìn",
"def": ["to lean upon"]
},
"合法":
{"simp":"合法",
"trad":"合法",
"pinyin":"hé fǎ",
"def": ["lawful","legitimate","legal"]
},
"投射":
{"simp":"投射",
"trad":"投射",
"pinyin":"tóu shè",
"def": ["to throw (a projectile)","to cast (light)"]
},
"侦察":
{"simp":"侦察",
"trad":"偵察",
"pinyin":"zhēn chá",
"def": ["to investigate a crime","to scout","to reconnoiter","reconnaissance","detection","a scout"]
},
"向外":
{"simp":"向外",
"trad":"向外",
"pinyin":"xiàng wài",
"def": ["outward"]
},
"好":
{"simp":"好",
"trad":"好",
"pinyin":"hào",
"def": ["to be fond of","to have a tendency to","to be prone to"]
},
"不是吗":
{"simp":"不是吗",
"trad":"不是嗎",
"pinyin":"bù shì ma",
"def": ["isn't that so?"]
},
"说说":
{"simp":"说说",
"trad":"說說",
"pinyin":"shuō shuo",
"def": ["to say sth"]
},
"有无":
{"simp":"有无",
"trad":"有無",
"pinyin":"yǒu wú",
"def": ["to have or have not","surplus and shortfall","tangible and intangible","corporeal and incorporeal"]
},
"状":
{"simp":"状",
"trad":"狀",
"pinyin":"zhuàng",
"def": ["accusation","suit","state","condition","strong","great","-shaped"]
},
"牵连":
{"simp":"牵连",
"trad":"牽連",
"pinyin":"qiān lián",
"def": ["to implicate","implicated","to link together"]
},
"出世":
{"simp":"出世",
"trad":"出世",
"pinyin":"chū shì",
"def": ["to be born","to come into being","to withdraw from worldly affairs"]
},
"压低":
{"simp":"压低",
"trad":"壓低",
"pinyin":"yā dī",
"def": ["to lower (one's voice)"]
},
"管":
{"simp":"管",
"trad":"管",
"pinyin":"guǎn",
"def": ["to take care (of)","to control","to manage","to be in charge of","to look after","to run","to care about","tube","pipe","woodwind","classifier for tube-shaped objects","particle similar to 把[ba3] in 管...叫 constructions","writing brush","(coll.) to","towards"]
},
"开挖":
{"simp":"开挖",
"trad":"開挖",
"pinyin":"kāi wā",
"def": ["to dig out","to excavate","to scoop out"]
},
"名垂青史":
{"simp":"名垂青史",
"trad":"名垂青史",
"pinyin":"míng chuí qīng shǐ",
"def": ["lit. reputation will go down in history (idiom); fig. achievements will earn eternal glory"]
},
"京都":
{"simp":"京都",
"trad":"京都",
"pinyin":"jīng dū",
"def": ["capital (of a country)"]
},
"用心":
{"simp":"用心",
"trad":"用心",
"pinyin":"yòng xīn",
"def": ["motive","intention","to be diligent or attentive","careful"]
},
"后半生":
{"simp":"后半生",
"trad":"後半生",
"pinyin":"hòu bàn shēng",
"def": ["latter half of one's life"]
},
"上山":
{"simp":"上山",
"trad":"上山",
"pinyin":"shàng shān",
"def": ["to climb a hill","to go to the mountains","(of silkworms) to go up bundles of straw (to spin cocoons)","to pass away","(of the sun or moon) to rise"]
},
"大多数":
{"simp":"大多数",
"trad":"大多數",
"pinyin":"dà duō shù",
"def": ["(great) majority"]
},
"忙":
{"simp":"忙",
"trad":"忙",
"pinyin":"máng",
"def": ["busy","hurriedly","to hurry","to rush"]
},
"一下子":
{"simp":"一下子",
"trad":"一下子",
"pinyin":"yī xià zi",
"def": ["in a short while","all at once","all of a sudden"]
},
"属于":
{"simp":"属于",
"trad":"屬於",
"pinyin":"shǔ yú",
"def": ["to be classified as","to belong to","to be part of"]
},
"脉":
{"simp":"脉",
"trad":"衇",
"pinyin":"mài",
"def": ["variant of 脈|脉[mai4]"]
},
"钟表":
{"simp":"钟表",
"trad":"鐘錶",
"pinyin":"zhōng biǎo",
"def": ["clock"]
},
"前端":
{"simp":"前端",
"trad":"前端",
"pinyin":"qián duān",
"def": ["front","front end","forward part of sth"]
},
"方位":
{"simp":"方位",
"trad":"方位",
"pinyin":"fāng wèi",
"def": ["direction","points of the compass","bearing","position","azimuth"]
},
"气":
{"simp":"气",
"trad":"氣",
"pinyin":"qì",
"def": ["gas","air","smell","weather","to make angry","to annoy","to get angry","vital energy","qi"]
},
"模块":
{"simp":"模块",
"trad":"模塊",
"pinyin":"mó kuài",
"def": ["module (in software)","functional unit","component part"]
},
"下方":
{"simp":"下方",
"trad":"下方",
"pinyin":"xià fāng",
"def": ["underneath","below","the underside","world of mortals","to descend to the world of mortals (of gods)"]
},
"经常":
{"simp":"经常",
"trad":"經常",
"pinyin":"jīng cháng",
"def": ["frequently","constantly","regularly","often","day-to-day","everyday","daily"]
},
"起义":
{"simp":"起义",
"trad":"起義",
"pinyin":"qǐ yì",
"def": ["uprising","insurrection","revolt"]
},
"电阻":
{"simp":"电阻",
"trad":"電阻",
"pinyin":"diàn zǔ",
"def": ["(electrical) resistance"]
},
"湿":
{"simp":"湿",
"trad":"濕",
"pinyin":"shī",
"def": ["moist","wet"]
},
"上升":
{"simp":"上升",
"trad":"上升",
"pinyin":"shàng shēng",
"def": ["to rise","to go up","to ascend"]
},
"一下":
{"simp":"一下",
"trad":"一下",
"pinyin":"yī xià",
"def": ["(used after a verb) give it a go","to do (sth for a bit to give it a try)","one time","once","in a while","all of a sudden","all at once"]
},
"骤然":
{"simp":"骤然",
"trad":"驟然",
"pinyin":"zhòu rán",
"def": ["suddenly","abruptly"]
},
"天地":
{"simp":"天地",
"trad":"天地",
"pinyin":"tiān dì",
"def": ["heaven and earth","world","scope","field of activity"]
},
"那里":
{"simp":"那里",
"trad":"那裡",
"pinyin":"nà li",
"def": ["there","that place"]
},
"砍":
{"simp":"砍",
"trad":"砍",
"pinyin":"kǎn",
"def": ["to chop","to cut down","to throw sth at sb"]
},
"特别":
{"simp":"特别",
"trad":"特別",
"pinyin":"tè bié",
"def": ["especially","special","particular","unusual"]
},
"一般":
{"simp":"一般",
"trad":"一般",
"pinyin":"yī bān",
"def": ["same","ordinary","so-so","common","general","generally","in general"]
},
"结":
{"simp":"结",
"trad":"結",
"pinyin":"jié",
"def": ["knot","sturdy","bond","to tie","to bind","to check out (of a hotel)"]
},
"况且":
{"simp":"况且",
"trad":"況且",
"pinyin":"kuàng qiě",
"def": ["moreover","besides","in addition","furthermore"]
},
"逃生":
{"simp":"逃生",
"trad":"逃生",
"pinyin":"táo shēng",
"def": ["to flee for one's life"]
},
"蔓延":
{"simp":"蔓延",
"trad":"蔓延",
"pinyin":"màn yán",
"def": ["to extend","to spread"]
},
"想象":
{"simp":"想象",
"trad":"想象",
"pinyin":"xiǎng xiàng",
"def": ["to imagine; to envision","imagination"]
},
"顺便":
{"simp":"顺便",
"trad":"順便",
"pinyin":"shùn biàn",
"def": ["conveniently","in passing","without much extra effort"]
},
"寻常":
{"simp":"寻常",
"trad":"尋常",
"pinyin":"xún cháng",
"def": ["usual","common","ordinary"]
},
"考验":
{"simp":"考验",
"trad":"考驗",
"pinyin":"kǎo yàn",
"def": ["to test","to put to the test","trial","ordeal"]
},
"胶泥":
{"simp":"胶泥",
"trad":"膠泥",
"pinyin":"jiāo ní",
"def": ["clay"]
},
"达不到":
{"simp":"达不到",
"trad":"達不到",
"pinyin":"dá bù dào",
"def": ["cannot achieve","cannot reach"]
},
"不可抗拒":
{"simp":"不可抗拒",
"trad":"不可抗拒",
"pinyin":"bù kě kàng jù",
"def": ["act of God","force majeure (law)","irresistible (idiom)"]
},
"证明":
{"simp":"证明",
"trad":"證明",
"pinyin":"zhèng míng",
"def": ["proof","certificate","identification","testimonial","CL:個|个[ge4]","to prove","to testify","to confirm the truth of"]
},
"埋":
{"simp":"埋",
"trad":"埋",
"pinyin":"mán",
"def": ["used in 埋怨[man2 yuan4]"]
},
"叶":
{"simp":"叶",
"trad":"葉",
"pinyin":"yè",
"def": ["leaf","page","lobe","(historical) period","classifier for small boats"]
},
"人中":
{"simp":"人中",
"trad":"人中",
"pinyin":"rén zhōng",
"def": ["philtrum","infranasal depression","the \"human center\" acupuncture point"]
},
"不稳定":
{"simp":"不稳定",
"trad":"不穩定",
"pinyin":"bù wěn dìng",
"def": ["unstable"]
},
"杀掉":
{"simp":"杀掉",
"trad":"殺掉",
"pinyin":"shā diào",
"def": ["to kill"]
},
"导线":
{"simp":"导线",
"trad":"導線",
"pinyin":"dǎo xiàn",
"def": ["electrical lead"]
},
"腐蚀":
{"simp":"腐蚀",
"trad":"腐蝕",
"pinyin":"fǔ shí",
"def": ["corrosion","to corrode (degrade chemically)","to rot","corruption"]
},
"山脊":
{"simp":"山脊",
"trad":"山脊",
"pinyin":"shān jǐ",
"def": ["mountain ridge"]
},
"蚀":
{"simp":"蚀",
"trad":"蝕",
"pinyin":"shí",
"def": ["to nibble away at sth","to eat into","to erode"]
},
"垂下":
{"simp":"垂下",
"trad":"垂下",
"pinyin":"chuí xià",
"def": ["to hang down"]
},
"垂":
{"simp":"垂",
"trad":"垂",
"pinyin":"chuí",
"def": ["to hang (down)","droop","dangle","bend down","hand down","bequeath","nearly","almost","to approach"]
},
"地方":
{"simp":"地方",
"trad":"地方",
"pinyin":"dì fang",
"def": ["area","place","space","room","territory","CL:處|处[chu4],個|个[ge4],塊|块[kuai4]"]
},
"了解":
{"simp":"了解",
"trad":"瞭解",
"pinyin":"liǎo jiě",
"def": ["to understand","to realize","to find out"]
},
"埋设":
{"simp":"埋设",
"trad":"埋設",
"pinyin":"mái shè",
"def": ["to install (water pipes, landmines etc) underground"]
},
"斗":
{"simp":"斗",
"trad":"鬭",
"pinyin":"dòu",
"def": ["variant of 鬥|斗[dou4]"]
},
"必须":
{"simp":"必须",
"trad":"必須",
"pinyin":"bì xū",
"def": ["to have to","must","compulsory","necessarily"]
},
"脖子":
{"simp":"脖子",
"trad":"脖子",
"pinyin":"bó zi",
"def": ["neck","CL:個|个[ge4]"]
},
"壁":
{"simp":"壁",
"trad":"壁",
"pinyin":"bì",
"def": ["wall","rampart"]
},
"维修":
{"simp":"维修",
"trad":"維修",
"pinyin":"wéi xiū",
"def": ["maintenance (of equipment)","to protect and maintain"]
},
"灰色":
{"simp":"灰色",
"trad":"灰色",
"pinyin":"huī sè",
"def": ["gray","ash gray","grizzly","pessimistic","gloomy","dispirited","ambiguous"]
},
"女":
{"simp":"女",
"trad":"女",
"pinyin":"rǔ",
"def": ["archaic variant of 汝[ru3]"]
},
"绳索":
{"simp":"绳索",
"trad":"繩索",
"pinyin":"shéng suǒ",
"def": ["rope"]
},
"吊":
{"simp":"吊",
"trad":"弔",
"pinyin":"diào",
"def": ["a string of 100 cash (arch.)","to lament","to condole with","variant of 吊[diao4]"]
},
"纹":
{"simp":"纹",
"trad":"紋",
"pinyin":"wén",
"def": ["line","trace","mark","pattern","grain (of wood etc)"]
},
"修":
{"simp":"修",
"trad":"脩",
"pinyin":"xiū",
"def": ["variant of 修[xiu1]"]
},
"打招呼":
{"simp":"打招呼",
"trad":"打招呼",
"pinyin":"dǎ zhāo hu",
"def": ["to greet sb by word or action","to give prior notice"]
},
"啼哭":
{"simp":"啼哭",
"trad":"啼哭",
"pinyin":"tí kū",
"def": ["to cry","to wail"]
},
"柱":
{"simp":"柱",
"trad":"柱",
"pinyin":"zhù",
"def": ["pillar","CL:根[gen1]"]
},
"哥":
{"simp":"哥",
"trad":"哥",
"pinyin":"gē",
"def": ["elder brother"]
},
"折腾":
{"simp":"折腾",
"trad":"折騰",
"pinyin":"zhē teng",
"def": ["to toss from side to side (e.g. sleeplessly)","to repeat sth over and over again","to torment sb","to play crazy","to squander (time, money)"]
},
"指挥部":
{"simp":"指挥部",
"trad":"指揮部",
"pinyin":"zhǐ huī bù",
"def": ["headquarters","command post"]
},
"挑衅":
{"simp":"挑衅",
"trad":"挑釁",
"pinyin":"tiǎo xìn",
"def": ["to provoke","provocation"]
},
"扛":
{"simp":"扛",
"trad":"摃",
"pinyin":"gāng",
"def": ["old variant of 扛[gang1]"]
},
"作业":
{"simp":"作业",
"trad":"作業",
"pinyin":"zuò yè",
"def": ["school assignment","homework","work","task","operation","CL:個|个[ge4]","to operate"]
},
"眼看":
{"simp":"眼看",
"trad":"眼看",
"pinyin":"yǎn kàn",
"def": ["soon","in a moment","to look on as sth happens"]
},
"回响":
{"simp":"回响",
"trad":"迴響",
"pinyin":"huí xiǎng",
"def": ["to echo","to reverberate","to respond","echo","response","reaction"]
},
"寻找":
{"simp":"寻找",
"trad":"尋找",
"pinyin":"xún zhǎo",
"def": ["to seek","to look for"]
},
"顶上":
{"simp":"顶上",
"trad":"頂上",
"pinyin":"dǐng shàng",
"def": ["on top of","at the summit"]
},
"考察":
{"simp":"考察",
"trad":"考察",
"pinyin":"kǎo chá",
"def": ["to inspect","to observe and study","on-the-spot investigation"]
},
"旁":
{"simp":"旁",
"trad":"旁",
"pinyin":"páng",
"def": ["one side","other","different","lateral component of a Chinese character (such as 刂[dao1], 亻[ren2] etc)"]
},
"忠实":
{"simp":"忠实",
"trad":"忠實",
"pinyin":"zhōng shí",
"def": ["faithful"]
},
"按照":
{"simp":"按照",
"trad":"按照",
"pinyin":"àn zhào",
"def": ["according to","in accordance with","in the light of","on the basis of"]
},
"独":
{"simp":"独",
"trad":"獨",
"pinyin":"dú",
"def": ["alone","independent","single","sole","only"]
},
"姿态":
{"simp":"姿态",
"trad":"姿態",
"pinyin":"zī tài",
"def": ["attitude","posture","stance"]
},
"纪":
{"simp":"纪",
"trad":"紀",
"pinyin":"jì",
"def": ["order","discipline","age","era","period","to chronicle"]
},
"毫不":
{"simp":"毫不",
"trad":"毫不",
"pinyin":"háo bù",
"def": ["hardly","not in the least","not at all"]
},
"身影":
{"simp":"身影",
"trad":"身影",
"pinyin":"shēn yǐng",
"def": ["silhouette","figure"]
},
"打情骂俏":
{"simp":"打情骂俏",
"trad":"打情罵俏",
"pinyin":"dǎ qíng mà qiào",
"def": ["to banter flirtatiously (idiom)"]
},
"正如":
{"simp":"正如",
"trad":"正如",
"pinyin":"zhèng rú",
"def": ["just as","precisely as"]
},
"抢修":
{"simp":"抢修",
"trad":"搶修",
"pinyin":"qiǎng xiū",
"def": ["to repair in a rush","rush repairs"]
},
"既":
{"simp":"既",
"trad":"既",
"pinyin":"jì",
"def": ["already","since","both... (and...)"]
},
"回头":
{"simp":"回头",
"trad":"回頭",
"pinyin":"huí tóu",
"def": ["to turn round; to turn one's head","later; by and by"]
},
"操":
{"simp":"操",
"trad":"操",
"pinyin":"cào",
"def": ["variant of 肏[cao4]"]
},
"累":
{"simp":"累",
"trad":"纍",
"pinyin":"léi",
"def": ["rope","to bind together","to twist around"]
},
"二十一世纪":
{"simp":"二十一世纪",
"trad":"二十一世紀",
"pinyin":"èr shí yī shì jì",
"def": ["21st century"]
},
"经验":
{"simp":"经验",
"trad":"經驗",
"pinyin":"jīng yàn",
"def": ["experience","to experience"]
},
"因":
{"simp":"因",
"trad":"因",
"pinyin":"yīn",
"def": ["cause","reason","because"]
},
"警察":
{"simp":"警察",
"trad":"警察",
"pinyin":"jǐng chá",
"def": ["police","police officer","CL:個|个[ge4]"]
},
"露天":
{"simp":"露天",
"trad":"露天",
"pinyin":"lù tiān",
"def": ["outdoors","al fresco","in the open"]
},
"干燥":
{"simp":"干燥",
"trad":"乾燥",
"pinyin":"gān zào",
"def": ["to dry (of weather, paint, cement etc)","desiccation","dull","uninteresting","arid"]
},
"志愿兵":
{"simp":"志愿兵",
"trad":"志願兵",
"pinyin":"zhì yuàn bīng",
"def": ["volunteer soldier","CL:名[ming2]"]
},
"安全带":
{"simp":"安全带",
"trad":"安全帶",
"pinyin":"ān quán dài",
"def": ["seat belt","safety belt"]
},
"头晕脑涨":
{"simp":"头晕脑涨",
"trad":"頭暈腦漲",
"pinyin":"tóu yūn nǎo zhàng",
"def": ["variant of 頭暈腦脹|头晕脑胀[tou2 yun1 nao3 zhang4]"]
},
"密度":
{"simp":"密度",
"trad":"密度",
"pinyin":"mì dù",
"def": ["density","thickness"]
},
"调换":
{"simp":"调换",
"trad":"調換",
"pinyin":"diào huàn",
"def": ["to exchange","to change places","to swap"]
},
"仪":
{"simp":"仪",
"trad":"儀",
"pinyin":"yí",
"def": ["apparatus","rites","appearance","present","ceremony"]
},
"借口":
{"simp":"借口",
"trad":"借口",
"pinyin":"jiè kǒu",
"def": ["to use as an excuse","on the pretext","excuse","pretext"]
},
"最佳":
{"simp":"最佳",
"trad":"最佳",
"pinyin":"zuì jiā",
"def": ["optimum","optimal","peak","best (athlete, movie etc)"]
},
"严密":
{"simp":"严密",
"trad":"嚴密",
"pinyin":"yán mì",
"def": ["strict","tight (organization, surveillance etc)"]
},
"短":
{"simp":"短",
"trad":"短",
"pinyin":"duǎn",
"def": ["short","brief","to lack","weak point","fault"]
},
"内心深处":
{"simp":"内心深处",
"trad":"內心深處",
"pinyin":"nèi xīn shēn chù",
"def": ["deep in one's heart"]
},
"锯":
{"simp":"锯",
"trad":"鋸",
"pinyin":"jù",
"def": ["a saw","to cut with a saw"]
},
"原由":
{"simp":"原由",
"trad":"原由",
"pinyin":"yuán yóu",
"def": ["variant of 緣由|缘由[yuan2 you2]"]
},
"帮忙":
{"simp":"帮忙",
"trad":"幫忙",
"pinyin":"bāng máng",
"def": ["to help","to lend a hand","to do a favor","to do a good turn"]
},
"绳子":
{"simp":"绳子",
"trad":"繩子",
"pinyin":"shéng zi",
"def": ["cord; string; rope","CL:條|条[tiao2]"]
},
"灯":
{"simp":"灯",
"trad":"燈",
"pinyin":"dēng",
"def": ["lamp","light","lantern","CL:盞|盏[zhan3]"]
},
"结实":
{"simp":"结实",
"trad":"結實",
"pinyin":"jiē shi",
"def": ["rugged","sturdy","strong","durable","buff (physique)"]
},
"粗":
{"simp":"粗",
"trad":"麤",
"pinyin":"cū",
"def": ["remote","distant","variant of 粗[cu1]"]
},
"年轻人":
{"simp":"年轻人",
"trad":"年輕人",
"pinyin":"nián qīng rén",
"def": ["young people","youngster"]
},
"取回":
{"simp":"取回",
"trad":"取回",
"pinyin":"qǔ huí",
"def": ["to retrieve"]
},
"泡":
{"simp":"泡",
"trad":"泡",
"pinyin":"pào",
"def": ["bubble","foam","blister (i.e. skin bubble)","to soak","to steep","to infuse","to dawdle","to shilly-shally","to hang about","to pick up (a girl)","to get off with (a sexual partner)","classifier for occurrences of an action","classifier for number of infusions"]
},
"急":
{"simp":"急",
"trad":"急",
"pinyin":"jí",
"def": ["urgent","pressing","rapid","hurried","worried","to make (sb) anxious"]
},
"出发点":
{"simp":"出发点",
"trad":"出發點",
"pinyin":"chū fā diǎn",
"def": ["starting point","(fig.) basis","motive"]
},
"向下":
{"simp":"向下",
"trad":"向下",
"pinyin":"xiàng xià",
"def": ["down","downward"]
},
"漂亮":
{"simp":"漂亮",
"trad":"漂亮",
"pinyin":"piào liang",
"def": ["pretty","beautiful"]
},
"向上":
{"simp":"向上",
"trad":"向上",
"pinyin":"xiàng shàng",
"def": ["upward","up","to advance","to try to improve oneself","to make progress"]
},
"在前":
{"simp":"在前",
"trad":"在前",
"pinyin":"zài qián",
"def": ["ahead","formerly","in the past"]
},
"有机":
{"simp":"有机",
"trad":"有機",
"pinyin":"yǒu jī",
"def": ["organic"]
},
"史无前例":
{"simp":"史无前例",
"trad":"史無前例",
"pinyin":"shǐ wú qián lì",
"def": ["unprecedented in history"]
},
"情":
{"simp":"情",
"trad":"情",
"pinyin":"qíng",
"def": ["feeling","emotion","passion","situation"]
},
"付出":
{"simp":"付出",
"trad":"付出",
"pinyin":"fù chū",
"def": ["to pay","to invest (energy or time in a friendship etc)"]
},
"微不足道":
{"simp":"微不足道",
"trad":"微不足道",
"pinyin":"wēi bù zú dào",
"def": ["negligible","insignificant"]
},
"一会儿":
{"simp":"一会儿",
"trad":"一會兒",
"pinyin":"yī huì r5",
"def": ["a moment","a while","in a moment","now...now...","also pr. [yi1 hui3 r5]"]
},
"短促":
{"simp":"短促",
"trad":"短促",
"pinyin":"duǎn cù",
"def": ["short in time","fleeting","brief","gasping (breath)","curt (tone of voice)"]
},
"涉及":
{"simp":"涉及",
"trad":"涉及",
"pinyin":"shè jí",
"def": ["to involve","to touch upon (a topic)"]
},
"现有":
{"simp":"现有",
"trad":"現有",
"pinyin":"xiàn yǒu",
"def": ["currently existing","currently available"]
},
"惊叫":
{"simp":"惊叫",
"trad":"驚叫",
"pinyin":"jīng jiào",
"def": ["to cry out in fear"]
},
"乱石":
{"simp":"乱石",
"trad":"亂石",
"pinyin":"luàn shí",
"def": ["rocks","stones","rubble","riprap"]
},
"烟蒂":
{"simp":"烟蒂",
"trad":"煙蒂",
"pinyin":"yān dì",
"def": ["cigarette butt"]
},
"流出":
{"simp":"流出",
"trad":"流出",
"pinyin":"liú chū",
"def": ["to flow out","to disgorge","to effuse"]
},
"失落":
{"simp":"失落",
"trad":"失落",
"pinyin":"shī luò",
"def": ["to lose (sth)","to drop (sth)","to feel a sense of loss","frustrated","disappointment","loss"]
},
"变红":
{"simp":"变红",
"trad":"變紅",
"pinyin":"biàn hóng",
"def": ["to redden"]
},
"门岗":
{"simp":"门岗",
"trad":"門崗",
"pinyin":"mén gǎng",
"def": ["gate"]
},
"摊开":
{"simp":"摊开",
"trad":"攤開",
"pinyin":"tān kāi",
"def": ["to spread out","to unfold"]
},
"动力":
{"simp":"动力",
"trad":"動力",
"pinyin":"dòng lì",
"def": ["motive power","force","(fig.) motivation","impetus"]
},
"无误":
{"simp":"无误",
"trad":"無誤",
"pinyin":"wú wù",
"def": ["verified","unmistaken"]
},
"签字":
{"simp":"签字",
"trad":"簽字",
"pinyin":"qiān zì",
"def": ["to sign (one's name)","signature"]
},
"典型":
{"simp":"典型",
"trad":"典型",
"pinyin":"diǎn xíng",
"def": ["model","typical case","archetype","typical","representative"]
},
"邀请":
{"simp":"邀请",
"trad":"邀請",
"pinyin":"yāo qǐng",
"def": ["to invite","invitation","CL:個|个[ge4]"]
},
"以此为":
{"simp":"以此为",
"trad":"以此為",
"pinyin":"yǐ cǐ wéi",
"def": ["to regard as","to treat as"]
},
"背后":
{"simp":"背后",
"trad":"背後",
"pinyin":"bèi hòu",
"def": ["behind","at the back","in the rear","behind sb's back"]
},
"调制":
{"simp":"调制",
"trad":"調製",
"pinyin":"tiáo zhì",
"def": ["to concoct by mixing ingredients","to prepare according to a recipe","to make (a salad, a cocktail, cosmetics etc)"]
},
"支":
{"simp":"支",
"trad":"支",
"pinyin":"zhī",
"def": ["to support","to sustain","to erect","to raise","branch","division","to draw money","classifier for rods such as pens and guns, for army divisions and for songs or compositions"]
},
"遍布":
{"simp":"遍布",
"trad":"遍布",
"pinyin":"biàn bù",
"def": ["to cover the whole (area)","to be found throughout"]
},
"派系":
{"simp":"派系",
"trad":"派系",
"pinyin":"pài xì",
"def": ["sect","faction"]
},
"轻而易举":
{"simp":"轻而易举",
"trad":"輕而易舉",
"pinyin":"qīng ér yì jǔ",
"def": ["easy","with no difficulty"]
},
"终极":
{"simp":"终极",
"trad":"終極",
"pinyin":"zhōng jí",
"def": ["ultimate","final"]
},
"无人":
{"simp":"无人",
"trad":"無人",
"pinyin":"wú rén",
"def": ["unmanned","uninhabited"]
},
"忏悔":
{"simp":"忏悔",
"trad":"懺悔",
"pinyin":"chàn huǐ",
"def": ["to confess","to repent","remorse","repentance","penitent","confession (Buddhism)"]
},
"上级":
{"simp":"上级",
"trad":"上級",
"pinyin":"shàng jí",
"def": ["higher authorities","superiors","CL:個|个[ge4]"]
},
"宁静":
{"simp":"宁静",
"trad":"寧靜",
"pinyin":"níng jìng",
"def": ["tranquil","tranquility","serenity"]
},
"腹":
{"simp":"腹",
"trad":"腹",
"pinyin":"fù",
"def": ["abdomen","stomach","belly"]
},
"天天":
{"simp":"天天",
"trad":"天天",
"pinyin":"tiān tiān",
"def": ["every day"]
},
"自身":
{"simp":"自身",
"trad":"自身",
"pinyin":"zì shēn",
"def": ["itself","oneself","one's own"]
},
"言":
{"simp":"言",
"trad":"言",
"pinyin":"yán",
"def": ["words","speech","to say","to talk"]
},
"长大":
{"simp":"长大",
"trad":"長大",
"pinyin":"zhǎng dà",
"def": ["to grow up"]
},
"有学问":
{"simp":"有学问",
"trad":"有學問",
"pinyin":"yǒu xué wèn",
"def": ["erudite","learned","informed","scholarly"]
},
"排长":
{"simp":"排长",
"trad":"排長",
"pinyin":"pái zhǎng",
"def": ["platoon leader","sergeant"]
},
"袋子":
{"simp":"袋子",
"trad":"袋子",
"pinyin":"dài zi",
"def": ["bag"]
},
"岗亭":
{"simp":"岗亭",
"trad":"崗亭",
"pinyin":"gǎng tíng",
"def": ["sentry box","police box"]
},
"务":
{"simp":"务",
"trad":"務",
"pinyin":"wù",
"def": ["affair","business","matter","to be engaged in","to attend to","by all means"]
},
"惊":
{"simp":"惊",
"trad":"驚",
"pinyin":"jīng",
"def": ["to startle","to be frightened","to be scared","alarm"]
},
"孔":
{"simp":"孔",
"trad":"孔",
"pinyin":"kǒng",
"def": ["hole","CL:個|个[ge4]","classifier for cave dwellings"]
},
"棉袄":
{"simp":"棉袄",
"trad":"棉襖",
"pinyin":"mián ǎo",
"def": ["cotton-padded jacket"]
},
"旧":
{"simp":"旧",
"trad":"舊",
"pinyin":"jiù",
"def": ["old","opposite: new 新","former","worn (with age)"]
},
"狗":
{"simp":"狗",
"trad":"狗",
"pinyin":"gǒu",
"def": ["dog","CL:隻|只[zhi1],條|条[tiao2]"]
},
"十五":
{"simp":"十五",
"trad":"十五",
"pinyin":"shí wǔ",
"def": ["fifteen","15"]
},
"二十多":
{"simp":"二十多",
"trad":"二十多",
"pinyin":"èr shí duō",
"def": ["over 20"]
},
"听说":
{"simp":"听说",
"trad":"聽說",
"pinyin":"tīng shuō",
"def": ["to hear (sth said)","one hears (that)","hearsay","listening and speaking"]
},
"屯":
{"simp":"屯",
"trad":"屯",
"pinyin":"zhūn",
"def": ["difficult","stingy"]
},
"捻":
{"simp":"捻",
"trad":"捻",
"pinyin":"niǎn",
"def": ["to twirl (in the fingers)"]
},
"需":
{"simp":"需",
"trad":"需",
"pinyin":"xū",
"def": ["to require","to need","to want","necessity","need"]
},
"想来":
{"simp":"想来",
"trad":"想來",
"pinyin":"xiǎng lái",
"def": ["it may be assumed that"]
},
"大地":
{"simp":"大地",
"trad":"大地",
"pinyin":"dà dì",
"def": ["earth","mother earth"]
},
"健壮":
{"simp":"健壮",
"trad":"健壯",
"pinyin":"jiàn zhuàng",
"def": ["robust","healthy","sturdy"]
},
"岗哨":
{"simp":"岗哨",
"trad":"崗哨",
"pinyin":"gǎng shào",
"def": ["lookout post","sentry"]
},
"保姆":
{"simp":"保姆",
"trad":"保姆",
"pinyin":"bǎo mǔ",
"def": ["nanny","housekeeper"]
},
"开枪":
{"simp":"开枪",
"trad":"開槍",
"pinyin":"kāi qiāng",
"def": ["to open fire","to shoot a gun"]
},
"火光":
{"simp":"火光",
"trad":"火光",
"pinyin":"huǒ guāng",
"def": ["flame","blaze"]
},
"颤":
{"simp":"颤",
"trad":"顫",
"pinyin":"chàn",
"def": ["to tremble","to shiver","to shake","to vibrate","Taiwan pr. [zhan4]"]
},
"接到":
{"simp":"接到",
"trad":"接到",
"pinyin":"jiē dào",
"def": ["to receive (letter etc)"]
},
"阶层":
{"simp":"阶层",
"trad":"階層",
"pinyin":"jiē céng",
"def": ["hierarchy","stratum","social class"]
},
"命令":
{"simp":"命令",
"trad":"命令",
"pinyin":"mìng lìng",
"def": ["order","command","CL:道[dao4],個|个[ge4]"]
},
"昨天":
{"simp":"昨天",
"trad":"昨天",
"pinyin":"zuó tiān",
"def": ["yesterday"]
},
"英姿飒爽":
{"simp":"英姿飒爽",
"trad":"英姿颯爽",
"pinyin":"yīng zī sà shuǎng",
"def": ["(of a person) valiant and formidable-looking","to carry oneself tall"]
},
"政府":
{"simp":"政府",
"trad":"政府",
"pinyin":"zhèng fǔ",
"def": ["government","CL:個|个[ge4]"]
},
"送":
{"simp":"送",
"trad":"送",
"pinyin":"sòng",
"def": ["to deliver","to carry","to give (as a present)","to present (with)","to see off","to send"]
},
"菜":
{"simp":"菜",
"trad":"菜",
"pinyin":"cài",
"def": ["dish (type of food)","vegetable","cuisine","CL:盤|盘[pan2],道[dao4]","(coll.) (one's) type","(of one's skills etc) weak","poor"]
},
"黑乎乎":
{"simp":"黑乎乎",
"trad":"黑乎乎",
"pinyin":"hēi hū hū",
"def": ["variant of 黑糊糊[hei1 hu1 hu1]"]
},
"初中":
{"simp":"初中",
"trad":"初中",
"pinyin":"chū zhōng",
"def": ["junior high school","abbr. for 初級中學|初级中学[chu1 ji2 zhong1 xue2]"]
},
"课本":
{"simp":"课本",
"trad":"課本",
"pinyin":"kè běn",
"def": ["textbook","CL:本[ben3]"]
},
"树皮":
{"simp":"树皮",
"trad":"樹皮",
"pinyin":"shù pí",
"def": ["tree bark"]
},
"破裂":
{"simp":"破裂",
"trad":"破裂",
"pinyin":"pò liè",
"def": ["to rupture","to fracture","to break down","(linguistics) plosion"]
},
"他用":
{"simp":"他用",
"trad":"他用",
"pinyin":"tā yòng",
"def": ["other use","other purpose"]
},
"个中":
{"simp":"个中",
"trad":"個中",
"pinyin":"gè zhōng",
"def": ["therein","in this"]
},
"匀速":
{"simp":"匀速",
"trad":"勻速",
"pinyin":"yún sù",
"def": ["uniform velocity"]
},
"敬业":
{"simp":"敬业",
"trad":"敬業",
"pinyin":"jìng yè",
"def": ["to be dedicated to one's work","to respect one's work"]
},
"不明":
{"simp":"不明",
"trad":"不明",
"pinyin":"bù míng",
"def": ["not clear","unknown","to fail to understand"]
},
"老师":
{"simp":"老师",
"trad":"老師",
"pinyin":"lǎo shī",
"def": ["teacher","CL:個|个[ge4],位[wei4]"]
},
"外头":
{"simp":"外头",
"trad":"外頭",
"pinyin":"wài tou",
"def": ["outside","out"]
},
"浩劫":
{"simp":"浩劫",
"trad":"浩劫",
"pinyin":"hào jié",
"def": ["calamity","catastrophe","apocalypse"]
},
"革命":
{"simp":"革命",
"trad":"革命",
"pinyin":"gé mìng",
"def": ["to withdraw the mandate of heaven (and transition to a new dynasty) (original meaning)","revolution","revolutionary","to revolt (against sb or sth)","to revolutionize (sth)","(separable verb sometimes used in the pattern 革noun的命)","CL:次[ci4]"]
},
"高考":
{"simp":"高考",
"trad":"高考",
"pinyin":"gāo kǎo",
"def": ["college entrance exam (especially as abbr. for 普通高等學校招生全國統一考試|普通高等学校招生全国统一考试[Pu3 tong1 Gao1 deng3 Xue2 xiao4 Zhao1 sheng1 Quan2 guo2 Tong3 yi1 Kao3 shi4])","(Tw) entrance exam for senior government service posts (abbr. for 公務人員高等考試|公务人员高等考试)"]
},
"考":
{"simp":"考",
"trad":"考",
"pinyin":"kǎo",
"def": ["to check","to verify","to test","to examine","to take an exam","to take an entrance exam for","deceased father"]
},
"站起来":
{"simp":"站起来",
"trad":"站起來",
"pinyin":"zhàn qǐ lai",
"def": ["to stand up"]
},
"拉德":
{"simp":"拉德",
"trad":"拉德",
"pinyin":"lā dé",
"def": ["rad (unit of absorbed dose of ionizing radiation) (loanword)"]
},
"黑五类":
{"simp":"黑五类",
"trad":"黑五類",
"pinyin":"hēi wǔ lèi",
"def": ["the \"five black categories\" (Cultural Revolution term), i.e. landlords, rich peasants, counterrevolutionaries, bad elements and rightists"]
},
"例行":
{"simp":"例行",
"trad":"例行",
"pinyin":"lì xíng",
"def": ["routine (task, procedure etc)","as usual"]
},
"不了":
{"simp":"不了",
"trad":"不了",
"pinyin":"bù liǎo",
"def": ["unable to","without end"]
},
"陆地":
{"simp":"陆地",
"trad":"陸地",
"pinyin":"lù dì",
"def": ["dry land (as opposed to the sea)"]
},
"举起":
{"simp":"举起",
"trad":"舉起",
"pinyin":"jǔ qǐ",
"def": ["to heave","to lift","to raise up","to uphold"]
},
"绍":
{"simp":"绍",
"trad":"紹",
"pinyin":"shào",
"def": ["to continue","to carry on"]
},
"村里":
{"simp":"村里",
"trad":"村里",
"pinyin":"cūn lǐ",
"def": ["village","hamlet"]
},
"发射器":
{"simp":"发射器",
"trad":"發射器",
"pinyin":"fā shè qì",
"def": ["radio transmitter"]
},
"空气阻力":
{"simp":"空气阻力",
"trad":"空氣阻力",
"pinyin":"kōng qì zǔ lì",
"def": ["atmospheric drag"]
},
"孩子们":
{"simp":"孩子们",
"trad":"孩子們",
"pinyin":"hái zi men",
"def": ["children"]
},
"赶紧":
{"simp":"赶紧",
"trad":"趕緊",
"pinyin":"gǎn jǐn",
"def": ["hurriedly","without delay"]
},
"停留":
{"simp":"停留",
"trad":"停留",
"pinyin":"tíng liú",
"def": ["to stay somewhere temporarily","to stop over"]
},
"缘故":
{"simp":"缘故",
"trad":"緣故",
"pinyin":"yuán gù",
"def": ["reason","cause"]
},
"停下来":
{"simp":"停下来",
"trad":"停下來",
"pinyin":"tíng xià lái",
"def": ["to stop"]
},
"舒适":
{"simp":"舒适",
"trad":"舒適",
"pinyin":"shū shì",
"def": ["cozy","snug"]
},
"许诺":
{"simp":"许诺",
"trad":"許諾",
"pinyin":"xǔ nuò",
"def": ["promise","pledge"]
},
"天后":
{"simp":"天后",
"trad":"天后",
"pinyin":"Tiān hòu",
"def": ["Tin Hau, Empress of Heaven, another name for the goddess Matsu 媽祖|妈祖[Ma1 zu3]","Tin Hau (Hong Kong area around the MTR station with same name)"]
},
"村镇":
{"simp":"村镇",
"trad":"村鎮",
"pinyin":"cūn zhèn",
"def": ["hamlet (place)"]
},
"还给":
{"simp":"还给",
"trad":"還給",
"pinyin":"huán gěi",
"def": ["to return sth to sb"]
},
"第":
{"simp":"第",
"trad":"第",
"pinyin":"dì",
"def": ["(prefix indicating ordinal number, e.g. first, number two etc)","order","(old) rank in the imperial examinations","mansion","(literary) but","just"]
},
"海绵":
{"simp":"海绵",
"trad":"海綿",
"pinyin":"hǎi mián",
"def": ["sponge (zoology)","sponge (piece of absorbent material, either natural or made from plastic etc)","foam rubber"]
},
"阵":
{"simp":"阵",
"trad":"陣",
"pinyin":"zhèn",
"def": ["disposition of troops","wave","spate","burst","spell","short period of time","classifier for events or states of short duration"]
},
"不够":
{"simp":"不够",
"trad":"不夠",
"pinyin":"bù gòu",
"def": ["not enough","insufficient","inadequate"]
},
"中学":
{"simp":"中学",
"trad":"中學",
"pinyin":"zhōng xué",
"def": ["middle school","CL:個|个[ge4]"]
},
"请教":
{"simp":"请教",
"trad":"請教",
"pinyin":"qǐng jiào",
"def": ["to ask for guidance","to consult"]
},
"学生":
{"simp":"学生",
"trad":"學生",
"pinyin":"xué sheng",
"def": ["student","schoolchild"]
},
"春":
{"simp":"春",
"trad":"春",
"pinyin":"chūn",
"def": ["spring (season)","gay","joyful","youthful","love","lust","life"]
},
"娃娃":
{"simp":"娃娃",
"trad":"娃娃",
"pinyin":"wá wa",
"def": ["baby","small child","doll"]
},
"隔三差五":
{"simp":"隔三差五",
"trad":"隔三差五",
"pinyin":"gé sān chà wǔ",
"def": ["every few days (idiom)"]
},
"方面":
{"simp":"方面",
"trad":"方面",
"pinyin":"fāng miàn",
"def": ["respect","aspect","field","side","CL:個|个[ge4]"]
},
"一块":
{"simp":"一块",
"trad":"一塊",
"pinyin":"yī kuài",
"def": ["one block","one piece","one (unit of money)","together","in the same place","in company"]
},
"空荡荡":
{"simp":"空荡荡",
"trad":"空蕩蕩",
"pinyin":"kōng dàng dàng",
"def": ["absolutely empty (space)","complete vacuum"]
},
"假期":
{"simp":"假期",
"trad":"假期",
"pinyin":"jià qī",
"def": ["vacation"]
},
"房间":
{"simp":"房间",
"trad":"房間",
"pinyin":"fáng jiān",
"def": ["room","CL:間|间[jian1],個|个[ge4]"]
},
"服务":
{"simp":"服务",
"trad":"服務",
"pinyin":"fú wù",
"def": ["to serve","service","CL:項|项[xiang4]"]
},
"呼啸":
{"simp":"呼啸",
"trad":"呼嘯",
"pinyin":"hū xiào",
"def": ["to whistle","to scream","to whiz"]
},
"血色":
{"simp":"血色",
"trad":"血色",
"pinyin":"xuè sè",
"def": ["color (of one's skin, a sign of good health)","red of cheeks"]
},
"传来":
{"simp":"传来",
"trad":"傳來",
"pinyin":"chuán lái",
"def": ["(of a sound) to come through","to be heard","(of news) to arrive"]
},
"姓":
{"simp":"姓",
"trad":"姓",
"pinyin":"xìng",
"def": ["family name","surname","CL:個|个[ge4]","to be surnamed"]
},
"兴高采烈":
{"simp":"兴高采烈",
"trad":"興高采烈",
"pinyin":"xìng gāo cǎi liè",
"def": ["happy and excited (idiom)","in high spirits","in great delight"]
},
"开门":
{"simp":"开门",
"trad":"開門",
"pinyin":"kāi mén",
"def": ["to open a door (lit. and fig.)","to open for business"]
},
"松明":
{"simp":"松明",
"trad":"松明",
"pinyin":"sōng míng",
"def": ["pine torch"]
},
"摇曳":
{"simp":"摇曳",
"trad":"搖曳",
"pinyin":"yáo yè",
"def": ["to sway gently (as in the wind)","(of a flame) to flicker"]
},
"好气":
{"simp":"好气",
"trad":"好氣",
"pinyin":"hǎo qì",
"def": ["to be happy","to be in a good mood"]
},
"向":
{"simp":"向",
"trad":"曏",
"pinyin":"xiàng",
"def": ["variant of 向[xiang4]","direction","orientation","to face","to turn toward","to","towards","shortly before","formerly"]
},
"通红":
{"simp":"通红",
"trad":"通紅",
"pinyin":"tōng hóng",
"def": ["very red","red through and through","to blush (deep red)"]
},
"朋友":
{"simp":"朋友",
"trad":"朋友",
"pinyin":"péng you",
"def": ["friend","CL:個|个[ge4],位[wei4]"]
},
"名头":
{"simp":"名头",
"trad":"名頭",
"pinyin":"míng tou",
"def": ["reputation"]
},
"冻":
{"simp":"冻",
"trad":"凍",
"pinyin":"dòng",
"def": ["to freeze","to feel very cold","aspic or jelly"]
},
"也就是":
{"simp":"也就是",
"trad":"也就是",
"pinyin":"yě jiù shì",
"def": ["that is","i.e."]
},
"冰碴":
{"simp":"冰碴",
"trad":"冰碴",
"pinyin":"bīng chá",
"def": ["ice shards"]
},
"结构":
{"simp":"结构",
"trad":"結構",
"pinyin":"jié gòu",
"def": ["structure","composition","makeup","architecture","CL:座[zuo4],個|个[ge4]"]
},
"崇拜":
{"simp":"崇拜",
"trad":"崇拜",
"pinyin":"chóng bài",
"def": ["to worship","adoration"]
},
"厉害":
{"simp":"厉害",
"trad":"厲害",
"pinyin":"lì hai",
"def": ["(used to describe sb or sth that makes a very strong impression, whether favorable or unfavorable) terrible","intense","severe","devastating","amazing","awesome","outstanding","(of a person) stern","strict","harsh","shrewd","tough","(of an animal) fierce","(of a resemblance) striking","(of liquor or chili pepper) strong","(of bacteria) virulent"]
},
"空间":
{"simp":"空间",
"trad":"空間",
"pinyin":"kōng jiān",
"def": ["space","room","(fig.) scope","leeway","(astronomy) outer space","(physics, math.) space"]
},
"棉衣":
{"simp":"棉衣",
"trad":"棉衣",
"pinyin":"mián yī",
"def": ["cotton-padded clothes","CL:件[jian4]"]
},
"占有":
{"simp":"占有",
"trad":"佔有",
"pinyin":"zhàn yǒu",
"def": ["to have","to own","to hold","to occupy","to possess","to account for (a high proportion etc)"]
},
"裹":
{"simp":"裹",
"trad":"裹",
"pinyin":"guǒ",
"def": ["to bind","to wrap","a bundle","a parcel"]
},
"瓷":
{"simp":"瓷",
"trad":"瓷",
"pinyin":"cí",
"def": ["chinaware","porcelain","china"]
},
"酸菜":
{"simp":"酸菜",
"trad":"酸菜",
"pinyin":"suān cài",
"def": ["pickled vegetables, especially Chinese cabbage"]
},
"饺子":
{"simp":"饺子",
"trad":"餃子",
"pinyin":"jiǎo zi",
"def": ["dumpling","pot-sticker","CL:個|个[ge4],隻|只[zhi1]"]
},
"形态":
{"simp":"形态",
"trad":"形態",
"pinyin":"xíng tài",
"def": ["shape","form","pattern","morphology"]
},
"临产":
{"simp":"临产",
"trad":"臨產",
"pinyin":"lín chǎn",
"def": ["to face childbirth","about to give birth","refers esp. to the onset of regular contractions"]
},
"胎":
{"simp":"胎",
"trad":"胎",
"pinyin":"tāi",
"def": ["fetus","classifier for litters (of puppies etc)","padding (in clothing or bedding)","womb carrying a fetus","(fig.) origin","source","(loanword) tire"]
},
"如同":
{"simp":"如同",
"trad":"如同",
"pinyin":"rú tóng",
"def": ["like","as"]
},
"并非":
{"simp":"并非",
"trad":"並非",
"pinyin":"bìng fēi",
"def": ["really isn't"]
},
"鬼门关":
{"simp":"鬼门关",
"trad":"鬼門關",
"pinyin":"guǐ mén guān",
"def": ["the gates of hell"]
},
"多多":
{"simp":"多多",
"trad":"多多",
"pinyin":"duō duō",
"def": ["many","much","a lot","lots and lots","more","even more"]
},
"社会名流":
{"simp":"社会名流",
"trad":"社會名流",
"pinyin":"shè huì míng liú",
"def": ["celebrity","public figure"]
},
"竟":
{"simp":"竟",
"trad":"竟",
"pinyin":"jìng",
"def": ["unexpectedly","actually","to go so far as to","indeed"]
},
"难产":
{"simp":"难产",
"trad":"難產",
"pinyin":"nán chǎn",
"def": ["difficult birth","(fig.) difficult to achieve"]
},
"出血":
{"simp":"出血",
"trad":"出血",
"pinyin":"chū xuè",
"def": ["to bleed","bleeding","(fig.) to spend money in large amounts"]
},
"脸红":
{"simp":"脸红",
"trad":"臉紅",
"pinyin":"liǎn hóng",
"def": ["to blush","to redden (with shame, indignation etc)"]
},
"减速":
{"simp":"减速",
"trad":"減速",
"pinyin":"jiǎn sù",
"def": ["to reduce speed","to slow down","to take it easy"]
},
"可见光":
{"simp":"可见光",
"trad":"可見光",
"pinyin":"kě jiàn guāng",
"def": ["visible light","light in optical spectrum"]
},
"灼热":
{"simp":"灼热",
"trad":"灼熱",
"pinyin":"zhuó rè",
"def": ["burning hot","scorching","worried"]
},
"刺眼":
{"simp":"刺眼",
"trad":"刺眼",
"pinyin":"cì yǎn",
"def": ["to dazzle","to offend the eyes","dazzling","harsh (light)","crude (colors)","unsightly"]
},
"永恒":
{"simp":"永恒",
"trad":"永恆",
"pinyin":"yǒng héng",
"def": ["eternal","everlasting","fig. to pass into eternity (i.e. to die)"]
},
"蒙受":
{"simp":"蒙受",
"trad":"蒙受",
"pinyin":"méng shòu",
"def": ["to suffer","to sustain (loss)"]
},
"旋即":
{"simp":"旋即",
"trad":"旋即",
"pinyin":"xuán jí",
"def": ["soon after","shortly"]
},
"乘坐":
{"simp":"乘坐",
"trad":"乘坐",
"pinyin":"chéng zuò",
"def": ["to ride (in a vehicle)"]
},
"附近":
{"simp":"附近",
"trad":"附近",
"pinyin":"fù jìn",
"def": ["(in the) vicinity","nearby","neighboring","next to"]
},
"缩小":
{"simp":"缩小",
"trad":"縮小",
"pinyin":"suō xiǎo",
"def": ["to reduce","to decrease","to shrink"]
},
"吃力":
{"simp":"吃力",
"trad":"吃力",
"pinyin":"chī lì",
"def": ["to entail strenuous effort","to toil at a task","strenuous","laborious","strain"]
},
"随意":
{"simp":"随意",
"trad":"隨意",
"pinyin":"suí yì",
"def": ["as one wishes","according to one's wishes","at will","voluntary","conscious"]
},
"粉":
{"simp":"粉",
"trad":"粉",
"pinyin":"fěn",
"def": ["powder","cosmetic face powder","food prepared from starch","noodles or pasta made from any kind of flour","whitewash","white","pink","fan (suffix) (abbr. for 粉絲|粉丝[fen3 si1])","to be a fan of"]
},
"缓冲":
{"simp":"缓冲",
"trad":"緩衝",
"pinyin":"huǎn chōng",
"def": ["buffer","to cushion","to adjust to sharp changes"]
},
"款":
{"simp":"款",
"trad":"款",
"pinyin":"kuǎn",
"def": ["section","paragraph","funds","CL:筆|笔[bi3],個|个[ge4]","classifier for versions or models (of a product)"]
},
"十位":
{"simp":"十位",
"trad":"十位",
"pinyin":"shí wèi",
"def": ["the tens place (or column) in the decimal system"]
},
"献血":
{"simp":"献血",
"trad":"獻血",
"pinyin":"xiàn xuè",
"def": ["to donate blood"]
},
"出生":
{"simp":"出生",
"trad":"出生",
"pinyin":"chū shēng",
"def": ["to be born"]
},
"报告":
{"simp":"报告",
"trad":"報告",
"pinyin":"bào gào",
"def": ["to inform","to report","to make known","report","speech","talk","lecture","CL:篇[pian1],份[fen4],個|个[ge4],通[tong4]"]
},
"父母":
{"simp":"父母",
"trad":"父母",
"pinyin":"fù mǔ",
"def": ["father and mother","parents"]
},
"死定":
{"simp":"死定",
"trad":"死定",
"pinyin":"sǐ dìng",
"def": ["to be screwed","to be toast"]
},
"日子":
{"simp":"日子",
"trad":"日子",
"pinyin":"rì zi",
"def": ["day","a (calendar) date","days of one's life"]
},
"色":
{"simp":"色",
"trad":"色",
"pinyin":"shǎi",
"def": ["(coll.) color","used in 色子[shai3 zi5]"]
},
"虚弱":
{"simp":"虚弱",
"trad":"虛弱",
"pinyin":"xū ruò",
"def": ["weak","in poor health"]
},
"无故":
{"simp":"无故",
"trad":"無故",
"pinyin":"wú gù",
"def": ["without cause or reason"]
},
"海鸟":
{"simp":"海鸟",
"trad":"海鳥",
"pinyin":"hǎi niǎo",
"def": ["seabird"]
},
"亲":
{"simp":"亲",
"trad":"親",
"pinyin":"qìng",
"def": ["parents-in-law of one's offspring"]
},
"炸":
{"simp":"炸",
"trad":"炸",
"pinyin":"zhà",
"def": ["to burst","to explode","to blow up","(fig.) to fly into a rage"]
},
"伟":
{"simp":"伟",
"trad":"偉",
"pinyin":"wěi",
"def": ["big","large","great"]
},
"一对":
{"simp":"一对",
"trad":"一對",
"pinyin":"yī duì",
"def": ["couple","pair"]
},
"药材":
{"simp":"药材",
"trad":"藥材",
"pinyin":"yào cái",
"def": ["medicinal ingredient"]
},
"回顾":
{"simp":"回顾",
"trad":"回顧",
"pinyin":"huí gù",
"def": ["to look back","to review"]
},
"儿媳妇":
{"simp":"儿媳妇",
"trad":"兒媳婦",
"pinyin":"ér xí fu",
"def": ["daughter-in-law"]
},
"猎头":
{"simp":"猎头",
"trad":"獵頭",
"pinyin":"liè tóu",
"def": ["headhunting (executive recruitment)","headhunter (profession)","headhunting (tribal custom)"]
},
"好像":
{"simp":"好像",
"trad":"好像",
"pinyin":"hǎo xiàng",
"def": ["as if","to seem like"]
},
"当兵":
{"simp":"当兵",
"trad":"當兵",
"pinyin":"dāng bīng",
"def": ["to serve in the army","to be a soldier"]
},
"不语":
{"simp":"不语",
"trad":"不語",
"pinyin":"bù yǔ",
"def": ["(literary) not to speak"]
},
"成家":
{"simp":"成家",
"trad":"成家",
"pinyin":"chéng jiā",
"def": ["to settle down and get married (of a man)","to become a recognized expert"]
},
"为难":
{"simp":"为难",
"trad":"為難",
"pinyin":"wéi nán",
"def": ["to feel embarrassed or awkward","to make things difficult (for someone)","to find things difficult (to do or manage)"]
},
"农家":
{"simp":"农家",
"trad":"農家",
"pinyin":"nóng jiā",
"def": ["peasant family"]
},
"大西洋":
{"simp":"大西洋",
"trad":"大西洋",
"pinyin":"Dà xī yáng",
"def": ["Atlantic Ocean"]
},
"哺乳期":
{"simp":"哺乳期",
"trad":"哺乳期",
"pinyin":"bǔ rǔ qī",
"def": ["breastfeeding period","lactation period","suckling period"]
},
"凤":
{"simp":"凤",
"trad":"鳳",
"pinyin":"fèng",
"def": ["phoenix"]
},
"以此":
{"simp":"以此",
"trad":"以此",
"pinyin":"yǐ cǐ",
"def": ["with this","thereby","thus","because of this"]
},
"妮子":
{"simp":"妮子",
"trad":"妮子",
"pinyin":"nī zi",
"def": ["(coll.) lass","(dialect) little girl"]
},
"案件":
{"simp":"案件",
"trad":"案件",
"pinyin":"àn jiàn",
"def": ["case","instance","CL:宗[zong1],樁|桩[zhuang1],起[qi3]"]
},
"渣子":
{"simp":"渣子",
"trad":"渣子",
"pinyin":"zhā zi",
"def": ["dregs","bits","dregs (of society)"]
},
"妈的":
{"simp":"妈的",
"trad":"媽的",
"pinyin":"mā de",
"def": ["see 他媽的|他妈的[ta1 ma1 de5]"]
},
"金字塔":
{"simp":"金字塔",
"trad":"金字塔",
"pinyin":"jīn zì tǎ",
"def": ["pyramid (building or structure)"]
},
"去年":
{"simp":"去年",
"trad":"去年",
"pinyin":"qù nián",
"def": ["last year"]
},
"灵气":
{"simp":"灵气",
"trad":"靈氣",
"pinyin":"líng qì",
"def": ["spiritual influence (of mountains etc)","cleverness","ingeniousness"]
},
"闺女":
{"simp":"闺女",
"trad":"閨女",
"pinyin":"guī nu:",
"def": ["maiden; unmarried woman","(coll.) daughter"]
},
"懒洋洋":
{"simp":"懒洋洋",
"trad":"懶洋洋",
"pinyin":"lǎn yāng yāng",
"def": ["lazily"]
},
"和好":
{"simp":"和好",
"trad":"和好",
"pinyin":"hé hǎo",
"def": ["to become reconciled","on good terms with each other"]
},
"不清":
{"simp":"不清",
"trad":"不清",
"pinyin":"bù qīng",
"def": ["unclear"]
},
"谈":
{"simp":"谈",
"trad":"談",
"pinyin":"tán",
"def": ["to speak","to talk","to converse","to chat","to discuss"]
},
"无言":
{"simp":"无言",
"trad":"無言",
"pinyin":"wú yán",
"def": ["to remain silent","to have nothing to say"]
},
"院子":
{"simp":"院子",
"trad":"院子",
"pinyin":"yuàn zi",
"def": ["courtyard","garden","yard","patio","CL:個|个[ge4]","(old) servant"]
},
"有一次":
{"simp":"有一次",
"trad":"有一次",
"pinyin":"yǒu yī cì",
"def": ["once","once upon a time"]
},
"怯生生":
{"simp":"怯生生",
"trad":"怯生生",
"pinyin":"qiè shēng shēng",
"def": ["shy"]
},
"军官":
{"simp":"军官",
"trad":"軍官",
"pinyin":"jūn guān",
"def": ["officer (military)"]
},
"落后":
{"simp":"落后",
"trad":"落後",
"pinyin":"luò hòu",
"def": ["to fall behind","to lag (in technology etc)","backward","to retrogress"]
},
"拥抱":
{"simp":"拥抱",
"trad":"擁抱",
"pinyin":"yōng bào",
"def": ["to embrace","to hug"]
},
"烟袋":
{"simp":"烟袋",
"trad":"煙袋",
"pinyin":"yān dài",
"def": ["tobacco pipe"]
},
"十倍":
{"simp":"十倍",
"trad":"十倍",
"pinyin":"shí bèi",
"def": ["tenfold","ten times (sth)"]
},
"嘴里":
{"simp":"嘴里",
"trad":"嘴裡",
"pinyin":"zuǐ lǐ",
"def": ["mouth","in the mouth","on one's lips","speech","words"]
},
"悠然":
{"simp":"悠然",
"trad":"悠然",
"pinyin":"yōu rán",
"def": ["unhurried","leisurely"]
},
"理智":
{"simp":"理智",
"trad":"理智",
"pinyin":"lǐ zhì",
"def": ["reason","intellect","rationality","rational"]
},
"烟":
{"simp":"烟",
"trad":"煙",
"pinyin":"yān",
"def": ["cigarette or pipe tobacco","CL:根[gen1]","smoke","mist","vapour","CL:縷|缕[lu:3]","tobacco plant","(of the eyes) to be irritated by smoke"]
},
"丰满":
{"simp":"丰满",
"trad":"豐滿",
"pinyin":"fēng mǎn",
"def": ["ample","well developed","fully rounded"]
},
"银亮":
{"simp":"银亮",
"trad":"銀亮",
"pinyin":"yín liàng",
"def": ["shiny bright as silver"]
},
"比尔":
{"simp":"比尔",
"trad":"比爾",
"pinyin":"Bǐ ěr",
"def": ["Bill (name)"]
},
"白铜":
{"simp":"白铜",
"trad":"白銅",
"pinyin":"bái tóng",
"def": ["copper-nickel alloy"]
},
"彬彬有礼":
{"simp":"彬彬有礼",
"trad":"彬彬有禮",
"pinyin":"bīn bīn yǒu lǐ",
"def": ["refined and courteous","urbane"]
},
"倒是":
{"simp":"倒是",
"trad":"倒是",
"pinyin":"dào shi",
"def": ["contrary to what one might expect","actually","contrariwise","why don't you"]
},
"大意":
{"simp":"大意",
"trad":"大意",
"pinyin":"dà yi",
"def": ["careless"]
},
"以来":
{"simp":"以来",
"trad":"以來",
"pinyin":"yǐ lái",
"def": ["since (a previous event)"]
},
"政策":
{"simp":"政策",
"trad":"政策",
"pinyin":"zhèng cè",
"def": ["policy","CL:個|个[ge4]"]
},
"礼貌":
{"simp":"礼貌",
"trad":"禮貌",
"pinyin":"lǐ mào",
"def": ["courtesy","manners"]
},
"松下":
{"simp":"松下",
"trad":"松下",
"pinyin":"Sōng xià",
"def": ["Matsushita (name)","Panasonic (brand), abbr. for 松下電器|松下电器[Song1 xia4 Dian4 qi4]"]
},
"人参":
{"simp":"人参",
"trad":"人參",
"pinyin":"rén shēn",
"def": ["ginseng"]
},
"寡妇":
{"simp":"寡妇",
"trad":"寡婦",
"pinyin":"guǎ fu",
"def": ["widow"]
},
"总有":
{"simp":"总有",
"trad":"總有",
"pinyin":"zǒng yǒu",
"def": ["inevitably there will be"]
},
"大型":
{"simp":"大型",
"trad":"大型",
"pinyin":"dà xíng",
"def": ["large","large-scale"]
},
"山鸡":
{"simp":"山鸡",
"trad":"山雞",
"pinyin":"shān jī",
"def": ["Reeves's pheasant (Syrmaticus reevesii)","(dialect) pheasant"]
},
"闹":
{"simp":"闹",
"trad":"鬧",
"pinyin":"nào",
"def": ["noisy","cacophonous","to make noise","to disturb","to vent (feelings)","to fall ill","to have an attack (of sickness)","to go in (for some activity)","to joke"]
},
"高呼":
{"simp":"高呼",
"trad":"高呼",
"pinyin":"gāo hū",
"def": ["to shout loudly"]
},
"到齐":
{"simp":"到齐",
"trad":"到齊",
"pinyin":"dào qí",
"def": ["to be all present"]
},
"拆除":
{"simp":"拆除",
"trad":"拆除",
"pinyin":"chāi chú",
"def": ["to tear down","to demolish","to dismantle","to remove"]
},
"带来":
{"simp":"带来",
"trad":"帶來",
"pinyin":"dài lái",
"def": ["to bring","to bring about","to produce"]
},
"古朴":
{"simp":"古朴",
"trad":"古樸",
"pinyin":"gǔ pǔ",
"def": ["simple and unadorned (of art, architecture etc)"]
},
"中国画":
{"simp":"中国画",
"trad":"中國畫",
"pinyin":"Zhōng guó huà",
"def": ["Chinese painting"]
},
"别的":
{"simp":"别的",
"trad":"別的",
"pinyin":"bié de",
"def": ["else","other"]
},
"浓缩":
{"simp":"浓缩",
"trad":"濃縮",
"pinyin":"nóng suō",
"def": ["to concentrate (a liquid)","concentration","espresso coffee","abbr. for 意式濃縮咖啡|意式浓缩咖啡"]
},
"教":
{"simp":"教",
"trad":"教",
"pinyin":"jiào",
"def": ["religion","teaching","to make","to cause","to tell"]
},
"古典":
{"simp":"古典",
"trad":"古典",
"pinyin":"gǔ diǎn",
"def": ["classical"]
},
"瘦":
{"simp":"瘦",
"trad":"瘦",
"pinyin":"shòu",
"def": ["thin","to lose weight","(of clothing) tight","(of meat) lean","(of land) unproductive"]
},
"算是":
{"simp":"算是",
"trad":"算是",
"pinyin":"suàn shì",
"def": ["considered to be","at last"]
},
"派对":
{"simp":"派对",
"trad":"派對",
"pinyin":"pài duì",
"def": ["party (loanword)"]
},
"蒸汽机":
{"simp":"蒸汽机",
"trad":"蒸汽機",
"pinyin":"zhēng qì jī",
"def": ["steam engine"]
},
"油画":
{"simp":"油画",
"trad":"油畫",
"pinyin":"yóu huà",
"def": ["oil painting"]
},
"浓郁":
{"simp":"浓郁",
"trad":"濃郁",
"pinyin":"nóng yù",
"def": ["rich","strong","heavy (fragrance)","dense","full-bodied","intense"]
},
"泰":
{"simp":"泰",
"trad":"泰",
"pinyin":"tài",
"def": ["safe","peaceful","most","grand"]
},
"温热":
{"simp":"温热",
"trad":"溫熱",
"pinyin":"wēn rè",
"def": ["tepid","to warm up (food etc)"]
},
"努力":
{"simp":"努力",
"trad":"努力",
"pinyin":"nǔ lì",
"def": ["great effort","to strive","to try hard"]
},
"关东":
{"simp":"关东",
"trad":"關東",
"pinyin":"Guān dōng",
"def": ["Northeast China","Manchuria","lit. east of Shanhai Pass 山海關|山海关[Shan1 hai3 guan1]","Kantō region of Japan"]
},
"度假":
{"simp":"度假",
"trad":"度假",
"pinyin":"dù jià",
"def": ["to go on holidays","to spend one's vacation"]
},
"铺":
{"simp":"铺",
"trad":"鋪",
"pinyin":"pù",
"def": ["plank bed","place to sleep","shop","store","(old) relay station"]
},
"乌":
{"simp":"乌",
"trad":"烏",
"pinyin":"wū",
"def": ["crow","black"]
},
"水下":
{"simp":"水下",
"trad":"水下",
"pinyin":"shuǐ xià",
"def": ["under the water","submarine"]
},
"炕":
{"simp":"炕",
"trad":"炕",
"pinyin":"kàng",
"def": ["kang (a heatable brick bed)","to bake","to dry by the heat of a fire"]
},
"莫":
{"simp":"莫",
"trad":"莫",
"pinyin":"mò",
"def": ["do not","there is none who"]
},
"合":
{"simp":"合",
"trad":"閤",
"pinyin":"hé",
"def": ["variant of 合[he2]"]
},
"饭":
{"simp":"饭",
"trad":"飯",
"pinyin":"fàn",
"def": ["cooked rice","CL:碗[wan3]","meal","CL:頓|顿[dun4]","(loanword) fan","devotee"]
},
"几年":
{"simp":"几年",
"trad":"幾年",
"pinyin":"jǐ nián",
"def": ["a few years","several years","how many years"]
},
"中流":
{"simp":"中流",
"trad":"中流",
"pinyin":"zhōng liú",
"def": ["midstream"]
},
"泪流满面":
{"simp":"泪流满面",
"trad":"淚流滿面",
"pinyin":"lèi liú mǎn miàn",
"def": ["cheeks streaming with tears (idiom)"]
},
"缘由":
{"simp":"缘由",
"trad":"緣由",
"pinyin":"yuán yóu",
"def": ["reason","cause"]
},
"难忘":
{"simp":"难忘",
"trad":"難忘",
"pinyin":"nán wàng",
"def": ["unforgettable"]
},
"无声":
{"simp":"无声",
"trad":"無聲",
"pinyin":"wú shēng",
"def": ["noiseless","noiselessly","silent"]
},
"郭沫若":
{"simp":"郭沫若",
"trad":"郭沫若",
"pinyin":"Guō Mò ruò",
"def": ["Guo Moruo (1892-1978), writer, communist party intellectual and cultural apparatchik"]
},
"清凉":
{"simp":"清凉",
"trad":"清涼",
"pinyin":"qīng liáng",
"def": ["cool","refreshing","(of clothing) skimpy","revealing"]
},
"聚会":
{"simp":"聚会",
"trad":"聚會",
"pinyin":"jù huì",
"def": ["party","gathering","to meet","to get together"]
},
"群众":
{"simp":"群众",
"trad":"群眾",
"pinyin":"qún zhòng",
"def": ["mass","multitude","the masses"]
},
"夜晚":
{"simp":"夜晚",
"trad":"夜晚",
"pinyin":"yè wǎn",
"def": ["night","CL:個|个[ge4]"]
},
"卖":
{"simp":"卖",
"trad":"賣",
"pinyin":"mài",
"def": ["to sell","to betray","to spare no effort","to show off or flaunt"]
},
"巢":
{"simp":"巢",
"trad":"巢",
"pinyin":"cháo",
"def": ["nest"]
},
"外出":
{"simp":"外出",
"trad":"外出",
"pinyin":"wài chū",
"def": ["to go out","to go away (on a trip etc)"]
},
"朦胧":
{"simp":"朦胧",
"trad":"朦朧",
"pinyin":"méng lóng",
"def": ["hazy"]
},
"做针线":
{"simp":"做针线",
"trad":"做針線",
"pinyin":"zuò zhēn xiàn",
"def": ["to do needlework"]
},
"通电":
{"simp":"通电",
"trad":"通電",
"pinyin":"tōng diàn",
"def": ["to set up an electric circuit","to electrify","to switch on","to be connected to an electricity grid","open telegram"]
},
"三十":
{"simp":"三十",
"trad":"三十",
"pinyin":"sān shí",
"def": ["thirty","30"]
},
"夹缝":
{"simp":"夹缝",
"trad":"夾縫",
"pinyin":"jiā fèng",
"def": ["crack","crevice"]
},
"分之":
{"simp":"分之",
"trad":"分之",
"pinyin":"fēn zhī",
"def": ["(indicating a fraction)"]
},
"看书":
{"simp":"看书",
"trad":"看書",
"pinyin":"kàn shū",
"def": ["to read","to study"]
},
"不自觉":
{"simp":"不自觉",
"trad":"不自覺",
"pinyin":"bù zì jué",
"def": ["unaware","unconscious of sth"]
},
"活":
{"simp":"活",
"trad":"活",
"pinyin":"huó",
"def": ["to live","alive","living","work","workmanship"]
},
"吧":
{"simp":"吧",
"trad":"吧",
"pinyin":"biā",
"def": ["(onom.) smack!"]
},
"从来没":
{"simp":"从来没",
"trad":"從來沒",
"pinyin":"cóng lái méi",
"def": ["have never","has never"]
},
"没有意义":
{"simp":"没有意义",
"trad":"沒有意義",
"pinyin":"méi yǒu yì yì",
"def": ["not to have any meaning","meaningless"]
},
"滩":
{"simp":"滩",
"trad":"灘",
"pinyin":"tān",
"def": ["beach","shoal","rapids","CL:片[pian4]","classifier for liquids: pool, puddle"]
},
"地狱":
{"simp":"地狱",
"trad":"地獄",
"pinyin":"dì yù",
"def": ["hell","infernal","underworld","(Buddhism) Naraka"]
},
"刘海":
{"simp":"刘海",
"trad":"劉海",
"pinyin":"liú hǎi",
"def": ["bangs","fringe (hair)"]
},
"外行":
{"simp":"外行",
"trad":"外行",
"pinyin":"wài háng",
"def": ["layman","amateur"]
},
"权利":
{"simp":"权利",
"trad":"權利",
"pinyin":"quán lì",
"def": ["right (i.e. an entitlement to sth)","(classical) power and wealth"]
},
"吱":
{"simp":"吱",
"trad":"吱",
"pinyin":"zī",
"def": ["(onom.) to squeak (of mice)","to chirp or peep (of small birds)"]
},
"冷若冰霜":
{"simp":"冷若冰霜",
"trad":"冷若冰霜",
"pinyin":"lěng ruò bīng shuāng",
"def": ["as cold as ice and frost (idiom, usually of woman); icy manner","frigid"]
},
"视":
{"simp":"视",
"trad":"視",
"pinyin":"shì",
"def": ["to look at","to regard","to inspect"]
},
"一道":
{"simp":"一道",
"trad":"一道",
"pinyin":"yī dào",
"def": ["together"]
},
"炭":
{"simp":"炭",
"trad":"炭",
"pinyin":"tàn",
"def": ["wood charcoal","coal"]
},
"少量":
{"simp":"少量",
"trad":"少量",
"pinyin":"shǎo liàng",
"def": ["a smidgen","a little bit","a few"]
},
"细":
{"simp":"细",
"trad":"細",
"pinyin":"xì",
"def": ["thin or slender","finely particulate","thin and soft","fine","delicate","trifling","(of a sound) quiet","frugal"]
},
"周岁":
{"simp":"周岁",
"trad":"週歲",
"pinyin":"zhōu suì",
"def": ["one full year (e.g. on child's first birthday)"]
},
"陶醉":
{"simp":"陶醉",
"trad":"陶醉",
"pinyin":"táo zuì",
"def": ["to be infatuated with","to be drunk with","to be enchanted with","to revel in"]
},
"密密":
{"simp":"密密",
"trad":"密密",
"pinyin":"mì mì",
"def": ["thick","dense","close"]
},
"西北":
{"simp":"西北",
"trad":"西北",
"pinyin":"xī běi",
"def": ["northwest"]
},
"家伙":
{"simp":"家伙",
"trad":"家伙",
"pinyin":"jiā huo",
"def": ["household dish, implement or furniture","domestic animal","(coll.) guy","chap","weapon"]
},
"真切":
{"simp":"真切",
"trad":"真切",
"pinyin":"zhēn qiè",
"def": ["vivid","distinct","clear","sincere","honest"]
},
"几次":
{"simp":"几次",
"trad":"幾次",
"pinyin":"jǐ cì",
"def": ["several times"]
},
"鞋底":
{"simp":"鞋底",
"trad":"鞋底",
"pinyin":"xié dǐ",
"def": ["sole (of a shoe)"]
},
"小人物":
{"simp":"小人物",
"trad":"小人物",
"pinyin":"xiǎo rén wù",
"def": ["nonentity","a nobody"]
},
"复课":
{"simp":"复课",
"trad":"復課",
"pinyin":"fù kè",
"def": ["to resume classes"]
},
"冲走":
{"simp":"冲走",
"trad":"沖走",
"pinyin":"chōng zǒu",
"def": ["to flush away"]
},
"敷衍":
{"simp":"敷衍",
"trad":"敷衍",
"pinyin":"fū yǎn",
"def": ["to elaborate (on a theme)","to expound (the classics)","perfunctory","to skimp","to botch","to do sth half-heartedly or just for show","barely enough to get by"]
},
"下山":
{"simp":"下山",
"trad":"下山",
"pinyin":"xià shān",
"def": ["to go down a hill","(of the sun or moon) to set"]
},
"长期":
{"simp":"长期",
"trad":"長期",
"pinyin":"cháng qī",
"def": ["long term","long time","long range (of a forecast)"]
},
"天上":
{"simp":"天上",
"trad":"天上",
"pinyin":"tiān shàng",
"def": ["celestial","heavenly"]
},
"身处":
{"simp":"身处",
"trad":"身處",
"pinyin":"shēn chǔ",
"def": ["in (some place)","to be in (adversity, a difficult situation, danger, turmoil etc)","to find oneself in","placed in","surrounded by"]
},
"掉下":
{"simp":"掉下",
"trad":"掉下",
"pinyin":"diào xià",
"def": ["to drop down","to fall"]
},
"细看":
{"simp":"细看",
"trad":"細看",
"pinyin":"xì kàn",
"def": ["to peer","to scan","to examine carefully"]
},
"画家":
{"simp":"画家",
"trad":"畫家",
"pinyin":"huà jiā",
"def": ["painter","CL:個|个[ge4]"]
},
"恶劣":
{"simp":"恶劣",
"trad":"惡劣",
"pinyin":"è liè",
"def": ["vile","nasty","of very poor quality"]
},
"正规":
{"simp":"正规",
"trad":"正規",
"pinyin":"zhèng guī",
"def": ["regular","according to standards"]
},
"教徒":
{"simp":"教徒",
"trad":"教徒",
"pinyin":"jiào tú",
"def": ["disciple","follower of a religion"]
},
"媳妇":
{"simp":"媳妇",
"trad":"媳婦",
"pinyin":"xí fù",
"def": ["daughter-in-law","wife (of a younger man)","young married woman","young woman"]
},
"注":
{"simp":"注",
"trad":"註",
"pinyin":"zhù",
"def": ["to register","to annotate","note","comment"]
},
"她":
{"simp":"她",
"trad":"她",
"pinyin":"tā",
"def": ["she"]
},
"除了":
{"simp":"除了",
"trad":"除了",
"pinyin":"chú le",
"def": ["besides","apart from (... also...)","in addition to","except (for)"]
},
"创作":
{"simp":"创作",
"trad":"創作",
"pinyin":"chuàng zuò",
"def": ["to create","to produce","to write","creative work","creation","CL:個|个[ge4]"]
},
"寄":
{"simp":"寄",
"trad":"寄",
"pinyin":"jì",
"def": ["to send","to mail","to entrust","to depend on","to attach oneself to","to live (in a house)","to lodge","foster (son etc)"]
},
"色调":
{"simp":"色调",
"trad":"色調",
"pinyin":"sè diào",
"def": ["hue","tone"]
},
"明":
{"simp":"明",
"trad":"明",
"pinyin":"míng",
"def": ["bright","opposite: dark 暗[an4]","(of meaning) clear","to understand","next","public or open","wise","generic term for a sacrifice to the gods"]
},
"袅袅婷婷":
{"simp":"袅袅婷婷",
"trad":"裊裊婷婷",
"pinyin":"niǎo niǎo tíng tíng",
"def": ["(of a woman) elegant and supple"]
},
"肚兜":
{"simp":"肚兜",
"trad":"肚兜",
"pinyin":"dù dōu",
"def": ["undergarment covering the chest and abdomen"]
},
"打败":
{"simp":"打败",
"trad":"打敗",
"pinyin":"dǎ bài",
"def": ["to defeat","to overpower","to beat","to be defeated"]
},
"人头":
{"simp":"人头",
"trad":"人頭",
"pinyin":"rén tóu",
"def": ["person","number of people","(per) capita","(a person's) head","(Tw) person whose identity is used by sb else (e.g. to create a bogus account)"]
},
"圆润":
{"simp":"圆润",
"trad":"圓潤",
"pinyin":"yuán rùn",
"def": ["mellow and full","suave","smooth and round","rich (in voice)"]
},
"不动":
{"simp":"不动",
"trad":"不動",
"pinyin":"bù dòng",
"def": ["motionless"]
},
"突出":
{"simp":"突出",
"trad":"突出",
"pinyin":"tū chū",
"def": ["prominent","outstanding","to give prominence to","to protrude","to project"]
},
"美的":
{"simp":"美的",
"trad":"美的",
"pinyin":"Měi dí",
"def": ["Midea (brand)"]
},
"涂":
{"simp":"涂",
"trad":"涂",
"pinyin":"tú",
"def": ["variant of 途[tu2]"]
},
"黑暗":
{"simp":"黑暗",
"trad":"黑暗",
"pinyin":"hēi àn",
"def": ["dark","darkly","darkness"]
},
"隐去":
{"simp":"隐去",
"trad":"隱去",
"pinyin":"yǐn qù",
"def": ["to disappear","to hide"]
},
"让开":
{"simp":"让开",
"trad":"讓開",
"pinyin":"ràng kāi",
"def": ["to get out of the way","to step aside"]
},
"惯":
{"simp":"惯",
"trad":"慣",
"pinyin":"guàn",
"def": ["accustomed to","used to","indulge","to spoil (a child)"]
},
"窗户":
{"simp":"窗户",
"trad":"窗戶",
"pinyin":"chuāng hu",
"def": ["window","CL:個|个[ge4],扇[shan4]"]
},
"封冻":
{"simp":"封冻",
"trad":"封凍",
"pinyin":"fēng dòng",
"def": ["to freeze over (of water or land)"]
},
"买":
{"simp":"买",
"trad":"買",
"pinyin":"mǎi",
"def": ["to buy","to purchase"]
},
"雕":
{"simp":"雕",
"trad":"鵰",
"pinyin":"diāo",
"def": ["bird of prey"]
},
"法律":
{"simp":"法律",
"trad":"法律",
"pinyin":"fǎ lù:",
"def": ["law","CL:條|条[tiao2], 套[tao4], 個|个[ge4]"]
},
"冰":
{"simp":"冰",
"trad":"氷",
"pinyin":"bīng",
"def": ["variant of 冰[bing1]"]
},
"喜欢":
{"simp":"喜欢",
"trad":"喜歡",
"pinyin":"xǐ huan",
"def": ["to like","to be fond of"]
},
"运输":
{"simp":"运输",
"trad":"運輸",
"pinyin":"yùn shū",
"def": ["to transport","to carry","transportation"]
},
"工厂":
{"simp":"工厂",
"trad":"工廠",
"pinyin":"gōng chǎng",
"def": ["factory","CL:家[jia1],座[zuo4]"]
},
"针线活儿":
{"simp":"针线活儿",
"trad":"針線活兒",
"pinyin":"zhēn xiàn huó r5",
"def": ["needlework","working for a living as a needleworker"]
},
"儿子":
{"simp":"儿子",
"trad":"兒子",
"pinyin":"ér zi",
"def": ["son"]
},
"满意":
{"simp":"满意",
"trad":"滿意",
"pinyin":"mǎn yì",
"def": ["satisfied","pleased","to one's satisfaction"]
},
"自转":
{"simp":"自转",
"trad":"自轉",
"pinyin":"zì zhuàn",
"def": ["rotation"]
},
"心绪":
{"simp":"心绪",
"trad":"心緒",
"pinyin":"xīn xù",
"def": ["state of mind","mood"]
},
"闭着":
{"simp":"闭着",
"trad":"閉著",
"pinyin":"bì zhe",
"def": ["closed"]
},
"活性炭":
{"simp":"活性炭",
"trad":"活性炭",
"pinyin":"huó xìng tàn",
"def": ["activated carbon"]
},
"以及":
{"simp":"以及",
"trad":"以及",
"pinyin":"yǐ jí",
"def": ["as well as","too","and"]
},
"小屋":
{"simp":"小屋",
"trad":"小屋",
"pinyin":"xiǎo wū",
"def": ["cabin","lodge","cottage","chalet","hut","shed"]
},
"附着":
{"simp":"附着",
"trad":"附著",
"pinyin":"fù zhuó",
"def": ["to adhere","attachment"]
},
"昏迷":
{"simp":"昏迷",
"trad":"昏迷",
"pinyin":"hūn mí",
"def": ["to lose consciousness","to be in a coma","stupor","coma","stunned","disoriented"]
},
"球面":
{"simp":"球面",
"trad":"球面",
"pinyin":"qiú miàn",
"def": ["sphere"]
},
"全神贯注":
{"simp":"全神贯注",
"trad":"全神貫注",
"pinyin":"quán shén guàn zhù",
"def": ["to concentrate one's attention completely (idiom)","with rapt attention"]
},
"若":
{"simp":"若",
"trad":"若",
"pinyin":"ruò",
"def": ["to seem","like","as","if"]
},
"镶":
{"simp":"镶",
"trad":"鑲",
"pinyin":"xiāng",
"def": ["to inlay","to embed","ridge","border"]
},
"不比":
{"simp":"不比",
"trad":"不比",
"pinyin":"bù bǐ",
"def": ["unlike"]
},
"镜子":
{"simp":"镜子",
"trad":"鏡子",
"pinyin":"jìng zi",
"def": ["mirror","CL:面[mian4],個|个[ge4]"]
},
"圆":
{"simp":"圆",
"trad":"圓",
"pinyin":"yuán",
"def": ["circle","round","circular","spherical","(of the moon) full","unit of Chinese currency (yuan)","tactful","to make consistent and whole (the narrative of a dream or a lie)"]
},
"当天":
{"simp":"当天",
"trad":"當天",
"pinyin":"dàng tiān",
"def": ["the same day"]
},
"尺度":
{"simp":"尺度",
"trad":"尺度",
"pinyin":"chǐ dù",
"def": ["scale","yardstick"]
},
"布满":
{"simp":"布满",
"trad":"布滿",
"pinyin":"bù mǎn",
"def": ["to be covered with","to be filled with"]
},
"盒":
{"simp":"盒",
"trad":"盒",
"pinyin":"hé",
"def": ["small box","case"]
},
"融化":
{"simp":"融化",
"trad":"融化",
"pinyin":"róng huà",
"def": ["to melt","to thaw","to dissolve","to blend into","to combine","to fuse"]
},
"用词":
{"simp":"用词",
"trad":"用詞",
"pinyin":"yòng cí",
"def": ["usage (of a term)","wording","phrasing"]
},
"汪清":
{"simp":"汪清",
"trad":"汪清",
"pinyin":"Wāng qīng",
"def": ["Wangqing County in Yanbian Korean Autonomous Prefecture 延邊朝鮮族自治州|延边朝鲜族自治州[Yan2 bian1 Chao2 xian3 zu2 Zi4 zhi4 zhou1], Jilin"]
},
"寂寥":
{"simp":"寂寥",
"trad":"寂寥",
"pinyin":"jì liáo",
"def": ["(literary) quiet and desolate","lonely","vast and empty"]
},
"热火朝天":
{"simp":"热火朝天",
"trad":"熱火朝天",
"pinyin":"rè huǒ cháo tiān",
"def": ["in full swing (idiom)","(in a) frenzy","buzzing with activity"]
},
"红灯":
{"simp":"红灯",
"trad":"紅燈",
"pinyin":"hóng dēng",
"def": ["red light"]
},
"湖泊":
{"simp":"湖泊",
"trad":"湖泊",
"pinyin":"hú pō",
"def": ["lake"]
},
"变":
{"simp":"变",
"trad":"變",
"pinyin":"biàn",
"def": ["to change","to become different","to transform","to vary","rebellion"]
},
"冲击":
{"simp":"冲击",
"trad":"衝擊",
"pinyin":"chōng jī",
"def": ["to attack","to batter","(of waves) to pound against","shock","impact"]
},
"澈":
{"simp":"澈",
"trad":"澈",
"pinyin":"chè",
"def": ["clear (water)","thorough"]
},
"落实":
{"simp":"落实",
"trad":"落實",
"pinyin":"luò shí",
"def": ["practical","workable","to implement","to carry out","to decide"]
},
"兴奋":
{"simp":"兴奋",
"trad":"興奮",
"pinyin":"xīng fèn",
"def": ["excited","excitement","(physiology) excitation"]
},
"生命":
{"simp":"生命",
"trad":"生命",
"pinyin":"shēng mìng",
"def": ["life (as the characteristic of living beings)","living being","creature","CL:個|个[ge4],條|条[tiao2]"]
},
"作战":
{"simp":"作战",
"trad":"作戰",
"pinyin":"zuò zhàn",
"def": ["combat","to fight"]
},
"笑":
{"simp":"笑",
"trad":"笑",
"pinyin":"xiào",
"def": ["laugh","smile","CL:個|个[ge4]"]
},
"宁愿":
{"simp":"宁愿",
"trad":"寧願",
"pinyin":"nìng yuàn",
"def": ["would rather","better"]
},
"以为":
{"simp":"以为",
"trad":"以為",
"pinyin":"yǐ wéi",
"def": ["to think (i.e. to take it to be true that ...) (Usually there is an implication that the notion is mistaken – except when expressing one's own current opinion.)"]
},
"分钟":
{"simp":"分钟",
"trad":"分鐘",
"pinyin":"fēn zhōng",
"def": ["minute"]
},
"远远":
{"simp":"远远",
"trad":"遠遠",
"pinyin":"yuǎn yuǎn",
"def": ["distant","by far"]
},
"继承":
{"simp":"继承",
"trad":"繼承",
"pinyin":"jì chéng",
"def": ["to inherit","to succeed to (the throne etc)","to carry on (a tradition etc)"]
},
"程度":
{"simp":"程度",
"trad":"程度",
"pinyin":"chéng dù",
"def": ["degree (level or extent)","level","CL:個|个[ge4]"]
},
"度过":
{"simp":"度过",
"trad":"度過",
"pinyin":"dù guò",
"def": ["to pass","to spend (time)","to survive","to get through"]
},
"科学研究":
{"simp":"科学研究",
"trad":"科學研究",
"pinyin":"kē xué yán jiū",
"def": ["scientific research"]
},
"迁":
{"simp":"迁",
"trad":"遷",
"pinyin":"qiān",
"def": ["to move","to shift","to change (a position or location etc)","to promote"]
},
"宁都":
{"simp":"宁都",
"trad":"寧都",
"pinyin":"Níng dū",
"def": ["Ningdu county in Ganzhou 贛州|赣州[Gan4 zhou1], Jiangxi"]
},
"闪":
{"simp":"闪",
"trad":"閃",
"pinyin":"shǎn",
"def": ["to dodge","to duck out of the way","to beat it","shaken (by a fall)","to sprain","to pull a muscle","lightning","spark","a flash","to flash (across one's mind)","to leave behind","(Internet slang) (of a display of affection) \"dazzlingly\" saccharine"]
},
"了不起":
{"simp":"了不起",
"trad":"了不起",
"pinyin":"liǎo bu qǐ",
"def": ["amazing","terrific","extraordinary"]
},
"裂解":
{"simp":"裂解",
"trad":"裂解",
"pinyin":"liè jiě",
"def": ["pyrolysis","splitting (chemistry)"]
},
"举目":
{"simp":"举目",
"trad":"舉目",
"pinyin":"jǔ mù",
"def": ["to look","to raise one's eyes"]
},
"舔":
{"simp":"舔",
"trad":"舔",
"pinyin":"tiǎn",
"def": ["to lick","to lap"]
},
"一切":
{"simp":"一切",
"trad":"一切",
"pinyin":"yī qiè",
"def": ["everything","every","all"]
},
"伤口":
{"simp":"伤口",
"trad":"傷口",
"pinyin":"shāng kǒu",
"def": ["wound","cut"]
},
"信奉":
{"simp":"信奉",
"trad":"信奉",
"pinyin":"xìn fèng",
"def": ["belief","to believe (in sth)"]
},
"曙光":
{"simp":"曙光",
"trad":"曙光",
"pinyin":"shǔ guāng",
"def": ["dawn","fig. the dawn of a new era"]
},
"插":
{"simp":"插",
"trad":"揷",
"pinyin":"chā",
"def": ["old variant of 插[cha1]"]
},
"书店":
{"simp":"书店",
"trad":"書店",
"pinyin":"shū diàn",
"def": ["bookstore","CL:家[jia1]"]
},
"中文":
{"simp":"中文",
"trad":"中文",
"pinyin":"Zhōng wén",
"def": ["Chinese language"]
},
"随":
{"simp":"随",
"trad":"隨",
"pinyin":"suí",
"def": ["to follow","to comply with","varying according to...","to allow","subsequently"]
},
"打瞌睡":
{"simp":"打瞌睡",
"trad":"打瞌睡",
"pinyin":"dǎ kē shuì",
"def": ["to doze off"]
},
"家庭":
{"simp":"家庭",
"trad":"家庭",
"pinyin":"jiā tíng",
"def": ["family","household","CL:戶|户[hu4],個|个[ge4]"]
},
"著":
{"simp":"著",
"trad":"著",
"pinyin":"zhù",
"def": ["to make known","to show","to prove","to write","book","outstanding"]
},
"一空":
{"simp":"一空",
"trad":"一空",
"pinyin":"yī kōng",
"def": ["leaving none left","(sold etc) out"]
},
"脚踏实地":
{"simp":"脚踏实地",
"trad":"腳踏實地",
"pinyin":"jiǎo tà shí dì",
"def": ["to have one's feet firmly planted on the ground (idiom); realistic without flights of fancy","steady and serious character"]
},
"亚种":
{"simp":"亚种",
"trad":"亞種",
"pinyin":"yà zhǒng",
"def": ["subspecies (taxonomy)"]
},
"小学生":
{"simp":"小学生",
"trad":"小學生",
"pinyin":"xiǎo xué shēng",
"def": ["primary school student","schoolchild","CL:個|个[ge4],名[ming2]","(fig.) beginner"]
},
"更是":
{"simp":"更是",
"trad":"更是",
"pinyin":"gèng shì",
"def": ["even more (so)"]
},
"毁":
{"simp":"毁",
"trad":"譭",
"pinyin":"huǐ",
"def": ["variant of 毀|毁[hui3]","to defame","to slander"]
},
"门":
{"simp":"门",
"trad":"門",
"pinyin":"mén",
"def": ["gate","door","CL:扇[shan4]","gateway","doorway","CL:個|个[ge4]","opening","valve","switch","way to do something","knack","family","house","(religious) sect","school (of thought)","class","category","phylum or division (taxonomy)","classifier for large guns","classifier for lessons, subjects, branches of technology","(suffix) -gate (i.e. scandal; derived from Watergate)"]
},
"钥匙":
{"simp":"钥匙",
"trad":"鑰匙",
"pinyin":"yào shi",
"def": ["key","CL:把[ba3]"]
},
"奋斗":
{"simp":"奋斗",
"trad":"奮鬥",
"pinyin":"fèn dòu",
"def": ["to strive","to struggle"]
},
"天真":
{"simp":"天真",
"trad":"天真",
"pinyin":"tiān zhēn",
"def": ["naive","innocent","artless"]
},
"研究报告":
{"simp":"研究报告",
"trad":"研究報告",
"pinyin":"yán jiū bào gào",
"def": ["research report"]
},
"敲门":
{"simp":"敲门",
"trad":"敲門",
"pinyin":"qiāo mén",
"def": ["to knock on a door"]
},
"全国":
{"simp":"全国",
"trad":"全國",
"pinyin":"quán guó",
"def": ["whole nation","nationwide","countrywide","national"]
},
"回归":
{"simp":"回归",
"trad":"回歸",
"pinyin":"huí guī",
"def": ["to return to","to retreat","regression (statistics)"]
},
"最少":
{"simp":"最少",
"trad":"最少",
"pinyin":"zuì shǎo",
"def": ["at least","minimum","lowest (amount)","minimal"]
},
"何况":
{"simp":"何况",
"trad":"何況",
"pinyin":"hé kuàng",
"def": ["let alone","to say nothing of","besides","what's more"]
},
"做完":
{"simp":"做完",
"trad":"做完",
"pinyin":"zuò wán",
"def": ["to finish","to complete the task"]
},
"年年":
{"simp":"年年",
"trad":"年年",
"pinyin":"nián nián",
"def": ["year after year","yearly","every year","annually"]
},
"虚幻":
{"simp":"虚幻",
"trad":"虛幻",
"pinyin":"xū huàn",
"def": ["imaginary","illusory"]
},
"幻觉":
{"simp":"幻觉",
"trad":"幻覺",
"pinyin":"huàn jué",
"def": ["illusion","hallucination","figment of one's imagination"]
},
"白垩纪":
{"simp":"白垩纪",
"trad":"白堊紀",
"pinyin":"Bái è jì",
"def": ["Cretaceous (geological period 140-65m years ago)"]
},
"类":
{"simp":"类",
"trad":"類",
"pinyin":"lèi",
"def": ["kind","type","class","category","similar","like","to resemble"]
},
"认定":
{"simp":"认定",
"trad":"認定",
"pinyin":"rèn dìng",
"def": ["to maintain (that sth is true)","to determine (a fact)","determination (of an amount)","of the firm opinion","to believe firmly","to set one's mind on","to identify with"]
},
"谋杀":
{"simp":"谋杀",
"trad":"謀殺",
"pinyin":"móu shā",
"def": ["to murder","to assassinate","intentional homicide"]
},
"口号":
{"simp":"口号",
"trad":"口號",
"pinyin":"kǒu hào",
"def": ["slogan","catchphrase","CL:個|个[ge4]"]
},
"试着":
{"simp":"试着",
"trad":"試著",
"pinyin":"shì zhe",
"def": ["(coll.) to try to"]
},
"检修":
{"simp":"检修",
"trad":"檢修",
"pinyin":"jiǎn xiū",
"def": ["to overhaul","to examine and fix (a motor)","to service (a vehicle)"]
},
"对面":
{"simp":"对面",
"trad":"對面",
"pinyin":"duì miàn",
"def": ["(sitting) opposite","across (the street)","directly in front","to be face to face"]
},
"麻木":
{"simp":"麻木",
"trad":"麻木",
"pinyin":"má mù",
"def": ["numb","insensitive","apathetic"]
},
"忘掉":
{"simp":"忘掉",
"trad":"忘掉",
"pinyin":"wàng diào",
"def": ["to forget"]
},
"想象力":
{"simp":"想象力",
"trad":"想象力",
"pinyin":"xiǎng xiàng lì",
"def": ["imagination"]
},
"阅览室":
{"simp":"阅览室",
"trad":"閱覽室",
"pinyin":"yuè lǎn shì",
"def": ["reading room","CL:間|间[jian1]"]
},
"本能":
{"simp":"本能",
"trad":"本能",
"pinyin":"běn néng",
"def": ["instinct"]
},
"不再":
{"simp":"不再",
"trad":"不再",
"pinyin":"bù zài",
"def": ["no more","no longer"]
},
"画":
{"simp":"画",
"trad":"畫",
"pinyin":"huà",
"def": ["to draw","picture","painting","CL:幅[fu2],張|张[zhang1]","classifier for paintings etc","variant of 劃|划[hua4]"]
},
"感觉到":
{"simp":"感觉到",
"trad":"感覺到",
"pinyin":"gǎn jué dào",
"def": ["to feel","to sense","to detect","to perceive","to become aware"]
},
"往事":
{"simp":"往事",
"trad":"往事",
"pinyin":"wǎng shì",
"def": ["past events","former happenings"]
},
"算不了":
{"simp":"算不了",
"trad":"算不了",
"pinyin":"suàn bù liǎo",
"def": ["does not count for anything","of no account"]
},
"想起":
{"simp":"想起",
"trad":"想起",
"pinyin":"xiǎng qǐ",
"def": ["to recall","to think of","to call to mind"]
},
"曾经":
{"simp":"曾经",
"trad":"曾經",
"pinyin":"céng jīng",
"def": ["once","already","former","previously","ever","(past tense marker used before verb or clause)"]
},
"精神错乱":
{"simp":"精神错乱",
"trad":"精神錯亂",
"pinyin":"jīng shén cuò luàn",
"def": ["insanity"]
},
"毫不犹豫":
{"simp":"毫不犹豫",
"trad":"毫不猶豫",
"pinyin":"háo bù yóu yù",
"def": ["without the slightest hesitation"]
},
"惨死":
{"simp":"惨死",
"trad":"慘死",
"pinyin":"cǎn sǐ",
"def": ["to die tragically","to meet with a violent death"]
},
"狼":
{"simp":"狼",
"trad":"狼",
"pinyin":"láng",
"def": ["wolf","CL:匹[pi3],隻|只[zhi1],條|条[tiao2]"]
},
"睡意":
{"simp":"睡意",
"trad":"睡意",
"pinyin":"shuì yì",
"def": ["sleepiness"]
},
"丈":
{"simp":"丈",
"trad":"丈",
"pinyin":"zhàng",
"def": ["measure of length, ten Chinese feet (3.3 m)","to measure","husband","polite appellation for an older male"]
},
"出人意料":
{"simp":"出人意料",
"trad":"出人意料",
"pinyin":"chū rén yì liào",
"def": ["unexpected (idiom)","surprising"]
},
"父亲":
{"simp":"父亲",
"trad":"父親",
"pinyin":"fù qīn",
"def": ["father","also pr. [fu4 qin5]","CL:個|个[ge4]"]
},
"紧跟":
{"simp":"紧跟",
"trad":"緊跟",
"pinyin":"jǐn gēn",
"def": ["to follow precisely","to comply with"]
},
"大门":
{"simp":"大门",
"trad":"大門",
"pinyin":"dà mén",
"def": ["entrance","door","gate","large and influential family"]
},
"寄予":
{"simp":"寄予",
"trad":"寄予",
"pinyin":"jì yǔ",
"def": ["to place (hope, importance etc) on","to express","to show","to give"]
},
"不久":
{"simp":"不久",
"trad":"不久",
"pinyin":"bù jiǔ",
"def": ["not long (after)","before too long","soon","soon after"]
},
"对我来说":
{"simp":"对我来说",
"trad":"對我來說",
"pinyin":"duì wǒ lái shuō",
"def": ["as far as I'm concerned"]
},
"高喊":
{"simp":"高喊",
"trad":"高喊",
"pinyin":"gāo hǎn",
"def": ["to shout loudly","to raise a cry","to yell"]
},
"教育部":
{"simp":"教育部",
"trad":"教育部",
"pinyin":"Jiào yù bù",
"def": ["Ministry of Education"]
},
"冷却":
{"simp":"冷却",
"trad":"冷卻",
"pinyin":"lěng què",
"def": ["to cool off","cooling"]
},
"转向":
{"simp":"转向",
"trad":"轉向",
"pinyin":"zhuàn xiàng",
"def": ["to get lost","to lose one's way"]
},
"牛":
{"simp":"牛",
"trad":"牛",
"pinyin":"niú",
"def": ["ox","cow","bull","CL:條|条[tiao2],頭|头[tou2]","newton (abbr. for 牛頓|牛顿[niu2 dun4])","(slang) awesome"]
},
"棚":
{"simp":"棚",
"trad":"棚",
"pinyin":"péng",
"def": ["shed","canopy","shack"]
},
"欧美":
{"simp":"欧美",
"trad":"歐美",
"pinyin":"Oū Měi",
"def": ["Europe and America","the West"]
},
"三中全会":
{"simp":"三中全会",
"trad":"三中全會",
"pinyin":"Sān Zhōng Quán huì",
"def": ["third plenum of a national congress of the Chinese Communist Party"]
},
"缓缓":
{"simp":"缓缓",
"trad":"緩緩",
"pinyin":"huǎn huǎn",
"def": ["slowly","unhurriedly","little by little"]
},
"心里":
{"simp":"心里",
"trad":"心裡",
"pinyin":"xīn li",
"def": ["chest","heart","mind"]
},
"愈合":
{"simp":"愈合",
"trad":"癒合",
"pinyin":"yù hé",
"def": ["(of a wound) to heal"]
},
"夺权":
{"simp":"夺权",
"trad":"奪權",
"pinyin":"duó quán",
"def": ["to seize power"]
},
"上台":
{"simp":"上台",
"trad":"上台",
"pinyin":"shàng tái",
"def": ["to rise to power (in politics)","to go on stage (in the theater)"]
},
"赌博":
{"simp":"赌博",
"trad":"賭博",
"pinyin":"dǔ bó",
"def": ["to gamble"]
},
"届":
{"simp":"届",
"trad":"屆",
"pinyin":"jiè",
"def": ["to arrive at (place or time)","period","to become due","classifier for events, meetings, elections, sporting fixtures, years (of graduation)"]
},
"无疑":
{"simp":"无疑",
"trad":"無疑",
"pinyin":"wú yí",
"def": ["undoubtedly; without doubt; for sure"]
},
"扔":
{"simp":"扔",
"trad":"扔",
"pinyin":"rēng",
"def": ["to throw","to throw away"]
},
"副":
{"simp":"副",
"trad":"副",
"pinyin":"fù",
"def": ["secondary","auxiliary","deputy","assistant","vice-","abbr. for 副詞|副词 adverb","classifier for pairs, sets of things & facial expressions"]
},
"琴":
{"simp":"琴",
"trad":"琹",
"pinyin":"qín",
"def": ["variant of 琴[qin2], guqin or zither"]
},
"青云直上":
{"simp":"青云直上",
"trad":"青雲直上",
"pinyin":"qīng yún zhí shàng",
"def": ["rising straight up in a clear sky (idiom); rapid promotion to a high post","meteoric career"]
},
"不知":
{"simp":"不知",
"trad":"不知",
"pinyin":"bù zhī",
"def": ["not to know","unaware","unknowingly","fig. not to admit (defeat, hardships, tiredness etc)"]
},
"礼遇":
{"simp":"礼遇",
"trad":"禮遇",
"pinyin":"lǐ yù",
"def": ["courtesy","deferential treatment","polite reception"]
},
"副校长":
{"simp":"副校长",
"trad":"副校長",
"pinyin":"fù xiào zhǎng",
"def": ["vice-principal"]
},
"部委":
{"simp":"部委",
"trad":"部委",
"pinyin":"bù wěi",
"def": ["ministries and commissions"]
},
"镇":
{"simp":"镇",
"trad":"鎮",
"pinyin":"zhèn",
"def": ["to press down","to calm","to subdue","to suppress","to guard","garrison","small town","to cool or chill (food or drinks)"]
},
"聪明":
{"simp":"聪明",
"trad":"聰明",
"pinyin":"cōng ming",
"def": ["intelligent","clever","bright","smart","acute (of sight and hearing)"]
},
"摆动":
{"simp":"摆动",
"trad":"擺動",
"pinyin":"bǎi dòng",
"def": ["to sway","to swing","to move back and forth","to oscillate"]
},
"离":
{"simp":"离",
"trad":"離",
"pinyin":"lí",
"def": ["to leave","to part from","to be away from","(in giving distances) from","without (sth)","independent of","one of the Eight Trigrams 八卦[ba1 gua4], symbolizing fire","☲"]
},
"名牌":
{"simp":"名牌",
"trad":"名牌",
"pinyin":"míng pái",
"def": ["famous brand","nameplate","name tag"]
},
"折断":
{"simp":"折断",
"trad":"折斷",
"pinyin":"zhé duàn",
"def": ["to snap sth off","to break"]
},
"恰到好处":
{"simp":"恰到好处",
"trad":"恰到好處",
"pinyin":"qià dào hǎo chù",
"def": ["it's just perfect","it's just right"]
},
"见到":
{"simp":"见到",
"trad":"見到",
"pinyin":"jiàn dào",
"def": ["to see"]
},
"速度":
{"simp":"速度",
"trad":"速度",
"pinyin":"sù dù",
"def": ["speed","rate","velocity","(music) tempo","CL:個|个[ge4]"]
},
"保养":
{"simp":"保养",
"trad":"保養",
"pinyin":"bǎo yǎng",
"def": ["to take good care of (or conserve) one's health","to keep in good repair","to maintain","maintenance"]
},
"痕迹":
{"simp":"痕迹",
"trad":"痕跡",
"pinyin":"hén jì",
"def": ["vestige","mark","trace"]
},
"来到":
{"simp":"来到",
"trad":"來到",
"pinyin":"lái dào",
"def": ["to come","to arrive"]
},
"母女":
{"simp":"母女",
"trad":"母女",
"pinyin":"mǔ nǔ:",
"def": ["mother and daughter","mother-daughter"]
},
"可爱":
{"simp":"可爱",
"trad":"可愛",
"pinyin":"kě ài",
"def": ["adorable","cute","lovely"]
},
"所致":
{"simp":"所致",
"trad":"所致",
"pinyin":"suǒ zhì",
"def": ["to be caused by"]
},
"趣味":
{"simp":"趣味",
"trad":"趣味",
"pinyin":"qù wèi",
"def": ["fun","interest","delight","taste","liking","preference"]
},
"常规":
{"simp":"常规",
"trad":"常規",
"pinyin":"cháng guī",
"def": ["code of conduct","conventions","common practice","routine (medical procedure etc)"]
},
"洛":
{"simp":"洛",
"trad":"洛",
"pinyin":"luò",
"def": ["used in transliteration"]
},
"服务器":
{"simp":"服务器",
"trad":"服務器",
"pinyin":"fú wù qì",
"def": ["server (computer)","CL:臺|台[tai2]"]
},
"做饭":
{"simp":"做饭",
"trad":"做飯",
"pinyin":"zuò fàn",
"def": ["to prepare a meal","to cook"]
},
"吃的":
{"simp":"吃的",
"trad":"吃的",
"pinyin":"chī de",
"def": ["(coll.) food"]
},
"隔阂":
{"simp":"隔阂",
"trad":"隔閡",
"pinyin":"gé hé",
"def": ["misunderstanding","estrangement","(language etc) barrier"]
},
"副部长":
{"simp":"副部长",
"trad":"副部長",
"pinyin":"fù bù zhǎng",
"def": ["assistant (government) minister"]
},
"切换":
{"simp":"切换",
"trad":"切換",
"pinyin":"qiē huàn",
"def": ["to switch over","to switch modes or data streams","to cut (to a new scene)"]
},
"一瞬间":
{"simp":"一瞬间",
"trad":"一瞬間",
"pinyin":"yī shùn jiān",
"def": ["split second"]
},
"山坡":
{"simp":"山坡",
"trad":"山坡",
"pinyin":"shān pō",
"def": ["hillside"]
},
"长出":
{"simp":"长出",
"trad":"長出",
"pinyin":"zhǎng chū",
"def": ["to sprout (leaves, buds, a beard etc)"]
},
"不耐烦":
{"simp":"不耐烦",
"trad":"不耐煩",
"pinyin":"bù nài fán",
"def": ["impatient","to lose patience"]
},
"西天":
{"simp":"西天",
"trad":"西天",
"pinyin":"Xī tiān",
"def": ["the Western Paradise (Buddhism)"]
},
"面具":
{"simp":"面具",
"trad":"面具",
"pinyin":"miàn jù",
"def": ["mask"]
},
"追究":
{"simp":"追究",
"trad":"追究",
"pinyin":"zhuī jiū",
"def": ["to investigate","to look into"]
},
"藤":
{"simp":"藤",
"trad":"藤",
"pinyin":"téng",
"def": ["rattan","cane","vine"]
},
"信念":
{"simp":"信念",
"trad":"信念",
"pinyin":"xìn niàn",
"def": ["faith","belief","conviction"]
},
"执":
{"simp":"执",
"trad":"執",
"pinyin":"zhí",
"def": ["to execute (a plan)","to grasp"]
},
"避开":
{"simp":"避开",
"trad":"避開",
"pinyin":"bì kāi",
"def": ["to avoid","to evade","to keep away from"]
},
"变态":
{"simp":"变态",
"trad":"變態",
"pinyin":"biàn tài",
"def": ["to metamorphose (biology)","abnormal","perverted","hentai","(slang) pervert"]
},
"中部":
{"simp":"中部",
"trad":"中部",
"pinyin":"zhōng bù",
"def": ["middle part","central section"]
},
"法国":
{"simp":"法国",
"trad":"法國",
"pinyin":"Fǎ guó",
"def": ["France","French"]
},
"抛弃":
{"simp":"抛弃",
"trad":"拋棄",
"pinyin":"pāo qì",
"def": ["to abandon","to discard","to renounce","to dump (sb)"]
},
"鸣":
{"simp":"鸣",
"trad":"鳴",
"pinyin":"míng",
"def": ["to cry (of birds, animals and insects)","to make a sound","to voice (one's gratitude, grievance etc)"]
},
"并不":
{"simp":"并不",
"trad":"並不",
"pinyin":"bìng bù",
"def": ["not at all","emphatically not"]
},
"庭":
{"simp":"庭",
"trad":"庭",
"pinyin":"tíng",
"def": ["main hall","front courtyard","law court"]
},
"气愤":
{"simp":"气愤",
"trad":"氣憤",
"pinyin":"qì fèn",
"def": ["indignant","furious"]
},
"遏制":
{"simp":"遏制",
"trad":"遏制",
"pinyin":"è zhì",
"def": ["to check","to contain","to hold back","to keep within limits","to constrain","to restrain"]
},
"穿插":
{"simp":"穿插",
"trad":"穿插",
"pinyin":"chuān chā",
"def": ["to insert","to take turns, alternate","to interweave","to interlace","subplot","interlude","episode","(military) to thrust deep into the enemy forces"]
},
"造反派":
{"simp":"造反派",
"trad":"造反派",
"pinyin":"zào fǎn pài",
"def": ["rebel faction"]
},
"冷冷":
{"simp":"冷冷",
"trad":"冷冷",
"pinyin":"lěng lěng",
"def": ["coldly"]
},
"前进":
{"simp":"前进",
"trad":"前進",
"pinyin":"qián jìn",
"def": ["to go forward","to forge ahead","to advance","onward"]
},
"点头":
{"simp":"点头",
"trad":"點頭",
"pinyin":"diǎn tóu",
"def": ["to nod"]
},
"意思":
{"simp":"意思",
"trad":"意思",
"pinyin":"yì si",
"def": ["idea","opinion","meaning","wish","desire","interest","fun","token of appreciation, affection etc","CL:個|个[ge4]","to give as a small token","to do sth as a gesture of goodwill etc"]
},
"聊天":
{"simp":"聊天",
"trad":"聊天",
"pinyin":"liáo tiān",
"def": ["to chat","to gossip"]
},
"弯":
{"simp":"弯",
"trad":"彎",
"pinyin":"wān",
"def": ["to bend","bent","a bend","a turn (in the road etc)","CL:道[dao4]"]
},
"失去":
{"simp":"失去",
"trad":"失去",
"pinyin":"shī qù",
"def": ["to lose"]
},
"窗帘":
{"simp":"窗帘",
"trad":"窗簾",
"pinyin":"chuāng lián",
"def": ["window curtains"]
},
"一句话":
{"simp":"一句话",
"trad":"一句話",
"pinyin":"yī jù huà",
"def": ["in a word","in short"]
},
"回来":
{"simp":"回来",
"trad":"回來",
"pinyin":"huí lai",
"def": ["to return","to come back"]
},
"多方":
{"simp":"多方",
"trad":"多方",
"pinyin":"duō fāng",
"def": ["in many ways","from all sides"]
},
"窗":
{"simp":"窗",
"trad":"窻",
"pinyin":"chuāng",
"def": ["variant of 窗[chuang1]"]
},
"查访":
{"simp":"查访",
"trad":"查訪",
"pinyin":"chá fǎng",
"def": ["to investigate"]
},
"返":
{"simp":"返",
"trad":"返",
"pinyin":"fǎn",
"def": ["to return (to)"]
},
"主权":
{"simp":"主权",
"trad":"主權",
"pinyin":"zhǔ quán",
"def": ["sovereignty"]
},
"封":
{"simp":"封",
"trad":"封",
"pinyin":"fēng",
"def": ["to confer","to grant","to bestow a title","to seal","classifier for sealed objects, esp. letters"]
},
"约":
{"simp":"约",
"trad":"約",
"pinyin":"yuē",
"def": ["to make an appointment","to invite","approximately","pact","treaty","to economize","to restrict","to reduce (a fraction)","concise"]
},
"稀稀拉拉":
{"simp":"稀稀拉拉",
"trad":"稀稀拉拉",
"pinyin":"xī xī lā lā",
"def": ["sparse and fragmentary"]
},
"什么样":
{"simp":"什么样",
"trad":"什麼樣",
"pinyin":"shén me yàng",
"def": ["what kind?","what sort?","what appearance?"]
},
"复仇":
{"simp":"复仇",
"trad":"復仇",
"pinyin":"fù chóu",
"def": ["to avenge","vengeance"]
},
"一个个":
{"simp":"一个个",
"trad":"一個個",
"pinyin":"yī gè gè",
"def": ["each and every one"]
},
"服":
{"simp":"服",
"trad":"服",
"pinyin":"fù",
"def": ["classifier for medicine: dose","Taiwan pr. [fu2]"]
},
"仟":
{"simp":"仟",
"trad":"仟",
"pinyin":"qiān",
"def": ["thousand (banker's anti-fraud numeral)"]
},
"哪怕":
{"simp":"哪怕",
"trad":"哪怕",
"pinyin":"nǎ pà",
"def": ["even","even if","even though","no matter how"]
},
"复归":
{"simp":"复归",
"trad":"復歸",
"pinyin":"fù guī",
"def": ["to return","to come back"]
},
"上等":
{"simp":"上等",
"trad":"上等",
"pinyin":"shàng děng",
"def": ["highest quality","top-notch"]
},
"追求":
{"simp":"追求",
"trad":"追求",
"pinyin":"zhuī qiú",
"def": ["to pursue (a goal etc) stubbornly","to seek after","to woo"]
},
"多大":
{"simp":"多大",
"trad":"多大",
"pinyin":"duō dà",
"def": ["how old?","how big?","how much?","so big","that much"]
},
"约定":
{"simp":"约定",
"trad":"約定",
"pinyin":"yuē dìng",
"def": ["to agree on sth (after discussion)","to conclude a bargain","to arrange","to promise","to stipulate","to make an appointment","stipulated (time, amount, quality etc)","an arrangement","a deal","appointment","undertaking","commitment","understanding","engagement","stipulation"]
},
"元首":
{"simp":"元首",
"trad":"元首",
"pinyin":"yuán shǒu",
"def": ["head of state"]
},
"军装":
{"simp":"军装",
"trad":"軍裝",
"pinyin":"jūn zhuāng",
"def": ["military uniform"]
},
"批判":
{"simp":"批判",
"trad":"批判",
"pinyin":"pī pàn",
"def": ["to criticize","critique","CL:個|个[ge4]"]
},
"投入":
{"simp":"投入",
"trad":"投入",
"pinyin":"tóu rù",
"def": ["to throw into","to put into","to throw oneself into","to participate in","to invest in","absorbed","engrossed"]
},
"身":
{"simp":"身",
"trad":"身",
"pinyin":"shēn",
"def": ["body","life","oneself","personally","one's morality and conduct","the main part of a structure or body","pregnant","classifier for sets of clothes: suit, twinset","Kangxi radical 158"]
},
"发白":
{"simp":"发白",
"trad":"發白",
"pinyin":"fā bái",
"def": ["to turn pale","to lose color","to go white"]
},
"洗":
{"simp":"洗",
"trad":"洗",
"pinyin":"xǐ",
"def": ["to wash","to bathe","to develop (photo)"]
},
"显眼":
{"simp":"显眼",
"trad":"顯眼",
"pinyin":"xiǎn yǎn",
"def": ["conspicuous","eye-catching","glamorous"]
},
"补丁":
{"simp":"补丁",
"trad":"補丁",
"pinyin":"bǔ ding",
"def": ["patch (for mending clothes, tires etc)","(software) patch"]
},
"相似":
{"simp":"相似",
"trad":"相似",
"pinyin":"xiāng sì",
"def": ["to resemble","similar","like","resemblance","similarity"]
},
"印象":
{"simp":"印象",
"trad":"印象",
"pinyin":"yìn xiàng",
"def": ["impression (sth that stays in one's mind)","a memory"]
},
"探身":
{"simp":"探身",
"trad":"探身",
"pinyin":"tàn shēn",
"def": ["to lean forward","to lean out (of a window, door etc)"]
},
"在身":
{"simp":"在身",
"trad":"在身",
"pinyin":"zài shēn",
"def": ["to possess","to be occupied or burdened with (work, a contract, a lawsuit)"]
},
"了事":
{"simp":"了事",
"trad":"了事",
"pinyin":"liǎo shì",
"def": ["to dispose of a matter","to be done with it"]
},
"背":
{"simp":"背",
"trad":"背",
"pinyin":"bèi",
"def": ["the back of a body or object","to turn one's back","to hide something from","to learn by heart","to recite from memory","unlucky (slang)","hard of hearing"]
},
"粗壮":
{"simp":"粗壮",
"trad":"粗壯",
"pinyin":"cū zhuàng",
"def": ["thick and solid"]
},
"目力":
{"simp":"目力",
"trad":"目力",
"pinyin":"mù lì",
"def": ["eyesight (i.e. quality of vision)"]
},
"正方形":
{"simp":"正方形",
"trad":"正方形",
"pinyin":"zhèng fāng xíng",
"def": ["square"]
},
"扣子":
{"simp":"扣子",
"trad":"釦子",
"pinyin":"kòu zi",
"def": ["button"]
},
"蚜虫":
{"simp":"蚜虫",
"trad":"蚜蟲",
"pinyin":"yá chóng",
"def": ["greenfly (Aphis spp.)","aphid"]
},
"蓬乱":
{"simp":"蓬乱",
"trad":"蓬亂",
"pinyin":"péng luàn",
"def": ["matted (of straw or hair)","unkempt","overgrown","scraggly","thatch"]
},
"占":
{"simp":"占",
"trad":"占",
"pinyin":"zhàn",
"def": ["to take possession of","to occupy","to take up"]
},
"精致":
{"simp":"精致",
"trad":"精緻",
"pinyin":"jīng zhì",
"def": ["delicate","fine","exquisite","refined"]
},
"影子":
{"simp":"影子",
"trad":"影子",
"pinyin":"yǐng zi",
"def": ["shadow","reflection","(fig.) hint","indication","influence","CL:個|个[ge4]"]
},
"政治家":
{"simp":"政治家",
"trad":"政治家",
"pinyin":"zhèng zhì jiā",
"def": ["statesman","politician","CL:個|个[ge4],位[wei4],名[ming2]"]
},
"厉声":
{"simp":"厉声",
"trad":"厲聲",
"pinyin":"lì shēng",
"def": ["stern voice"]
},
"走路":
{"simp":"走路",
"trad":"走路",
"pinyin":"zǒu lù",
"def": ["to walk","to go on foot"]
},
"舞台":
{"simp":"舞台",
"trad":"舞臺",
"pinyin":"wǔ tái",
"def": ["stage","arena","fig. in the limelight"]
},
"荡然无存":
{"simp":"荡然无存",
"trad":"蕩然無存",
"pinyin":"dàng rán wú cún",
"def": ["to obliterate completely","to vanish from the face of the earth"]
},
"哲":
{"simp":"哲",
"trad":"哲",
"pinyin":"zhé",
"def": ["wise","a sage"]
},
"学说":
{"simp":"学说",
"trad":"學說",
"pinyin":"xué shuō",
"def": ["theory","doctrine"]
},
"再现":
{"simp":"再现",
"trad":"再現",
"pinyin":"zài xiàn",
"def": ["to recreate","to reconstruct (a historical relic)"]
},
"尊严":
{"simp":"尊严",
"trad":"尊嚴",
"pinyin":"zūn yán",
"def": ["dignity","sanctity","honor","majesty"]
},
"拣":
{"simp":"拣",
"trad":"揀",
"pinyin":"jiǎn",
"def": ["to choose","to pick","to sort out","to pick up"]
},
"凌":
{"simp":"凌",
"trad":"凌",
"pinyin":"líng",
"def": ["to approach","to rise high","thick ice","to insult or maltreat"]
},
"魔鬼":
{"simp":"魔鬼",
"trad":"魔鬼",
"pinyin":"mó guǐ",
"def": ["devil"]
},
"坡":
{"simp":"坡",
"trad":"坡",
"pinyin":"pō",
"def": ["slope","CL:個|个[ge4]","sloping","slanted"]
},
"一动不动":
{"simp":"一动不动",
"trad":"一動不動",
"pinyin":"yī dòng bù dòng",
"def": ["motionless"]
},
"小女人":
{"simp":"小女人",
"trad":"小女人",
"pinyin":"xiǎo nǔ: rén",
"def": ["dainty and delicate girl","concubine"]
},
"皈依":
{"simp":"皈依",
"trad":"皈依",
"pinyin":"guī yī",
"def": ["to convert to (a religion)"]
},
"未来":
{"simp":"未来",
"trad":"未來",
"pinyin":"wèi lái",
"def": ["future","tomorrow","CL:個|个[ge4]","approaching","coming","pending"]
},
"尖尖":
{"simp":"尖尖",
"trad":"尖尖",
"pinyin":"jiān jiān",
"def": ["sharp","pointed"]
},
"和美":
{"simp":"和美",
"trad":"和美",
"pinyin":"hé měi",
"def": ["harmonious","in perfect harmony"]
},
"车祸":
{"simp":"车祸",
"trad":"車禍",
"pinyin":"chē huò",
"def": ["traffic accident","car crash","CL:場|场[chang2]"]
},
"从何":
{"simp":"从何",
"trad":"從何",
"pinyin":"cóng hé",
"def": ["whence?","where from?"]
},
"惊恐":
{"simp":"惊恐",
"trad":"驚恐",
"pinyin":"jīng kǒng",
"def": ["to be alarmed","to be frightened"]
},
"大字报":
{"simp":"大字报",
"trad":"大字報",
"pinyin":"dà zì bào",
"def": ["big-character poster"]
},
"家园":
{"simp":"家园",
"trad":"家園",
"pinyin":"jiā yuán",
"def": ["home","homeland"]
},
"在意":
{"simp":"在意",
"trad":"在意",
"pinyin":"zài yì",
"def": ["to care about","to mind"]
},
"拖":
{"simp":"拖",
"trad":"拖",
"pinyin":"tuō",
"def": ["to drag","to tow","to trail","to hang down","to mop (the floor)","to delay","to drag on"]
},
"正儿八经":
{"simp":"正儿八经",
"trad":"正兒八經",
"pinyin":"zhèng ér bā jīng",
"def": ["serious","earnest","real","true"]
},
"清华":
{"simp":"清华",
"trad":"清華",
"pinyin":"Qīng huá",
"def": ["abbr. for 清華大學|清华大学[Qing1 hua2 Da4 xue2]"]
},
"宽阔":
{"simp":"宽阔",
"trad":"寬闊",
"pinyin":"kuān kuò",
"def": ["expansive","wide","width","thickness"]
},
"完毕":
{"simp":"完毕",
"trad":"完畢",
"pinyin":"wán bì",
"def": ["to finish","to end","to complete"]
},
"附中":
{"simp":"附中",
"trad":"附中",
"pinyin":"fù zhōng",
"def": ["attached (or affiliated) secondary (or middle) school","abbr. for 附屬中學|附属中学[fu4 shu3 zhong1 xue2]"]
},
"每年":
{"simp":"每年",
"trad":"每年",
"pinyin":"měi nián",
"def": ["every year","each year","yearly"]
},
"世纪":
{"simp":"世纪",
"trad":"世紀",
"pinyin":"shì jì",
"def": ["century","CL:個|个[ge4]"]
},
"屁股":
{"simp":"屁股",
"trad":"屁股",
"pinyin":"pì gu",
"def": ["buttocks","bottom","butt","back part"]
},
"东方红":
{"simp":"东方红",
"trad":"東方紅",
"pinyin":"Dōng fāng Hóng",
"def": ["The East is Red, north Shaanxi folk song"]
},
"勘探":
{"simp":"勘探",
"trad":"勘探",
"pinyin":"kān tàn",
"def": ["to explore","to survey","to prospect (for oil etc)","prospecting"]
},
"串联":
{"simp":"串联",
"trad":"串聯",
"pinyin":"chuàn lián",
"def": ["to establish ties or contact","in series connection (electricity)"]
},
"无意中":
{"simp":"无意中",
"trad":"無意中",
"pinyin":"wú yì zhōng",
"def": ["accidentally","unintentionally","unexpectedly"]
},
"船体":
{"simp":"船体",
"trad":"船體",
"pinyin":"chuán tǐ",
"def": ["hull","body of a ship"]
},
"照样":
{"simp":"照样",
"trad":"照樣",
"pinyin":"zhào yàng",
"def": ["as before","(same) as usual","in the same manner","still","nevertheless"]
},
"签":
{"simp":"签",
"trad":"籤",
"pinyin":"qiān",
"def": ["inscribed bamboo stick (used in divination, gambling, drawing lots etc)","small wood sliver","label","tag"]
},
"司":
{"simp":"司",
"trad":"司",
"pinyin":"sī",
"def": ["to take charge of","to manage","department (under a ministry)"]
},
"抛物面":
{"simp":"抛物面",
"trad":"拋物面",
"pinyin":"pāo wù miàn",
"def": ["paraboloid (geometry)"]
},
"所属":
{"simp":"所属",
"trad":"所屬",
"pinyin":"suǒ shǔ",
"def": ["one's affiliation (i.e. the organization one is affiliated with)","subordinate (i.e. those subordinate to oneself)","belonging to","affiliated","under one's command"]
},
"联":
{"simp":"联",
"trad":"聯",
"pinyin":"lián",
"def": ["to ally","to unite","to join","(poetry) antithetical couplet"]
},
"局面":
{"simp":"局面",
"trad":"局面",
"pinyin":"jú miàn",
"def": ["aspect","phase","situation"]
},
"相差":
{"simp":"相差",
"trad":"相差",
"pinyin":"xiāng chà",
"def": ["to differ","discrepancy between"]
},
"西":
{"simp":"西",
"trad":"西",
"pinyin":"xī",
"def": ["west"]
},
"纠":
{"simp":"纠",
"trad":"糾",
"pinyin":"jiū",
"def": ["to gather together","to investigate","to entangle","to correct"]
},
"拦腰":
{"simp":"拦腰",
"trad":"攔腰",
"pinyin":"lán yāo",
"def": ["(hitting) squarely in the middle","(slicing) across the middle","to hold by the waist"]
},
"大公":
{"simp":"大公",
"trad":"大公",
"pinyin":"dà gōng",
"def": ["grand duke","impartial"]
},
"红旗":
{"simp":"红旗",
"trad":"紅旗",
"pinyin":"hóng qí",
"def": ["red flag","CL:面[mian4]"]
},
"越来越":
{"simp":"越来越",
"trad":"越來越",
"pinyin":"yuè lái yuè",
"def": ["more and more"]
},
"心旷神怡":
{"simp":"心旷神怡",
"trad":"心曠神怡",
"pinyin":"xīn kuàng shén yí",
"def": ["lit. heart untroubled, spirit pleased (idiom); carefree and relaxed"]
},
"队":
{"simp":"队",
"trad":"隊",
"pinyin":"duì",
"def": ["squadron","team","group","CL:個|个[ge4]"]
},
"校园":
{"simp":"校园",
"trad":"校園",
"pinyin":"xiào yuán",
"def": ["campus"]
},
"抬头":
{"simp":"抬头",
"trad":"抬頭",
"pinyin":"tái tóu",
"def": ["to raise one's head","to gain ground","account name, or space for writing the name on checks, bills etc"]
},
"创立":
{"simp":"创立",
"trad":"創立",
"pinyin":"chuàng lì",
"def": ["to establish","to set up","to found"]
},
"手榴弹":
{"simp":"手榴弹",
"trad":"手榴彈",
"pinyin":"shǒu liú dàn",
"def": ["hand grenade"]
},
"和平":
{"simp":"和平",
"trad":"和平",
"pinyin":"hé píng",
"def": ["peace","peaceful"]
},
"植被":
{"simp":"植被",
"trad":"植被",
"pinyin":"zhí bèi",
"def": ["vegetation","plant cover"]
},
"骨头":
{"simp":"骨头",
"trad":"骨頭",
"pinyin":"gǔ tou",
"def": ["bone","CL:根[gen1],塊|块[kuai4]","moral character","bitterness","Taiwan pr. [gu2 tou5]"]
},
"意气风发":
{"simp":"意气风发",
"trad":"意氣風發",
"pinyin":"yì qì fēng fā",
"def": ["high-spirited","full of mettle"]
},
"扬起":
{"simp":"扬起",
"trad":"揚起",
"pinyin":"yáng qǐ",
"def": ["to raise one's head","to perk up"]
},
"偏僻":
{"simp":"偏僻",
"trad":"偏僻",
"pinyin":"piān pì",
"def": ["remote","desolate","far from the city"]
},
"同事":
{"simp":"同事",
"trad":"同事",
"pinyin":"tóng shì",
"def": ["colleague","co-worker","CL:個|个[ge4],位[wei4]"]
},
"锹":
{"simp":"锹",
"trad":"鍬",
"pinyin":"qiāo",
"def": ["shovel","spade"]
},
"穷":
{"simp":"穷",
"trad":"窮",
"pinyin":"qióng",
"def": ["poor","destitute","to use up","to exhaust","thoroughly","extremely","(coll.) persistently and pointlessly"]
},
"大规模":
{"simp":"大规模",
"trad":"大規模",
"pinyin":"dà guī mó",
"def": ["large scale","extensive","wide scale","broad scale"]
},
"农活":
{"simp":"农活",
"trad":"農活",
"pinyin":"nóng huó",
"def": ["farm work"]
},
"雪茄头":
{"simp":"雪茄头",
"trad":"雪茄頭",
"pinyin":"xuě jiā tóu",
"def": ["cigarette lighter plug (inserted in a car's cigarette lighter socket to draw power)"]
},
"久":
{"simp":"久",
"trad":"久",
"pinyin":"jiǔ",
"def": ["(long) time","(long) duration of time"]
},
"飞行":
{"simp":"飞行",
"trad":"飛行",
"pinyin":"fēi xíng",
"def": ["(of planes etc) to fly","flying","flight","aviation"]
},
"雨":
{"simp":"雨",
"trad":"雨",
"pinyin":"yù",
"def": ["(literary) to rain","(of rain, snow etc) to fall","to precipitate","to wet"]
},
"颁布":
{"simp":"颁布",
"trad":"頒布",
"pinyin":"bān bù",
"def": ["to issue","to proclaim","to enact (laws, decrees etc)"]
},
"鸟":
{"simp":"鸟",
"trad":"鳥",
"pinyin":"niǎo",
"def": ["bird","CL:隻|只[zhi1],群[qun2]","\"bird\" radical in Chinese characters (Kangxi radical 196)","(dialect) to pay attention to","(intensifier) damned","goddamn"]
},
"记":
{"simp":"记",
"trad":"記",
"pinyin":"jì",
"def": ["to record","to note","to memorize","to remember","mark","sign","classifier for blows, kicks, shots"]
},
"真是":
{"simp":"真是",
"trad":"真是",
"pinyin":"zhēn shi",
"def": ["indeed","truly","(coll.) (used to express disapproval, annoyance etc about sth)"]
},
"小径":
{"simp":"小径",
"trad":"小徑",
"pinyin":"xiǎo jìng",
"def": ["alley"]
},
"或是":
{"simp":"或是",
"trad":"或是",
"pinyin":"huò shì",
"def": ["or","either one or the other"]
},
"不过":
{"simp":"不过",
"trad":"不過",
"pinyin":"bù guò",
"def": ["only","merely","no more than","but","however","anyway (to get back to a previous topic)","cannot be more (after adjectival)"]
},
"用完":
{"simp":"用完",
"trad":"用完",
"pinyin":"yòng wán",
"def": ["used up","finished"]
},
"武":
{"simp":"武",
"trad":"武",
"pinyin":"wǔ",
"def": ["martial","military"]
},
"贯穿":
{"simp":"贯穿",
"trad":"貫穿",
"pinyin":"guàn chuān",
"def": ["to run through","a connecting thread from beginning to end","to link"]
},
"双方":
{"simp":"双方",
"trad":"雙方",
"pinyin":"shuāng fāng",
"def": ["bilateral","both sides","both parties involved"]
},
"互相":
{"simp":"互相",
"trad":"互相",
"pinyin":"hù xiāng",
"def": ["each other","mutually","mutual"]
},
"皮带":
{"simp":"皮带",
"trad":"皮帶",
"pinyin":"pí dài",
"def": ["strap","leather belt","CL:條|条[tiao2],根[gen1]"]
},
"我去":
{"simp":"我去",
"trad":"我去",
"pinyin":"wǒ qù",
"def": ["(slang) dang!","shoot!"]
},
"小将":
{"simp":"小将",
"trad":"小將",
"pinyin":"xiǎo jiàng",
"def": ["(in classical literature) young military officer of high rank for his age","(during the Cultural Revolution) young militant in the Red Guard","(in modern usage) rising star (in sport, politics etc)"]
},
"凌汛":
{"simp":"凌汛",
"trad":"凌汛",
"pinyin":"líng xùn",
"def": ["ice-jam flood (arising when river downstream freezes more than upstream)"]
},
"水面":
{"simp":"水面",
"trad":"水面",
"pinyin":"shuǐ miàn",
"def": ["water surface"]
},
"隐秘":
{"simp":"隐秘",
"trad":"隱秘",
"pinyin":"yǐn mì",
"def": ["secret","hidden"]
},
"谁知":
{"simp":"谁知",
"trad":"誰知",
"pinyin":"shéi zhī",
"def": ["who would have thought","unexpectedly"]
},
"冻死":
{"simp":"冻死",
"trad":"凍死",
"pinyin":"dòng sǐ",
"def": ["to freeze to death","to die off in winter"]
},
"尸首":
{"simp":"尸首",
"trad":"屍首",
"pinyin":"shī shou",
"def": ["corpse","carcass","dead body"]
},
"哭":
{"simp":"哭",
"trad":"哭",
"pinyin":"kū",
"def": ["to cry","to weep"]
},
"怎么样":
{"simp":"怎么样",
"trad":"怎麼樣",
"pinyin":"zěn me yàng",
"def": ["how?","how about?","how was it?","how are things?"]
},
"流":
{"simp":"流",
"trad":"流",
"pinyin":"liú",
"def": ["to flow","to disseminate","to circulate or spread","to move or drift","to degenerate","to banish or send into exile","stream of water or sth resembling one","class, rate or grade"]
},
"小孩儿":
{"simp":"小孩儿",
"trad":"小孩兒",
"pinyin":"xiǎo hái r5",
"def": ["erhua variant of 小孩[xiao3 hai2]"]
},
"电影":
{"simp":"电影",
"trad":"電影",
"pinyin":"diàn yǐng",
"def": ["movie","film","CL:部[bu4],片[pian4],幕[mu4],場|场[chang3]"]
},
"外国人":
{"simp":"外国人",
"trad":"外國人",
"pinyin":"wài guó rén",
"def": ["foreigner"]
},
"墓":
{"simp":"墓",
"trad":"墓",
"pinyin":"mù",
"def": ["grave","tomb","mausoleum"]
},
"春天":
{"simp":"春天",
"trad":"春天",
"pinyin":"chūn tiān",
"def": ["spring (season)","CL:個|个[ge4]"]
},
"忘":
{"simp":"忘",
"trad":"忘",
"pinyin":"wàng",
"def": ["to forget","to overlook","to neglect"]
},
"刺耳":
{"simp":"刺耳",
"trad":"刺耳",
"pinyin":"cì ěr",
"def": ["ear-piercing"]
},
"大使馆":
{"simp":"大使馆",
"trad":"大使館",
"pinyin":"dà shǐ guǎn",
"def": ["embassy","CL:座[zuo4],個|个[ge4]"]
},
"阴":
{"simp":"阴",
"trad":"隂",
"pinyin":"yīn",
"def": ["variant of 陰|阴[yin1]"]
},
"向着":
{"simp":"向着",
"trad":"向著",
"pinyin":"xiàng zhe",
"def": ["towards","facing (sb or sth)","(coll.) to side with","to favor"]
},
"霏":
{"simp":"霏",
"trad":"霏",
"pinyin":"fēi",
"def": ["fall of snow"]
},
"孤独":
{"simp":"孤独",
"trad":"孤獨",
"pinyin":"gū dú",
"def": ["lonely","solitary"]
},
"瘦弱":
{"simp":"瘦弱",
"trad":"瘦弱",
"pinyin":"shòu ruò",
"def": ["thin and weak"]
},
"吨":
{"simp":"吨",
"trad":"噸",
"pinyin":"dūn",
"def": ["ton (loanword)","Taiwan pr. [dun4]"]
},
"身躯":
{"simp":"身躯",
"trad":"身軀",
"pinyin":"shēn qū",
"def": ["body"]
},
"汗毛":
{"simp":"汗毛",
"trad":"汗毛",
"pinyin":"hàn máo",
"def": ["hair","soft hair","down"]
},
"进攻":
{"simp":"进攻",
"trad":"進攻",
"pinyin":"jìn gōng",
"def": ["to attack","to assault","to go on the offensive","attack","assault","offense (sports)"]
},
"露水":
{"simp":"露水",
"trad":"露水",
"pinyin":"lù shuǐ",
"def": ["dew","fig. short-lasting","ephemeral"]
},
"覆盖":
{"simp":"覆盖",
"trad":"覆蓋",
"pinyin":"fù gài",
"def": ["to cover"]
},
"蒸发":
{"simp":"蒸发",
"trad":"蒸發",
"pinyin":"zhēng fā",
"def": ["to evaporate","evaporation"]
},
"住所":
{"simp":"住所",
"trad":"住所",
"pinyin":"zhù suǒ",
"def": ["habitation","dwelling place","residence","CL:處|处[chu4]"]
},
"怀疑":
{"simp":"怀疑",
"trad":"懷疑",
"pinyin":"huái yí",
"def": ["to doubt (sth)","to be skeptical of","to have one's doubts","to harbor suspicions","to suspect that"]
},
"奶水":
{"simp":"奶水",
"trad":"奶水",
"pinyin":"nǎi shuǐ",
"def": ["breast milk"]
},
"高等":
{"simp":"高等",
"trad":"高等",
"pinyin":"gāo děng",
"def": ["high-level","higher (animals, education etc)","advanced (math etc)"]
},
"引入":
{"simp":"引入",
"trad":"引入",
"pinyin":"yǐn rù",
"def": ["to draw into","to pull into","to introduce"]
},
"天文":
{"simp":"天文",
"trad":"天文",
"pinyin":"tiān wén",
"def": ["astronomy"]
},
"纯":
{"simp":"纯",
"trad":"純",
"pinyin":"chún",
"def": ["pure","simple","unmixed","genuine"]
},
"大气":
{"simp":"大气",
"trad":"大氣",
"pinyin":"dà qì",
"def": ["atmosphere (surrounding the earth)","imposing","impressive","stylish"]
},
"尽量":
{"simp":"尽量",
"trad":"盡量",
"pinyin":"jìn liàng",
"def": ["as much as possible","to the greatest extent"]
},
"黄土":
{"simp":"黄土",
"trad":"黃土",
"pinyin":"huáng tǔ",
"def": ["loess (yellow sandy soil typical of north China)"]
},
"书籍":
{"simp":"书籍",
"trad":"書籍",
"pinyin":"shū jí",
"def": ["books","works"]
},
"山上":
{"simp":"山上",
"trad":"山上",
"pinyin":"Shān shàng",
"def": ["Shanshang township in Tainan county 台南縣|台南县[Tai2 nan2 xian4], Taiwan"]
},
"播放":
{"simp":"播放",
"trad":"播放",
"pinyin":"bō fàng",
"def": ["to broadcast","to transmit"]
},
"水土":
{"simp":"水土",
"trad":"水土",
"pinyin":"shuǐ tǔ",
"def": ["water and soil","surface water","natural environment (extended meaning)","climate"]
},
"裂谷":
{"simp":"裂谷",
"trad":"裂谷",
"pinyin":"liè gǔ",
"def": ["rift valley"]
},
"选定":
{"simp":"选定",
"trad":"選定",
"pinyin":"xuǎn dìng",
"def": ["to select","to choose","to settle on"]
},
"不管":
{"simp":"不管",
"trad":"不管",
"pinyin":"bù guǎn",
"def": ["not to be concerned","regardless of","no matter"]
},
"头":
{"simp":"头",
"trad":"頭",
"pinyin":"tou",
"def": ["suffix for nouns"]
},
"建":
{"simp":"建",
"trad":"建",
"pinyin":"jiàn",
"def": ["to establish","to found","to set up","to build","to construct"]
},
"窑洞":
{"simp":"窑洞",
"trad":"窯洞",
"pinyin":"yáo dòng",
"def": ["yaodong (a kind of cave dwelling in the Loess Plateau in northwest China)","CL:孔[kong3]"]
},
"休整":
{"simp":"休整",
"trad":"休整",
"pinyin":"xiū zhěng",
"def": ["to rest and reorganize (military)"]
},
"外国话":
{"simp":"外国话",
"trad":"外國話",
"pinyin":"wài guó huà",
"def": ["foreign languages"]
},
"国":
{"simp":"国",
"trad":"國",
"pinyin":"guó",
"def": ["country","nation","state","national","CL:個|个[ge4]"]
},
"去世":
{"simp":"去世",
"trad":"去世",
"pinyin":"qù shì",
"def": ["to pass away","to die"]
},
"有事":
{"simp":"有事",
"trad":"有事",
"pinyin":"yǒu shì",
"def": ["to be occupied with sth","to have sth on one's mind","there is something the matter"]
},
"爆发":
{"simp":"爆发",
"trad":"爆發",
"pinyin":"bào fā",
"def": ["to break out","to erupt","to explode","to burst out"]
},
"俺":
{"simp":"俺",
"trad":"俺",
"pinyin":"ǎn",
"def": ["I (northern dialects)"]
},
"名字":
{"simp":"名字",
"trad":"名字",
"pinyin":"míng zi",
"def": ["name (of a person or thing)","CL:個|个[ge4]"]
},
"物理":
{"simp":"物理",
"trad":"物理",
"pinyin":"wù lǐ",
"def": ["physics","physical"]
},
"我方":
{"simp":"我方",
"trad":"我方",
"pinyin":"wǒ fāng",
"def": ["our side","we"]
},
"看病":
{"simp":"看病",
"trad":"看病",
"pinyin":"kàn bìng",
"def": ["to visit a doctor","to see a patient"]
},
"山路":
{"simp":"山路",
"trad":"山路",
"pinyin":"shān lù",
"def": ["mountain road"]
},
"泛":
{"simp":"泛",
"trad":"泛",
"pinyin":"fàn",
"def": ["(bound form) general","non-specific","extensive","pan-","to flood","(literary) to float about","to be suffused with (a color, emotion, odor etc)"]
},
"画布":
{"simp":"画布",
"trad":"畫布",
"pinyin":"huà bù",
"def": ["canvas (artist's painting surface)"]
},
"彩":
{"simp":"彩",
"trad":"彩",
"pinyin":"cǎi",
"def": ["(bright) color","variety","applause","applaud","lottery prize"]
},
"县":
{"simp":"县",
"trad":"縣",
"pinyin":"xiàn",
"def": ["county"]
},
"金发碧眼":
{"simp":"金发碧眼",
"trad":"金髮碧眼",
"pinyin":"jīn fà bì yǎn",
"def": ["fair-haired and blue-eyed","blonde","of Western appearance"]
},
"一行":
{"simp":"一行",
"trad":"一行",
"pinyin":"yī xíng",
"def": ["party","delegation"]
},
"在外":
{"simp":"在外",
"trad":"在外",
"pinyin":"zài wài",
"def": ["outer","excluded"]
},
"海岸线":
{"simp":"海岸线",
"trad":"海岸線",
"pinyin":"hǎi àn xiàn",
"def": ["coastline","seaboard","shoreline"]
},
"自我介绍":
{"simp":"自我介绍",
"trad":"自我介紹",
"pinyin":"zì wǒ jiè shào",
"def": ["self-introduction","to introduce oneself"]
},
"不堪":
{"simp":"不堪",
"trad":"不堪",
"pinyin":"bù kān",
"def": ["cannot bear","cannot stand","utterly","extremely"]
},
"劳作":
{"simp":"劳作",
"trad":"勞作",
"pinyin":"láo zuò",
"def": ["work","manual labor"]
},
"两样":
{"simp":"两样",
"trad":"兩樣",
"pinyin":"liǎng yàng",
"def": ["two kinds","difference"]
},
"提交":
{"simp":"提交",
"trad":"提交",
"pinyin":"tí jiāo",
"def": ["to submit (a report etc)","to refer (a problem) to sb"]
},
"皮肤":
{"simp":"皮肤",
"trad":"皮膚",
"pinyin":"pí fū",
"def": ["skin","CL:層|层[ceng2],塊|块[kuai4]"]
},
"低":
{"simp":"低",
"trad":"低",
"pinyin":"dī",
"def": ["low","beneath","to lower (one's head)","to let droop","to hang down","to incline"]
},
"晒":
{"simp":"晒",
"trad":"曬",
"pinyin":"shài",
"def": ["(of the sun) to shine on","to bask in (the sunshine)","to dry (clothes, grain etc) in the sun","(fig.) to expose and share (one's experiences and thoughts) on the Web (loanword from \"share\")","(coll.) to give the cold shoulder to"]
},
"兴趣":
{"simp":"兴趣",
"trad":"興趣",
"pinyin":"xìng qù",
"def": ["interest (desire to know about sth)","interest (thing in which one is interested)","hobby","CL:個|个[ge4]"]
},
"五号电池":
{"simp":"五号电池",
"trad":"五號電池",
"pinyin":"wǔ hào diàn chí",
"def": ["AA battery (PRC)","Taiwan equivalent: 三號電池|三号电池"]
},
"生物学":
{"simp":"生物学",
"trad":"生物學",
"pinyin":"shēng wù xué",
"def": ["biology"]
},
"麦克":
{"simp":"麦克",
"trad":"麥克",
"pinyin":"mài kè",
"def": ["microphone (loanword)"]
},
"借助":
{"simp":"借助",
"trad":"借助",
"pinyin":"jiè zhù",
"def": ["to draw support from","with the help of"]
},
"国籍":
{"simp":"国籍",
"trad":"國籍",
"pinyin":"guó jí",
"def": ["nationality"]
},
"土坯":
{"simp":"土坯",
"trad":"土坯",
"pinyin":"tǔ pī",
"def": ["mud brick","adobe","unfired earthenware"]
},
"绿":
{"simp":"绿",
"trad":"綠",
"pinyin":"lù:",
"def": ["green","(slang) (derived from 綠帽子|绿帽子[lu:4 mao4 zi5]) to cheat on (one's spouse or boyfriend or girlfriend)"]
},
"植树":
{"simp":"植树",
"trad":"植樹",
"pinyin":"zhí shù",
"def": ["to plant trees"]
},
"铁锨":
{"simp":"铁锨",
"trad":"鐵鍁",
"pinyin":"tiě xiān",
"def": ["iron shovel","spade","CL:把[ba3]"]
},
"树枝":
{"simp":"树枝",
"trad":"樹枝",
"pinyin":"shù zhī",
"def": ["branch","twig"]
},
"风霜":
{"simp":"风霜",
"trad":"風霜",
"pinyin":"fēng shuāng",
"def": ["wind and frost","fig. hardships"]
},
"沙尘":
{"simp":"沙尘",
"trad":"沙塵",
"pinyin":"shā chén",
"def": ["airborne sand and dust"]
},
"一方面":
{"simp":"一方面",
"trad":"一方面",
"pinyin":"yī fāng miàn",
"def": ["on the one hand"]
},
"往后":
{"simp":"往后",
"trad":"往後",
"pinyin":"wǎng hòu",
"def": ["from now on","in the future","time to come"]
},
"行动方案":
{"simp":"行动方案",
"trad":"行動方案",
"pinyin":"xíng dòng fāng àn",
"def": ["program of action"]
},
"床":
{"simp":"床",
"trad":"牀",
"pinyin":"chuáng",
"def": ["variant of 床[chuang2]"]
},
"厌恶":
{"simp":"厌恶",
"trad":"厭惡",
"pinyin":"yàn wù",
"def": ["to loathe","to hate","disgusted with sth"]
},
"不太好":
{"simp":"不太好",
"trad":"不太好",
"pinyin":"bù tài hǎo",
"def": ["not so good","not too well"]
},
"堆":
{"simp":"堆",
"trad":"堆",
"pinyin":"duī",
"def": ["to pile up","to heap up","a mass","pile","heap","stack","large amount"]
},
"大都":
{"simp":"大都",
"trad":"大都",
"pinyin":"dà dū",
"def": ["for the most part","on the whole","metropolitan"]
},
"整个":
{"simp":"整个",
"trad":"整個",
"pinyin":"zhěng gè",
"def": ["whole","entire","total"]
},
"白痴":
{"simp":"白痴",
"trad":"白痴",
"pinyin":"bái chī",
"def": ["idiocy","idiot"]
},
"现代化":
{"simp":"现代化",
"trad":"現代化",
"pinyin":"xiàn dài huà",
"def": ["modernization","CL:個|个[ge4]"]
},
"叹息":
{"simp":"叹息",
"trad":"嘆息",
"pinyin":"tàn xī",
"def": ["to sigh","to gasp (in admiration)"]
},
"彼得":
{"simp":"彼得",
"trad":"彼得",
"pinyin":"Bǐ dé",
"def": ["Peter (name)"]
},
"辛格":
{"simp":"辛格",
"trad":"辛格",
"pinyin":"Xīn gé",
"def": ["Singh (name)"]
},
"动物":
{"simp":"动物",
"trad":"動物",
"pinyin":"dòng wù",
"def": ["animal","CL:隻|只[zhi1],群[qun2],個|个[ge4]"]
},
"质子":
{"simp":"质子",
"trad":"質子",
"pinyin":"zhì zǐ",
"def": ["proton (positively charged nuclear particle)","a prince sent to be held as a hostage in a neighbouring state in ancient China"]
},
"节":
{"simp":"节",
"trad":"節",
"pinyin":"jié",
"def": ["festival","holiday","node","joint","section","segment","part","to economize","to save","to abridge","moral integrity","classifier for segments, e.g. lessons, train wagons, biblical verses","CL:個|个[ge4]"]
},
"浩":
{"simp":"浩",
"trad":"浩",
"pinyin":"hào",
"def": ["grand","vast (water)"]
},
"架":
{"simp":"架",
"trad":"架",
"pinyin":"jià",
"def": ["to support","frame","rack","framework","classifier for planes, large vehicles, radios etc"]
},
"分为":
{"simp":"分为",
"trad":"分為",
"pinyin":"fēn wéi",
"def": ["to divide sth into (parts)","to subdivide"]
},
"杯子":
{"simp":"杯子",
"trad":"杯子",
"pinyin":"bēi zi",
"def": ["cup","glass","CL:個|个[ge4],隻|只[zhi1]"]
},
"一次":
{"simp":"一次",
"trad":"一次",
"pinyin":"yī cì",
"def": ["first","first time","once","(math.) linear (of degree one)"]
},
"救世主":
{"simp":"救世主",
"trad":"救世主",
"pinyin":"Jiù shì zhǔ",
"def": ["the Savior (in Christianity)"]
},
"救":
{"simp":"救",
"trad":"救",
"pinyin":"jiù",
"def": ["to save","to assist","to rescue"]
},
"莫名":
{"simp":"莫名",
"trad":"莫名",
"pinyin":"mò míng",
"def": ["indescribable","ineffable"]
},
"抱":
{"simp":"抱",
"trad":"抱",
"pinyin":"bào",
"def": ["to hold","to carry (in one's arms)","to hug","to embrace","to surround","to cherish","(coll.) (of clothes) to fit nicely"]
},
"对坐":
{"simp":"对坐",
"trad":"對坐",
"pinyin":"duì zuò",
"def": ["to sit facing each other"]
},
"军用":
{"simp":"军用",
"trad":"軍用",
"pinyin":"jūn yòng",
"def": ["(for) military use","military application"]
},
"难道":
{"simp":"难道",
"trad":"難道",
"pinyin":"nán dào",
"def": ["don't tell me ...","could it be that...?"]
},
"尊贵":
{"simp":"尊贵",
"trad":"尊貴",
"pinyin":"zūn guì",
"def": ["respected","respectable","honorable"]
},
"应得":
{"simp":"应得",
"trad":"應得",
"pinyin":"yīng dé",
"def": ["to deserve"]
},
"好多":
{"simp":"好多",
"trad":"好多",
"pinyin":"hǎo duō",
"def": ["many","quite a lot","much better"]
},
"褐":
{"simp":"褐",
"trad":"褐",
"pinyin":"hè",
"def": ["brown","gray or dark color","coarse hemp cloth","Taiwan pr. [he2]"]
},
"燕":
{"simp":"燕",
"trad":"鷰",
"pinyin":"yàn",
"def": ["variant of 燕[yan4]"]
},
"村子":
{"simp":"村子",
"trad":"村子",
"pinyin":"cūn zi",
"def": ["village"]
},
"人文":
{"simp":"人文",
"trad":"人文",
"pinyin":"rén wén",
"def": ["humanities","human affairs","culture"]
},
"远古":
{"simp":"远古",
"trad":"遠古",
"pinyin":"yuǎn gǔ",
"def": ["antiquity","ancient times"]
},
"固定":
{"simp":"固定",
"trad":"固定",
"pinyin":"gù dìng",
"def": ["to fix","to fasten","to set rigidly in place","fixed","set","regular"]
},
"承诺":
{"simp":"承诺",
"trad":"承諾",
"pinyin":"chéng nuò",
"def": ["to promise","to undertake to do something","commitment"]
},
"路线":
{"simp":"路线",
"trad":"路線",
"pinyin":"lù xiàn",
"def": ["itinerary","route","political line (e.g. right revisionist road)","CL:條|条[tiao2]"]
},
"抽象":
{"simp":"抽象",
"trad":"抽象",
"pinyin":"chōu xiàng",
"def": ["abstract","abstraction","CL:種|种[zhong3]"]
},
"徒":
{"simp":"徒",
"trad":"徒",
"pinyin":"tú",
"def": ["disciple","apprentice","believer","on foot","bare or empty","to no avail","only","prison sentence"]
},
"实战":
{"simp":"实战",
"trad":"實戰",
"pinyin":"shí zhàn",
"def": ["real combat","actual combat"]
},
"铁板":
{"simp":"铁板",
"trad":"鐵板",
"pinyin":"tiě bǎn",
"def": ["iron panel","hot iron plate for fast grilling (Japanese: teppan)"]
},
"道德":
{"simp":"道德",
"trad":"道德",
"pinyin":"dào dé",
"def": ["virtue","morality","ethics","CL:種|种[zhong3]"]
},
"挣扎":
{"simp":"挣扎",
"trad":"掙扎",
"pinyin":"zhēng zhá",
"def": ["to struggle"]
},
"红卫兵":
{"simp":"红卫兵",
"trad":"紅衛兵",
"pinyin":"Hóng wèi bīng",
"def": ["Red Guards (Cultural Revolution, 1966-1976)"]
},
"种群":
{"simp":"种群",
"trad":"種群",
"pinyin":"zhǒng qún",
"def": ["population (of a species)","community (of animals or plants)"]
},
"树林":
{"simp":"树林",
"trad":"樹林",
"pinyin":"shù lín",
"def": ["woods","grove","forest"]
},
"落脚":
{"simp":"落脚",
"trad":"落腳",
"pinyin":"luò jiǎo",
"def": ["to stay for a time","to stop over","to lodge","to sink down (into soft ground)","leftovers"]
},
"回升":
{"simp":"回升",
"trad":"回升",
"pinyin":"huí shēng",
"def": ["to rise again after a fall","to pick up","rally (stock market etc)"]
},
"看来":
{"simp":"看来",
"trad":"看來",
"pinyin":"kàn lai",
"def": ["apparently","it seems that"]
},
"指引":
{"simp":"指引",
"trad":"指引",
"pinyin":"zhǐ yǐn",
"def": ["to guide","to show","to point (the way)","directions","guidance","guidelines"]
},
"出没":
{"simp":"出没",
"trad":"出沒",
"pinyin":"chū mò",
"def": ["to come and go","to roam about (mostly unseen)","(of a ghost) to haunt (a place)","(of a criminal) to stalk (the streets)","(of the sun) to rise and set"]
},
"引人注目":
{"simp":"引人注目",
"trad":"引人注目",
"pinyin":"yǐn rén zhù mù",
"def": ["to attract attention","eye-catching","conspicuous"]
},
"繁荣":
{"simp":"繁荣",
"trad":"繁榮",
"pinyin":"fán róng",
"def": ["prosperous","booming (economy)"]
},
"雇":
{"simp":"雇",
"trad":"雇",
"pinyin":"gù",
"def": ["to employ","to hire","to rent"]
},
"村长":
{"simp":"村长",
"trad":"村長",
"pinyin":"cūn zhǎng",
"def": ["village chief","village head"]
},
"人心":
{"simp":"人心",
"trad":"人心",
"pinyin":"rén xīn",
"def": ["popular feeling","the will of the people"]
},
"树苗":
{"simp":"树苗",
"trad":"樹苗",
"pinyin":"shù miáo",
"def": ["sapling"]
},
"尘埃":
{"simp":"尘埃",
"trad":"塵埃",
"pinyin":"chén āi",
"def": ["dust"]
},
"加入":
{"simp":"加入",
"trad":"加入",
"pinyin":"jiā rù",
"def": ["to become a member","to join","to mix into","to participate in","to add in"]
},
"绝":
{"simp":"绝",
"trad":"絶",
"pinyin":"jué",
"def": ["variant of 絕|绝[jue2]"]
},
"引水":
{"simp":"引水",
"trad":"引水",
"pinyin":"yǐn shuǐ",
"def": ["to pilot a ship","to channel water","to draw water (for irrigation)"]
},
"跨国":
{"simp":"跨国",
"trad":"跨國",
"pinyin":"kuà guó",
"def": ["transnational","multinational"]
},
"期刊":
{"simp":"期刊",
"trad":"期刊",
"pinyin":"qī kān",
"def": ["periodical"]
},
"关系到":
{"simp":"关系到",
"trad":"關係到",
"pinyin":"guān xì dào",
"def": ["relates to","bears upon"]
},
"景仰":
{"simp":"景仰",
"trad":"景仰",
"pinyin":"jǐng yǎng",
"def": ["to admire","to revere","to look up to"]
},
"自我":
{"simp":"自我",
"trad":"自我",
"pinyin":"zì wǒ",
"def": ["self-","ego (psychology)"]
},
"石油":
{"simp":"石油",
"trad":"石油",
"pinyin":"shí yóu",
"def": ["oil","petroleum"]
},
"叫":
{"simp":"叫",
"trad":"呌",
"pinyin":"jiào",
"def": ["variant of 叫[jiao4]"]
},
"越南":
{"simp":"越南",
"trad":"越南",
"pinyin":"Yuè nán",
"def": ["Vietnam","Vietnamese"]
},
"呀":
{"simp":"呀",
"trad":"呀",
"pinyin":"ya",
"def": ["(particle equivalent to 啊 after a vowel, expressing surprise or doubt)"]
},
"帆":
{"simp":"帆",
"trad":"颿",
"pinyin":"fān",
"def": ["to gallop","Taiwan pr. [fan2]","variant of 帆[fan1]"]
},
"总裁":
{"simp":"总裁",
"trad":"總裁",
"pinyin":"zǒng cái",
"def": ["chairman","director-general (of a company etc)"]
},
"滔滔不绝":
{"simp":"滔滔不绝",
"trad":"滔滔不絕",
"pinyin":"tāo tāo bù jué",
"def": ["unceasing torrent (idiom)","talking non-stop","gabbling forty to the dozen"]
},
"能力":
{"simp":"能力",
"trad":"能力",
"pinyin":"néng lì",
"def": ["capability","ability","CL:個|个[ge4]"]
},
"轮回":
{"simp":"轮回",
"trad":"輪迴",
"pinyin":"lún huí",
"def": ["to reincarnate","reincarnation (Buddhism)","(of the seasons etc) to follow each other cyclically","cycle","CL:個|个[ge4]"]
},
"十二":
{"simp":"十二",
"trad":"十二",
"pinyin":"shí èr",
"def": ["twelve","12"]
},
"大兴安岭":
{"simp":"大兴安岭",
"trad":"大興安嶺",
"pinyin":"Dà xīng ān lǐng",
"def": ["Daxing'anling mountain range in northwest Heilongjiang province 黑龍江|黑龙江[Hei1 long2 jiang1] in northeast China","Daxing'anling prefecture"]
},
"海域":
{"simp":"海域",
"trad":"海域",
"pinyin":"hǎi yù",
"def": ["sea area","territorial waters","maritime space"]
},
"游丝":
{"simp":"游丝",
"trad":"游絲",
"pinyin":"yóu sī",
"def": ["gossamer","hairspring"]
},
"触礁":
{"simp":"触礁",
"trad":"觸礁",
"pinyin":"chù jiāo",
"def": ["(of a ship) to strike a reef","(fig.) to hit a snag"]
},
"直线":
{"simp":"直线",
"trad":"直線",
"pinyin":"zhí xiàn",
"def": ["straight line","sharply (rise or fall)"]
},
"一家":
{"simp":"一家",
"trad":"一家",
"pinyin":"yī jiā",
"def": ["the whole family","the same family","the family ... (when preceded by a family name)","group"]
},
"根本":
{"simp":"根本",
"trad":"根本",
"pinyin":"gēn běn",
"def": ["fundamental","basic","root","simply","absolutely (not)","(not) at all","CL:個|个[ge4]"]
},
"命名":
{"simp":"命名",
"trad":"命名",
"pinyin":"mìng míng",
"def": ["to give a name to","to dub","to christen","to designate","named after","naming"]
},
"未必":
{"simp":"未必",
"trad":"未必",
"pinyin":"wèi bì",
"def": ["not necessarily","maybe not"]
},
"损失":
{"simp":"损失",
"trad":"損失",
"pinyin":"sǔn shī",
"def": ["loss","damage","CL:個|个[ge4]","to lose","to suffer damage"]
},
"膜":
{"simp":"膜",
"trad":"膜",
"pinyin":"mó",
"def": ["membrane","film"]
},
"活着":
{"simp":"活着",
"trad":"活著",
"pinyin":"huó zhe",
"def": ["alive"]
},
"油污":
{"simp":"油污",
"trad":"油污",
"pinyin":"yóu wū",
"def": ["greasy dirt","sludge (from an oil spill)"]
},
"十万":
{"simp":"十万",
"trad":"十萬",
"pinyin":"shí wàn",
"def": ["hundred thousand"]
},
"沥青":
{"simp":"沥青",
"trad":"瀝青",
"pinyin":"lì qīng",
"def": ["asphalt","bitumen","pitch"]
},
"浓烈":
{"simp":"浓烈",
"trad":"濃烈",
"pinyin":"nóng liè",
"def": ["strong (taste, flavor, smell)"]
},
"进展":
{"simp":"进展",
"trad":"進展",
"pinyin":"jìn zhǎn",
"def": ["to make headway; to make progress"]
},
"凄惨":
{"simp":"凄惨",
"trad":"悽慘",
"pinyin":"qī cǎn",
"def": ["plaintive","mournful","miserable"]
},
"增大":
{"simp":"增大",
"trad":"增大",
"pinyin":"zēng dà",
"def": ["to enlarge","to amplify","to magnify"]
},
"双":
{"simp":"双",
"trad":"雙",
"pinyin":"shuāng",
"def": ["two","double","pair","both","even (number)"]
},
"成":
{"simp":"成",
"trad":"成",
"pinyin":"chéng",
"def": ["to succeed","to finish","to complete","to accomplish","to become","to turn into","to be all right","OK!","one tenth"]
},
"同时":
{"simp":"同时",
"trad":"同時",
"pinyin":"tóng shí",
"def": ["at the same time","simultaneously"]
},
"活物":
{"simp":"活物",
"trad":"活物",
"pinyin":"huó wù",
"def": ["living animals"]
},
"浸泡":
{"simp":"浸泡",
"trad":"浸泡",
"pinyin":"jìn pào",
"def": ["to steep","to soak","to immerse"]
},
"洗涤":
{"simp":"洗涤",
"trad":"洗滌",
"pinyin":"xǐ dí",
"def": ["to rinse","to wash","washing"]
},
"浆":
{"simp":"浆",
"trad":"漿",
"pinyin":"jiàng",
"def": ["starch paste"]
},
"傍晚":
{"simp":"傍晚",
"trad":"傍晚",
"pinyin":"bàng wǎn",
"def": ["in the evening","when night falls","towards evening","at night fall","at dusk"]
},
"扯淡":
{"simp":"扯淡",
"trad":"扯淡",
"pinyin":"chě dàn",
"def": ["to talk nonsense"]
},
"瘫":
{"simp":"瘫",
"trad":"癱",
"pinyin":"tān",
"def": ["paralyzed"]
},
"砍树":
{"simp":"砍树",
"trad":"砍樹",
"pinyin":"kǎn shù",
"def": ["to chop wood","to chop down trees"]
},
"盯":
{"simp":"盯",
"trad":"盯",
"pinyin":"dīng",
"def": ["to watch attentively","to fix one's attention on","to stare at","to gaze at"]
},
"什么时候":
{"simp":"什么时候",
"trad":"什麼時候",
"pinyin":"shén me shí hou",
"def": ["when?","at what time?"]
},
"突变":
{"simp":"突变",
"trad":"突變",
"pinyin":"tū biàn",
"def": ["sudden change","mutation"]
},
"毒气":
{"simp":"毒气",
"trad":"毒氣",
"pinyin":"dú qì",
"def": ["poison gas","toxic gas","manifestation of passion, anger etc (Buddhism)"]
},
"骨架":
{"simp":"骨架",
"trad":"骨架",
"pinyin":"gǔ jià",
"def": ["framework","skeleton"]
},
"外公":
{"simp":"外公",
"trad":"外公",
"pinyin":"wài gōng",
"def": ["(coll.) mother's father","maternal grandfather"]
},
"骗":
{"simp":"骗",
"trad":"騙",
"pinyin":"piàn",
"def": ["to cheat","to swindle","to deceive","to get on (a horse etc) by swinging one leg over"]
},
"牺牲":
{"simp":"牺牲",
"trad":"犧牲",
"pinyin":"xī shēng",
"def": ["to sacrifice one's life","to sacrifice (sth valued)","beast slaughtered as a sacrifice"]
},
"贫瘠":
{"simp":"贫瘠",
"trad":"貧瘠",
"pinyin":"pín jí",
"def": ["barren","infertile","poor"]
},
"庄园":
{"simp":"庄园",
"trad":"莊園",
"pinyin":"zhuāng yuán",
"def": ["manor","feudal land","villa and park"]
},
"怎样":
{"simp":"怎样",
"trad":"怎樣",
"pinyin":"zěn yàng",
"def": ["how","what kind"]
},
"湮灭":
{"simp":"湮灭",
"trad":"湮滅",
"pinyin":"yīn miè",
"def": ["to destroy","to disappear","annihilation"]
},
"撞击":
{"simp":"撞击",
"trad":"撞擊",
"pinyin":"zhuàng jī",
"def": ["to strike","to hit","to ram"]
},
"梦中":
{"simp":"梦中",
"trad":"夢中",
"pinyin":"mèng zhōng",
"def": ["in a dream"]
},
"要说":
{"simp":"要说",
"trad":"要說",
"pinyin":"yào shuō",
"def": ["as for","when it comes to"]
},
"晚期":
{"simp":"晚期",
"trad":"晚期",
"pinyin":"wǎn qī",
"def": ["later period","end stage","terminal"]
},
"绝种":
{"simp":"绝种",
"trad":"絕種",
"pinyin":"jué zhǒng",
"def": ["extinct (species)","extinction"]
},
"换乘":
{"simp":"换乘",
"trad":"換乘",
"pinyin":"huàn chéng",
"def": ["to change train (plane, bus etc)","transfer between modes of transport"]
},
"王八蛋":
{"simp":"王八蛋",
"trad":"王八蛋",
"pinyin":"wáng bā dàn",
"def": ["bastard (insult)","son of a bitch"]
},
"大过":
{"simp":"大过",
"trad":"大過",
"pinyin":"dà guò",
"def": ["serious mistake","major demerit"]
},
"缘":
{"simp":"缘",
"trad":"緣",
"pinyin":"yuán",
"def": ["cause","reason","karma","fate","predestined affinity","margin","hem","edge","along"]
},
"估算":
{"simp":"估算",
"trad":"估算",
"pinyin":"gū suàn",
"def": ["assessment","evaluation"]
},
"长毛":
{"simp":"长毛",
"trad":"長毛",
"pinyin":"zhǎng máo",
"def": ["to grow hair","to become mildewed"]
},
"小插曲":
{"simp":"小插曲",
"trad":"小插曲",
"pinyin":"xiǎo chā qǔ",
"def": ["episode","brief interlude"]
},
"保证人":
{"simp":"保证人",
"trad":"保證人",
"pinyin":"bǎo zhèng rén",
"def": ["guarantor","bailor"]
},
"绿地":
{"simp":"绿地",
"trad":"綠地",
"pinyin":"lù: dì",
"def": ["green area (e.g. urban park or garden)"]
},
"明确":
{"simp":"明确",
"trad":"明確",
"pinyin":"míng què",
"def": ["clear-cut","definite","explicit","to clarify","to specify","to make definite"]
},
"颠簸":
{"simp":"颠簸",
"trad":"顛簸",
"pinyin":"diān bǒ",
"def": ["to be jolted around (car on a bumpy road, boat on a rough sea, aircraft experiencing turbulence)","(fig.) to undergo a rough experience"]
},
"接纳":
{"simp":"接纳",
"trad":"接納",
"pinyin":"jiē nà",
"def": ["to admit (to membership)"]
},
"生存":
{"simp":"生存",
"trad":"生存",
"pinyin":"shēng cún",
"def": ["to exist","to survive"]
},
"昆虫":
{"simp":"昆虫",
"trad":"昆蟲",
"pinyin":"kūn chóng",
"def": ["insect","CL:隻|只[zhi1],群[qun2],堆[dui1]"]
},
"宽大":
{"simp":"宽大",
"trad":"寬大",
"pinyin":"kuān dà",
"def": ["spacious","wide","lenient"]
},
"区别":
{"simp":"区别",
"trad":"區別",
"pinyin":"qū bié",
"def": ["difference","to distinguish","to discriminate","to make a distinction","CL:個|个[ge4]"]
},
"小偷":
{"simp":"小偷",
"trad":"小偷",
"pinyin":"xiǎo tōu",
"def": ["thief"]
},
"听清":
{"simp":"听清",
"trad":"聽清",
"pinyin":"tīng qīng",
"def": ["to hear clearly"]
},
"生来":
{"simp":"生来",
"trad":"生來",
"pinyin":"shēng lái",
"def": ["from birth","by one's nature"]
},
"普度众生":
{"simp":"普度众生",
"trad":"普度眾生",
"pinyin":"pǔ dù zhòng shēng",
"def": ["(Buddhism) to deliver all living creatures from suffering (idiom)"]
},
"农作物":
{"simp":"农作物",
"trad":"農作物",
"pinyin":"nóng zuò wù",
"def": ["(farm) crops"]
},
"法国大革命":
{"simp":"法国大革命",
"trad":"法國大革命",
"pinyin":"Fǎ guó Dà gé mìng",
"def": ["French Revolution (1789-1799)"]
},
"遥远":
{"simp":"遥远",
"trad":"遙遠",
"pinyin":"yáo yuǎn",
"def": ["distant","remote"]
},
"合成":
{"simp":"合成",
"trad":"合成",
"pinyin":"hé chéng",
"def": ["to compose","to constitute","compound","synthesis","mixture","synthetic"]
},
"粮食":
{"simp":"粮食",
"trad":"糧食",
"pinyin":"liáng shi",
"def": ["foodstuff","cereals","CL:種|种[zhong3]"]
},
"战略":
{"simp":"战略",
"trad":"戰略",
"pinyin":"zhàn lu:è",
"def": ["strategy"]
},
"早在":
{"simp":"早在",
"trad":"早在",
"pinyin":"zǎo zài",
"def": ["as early as"]
},
"回到":
{"simp":"回到",
"trad":"回到",
"pinyin":"huí dào",
"def": ["to return to"]
},
"大声":
{"simp":"大声",
"trad":"大聲",
"pinyin":"dà shēng",
"def": ["loud voice","in a loud voice","loudly"]
},
"人权":
{"simp":"人权",
"trad":"人權",
"pinyin":"rén quán",
"def": ["human rights"]
},
"亿万富翁":
{"simp":"亿万富翁",
"trad":"億萬富翁",
"pinyin":"yì wàn fù wēng",
"def": ["billionaire","multimillionaire"]
},
"宣言":
{"simp":"宣言",
"trad":"宣言",
"pinyin":"xuān yán",
"def": ["declaration","manifesto"]
},
"延续":
{"simp":"延续",
"trad":"延續",
"pinyin":"yán xù",
"def": ["to continue","to go on","to last"]
},
"不绝于耳":
{"simp":"不绝于耳",
"trad":"不絕於耳",
"pinyin":"bù jué yú ěr",
"def": ["(of sound) to never stop","to fall incessantly on the ear","to linger on"]
},
"迈出":
{"simp":"迈出",
"trad":"邁出",
"pinyin":"mài chū",
"def": ["to step out","to take a (first) step"]
},
"可见":
{"simp":"可见",
"trad":"可見",
"pinyin":"kě jiàn",
"def": ["it can clearly be seen (that this is the case)","it is (thus) clear","clear","visible"]
},
"半公开":
{"simp":"半公开",
"trad":"半公開",
"pinyin":"bàn gōng kāi",
"def": ["semiovert","more or less open"]
},
"美":
{"simp":"美",
"trad":"美",
"pinyin":"měi",
"def": ["beautiful","very satisfactory","good","to beautify","to be pleased with oneself"]
},
"妙":
{"simp":"妙",
"trad":"玅",
"pinyin":"miào",
"def": ["variant of 妙[miao4]"]
},
"平淡无奇":
{"simp":"平淡无奇",
"trad":"平淡無奇",
"pinyin":"píng dàn wú qí",
"def": ["ordinary and mediocre (idiom); nothing to write home about"]
},
"指望":
{"simp":"指望",
"trad":"指望",
"pinyin":"zhǐ wàng",
"def": ["to hope for sth","to count on","hope"]
},
"实时":
{"simp":"实时",
"trad":"實時",
"pinyin":"shí shí",
"def": ["(in) real time","instantaneous"]
},
"兴":
{"simp":"兴",
"trad":"興",
"pinyin":"xìng",
"def": ["feeling or desire to do sth","interest in sth","excitement"]
},
"铁锹":
{"simp":"铁锹",
"trad":"鐵鍬",
"pinyin":"tiě qiāo",
"def": ["spade","shovel"]
},
"高尚":
{"simp":"高尚",
"trad":"高尚",
"pinyin":"gāo shàng",
"def": ["noble","lofty","refined","exquisite"]
},
"路上":
{"simp":"路上",
"trad":"路上",
"pinyin":"lù shang",
"def": ["on the road","on a journey","road surface"]
},
"背诵":
{"simp":"背诵",
"trad":"背誦",
"pinyin":"bèi sòng",
"def": ["to recite","to repeat from memory"]
},
"赞同":
{"simp":"赞同",
"trad":"贊同",
"pinyin":"zàn tóng",
"def": ["to approve of","to endorse","(vote) in favor"]
},
"长椅":
{"simp":"长椅",
"trad":"長椅",
"pinyin":"cháng yǐ",
"def": ["bench"]
},
"话题":
{"simp":"话题",
"trad":"話題",
"pinyin":"huà tí",
"def": ["subject (of a talk or conversation)","topic"]
},
"习惯":
{"simp":"习惯",
"trad":"習慣",
"pinyin":"xí guàn",
"def": ["habit","custom","usual practice","to be used to","CL:個|个[ge4]"]
},
"随后":
{"simp":"随后",
"trad":"隨後",
"pinyin":"suí hòu",
"def": ["soon after"]
},
"址":
{"simp":"址",
"trad":"阯",
"pinyin":"zhǐ",
"def": ["foundation of a building (variant of 址[zhi3])","islet (variant of 沚[zhi3])"]
},
"最好":
{"simp":"最好",
"trad":"最好",
"pinyin":"zuì hǎo",
"def": ["best","(you) had better (do what we suggest)"]
},
"穷山恶水":
{"simp":"穷山恶水",
"trad":"窮山惡水",
"pinyin":"qióng shān è shuǐ",
"def": ["lit. barren hills and wild rivers (idiom)","fig. inhospitable natural environment"]
},
"大麻":
{"simp":"大麻",
"trad":"大麻",
"pinyin":"dà má",
"def": ["hemp (Cannabis sativa)","cannabis","marijuana"]
},
"唐僧":
{"simp":"唐僧",
"trad":"唐僧",
"pinyin":"Táng sēng",
"def": ["Xuanzang (602-664) Tang dynasty Buddhist monk and translator, who traveled to India 629-645"]
},
"明信片":
{"simp":"明信片",
"trad":"明信片",
"pinyin":"míng xìn piàn",
"def": ["postcard"]
},
"干":
{"simp":"干",
"trad":"幹",
"pinyin":"gàn",
"def": ["tree trunk","main part of sth","to manage","to work","to do","capable","cadre","to kill (slang)","to fuck (vulgar)","(coll.) pissed off","annoyed"]
},
"春季":
{"simp":"春季",
"trad":"春季",
"pinyin":"chūn jì",
"def": ["springtime"]
},
"活下去":
{"simp":"活下去",
"trad":"活下去",
"pinyin":"huó xià qù",
"def": ["to survive","to keep on living"]
},
"汽车":
{"simp":"汽车",
"trad":"汽車",
"pinyin":"qì chē",
"def": ["car","automobile","bus","CL:輛|辆[liang4]"]
},
"成长":
{"simp":"成长",
"trad":"成長",
"pinyin":"chéng zhǎng",
"def": ["to mature","to grow","growth"]
},
"以往":
{"simp":"以往",
"trad":"以往",
"pinyin":"yǐ wǎng",
"def": ["in the past","formerly"]
},
"拖拉机":
{"simp":"拖拉机",
"trad":"拖拉機",
"pinyin":"tuō lā jī",
"def": ["tractor","CL:臺|台[tai2]"]
},
"蚕食":
{"simp":"蚕食",
"trad":"蠶食",
"pinyin":"cán shí",
"def": ["(lit. and fig.) to nibble away at"]
},
"绿叶":
{"simp":"绿叶",
"trad":"綠葉",
"pinyin":"lù: yè",
"def": ["green leaf","(fig.) actor playing a supporting role"]
},
"村民":
{"simp":"村民",
"trad":"村民",
"pinyin":"cūn mín",
"def": ["villager"]
},
"斧子":
{"simp":"斧子",
"trad":"斧子",
"pinyin":"fǔ zi",
"def": ["axe","hatchet","CL:把[ba3]"]
},
"小树":
{"simp":"小树",
"trad":"小樹",
"pinyin":"xiǎo shù",
"def": ["shrub","small tree","sapling","CL:棵[ke1]"]
},
"一套":
{"simp":"一套",
"trad":"一套",
"pinyin":"yī tào",
"def": ["suit","a set","a collection","of the same kind","the same old stuff","set pattern of behavior"]
},
"放倒":
{"simp":"放倒",
"trad":"放倒",
"pinyin":"fàng dǎo",
"def": ["to knock over; to knock down; to lay flat; to fell; to bring down"]
},
"运":
{"simp":"运",
"trad":"運",
"pinyin":"yùn",
"def": ["to move","to transport","to use","to apply","fortune","luck","fate"]
},
"诺亚":
{"simp":"诺亚",
"trad":"諾亞",
"pinyin":"Nuò yà",
"def": ["Noah"]
},
"心":
{"simp":"心",
"trad":"心",
"pinyin":"xīn",
"def": ["heart","mind","intention","center","core","CL:顆|颗[ke1],個|个[ge4]"]
},
"争执":
{"simp":"争执",
"trad":"爭執",
"pinyin":"zhēng zhí",
"def": ["to dispute","to disagree","to argue opinionatedly","to wrangle"]
},
"听不到":
{"simp":"听不到",
"trad":"聽不到",
"pinyin":"tīng bu dào",
"def": ["can't hear"]
},
"尝试":
{"simp":"尝试",
"trad":"嘗試",
"pinyin":"cháng shì",
"def": ["to try","to attempt","CL:次[ci4]"]
},
"轰鸣":
{"simp":"轰鸣",
"trad":"轟鳴",
"pinyin":"hōng míng",
"def": ["boom (sound of explosion)","rumble"]
},
"摇滚":
{"simp":"摇滚",
"trad":"搖滾",
"pinyin":"yáo gǔn",
"def": ["rock 'n' roll (music)","to rock","to fall off"]
},
"幕":
{"simp":"幕",
"trad":"幙",
"pinyin":"mù",
"def": ["old variant of 幕[mu4]","curtain","screen"]
},
"嘛":
{"simp":"嘛",
"trad":"嘛",
"pinyin":"ma",
"def": ["modal particle indicating that sth is obvious","particle indicating a pause for emphasis"]
},
"期待":
{"simp":"期待",
"trad":"期待",
"pinyin":"qī dài",
"def": ["to look forward to","to await","expectation"]
},
"黄色":
{"simp":"黄色",
"trad":"黃色",
"pinyin":"huáng sè",
"def": ["yellow (color)","pornographic"]
},
"缩":
{"simp":"缩",
"trad":"縮",
"pinyin":"suō",
"def": ["to withdraw","to pull back","to contract","to shrink","to reduce","abbreviation","also pr. [su4]"]
},
"法":
{"simp":"法",
"trad":"灋",
"pinyin":"fǎ",
"def": ["old variant of 法[fa3]","law"]
},
"字":
{"simp":"字",
"trad":"字",
"pinyin":"zì",
"def": ["letter","symbol","character","word","CL:個|个[ge4]","courtesy or style name traditionally given to males aged 20 in dynastic China"]
},
"不对":
{"simp":"不对",
"trad":"不對",
"pinyin":"bù duì",
"def": ["incorrect","wrong","amiss","abnormal","queer"]
},
"区域":
{"simp":"区域",
"trad":"區域",
"pinyin":"qū yù",
"def": ["area","region","district"]
},
"耕地":
{"simp":"耕地",
"trad":"耕地",
"pinyin":"gēng dì",
"def": ["arable land","to plow land"]
},
"再说":
{"simp":"再说",
"trad":"再說",
"pinyin":"zài shuō",
"def": ["to say again","to put off a discussion until later","moreover","what's more","besides"]
},
"稳定":
{"simp":"稳定",
"trad":"穩定",
"pinyin":"wěn dìng",
"def": ["steady","stable","stability","to stabilize","to pacify"]
},
"等不及":
{"simp":"等不及",
"trad":"等不及",
"pinyin":"děng bù jí",
"def": ["can't wait"]
},
"造林":
{"simp":"造林",
"trad":"造林",
"pinyin":"zào lín",
"def": ["forestation"]
},
"模范":
{"simp":"模范",
"trad":"模範",
"pinyin":"mó fàn",
"def": ["model","fine example"]
},
"猪":
{"simp":"猪",
"trad":"豬",
"pinyin":"zhū",
"def": ["hog","pig","swine","CL:口[kou3],頭|头[tou2]"]
},
"任务":
{"simp":"任务",
"trad":"任務",
"pinyin":"rèn wu",
"def": ["mission","assignment","task","duty","role","CL:項|项[xiang4],個|个[ge4]"]
},
"肥":
{"simp":"肥",
"trad":"肥",
"pinyin":"féi",
"def": ["fat","fertile","loose-fitting or large","to fertilize","to become rich by illegal means","fertilizer","manure"]
},
"村":
{"simp":"村",
"trad":"邨",
"pinyin":"cūn",
"def": ["variant of 村[cun1]"]
},
"相继":
{"simp":"相继",
"trad":"相繼",
"pinyin":"xiāng jì",
"def": ["in succession","following closely"]
},
"培养":
{"simp":"培养",
"trad":"培養",
"pinyin":"péi yǎng",
"def": ["to cultivate","to breed","to foster","to nurture","to educate","to groom (for a position)","education","fostering","culture (biology)"]
},
"咸菜":
{"simp":"咸菜",
"trad":"鹹菜",
"pinyin":"xián cài",
"def": ["salted vegetables","pickles"]
},
"份儿":
{"simp":"份儿",
"trad":"份兒",
"pinyin":"fèn r5",
"def": ["degree","extent","allotted share"]
},
"盗窃":
{"simp":"盗窃",
"trad":"盜竊",
"pinyin":"dào qiè",
"def": ["to steal"]
},
"飞快":
{"simp":"飞快",
"trad":"飛快",
"pinyin":"fēi kuài",
"def": ["very fast","at lightning speed","(coll.) razor-sharp"]
},
"派出所":
{"simp":"派出所",
"trad":"派出所",
"pinyin":"pài chū suǒ",
"def": ["local police station"]
},
"推进":
{"simp":"推进",
"trad":"推進",
"pinyin":"tuī jìn",
"def": ["to impel","to carry forward","to push on","to advance","to drive forward"]
},
"衬衣":
{"simp":"衬衣",
"trad":"襯衣",
"pinyin":"chèn yī",
"def": ["shirt","CL:件[jian4]"]
},
"远方":
{"simp":"远方",
"trad":"遠方",
"pinyin":"yuǎn fāng",
"def": ["far away","a distant location"]
},
"尺":
{"simp":"尺",
"trad":"尺",
"pinyin":"chǐ",
"def": ["a Chinese foot","one-third of a meter","a ruler","a tape-measure","one of the three acupoints for measuring pulse in Chinese medicine","CL:支[zhi1],把[ba3]"]
},
"林业":
{"simp":"林业",
"trad":"林業",
"pinyin":"lín yè",
"def": ["forest industry","forestry"]
},
"局长":
{"simp":"局长",
"trad":"局長",
"pinyin":"jú zhǎng",
"def": ["bureau chief","CL:位[wei4],個|个[ge4]"]
},
"砍伐":
{"simp":"砍伐",
"trad":"砍伐",
"pinyin":"kǎn fá",
"def": ["to hew","to cut down"]
},
"猪肉":
{"simp":"猪肉",
"trad":"豬肉",
"pinyin":"zhū ròu",
"def": ["pork"]
},
"战胜":
{"simp":"战胜",
"trad":"戰勝",
"pinyin":"zhàn shèng",
"def": ["to prevail over","to defeat","to surmount"]
},
"无语":
{"simp":"无语",
"trad":"無語",
"pinyin":"wú yǔ",
"def": ["to remain silent","to have nothing to say","(coll.) speechless","dumbfounded"]
},
"局":
{"simp":"局",
"trad":"局",
"pinyin":"jú",
"def": ["office","situation","classifier for games: match, set, round etc"]
},
"木头":
{"simp":"木头",
"trad":"木頭",
"pinyin":"mù tou",
"def": ["slow-witted","blockhead","log (of wood, timber etc)","CL:塊|块[kuai4],根[gen1]"]
},
"坐下":
{"simp":"坐下",
"trad":"坐下",
"pinyin":"zuò xia",
"def": ["to sit down"]
},
"深刻":
{"simp":"深刻",
"trad":"深刻",
"pinyin":"shēn kè",
"def": ["profound","deep","deep-going"]
},
"附和":
{"simp":"附和",
"trad":"附和",
"pinyin":"fù hè",
"def": ["to agree","to go along with","to echo (what sb says)"]
},
"案":
{"simp":"案",
"trad":"案",
"pinyin":"àn",
"def": ["(legal) case","incident","record","file","table"]
},
"哪儿":
{"simp":"哪儿",
"trad":"哪兒",
"pinyin":"nǎ r5",
"def": ["where?","wherever","anywhere"]
},
"平和":
{"simp":"平和",
"trad":"平和",
"pinyin":"píng hé",
"def": ["gentle","mild","moderate","placid"]
},
"没用":
{"simp":"没用",
"trad":"沒用",
"pinyin":"méi yòng",
"def": ["useless"]
},
"一心一意":
{"simp":"一心一意",
"trad":"一心一意",
"pinyin":"yī xīn yī yì",
"def": ["concentrating one's thoughts and efforts","single-minded","bent on","intently"]
},
"结合":
{"simp":"结合",
"trad":"結合",
"pinyin":"jié hé",
"def": ["to combine","to link","to integrate","binding","CL:次[ci4]"]
},
"崩溃":
{"simp":"崩溃",
"trad":"崩潰",
"pinyin":"bēng kuì",
"def": ["to collapse","to crumble","to fall apart"]
},
"歪":
{"simp":"歪",
"trad":"歪",
"pinyin":"wǎi",
"def": ["to sprain (one's ankle) (Tw)"]
},
"疲惫不堪":
{"simp":"疲惫不堪",
"trad":"疲憊不堪",
"pinyin":"pí bèi bù kān",
"def": ["exhausted","fatigued to the extreme"]
},
"省城":
{"simp":"省城",
"trad":"省城",
"pinyin":"shěng chéng",
"def": ["provincial capital"]
},
"判断":
{"simp":"判断",
"trad":"判斷",
"pinyin":"pàn duàn",
"def": ["to judge","to determine","judgment"]
},
"扔下":
{"simp":"扔下",
"trad":"扔下",
"pinyin":"rēng xià",
"def": ["to throw down","to drop (bomb)"]
},
"不能":
{"simp":"不能",
"trad":"不能",
"pinyin":"bù néng",
"def": ["cannot","must not","should not"]
},
"岸边":
{"simp":"岸边",
"trad":"岸邊",
"pinyin":"àn biān",
"def": ["shore"]
},
"力量":
{"simp":"力量",
"trad":"力量",
"pinyin":"lì liang",
"def": ["power","force","strength"]
},
"线":
{"simp":"线",
"trad":"線",
"pinyin":"xiàn",
"def": ["thread","string","wire","line","CL:條|条[tiao2],股[gu3],根[gen1]","(after a number) tier (unofficial ranking of a Chinese city)"]
},
"示意":
{"simp":"示意",
"trad":"示意",
"pinyin":"shì yì",
"def": ["to hint","to indicate (an idea to sb)"]
},
"伪装":
{"simp":"伪装",
"trad":"偽裝",
"pinyin":"wěi zhuāng",
"def": ["to pretend to be (asleep etc)","to disguise oneself as","pretense","disguise","(military) to camouflage","camouflage"]
},
"各":
{"simp":"各",
"trad":"各",
"pinyin":"gè",
"def": ["each","every"]
},
"支配":
{"simp":"支配",
"trad":"支配",
"pinyin":"zhī pèi",
"def": ["to control","to dominate","to allocate"]
},
"细菌":
{"simp":"细菌",
"trad":"細菌",
"pinyin":"xì jūn",
"def": ["bacterium","germ"]
},
"大约":
{"simp":"大约",
"trad":"大約",
"pinyin":"dà yuē",
"def": ["approximately","probably"]
},
"及":
{"simp":"及",
"trad":"及",
"pinyin":"jí",
"def": ["and","to reach","up to","in time for"]
},
"孤寂":
{"simp":"孤寂",
"trad":"孤寂",
"pinyin":"gū jì",
"def": ["lonesome","desolate"]
},
"站":
{"simp":"站",
"trad":"站",
"pinyin":"zhàn",
"def": ["station","to stand","to halt","to stop","branch of a company or organization","website"]
},
"营造":
{"simp":"营造",
"trad":"營造",
"pinyin":"yíng zào",
"def": ["to build (housing)","to construct","to make"]
},
"大洋":
{"simp":"大洋",
"trad":"大洋",
"pinyin":"dà yáng",
"def": ["ocean","(old) silver dollar"]
},
"污染":
{"simp":"污染",
"trad":"污染",
"pinyin":"wū rǎn",
"def": ["pollution","contamination","CL:個|个[ge4]"]
},
"签署":
{"simp":"签署",
"trad":"簽署",
"pinyin":"qiān shǔ",
"def": ["to sign (an agreement)"]
},
"本质上":
{"simp":"本质上",
"trad":"本質上",
"pinyin":"běn zhì shàng",
"def": ["essentially","inherent"]
},
"样":
{"simp":"样",
"trad":"樣",
"pinyin":"yàng",
"def": ["manner","pattern","way","appearance","shape","classifier: kind, type"]
},
"一小撮":
{"simp":"一小撮",
"trad":"一小撮",
"pinyin":"yī xiǎo cuō",
"def": ["handful (of)"]
},
"禁锢":
{"simp":"禁锢",
"trad":"禁錮",
"pinyin":"jìn gù",
"def": ["to confine","to imprison","prohibition","shackles","fetters"]
},
"着落":
{"simp":"着落",
"trad":"著落",
"pinyin":"zhuó luò",
"def": ["whereabouts","place to settle","reliable source (of funds etc)","(of responsibility for a matter) to rest with sb","settlement","solution"]
},
"初":
{"simp":"初",
"trad":"初",
"pinyin":"chū",
"def": ["at first","(at the) beginning","first","junior","basic"]
},
"拿起":
{"simp":"拿起",
"trad":"拿起",
"pinyin":"ná qǐ",
"def": ["to pick up"]
},
"思绪":
{"simp":"思绪",
"trad":"思緒",
"pinyin":"sī xù",
"def": ["train of thought","emotional state","mood","feeling"]
},
"现实主义":
{"simp":"现实主义",
"trad":"現實主義",
"pinyin":"xiàn shí zhǔ yì",
"def": ["realism"]
},
"常驻":
{"simp":"常驻",
"trad":"常駐",
"pinyin":"cháng zhù",
"def": ["resident","permanent (representative)"]
},
"还不如":
{"simp":"还不如",
"trad":"還不如",
"pinyin":"hái bù rú",
"def": ["to be better off ...","might as well ..."]
},
"对话":
{"simp":"对话",
"trad":"對話",
"pinyin":"duì huà",
"def": ["to talk (with sb)","dialogue; conversation"]
},
"古代":
{"simp":"古代",
"trad":"古代",
"pinyin":"gǔ dài",
"def": ["ancient times","olden times"]
},
"所有物":
{"simp":"所有物",
"trad":"所有物",
"pinyin":"suǒ yǒu wù",
"def": ["a possession","belongings"]
},
"损耗":
{"simp":"损耗",
"trad":"損耗",
"pinyin":"sǔn hào",
"def": ["wear and tear"]
},
"重视":
{"simp":"重视",
"trad":"重視",
"pinyin":"zhòng shì",
"def": ["to attach importance to sth","to value"]
},
"同等":
{"simp":"同等",
"trad":"同等",
"pinyin":"tóng děng",
"def": ["equal to","having the same social class or status"]
},
"支柱":
{"simp":"支柱",
"trad":"支柱",
"pinyin":"zhī zhù",
"def": ["mainstay","pillar","prop","backbone"]
},
"五十":
{"simp":"五十",
"trad":"五十",
"pinyin":"wǔ shí",
"def": ["fifty"]
},
"眸子":
{"simp":"眸子",
"trad":"眸子",
"pinyin":"móu zi",
"def": ["pupil of the eye"]
},
"恶化":
{"simp":"恶化",
"trad":"惡化",
"pinyin":"è huà",
"def": ["to worsen"]
},
"轨迹":
{"simp":"轨迹",
"trad":"軌跡",
"pinyin":"guǐ jì",
"def": ["locus","orbit","trajectory","track"]
},
"之外":
{"simp":"之外",
"trad":"之外",
"pinyin":"zhī wài",
"def": ["outside","excluding"]
},
"到底":
{"simp":"到底",
"trad":"到底",
"pinyin":"dào dǐ",
"def": ["finally","in the end","when all is said and done","after all","to the end","to the last"]
},
"建造":
{"simp":"建造",
"trad":"建造",
"pinyin":"jiàn zào",
"def": ["to construct","to build"]
},
"满足":
{"simp":"满足",
"trad":"滿足",
"pinyin":"mǎn zú",
"def": ["to satisfy","to meet (the needs of)","satisfied","content"]
},
"改建":
{"simp":"改建",
"trad":"改建",
"pinyin":"gǎi jiàn",
"def": ["to rebuild","to transform (a building)","to refurbish"]
},
"想要":
{"simp":"想要",
"trad":"想要",
"pinyin":"xiǎng yào",
"def": ["to want to","to feel like","to fancy","to care for sb","desirous of"]
},
"伸手":
{"simp":"伸手",
"trad":"伸手",
"pinyin":"shēn shǒu",
"def": ["to reach out with one's hand","to hold out a hand","(fig.) to beg","to get involved","to meddle"]
},
"密密麻麻":
{"simp":"密密麻麻",
"trad":"密密麻麻",
"pinyin":"mì mi má má",
"def": ["numerous and close together","densely packed","thickly dotted","thick","dense"]
},
"航母":
{"simp":"航母",
"trad":"航母",
"pinyin":"háng mǔ",
"def": ["aircraft carrier","abbr. for 航空母艦|航空母舰[hang2 kong1 mu3 jian4]"]
},
"改善":
{"simp":"改善",
"trad":"改善",
"pinyin":"gǎi shàn",
"def": ["to make better","to improve","CL:個|个[ge4]"]
},
"上帝":
{"simp":"上帝",
"trad":"上帝",
"pinyin":"Shàng dì",
"def": ["God"]
},
"否":
{"simp":"否",
"trad":"否",
"pinyin":"pǐ",
"def": ["clogged","evil"]
},
"知情":
{"simp":"知情",
"trad":"知情",
"pinyin":"zhī qíng",
"def": ["to know the facts","to understand","to be familiar with the situation"]
},
"早死":
{"simp":"早死",
"trad":"早死",
"pinyin":"zǎo sǐ",
"def": ["early demise","untimely death"]
},
"入侵者":
{"simp":"入侵者",
"trad":"入侵者",
"pinyin":"rù qīn zhě",
"def": ["intruder"]
},
"此时":
{"simp":"此时",
"trad":"此時",
"pinyin":"cǐ shí",
"def": ["now","this moment"]
},
"系":
{"simp":"系",
"trad":"繫",
"pinyin":"xì",
"def": ["to connect","to arrest","to worry"]
},
"有的":
{"simp":"有的",
"trad":"有的",
"pinyin":"yǒu de",
"def": ["(there are) some (who are...)","some (exist)"]
},
"有别":
{"simp":"有别",
"trad":"有別",
"pinyin":"yǒu bié",
"def": ["different","distinct","unequal","variable"]
},
"聆听":
{"simp":"聆听",
"trad":"聆聽",
"pinyin":"líng tīng",
"def": ["to listen (respectfully)"]
},
"短波":
{"simp":"短波",
"trad":"短波",
"pinyin":"duǎn bō",
"def": ["shortwave (radio)"]
},
"一轮":
{"simp":"一轮",
"trad":"一輪",
"pinyin":"yī lún",
"def": ["first round or stage (of a match, election, talks, planned policy etc)"]
},
"香烟":
{"simp":"香烟",
"trad":"香煙",
"pinyin":"xiāng yān",
"def": ["cigarette","smoke from burning incense","CL:支[zhi1],條|条[tiao2]"]
},
"某处":
{"simp":"某处",
"trad":"某處",
"pinyin":"mǒu chù",
"def": ["somewhere"]
},
"茬":
{"simp":"茬",
"trad":"茬",
"pinyin":"chá",
"def": ["stubble land after crop has been taken","a second crop obtained by rotation of land","an opportunity"]
},
"村庄":
{"simp":"村庄",
"trad":"村莊",
"pinyin":"cūn zhuāng",
"def": ["village","hamlet","CL:座[zuo4]"]
},
"江":
{"simp":"江",
"trad":"江",
"pinyin":"jiāng",
"def": ["river","CL:條|条[tiao2],道[dao4]"]
},
"西欧":
{"simp":"西欧",
"trad":"西歐",
"pinyin":"Xī ōu",
"def": ["Western Europe"]
},
"知名":
{"simp":"知名",
"trad":"知名",
"pinyin":"zhī míng",
"def": ["well-known","famous"]
},
"做为":
{"simp":"做为",
"trad":"做為",
"pinyin":"zuò wéi",
"def": ["to act as","used erroneously for 作為|作为"]
},
"学者":
{"simp":"学者",
"trad":"學者",
"pinyin":"xué zhě",
"def": ["scholar"]
},
"略":
{"simp":"略",
"trad":"畧",
"pinyin":"lu:è",
"def": ["variant of 略[lu:e4]"]
},
"伦敦":
{"simp":"伦敦",
"trad":"倫敦",
"pinyin":"Lún dūn",
"def": ["London, capital of United Kingdom"]
},
"筑":
{"simp":"筑",
"trad":"築",
"pinyin":"zhù",
"def": ["to build","to construct","to ram","to hit","Taiwan pr. [zhu2]"]
},
"停机坪":
{"simp":"停机坪",
"trad":"停機坪",
"pinyin":"tíng jī píng",
"def": ["aircraft parking ground","apron","tarmac (at airport)"]
},
"直升机":
{"simp":"直升机",
"trad":"直升機",
"pinyin":"zhí shēng jī",
"def": ["helicopter","CL:架[jia4]"]
},
"智慧":
{"simp":"智慧",
"trad":"智慧",
"pinyin":"zhì huì",
"def": ["wisdom","knowledge","intelligent","intelligence"]
},
"雾蒙蒙":
{"simp":"雾蒙蒙",
"trad":"霧蒙蒙",
"pinyin":"wù méng méng",
"def": ["foggy","misty","hazy"]
},
"陷落":
{"simp":"陷落",
"trad":"陷落",
"pinyin":"xiàn luò",
"def": ["to surrender (of a fortress)","to fall (to the enemy)","subsidence (of land)"]
},
"四十":
{"simp":"四十",
"trad":"四十",
"pinyin":"sì shí",
"def": ["forty","40"]
},
"时光":
{"simp":"时光",
"trad":"時光",
"pinyin":"shí guāng",
"def": ["time","era","period of time"]
},
"点":
{"simp":"点",
"trad":"點",
"pinyin":"diǎn",
"def": ["point","dot","drop","speck","o'clock","point (in space or time)","to draw a dot","to check on a list","to choose","to order (food in a restaurant)","to touch briefly","to hint","to light","to ignite","to pour a liquid drop by drop","(old) one fifth of a two-hour watch 更[geng1]","dot stroke in Chinese characters","classifier for items"]
},
"字迹":
{"simp":"字迹",
"trad":"字跡",
"pinyin":"zì jì",
"def": ["handwriting"]
},
"转折":
{"simp":"转折",
"trad":"轉折",
"pinyin":"zhuǎn zhé",
"def": ["shift in the trend of events","turnaround","plot shift in a book","turn in the conversation"]
},
"源":
{"simp":"源",
"trad":"源",
"pinyin":"yuán",
"def": ["root","source","origin"]
},
"何方":
{"simp":"何方",
"trad":"何方",
"pinyin":"hé fāng",
"def": ["where?"]
},
"有了":
{"simp":"有了",
"trad":"有了",
"pinyin":"yǒu le",
"def": ["I've got a solution!","to have a bun in the oven (abbr. for 有了胎[you3 le5 tai1])"]
},
"邪":
{"simp":"邪",
"trad":"邪",
"pinyin":"xié",
"def": ["demonic","iniquitous","nefarious","evil","unhealthy influences that cause disease (Chinese medicine)","(coll.) strange","abnormal"]
},
"半小时":
{"simp":"半小时",
"trad":"半小時",
"pinyin":"bàn xiǎo shí",
"def": ["half hour"]
},
"第一眼":
{"simp":"第一眼",
"trad":"第一眼",
"pinyin":"dì yī yǎn",
"def": ["at first glance","at first sight"]
},
"对立":
{"simp":"对立",
"trad":"對立",
"pinyin":"duì lì",
"def": ["to oppose","to set sth against","to be antagonistic to","antithetical","relative opposite","opposing","diametrical"]
},
"降落":
{"simp":"降落",
"trad":"降落",
"pinyin":"jiàng luò",
"def": ["to descend","to land"]
},
"实体":
{"simp":"实体",
"trad":"實體",
"pinyin":"shí tǐ",
"def": ["entity","substance","thing that has a material existence (as opposed to a conceptual, virtual or online existence)","the real thing (as opposed to an image or model of it)"]
},
"山峰":
{"simp":"山峰",
"trad":"山峰",
"pinyin":"shān fēng",
"def": ["(mountain) peak"]
},
"重复":
{"simp":"重复",
"trad":"重覆",
"pinyin":"chóng fù",
"def": ["variant of 重複|重复[chong2 fu4]"]
},
"全世界":
{"simp":"全世界",
"trad":"全世界",
"pinyin":"quán shì jiè",
"def": ["worldwide","entire world"]
},
"船":
{"simp":"船",
"trad":"船",
"pinyin":"chuán",
"def": ["boat","vessel","ship","CL:條|条[tiao2],艘[sou1],隻|只[zhi1]"]
},
"圆形":
{"simp":"圆形",
"trad":"圓形",
"pinyin":"yuán xíng",
"def": ["round","circular"]
},
"袒露":
{"simp":"袒露",
"trad":"袒露",
"pinyin":"tǎn lù",
"def": ["to expose","to bare"]
},
"浮动":
{"simp":"浮动",
"trad":"浮動",
"pinyin":"fú dòng",
"def": ["to float and drift","unstable"]
},
"剪影":
{"simp":"剪影",
"trad":"剪影",
"pinyin":"jiǎn yǐng",
"def": ["paper-cut silhouette","outline","sketch"]
},
"海风":
{"simp":"海风",
"trad":"海風",
"pinyin":"hǎi fēng",
"def": ["sea breeze","sea wind (i.e. from the sea)"]
},
"甲板":
{"simp":"甲板",
"trad":"甲板",
"pinyin":"jiǎ bǎn",
"def": ["deck (of a boat etc)"]
},
"上前":
{"simp":"上前",
"trad":"上前",
"pinyin":"shàng qián",
"def": ["to advance","to step forward"]
},
"庄重":
{"simp":"庄重",
"trad":"莊重",
"pinyin":"zhuāng zhòng",
"def": ["grave","solemn","dignified"]
},
"启航":
{"simp":"启航",
"trad":"啟航",
"pinyin":"qǐ háng",
"def": ["(of a ship) to set sail","(of an aeroplane) to take off","also written 起航[qi3 hang2]"]
},
"文明":
{"simp":"文明",
"trad":"文明",
"pinyin":"wén míng",
"def": ["civilized","civilization","culture","CL:個|个[ge4]"]
},
"罪恶":
{"simp":"罪恶",
"trad":"罪惡",
"pinyin":"zuì è",
"def": ["crime","evil","sin"]
},
"认同":
{"simp":"认同",
"trad":"認同",
"pinyin":"rèn tóng",
"def": ["to approve of","to endorse","to acknowledge","to recognize","to identify oneself with"]
},
"尽力而为":
{"simp":"尽力而为",
"trad":"盡力而為",
"pinyin":"jìn lì ér wéi",
"def": ["to try one's utmost","to strive"]
},
"负面":
{"simp":"负面",
"trad":"負面",
"pinyin":"fù miàn",
"def": ["negative","the negative side"]
},
"称为":
{"simp":"称为",
"trad":"稱為",
"pinyin":"chēng wéi",
"def": ["called","to call sth (by a name)","to name"]
},
"贵族":
{"simp":"贵族",
"trad":"貴族",
"pinyin":"guì zú",
"def": ["lord","nobility","nobleman","noblewoman","aristocrat","aristocracy"]
},
"经济界":
{"simp":"经济界",
"trad":"經濟界",
"pinyin":"jīng jì jiè",
"def": ["economic circles"]
},
"政界":
{"simp":"政界",
"trad":"政界",
"pinyin":"zhèng jiè",
"def": ["political and government circles"]
},
"认知":
{"simp":"认知",
"trad":"認知",
"pinyin":"rèn zhī",
"def": ["cognition","cognitive","understanding","perception","awareness","to be cognizant of","to recognize","to realize"]
},
"平等":
{"simp":"平等",
"trad":"平等",
"pinyin":"píng děng",
"def": ["equal","equality"]
},
"强势":
{"simp":"强势",
"trad":"強勢",
"pinyin":"qiáng shì",
"def": ["strong","powerful","(linguistics) emphatic","intensive"]
},
"星系":
{"simp":"星系",
"trad":"星系",
"pinyin":"xīng xì",
"def": ["see 恆星系|恒星系[heng2 xing1 xi4]"]
},
"不动产":
{"simp":"不动产",
"trad":"不動產",
"pinyin":"bù dòng chǎn",
"def": ["real estate","immovable property","immovables"]
},
"异化":
{"simp":"异化",
"trad":"異化",
"pinyin":"yì huà",
"def": ["alienation (philosophy)","(of speech) dissimilation"]
},
"三次":
{"simp":"三次",
"trad":"三次",
"pinyin":"sān cì",
"def": ["third","three times","(math.) degree three, cubic (equation)"]
},
"拾":
{"simp":"拾",
"trad":"拾",
"pinyin":"shí",
"def": ["to pick up","to collate or arrange","ten (banker's anti-fraud numeral)"]
},
"针扎":
{"simp":"针扎",
"trad":"針扎",
"pinyin":"zhēn zhā",
"def": ["pincushion"]
},
"衡量":
{"simp":"衡量",
"trad":"衡量",
"pinyin":"héng liáng",
"def": ["to weigh","to examine","to consider"]
},
"参与":
{"simp":"参与",
"trad":"參與",
"pinyin":"cān yù",
"def": ["to participate (in sth)"]
},
"操场":
{"simp":"操场",
"trad":"操場",
"pinyin":"cāo chǎng",
"def": ["playground","sports field","drill ground","CL:個|个[ge4]"]
},
"运作":
{"simp":"运作",
"trad":"運作",
"pinyin":"yùn zuò",
"def": ["to operate","operations","workings","activities (usu. of an organization)","thread (computing)"]
},
"多轮":
{"simp":"多轮",
"trad":"多輪",
"pinyin":"duō lún",
"def": ["in many stages","multilayered","multipronged (attack)"]
},
"置于":
{"simp":"置于",
"trad":"置於",
"pinyin":"zhì yú",
"def": ["to place in; to put in (a position)"]
},
"足够":
{"simp":"足够",
"trad":"足夠",
"pinyin":"zú gòu",
"def": ["enough","sufficient"]
},
"天然":
{"simp":"天然",
"trad":"天然",
"pinyin":"tiān rán",
"def": ["natural"]
},
"保守":
{"simp":"保守",
"trad":"保守",
"pinyin":"bǎo shǒu",
"def": ["conservative","to guard","to keep"]
},
"血肉模糊":
{"simp":"血肉模糊",
"trad":"血肉模糊",
"pinyin":"xuè ròu mó hu",
"def": ["to be badly mangled or mutilated (idiom)"]
},
"人相":
{"simp":"人相",
"trad":"人相",
"pinyin":"rén xiàng",
"def": ["physiognomy"]
},
"激进":
{"simp":"激进",
"trad":"激進",
"pinyin":"jī jìn",
"def": ["radical","extreme","extremist"]
},
"对待":
{"simp":"对待",
"trad":"對待",
"pinyin":"duì dài",
"def": ["to treat","treatment"]
},
"武装力量":
{"simp":"武装力量",
"trad":"武裝力量",
"pinyin":"wǔ zhuāng lì liàng",
"def": ["armed force"]
},
"刊":
{"simp":"刊",
"trad":"栞",
"pinyin":"kān",
"def": ["old variant of 刊[kan1]","to peel with a knife","to carve","to amend"]
},
"派别":
{"simp":"派别",
"trad":"派別",
"pinyin":"pài bié",
"def": ["denomination","group","school","faction","school of thought"]
},
"本性":
{"simp":"本性",
"trad":"本性",
"pinyin":"běn xìng",
"def": ["natural instincts","nature","inherent quality"]
},
"人大":
{"simp":"人大",
"trad":"人大",
"pinyin":"Rén dà",
"def": ["(Chinese) National People's Congress (abbr. for 全國人民代表大會|全国人民代表大会[Quan2 guo2 Ren2 min2 Dai4 biao3 Da4 hui4])","Renmin University of China (abbr. for 中國人民大學|中国人民大学[Zhong1 guo2 Ren2 min2 Da4 xue2])"]
},
"期望":
{"simp":"期望",
"trad":"期望",
"pinyin":"qī wàng",
"def": ["to have expectations","to earnestly hope","expectation","hope"]
},
"身边":
{"simp":"身边",
"trad":"身邊",
"pinyin":"shēn biān",
"def": ["at one's side","on hand"]
},
"道外":
{"simp":"道外",
"trad":"道外",
"pinyin":"Dào wài",
"def": ["Daowai district of Harbin 哈爾濱|哈尔滨[Ha1 er3 bin1] in Heilongjiang"]
},
"体":
{"simp":"体",
"trad":"體",
"pinyin":"tǐ",
"def": ["body","form","style","system","substance","to experience","aspect (linguistics)"]
},
"美好":
{"simp":"美好",
"trad":"美好",
"pinyin":"měi hǎo",
"def": ["beautiful","fine"]
},
"机构":
{"simp":"机构",
"trad":"機構",
"pinyin":"jī gòu",
"def": ["mechanism","structure","organization","agency","institution","CL:所[suo3]"]
},
"异种":
{"simp":"异种",
"trad":"異種",
"pinyin":"yì zhǒng",
"def": ["hetero-","variety"]
},
"盘子":
{"simp":"盘子",
"trad":"盤子",
"pinyin":"pán zi",
"def": ["tray","plate","dish","CL:個|个[ge4]"]
},
"海军陆战队":
{"simp":"海军陆战队",
"trad":"海軍陸戰隊",
"pinyin":"hǎi jūn lù zhàn duì",
"def": ["marine corps","marines"]
},
"恰当":
{"simp":"恰当",
"trad":"恰當",
"pinyin":"qià dàng",
"def": ["appropriate","suitable"]
},
"林子":
{"simp":"林子",
"trad":"林子",
"pinyin":"lín zi",
"def": ["woods","grove","forest"]
},
"行走":
{"simp":"行走",
"trad":"行走",
"pinyin":"xíng zǒu",
"def": ["to walk"]
},
"世事":
{"simp":"世事",
"trad":"世事",
"pinyin":"shì shì",
"def": ["affairs of life","things of the world"]
},
"利用":
{"simp":"利用",
"trad":"利用",
"pinyin":"lì yòng",
"def": ["to exploit","to make use of","to use","to take advantage of","to utilize"]
},
"谙":
{"simp":"谙",
"trad":"諳",
"pinyin":"ān",
"def": ["to be versed in","to know well"]
},
"辉煌":
{"simp":"辉煌",
"trad":"輝煌",
"pinyin":"huī huáng",
"def": ["splendid","glorious"]
},
"一一":
{"simp":"一一",
"trad":"一一",
"pinyin":"yī yī",
"def": ["one by one","one after another"]
},
"异性":
{"simp":"异性",
"trad":"異性",
"pinyin":"yì xìng",
"def": ["the opposite sex","of the opposite sex","heterosexual","different in nature"]
},
"人马座":
{"simp":"人马座",
"trad":"人馬座",
"pinyin":"Rén mǎ zuò",
"def": ["Sagittarius (constellation and sign of the zodiac)"]
},
"奥":
{"simp":"奥",
"trad":"奧",
"pinyin":"ào",
"def": ["obscure","mysterious"]
},
"神":
{"simp":"神",
"trad":"神",
"pinyin":"shén",
"def": ["deity","soul","spirit","unusual","mysterious","lively","expressive","expression","look","CL:個|个[ge4]","(slang) awesome","amazing"]
},
"小的":
{"simp":"小的",
"trad":"小的",
"pinyin":"xiǎo de",
"def": ["I (when talking to a superior)"]
},
"态度":
{"simp":"态度",
"trad":"態度",
"pinyin":"tài du",
"def": ["manner","bearing","attitude","approach","CL:個|个[ge4]"]
},
"由此":
{"simp":"由此",
"trad":"由此",
"pinyin":"yóu cǐ",
"def": ["hereby","from this"]
},
"温暖":
{"simp":"温暖",
"trad":"溫暖",
"pinyin":"wēn nuǎn",
"def": ["warm"]
},
"与其":
{"simp":"与其",
"trad":"與其",
"pinyin":"yǔ qí",
"def": ["rather than...","與其|与其[yu3 qi2] A 不如[bu4 ru2] B (rather than A, better to B)"]
},
"负有":
{"simp":"负有",
"trad":"負有",
"pinyin":"fù yǒu",
"def": ["to be responsible for"]
},
"讨论":
{"simp":"讨论",
"trad":"討論",
"pinyin":"tǎo lùn",
"def": ["to discuss","to talk over","CL:個|个[ge4]"]
},
"信徒":
{"simp":"信徒",
"trad":"信徒",
"pinyin":"xìn tú",
"def": ["believer"]
},
"向往":
{"simp":"向往",
"trad":"嚮往",
"pinyin":"xiàng wǎng",
"def": ["to yearn for","to look forward to"]
},
"离开":
{"simp":"离开",
"trad":"離開",
"pinyin":"lí kāi",
"def": ["to depart","to leave"]
},
"抱歉":
{"simp":"抱歉",
"trad":"抱歉",
"pinyin":"bào qiàn",
"def": ["to be sorry","to feel apologetic","sorry!"]
},
"传播":
{"simp":"传播",
"trad":"傳播",
"pinyin":"chuán bō",
"def": ["to disseminate","to propagate","to spread"]
},
"途径":
{"simp":"途径",
"trad":"途徑",
"pinyin":"tú jìng",
"def": ["way","channel"]
},
"开发":
{"simp":"开发",
"trad":"開發",
"pinyin":"kāi fā",
"def": ["to exploit (a resource)","to open up (for development)","to develop"]
},
"星群":
{"simp":"星群",
"trad":"星群",
"pinyin":"xīng qún",
"def": ["(astronomy) asterism"]
},
"传教":
{"simp":"传教",
"trad":"傳教",
"pinyin":"chuán jiào",
"def": ["to preach","missionary","to evangelize"]
},
"手段":
{"simp":"手段",
"trad":"手段",
"pinyin":"shǒu duàn",
"def": ["method","means (of doing sth)","strategy","trick","CL:個|个[ge4]"]
},
"想通":
{"simp":"想通",
"trad":"想通",
"pinyin":"xiǎng tōng",
"def": ["to figure out","to realize","to become convinced","to come round (to an idea)","to get over it"]
},
"触角":
{"simp":"触角",
"trad":"觸角",
"pinyin":"chù jiǎo",
"def": ["antenna","feeler"]
},
"基层":
{"simp":"基层",
"trad":"基層",
"pinyin":"jī céng",
"def": ["basic level","grassroots unit","basement layer"]
},
"醒来":
{"simp":"醒来",
"trad":"醒來",
"pinyin":"xǐng lái",
"def": ["to waken"]
},
"招募":
{"simp":"招募",
"trad":"招募",
"pinyin":"zhāo mù",
"def": ["to recruit","to enlist"]
},
"超标":
{"simp":"超标",
"trad":"超標",
"pinyin":"chāo biāo",
"def": ["to cross the limit","to be over the accepted norm","excessive"]
},
"外壳":
{"simp":"外壳",
"trad":"外殼",
"pinyin":"wài ké",
"def": ["envelope","outer shell","hull","cover","case"]
},
"休假":
{"simp":"休假",
"trad":"休假",
"pinyin":"xiū jià",
"def": ["to take a vacation","to go on holiday"]
},
"匹":
{"simp":"匹",
"trad":"疋",
"pinyin":"pǐ",
"def": ["variant of 匹[pi3]","classifier for cloth: bolt"]
},
"玩家":
{"simp":"玩家",
"trad":"玩家",
"pinyin":"wán jiā",
"def": ["player (of a game)","enthusiast (audio, model planes etc)"]
},
"魁":
{"simp":"魁",
"trad":"魁",
"pinyin":"kuí",
"def": ["chief","head","outstanding","exceptional","stalwart"]
},
"关注":
{"simp":"关注",
"trad":"關注",
"pinyin":"guān zhù",
"def": ["to pay attention to","to follow sth closely","to follow (on social media)","concern","interest","attention"]
},
"平常":
{"simp":"平常",
"trad":"平常",
"pinyin":"píng cháng",
"def": ["ordinary","common","usually","ordinarily"]
},
"完善":
{"simp":"完善",
"trad":"完善",
"pinyin":"wán shàn",
"def": ["(of systems, facilities etc) comprehensive","well-developed","excellent","to refine","to improve"]
},
"内幕":
{"simp":"内幕",
"trad":"內幕",
"pinyin":"nèi mù",
"def": ["inside story","non-public information","behind the scenes","internal"]
},
"有印象":
{"simp":"有印象",
"trad":"有印象",
"pinyin":"yǒu yìn xiàng",
"def": ["to have a recollection (of sb or sth)","to remember"]
},
"参加":
{"simp":"参加",
"trad":"參加",
"pinyin":"cān jiā",
"def": ["to participate","to take part","to join"]
},
"难":
{"simp":"难",
"trad":"難",
"pinyin":"nàn",
"def": ["disaster","distress","to scold"]
},
"摇篮":
{"simp":"摇篮",
"trad":"搖籃",
"pinyin":"yáo lán",
"def": ["cradle"]
},
"抱有":
{"simp":"抱有",
"trad":"抱有",
"pinyin":"bào yǒu",
"def": ["have","possess"]
},
"装备":
{"simp":"装备",
"trad":"裝備",
"pinyin":"zhuāng bèi",
"def": ["equipment","to equip","to outfit"]
},
"林木":
{"simp":"林木",
"trad":"林木",
"pinyin":"lín mù",
"def": ["forest","forest tree"]
},
"侵":
{"simp":"侵",
"trad":"侵",
"pinyin":"qīn",
"def": ["to invade","to encroach","to infringe","to approach"]
},
"三体问题":
{"simp":"三体问题",
"trad":"三體問題",
"pinyin":"sān tǐ wèn tí",
"def": ["three-body problem (mechanics)"]
},
"宗教仪式":
{"simp":"宗教仪式",
"trad":"宗教儀式",
"pinyin":"zōng jiào yí shì",
"def": ["religious ceremony"]
},
"物理学家":
{"simp":"物理学家",
"trad":"物理學家",
"pinyin":"wù lǐ xué jiā",
"def": ["physicist"]
},
"数学家":
{"simp":"数学家",
"trad":"數學家",
"pinyin":"shù xué jiā",
"def": ["mathematician"]
},
"啃":
{"simp":"啃",
"trad":"啃",
"pinyin":"kěn",
"def": ["to gnaw","to nibble","to bite"]
},
"衣衫":
{"simp":"衣衫",
"trad":"衣衫",
"pinyin":"yī shān",
"def": ["clothing","unlined garment"]
},
"绷紧":
{"simp":"绷紧",
"trad":"繃緊",
"pinyin":"bēng jǐn",
"def": ["to stretch taut"]
},
"路":
{"simp":"路",
"trad":"路",
"pinyin":"lù",
"def": ["road","CL:條|条[tiao2]","journey","route","line (bus etc)","sort; kind"]
},
"魏":
{"simp":"魏",
"trad":"魏",
"pinyin":"wèi",
"def": ["tower over a palace gateway (old)"]
},
"有道理":
{"simp":"有道理",
"trad":"有道理",
"pinyin":"yǒu dào li",
"def": ["to make sense","reasonable"]
},
"弄平":
{"simp":"弄平",
"trad":"弄平",
"pinyin":"nòng píng",
"def": ["to flatten"]
},
"压力":
{"simp":"压力",
"trad":"壓力",
"pinyin":"yā lì",
"def": ["pressure"]
},
"电梯":
{"simp":"电梯",
"trad":"電梯",
"pinyin":"diàn tī",
"def": ["elevator","escalator","CL:臺|台[tai2],部[bu4]"]
},
"转身":
{"simp":"转身",
"trad":"轉身",
"pinyin":"zhuǎn shēn",
"def": ["(of a person) to turn round","to face about","(of a widow) to remarry (archaic)"]
},
"在我看来":
{"simp":"在我看来",
"trad":"在我看來",
"pinyin":"zài wǒ kàn lái",
"def": ["in my opinion"]
},
"尖锐":
{"simp":"尖锐",
"trad":"尖銳",
"pinyin":"jiān ruì",
"def": ["sharp","intense","penetrating","pointed","acute (illness)"]
},
"威胁":
{"simp":"威胁",
"trad":"威脅",
"pinyin":"wēi xié",
"def": ["to threaten","to menace"]
},
"依次":
{"simp":"依次",
"trad":"依次",
"pinyin":"yī cì",
"def": ["in order","in succession"]
},
"看法":
{"simp":"看法",
"trad":"看法",
"pinyin":"kàn fǎ",
"def": ["way of looking at a thing","view","opinion","CL:個|个[ge4]"]
},
"实力":
{"simp":"实力",
"trad":"實力",
"pinyin":"shí lì",
"def": ["strength"]
},
"运用":
{"simp":"运用",
"trad":"運用",
"pinyin":"yùn yòng",
"def": ["to use","to put to use"]
},
"极力":
{"simp":"极力",
"trad":"極力",
"pinyin":"jí lì",
"def": ["to make a supreme effort","at all costs"]
},
"效果":
{"simp":"效果",
"trad":"效果",
"pinyin":"xiào guǒ",
"def": ["result","effect","efficacy","(theater) sound or visual effects"]
},
"战败":
{"simp":"战败",
"trad":"戰敗",
"pinyin":"zhàn bài",
"def": ["to lose a war"]
},
"主流":
{"simp":"主流",
"trad":"主流",
"pinyin":"zhǔ liú",
"def": ["main stream (of a river)","fig. the essential point","main viewpoint of a matter","mainstream (culture etc)"]
},
"沾":
{"simp":"沾",
"trad":"霑",
"pinyin":"zhān",
"def": ["variant of 沾[zhan1]","to moisten"]
},
"且":
{"simp":"且",
"trad":"且",
"pinyin":"qiě",
"def": ["and","moreover","yet","for the time being","to be about to","both (... and...)"]
},
"普及":
{"simp":"普及",
"trad":"普及",
"pinyin":"pǔ jí",
"def": ["to spread extensively","to generalize","widespread","popular","universal","ubiquitous","pervasive"]
},
"篱":
{"simp":"篱",
"trad":"籬",
"pinyin":"lí",
"def": ["a fence"]
},
"迅速发展":
{"simp":"迅速发展",
"trad":"迅速發展",
"pinyin":"xùn sù fā zhǎn",
"def": ["to develop rapidly"]
},
"镇静":
{"simp":"镇静",
"trad":"鎮靜",
"pinyin":"zhèn jìng",
"def": ["calm","cool"]
},
"缺陷":
{"simp":"缺陷",
"trad":"缺陷",
"pinyin":"quē xiàn",
"def": ["defect","flaw","physical defect"]
},
"手里":
{"simp":"手里",
"trad":"手裡",
"pinyin":"shǒu lǐ",
"def": ["in hand","(a situation is) in sb's hands"]
},
"欲望":
{"simp":"欲望",
"trad":"慾望",
"pinyin":"yù wàng",
"def": ["desire","longing","appetite","craving"]
},
"座位":
{"simp":"座位",
"trad":"座位",
"pinyin":"zuò wèi",
"def": ["seat","CL:個|个[ge4]"]
},
"燎原":
{"simp":"燎原",
"trad":"燎原",
"pinyin":"liáo yuán",
"def": ["to start a prairie fire"]
},
"有影响":
{"simp":"有影响",
"trad":"有影響",
"pinyin":"yǒu yǐng xiǎng",
"def": ["influential"]
},
"漫漫":
{"simp":"漫漫",
"trad":"漫漫",
"pinyin":"màn màn",
"def": ["long","endless","boundless"]
},
"辆":
{"simp":"辆",
"trad":"輛",
"pinyin":"liàng",
"def": ["classifier for vehicles"]
},
"结尾":
{"simp":"结尾",
"trad":"結尾",
"pinyin":"jié wěi",
"def": ["ending","coda","to wind up"]
},
"束":
{"simp":"束",
"trad":"束",
"pinyin":"shù",
"def": ["to bind","bunch","bundle","classifier for bunches, bundles, beams of light etc","to control"]
},
"符号":
{"simp":"符号",
"trad":"符號",
"pinyin":"fú hào",
"def": ["symbol","mark","sign"]
},
"往":
{"simp":"往",
"trad":"徃",
"pinyin":"wǎng",
"def": ["old variant of 往[wang3]"]
},
"换":
{"simp":"换",
"trad":"換",
"pinyin":"huàn",
"def": ["to exchange","to change (clothes etc)","to substitute","to switch","to convert (currency)"]
},
"分析":
{"simp":"分析",
"trad":"分析",
"pinyin":"fēn xī",
"def": ["to analyze","analysis","CL:個|个[ge4]"]
},
"这就是说":
{"simp":"这就是说",
"trad":"這就是說",
"pinyin":"zhè jiù shì shuō",
"def": ["in other words","that is to say"]
},
"停顿":
{"simp":"停顿",
"trad":"停頓",
"pinyin":"tíng dùn",
"def": ["to halt","to break off","pause (in speech)"]
},
"奶奶的":
{"simp":"奶奶的",
"trad":"奶奶的",
"pinyin":"nǎi nai de",
"def": ["damn it!","blast it!"]
},
"苟且偷生":
{"simp":"苟且偷生",
"trad":"苟且偷生",
"pinyin":"gǒu qiě tōu shēng",
"def": ["to drift and live without purpose (idiom); to drag out an ignoble existence"]
},
"天空":
{"simp":"天空",
"trad":"天空",
"pinyin":"tiān kōng",
"def": ["sky"]
},
"礼物":
{"simp":"礼物",
"trad":"禮物",
"pinyin":"lǐ wù",
"def": ["gift","present","CL:件[jian4],個|个[ge4],份[fen4]"]
},
"同胞":
{"simp":"同胞",
"trad":"同胞",
"pinyin":"tóng bāo",
"def": ["born of the same parents","sibling","fellow citizen","compatriot"]
},
"难以置信":
{"simp":"难以置信",
"trad":"難以置信",
"pinyin":"nán yǐ zhì xìn",
"def": ["hard to believe","incredible"]
},
"眼皮底下":
{"simp":"眼皮底下",
"trad":"眼皮底下",
"pinyin":"yǎn pí dǐ xia",
"def": ["in front of one's eyes"]
},
"清楚":
{"simp":"清楚",
"trad":"清楚",
"pinyin":"qīng chu",
"def": ["clear","distinct","to understand thoroughly","to be clear about"]
},
"不一":
{"simp":"不一",
"trad":"不一",
"pinyin":"bù yī",
"def": ["to vary","to differ"]
},
"采取行动":
{"simp":"采取行动",
"trad":"採取行動",
"pinyin":"cǎi qǔ xíng dòng",
"def": ["to take action","to adopt policies","to move on some issue"]
},
"指挥中心":
{"simp":"指挥中心",
"trad":"指揮中心",
"pinyin":"zhǐ huī zhōng xīn",
"def": ["command center"]
},
"翻译":
{"simp":"翻译",
"trad":"翻譯",
"pinyin":"fān yì",
"def": ["to translate","to interpret","translator","interpreter","translation","interpretation","CL:個|个[ge4],位[wei4],名[ming2]"]
},
"人物":
{"simp":"人物",
"trad":"人物",
"pinyin":"rén wù",
"def": ["person","character (in a play, novel etc)","protagonist","CL:個|个[ge4]"]
},
"工":
{"simp":"工",
"trad":"工",
"pinyin":"gōng",
"def": ["work","worker","skill","profession","trade","craft","labor"]
},
"学校":
{"simp":"学校",
"trad":"學校",
"pinyin":"xué xiào",
"def": ["school","CL:所[suo3]"]
},
"攻击":
{"simp":"攻击",
"trad":"攻擊",
"pinyin":"gōng jī",
"def": ["to attack","to accuse","to charge","an attack (terrorist or military)"]
},
"工人":
{"simp":"工人",
"trad":"工人",
"pinyin":"gōng rén",
"def": ["worker","CL:個|个[ge4],名[ming2]"]
},
"同样":
{"simp":"同样",
"trad":"同樣",
"pinyin":"tóng yàng",
"def": ["same","equal","equivalent"]
},
"传授":
{"simp":"传授",
"trad":"傳授",
"pinyin":"chuán shòu",
"def": ["to impart","to pass on","to teach"]
},
"科技":
{"simp":"科技",
"trad":"科技",
"pinyin":"kē jì",
"def": ["science and technology"]
},
"程序":
{"simp":"程序",
"trad":"程序",
"pinyin":"chéng xù",
"def": ["procedures","sequence","order","computer program"]
},
"探测器":
{"simp":"探测器",
"trad":"探測器",
"pinyin":"tàn cè qì",
"def": ["detector; probe"]
},
"沙子":
{"simp":"沙子",
"trad":"沙子",
"pinyin":"shā zi",
"def": ["sand","grit","CL:粒[li4],把[ba3]"]
},
"徘徊":
{"simp":"徘徊",
"trad":"徘徊",
"pinyin":"pái huái",
"def": ["to dither","to hesitate","to pace back and forth","by ext. to hover around","to linger"]
},
"之际":
{"simp":"之际",
"trad":"之際",
"pinyin":"zhī jì",
"def": ["during","at the time of"]
},
"正确":
{"simp":"正确",
"trad":"正確",
"pinyin":"zhèng què",
"def": ["correct","proper"]
},
"几千":
{"simp":"几千",
"trad":"幾千",
"pinyin":"jǐ qiān",
"def": ["several thousand"]
},
"形成":
{"simp":"形成",
"trad":"形成",
"pinyin":"xíng chéng",
"def": ["to form","to take shape"]
},
"布":
{"simp":"布",
"trad":"布",
"pinyin":"bù",
"def": ["cloth","to declare","to announce","to spread","to make known"]
},
"四":
{"simp":"四",
"trad":"四",
"pinyin":"sì",
"def": ["four","4"]
},
"小型":
{"simp":"小型",
"trad":"小型",
"pinyin":"xiǎo xíng",
"def": ["small scale","small size"]
},
"前方":
{"simp":"前方",
"trad":"前方",
"pinyin":"qián fāng",
"def": ["ahead","the front"]
},
"皮夹":
{"simp":"皮夹",
"trad":"皮夾",
"pinyin":"pí jiā",
"def": ["wallet","Taiwan pr. [pi2 jia2]"]
},
"磁":
{"simp":"磁",
"trad":"磁",
"pinyin":"cí",
"def": ["magnetic","magnetism","porcelain"]
},
"钱":
{"simp":"钱",
"trad":"錢",
"pinyin":"qián",
"def": ["coin","money","CL:筆|笔[bi3]","unit of weight, one tenth of a tael 兩|两[liang3]"]
},
"限定":
{"simp":"限定",
"trad":"限定",
"pinyin":"xiàn dìng",
"def": ["to restrict to","to limit"]
},
"职位":
{"simp":"职位",
"trad":"職位",
"pinyin":"zhí wèi",
"def": ["post","office","position"]
},
"所指":
{"simp":"所指",
"trad":"所指",
"pinyin":"suǒ zhǐ",
"def": ["the objects indicated","as pointed out"]
},
"顿":
{"simp":"顿",
"trad":"頓",
"pinyin":"dùn",
"def": ["to stop","to pause","to arrange","to lay out","to kowtow","to stamp (one's foot)","at once","classifier for meals, beatings, scoldings etc: time, bout, spell, meal"]
},
"登上":
{"simp":"登上",
"trad":"登上",
"pinyin":"dēng shàng",
"def": ["to climb over","to ascend onto","to mount"]
},
"加速器":
{"simp":"加速器",
"trad":"加速器",
"pinyin":"jiā sù qì",
"def": ["accelerator (computing)","particle accelerator"]
},
"微观":
{"simp":"微观",
"trad":"微觀",
"pinyin":"wēi guān",
"def": ["micro-","subatomic"]
},
"耳机":
{"simp":"耳机",
"trad":"耳機",
"pinyin":"ěr jī",
"def": ["headphones","earphones","telephone receiver"]
},
"引火":
{"simp":"引火",
"trad":"引火",
"pinyin":"yǐn huǒ",
"def": ["to kindle","to light a fire"]
},
"出色":
{"simp":"出色",
"trad":"出色",
"pinyin":"chū sè",
"def": ["remarkable","outstanding"]
},
"承受":
{"simp":"承受",
"trad":"承受",
"pinyin":"chéng shòu",
"def": ["to bear","to support","to inherit"]
},
"差不多":
{"simp":"差不多",
"trad":"差不多",
"pinyin":"chà bu duō",
"def": ["almost","nearly","more or less","about the same","good enough","not bad"]
},
"等于":
{"simp":"等于",
"trad":"等於",
"pinyin":"děng yú",
"def": ["to equal","to be tantamount to"]
},
"安定":
{"simp":"安定",
"trad":"安定",
"pinyin":"ān dìng",
"def": ["stable; calm; settled","to stabilize","Valium; diazepam"]
},
"死人":
{"simp":"死人",
"trad":"死人",
"pinyin":"sǐ rén",
"def": ["dead person","(coll.) to die","(of a death) to happen"]
},
"人们":
{"simp":"人们",
"trad":"人們",
"pinyin":"rén men",
"def": ["people"]
},
"据传":
{"simp":"据传",
"trad":"據傳",
"pinyin":"jù chuán",
"def": ["it is rumored that ...","it is reported that ..."]
},
"轻轻":
{"simp":"轻轻",
"trad":"輕輕",
"pinyin":"qīng qīng",
"def": ["lightly","softly"]
},
"未免":
{"simp":"未免",
"trad":"未免",
"pinyin":"wèi miǎn",
"def": ["unavoidably","can't help","really","rather"]
},
"做到":
{"simp":"做到",
"trad":"做到",
"pinyin":"zuò dào",
"def": ["to accomplish","to achieve"]
},
"付之一炬":
{"simp":"付之一炬",
"trad":"付之一炬",
"pinyin":"fù zhī yī jù",
"def": ["to put to the torch (idiom)","to commit to the flames","to burn sth down deliberately"]
},
"丁":
{"simp":"丁",
"trad":"丁",
"pinyin":"dīng",
"def": ["male adult","the 4th of the 10 Heavenly Stems 天干[tian1 gan1]","fourth (used like \"4\" or \"D\")","small cube of meat or vegetable","(literary) to encounter","(archaic) ancient Chinese compass point: 195°","(chemistry) butyl"]
},
"瞄":
{"simp":"瞄",
"trad":"瞄",
"pinyin":"miáo",
"def": ["to take aim","(fig.) to aim one's looks at","to glance at"]
},
"冥王星":
{"simp":"冥王星",
"trad":"冥王星",
"pinyin":"Míng wáng xīng",
"def": ["Pluto (dwarf planet)"]
},
"蚊子":
{"simp":"蚊子",
"trad":"蚊子",
"pinyin":"wén zi",
"def": ["mosquito"]
},
"中子":
{"simp":"中子",
"trad":"中子",
"pinyin":"zhōng zǐ",
"def": ["neutron"]
},
"图像":
{"simp":"图像",
"trad":"圖像",
"pinyin":"tú xiàng",
"def": ["image","picture","graphic"]
},
"把手":
{"simp":"把手",
"trad":"把手",
"pinyin":"bǎ shou",
"def": ["handle","grip","knob"]
},
"走过":
{"simp":"走过",
"trad":"走過",
"pinyin":"zǒu guò",
"def": ["to walk past","to pass by"]
},
"撕":
{"simp":"撕",
"trad":"撕",
"pinyin":"sī",
"def": ["to tear"]
},
"闻到":
{"simp":"闻到",
"trad":"聞到",
"pinyin":"wén dào",
"def": ["to smell","to sniff sth out","to perceive by smelling"]
},
"焦油":
{"simp":"焦油",
"trad":"焦油",
"pinyin":"jiāo yóu",
"def": ["tar"]
},
"味":
{"simp":"味",
"trad":"味",
"pinyin":"wèi",
"def": ["taste","smell","(fig.) (noun suffix) feel","quality","sense","(TCM) classifier for ingredients of a medicine prescription"]
},
"客厅":
{"simp":"客厅",
"trad":"客廳",
"pinyin":"kè tīng",
"def": ["drawing room (room for arriving guests)","living room","CL:間|间[jian1]"]
},
"扬":
{"simp":"扬",
"trad":"敭",
"pinyin":"yáng",
"def": ["variant of 揚|扬[yang2]"]
},
"烟斗":
{"simp":"烟斗",
"trad":"煙斗",
"pinyin":"yān dǒu",
"def": ["(smoking) pipe"]
},
"可是":
{"simp":"可是",
"trad":"可是",
"pinyin":"kě shì",
"def": ["but","however","(used for emphasis) indeed"]
},
"芯":
{"simp":"芯",
"trad":"芯",
"pinyin":"xìn",
"def": ["core"]
},
"不足":
{"simp":"不足",
"trad":"不足",
"pinyin":"bù zú",
"def": ["insufficient","lacking","deficiency","not enough","inadequate","not worth","cannot","should not"]
},
"筒":
{"simp":"筒",
"trad":"筩",
"pinyin":"tǒng",
"def": ["variant of 筒[tong3]"]
},
"舰队":
{"simp":"舰队",
"trad":"艦隊",
"pinyin":"jiàn duì",
"def": ["fleet","CL:支[zhi1]"]
},
"网球场":
{"simp":"网球场",
"trad":"網球場",
"pinyin":"wǎng qiú chǎng",
"def": ["tennis court"]
},
"吸附性":
{"simp":"吸附性",
"trad":"吸附性",
"pinyin":"xī fù xìng",
"def": ["absorption","absorbability (chemistry)"]
},
"学习":
{"simp":"学习",
"trad":"學習",
"pinyin":"xué xí",
"def": ["to learn","to study"]
},
"三维":
{"simp":"三维",
"trad":"三維",
"pinyin":"sān wéi",
"def": ["three-dimensional","3D"]
},
"何等":
{"simp":"何等",
"trad":"何等",
"pinyin":"hé děng",
"def": ["what kind?","how, what","somewhat"]
},
"巨量":
{"simp":"巨量",
"trad":"巨量",
"pinyin":"jù liàng",
"def": ["huge quantity","massive"]
},
"停止":
{"simp":"停止",
"trad":"停止",
"pinyin":"tíng zhǐ",
"def": ["to stop","to halt","to cease"]
},
"备份":
{"simp":"备份",
"trad":"備份",
"pinyin":"bèi fèn",
"def": ["backup"]
},
"大熊猫":
{"simp":"大熊猫",
"trad":"大熊貓",
"pinyin":"dà xióng māo",
"def": ["giant panda (Ailuropoda melanoleuca)"]
},
"低维":
{"simp":"低维",
"trad":"低維",
"pinyin":"dī wéi",
"def": ["low-dimensional (math.)"]
},
"高维空间":
{"simp":"高维空间",
"trad":"高維空間",
"pinyin":"gāo wéi kōng jiān",
"def": ["(math.) higher dimensional space"]
},
"在这期间":
{"simp":"在这期间",
"trad":"在這期間",
"pinyin":"zài zhè qī jiān",
"def": ["during time","in this time"]
},
"基地":
{"simp":"基地",
"trad":"基地",
"pinyin":"jī dì",
"def": ["base (of operations)","industrial or military base","al-Qaeda"]
},
"到此为止":
{"simp":"到此为止",
"trad":"到此為止",
"pinyin":"dào cǐ wéi zhǐ",
"def": ["to stop at this point","to end here","to call it a day"]
},
"基本":
{"simp":"基本",
"trad":"基本",
"pinyin":"jī běn",
"def": ["basic","fundamental","main","elementary"]
},
"基本粒子":
{"simp":"基本粒子",
"trad":"基本粒子",
"pinyin":"jī běn lì zǐ",
"def": ["elementary particle (particle physics)"]
},
"大爆炸":
{"simp":"大爆炸",
"trad":"大爆炸",
"pinyin":"Dà bào zhà",
"def": ["Big Bang (cosmology)"]
},
"维度":
{"simp":"维度",
"trad":"維度",
"pinyin":"wéi dù",
"def": ["dimension (math.)","dimensionality"]
},
"多达":
{"simp":"多达",
"trad":"多達",
"pinyin":"duō dá",
"def": ["up to","no less than","as much as"]
},
"化学反应":
{"simp":"化学反应",
"trad":"化學反應",
"pinyin":"huà xué fǎn yìng",
"def": ["chemical reaction"]
},
"看成":
{"simp":"看成",
"trad":"看成",
"pinyin":"kàn chéng",
"def": ["to regard as"]
},
"遗憾":
{"simp":"遗憾",
"trad":"遺憾",
"pinyin":"yí hàn",
"def": ["regret","to regret","to be sorry that"]
},
"尖":
{"simp":"尖",
"trad":"尖",
"pinyin":"jiān",
"def": ["point (of needle)","sharp","shrewd","pointed"]
},
"干涉":
{"simp":"干涉",
"trad":"干涉",
"pinyin":"gān shè",
"def": ["to interfere","to meddle","interference"]
},
"茫然":
{"simp":"茫然",
"trad":"茫然",
"pinyin":"máng rán",
"def": ["blankly","vacantly","at a loss"]
},
"就算":
{"simp":"就算",
"trad":"就算",
"pinyin":"jiù suàn",
"def": ["granted that","even if"]
},
"算了":
{"simp":"算了",
"trad":"算了",
"pinyin":"suàn le",
"def": ["let it be","let it pass","forget about it"]
},
"基础":
{"simp":"基础",
"trad":"基礎",
"pinyin":"jī chǔ",
"def": ["base; foundation; basis","basic; fundamental"]
},
"出风头":
{"simp":"出风头",
"trad":"出風頭",
"pinyin":"chū fēng tou",
"def": ["to push oneself forward","to seek fame","to be in the limelight","same as 出鋒頭|出锋头[chu1 feng1 tou5]"]
},
"收音机":
{"simp":"收音机",
"trad":"收音機",
"pinyin":"shōu yīn jī",
"def": ["radio","CL:臺|台[tai2]"]
},
"人家":
{"simp":"人家",
"trad":"人家",
"pinyin":"rén jia",
"def": ["other people","sb else","he, she or they","I, me (referring to oneself as \"one\" or \"people\")"]
},
"咱":
{"simp":"咱",
"trad":"喒",
"pinyin":"zán",
"def": ["variant of 咱[zan2]"]
},
"烟灰缸":
{"simp":"烟灰缸",
"trad":"煙灰缸",
"pinyin":"yān huī gāng",
"def": ["ashtray"]
},
"一口":
{"simp":"一口",
"trad":"一口",
"pinyin":"yī kǒu",
"def": ["readily","flatly (deny, admit and so on)","a mouthful","a bite"]
},
"斯坦顿":
{"simp":"斯坦顿",
"trad":"斯坦頓",
"pinyin":"Sī tǎn dùn",
"def": ["Stanton (name)"]
},
"冲锋枪":
{"simp":"冲锋枪",
"trad":"衝鋒槍",
"pinyin":"chōng fēng qiāng",
"def": ["submachine gun"]
},
"历史上":
{"simp":"历史上",
"trad":"歷史上",
"pinyin":"lì shǐ shàng",
"def": ["historical","in history"]
},
"穿上":
{"simp":"穿上",
"trad":"穿上",
"pinyin":"chuān shang",
"def": ["to put on (clothes etc)"]
},
"销声匿迹":
{"simp":"销声匿迹",
"trad":"銷聲匿跡",
"pinyin":"xiāo shēng nì jì",
"def": ["to vanish without trace (idiom)","to lie low"]
},
"共同":
{"simp":"共同",
"trad":"共同",
"pinyin":"gòng tóng",
"def": ["common","joint","jointly","together","collaborative"]
},
"建成":
{"simp":"建成",
"trad":"建成",
"pinyin":"jiàn chéng",
"def": ["to establish","to build"]
},
"度":
{"simp":"度",
"trad":"度",
"pinyin":"duó",
"def": ["to estimate","Taiwan pr. [duo4]"]
},
"将军":
{"simp":"将军",
"trad":"將軍",
"pinyin":"jiāng jūn",
"def": ["general","high-ranking military officer","to check or checkmate","fig. to embarrass","to challenge","to put sb on the spot"]
},
"对等":
{"simp":"对等",
"trad":"對等",
"pinyin":"duì děng",
"def": ["equal status","equal treatment","parity (under the law)","equity","reciprocity"]
},
"夺取":
{"simp":"夺取",
"trad":"奪取",
"pinyin":"duó qǔ",
"def": ["to seize","to capture","to wrest control of"]
},
"检查":
{"simp":"检查",
"trad":"檢查",
"pinyin":"jiǎn chá",
"def": ["inspection","to examine","to inspect","CL:次[ci4]"]
},
"巴拿马运河":
{"simp":"巴拿马运河",
"trad":"巴拿馬運河",
"pinyin":"Bā ná mǎ Yùn hé",
"def": ["Panama Canal"]
},
"惊动":
{"simp":"惊动",
"trad":"驚動",
"pinyin":"jīng dòng",
"def": ["to alarm","to startle","to disturb"]
},
"行驶":
{"simp":"行驶",
"trad":"行駛",
"pinyin":"xíng shǐ",
"def": ["to travel along a route (of vehicles etc)"]
},
"大师":
{"simp":"大师",
"trad":"大師",
"pinyin":"dà shī",
"def": ["great master","master"]
},
"运河":
{"simp":"运河",
"trad":"運河",
"pinyin":"yùn hé",
"def": ["canal"]
},
"制定":
{"simp":"制定",
"trad":"制定",
"pinyin":"zhì dìng",
"def": ["to draw up","to formulate"]
},
"高效率":
{"simp":"高效率",
"trad":"高效率",
"pinyin":"gāo xiào lù:",
"def": ["high efficiency"]
},
"海滩":
{"simp":"海滩",
"trad":"海灘",
"pinyin":"hǎi tān",
"def": ["beach","CL:片[pian4]"]
},
"可行":
{"simp":"可行",
"trad":"可行",
"pinyin":"kě xíng",
"def": ["feasible"]
},
"保证":
{"simp":"保证",
"trad":"保證",
"pinyin":"bǎo zhèng",
"def": ["guarantee","to guarantee","to ensure","to safeguard","to pledge","CL:個|个[ge4]"]
},
"改装":
{"simp":"改装",
"trad":"改裝",
"pinyin":"gǎi zhuāng",
"def": ["to change one's costume","to repackage","to remodel","to refit","to modify","to convert"]
},
"丝状":
{"simp":"丝状",
"trad":"絲狀",
"pinyin":"sī zhuàng",
"def": ["thread-like"]
},
"据说":
{"simp":"据说",
"trad":"據說",
"pinyin":"jù shuō",
"def": ["it is said that","reportedly"]
},
"地图":
{"simp":"地图",
"trad":"地圖",
"pinyin":"dì tú",
"def": ["map","CL:張|张[zhang1],本[ben3]"]
},
"紧急":
{"simp":"紧急",
"trad":"緊急",
"pinyin":"jǐn jí",
"def": ["urgent","emergency"]
},
"自卫队":
{"simp":"自卫队",
"trad":"自衛隊",
"pinyin":"zì wèi duì",
"def": ["self-defense force","the Japanese armed forces"]
},
"日本":
{"simp":"日本",
"trad":"日本",
"pinyin":"Rì běn",
"def": ["Japan"]
},
"北约":
{"simp":"北约",
"trad":"北約",
"pinyin":"Běi yuē",
"def": ["NATO","abbr. for 北大西洋公約組織|北大西洋公约组织[Bei3 Da4 xi1 Yang2 Gong1 yue1 Zu3 zhi1], North Atlantic Treaty Organization"]
},
"插上":
{"simp":"插上",
"trad":"插上",
"pinyin":"chā shang",
"def": ["to plug into","to insert","to stick in"]
},
"白眼":
{"simp":"白眼",
"trad":"白眼",
"pinyin":"bái yǎn",
"def": ["to give a supercilious look","roll of the eyes"]
},
"球状":
{"simp":"球状",
"trad":"球狀",
"pinyin":"qiú zhuàng",
"def": ["sphere"]
},
"广为":
{"simp":"广为",
"trad":"廣為",
"pinyin":"guǎng wéi",
"def": ["widely"]
},
"磁场":
{"simp":"磁场",
"trad":"磁場",
"pinyin":"cí chǎng",
"def": ["magnetic field"]
},
"少年":
{"simp":"少年",
"trad":"少年",
"pinyin":"shào nián",
"def": ["early youth","youngster","(literary) youth","young man"]
},
"交接":
{"simp":"交接",
"trad":"交接",
"pinyin":"jiāo jiē",
"def": ["(of two things) to come into contact","to meet","to hand over to","to take over from","to associate with","to have friendly relations with","to have sexual intercourse"]
},
"空中":
{"simp":"空中",
"trad":"空中",
"pinyin":"kōng zhōng",
"def": ["in the sky","in the air"]
},
"释放":
{"simp":"释放",
"trad":"釋放",
"pinyin":"shì fàng",
"def": ["to release","to set free","to liberate (a prisoner)","to discharge"]
},
"土":
{"simp":"土",
"trad":"土",
"pinyin":"tǔ",
"def": ["earth","dust","clay","local","indigenous","crude opium","unsophisticated","one of the eight categories of ancient musical instruments 八音[ba1 yin1]"]
},
"中子弹":
{"simp":"中子弹",
"trad":"中子彈",
"pinyin":"zhōng zǐ dàn",
"def": ["neutron bomb"]
},
"扔掉":
{"simp":"扔掉",
"trad":"扔掉",
"pinyin":"rēng diào",
"def": ["to throw away","to throw out"]
},
"俄罗斯":
{"simp":"俄罗斯",
"trad":"俄羅斯",
"pinyin":"E2 luó sī",
"def": ["Russia"]
},
"靠":
{"simp":"靠",
"trad":"靠",
"pinyin":"kào",
"def": ["to lean against or on","to stand by the side of","to come near to","to depend on","to trust","to fuck (vulgar)","traditional military costume drama where the performers wear armor (old)"]
},
"推荐":
{"simp":"推荐",
"trad":"推薦",
"pinyin":"tuī jiàn",
"def": ["to recommend","recommendation"]
},
"扩散":
{"simp":"扩散",
"trad":"擴散",
"pinyin":"kuò sàn",
"def": ["to spread","to proliferate","to diffuse","spread","proliferation","diffusion"]
},
"前情":
{"simp":"前情",
"trad":"前情",
"pinyin":"qián qíng",
"def": ["former love","former circumstances"]
},
"一定":
{"simp":"一定",
"trad":"一定",
"pinyin":"yī dìng",
"def": ["surely","certainly","necessarily","fixed","a certain (extent etc)","given","particular","must"]
},
"次声波":
{"simp":"次声波",
"trad":"次聲波",
"pinyin":"cì shēng bō",
"def": ["infrasonic wave"]
},
"卫星":
{"simp":"卫星",
"trad":"衛星",
"pinyin":"wèi xīng",
"def": ["satellite","moon","CL:顆|颗[ke1]"]
},
"方":
{"simp":"方",
"trad":"方",
"pinyin":"fāng",
"def": ["square","power or involution (math.)","upright","honest","fair and square","direction","side","party (to a contract, dispute etc)","place","method","prescription (medicine)","just when","only or just","classifier for square things","abbr. for square or cubic meter"]
},
"有用":
{"simp":"有用",
"trad":"有用",
"pinyin":"yǒu yòng",
"def": ["useful"]
},
"找":
{"simp":"找",
"trad":"找",
"pinyin":"zhǎo",
"def": ["to try to find","to look for","to call on sb","to find","to seek","to return","to give change"]
},
"阶段":
{"simp":"阶段",
"trad":"階段",
"pinyin":"jiē duàn",
"def": ["stage","section","phase","period","CL:個|个[ge4]"]
},
"河南":
{"simp":"河南",
"trad":"河南",
"pinyin":"Hé nán",
"def": ["Henan province (Honan) in central China, abbr. 豫, capital Zhengzhou 鄭州|郑州[Zheng4 zhou1]"]
},
"恶心":
{"simp":"恶心",
"trad":"惡心",
"pinyin":"è xīn",
"def": ["bad habit","vicious habit","vice"]
},
"哈":
{"simp":"哈",
"trad":"哈",
"pinyin":"hǎ",
"def": ["a Pekinese","a pug","(dialect) to scold"]
},
"座右铭":
{"simp":"座右铭",
"trad":"座右銘",
"pinyin":"zuò yòu míng",
"def": ["motto","maxim"]
},
"花生":
{"simp":"花生",
"trad":"花生",
"pinyin":"huā shēng",
"def": ["peanut","groundnut","CL:粒[li4]"]
},
"过剩":
{"simp":"过剩",
"trad":"過剩",
"pinyin":"guò shèng",
"def": ["to be excessive; to be more than is required"]
},
"记住":
{"simp":"记住",
"trad":"記住",
"pinyin":"jì zhu",
"def": ["to remember","to bear in mind","to learn by heart"]
},
"译员":
{"simp":"译员",
"trad":"譯員",
"pinyin":"yì yuán",
"def": ["interpreter","translator (esp. oral)"]
},
"野兔":
{"simp":"野兔",
"trad":"野兔",
"pinyin":"yě tù",
"def": ["hare"]
},
"中尉":
{"simp":"中尉",
"trad":"中尉",
"pinyin":"zhōng wèi",
"def": ["lieutenant (navy)","first lieutenant (army)","subaltern"]
},
"大胆":
{"simp":"大胆",
"trad":"大膽",
"pinyin":"dà dǎn",
"def": ["brazen","audacious","outrageous","bold","daring","fearless"]
},
"讲话":
{"simp":"讲话",
"trad":"講話",
"pinyin":"jiǎng huà",
"def": ["a speech","to speak","to talk","to address","CL:個|个[ge4]"]
},
"反问":
{"simp":"反问",
"trad":"反問",
"pinyin":"fǎn wèn",
"def": ["to ask (a question) in reply","to answer a question with a question","rhetorical question"]
},
"军事行动":
{"simp":"军事行动",
"trad":"軍事行動",
"pinyin":"jūn shì xíng dòng",
"def": ["military operation"]
},
"资深":
{"simp":"资深",
"trad":"資深",
"pinyin":"zī shēn",
"def": ["veteran (journalist etc)","senior","highly experienced"]
},
"后退":
{"simp":"后退",
"trad":"後退",
"pinyin":"hòu tuì",
"def": ["to recoil","to draw back","to fall back","to retreat"]
},
"特种":
{"simp":"特种",
"trad":"特種",
"pinyin":"tè zhǒng",
"def": ["particular kind","special type"]
},
"需要":
{"simp":"需要",
"trad":"需要",
"pinyin":"xū yào",
"def": ["to need","to want","to demand","to require","requirement","need"]
},
"发射":
{"simp":"发射",
"trad":"發射",
"pinyin":"fā shè",
"def": ["to shoot (a projectile)","to fire (a rocket)","to launch","to emit (a particle)","to discharge","emanation","emission"]
},
"纵深":
{"simp":"纵深",
"trad":"縱深",
"pinyin":"zòng shēn",
"def": ["depth (from front to rear)","depth (into a territory)","span (of time)","(fig.) depth (of deployment, progress, development etc)"]
},
"设防":
{"simp":"设防",
"trad":"設防",
"pinyin":"shè fáng",
"def": ["to set up defenses","to fortify"]
},
"阻断":
{"simp":"阻断",
"trad":"阻斷",
"pinyin":"zǔ duàn",
"def": ["to block","to obstruct","to intercept","to interdict"]
},
"威尔逊":
{"simp":"威尔逊",
"trad":"威爾遜",
"pinyin":"Wēi ěr xùn",
"def": ["Wilson (name)"]
},
"扯远":
{"simp":"扯远",
"trad":"扯遠",
"pinyin":"chě yuǎn",
"def": ["to digress","to get sidetracked","to go off on a tangent"]
},
"立":
{"simp":"立",
"trad":"立",
"pinyin":"lì",
"def": ["to stand","to set up","to establish","to lay down","to draw up","at once","immediately"]
},
"时代":
{"simp":"时代",
"trad":"時代",
"pinyin":"shí dài",
"def": ["age","era","epoch","period (in one's life)","CL:個|个[ge4]"]
},
"甩":
{"simp":"甩",
"trad":"甩",
"pinyin":"shuǎi",
"def": ["to throw","to fling","to swing","to leave behind","to throw off","to dump (sb)"]
},
"碎末":
{"simp":"碎末",
"trad":"碎末",
"pinyin":"suì mò",
"def": ["flecks","particles","bits","fine powder"]
},
"你我":
{"simp":"你我",
"trad":"你我",
"pinyin":"nǐ wǒ",
"def": ["you and I","everyone","all of us (in society)","we (people in general)"]
},
"和谐":
{"simp":"和谐",
"trad":"和諧",
"pinyin":"hé xié",
"def": ["harmonious","harmony","(euphemism) to censor"]
},
"肩":
{"simp":"肩",
"trad":"肩",
"pinyin":"jiān",
"def": ["shoulder","to shoulder (responsibilities etc)"]
},
"才华":
{"simp":"才华",
"trad":"才華",
"pinyin":"cái huá",
"def": ["talent","CL:份[fen4]"]
},
"邪招":
{"simp":"邪招",
"trad":"邪招",
"pinyin":"xié zhāo",
"def": ["clever move from out of left field"]
},
"偷":
{"simp":"偷",
"trad":"偷",
"pinyin":"tōu",
"def": ["to steal","to pilfer","to snatch","thief","stealthily"]
},
"钢丝绳":
{"simp":"钢丝绳",
"trad":"鋼絲繩",
"pinyin":"gāng sī shéng",
"def": ["hawser","steel rope"]
},
"重案":
{"simp":"重案",
"trad":"重案",
"pinyin":"zhòng àn",
"def": ["major case","serious crime"]
},
"到家":
{"simp":"到家",
"trad":"到家",
"pinyin":"dào jiā",
"def": ["perfect","excellent","brought to the utmost degree"]
},
"弯曲":
{"simp":"弯曲",
"trad":"彎曲",
"pinyin":"wān qū",
"def": ["to bend","to curve around","curved","crooked","to wind","to warp"]
},
"两岸":
{"simp":"两岸",
"trad":"兩岸",
"pinyin":"liǎng àn",
"def": ["bilateral","both shores","both sides","both coasts","Taiwan and mainland"]
},
"从来没有":
{"simp":"从来没有",
"trad":"從來沒有",
"pinyin":"cóng lái méi yǒu",
"def": ["have never","never before"]
},
"平衡":
{"simp":"平衡",
"trad":"平衡",
"pinyin":"píng héng",
"def": ["balance","equilibrium"]
},
"柱子":
{"simp":"柱子",
"trad":"柱子",
"pinyin":"zhù zi",
"def": ["pillar","CL:根[gen1]"]
},
"平行":
{"simp":"平行",
"trad":"平行",
"pinyin":"píng xíng",
"def": ["parallel","of equal rank","simultaneous"]
},
"要不是":
{"simp":"要不是",
"trad":"要不是",
"pinyin":"yào bu shì",
"def": ["if it were not for","but for"]
},
"胳膊":
{"simp":"胳膊",
"trad":"胳膊",
"pinyin":"gē bo",
"def": ["arm","CL:隻|只[zhi1],條|条[tiao2],雙|双[shuang1]"]
},
"雕塑":
{"simp":"雕塑",
"trad":"雕塑",
"pinyin":"diāo sù",
"def": ["a statue","a Buddhist image","sculpture","to carve"]
},
"反应":
{"simp":"反应",
"trad":"反應",
"pinyin":"fǎn yìng",
"def": ["to react","to respond","reaction","response","reply","chemical reaction","CL:個|个[ge4]"]
},
"散会":
{"simp":"散会",
"trad":"散會",
"pinyin":"sàn huì",
"def": ["to disperse a meeting","to adjourn","finished"]
},
"空气":
{"simp":"空气",
"trad":"空氣",
"pinyin":"kōng qì",
"def": ["air","atmosphere"]
},
"石化":
{"simp":"石化",
"trad":"石化",
"pinyin":"shí huà",
"def": ["to petrify","petrochemical industry"]
},
"嗡嗡声":
{"simp":"嗡嗡声",
"trad":"嗡嗡聲",
"pinyin":"wēng wēng shēng",
"def": ["hum","drone","buzz"]
},
"降低":
{"simp":"降低",
"trad":"降低",
"pinyin":"jiàng dī",
"def": ["to reduce","to lower","to bring down"]
},
"打破":
{"simp":"打破",
"trad":"打破",
"pinyin":"dǎ pò",
"def": ["to break","to smash"]
},
"沉寂":
{"simp":"沉寂",
"trad":"沉寂",
"pinyin":"chén jì",
"def": ["silence","stillness"]
},
"窄":
{"simp":"窄",
"trad":"窄",
"pinyin":"zhǎi",
"def": ["narrow","narrow-minded","badly off"]
},
"基本上":
{"simp":"基本上",
"trad":"基本上",
"pinyin":"jī běn shang",
"def": ["basically","on the whole"]
},
"止":
{"simp":"止",
"trad":"止",
"pinyin":"zhǐ",
"def": ["to stop","to prohibit","until","only"]
},
"粗略":
{"simp":"粗略",
"trad":"粗略",
"pinyin":"cū lu:è",
"def": ["rough (not precise or accurate)","cursory"]
},
"一无所有":
{"simp":"一无所有",
"trad":"一無所有",
"pinyin":"yī wú suǒ yǒu",
"def": ["not having anything at all (idiom); utterly lacking","without two sticks to rub together"]
},
"之类":
{"simp":"之类",
"trad":"之類",
"pinyin":"zhī lèi",
"def": ["and so on","and such"]
},
"爱情":
{"simp":"爱情",
"trad":"愛情",
"pinyin":"ài qíng",
"def": ["romance; love (romantic)","CL:份[fen4]"]
},
"切割":
{"simp":"切割",
"trad":"切割",
"pinyin":"qiē gē",
"def": ["to cut"]
},
"水柱":
{"simp":"水柱",
"trad":"水柱",
"pinyin":"shuǐ zhù",
"def": ["stream of water (as from a fountain or a faucet)","jet of water"]
},
"贫乏":
{"simp":"贫乏",
"trad":"貧乏",
"pinyin":"pín fá",
"def": ["impoverished","lacking","deficient","limited","meager","impoverishment","lack","deficiency"]
},
"几率":
{"simp":"几率",
"trad":"幾率",
"pinyin":"jī lù:",
"def": ["probability","odds"]
},
"集成电路":
{"simp":"集成电路",
"trad":"集成電路",
"pinyin":"jí chéng diàn lù",
"def": ["integrated circuit","IC"]
},
"无论":
{"simp":"无论",
"trad":"無論",
"pinyin":"wú lùn",
"def": ["no matter what or how","regardless of whether..."]
},
"细节":
{"simp":"细节",
"trad":"細節",
"pinyin":"xì jié",
"def": ["details","particulars"]
},
"了结":
{"simp":"了结",
"trad":"了結",
"pinyin":"liǎo jié",
"def": ["to settle","to finish","to conclude","to wind up"]
},
"揣":
{"simp":"揣",
"trad":"揣",
"pinyin":"chuǎi",
"def": ["to estimate","to guess","to figure","to surmise"]
},
"会不会":
{"simp":"会不会",
"trad":"會不會",
"pinyin":"huì bù huì",
"def": ["(posing a question: whether sb, something) can or cannot?","is able to or not"]
},
"割断":
{"simp":"割断",
"trad":"割斷",
"pinyin":"gē duàn",
"def": ["to cut off","to sever"]
},
"垫片":
{"simp":"垫片",
"trad":"墊片",
"pinyin":"diàn piàn",
"def": ["spacer","shim"]
},
"海军":
{"simp":"海军",
"trad":"海軍",
"pinyin":"hǎi jūn",
"def": ["navy"]
},
"吓":
{"simp":"吓",
"trad":"嚇",
"pinyin":"xià",
"def": ["to frighten","to scare"]
},
"终点站":
{"simp":"终点站",
"trad":"終點站",
"pinyin":"zhōng diǎn zhàn",
"def": ["terminus","final stop on rail or bus line"]
},
"航海":
{"simp":"航海",
"trad":"航海",
"pinyin":"háng hǎi",
"def": ["to sail the seas","maritime navigation","voyage"]
},
"吨位":
{"simp":"吨位",
"trad":"噸位",
"pinyin":"dūn wèi",
"def": ["tonnage"]
},
"用于":
{"simp":"用于",
"trad":"用於",
"pinyin":"yòng yú",
"def": ["use in","use on","use for"]
},
"严重问题":
{"simp":"严重问题",
"trad":"嚴重問題",
"pinyin":"yán zhòng wèn tí",
"def": ["serious problem"]
},
"放置":
{"simp":"放置",
"trad":"放置",
"pinyin":"fàng zhì",
"def": ["to put"]
},
"燃油":
{"simp":"燃油",
"trad":"燃油",
"pinyin":"rán yóu",
"def": ["fuel oil"]
},
"同志":
{"simp":"同志",
"trad":"同志",
"pinyin":"tóng zhì",
"def": ["comrade","(slang) homosexual","CL:個|个[ge4]"]
},
"设在":
{"simp":"设在",
"trad":"設在",
"pinyin":"shè zài",
"def": ["located at","set up in a particular location"]
},
"巴拿马":
{"simp":"巴拿马",
"trad":"巴拿馬",
"pinyin":"Bā ná mǎ",
"def": ["Panama"]
},
"动手":
{"simp":"动手",
"trad":"動手",
"pinyin":"dòng shǒu",
"def": ["to set about (a task)","to hit","to punch","to touch"]
},
"填满":
{"simp":"填满",
"trad":"填滿",
"pinyin":"tián mǎn",
"def": ["to cram"]
},
"致死":
{"simp":"致死",
"trad":"致死",
"pinyin":"zhì sǐ",
"def": ["deadly"]
},
"长度":
{"simp":"长度",
"trad":"長度",
"pinyin":"cháng dù",
"def": ["length"]
},
"炸死":
{"simp":"炸死",
"trad":"炸死",
"pinyin":"zhà sǐ",
"def": ["to kill with an explosion"]
},
"极有可能":
{"simp":"极有可能",
"trad":"極有可能",
"pinyin":"jí yǒu kě néng",
"def": ["extremely possible","probable"]
},
"机车":
{"simp":"机车",
"trad":"機車",
"pinyin":"jī chē",
"def": ["locomotive; train engine car","(Tw) scooter","(Tw) (slang) hard to get along with; to be a pain in the ass","(Tw) damn!; crap!"]
},
"米拉":
{"simp":"米拉",
"trad":"米拉",
"pinyin":"Mǐ lā",
"def": ["Mira (red giant star, Omicron Ceti)"]
},
"弗":
{"simp":"弗",
"trad":"弗",
"pinyin":"fú",
"def": ["not (literary)","used in transliteration"]
},
"广漠":
{"simp":"广漠",
"trad":"廣漠",
"pinyin":"guǎng mò",
"def": ["vast and empty"]
},
"莱":
{"simp":"莱",
"trad":"萊",
"pinyin":"lái",
"def": ["name of weed plant (fat hen, goosefoot, pigweed etc)","Chenopodium album"]
},
"水道":
{"simp":"水道",
"trad":"水道",
"pinyin":"shuǐ dào",
"def": ["aqueduct","sewer"]
},
"河道":
{"simp":"河道",
"trad":"河道",
"pinyin":"hé dào",
"def": ["river course","river channel"]
},
"个人":
{"simp":"个人",
"trad":"個人",
"pinyin":"gè rén",
"def": ["individual","personal","oneself"]
},
"睡觉":
{"simp":"睡觉",
"trad":"睡覺",
"pinyin":"shuì jiào",
"def": ["to go to bed","to sleep"]
},
"空当":
{"simp":"空当",
"trad":"空當",
"pinyin":"kòng dāng",
"def": ["gap","interval"]
},
"蹲":
{"simp":"蹲",
"trad":"蹲",
"pinyin":"dūn",
"def": ["to crouch","to squat","to stay (somewhere)"]
},
"伤及无辜":
{"simp":"伤及无辜",
"trad":"傷及無辜",
"pinyin":"shāng jí wú gū",
"def": ["to harm the innocent (idiom)"]
},
"间隔":
{"simp":"间隔",
"trad":"間隔",
"pinyin":"jiàn gé",
"def": ["gap","interval","compartment","to divide","to separate","to leave a gap of (two weeks, three meters etc)"]
},
"发明":
{"simp":"发明",
"trad":"發明",
"pinyin":"fā míng",
"def": ["to invent","an invention","CL:個|个[ge4]"]
},
"丝带":
{"simp":"丝带",
"trad":"絲帶",
"pinyin":"sī dài",
"def": ["ribbon"]
},
"血腥":
{"simp":"血腥",
"trad":"血腥",
"pinyin":"xuè xīng",
"def": ["reeking of blood","bloody (events)"]
},
"轻松":
{"simp":"轻松",
"trad":"輕鬆",
"pinyin":"qīng sōng",
"def": ["light","gentle","relaxed","effortless","uncomplicated","to relax","to take things less seriously"]
},
"吗":
{"simp":"吗",
"trad":"嗎",
"pinyin":"ma",
"def": ["(question particle for \"yes-no\" questions)"]
},
"在乎":
{"simp":"在乎",
"trad":"在乎",
"pinyin":"zài hu",
"def": ["to care about","equivalent of 在於|在于[zai4 yu2]"]
},
"齐家":
{"simp":"齐家",
"trad":"齊家",
"pinyin":"qí jiā",
"def": ["to govern one's family","to manage one's household"]
},
"要有":
{"simp":"要有",
"trad":"要有",
"pinyin":"yào yǒu",
"def": ["to need","to require","must have"]
},
"送给":
{"simp":"送给",
"trad":"送給",
"pinyin":"sòng gěi",
"def": ["to send","to give as a present"]
},
"轮":
{"simp":"轮",
"trad":"輪",
"pinyin":"lún",
"def": ["wheel","disk","ring","steamship","to take turns","to rotate","by turn","classifier for big round objects: disk, or recurring events: round, turn"]
},
"有一点儿":
{"simp":"有一点儿",
"trad":"有一點兒",
"pinyin":"yǒu yī diǎn r5",
"def": ["a bit","a little"]
},
"湖":
{"simp":"湖",
"trad":"湖",
"pinyin":"hú",
"def": ["lake","CL:個|个[ge4],片[pian4]"]
},
"无缘":
{"simp":"无缘",
"trad":"無緣",
"pinyin":"wú yuán",
"def": ["to have no opportunity","no way (of doing sth)","no chance","no connection","not placed (in a competition)","(in pop lyrics) no chance of love, no place to be together etc"]
},
"国内":
{"simp":"国内",
"trad":"國內",
"pinyin":"guó nèi",
"def": ["domestic","internal (to a country)","civil"]
},
"暂时":
{"simp":"暂时",
"trad":"暫時",
"pinyin":"zàn shí",
"def": ["temporary","provisional","for the time being"]
},
"热带雨林":
{"simp":"热带雨林",
"trad":"熱帶雨林",
"pinyin":"rè dài yǔ lín",
"def": ["tropical rain forest"]
},
"景色":
{"simp":"景色",
"trad":"景色",
"pinyin":"jǐng sè",
"def": ["scenery","scene","landscape","view"]
},
"潜艇":
{"simp":"潜艇",
"trad":"潛艇",
"pinyin":"qián tǐng",
"def": ["submarine"]
},
"太平":
{"simp":"太平",
"trad":"太平",
"pinyin":"tài píng",
"def": ["peace and security"]
},
"异":
{"simp":"异",
"trad":"異",
"pinyin":"yì",
"def": ["different","other","hetero-","unusual","strange","surprising","to distinguish","to separate","to discriminate"]
},
"草帽":
{"simp":"草帽",
"trad":"草帽",
"pinyin":"cǎo mào",
"def": ["straw hat"]
},
"角度":
{"simp":"角度",
"trad":"角度",
"pinyin":"jiǎo dù",
"def": ["angle","point of view"]
},
"零点五":
{"simp":"零点五",
"trad":"零點五",
"pinyin":"líng diǎn wǔ",
"def": ["zero point five, 0.5","one half"]
},
"条":
{"simp":"条",
"trad":"條",
"pinyin":"tiáo",
"def": ["strip","item","article","clause (of law or treaty)","classifier for long thin things (ribbon, river, road, trousers etc)"]
},
"近在咫尺":
{"simp":"近在咫尺",
"trad":"近在咫尺",
"pinyin":"jìn zài zhǐ chǐ",
"def": ["to be almost within reach","to be close at hand"]
},
"当年":
{"simp":"当年",
"trad":"當年",
"pinyin":"dàng nián",
"def": ["that very same year"]
},
"钢柱":
{"simp":"钢柱",
"trad":"鋼柱",
"pinyin":"gāng zhù",
"def": ["iron pillar","iron rod"]
},
"连接":
{"simp":"连接",
"trad":"連接",
"pinyin":"lián jiē",
"def": ["to link","to join","to attach","connection","a link (on web page)"]
},
"议定书":
{"simp":"议定书",
"trad":"議定書",
"pinyin":"yì dìng shū",
"def": ["protocol","treaty"]
},
"钢丝":
{"simp":"钢丝",
"trad":"鋼絲",
"pinyin":"gāng sī",
"def": ["steel wire","tightrope"]
},
"坠":
{"simp":"坠",
"trad":"墜",
"pinyin":"zhuì",
"def": ["to fall","to drop","to weigh down"]
},
"迟早":
{"simp":"迟早",
"trad":"遲早",
"pinyin":"chí zǎo",
"def": ["sooner or later"]
},
"余量":
{"simp":"余量",
"trad":"餘量",
"pinyin":"yú liàng",
"def": ["remnant","leftover","tolerance (i.e. allowed error)"]
},
"好在":
{"simp":"好在",
"trad":"好在",
"pinyin":"hǎo zài",
"def": ["luckily","fortunately"]
},
"平均":
{"simp":"平均",
"trad":"平均",
"pinyin":"píng jūn",
"def": ["average","on average","evenly","in equal proportions"]
},
"虽是":
{"simp":"虽是",
"trad":"雖是",
"pinyin":"suī shì",
"def": ["although","even though","even if"]
},
"集中":
{"simp":"集中",
"trad":"集中",
"pinyin":"jí zhōng",
"def": ["to concentrate","to centralize","to focus","centralized","concentrated","to put together"]
},
"船舶":
{"simp":"船舶",
"trad":"船舶",
"pinyin":"chuán bó",
"def": ["shipping","boats"]
},
"撞":
{"simp":"撞",
"trad":"撞",
"pinyin":"zhuàng",
"def": ["to knock against","to bump into","to run into","to meet by accident"]
},
"焚":
{"simp":"焚",
"trad":"焚",
"pinyin":"fén",
"def": ["to burn"]
},
"小溪":
{"simp":"小溪",
"trad":"小溪",
"pinyin":"xiǎo xī",
"def": ["brook","streamlet"]
},
"蒂":
{"simp":"蒂",
"trad":"蔕",
"pinyin":"dì",
"def": ["variant of 蒂[di4]"]
},
"平反":
{"simp":"平反",
"trad":"平反",
"pinyin":"píng fǎn",
"def": ["to redress (an injustice)","to rehabilitate (sb whose reputation was unjustly sullied)"]
},
"冈":
{"simp":"冈",
"trad":"岡",
"pinyin":"gāng",
"def": ["ridge","mound"]
},
"航行":
{"simp":"航行",
"trad":"航行",
"pinyin":"háng xíng",
"def": ["to sail","to fly","to navigate"]
},
"扳手":
{"simp":"扳手",
"trad":"扳手",
"pinyin":"bān shǒu",
"def": ["spanner","wrench","lever (on a machine)"]
},
"诺":
{"simp":"诺",
"trad":"諾",
"pinyin":"nuò",
"def": ["to consent","to promise","(literary) yes!"]
},
"响起":
{"simp":"响起",
"trad":"響起",
"pinyin":"xiǎng qǐ",
"def": ["(of a sound) to come forth","(of a sound source) to ring out","to sound","to go off"]
},
"统":
{"simp":"统",
"trad":"統",
"pinyin":"tǒng",
"def": ["to gather","to unite","to unify","whole"]
},
"无处":
{"simp":"无处",
"trad":"無處",
"pinyin":"wú chù",
"def": ["nowhere"]
},
"十":
{"simp":"十",
"trad":"十",
"pinyin":"shí",
"def": ["ten","10"]
},
"主意":
{"simp":"主意",
"trad":"主意",
"pinyin":"zhǔ yi",
"def": ["plan","idea","decision","CL:個|个[ge4]","Beijing pr. [zhu2 yi5]"]
},
"通体":
{"simp":"通体",
"trad":"通體",
"pinyin":"tōng tǐ",
"def": ["(of sb or sth) whole or entire body"]
},
"雪白":
{"simp":"雪白",
"trad":"雪白",
"pinyin":"xuě bái",
"def": ["snow white"]
},
"毯":
{"simp":"毯",
"trad":"毯",
"pinyin":"tǎn",
"def": ["blanket","rug"]
},
"步话机":
{"simp":"步话机",
"trad":"步話機",
"pinyin":"bù huà jī",
"def": ["walkie-talkie"]
},
"下期":
{"simp":"下期",
"trad":"下期",
"pinyin":"xià qī",
"def": ["next period (week, month or quarter etc)"]
},
"安全帽":
{"simp":"安全帽",
"trad":"安全帽",
"pinyin":"ān quán mào",
"def": ["safety helmet","CL:隻|只[zhi1],頂|顶[ding3]"]
},
"模样":
{"simp":"模样",
"trad":"模樣",
"pinyin":"mú yàng",
"def": ["look","style","appearance","approximation","about","CL:個|个[ge4]","also pr. [mo2 yang4]"]
},
"下一步":
{"simp":"下一步",
"trad":"下一步",
"pinyin":"xià yī bù",
"def": ["the next step"]
},
"利索":
{"simp":"利索",
"trad":"利索",
"pinyin":"lì suo",
"def": ["nimble"]
},
"损坏":
{"simp":"损坏",
"trad":"損壞",
"pinyin":"sǔn huài",
"def": ["to damage","to injure"]
},
"拉动":
{"simp":"拉动",
"trad":"拉動",
"pinyin":"lā dòng",
"def": ["to pull","(fig.) to stimulate (economic activity)","to motivate (people to do sth)"]
},
"钢":
{"simp":"钢",
"trad":"鋼",
"pinyin":"gāng",
"def": ["steel"]
},
"从容":
{"simp":"从容",
"trad":"從容",
"pinyin":"cóng róng",
"def": ["to go easy","unhurried","calm","Taiwan pr. [cong1 rong2]"]
},
"压缩":
{"simp":"压缩",
"trad":"壓縮",
"pinyin":"yā suō",
"def": ["to compress","compression"]
},
"从事":
{"simp":"从事",
"trad":"從事",
"pinyin":"cóng shì",
"def": ["to go for","to engage in","to undertake","to deal with","to handle","to do"]
},
"油":
{"simp":"油",
"trad":"油",
"pinyin":"yóu",
"def": ["oil","fat","grease","petroleum","to apply tung oil, paint or varnish","oily","greasy","glib","cunning"]
},
"乏味":
{"simp":"乏味",
"trad":"乏味",
"pinyin":"fá wèi",
"def": ["tedious"]
},
"第二次":
{"simp":"第二次",
"trad":"第二次",
"pinyin":"dì èr cì",
"def": ["the second time","second","number two"]
},
"大楼":
{"simp":"大楼",
"trad":"大樓",
"pinyin":"dà lóu",
"def": ["building (a relatively large, multistory one)","CL:幢[zhuang4],座[zuo4]"]
},
"年来":
{"simp":"年来",
"trad":"年來",
"pinyin":"nián lái",
"def": ["this past year","over the last years"]
},
"降下":
{"simp":"降下",
"trad":"降下",
"pinyin":"jiàng xià",
"def": ["to fall","to drop"]
}
}

// Set up an event handler. Notice that we don't use "on" in front
// of the event name when doing it this way.
spans.forEach(element => {
    element.addEventListener("mouseover", changeDef);
});

function changeDef(event){
  textToUpdate.innerText=event.target.innerText
    try
    {
        // https://stackoverflow.com/questions/1357614/javascript-dynamic-array-of-strings
        var html = '<ul>';
        for (var i=0; i<dic[event.target.innerText]["def"].length; i++) {
        html += '<li>' + dic[event.target.innerText]["def"][i] + '</li>';
        }
        html += "</ul>"
        translation.innerHTML=html
        pinyin.innerText=dic[event.target.innerText]["pinyin"]
    }
    catch(error)
    {
        translation.innerHTML=""
        pinyin.innerText=""
    }
}