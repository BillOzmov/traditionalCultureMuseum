/*
* Model Resources
* */
export const COLLISION_SCENE_URL = new URL("./assets/models/scene_collision.glb", import.meta.url).href;
export const STATIC_SCENE_URL = new URL("./assets/models/TV.glb", import.meta.url).href;

/*
* Texture Resources
* */
export const BOARD_TEXTURES = [
	new URL("./assets/boards/1.png", import.meta.url).href,
	new URL("./assets/boards/2.png", import.meta.url).href,
	new URL("./assets/boards/3.png", import.meta.url).href,
	new URL("./assets/boards/4.png", import.meta.url).href,
	new URL("./assets/boards/5.png", import.meta.url).href,
	new URL("./assets/boards/6.png", import.meta.url).href,
	new URL("./assets/boards/7.png", import.meta.url).href,
	new URL("./assets/boards/8.png", import.meta.url).href,
	new URL("./assets/boards/9.png", import.meta.url).href,
	new URL("./assets/boards/10.png", import.meta.url).href,
	new URL("./assets/boards/11.png", import.meta.url).href,
	new URL("./assets/boards/12.png", import.meta.url).href
];

/*
* Audio Resources
* */
export const AUDIO_URL = new URL("./assets/audio/dylanf - 天空之城（经典钢琴版）.mp3", import.meta.url).href;

