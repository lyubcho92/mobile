if (self.CavalryLogger) { CavalryLogger.start_js(["YLRIM"]); } __d("FourOhFourJSTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:FourOhFourJSLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:FourOhFourJSLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:FourOhFourJSLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setFbid=function(a){this.$1.fbid=a;return this};c.setOriginalURI=function(a){this.$1.original_uri=a;return this};c.setScriptPath=function(a){this.$1.script_path=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={fbid:!0,original_uri:!0,script_path:!0};e.exports=a}),null); __d("MFourOhFourJSLogger",["FourOhFourJSTypedLogger","ScriptPath"],(function(a,b,c,d,e,f){a={log:function(){window.onload=function(){var a=new(b("FourOhFourJSTypedLogger"))();a.setOriginalURI(window.location.href);a.setScriptPath(b("ScriptPath").getScriptPath());a.logVital()}}};e.exports=a}),null); __d("MVerifyCache",["MCache"],(function(a,b,c,d,e,f){a=function(a){var c=b("MCache").VIEWER_KEY,d=b("MCache").getItem(c);d!==a.viewer&&(d&&b("MCache").clear(),b("MCache").setItem(c,a.viewer,!0))};f.main=a}),null); __d("MFullPageLoadState",["NavigationMetrics","Stratcom"],(function(a,b,c,d,e,f){"use strict";var g="pre-tti",h=b("NavigationMetrics").addRetroactiveListener(b("NavigationMetrics").Events.EVENT_OCCURRED,a);b("Stratcom").listen("m:page:loading",null,function(){g==="pre-tti"?g="interrupted-pre-tti":g==="post-tti"?g="interrupted-post-tti":g==="post-dd"&&(g="interrupted-post-dd"),h&&h.remove(),h=null,b("Stratcom").removeCurrentListener()});function a(a,c){if(a!==b("NavigationMetrics").getFullPageLoadLid())return;c.event==="tti"&&g==="pre-tti"?g="post-tti":c.event==="all_pagelets_displayed"&&(g==="pre-tti"||g==="post-tti")?g="post-dd":c.event==="e2e"&&g!=="post-e2e"&&(g="post-e2e",h&&h.remove(),h=null)}function c(){return g}e.exports={get:c}}),null); __d("MJewelsLoggerImpl",["MFullPageLoadState","QuickPerformanceLogger","Stratcom","SubscriptionsHandler","performanceAbsoluteNow","performanceNavigationStart","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";var g,h=25952266,i=null,j=new(b("SubscriptionsHandler"))();function a(a,c){i!==null&&k(a),b("QuickPerformanceLogger").markerStart(h),l("jewelName",a),l("isFirstClick",c.isFirstClick),l("badgeCount",c.badgeCount),l("jewelBehavior",c.jewelBehavior),l("fullPageLoadState",b("MFullPageLoadState").get()),l("isPrefetching",c.isPrefetching),c.initialPrefetchPhase&&l("initialPrefetchPhase",c.initialPrefetchPhase),b("performanceNavigationStart")()>0&&l("timeSinceNavigationStart",(g||(g=b("performanceAbsoluteNow")))()-b("performanceNavigationStart")()),b("setTimeoutAcrossTransitions")(function(){j.addSubscriptions(b("Stratcom").listen("m:history:change",null,function(){i===a&&k(a)}))},1),i=a}function k(a){b("QuickPerformanceLogger").markerEnd(h,4),j.release(),j.engage(),i=null}function c(a){b("setTimeoutAcrossTransitions")(function(){b("QuickPerformanceLogger").markerEnd(h,2),j.release(),j.engage(),i=null},1)}function l(a,c){typeof c==="string"?b("QuickPerformanceLogger").annotateMarkerString(h,a,c):typeof c==="boolean"?b("QuickPerformanceLogger").annotateMarkerInt(h,a,c?1:0):typeof c==="number"&&b("QuickPerformanceLogger").annotateMarkerDouble(h,a,c)}e.exports={markJewelClick:a,markJewelDisplayed:c,markJewelCanceled:k}}),null); __d("MFirefoxAppDetect",[],(function(a,b,c,d,e,f){function a(a,b){if(!navigator.mozApps){b();return}if(window.locationbar&&!window.locationbar.visible){a();return}if(navigator.mozApps.getSelf){var c=navigator.mozApps.getSelf();c.onsuccess=function(){c.result?a():b()};c.onerror=b}else b()}f.isFirefoxApp=a}),null); __d("MPageHeaderLeft",["DOM","MFirefoxAppDetect","$"],(function(a,b,c,d,e,f){var g={};function h(a){if(!g.back_button){var c=b("$")("page");g.back_button=b("DOM").find(c,"a","back-button");g.menu_button=b("DOM").find(c,"a","menu-link")}a.show_back_button?(b("DOM").hide(g.menu_button),b("DOM").show(g.back_button)):(b("DOM").hide(g.back_button),b("DOM").show(g.menu_button))}a=function a(c){var d=window.navigator;d.standalone||g.isMozApp?h(c):g.isMozApp===void 0&&(g.lastConfig=c,b("MFirefoxAppDetect").isFirefoxApp(function(){g.isMozApp=!0,c===g.lastConfig&&(a(c),delete g.lastConfig)},function(){g.isMozApp=!1}))};f.main=a}),null); __d("MPageHeaderRight",["DOM","Stratcom"],(function(a,b,c,d,e,f){function g(){return b("DOM").scry(document.body,"*","mChromeHeaderRight")[0]}f.setup=function(a){if(a){var c=g();c&&(b("DOM").setContent(c,a.node||""),b("Stratcom").listen("m:page:unload",null,function(a){b("Stratcom").removeCurrentListener(),b("DOM").setContent(c,"")}))}};f.getChromeHeaderRightContent=function(){var a=g();return a?Array.prototype.slice.call(a.childNodes):null}}),null); __d("MCoreDeferred",["MPageControllerImpl","MPageFetcherImpl","MJewelsLoggerImpl"],(function(a,b,c,d,e,f){b("MPageControllerImpl"),b("MPageFetcherImpl"),b("MJewelsLoggerImpl")}),null); __d("MHeadMeta",[],(function(a,b,c,d,e,f){"use strict";a={isExistsByName:function(a){return!!this.getByName(a)},getByName:function(a){if(document.querySelector)return document.querySelector('head meta[name="'+a+'"]');var b=document.head||document.getElementsByTagName("head")[0];if(!b)return null;b=b.getElementsByTagName("meta");for(var c=0;c<b.length;c++){var d=b[c],e=d.getAttribute("name");if(e===a)return d}return null}};e.exports=a}),null); __d("MAsyncNavigationTrackerTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:MAsyncNavigationTrackerLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:MAsyncNavigationTrackerLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:MAsyncNavigationTrackerLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setEventName=function(a){this.$1.event_name=a;return this};c.setEventSpecificDetails=function(a){this.$1.event_specific_details=b("GeneratedLoggerUtils").serializeMap(a);return this};c.setNavigationID=function(a){this.$1.navigation_id=a;return this};c.setPath=function(a){this.$1.path=a;return this};c.setSessionID=function(a){this.$1.session_id=a;return this};c.setSourcePath=function(a){this.$1.source_path=a;return this};c.setSourceTopView=function(a){this.$1.source_top_view=a;return this};c.setTimeSinceNavStart=function(a){this.$1.time_since_nav_start=a;return this};c.setTimeSinceSessionStart=function(a){this.$1.time_since_session_start=a;return this};return a}();c={event_name:!0,event_specific_details:!0,navigation_id:!0,path:!0,session_id:!0,source_path:!0,source_top_view:!0,time_since_nav_start:!0,time_since_session_start:!0};e.exports=a}),null); __d("MPageNavigationTracking",["EventListener","JavelinHistory","MAsyncNavigationTrackerTypedLogger","MFullPageLoadState","Stratcom","URI","performanceAbsoluteNow","performanceNavigationStart","uuid"],(function(a,b,c,d,e,f){"use strict";var g,h,i=b("uuid")(),j=0,k=null;function a(){var a;(a=b("Stratcom")).listen("m:page:load-start",null,m);a.listen("m:page:render:complete",null,q);a.listen("m:history:change",null,n);a.listen("m:page:error",null,p);a.listen(["go","gouri"],null,t);b("EventListener").listen(window,"blur",r);b("EventListener").listen(window,"beforeunload",s)}function l(){k=null}function m(a){a=a.getData();var c=a.targetPath,d=a.previousPath,e=a.previousTopView,f=a.prefetchState;f=f===void 0?null:f;var h=a.cacheType;h=h===void 0?null:h;a=a.isFromHistory;a=a===void 0?!1:a;c=v(c);d=v(d);e=e;if(c==null)return;o(c,a);var i=++j;k={id:i,path:c,sourcePath:d,sourceTopView:e,startTimeAbsolute:(g||(g=b("performanceAbsoluteNow")))(),prefetchState:f,cacheType:h,navigationType:a?"history":null};u("page_load_start",!1,{fullPageLoadState:b("MFullPageLoadState").get()})}function n(a){var c=v(a.getData().path);if(k&&k.path!==c){a=a.getData().trigger===b("JavelinHistory").TRIGGERS.POPSTATE;o(c,a)}}function o(a,b){if(!k)return;u("page_load_abandoned",!1,{abandonedToPath:a,isFromBackPress:b.toString()});l()}function p(a){if(!k)return;a=a.getData();u("page_load_failed",!1,{errorCode:(a==null?"":a).toString()});l()}function q(a){a=a.getData();a=a.path;a=v(a);if(a==null||k==null||k.path!=a)return;u("page_render_complete");l()}function r(){if(!k)return;u("browser_moved_to_background",!0);l()}function s(){u("session_unload",!0)}function t(a){a=a.getData();a=a.uri;u("session_navigate_away",!0,{uri:a});l()}function u(a,c,d){c===void 0&&(c=!1);if(k==null)return;d=d||{};d.cacheType=k.cacheType;d.navigationType=k.navigationType;d.prefetchState=k.prefetchState;var e=(g||(g=b("performanceAbsoluteNow")))();a=new(b("MAsyncNavigationTrackerTypedLogger"))().setSessionID(i).setNavigationID(k.id.toString()).setPath(k.path).setSourcePath(k.sourcePath).setSourceTopView(k.sourceTopView).setEventName(a).setTimeSinceNavStart(e-k.startTimeAbsolute).setEventSpecificDetails(d).setTimeSinceSessionStart(e-b("performanceNavigationStart")());c?a.logImmediately():a.log()}function v(a){return!a?null:new(h||(h=b("URI")))(a).getQualifiedURI().toString()}e.exports={init:a}}),null); __d("MBrowserTheme",["MHeadMeta"],(function(a,b,c,d,e,f){"use strict";var g=null,h=!1,i=null;function j(){if(g)return g;g=b("MHeadMeta").getByName("theme-color");return g}a={set:function(a){var b=j();b&&(i===null&&!h&&(i=b.getAttribute("content")),i!==null&&(b.setAttribute("content",a),h=!0))},restore:function(){if(!h)return;var a=j();if(!a)return;i!==null&&(a.setAttribute("content",i),h=!1)}};e.exports=a}),null); __d("RemoteDevice",["Banzai","Cookie","GeneratedLoggerUtils","MViewport","Run","isInIframe"],(function(a,b,c,d,e,f){var g=!1,h={init:function(c){if(!b("isInIframe")()&&!window.APP_ENABLED&&!window.FW_ENABLED){if(/\((?:iPad|iPhone|iPod(?: touch));/.test(navigator.userAgent)){var d=Math.min(screen.width,screen.height),e=Math.max(screen.width,screen.height);d&&e&&(b("Cookie").set("wd",d+"x"+e),b("Cookie").set("m_pixel_ratio",window.devicePixelRatio));c&&c.performHardwareDetection&&c.hashId!==null&&b("Run").onAfterLoad(function(){h.logHardwareInfo(c.hashId||"")});return}d=b("MViewport").getWidth();e=b("MViewport").getScreenHeight();if(!d||!e)return;a.DEFER_COOKIES||b("Cookie").set("wd",d+"x"+e)}},logHardwareInfo:function(a){if(g)return;g=!0;var c=document.createElement("canvas");if(!c)return;c=c.getContext("webgl")||c.getContext("experimental-webgl");if(!c)return;var d=c.getExtension("WEBGL_debug_renderer_info");if(!d)return;var e="unknown",f="unknown";d!=null&&(e=c.getParameter(d.UNMASKED_RENDERER_WEBGL),f=c.getParameter(d.UNMASKED_VENDOR_WEBGL));c=0;window.navigator&&(c=window.navigator.hardwareConcurrency);d=window.screen.width;var h=window.screen.height,i=Math.min(d,h);d=Math.max(d,h);h={gpu_renderer:e,gpu_vendor:f,logical_cpu_count:c,screen_width_pixel:i,screen_height_pixel:d,device_pixel_ratio:window.devicePixelRatio,hashid:a};b("GeneratedLoggerUtils").log("logger:MHardwareDetectorLoggerConfig",h,b("Banzai").VITAL)}};e.exports=h}),null); __d("MViewportTracking",["invariant","DataAttributeUtils","DOM","FBJSON","MHome","MPopoverVisiblityTracker","MViewport","NavigationMetrics","Stratcom","Style","Vector","Visibility","VisibilityTrackingHelper","gkx","onAfterTTI","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g){"use strict";var h=97,i=200,j=new Map();a=function(){function a(){this.$2=[],this.debugConsole=!1,this.activeStories={},this.cachedViewportHeight=0,this.discardVPVDIntervalThreshold=9e4,this.vpvdMinDuration=250,this.isLoose=!1,this.isTimeTrackingEnabled=!1,this.latestTimeTrackingTimestamp=0,this.maxScrollPosition=0,this.minSizeToBeVisible=0,this.readStoryIDs={},this.relaxedMinSize=!1,this.trackingHooks=!1,this.vpvdDebug=!1,this.vpvDebug=!1,this.enableAdsAllocationIntegrityLogging=!1}var c=a.prototype;c.getDataFromConfig=function(a){g(0,2199)};c.getStoryID=function(a){g(0,2200)};c.getDataToLog=function(a){g(0,2201)};c.sendDataToLog=function(a){g(0,2202)};c.getTimeout=function(){g(0,2203)};c.getAllStories=function(){g(0,2204)};c.init=function(c){var d=this;this.isLoose=!!c.is_loose;this.relaxedMinSize=!!c.relaxed_min_size;this.vpvDebug=!!c.vpv_debug;this.isTimeTrackingEnabled=b("gkx")("985697");this.vpvdMinDuration=c.vpvd_min_duration||250;var e=a.shouldRunTrackingAfterTTI();b("MPopoverVisiblityTracker").init();e||(this.cachedViewportHeight=b("MViewport").getHeight());this.getDataFromConfig(c);this.maxScrollPosition=0;this.readStoryIDs=this.getCachedReadStoryIDs()||{};this.$2=[b("Stratcom").listen("m:page:unload",null,this.onUnload.bind(this)),b("Stratcom").listen("m:viewport:update-complete",null,function(){d.cachedViewportHeight=b("MViewport").getHeight()})];c.triggerOverride?this.$2=this.$2.concat(c.triggerOverride.map(function(a){var c=a[0];a=a[1];return b("Stratcom").listen(c,a,d.queueLogAction.bind(d))})):this.$2.push(b("Stratcom").listen("scroll",null,this.queueLogAction.bind(this)));if(this.isTimeTrackingEnabled){this.$2.push((c=b("Visibility")).addListener(c.VISIBLE,function(){return d.startVpvTracking()}));this.$2.push(c.addListener(c.HIDDEN,function(){return d.stopVpvTracking()}))}this.$2.push(b("Stratcom").listen("m:newsfeed:popup-visible",null,function(){d.stopVpvTracking()}),b("Stratcom").listen("m:newsfeed:popup-hidden",null,function(){d.startVpvTracking()}));e?b("onAfterTTI")(function(){d.startVpvTracking()},!1):(this.startVpvTracking(),b("NavigationMetrics").addRetroactiveListener(b("NavigationMetrics").Events.EVENT_OCCURRED,function(a,c){a=c.event;a==="tti"&&(d.startVpvTracking(),b("NavigationMetrics").removeCurrentListener())}))};c.getFBFeedLocation=function(){return-1};c.unitTestOnlyGetListeners=function(){return[].concat(this.$2)};c.getCachedReadStoryIDs=function(){return null};c.getMinSizeToBeVisible=function(a){if(!this.relaxedMinSize)return i;a="getBoundingClientRect"in a?a.getBoundingClientRect().height:b("Vector").getDim(a).y;return Math.min(i,a*.5)};c.startVpvTracking=function(){this.isTimeTrackingEnabled?this.startRecordingTimeTrackingData():this.fireEvent()};c.stopVpvTracking=function(){this.isTimeTrackingEnabled?this.stopRecordingTimeTrackingData():this.fireEvent()};c.fireEvent=function(){if(b("VisibilityTrackingHelper").isSnippetFlyoutVisible())return;var a=this.getAllStoriesInView();for(var c=0;c<a.length;c++){var d=a[c],e=this.getStoryID(d);if(!e||e in this.readStoryIDs)continue;this.readStoryIDs[e]=!0;this.sendDataToLog(this.getDataToLog(d));if(this.vpvDebug){e=b("DOM").scry(d,"div")[0];e&&b("Style").set(e,"background-color","#fffbe2")}this.markStoryRead(d);this.fireStoryVisibleHandlers(d)}};c.fireStoryVisibleHandlers=function(a){(j.get(a)||[]).forEach(function(a){return a()}),j["delete"](a)};c.markStoryRead=function(a){};c.queueLogAction=function(){var a=this;this.isLoose?this.$3||(this.$3=b("setTimeoutAcrossTransitions")(function(){a.maxScrollPosition=Math.max(a.maxScrollPosition,b("MViewport").getScrollTop()),a.startVpvTracking(),a.$3=null},100)):(window.clearTimeout(this.$1),this.$1=b("setTimeoutAcrossTransitions")(function(){a.startVpvTracking()},this.getTimeout()))};c.getTimetrackingDataToLog=function(c){var d=b("DOM").scry(c.story,"*","data-is-cta").map(function(a){a=b("DataAttributeUtils").getDataFt(a);a=a&&JSON.parse(a);return a&&a.cta_types}).filter(function(a){return!!a});this.cachedViewportHeight===0&&a.shouldRunTrackingAfterTTI()&&(this.cachedViewportHeight=b("MViewport").getHeight());return{evt:h,fbfeed_location:this.getFBFeedLocation(),story_height:c.story_height,viewport_height:this.cachedViewportHeight,vpvd_start_timestamp:c.evp_ts/1e3,vpvd_time_delta:Math.round(c.vpvd||0),cta_types:d}};c.recordTimeStoryWasInView=function(a){if(this.isTimeTrackingEnabled&&a.vpvd>=this.vpvdMinDuration){var c=this.getTimetrackingDataToLog(a);if(typeof c!=="string"){a=b("DataAttributeUtils").getDataFt(a.story);a&&(c=babelHelpers["extends"]({},c,b("FBJSON").parse(a,e.id)))}this.sendTimetrackingDataToLog(c)}};c.startRecordingTimeTrackingData=function(){this.$4(!1)};c.stopRecordingTimeTrackingData=function(){this.$4(!0)};c.$4=function(a){this.activeStories||(this.activeStories={});var b=Date.now();this.latestTimeTrackingTimestamp||(this.latestTimeTrackingTimestamp=b);var c=this.getAllStoriesInViewVpvd();this.updateVPVDurations(b);if(this.debugConsole){var d=Object.values(this.activeStories);d.length&&(console.table&&console.table(d))}d=this.updateActiveStories(c,b);this.debugConsole&&(d.length&&(console.table&&console.table(d)));this.recordVPVDurations(c,a);this.latestTimeTrackingTimestamp=a?0:b};c.updateVPVDurations=function(a){var b=a-this.latestTimeTrackingTimestamp;if(b>this.discardVPVDIntervalThreshold)return;b=a-this.latestTimeTrackingTimestamp;for(var c in this.activeStories)Object.prototype.hasOwnProperty.call(this.activeStories,c)&&(this.activeStories[c].vpvd+=b)};c.isVisible=function(a,b){for(var c=0;c<b.length;c++)if(this.getStoryID(b[c])===a)return!0;return!1};c.recordVPVDurations=function(a,b){this.recordVPVDurationsInternal(a,b)};c.recordVPVDurationsInternal=function(a,b){for(var c in this.activeStories)Object.prototype.hasOwnProperty.call(this.activeStories,c)&&((b||!this.isVisible(c,a))&&(this.recordTimeStoryWasInView(this.activeStories[c]),delete this.activeStories[c]))};c.updateActiveStories=function(a,b){var c=[];for(var d=0;d<a.length;d++){var e=this.getStoryID(a[d]);if(!e)break;e in this.activeStories||(this.activeStories[e]={evp_ts:b,story:a[d],vpvd:0,story_height:a[d].offsetHeight},c.push(this.activeStories[e]));this.activeStories[e].ts=b}return c};c.getAllStoriesInView=function(a){a===void 0&&(a=!1);return this.getAllStoriesInViewInternal(a,this.isLoose)};c.getAllStoriesInViewVpvd=function(){return this.getAllStoriesInViewInternal(!1,!1)};c.getAllStoriesInViewInternal=function(a,c){a===void 0&&(a=!1);c===void 0&&(c=!0);var d=[],e=this.getAllStories(),f=b("MViewport").getScrollTop(),g=b("MViewport").getHeight(),h=g+this.maxScrollPosition-f;for(var i=0;i<e.length;i++){var j=e[i],k=this.getStoryBounds(f,j),l=k.top;k=k.bottom;if(!l&&!k)continue;var m=this.getMinSizeToBeVisible(j);if(!c&&l>g-m)break;m=!c&&l<=g-m&&k>=m||c&&l<h;a&&(k<0||l>g)&&(m=!1);m&&d.push(j)}return d};c.getStoryBounds=function(a,c){if("getBoundingClientRect"in c){var d=c.getBoundingClientRect();return{bottom:d.bottom,top:d.top}}else{d=b("Vector").getPos(c).y-a;return{top:d,bottom:d+b("Vector").getDim(c).y}}};c.cleanup=function(){this.$2.forEach(function(a){return a.remove()}),this.$2=[],j.clear()};c.onUnload=function(){this.stopVpvTracking(),this.cleanup()};c.sendTimetrackingDataToLog=function(a){this.sendDataToLog(a)};a.shouldRunTrackingAfterTTI=function(){return b("MHome").isHome(location.href)&&b("gkx")("676812")};a.addStoryVisibleHandler=function(a,b){j.set(a,[].concat(j.get(a)||[],[b]));return{remove:function(){j.set(a,(j.get(a)||[]).filter(function(a){return a!==b}))}}};return a}();e.exports=a}),null); __d("MCommentViewportTracking",["Banzai","DataStore","DOM","FBJSON","MParent","MViewportTracking","Stratcom","StratcomManager","compactArray","gkx","onAfterTTI"],(function(a,b,c,d,e,f){"use strict";var g=null,h={m_group_stories_container:"group",m_newsfeed_stream:"",m_story_permalink_view:"",structured_composer_async_container:"user",root:""};a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.loadedReplies=function(){b("Stratcom").invoke("m:commentViewportTracking:loadedReplies")};c.loadedComments=function(){g&&g.isTimeTrackingEnabled&&g.startRecordingTimeTrackingData()};c.singleton=function(a){if(!g){a={triggerOverride:[["scroll",null],["m:commentViewportTracking:loadedReplies",null],["m:feed-ufi-flyout:comments-displayed",null],["m:ufi:live-comments:render",null],["m:ufi:live-comments:new-comment",null],["m:feed-ufi-flyout:reset",null],["m:page:render:complete",null]]};b("StratcomManager").enableDispatch(document,"scroll");g=new c();g.init(a);g.debugConsole;g.isTimeTrackingEnabled&&(b("MViewportTracking").shouldRunTrackingAfterTTI()?b("onAfterTTI")(function(){g instanceof c&&g.startRecordingTimeTrackingData()},!1):g.startRecordingTimeTrackingData());b("Stratcom").listen("m:page:unload",null,function(){g=null,b("Stratcom").removeCurrentListener()})}};c.registerFlyout=function(a,b){var c;g&&(g.debugConsole,g.streamRoot=a);h=babelHelpers["extends"]((c={},c[a.id]=b||"",c),h)};var d=c.prototype;d.getDataFromConfig=function(){this.debugConsole=b("gkx")("676811"),this.isTimeTrackingEnabled=!0,this.idle_timeout=5e3,this.min_duration_to_log=100,this.min_visible_size=200,this.relaxedMinSize=!0};d.__getRootNode=function(){this.streamRoot||(this.streamRoot=b("compactArray")(Object.keys(h).map(function(a){return document.getElementById(a)}))[0]||null);return this.streamRoot};d.__getStaticTemplateRootNode=function(){this.staticElementRoot||(this.staticElementRoot=document.getElementById("static_templates"));return this.staticElementRoot};d.getAllStories=function(){var a=this.__getRootNode();if(!a)return[];a=b("DOM").scry(this.__getRootNode(),"div","comment-body");return this.__getStaticTemplateRootNode()?a.concat(b("DOM").scry(this.__getStaticTemplateRootNode(),"div","comment-body")):a};d.getTimeout=function(){return this.min_duration_to_log};d.getDataToLog=function(a){return{}};d.getStoryID=function(a){var c=a.getAttribute("data-commentid");return!c?String(b("DataStore").get(a,"token"))||null:c};d.getContainerModule=function(){var a=this.__getRootNode();return!a||!(a.id in h)?"other":h[a.id]};d.getTimetrackingDataToLog=function(a){var c=a.story,d;try{var f=b("MParent").bySigil(a.story,"story-div")||b("MParent").bySigil(a.story,"m-feed-single-story");f&&(d=b("FBJSON").parse(f.getAttribute("data-ft"),e.id))}catch(a){}return{comment_id:this.getStoryID(c),duration_ms:Math.round(a.vpvd),container_module:this.getContainerModule(),mf_story_key:d?d.mf_story_key||d.top_level_post_id:null}};d.sendDataToLog=function(a){if(a.comment_id){this.debugConsole;var c=b("Banzai").isEnabled("comment_vpv_vital")?b("Banzai").VITAL:void 0;b("Banzai").post("comment_vpvd",a,c)}};return c}(b("MViewportTracking"));e.exports=a}),null); __d("EventProfilerAdsSessionProvider",[],(function(a,b,c,d,e,f){"use strict";e.exports={sessionID:null}}),null); __d("MPageTitle",[],(function(a,b,c,d,e,f){f.setTitle=function(a){document.title=a}}),null); __d("LoggedOutLoginSignupBarTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:LoggedOutLoginSignupBarLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:LoggedOutLoginSignupBarLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:LoggedOutLoginSignupBarLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setEvent=function(a){this.$1.event=a;return this};c.setIsPrimaryCtaReg=function(a){this.$1.is_primary_cta_reg=a;return this};c.setSurface=function(a){this.$1.surface=a;return this};return a}();c={event:!0,is_primary_cta_reg:!0,surface:!0};e.exports=a}),null); __d("MPopupSmallCta",["Event","LoggedOutLoginSignupBarTypedLogger","MAnimator","MViewport","Run","Style","clearTimeout","ge","qex","setInterval"],(function(a,b,c,d,e,f){"use strict";var g=150,h=1e3,i=214;a={show:function(a,c,d,e){this._expandingCta=a,this._ctaUnit=c,this._closeIcon=d,this._ctaVisible=!1,this._ctaShownOnce=!1,this._ctaClosed=!1,this._referrerSurface=e,b("Run").onAfterLoad(this._init.bind(this))},_init:function(){var a=this,c,d=(c=b("ge"))("header"),e=c("header-notices"),f=c("mobile_login_bar");c=c("account_switcher_footer");this._scrollThreshold=0;this._height=i;if(d){b("Style").set(d,"z-index","0");d=d.clientHeight;d&&(this._scrollThreshold+=d)}if(e){b("Style").set(e,"z-index","0");d=e.clientHeight;d&&(this._scrollThreshold+=d)}if(f){e=f.clientHeight;e&&(this._scrollThreshold+=e,this._height=e)}if(c){d=c.clientHeight;d&&(this._scrollThreshold+=d,this._height=d)}b("qex")._("864896")&&b("Style").set(document.body,"margin-bottom",this._height+"px");b("setInterval")(this._updateCTA.bind(this),h);b("Event").listen(this._closeIcon,"click",function(){a._ctaClosed=!0,a._hideCTA()})},_hideCTA:function(){var a=this,c=this._expandingCta.clientHeight;b("MAnimator").play(c,0,g,function(c){return b("Style").set(a._expandingCta,"height",Math.round(c)+"px")});this._ctaVisible=!1;b("clearTimeout")(this._timerId)},_showCTA:function(){var a=this;if(this._ctaVisible)return;new(b("LoggedOutLoginSignupBarTypedLogger"))().setEvent("login_signup_bar_load").setSurface(this._referrerSurface).log();b("Style").set(this._ctaUnit,"margin-top","0px");b("Style").set(this._expandingCta,"background","none");b("MAnimator").play(0,this._height,g,function(c){return b("Style").set(a._expandingCta,"height",Math.round(c)+"px")});this._ctaVisible=!0;this._ctaShownOnce=!0;b("clearTimeout")(this._timerId)},_updateCTA:function(){var a=b("MViewport").getHeight();if(a<this._height)if(this._ctaVisible)this._hideCTA();else return;a=this._scrollThreshold;!this._ctaVisible&&!this._ctaClosed&&b("MViewport").getScrollTop()>a&&this._showCTA();this._ctaVisible&&b("MViewport").getScrollTop()<a&&this._hideCTA()}};e.exports=a}),null); __d("MAsyncPageLoadWithGraphSearch",["Stratcom"],(function(a,b,c,d,e,f){"use strict";var g="graph-search-entry-point";a={pageLoad:function(a){b("Stratcom").invoke("setSearchText",g,{title:a.searchTitle||""}),b("Stratcom").invoke("setCurrentProfileID",g,{profileID:a.currentProfileID})}};e.exports=a}),null); __d("AccessibilityWebAssistiveTechTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";a=function(){function a(){this.$1={}}var c=a.prototype;c.log=function(a){b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,b("Banzai").BASIC,a)};c.logVital=function(a){b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,b("Banzai").VITAL,a)};c.logImmediately=function(a){b("GeneratedLoggerUtils").log("logger:AccessibilityWebAssistiveTechLoggerConfig",this.$1,{signal:!0},a)};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setIndicatedBrowsers=function(a){this.$1.indicated_browsers=b("GeneratedLoggerUtils").serializeVector(a);return this};c.setIsVirtualCursorAction=function(a){this.$1.is_virtual_cursor_action=a;return this};c.updateExtraData=function(a){a=b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));b("GeneratedLoggerUtils").checkExtraDataFieldNames(a,g);this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.addToExtraData=function(a,b){var c={};c[a]=b;return this.updateExtraData(c)};return a}();var g={indicated_browsers:!0,is_virtual_cursor_action:!0};e.exports=a}),null); __d("VirtualCursorStatus",["Event","UserAgent","emptyFunction","setImmediate"],(function(a,b,c,d,e,f){var g=null,h=null;function i(){h||(h=b("Event").listen(window,"blur",function(){g=null,j()}))}function j(){h&&(h.remove(),h=null)}function a(a){g=a.keyCode,i()}function c(){g=null,j()}if(typeof window!=="undefined"&&window.document&&window.document.createElement){d=document.documentElement;if(d)if(d.addEventListener)d.addEventListener("keydown",a,!0),d.addEventListener("keyup",c,!0);else if(d.attachEvent){f=d.attachEvent;f("onkeydown",a);f("onkeyup",c)}}var k={isKeyDown:function(){return!!g},getKeyDownCode:function(){return g}},l=!1,m=!1,n=null,o=!1;function p(a){var c=new Set(),d=k.isKeyDown(),e=a.clientX,f=a.clientY,g=a.isPrimary,h=a.isTrusted,i=a.offsetX,j=a.offsetY,n=a.pointerType,o=a.mozInputSource,p=a.WEBKIT_FORCE_AT_MOUSE_DOWN,q=a.webkitForce;a=a.target;var r=a.clientWidth;a=a.clientHeight;e===0&&f===0&&i>=0&&j>=0&&m&&h&&o==null&&c.add("Chrome");l&&m&&!d&&q!=null&&q<p&&i===0&&j===0&&o==null&&c.add("Safari-edge");e===0&&f===0&&i<0&&j<0&&m&&o==null&&c.add("Safari-old");!l&&!m&&d&&g===!1&&h&&n===""&&e===0&&f===0&&i===0&&j===0&&o==null;!l&&!m&&!d&&h&&b("UserAgent").isBrowser("IE >= 10")&&o==null&&(e<0&&f<0?c.add("IE"):(i<0||i>r)&&(j<0||j>a)&&c.add("MSIE"));o===0&&h&&c.add("Firefox");return c}function q(){l=!0,b("setImmediate")(function(){l=!1})}function r(){m=!0,b("setImmediate")(function(){m=!1})}function s(a,c){n===null&&(n=p(a));o=n.size>0;a=a.target.getAttribute("data-accessibilityid")==="virtual_cursor_trigger";c(o,n,a);b("setImmediate")(function(){o=!1,n=null})}d={isVirtualCursorTriggered:function(){return o},add:function(a,c){c===void 0&&(c=b("emptyFunction"));var d=function(a){return s(a,c)};a.addEventListener("click",d);var e=b("Event").listen(a,"mousedown",q),f=b("Event").listen(a,"mouseup",r);return{remove:function(){a.removeEventListener("click",d),e.remove(),f.remove()}}}};e.exports=d}),null); __d("AccessibilityWebVirtualCursorClickLogger",["AccessibilityWebAssistiveTechTypedLogger","VirtualCursorStatus"],(function(a,b,c,d,e,f){a={init:function(a){var c=this;a.forEach(function(a){b("VirtualCursorStatus").add(a,c._log)},this)},_log:function(a,c,d){d===void 0&&(d=!1),a&&new(b("AccessibilityWebAssistiveTechTypedLogger"))().setIndicatedBrowsers(c).setIsVirtualCursorAction(d).log()}};e.exports=a}),null); __d("EventProfiler",["requireCond","cr:708886"],(function(a,b,c,d,e,f){e.exports=b("cr:708886")}),null); __d("EventProfilerSampler",["EventConfig"],(function(a,b,c,d,e,f){"use strict";var g=b("EventConfig").sampling||{};a={canSample:function(a){return!!g[a]},getEventSampleWeights:function(a){a.__samplingWeights==void 0&&(a.__samplingWeights={event:h(this.getEventWeight(a))});return a.__samplingWeights},getEventWeight:function(a){a=a.type in g?g[a.type]:1;return a*g.__eventDefault},getEventInteractionIDs:function(a,b){return[]}};function h(a){if(a===0)return 0;var b=g.__min||1;a=Math.round(Math.max(b,a));return Math.random()*a<1?a:0}e.exports=a}),null); __d("getParentClassesForEventProfiler",["cx"],(function(a,b,c,d,e,f,g){"use strict";function h(a){if(!a||!(a instanceof HTMLElement))return"";var b=a.id,c=a.nodeName,d=a.getAttribute("class");c=c?c.replace(/^#/,""):"unknown";b=b?"#"+b:"";d=d?" "+d.replace(/\s+/g," ").trim():"";if(a.getAttribute("rel")==="theater"){a="_342u";d=d.length?d+" "+a:a}return":"+c+b+d}function a(a){var b=[];while(a&&a instanceof HTMLElement)b.push(h(a)),a=a.parentElement;b.reverse();return b}e.exports=a}),null); __d("EventProfilerImpl",["Bootloader","EventConfig","EventProfilerAdsSessionProvider","EventProfilerSampler","ScriptPath","TimeSlice","UserAgent","getParentClassesForEventProfiler","performanceAbsoluteNow","requestAnimationFrameAcrossTransitions","setTimeoutAcrossTransitions","uniqueID"],(function(a,b,c,d,e,f){var g,h={},i={},j={},k=!1,l=0,m=new Set(["click","keydown","mousewheel","scroll"]),n=null,o=null;c={__wrapEventListenHandler:function(a){return b("EventConfig").disable_event_profiler?a:function(c,d){var e=this;if(!b("EventProfilerSampler").canSample(c))return a.call(this,c,d);var f={event:0},s=(g||(g=b("performanceAbsoluteNow")))();d.id=d.id||b("uniqueID")();var t=d.id,u,v=j[t],w=null;i[t]===void 0&&!v?(w=b("getParentClassesForEventProfiler")(d.target),f=r(d),o!=null&&o.beforeHandlers(t,c),u=a.call(this,c,d),j[t]=b("TimeSlice").getGuardedContinuation("Event Bubble Continuation")):(f=r(d),u=v(function(){j[t]=b("TimeSlice").getGuardedContinuation("Event Bubble Continuation");return a.call(e,c,d)}));v=g();if(i[t]===void 0){w=w;var x=q(d);x=x||s;var y=Math.max(s-x,0),z=null;b("UserAgent").isBrowser("Chrome")&&(z=!!d.cancelable);var A=z&&(!!d.deliberateSync||b("UserAgent").isBrowser("Chrome < 51"));i[t]={event_name:c,event_start_ms:Math.round(x),main_thread_wait_ms:Math.round(y),event_handlers_runtime_ms:0,script_path:b("ScriptPath").getScriptPath()||"<unknown>",request_animation_frame_wait_ms:0,set_timeout_wait_ms:0};h[t]={event_target_raw:w,weight:f.event,cancelable:!!z,deliberate_sync:!!A,ad_account_id:n,event_end_ms:0};y=b("EventProfilerAdsSessionProvider").sessionID;y&&(h[t].ads_session_id=y);var B=!1;m.has(c)&&(!k&&l<x&&(k=!0,B=!0),h[t].is_first_in_frame=B,h[t].is_first_overlapping=B);b("requestAnimationFrameAcrossTransitions")(function(){var a=(g||(g=b("performanceAbsoluteNow")))();i[t].request_animation_frame_wait_ms=Math.round(a-h[t].event_end_ms);delete h[t].event_end_ms;var d=!1;function e(){if(d)return;d=!0;var e=(g||(g=b("performanceAbsoluteNow")))();i[t].set_timeout_wait_ms=Math.round(e-a);p(t,s,e);m.has(c)&&B&&(k=!1,l=e);e=j[t];e&&(b("TimeSlice").cancel(e),delete j[t]);delete i[t];delete h[t]}b("requestAnimationFrameAcrossTransitions")(e);b("setTimeoutAcrossTransitions")(e,0)})}i[t].event_handlers_runtime_ms+=v-s;h[t].event_end_ms=v;o!=null&&o.afterEachHandler(t,i[t]);return u}},setCurrentAdAccountId:function(a){n=a},setAdsConfig:function(a){o=a}};function p(a,c,d){c=i[a];c.event_handlers_runtime_ms=Math.round(c.event_handlers_runtime_ms);var e=Object.assign({},i[a],h[a]);o!=null&&o.beforeLog(a,e);e.weight&&b("Bootloader").loadModules(["WebSpeedInteractionsTypedLogger","PerfXSharedFields"],function(a,b){b.addCommonValues(e),new a().updateData(e).log()},"EventProfilerImpl")}var q=function(){function b(a){return null}if(!a.performance||!a.performance.now||!a.performance.timing||!a.performance.timing.navigationStart)return b;var c=a.performance.timing.navigationStart,d=a.CustomEvent&&(typeof a.CustomEvent==="function"||a.CustomEvent.toString().indexOf("CustomEventConstructor")>-1);d=d?new a.CustomEvent("test").timeStamp:a.document.createEvent("KeyboardEvent").timeStamp;return d&&d<=a.performance.now()?function(a){return a.timeStamp+c}:b}();function r(a){return o!=null?o.getEventSampleWeights(a):b("EventProfilerSampler").getEventSampleWeights(a)}e.exports=c}),null);