import React from "react";
import { useLocation } from "react-router-dom";
//import useWindowDimensions from "components/helpers/UseWindowDimensions";

const Title = "npm quick reference";
const Created = "October 17, 2022";

export const Bnpm = () => {
  const location = useLocation();
  if (location.pathname.toString() === "/blog") {
    return (
      <span>
        <span className="blog">{Title}</span>
        <h2 className="itemDate">{Created}</h2>
      </span>
    );
  } else {
    return (
    <>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n/* cspell:disable-file */\n/* webkit printing magic: print all background colors */\nhtml {\n\t-webkit-print-color-adjust: exact;\n}\n* {\n\tbox-sizing: border-box;\n\t-webkit-print-color-adjust: exact;\n}\n\nhtml,\nbody {\n\tmargin: 0;\n\tpadding: 0;\n}\n@media only screen {\n\tbody {\n\t\tmargin: 2em auto;\n\t\tmax-width: 900px;\n\t\tcolor: rgb(55, 53, 47);\n\t}\n}\n\nbody {\n\tline-height: 1.5;\n\twhite-space: none;\n}\n\na,\na.visited {\n\tcolor: inherit;\n\ttext-decoration: underline;\n}\n\n.pdf-relative-link-path {\n\tfont-size: 80%;\n\tcolor: #444;\n}\n\nh1,\nh2,\nh3 {\n\tletter-spacing: -0.01em;\n\tline-height: 1.2;\n\tfont-weight: 600;\n\tmargin-bottom: 0;\n}\n\n.page-title {\n\tfont-size: 2.5rem;\n\tfont-weight: 700;\n\tmargin-top: 0;\n\tmargin-bottom: 0.75em;\n}\n\nh1 {\n\tfont-size: 1.875rem;\n\tmargin-top: 1.875rem;\n}\n\nh2 {\n\tfont-size: 1.5rem;\n\tmargin-top: 1.5rem;\n}\n\nh3 {\n\tfont-size: 1.25rem;\n\tmargin-top: 1.25rem;\n}\n\n.source {\n\tborder: 1px solid #ddd;\n\tborder-radius: 3px;\n\tpadding: 1.5em;\n\tword-break: break-all;\n}\n\n.callout {\n\tborder-radius: 3px;\n\tpadding: 1rem;\n}\n\nfigure {\n\tmargin: 1.25em 0;\n\tpage-break-inside: avoid;\n}\n\nfigcaption {\n\topacity: 0.5;\n\tfont-size: 85%;\n\tmargin-top: 0.5em;\n}\n\nmark {\n\tbackground-color: transparent;\n}\n\n.indented {\n\tpadding-left: 1.5em;\n}\n\nhr {\n\tbackground: transparent;\n\tdisplay: block;\n\twidth: 100%;\n\theight: 1px;\n\tvisibility: visible;\n\tborder: none;\n\tborder-bottom: 1px solid rgba(55, 53, 47, 0.09);\n}\n\nimg {\n\tmax-width: 100%;\n}\n\n@media only print {\n\timg {\n\t\tmax-height: 100vh;\n\t\tobject-fit: contain;\n\t}\n}\n\n@page {\n\tmargin: 1in;\n}\n\n.collection-content {\n\tfont-size: 0.875rem;\n}\n\n.column-list {\n\tdisplay: flex;\n\tjustify-content: space-between;\n}\n\n.column {\n\tpadding: 0 1em;\n}\n\n.column:first-child {\n\tpadding-left: 0;\n}\n\n.column:last-child {\n\tpadding-right: 0;\n}\n\n.table_of_contents-item {\n\tdisplay: block;\n\tfont-size: 0.875rem;\n\tline-height: 1.3;\n\tpadding: 0.125rem;\n}\n\n.table_of_contents-indent-1 {\n\tmargin-left: 1.5rem;\n}\n\n.table_of_contents-indent-2 {\n\tmargin-left: 3rem;\n}\n\n.table_of_contents-indent-3 {\n\tmargin-left: 4.5rem;\n}\n\n.table_of_contents-link {\n\ttext-decoration: none;\n\topacity: 0.7;\n\tborder-bottom: 1px solid rgba(55, 53, 47, 0.18);\n}\n\ntable,\nth,\ntd {\n\tborder: 1px solid rgba(55, 53, 47, 0.09);\n\tborder-collapse: collapse;\n}\n\ntable {\n\tborder-left: none;\n\tborder-right: none;\n}\n\nth,\ntd {\n\tfont-weight: normal;\n\tpadding: 0.25em 0.5em;\n\tline-height: 1.5;\n\tmin-height: 1.5em;\n\ttext-align: left;\n}\n\nth {\n\tcolor: rgba(55, 53, 47, 0.6);\n}\n\nol,\nul {\n\tmargin: 0;\n\tmargin-block-start: 0.6em;\n\tmargin-block-end: 0.6em;\n}\n\nli > ol:first-child,\nli > ul:first-child {\n\tmargin-block-start: 0.6em;\n}\n\nul > li {\n\tlist-style: disc;\n}\n\nul.to-do-list {\n\ttext-indent: -1.7em;\n}\n\nul.to-do-list > li {\n\tlist-style: none;\n}\n\n.to-do-children-checked {\n\ttext-decoration: line-through;\n\topacity: 0.375;\n}\n\nul.toggle > li {\n\tlist-style: none;\n}\n\nul {\n\tpadding-inline-start: 1.7em;\n}\n\nul > li {\n\tpadding-left: 0.1em;\n}\n\nol {\n\tpadding-inline-start: 1.6em;\n}\n\nol > li {\n\tpadding-left: 0.2em;\n}\n\n.mono ol {\n\tpadding-inline-start: 2em;\n}\n\n.mono ol > li {\n\ttext-indent: -0.4em;\n}\n\n.toggle {\n\tpadding-inline-start: 0em;\n\tlist-style-type: none;\n}\n\n/* Indent toggle children */\n.toggle > li > details {\n\tpadding-left: 1.7em;\n}\n\n.toggle > li > details > summary {\n\tmargin-left: -1.1em;\n}\n\n.selected-value {\n\tdisplay: inline-block;\n\tpadding: 0 0.5em;\n\tbackground: rgba(206, 205, 202, 0.5);\n\tborder-radius: 3px;\n\tmargin-right: 0.5em;\n\tmargin-top: 0.3em;\n\tmargin-bottom: 0.3em;\n\twhite-space: nowrap;\n}\n\n.collection-title {\n\tdisplay: inline-block;\n\tmargin-right: 1em;\n}\n\n.simple-table {\n\tmargin-top: 1em;\n\tfont-size: 0.875rem;\n\tempty-cells: show;\n}\n.simple-table td {\n\theight: 29px;\n\tmin-width: 120px;\n}\n\n.simple-table th {\n\theight: 29px;\n\tmin-width: 120px;\n}\n\n.simple-table-header-color {\n\tbackground: rgb(247, 246, 243);\n\tcolor: black;\n}\n.simple-table-header {\n\tfont-weight: 500;\n}\n\ntime {\n\topacity: 0.5;\n}\n\n.icon {\n\tdisplay: inline-block;\n\tmax-width: 1.2em;\n\tmax-height: 1.2em;\n\ttext-decoration: none;\n\tvertical-align: text-bottom;\n\tmargin-right: 0.5em;\n}\n\nimg.icon {\n\tborder-radius: 3px;\n}\n\n.user-icon {\n\twidth: 1.5em;\n\theight: 1.5em;\n\tborder-radius: 100%;\n\tmargin-right: 0.5rem;\n}\n\n.user-icon-inner {\n\tfont-size: 0.8em;\n}\n\n.text-icon {\n\tborder: 1px solid #000;\n\ttext-align: center;\n}\n\n.page-cover-image {\n\tdisplay: block;\n\tobject-fit: cover;\n\twidth: 100%;\n\tmax-height: 30vh;\n}\n\n.page-header-icon {\n\tfont-size: 3rem;\n\tmargin-bottom: 1rem;\n}\n\n.page-header-icon-with-cover {\n\tmargin-top: -0.72em;\n\tmargin-left: 0.07em;\n}\n\n.page-header-icon img {\n\tborder-radius: 3px;\n}\n\n.link-to-page {\n\tmargin: 1em 0;\n\tpadding: 0;\n\tborder: none;\n\tfont-weight: 500;\n}\n\np > .user {\n\topacity: 0.5;\n}\n\ntd > .user,\ntd > time {\n\twhite-space: nowrap;\n}\n\ninput[type=\"checkbox\"] {\n\ttransform: scale(1.5);\n\tmargin-right: 0.6em;\n\tvertical-align: middle;\n}\n\np {\n\tmargin-top: 0.5em;\n\tmargin-bottom: 0.5em;\n}\n\n.image {\n\tborder: none;\n\tmargin: 1.5em 0;\n\tpadding: 0;\n\tborder-radius: 0;\n\ttext-align: center;\n}\n\n.code,\ncode {\n\tbackground: rgba(135, 131, 120, 0.15);\n\tborder-radius: 3px;\n\tpadding: 0.2em 0.4em;\n\tborder-radius: 3px;\n\tfont-size: 85%;\n\ttab-size: 2;\n}\n\ncode {\n\tcolor: #eb5757;\n}\n\n.code {\n\tpadding: 1.5em 1em;\n}\n\n.code-wrap {\n\twhite-space: pre-wrap;\n\tword-break: break-all;\n}\n\n.code > code {\n\tbackground: none;\n\tpadding: 0;\n\tfont-size: 100%;\n\tcolor: inherit;\n}\n\nblockquote {\n\tfont-size: 1.25em;\n\tmargin: 1em 0;\n\tpadding-left: 1em;\n\tborder-left: 3px solid rgb(55, 53, 47);\n}\n\n.bookmark {\n\ttext-decoration: none;\n\tmax-height: 8em;\n\tpadding: 0;\n\tdisplay: flex;\n\twidth: 100%;\n\talign-items: stretch;\n}\n\n.bookmark-title {\n\tfont-size: 0.85em;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n\theight: 1.75em;\n\twhite-space: nowrap;\n}\n\n.bookmark-text {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.bookmark-info {\n\tflex: 4 1 180px;\n\tpadding: 12px 14px 14px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n}\n\n.bookmark-image {\n\twidth: 33%;\n\tflex: 1 1 180px;\n\tdisplay: block;\n\tposition: relative;\n\tobject-fit: cover;\n\tborder-radius: 1px;\n}\n\n.bookmark-description {\n\tcolor: rgba(55, 53, 47, 0.6);\n\tfont-size: 0.75em;\n\toverflow: hidden;\n\tmax-height: 4.5em;\n\tword-break: break-word;\n}\n\n.bookmark-href {\n\tfont-size: 0.75em;\n\tmargin-top: 0.25em;\n}\n\n.sans { font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\"; }\n.code { font-family: \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace; }\n.serif { font-family: Lyon-Text, Georgia, ui-serif, serif; }\n.mono { font-family: iawriter-mono, Nitti, Menlo, Courier, monospace; }\n.pdf .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK JP'; }\n.pdf:lang(zh-CN) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK SC'; }\n.pdf:lang(zh-TW) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK TC'; }\n.pdf:lang(ko-KR) .sans { font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, \"Apple Color Emoji\", Arial, sans-serif, \"Segoe UI Emoji\", \"Segoe UI Symbol\", 'Twemoji', 'Noto Color Emoji', 'Noto Sans CJK KR'; }\n.pdf .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }\n.pdf:lang(zh-CN) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }\n.pdf:lang(zh-TW) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }\n.pdf:lang(ko-KR) .code { font-family: Source Code Pro, \"SFMono-Regular\", Menlo, Consolas, \"PT Mono\", \"Liberation Mono\", Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }\n.pdf .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK JP'; }\n.pdf:lang(zh-CN) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK SC'; }\n.pdf:lang(zh-TW) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK TC'; }\n.pdf:lang(ko-KR) .serif { font-family: PT Serif, Lyon-Text, Georgia, ui-serif, serif, 'Twemoji', 'Noto Color Emoji', 'Noto Serif CJK KR'; }\n.pdf .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK JP'; }\n.pdf:lang(zh-CN) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK SC'; }\n.pdf:lang(zh-TW) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK TC'; }\n.pdf:lang(ko-KR) .mono { font-family: PT Mono, iawriter-mono, Nitti, Menlo, Courier, monospace, 'Twemoji', 'Noto Color Emoji', 'Noto Sans Mono CJK KR'; }\n.highlight-default {\n\tcolor: rgba(55, 53, 47, 1);\n}\n.highlight-gray {\n\tcolor: rgba(120, 119, 116, 1);\n\tfill: rgba(120, 119, 116, 1);\n}\n.highlight-brown {\n\tcolor: rgba(159, 107, 83, 1);\n\tfill: rgba(159, 107, 83, 1);\n}\n.highlight-orange {\n\tcolor: rgba(217, 115, 13, 1);\n\tfill: rgba(217, 115, 13, 1);\n}\n.highlight-yellow {\n\tcolor: rgba(203, 145, 47, 1);\n\tfill: rgba(203, 145, 47, 1);\n}\n.highlight-teal {\n\tcolor: rgba(68, 131, 97, 1);\n\tfill: rgba(68, 131, 97, 1);\n}\n.highlight-blue {\n\tcolor: rgba(51, 126, 169, 1);\n\tfill: rgba(51, 126, 169, 1);\n}\n.highlight-purple {\n\tcolor: rgba(144, 101, 176, 1);\n\tfill: rgba(144, 101, 176, 1);\n}\n.highlight-pink {\n\tcolor: rgba(193, 76, 138, 1);\n\tfill: rgba(193, 76, 138, 1);\n}\n.highlight-red {\n\tcolor: rgba(212, 76, 71, 1);\n\tfill: rgba(212, 76, 71, 1);\n}\n.highlight-gray_background {\n\tbackground: rgba(241, 241, 239, 1);\n}\n.highlight-brown_background {\n\tbackground: rgba(244, 238, 238, 1);\n}\n.highlight-orange_background {\n\tbackground: rgba(251, 236, 221, 1);\n}\n.highlight-yellow_background {\n\tbackground: rgba(251, 243, 219, 1);\n}\n.highlight-teal_background {\n\tbackground: rgba(237, 243, 236, 1);\n}\n.highlight-blue_background {\n\tbackground: rgba(231, 243, 248, 1);\n}\n.highlight-purple_background {\n\tbackground: rgba(244, 240, 247, 0.8);\n}\n.highlight-pink_background {\n\tbackground: rgba(249, 238, 243, 0.8);\n}\n.highlight-red_background {\n\tbackground: rgba(253, 235, 236, 1);\n}\n.block-color-default {\n\tcolor: inherit;\n\tfill: inherit;\n}\n.block-color-gray {\n\tcolor: rgba(120, 119, 116, 1);\n\tfill: rgba(120, 119, 116, 1);\n}\n.block-color-brown {\n\tcolor: rgba(159, 107, 83, 1);\n\tfill: rgba(159, 107, 83, 1);\n}\n.block-color-orange {\n\tcolor: rgba(217, 115, 13, 1);\n\tfill: rgba(217, 115, 13, 1);\n}\n.block-color-yellow {\n\tcolor: rgba(203, 145, 47, 1);\n\tfill: rgba(203, 145, 47, 1);\n}\n.block-color-teal {\n\tcolor: rgba(68, 131, 97, 1);\n\tfill: rgba(68, 131, 97, 1);\n}\n.block-color-blue {\n\tcolor: rgba(51, 126, 169, 1);\n\tfill: rgba(51, 126, 169, 1);\n}\n.block-color-purple {\n\tcolor: rgba(144, 101, 176, 1);\n\tfill: rgba(144, 101, 176, 1);\n}\n.block-color-pink {\n\tcolor: rgba(193, 76, 138, 1);\n\tfill: rgba(193, 76, 138, 1);\n}\n.block-color-red {\n\tcolor: rgba(212, 76, 71, 1);\n\tfill: rgba(212, 76, 71, 1);\n}\n.block-color-gray_background {\n\tbackground: rgba(241, 241, 239, 1);\n}\n.block-color-brown_background {\n\tbackground: rgba(244, 238, 238, 1);\n}\n.block-color-orange_background {\n\tbackground: rgba(251, 236, 221, 1);\n}\n.block-color-yellow_background {\n\tbackground: rgba(251, 243, 219, 1);\n}\n.block-color-teal_background {\n\tbackground: rgba(237, 243, 236, 1);\n}\n.block-color-blue_background {\n\tbackground: rgba(231, 243, 248, 1);\n}\n.block-color-purple_background {\n\tbackground: rgba(244, 240, 247, 0.8);\n}\n.block-color-pink_background {\n\tbackground: rgba(249, 238, 243, 0.8);\n}\n.block-color-red_background {\n\tbackground: rgba(253, 235, 236, 1);\n}\n.select-value-color-pink { background-color: rgba(245, 224, 233, 1); }\n.select-value-color-purple { background-color: rgba(232, 222, 238, 1); }\n.select-value-color-green { background-color: rgba(219, 237, 219, 1); }\n.select-value-color-gray { background-color: rgba(227, 226, 224, 1); }\n.select-value-color-opaquegray { background-color: rgba(255, 255, 255, 0.0375); }\n.select-value-color-orange { background-color: rgba(250, 222, 201, 1); }\n.select-value-color-brown { background-color: rgba(238, 224, 218, 1); }\n.select-value-color-red { background-color: rgba(255, 226, 221, 1); }\n.select-value-color-yellow { background-color: rgba(253, 236, 200, 1); }\n.select-value-color-blue { background-color: rgba(211, 229, 239, 1); }\n\n.checkbox {\n\tdisplay: inline-flex;\n\tvertical-align: text-bottom;\n\twidth: 16;\n\theight: 16;\n\tbackground-size: 16px;\n\tmargin-left: 2px;\n\tmargin-right: 5px;\n}\n\n.checkbox-on {\n\tbackground-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%2216%22%20height%3D%2216%22%20fill%3D%22%2358A9D7%22%2F%3E%0A%3Cpath%20d%3D%22M6.71429%2012.2852L14%204.9995L12.7143%203.71436L6.71429%209.71378L3.28571%206.2831L2%207.57092L6.71429%2012.2852Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\n.checkbox-off {\n\tbackground-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20x%3D%220.75%22%20y%3D%220.75%22%20width%3D%2214.5%22%20height%3D%2214.5%22%20fill%3D%22white%22%20stroke%3D%22%2336352F%22%20stroke-width%3D%221.5%22%2F%3E%0A%3C%2Fsvg%3E\");\n}\n\t\n",
          }}
          />
          <main className="container">
        <article
          id="4ff90478-45b6-4541-b1ad-4dfc4d5700c6"
          className="blog"
        >
          <header>
            <img
              className="page-cover-image" src=
              "media/npmpackagesw640.jpg"
              alt=""
              style={{ objectPosition: "center 50%" }}
            />
            <h1 className="page-title">npm</h1>
          </header>
          <div className="page-body">
            <figure id="8cc19507-b6e8-4ba3-a6e4-7f951685f088">
              <a href="https://docs.npmjs.com/" className="bookmark source">
                <div className="bookmark-info">
                  <div className="bookmark-text">
                    <div className="bookmark-title">npm Docs</div>
                    <div className="bookmark-description">
                      Documentation for the npm registry, website, and
                      command-line interface
                    </div>
                  </div>
                  <div className="bookmark-href">
                    <img
                      src="https://docs.npmjs.com/favicon-32x32.png?v=f44ec608ba91563f864a30a276cd9065"
                      alt=""
                      className="icon bookmark-icon"
                    />
                    https://docs.npmjs.com/
                  </div>
                </div>
                <img
                  src="https://user-images.githubusercontent.com/29712634/81721690-e2fb5d80-9445-11ea-8602-4b2294c964f3.png"
                  alt=""
                  className="bookmark-image"
                />
              </a>
            </figure>
            <figure id="a0a53d78-a320-4494-a512-18d52cf3db6d">
              <a
                href="https://docs.npmjs.com/cli/v8/configuring-npm/package-json"
                className="bookmark source"
              >
                <div className="bookmark-info">
                  <div className="bookmark-text">
                    <div className="bookmark-title">
                      package.json | npm Docs
                    </div>
                    <div className="bookmark-description">
                      This document is all you need to know about what's
                      required in your package.json file. It must be actual
                      JSON, not just a JavaScript object literal. A lot of the
                      behavior described in this document is affected by the
                      config settings described in .
                    </div>
                  </div>
                  <div className="bookmark-href">
                    <img
                      src="https://docs.npmjs.com/favicon-32x32.png?v=f44ec608ba91563f864a30a276cd9065"
                      alt=""
                      className="icon bookmark-icon"
                    />
                    https://docs.npmjs.com/cli/v8/configuring-npm/package-json
                  </div>
                </div>
                <img
                  src="https://user-images.githubusercontent.com/29712634/81721690-e2fb5d80-9445-11ea-8602-4b2294c964f3.png"
                  alt=""
                  className="bookmark-image"
                />
              </a>
            </figure>
            <ul
              id="9b316bfa-8ca9-44bc-b173-ec23a6f83646"
              className="bulleted-list"
            >
              <li style={{ listStyleType: "disc" }}>S is the same as --save</li>
            </ul>
            <ul
              id="2ca3ce3c-3d5b-4f74-8114-1cb4f4d56c38"
              className="bulleted-list"
            >
              <li style={{ listStyleType: "disc" }}>
                D is the same as --save-dev
              </li>
            </ul>
            <ul
              id="dc0977b5-50cb-4cca-a88f-4534b654ebd0"
              className="bulleted-list"
            >
              <li style={{ listStyleType: "disc" }}>
                G is the same as --global
              </li>
            </ul>
            <table
              id="f647cdff-9c16-4930-954e-1782930b9209"
              className="simple-table"
            >
              <thead className="simple-table-header">
                <tr id="9e52547e-c16b-4d04-a8fb-85569ec5942d">
                  <th
                    id="ewgz"
                    className="simple-table-header-color simple-table-header"
                    style={{ width: 349 }}
                  >
                    npm how to
                  </th>
                  <th
                    id="SlUP"
                    className="simple-table-header-color simple-table-header"
                    style={{ width: 320 }}
                  />
                  <th
                    id="dG>u"
                    className="simple-table-header-color simple-table-header"
                    style={{ width: 327 }}
                  />
                </tr>
              </thead>
              <tbody>
                <tr id="894d2a08-a0bb-4dda-95e2-65c2e3d2d5e5">
                  <td
                    id="ewgz"
                    className="block-color-teal_background"
                    style={{ width: 349 }}
                  >
                    get the version of an installed package
                  </td>
                  <td
                    id="SlUP"
                    className="block-color-teal_background"
                    style={{ width: 320 }}
                  >
                    npm list &lt;package-name&gt;
                  </td>
                  <td
                    id="dG>u"
                    className="block-color-teal_background"
                    style={{ width: 327 }}
                  />
                </tr>
                <tr id="0ec315bb-c7a1-424d-a4a8-55e05e384a2c">
                  <td
                    id="ewgz"
                    className="block-color-pink_background"
                    style={{ width: 349 }}
                  >
                    list globally installed packages
                  </td>
                  <td
                    id="SlUP"
                    className="block-color-pink_background"
                    style={{ width: 320 }}
                  >
                    npm list -g npm ls --depth=0 -g
                  </td>
                  <td
                    id="dG>u"
                    className="block-color-pink_background"
                    style={{ width: 327 }}
                  />
                </tr>
                <tr id="521d22b1-47e0-4bfd-82f9-feaa5d058b89">
                  <td
                    id="ewgz"
                    className="block-color-pink_background"
                    style={{ width: 349 }}
                  >
                    list local installed packages
                  </td>
                  <td
                    id="SlUP"
                    className="block-color-pink_background"
                    style={{ width: 320 }}
                  >
                    npm list npm ls --depth=0
                  </td>
                  <td
                    id="dG>u"
                    className="block-color-pink_background"
                    style={{ width: 327 }}
                  />
                </tr>
                <tr id="29d11c2e-0766-4322-b09b-d9925078d6e5">
                  <td
                    id="ewgz"
                    className="block-color-brown_background"
                    style={{ width: 349 }}
                  >
                    create a package.json file
                  </td>
                  <td
                    id="SlUP"
                    className="block-color-brown_background"
                    style={{ width: 320 }}
                  >
                    npm init
                  </td>
                  <td
                    id="dG>u"
                    className="block-color-brown_background"
                    style={{ width: 327 }}
                  />
                </tr>
                <tr id="1b2d2e73-1629-40ad-8ce2-8f98c614c413">
                  <td
                    id="ewgz"
                    className="block-color-brown_background"
                    style={{ width: 349 }}
                  >
                    generate a package-lock file
                  </td>
                  <td
                    id="SlUP"
                    className="block-color-brown_background"
                    style={{ width: 320 }}
                  >
                    npm install --package-lock-only
                  </td>
                  <td
                    id="dG>u"
                    className="block-color-brown_background"
                    style={{ width: 327 }}
                  />
                </tr>
                <tr id="2779aeed-7f14-4d0b-bf2c-81739583d679">
                  <td
                    id="ewgz"
                    className="block-color-yellow_background"
                    style={{ width: 349 }}
                  >
                    install a package
                  </td>
                  <td
                    id="SlUP"
                    className="block-color-yellow_background"
                    style={{ width: 320 }}
                  >
                    npm i &lt;package-name&gt;
                  </td>
                  <td
                    id="dG>u"
                    className="block-color-yellow_background"
                    style={{ width: 327 }}
                  />
                </tr>
                <tr id="57697e73-43ce-4600-9bed-5f3634320dd5">
                  <td
                    id="ewgz"
                    className="block-color-yellow_background"
                    style={{ width: 349 }}
                  >
                    install version greater than or equal to
                  </td>
                  <td
                    id="SlUP"
                    className="block-color-yellow_background"
                    style={{ width: 320 }}
                  >
                    npm i @material-ui/pickers@"&gt;=4.0.0-alpha.8"
                  </td>
                  <td
                    id="dG>u"
                    className="block-color-yellow_background"
                    style={{ width: 327 }}
                  />
                </tr>
                <tr id="74880d70-01f8-4060-9797-7089a43e3cf2">
                  <td
                    id="ewgz"
                    className="block-color-yellow_background"
                    style={{ width: 349 }}
                  >
                    install a specific version
                  </td>
                  <td
                    id="SlUP"
                    className="block-color-yellow_background"
                    style={{ width: 320 }}
                  >
                    npm install --save react@16.0.0
                  </td>
                  <td
                    id="dG>u"
                    className="block-color-yellow_background"
                    style={{ width: 327 }}
                  />
                </tr>
                <tr id="dcfae802-3e13-49f3-8f20-cb1fb1203ce2">
                  <td
                    id="ewgz"
                    className="block-color-yellow_background"
                    style={{ width: 349 }}
                  >
                    install in version range
                  </td>
                  <td
                    id="SlUP"
                    className="block-color-yellow_background"
                    style={{ width: 320 }}
                  >
                    npm install sax@"&gt;=0.1.0 &lt;0.2.0" npm install
                    @myorg/privatepackage@"16 - 17"
                  </td>
                  <td
                    id="dG>u"
                    className="block-color-yellow_background"
                    style={{ width: 327 }}
                  />
                </tr>
                <tr id="3e0e045f-27b1-4f9a-8f1b-ef2f5f7f7e39">
                  <td
                    id="ewgz"
                    className="block-color-yellow_background"
                    style={{ width: 349 }}
                  >
                    install latest version regardless of your semver
                  </td>
                  <td
                    id="SlUP"
                    className="block-color-yellow_background"
                    style={{ width: 320 }}
                  >
                    {" "}
                    npm install --save react@latest
                  </td>
                  <td
                    id="dG>u"
                    className="block-color-yellow_background"
                    style={{ width: 327 }}
                  />
                </tr>
                <tr id="18f23bd6-ed41-4734-ac1e-04753b233970">
                  <td
                    id="ewgz"
                    className="block-color-orange_background"
                    style={{ width: 349 }}
                  >
                    update an installed package to the latest version allowed by
                    the semver in your package.json
                  </td>
                  <td
                    id="SlUP"
                    className="block-color-orange_background"
                    style={{ width: 320 }}
                  >
                    npm up &lt;package&gt; npm up -g &lt;package&gt;
                    &lt;package&gt; &lt;package&gt;
                  </td>
                  <td
                    id="dG>u"
                    className="block-color-orange_background"
                    style={{ width: 327 }}
                  >
                    So, if your package.json says "react": "^15.0.0" and you run{" "}
                    <em>npm up react</em> your package.json will now say
                    "react": "^15.6.2" (the latest current version of react 15)
                  </td>
                </tr>
                <tr id="2673d59b-a1fe-48b2-b106-963b9ba4a1ed">
                  <td
                    id="ewgz"
                    className="block-color-orange_background"
                    style={{ width: 349 }}
                  >
                    update to the latest version, ignoring the semver in
                    package.json
                  </td>
                  <td
                    id="SlUP"
                    className="block-color-orange_background"
                    style={{ width: 320 }}
                  >
                    npm install --save react@latest
                  </td>
                  <td
                    id="dG>u"
                    className="block-color-orange_background"
                    style={{ width: 327 }}
                  />
                </tr>
                <tr id="2c637757-8fab-4b43-8601-b3a99cdf02c2">
                  <td
                    id="ewgz"
                    className="block-color-orange_background"
                    style={{ width: 349 }}
                  >
                    update to a specific version, ignoring the semver in
                    package.json
                  </td>
                  <td
                    id="SlUP"
                    className="block-color-orange_background"
                    style={{ width: 320 }}
                  >
                    npm install --save react@16.0.0
                  </td>
                  <td
                    id="dG>u"
                    className="block-color-orange_background"
                    style={{ width: 327 }}
                  />
                </tr>
                <tr id="a9be9da8-bdad-4249-9b89-cf612c8db6de">
                  <td
                    id="ewgz"
                    className="block-color-teal_background"
                    style={{ width: 349 }}
                  >
                    list all outdated local packages
                  </td>
                  <td
                    id="SlUP"
                    className="block-color-teal_background"
                    style={{ width: 320 }}
                  >
                    npm outdated
                  </td>
                  <td
                    id="dG>u"
                    className="block-color-teal_background"
                    style={{ width: 327 }}
                  />
                </tr>
                <tr id="0042a242-8bcc-43ff-9f81-ed43770eb4ae">
                  <td
                    id="ewgz"
                    className="block-color-teal_background"
                    style={{ width: 349 }}
                  >
                    list all outdated global packages
                  </td>
                  <td
                    id="SlUP"
                    className="block-color-teal_background"
                    style={{ width: 320 }}
                  >
                    npm outdated -g --depth=0
                  </td>
                  <td
                    id="dG>u"
                    className="block-color-teal_background"
                    style={{ width: 327 }}
                  />
                </tr>
                <tr id="855cf1a9-1507-4f69-9a20-b54b08c22787">
                  <td
                    id="ewgz"
                    className="block-color-blue_background"
                    style={{ width: 349 }}
                  >
                    list all package versions available for download
                  </td>
                  <td
                    id="SlUP"
                    className="block-color-blue_background"
                    style={{ width: 320 }}
                  >
                    npm show &lt;package&gt; versions
                  </td>
                  <td
                    id="dG>u"
                    className="block-color-blue_background"
                    style={{ width: 327 }}
                  />
                </tr>
                <tr id="270512a0-1c64-4cb8-91b0-9dc51499bdc8">
                  <td
                    id="ewgz"
                    className="block-color-blue_background"
                    style={{ width: 349 }}
                  >
                    list all the dependencies for a package version
                  </td>
                  <td
                    id="SlUP"
                    className="block-color-blue_background"
                    style={{ width: 320 }}
                  >
                    npm view react@17.0.0 dependencies
                  </td>
                  <td
                    id="dG>u"
                    className="block-color-blue_background"
                    style={{ width: 327 }}
                  >
                    <a href="https://docs.npmjs.com/cli/v8/commands/npm-view">
                      https://docs.npmjs.com/cli/v8/commands/npm-view
                    </a>
                  </td>
                </tr>
                <tr id="861d3a55-a365-4c16-9e78-efc8812f410b">
                  <td
                    id="ewgz"
                    className="block-color-purple_background"
                    style={{ width: 349 }}
                  >
                    list all packages where name, desc, author, date, latest
                    version, or keywords include your search term{" "}
                  </td>
                  <td
                    id="SlUP"
                    className="block-color-purple_background"
                    style={{ width: 320 }}
                  >
                    npm search react
                  </td>
                  <td
                    id="dG>u"
                    className="block-color-purple_background"
                    style={{ width: 327 }}
                  />
                </tr>
                <tr id="97494fa6-1068-4937-a493-ba09418ca753">
                  <td
                    id="ewgz"
                    className="block-color-gray_background"
                    style={{ width: 349 }}
                  >
                    run test scripts from a menu
                  </td>
                  <td
                    id="SlUP"
                    className="block-color-gray_background"
                    style={{ width: 320 }}
                  >
                    npm t
                  </td>
                  <td
                    id="dG>u"
                    className="block-color-gray_background"
                    style={{ width: 327 }}
                  />
                </tr>
                <tr id="a135dae2-1450-4333-bb07-eead9632a13d">
                  <td
                    id="ewgz"
                    className="block-color-pink_background"
                    style={{ width: 349 }}
                  >
                    upgrade npm on windows
                  </td>
                  <td
                    id="SlUP"
                    className="block-color-pink_background"
                    style={{ width: 320 }}
                  >
                    npm i -g npm@latest
                  </td>
                  <td
                    id="dG>u"
                    className="block-color-pink_background"
                    style={{ width: 327 }}
                  />
                </tr>
                <tr id="9f37e57f-efdf-4ded-8d3c-92b7a1a85e83">
                  <td
                    id="ewgz"
                    className="block-color-pink_background"
                    style={{ width: 349 }}
                  >
                    upgrade npm on linux
                  </td>
                  <td
                    id="SlUP"
                    className="block-color-pink_background"
                    style={{ width: 320 }}
                  >
                    nvm install-latest-npm
                  </td>
                  <td
                    id="dG>u"
                    className="block-color-pink_background"
                    style={{ width: 327 }}
                  />
                </tr>
                <tr id="d29504e6-c69b-4a4d-878b-6a0f687349e4">
                  <td
                    id="ewgz"
                    className="block-color-red_background"
                    style={{ width: 349 }}
                  >
                    verify npm settings (can take a long time)
                  </td>
                  <td
                    id="SlUP"
                    className="block-color-red_background"
                    style={{ width: 320 }}
                  >
                    npm doctor
                  </td>
                  <td
                    id="dG>u"
                    className="block-color-red_background"
                    style={{ width: 327 }}
                  />
                </tr>
                <tr id="75b45d49-3a80-444f-992f-6e9ef05bf18f">
                  <td
                    id="ewgz"
                    className="block-color-red_background"
                    style={{ width: 349 }}
                  >
                    view or change npm registry settings
                  </td>
                  <td
                    id="SlUP"
                    className="block-color-red_background"
                    style={{ width: 320 }}
                  >
                    npm profile get [&lt;key&gt;] npm profile set &lt;key&gt;
                    &lt;value&gt; Run "npm help profile" for more info
                  </td>
                  <td
                    id="dG>u"
                    className="block-color-red_background"
                    style={{ width: 327 }}
                  />
                </tr>
              </tbody>
            </table>

          </div>
        </article>
        </main>
      </>
    );
  }
};