/*
* Intro
* */
export const BOARDS_INFO: Record<string, {title: string, author: string, describe: string}> = {
	1: {
		title: "《蚕桑丝织》",
		author: "浙江杭州",
		describe: `
		蚕桑丝织是中华民族认同的文化标识，五千年来，它对中国历史作出了重大贡献，<br>
		并通过丝绸之路对人类文明产生了深远影响。蚕丝织造技艺是一种历史悠久的中国传统手工技艺。<br>
		由余杭清水丝绵制作技艺、杭罗织造技艺、双林绫绢织造技艺、潞绸织造技艺四部分组成。<br>
		杭罗历史悠远，至迟在宋代方志中已屡有记载。杭罗的织机几经变革，然而在它的生产流程中仍然保持<br>
		着大量的手工技艺，精致缜密，要求极高，由于工艺复杂，历来传人不多。2009年9月30日，<br>
		中国蚕桑丝织技艺入选人类非物质文化遗产代表作名录。
		`
	},
	2: {
		title: "《南音》",
		author: "福建泉州",
		describe: `
		南音也称“弦管”“泉州南音”，福建省闽南地区的传统音乐，联合国教科文组织人类非物质文化遗产代表作之一。<br>
		南音有“中国音乐史上的活化石”之称，发源于福建泉州，用闽南语演唱，是中国历史悠久的汉族音乐。<br>
		2006年5月20日，经国务院批准列入第一批国家级非物质文化遗产名录，编号为Ⅱ-74。2009年9月30日<br>
		在联合国教科文组织政府间组织大会上，南音正式列入人类非物质文化遗产代表作名录中。
		`
	},
	3: {
		title: "《昆曲》",
		author: "江苏昆山",
		describe: `
		昆曲糅合了唱念做打、舞蹈及武术等，以曲词典雅、行腔婉转、表演细腻著称，<br>
		是被誉为“百戏之祖”的南戏系统下之一的曲种。昆曲以鼓、板控制演唱节奏，以曲笛、三弦等为主要伴奏乐器，<br>
		其唱念语音为“中州韵”。昆曲在2001年被联合国教科文组织列为“人类口头和非物质遗产代表作”<br>
		（2008年被纳入《人类非物质文化遗产代表作名录》）。2006年列入第一批国家级非物质文化遗产名录。
		`
	},
	4: {
		title: "《太极拳》",
		author: "河南温县",
		describe: `
		太极拳，是以中国传统儒、道哲学中的太极、阴阳辩证理念为核心思想，集颐养性情、强身健体、<br>
		技击对抗等多种功能为一体，结合易学的阴阳五行之变化，中医经络学，古代的导引术和吐纳术形成的<br>
		一种内外兼修、柔和、缓慢、轻灵、刚柔相济的中国传统拳术。2020年12月，联合国教科文组织<br>
		保护非物质文化遗产政府间委员会第15届常会将“太极拳”项目列入联合国教科文组织人类非物质文化遗产代表作名录。
		`
	},
	5: {
		title: "《蒙古长调》",
		author: "中国内蒙古",
		describe: `
		蒙古族长调民歌，内蒙古自治区传统音乐，国家级非物质文化遗产。蒙古族长调民歌，被誉为“草原音乐活化石”。<br>
		主要流行于中国内蒙古自治区北部和蒙古国。长调是蒙古语“乌日汀哆”的意译。“乌日汀”为“长久”、“永恒”之意，<br>
		“哆”为“歌”之意。在相关著作和论文中，也将其直译为“长歌”、“长调歌”或“草原牧歌”等。蒙古族长调民歌<br>
		具有鲜明游牧文化和地域文化特征的独特演唱形式，旋律悠长舒缓、意境开阔。<br>
		代表曲目有《走马》、《小黄马》《辽阔的草原》《辽阔富饶的阿拉善》等。
		`
	},
	6: {
		title: "《围棋》",
		author: "中国古代",
		describe: `
		围棋，国际通行棋种，世界上最古老的棋类游戏之一，是具有高度文化色彩的智力竞技项目，流行于中国、日本、<br>
		韩国等东亚国家。它是中华民族发明的迄今最久远、最复杂的智力博弈活动之一。南北朝时经朝鲜半岛传入日本，<br>
		流传到欧美各国。围棋棋理博大精深，蕴含着中华文化的丰富内涵，被列为“琴棋书画”四大文化之一，<br>
		是中国文化与文明的体现。2008年，入选《国家级非物质文化遗产代表性项目名录》。
		`
	},
	7: {
		title: "《粤剧》",
		author: "广东佛山",
		describe: `
		粤剧（Cantonese Opera），又称广府戏、广东大戏，是广东及广西粤方言区最大的剧种。发源于佛山，以粤方言演唱，<br>
		汉族传统戏曲之一、人类非物质文化遗产代表作。粤剧形成于广东，后传入广西、香港、澳门、台湾，在东南亚和美洲各国<br>
		有华侨居住的地方均有粤剧演出。2006年5月20日，列入第一批国家级非物质文化遗产名录，编号Ⅳ—36。2009年10月2日，<br>
		由广东、香港和澳门联合申报，粤剧被列为联合国教科文组织人类非物质文化遗产代表作名录。
		`
	},
	8: {
		title: "《北管》",
		author: "福建泉州",
		describe: `
		北管是福建省地区的传统音乐。“北管”又名“北曲”、“小曲”、“小调”、“曲仔”，是广泛流传于泉州市泉港区的一种丝竹音乐，<br>
		相传为15世纪传入福建后，盛行于漳州地区，取代了本有的北管地区音乐。到了台湾。17世纪之后，由福建及广东等地<br>
		传入台湾的非闽南或客家系统音乐声腔及戏曲，都被归入北管的范围台湾、新加坡、马来西亚等地也都有北管社团。<br>
		2006年，北管经国务院批准列入第一批国家级非物质文化遗产名录。
		`
	},
	9: {
		title: "《软木画》",
		author: "福建福州",
		describe: `
		软木画，又称软木雕、木画，中国汉族民间雕刻工艺品，它形成于20世纪初，发源地是福建省福州市东郊的西园村。<br>
		软木画是一种“雕”、“画”结合的手工艺品。运用浮雕、圆雕、透雕等技法，精雕细镂成花草树木亭台和人物，<br>
		再用通草作成白鹤、糜鹿等鸟兽，根据画面设计，粘在衬纸上，配制成立体、半立体的木画，装在玻璃框里，就成了独具一格的艺术品。<br>
		软木画源于自然，画面中时见宋人笔意，场景生动逼真，意境高古深远，风格清隽秀雅，被誉为“无声的诗，立体的画”。<br>
		2008年入选第二批国家级非物质文化遗产名录。软木画相关人物有福州工艺传习所总教习师、木雕名师陈春润和木雕技师吴启棋。
		`
	},
	10: {
		title: "《漆线雕》",
		author: "福建泉州",
		describe: `
		漆线雕发源于福建泉州，是中国漆艺文化宝库中的艺术瑰宝之一，是闽南地区独有的传统工艺。自唐代彩塑兴盛以来，<br>
		漆线雕便被应用于佛像装饰，俗称“妆佛”，长期以来作为一种特殊行业广泛流传。漆线雕做工精细雅致，形象逼真生动，<br>
		风格古朴庄重，画面栩栩如生，堪称艺苑奇葩，中国一绝。可考的有1400多年的历史。在泉州流传多年。<br>
		漆线雕技艺在2006年选入国家级非物质文化遗产名录。
		`
	},
	11: {
		title: "《打铁花》",
		author: "河南驻马店",
		describe: `
		打铁花，是流传于豫晋地区民间传统的烟火，历史悠久可以追溯到春秋战国时期。它的采矿炼铁业几乎与中华民族的冶炼史同步兴起。<br>
		丰富的煤炭和铁矿资源，为冶炼业的发展提供了极为便利的条件。鼎盛于明清时期，至今已有千余年的历史。<br>
		确山打铁花具有深厚的文化内涵，是一种由民间工匠及老乐山道人共同祭祀道教始祖太上老君而举行的活动，<br>
		后来演变为综合性民间传统庆祝仪式。是河南省仅存的大型民间传统焰火，素有“民间焰火之最”、“中原文化奇葩”、<br>
		“中华第一铁花”的美誉，于2008年被国务院和文化部公布为“国家级非物质文化遗产”。
		`
	},
	12: {
		title: "《剪纸》",
		author: "中国民间",
		describe: `
		剪纸是一种用剪刀或刻刀在纸上剪刻花纹[1]，用于装点生活或配合其他民俗活动的民间艺术。其传承的视觉形象和造型格式，<br>
		蕴涵了丰富的文化历史信息，表达了广大民众的社会认知、道德观念等。剪纸艺术遗产<br>
		先后入选中国国家级非物质文化遗产名录和人类非物质文化遗产代表作名录。<br>
		`
	}
};

/*
* Computer Iframe SRC
* */
export const IFRAME_SRC = new URL("/universe/index.html", import.meta.url).href;

/*
* Events
* */
export const ON_LOAD_PROGRESS = "on-load-progress";
export const ON_LOAD_MODEL_FINISH = "on-load-model-finish";
export const ON_CLICK_RAY_CAST = "on-click-ray-cast";
export const ON_SHOW_TOOLTIP = "on-show-tooltip";
export const ON_HIDE_TOOLTIP = "on-hide-tooltip";
export const ON_KEY_DOWN = "on-key-down";
export const ON_KEY_UP = "on-key-up";
export const ON_ENTER_APP = "on-enter-app";
