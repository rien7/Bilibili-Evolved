!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["utils/v1-migrate"]=o():e["utils/v1-migrate"]=o()}(globalThis,(()=>(()=>{"use strict";var e,o,t={764:e=>{e.exports=coreApis.filePicker},414:e=>{e.exports=coreApis.utils.log}},n={};function a(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,a),i.exports}o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var i=Object.create(null);a.r(i);var r={};e=e||[null,o({}),o([]),o(o)];for(var s=2&n&&t;"object"==typeof s&&!~e.indexOf(s);s=o(s))Object.getOwnPropertyNames(s).forEach((e=>r[e]=()=>t[e]));return r.default=()=>t,a.d(i,r),i},a.d=(e,o)=>{for(var t in o)a.o(o,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},a.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{a.d(i,{component:()=>g});const e=coreApis.componentApis.define,o=coreApis.pluginApis.data,t=coreApis.componentApis.component,n=coreApis.componentApis.userComponent,r=coreApis.ajax,s=coreApis.cdnTypes,l=coreApis.meta,d=coreApis.settings,c=coreApis.toast;var p=a(414);const m=coreApis.pluginApis.hook,u=coreApis.pluginApis.plugin,g=(0,e.defineComponentMetadata)({name:"v1Migrate",displayName:"v1 设置迁移",description:{"zh-CN":"在设置的 `关于` 面板中添加 `导入 v1 设置` 按钮, 点击导入可以导入 v1 的设置, 并根据打开的选项自动下载安装 v2 中对应的功能."},tags:[componentsTags.utils],entry:()=>{(0,o.addData)("settingsPanel.about.actions",(e=>{e.push({icon:"mdi-inbox-arrow-down-outline",name:"importV1Settings",displayName:"导入 v1 设置",run:async()=>{const{logError:e}=await Promise.resolve().then(a.t.bind(a,414,23)),{pickFile:o}=await Promise.resolve().then(a.t.bind(a,764,23)),i=await o({accept:"*.json"});if(0===i.length)return;const[g]=i;try{const e=JSON.parse(await g.text());await(async e=>{const o=c.Toast.info("下载功能列表中","导入 v1 设置");try{console.log("下载功能列表中");const a=`${s.cdnRoots[(0,d.getGeneralSettings)().cdnRoot](l.meta.compilationInfo.branch)}doc/features/features.json`,i=await(0,r.monkey)({url:a});console.log(i);const c=JSON.parse(i);console.log("下载功能列表完成");const p=(o,a,i)=>async()=>{if(!e[o])return void console.log(`跳过了未开启的选项 ${o}`);const p={component:t.componentsMap,plugin:u.pluginsMap},g={component:n.installComponent,plugin:u.installPlugin};if(a in p[i])console.log(`${a} 已经存在, 跳过安装`);else{const e=c.find((e=>e.type===i&&e.name===a)),o=e?.fullAbsolutePath;if(!o||!e)return void console.log(`没有找到名为 ${a} 的功能`);const t=`${s.cdnRoots[(0,d.getGeneralSettings)().cdnRoot](l.meta.compilationInfo.branch,e.owner)}${o}`,n=await(0,r.monkey)({url:t}),{before:p,after:u}=(0,m.getHook)(`user${lodash.startCase(i)}s.add`,n,t);await p();const{metadata:v,message:f}=await g[i](n);await u(v),console.log(f)}},g=(o,t,n)=>()=>{const a=e[o],i=n?.(a)??a;if(void 0!==i){const[e,...o]=t.split("."),{options:n}=(0,d.getComponentSettings)(e);lodash.set(n,o,i)}console.log(`迁移了选项 ${o} -> ${t}`)},v=()=>()=>{const{customStyles:o}=e;o.filter((e=>e.enabled)).forEach((e=>{d.settings.userStyles[e.name]=lodash.omit(e,"enabled")}))},f=e=>p("guiSettings",e,"plugin"),y=()=>none,b={category:"home",activities:"feeds",bangumi:"subscriptions",watchlaterList:"watchlater",favoritesList:"favorites",historyList:"history",rankingLink:"ranking",drawingLink:"drawing",bangumiLink:"bangumi",musicLink:"music",matchLink:"match",shopLink:"shop"},h=[p("useDarkStyle","darkMode","component"),p("darkColorScheme","darkModeFollowSystem","component"),p("hideBanner","hideBanner","component"),p("expandDanmakuList","expandDanmakuList","component"),g("expandDanmakuListIgnoreMediaList","expandDanmakuList.ignoreMediaList"),p("expandDescription","fullVideoDescription","component"),p("watchlaterRedirect","watchlaterRedirect","component"),g("watchLaterRedirectNavbar","watchlaterRedirect.navbar"),g("watchLaterRedirectPage","watchlaterRedirect.page"),p("touchVideoPlayer","touchPlayerGestures","component"),p("touchVideoPlayer","touchPlayerControl","component"),p("customControlBackground","playerControlBackground","component"),g("customControlBackgroundOpacity","playerControlBackground.opacity",(e=>{const o=parseFloat(e);return Math.round(100*o)})),p("darkSchedule","darkModeSchedule","component"),g("darkScheduleStart","darkModeSchedule.range.start"),g("darkScheduleEnd","darkModeSchedule.range.end"),p("fullTweetsTitle","fullFeedsTitle","component"),p("fullPageTitle","fullEpisodeTitle","component"),p("removeVideoTopMask","hideVideoTopMask","component"),p("removeLiveWatermark","removeLiveWatermark","component"),p("harunaScale","dpiLiveShowgirl","component"),p("harunaScale","dpiLiveShowgirl","component"),p("removeAds","removePromotions","component"),g("showBlockedAdsTip","removePromotions.showPlaceholder"),g("preserveEventBanner","removePromotions.preserveEventBanner"),p("touchVideoPlayerDoubleTapControl","doubleClickControl","component"),g("customStyleColor","settingsPanel.themeColor"),p("useDefaultPlayerMode","defaultPlayerMode","component"),g("applyPlayerModeOnPlay","defaultPlayerMode.applyOnPlay"),g("defaultPlayerMode","defaultPlayerMode.mode"),p("skipChargeList","skipChargeList","component"),p("comboLike","touchComboLike","component"),p("autoLightOff","playerAutoLight","component"),p("airborne","danmakuAirborne","component"),p("useBiliplusRedirect","biliplusRedirect","component"),p("biliplusRedirect","biliplusRedirect","component"),p("framePlayback","seekByFrames","component"),p("useCommentStyle","simplifyComments","component"),p("imageResolution","imageResolution","component"),g("imageResolutionScale","imageResolution.scale"),p("playerFocus","playerFocus","component"),g("playerFocusOffset","playerFocus.offset"),p("simplifyLiveroom","simplifyLiveroom","component"),g("simplifyLiveroomSettings","simplifyLiveroom",(e=>{const{options:o}=(0,d.getComponentSettings)("simplifyLiveroom");Object.assign(o,Object.fromEntries(Object.entries(e).map((e=>{let[o,t]=e;return[`switch-${o}`,t]}))))})),p("customNavbar","customNavbar","component"),f("customNavbar.items.darkMode"),g("favoritesListCurrentSelect","customNavbar.lastFavoriteFolder"),g("touchNavBar","customNavbar.touch"),g("customNavbarFill","customNavbar.fill"),g("customNavbarTransparent","customNavbar.transparent"),g("customNavbarShadow","customNavbar.shadow"),g("customNavbarBlur","customNavbar.blur"),g("customNavbarOrder","customNavbar.order",(e=>(Object.keys(e).forEach((o=>{o in b&&(e[b[o]]=e[o],delete e[o])})),delete e.mangaLink,e))),g("customNavbarHidden","customNavbar.hidden",(e=>([...e].forEach((o=>{o in b&&(e.push(b[o]),lodash.pull(e,o))})),lodash.pull(e,"mangaLink"),e))),g("customNavbarBoundsPadding","customNavbar.padding",(e=>parseFloat(e))),g("customNavbarGlobalFixed","customNavbar.globalFixed"),g("customNavbarSeasonLogo","customNavbar.seasonLogo"),g("customNavbarShowDeadVideos","customNavbar.showDeadVideos"),p("playerShadow","playerShadow","component"),p("narrowDanmaku","preserveDanmakuInput","component"),p("outerWatchlater","outerWatchlater","component"),p("videoScreenshot","videoScreenshot","component"),p("hideBangumiReviews","hideBangumiReviews","component"),g("filenameFormat","settingsPanel.filenameFormat"),g("batchFilenameFormat","settingsPanel.batchFilenameFormat"),p("sidebarOffset","sidebarOffset","component"),g("sidebarOffset","sidebarOffset.offset"),p("noLiveAutoplay","liveHomeMute","component"),p("foldComment","rememberVideoSpeed","component"),g("defaultVideoSpeed","rememberVideoSpeed.speed"),g("rememberVideoSpeedList","rememberVideoSpeed.individualRememberList"),g("rememberVideoSpeed","rememberVideoSpeed.individualRemember"),g("extendVideoSpeed","rememberVideoSpeed.extend"),g("extendVideoSpeedList","rememberVideoSpeed.extendList"),p("foldComment","foldComments","component"),p("autoDraw","liveAutoDraw","component"),p("keymap","keymap","component"),g("keymapPreset","keymap.preset"),g("keymapJumpSeconds","keymap.longJumpSeconds"),g("customKeyBindings","keymap.customKeyBindings"),p("doubleClickFullscreen","doubleClickFullscreen","component"),g("doubleClickFullscreenPreventSingleClick","doubleClickFullscreen.preventSingleClick"),g("scriptLoadingMode","settingsPanel.scriptLoadingMode",(e=>e.replace(/\(自动\)$/,""))),g("guiSettingsDockSide","settingsPanel.dockSide"),p("fullActivityContent","fullFeedsContent","component"),p("feedsFilter","feedsFilter","component"),g("feedsFilterPatterns","feedsFilter.patterns"),g("feedsSpecialFilterTypes","feedsFilter.types"),g("feedsFilterSideCards","feedsFilter.sideCards"),p("selectableColumnText","columnUnlock","component"),p("miniPlayerTouchMove","touchMiniPlayer","component"),p("hideBangumiSponsors","hideBangumiSponsors","component"),p("hideRecommendLive","hideRecommendedLive","component"),p("hideRelatedVideos","hideRelatedVideos","component"),p("urlParamsClean","urlParamsClean","component"),p("collapseLiveSideBar","collapseLiveSideBar","component"),g("foregroundColorMode","settingsPanel.textColor"),g("updateCdn","settingsPanel.cdnRoot"),g("downloadPackageEmitMode","settingsPanel.downloadPackageEmitMode",(e=>"分别下载"===e?"单独下载":e)),p("bvidConvert","bvidConvert","component"),p("fixedSidebars","fixedFeedsSidebars","component"),p("autoHideSideBar","autoHideSidebar","component"),p("livePip","livePip","component"),p("extendFeedsLive","extendFeedsLive","component"),p("playerOnTop","playerOnTop","component"),p("quickFavorite","quickFavorite","component"),g("quickFavoriteID","quickFavorite.favoriteFolderID"),p("disableFeedsDetails","disableFeedsDetails","component"),p("elegantScrollbar","elegantScrollbar","component"),p("danmakuSendBar","liveDanmakuSendbar","component"),p("showCoverBeforePlay","showCoverBeforePlay","component"),p("seoJump","seoRedirect","component"),p("copyFeedsLink","copyFeedsLink","component"),p("copyCommentLink","copyCommentsLink","component"),p("unfoldFeeds","unfoldFeeds","component"),p("feedsImageExporter","imageExporter","component"),p("columnImageExporter","imageExporter","component"),p("preferAvUrl","avUrl","component"),p("homeHidden","simplifyHome","component"),g("homeHiddenItems","simplifyHome",(e=>{const{options:o}=(0,d.getComponentSettings)("simplifyHome");e.forEach((e=>o[`switch-${e}`]=!0))})),p("alwaysShowDuration","alwaysShowDuration","component"),p("removeVideoPopup","removePlayerPopup","component"),p("removeGuidePopup","removePlayerPopup","component"),p("removeVotePopup","removePlayerPopup","component"),g("removeVideoPopup","removePlayerPopup.relatedVideos"),g("removeGuidePopup","removePlayerPopup.comboLikes"),g("removeVotePopup","removePlayerPopup.votes"),p("checkInCenter","checkInCenter","component"),p("fullscreenGiftBox","liveGiftBox","component"),p("autoPlayControl","legacyAutoPlay","component"),p("scrollOutPlayer","playerIntersectionActions","component"),g("scrollOutPlayerTriggerPlace","playerIntersectionActions.triggerLocation"),g("scrollOutPlayerAutoPause","playerIntersectionActions.pause"),g("scrollOutPlayerAutoLightOn","playerIntersectionActions.light"),p("disableDanmakuHighlights","disableSpecialDanmaku","component"),p("disableUpDanmakuStyle","disableSpecialDanmaku","component"),g("disableDanmakuHighlights","disableSpecialDanmaku.highlight"),g("disableUpDanmakuStyle","disableSpecialDanmaku.up"),p("viewCover","viewCover","component"),p("downloadVideo","downloadVideo","component"),f("downloadVideo.outputs.aria2"),f("downloadVideo.outputs.idm"),g("downloadVideoQuality","downloadVideo.basicConfig.quality"),g("downloadVideoFormat","downloadVideo.basicConfig.api",(o=>({flv:"video.flv",dash:e.downloadVideoDashCodec.startsWith("HEVC")?"video.dash.hevc":"video.dash.avc"}[o]))),g("downloadVideoDefaultDanmaku","downloadVideo.danmakuType"),g("downloadVideoDefaultSubtitle","downloadVideo.subtitleType"),g("aria2RpcOptionProfiles","downloadVideo.rpcProfiles"),p("downloadDanmaku","downloadDanmaku","component"),p("downloadSubtitle","downloadSubtitle","component"),p("downloadAudio","downloadAudio","component"),p("downloadLiveRecords","downloadLiveRecords","component"),p("medalHelper","badgeHelper","component"),g("defaultMedalID","badgeHelper.defaultMedalID"),g("autoMatchMedal","badgeHelper.autoMatchMedal"),v(),y()];let k=0;o.message=`导入中... (${k}/${h.length})`;let S=0,P=0;for(const e of h)try{await e(),S++}catch(e){console.log(e),P++}finally{k++,o.message=`导入中... (${k}/${h.length})`}o.message=`导入完成. 成功 ${S} 个, 失败 ${P} 个, 可在控制台查看详细日志.`}catch(e){o.close(),(0,p.logError)(e)}})(e)}catch(o){e(o)}}})}))},commitHash:"99c2bb848fec11c60202d7da9e2f56302d194910",coreVersion:"2.7.2"})})(),i=i.component})()));