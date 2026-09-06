(() => {
    "use strict";

    const otaUrlElement = document.getElementById("ota-url");

    if (!otaUrlElement) {
        return;
    }

    /*
     * OTA 文件固定路径。
     *
     * GitHub Pages:
     * https://用户名.github.io/OTA-Update/openwrt-25.12/ota.json
     *
     * 自定义域名:
     * https://api.kejizero.xyz/openwrt-25.12/ota.json
     *
     * 不需要修改这里。
     */

    const basePath =
        window.location.pathname
            .replace(/\/index\.html$/, "")
            .replace(/\/$/, "");

    const otaPath =
        `${basePath}/openwrt-25.12/ota.json`;

    const otaUrl =
        `${window.location.origin}${otaPath}`;

    otaUrlElement.textContent = otaUrl;
})();
