import React, {useMemo} from "react";
import objectPath from "object-path";
// LayoutContext
import {useHtmlClassService} from "components/layout/MetronicLayout";
// Import Layout components
import {Header} from "components/dashboard/components/Header";
import {HeaderMobile} from "components/dashboard/components/HeaderMobile";
import {Aside} from "components/dashboard/components/aside/Aside";
import {Footer} from "components/dashboard/components/Footer";
import {LayoutInit} from "components/dashboard/components/layout/LayoutInit";
import {SubHeader} from "components/dashboard/components/SubHeader";
//import {QuickPanel} from "components/dashboard/components/QuickPanel";
import {QuickUser} from "components/dashboard/components/QuickUser";
import {ScrollTop} from "components/dashboard/components/ScrollTop";

export function Layout({ children }) {
    const uiService = useHtmlClassService();
    // Layout settings (cssClasses/cssAttributes)
    const layoutProps = useMemo(() => {
        return {
            layoutConfig: uiService.config,
            selfLayout: objectPath.get(uiService.config, "self.layout"),
            asideDisplay: objectPath.get(uiService.config, "aside.self.display"),
            subheaderDisplay: objectPath.get(uiService.config, "subheader.display"),
            desktopHeaderDisplay: objectPath.get(
                uiService.config,
                "header.self.fixed.desktop"
            ),
            contentCssClasses: uiService.getClasses("content", true),
            contentContainerClasses: uiService.getClasses("content_container", true),
            contentExtended: objectPath.get(uiService.config, "content.extended")
        };
    }, [uiService]);

    return layoutProps.selfLayout !== "blank" ? (
        <>
            {/*begin::Main*/}
            <HeaderMobile/>
            <div className="d-flex flex-column flex-root">
                {/*begin::Page*/}
                <div className="d-flex flex-row flex-column-fluid page">
                    {layoutProps.asideDisplay && (<Aside/>)}
                    {/*begin::Wrapper*/}
                    <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                        <Header/>
                        {/*begin::Content*/}
                        <div
                            id="kt_content"
                            className={`content ${layoutProps.contentCssClasses} d-flex flex-column flex-column-fluid`}
                        >
                            {layoutProps.subheaderDisplay && <SubHeader/>}
                            {/*begin::Entry*/}
                            {!layoutProps.contentExtended && (
                                <div className="d-flex flex-column-fluid">
                                    {/*begin::Container*/}
                                    <div className={layoutProps.contentContainerClasses}>
                                        {children}
                                    </div>
                                    {/*end::Container*/}
                                </div>
                            )}

                            {layoutProps.contentExtended && {children}}
                            {/*end::Entry*/}
                        </div>
                        {/*end::Content*/}
                        <Footer/>
                    </div>
                    {/*end::Wrapper*/}
                </div>
                {/*end::Page*/}
            </div>
            <QuickUser/>
          
            <ScrollTop/>
           
            {/*end::Main*/}
            <LayoutInit />
        </>
    ) : (
        // BLANK LAYOUT
        <div className="d-flex flex-column flex-root">{children}</div>
    );
}
