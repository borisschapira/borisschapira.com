/* Piwik */
var _paq = _paq || [];
// tracker methods like "setCustomDimension" should be called before "trackPageView"
//_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
    var u = "https://filature.borisschapira.com/";
    _paq.push(['setTrackerUrl', u + 'p']);
    _paq.push(['setSiteId', '1']);
    var d = document,
        g = d.createElement('script'),
        s = d.getElementsByTagName('script')[0];
    g.type = 'text/javascript';
    g.id = 'piwik-suivre';
    g.async = true;
    g.defer = true;
    g.src = u + 'suivre';
    s.parentNode.insertBefore(g, s);
})();